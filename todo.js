const todoList = {};
const todo = 'To Do'
const now = 'In Progress';
const done = 'Done';

function addTask(task, status = todo) {
    if (!todoList[task]) todoList[task] = status;
}

function changeStatus(task, status) {
    if (todoList[task]) todoList[task] = status;
}

function deleteTask(task) {
    delete todoList[task];
}

function showList(obj) {

    function groupByStatus(obj, status) {
        let taskPack = '';
        for (let key in obj) {
            if (obj[key] === status) taskPack += ' "' + key + '"' + '\n';
        }
        return taskPack ? status + ':\n' + taskPack : status + ':\n -\n';
    }

    return groupByStatus(obj, todo) +
        groupByStatus(obj, now) +
        groupByStatus(obj, done);
}

addTask('first task');
addTask('second task');
addTask('third task');
addTask('fourth task', now);
changeStatus('first task', done);
deleteTask('second task');
console.log(showList(todoList));
