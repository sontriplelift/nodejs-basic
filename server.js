const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Run request...')
    res.setHeader('Content-Type', 'text/html');
    res.write('<h3>Hello NodeJS</h3>');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('NodeJS server is running on port 3000!')
})