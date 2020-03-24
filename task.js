const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Wellcome on my new page!</title></head>');
        res.write('<body>');
        res.write('<h1>Wellcome on my new page!</h1>');
        res.write('<form action = "/createuser" method = "POST">');
        res.write('<input type = "text" name = "newuser">');
        res.write('<button type = "submit">Log In</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/users'){
        res.write('<html>');
        res.write('<head><title>Dummy list of users</title></head>');
        res.write('<body>');
        res.write('<ul><li>User 1</li></ul>');
        res.write('<ul><li>User 2</li></ul>');
        res.write('<ul><li>User 3</li></ul>');
        res.write('<ul><li>User 4</li></ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/createuser' && method === 'POST'){

        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            let username = parsedBody.split('=')[1];
        });
        res.statusCode = 302; 
        res.setHeader('Location', '/users');
        return res.end();
    }

    res.write('<html>');
    res.write('<head><title>Default webpage</title></head>');
    res.write('<body>');
    res.write('<h1>This is default webpage!</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();


});

server.listen(3000);