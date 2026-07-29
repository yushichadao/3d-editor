$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add('http://localhost:9000/')
$listener.Start()
Write-Host 'Server running on http://localhost:9000/'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
while ($listener.IsListening) {
    $ctx = $listener.GetContext()
    $url = $ctx.Request.Url.LocalPath
    if ($url -eq '/') { $url = '/index.html' }
    $file = Join-Path $root ($url.TrimStart('/'))
    if (Test-Path $file -PathType Leaf) {
        $bytes = [System.IO.File]::ReadAllBytes($file)
        if ($file.EndsWith('.js')) { $ctx.Response.ContentType = 'application/javascript' }
        elseif ($file.EndsWith('.html')) { $ctx.Response.ContentType = 'text/html; charset=utf-8' }
        elseif ($file.EndsWith('.css')) { $ctx.Response.ContentType = 'text/css' }
        else { $ctx.Response.ContentType = 'application/octet-stream' }
        $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
        $ctx.Response.StatusCode = 404
    }
    $ctx.Response.Close()
}
