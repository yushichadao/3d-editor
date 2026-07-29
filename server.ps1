$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add('http://localhost:9000/')
$listener.Start()
Write-Host 'Server running at http://localhost:9000/'
$root = 'c:\Users\yushi\Documents\trae_projects\ffdf'
$mime = @{
  '.html'='text/html; charset=utf-8'
  '.js'='application/javascript; charset=utf-8'
  '.css'='text/css; charset=utf-8'
  '.json'='application/json; charset=utf-8'
  '.svg'='image/svg+xml'
  '.png'='image/png'
  '.jpg'='image/jpeg'; '.jpeg'='image/jpeg'
  '.gif'='image/gif'
  '.woff'='font/woff'; '.woff2'='font/woff2'
  '.map'='application/json; charset=utf-8'
}
while ($listener.IsListening) {
    $ctx = $listener.GetContext()
    $url = $ctx.Request.Url.LocalPath
    if ($url -eq '/') { $url = '/index.html' }
    $file = Join-Path $root ($url.TrimStart('/'))
    if (Test-Path $file -PathType Leaf) {
        $bytes = [System.IO.File]::ReadAllBytes($file)
        $ext = [System.IO.Path]::GetExtension($file).ToLower()
        $ct = 'application/octet-stream'
        if ($mime.ContainsKey($ext)) { $ct = $mime[$ext] }
        $ctx.Response.ContentType = $ct
        $ctx.Response.ContentLength64 = $bytes.Length
        $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
        $ctx.Response.StatusCode = 404
        $msg = [System.Text.Encoding]::UTF8.GetBytes('404 Not Found: ' + $url)
        $ctx.Response.ContentType = 'text/plain; charset=utf-8'
        $ctx.Response.ContentLength64 = $msg.Length
        $ctx.Response.OutputStream.Write($msg, 0, $msg.Length)
    }
    $ctx.Response.Close()
}
