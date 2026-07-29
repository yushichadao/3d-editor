$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add('http://localhost:9000/')
$listener.Start()
Write-Host 'Server running at http://localhost:9000/'
$root = 'c:\Users\yushi\Documents\trae_projects\ffdf'
while ($listener.IsListening) {
    $ctx = $listener.GetContext()
    $url = $ctx.Request.Url.LocalPath
    if ($url -eq '/') { $url = '/index.html' }
    $file = Join-Path $root ($url.TrimStart('/'))
    if (Test-Path $file -PathType Leaf) {
        $bytes = [System.IO.File]::ReadAllBytes($file)
        $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
        $ctx.Response.StatusCode = 404
    }
    $ctx.Response.Close()
}
