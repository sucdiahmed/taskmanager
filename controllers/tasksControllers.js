const {IncomingForm} = require('formidable');
const { readTasksFromFile, writeTasksToFile } = require("../utils/fileHandler");

exports.getTasks = (req,res) => {
    const tasks = readTasksFromFile();
    res.witeHead(200,{'content-type': 'application/json'})
    res.end(JSON.stringify(tasks))

}

exports.createTasks =(req.res)   => {
    const from = new IncomingForm()

    form.parse(req, (err, fieds, files) => {
        if(err) {
            res.witeHead(400, {'content-type': 'application/json'});
            res.end(JSON.stringify({
                message: 'Error parsing from'
 
           })) 
           return;
        }   
        const tasks = readTasksFromFile()
        const newTasks = {
            id: fields.title,
            description: fields ?.description, || ''
            status: fields ?.status,|| 'pending',
            image: fileds.image ? '/uploads/${files.image.name}' :null,
        }

        tasks.push(newTasks);

        writeTasksToFile(tasks);

        if(files.image) {
            copyFileSync(files.image.path.join(__dirname, '../uploadd' + files.image.named));
            res.end(JSON.stringify(newTasks))
        }
    })    
}

exports.createTask =(req.res)   => {
}
exports.updateTask =(req,res)  => {
    res.end(JSON.stringify({
        message:'Not yet implemented'
    }))

}
exports.deleteTask =(req, res) => {
    res.end(JSON.stringify({
        message:'Not yet implemented'
    })) 
}
   


