const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    let namafile = "halaman1/index.html" + q.pathname;
    fs.readFile(namafile, (err, data) => {
        if (req.url == '/') {
            fs.readFile('halaman1/index.html', (err, data) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.write(data);
                return res.end();
            })
        }
        if (err) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('file tidak ditemukan');
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        return res.end();
        
    })
   
});

server.listen(3000, () => {
    console.log('server berhasi dijalankan di https://localhost:3000');
});