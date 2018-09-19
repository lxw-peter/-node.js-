const http = require('http')
const server = http.createServer()
server.on('request',(req,res) => {
    if(req.url === '/') {
        console.log(req.headers)
        const cookie = {}
        req.headers.cookie && 
            req.headers.cookie.split('; ').forEach(item => {
                const parts = item.split('=')
                console.log(parts)
                cookie[parts[0]] =  parts[1];
            })
        console.log(cookie)
        if (cookie.username === 'liSi') {
            res.writeHeader(200, {
                'Content-Type': 'text/html; charset=utf-8'
            })
            res.end('你又来了')
        } else {
            const expiresTime = new Date(Date.now() + 10*1000).toUTCString()
            res.writeHeader(200, {
                'Content-Type': 'text/html; charset=utf-8',
                'Set-Cookie': ['username=liSi; expires=' + expiresTime,'password=123']
            })
            res.end('你好')
        }
        
        
    }else {
        res.end('404')
    }
})
server.listen(4200, () =>{
    console.log('4200 is running...')
})
