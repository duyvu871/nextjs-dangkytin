$session = New-Object Microsoft.PowerShell.Commands.WebRequestSession
$session.UserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
$session.Cookies.Add((New-Object System.Net.Cookie("ASP.NET_SessionId", "fkyhnnu21xdnzvxa04wq5or3", "/", "qldt.ptit.edu.vn")))
$session.Cookies.Add((New-Object System.Net.Cookie("sfwc", "zYhaOfzNIuyf4I98hTSKTdA62TnTDVDxrlJt2zb94kQ=", "/", "qldt.ptit.edu.vn")))
Invoke-WebRequest -UseBasicParsing -Uri "https://qldt.ptit.edu.vn/api/auth/login" `
-Method "POST" `
-WebSession $session `
-Headers @{
"authority"="qldt.ptit.edu.vn"
  "method"="POST"
  "path"="/api/auth/login"
  "scheme"="https"
  "accept"="application/json, text/plain, */*"
  "accept-encoding"="gzip, deflate, br, zstd"
  "accept-language"="vi;q=0.9"
  "cache-control"="no-cache"
  "idpc"="0"
  "origin"="https://qldt.ptit.edu.vn"
  "pragma"="no-cache"
  "priority"="u=1, i"
  "referer"="https://qldt.ptit.edu.vn/"
  "referrer-policy"="strict-origin-when-cross-origin"
  "sec-ch-ua"="`"Brave`";v=`"131`", `"Chromium`";v=`"131`", `"Not_A Brand`";v=`"24`""
  "sec-ch-ua-mobile"="?0"
  "sec-ch-ua-platform"="`"Windows`""
  "sec-fetch-dest"="empty"
  "sec-fetch-mode"="cors"
  "sec-fetch-site"="same-origin"
  "sec-gpc"="1"
  "ua"="KDI2933f347wbEc1NvF41dmMhgsiSyuKBauj8Q=="
} `
-ContentType "text/plain" `
-Body "username=B23DCKH026&password=5cZFJea66s%5ELe%26%269Vvdjn%259f(K6_!5!y4%5EF0OkpF5Kp(3ga%26W)&grant_type=password"