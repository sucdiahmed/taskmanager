const fs= required('fs');
const path = require('path');

const filePath = './data/tasks/json';

exports.writeTasksToFile =(tasks) =>{
    fs.writeFileSync(filePath, JSON.stringify(tasks))
}
 exports.readTasksFromFile =() => {
    i(!fs.existsSync(filePath)) {
        writeTasksToFile([])
     }
    const data = fs.readFileSync(filePath);
    return JSON.parse(data)
}