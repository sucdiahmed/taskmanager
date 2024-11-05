const { readTasksFromFile } = require("../utils/fileHandler");

exports.getTasks = (req,res) => {
    const tasks = readTasksFromFile();
    res.witeHead(200,{'content-type': 'application/json'})
    res.end(JSON.stringify(tasks))

}

exports.createTasks =(req.res) =>{


}
if (req.method = 'DELETE') {
    deleteTasks(req, res);
} else {
    res.witeHead(404, 'Data Not Found', { 'content-type': 'application/json' });
    res.end(JSON.stringify({
        message: "Unknown Method required."
    }));
}
