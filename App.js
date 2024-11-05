const http =require('http');
const taskRouter = require('./routes/taskRouter');

const HOSTNAME = 'localhost'
const PORT = 9000

const server = http.createServer();

server.listen(PORT,HOSTNAME ((req,res)) = function () {

        if (req.ulr.startWith('/task')) {
            taskRouterr(req, res);
        } else {
            res.witeHead(404, 'NOT Found', { 'contet-type': 'application.json' });
            res.end(JSON.stringify({
                message: 'Sorry, you got loss:'
            }));
        }

        console.log('Server running on port ${PORT} ');

    })