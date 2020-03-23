const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action = "/message" method = "POST"><input type = "text" name = "message"><button type = "submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            //parsedBody == 'message=Anita+Miring'

            let message = parsedBody.split('=')[1];
            //message == 'Anita+Miring'

            //SYNC write file
            //fs.writeFileSync('message.txt', message);

            //ASYNC write file 
            fs.writeFile('message.txt', message, (err) => {
                console.log(err);
            });

        });
        res.statusCode = 302; //redirection
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
}

//First way to export
// module.exports = {
//     handler: requestHandler,
//     otherexport: 'Some hard coded text'
// }; 

//Second way to export 
module.exports.handler = requestHandler;
module.exports.otherexport = 'Some hard coded text';