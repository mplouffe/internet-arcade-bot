'use strict';

const restify = require('restify');

const PORT = process.env.PORT || 3000;

const server = restify.createServer({
    name: 'InternetArcadeChatBot'
});

server.use(restify.plugins.bodyParser());


server.post('/dialogflow_webhook', (req, res, next) => {
    let {
        status,
        result
    } = req.body;

    console.log(req);
    console.log('Status: ', status);
    console.log('Result: ', result);

    res.send();
    return next();
});

server.listen(PORT, () => {
    console.log('Server is listening at port ', PORT);
});