const todoList = [];
const TODO = 'To Do'
const PROGRESS = 'In Progress';
const DONE = 'Done';
const HIGH = 'High';
const LOW = 'Low'
const STATUS = 'status';
const PRIORITY = 'priority';
const NAME = 'name';
const ID = 'id'
let idValue = 1;

function addTask(task, status = TODO, priority = HIGH) {
  todoList.push({
    id: idValue++,
    name: task,
    status: status,
    priority: priority,
  });
}

function findIndexBy(id) {
  return todoList.findIndex(function (item) {
    return item[ID] === id;
  });
}

function changeByParam(id, paramName, paramValue) {
  todoList[findIndexBy(id)][paramName] = paramValue;
}

function changeStatus(id, status) {
  changeByParam(id, STATUS, status);
}

function changePriority(id, priority) {
  changeByParam(id, PRIORITY, priority);
}

function deleteTask(id) {
  todoList.splice(findIndexBy(id), 1);
}

function showList(listArr, sortParam = STATUS) {
  const statusValueList = [TODO, PROGRESS, DONE];
  const priorityValueList = [HIGH, LOW];
  const validValueList = sortParam === PRIORITY ? priorityValueList : statusValueList;

  function outputTasksBy(sortValue, sortParam) {
    const listSortByParam = listArr.filter(function (item) {
      return item[sortParam] === sortValue;
    });

    console.log(`${sortValue}:`);

    listSortByParam.length === 0 ? console.log(` -`) :
      listSortByParam.map(function (item) {
        return item[NAME];
      }).forEach(function (item) {
        console.log(` "${item}",`);
      })
  }
  validValueList.forEach(function (sortValue) {
    outputTasksBy(sortValue, sortParam);
  })
}

function showBy(showParam) {
  showList(todoList, showParam);
}

// for tests
addTask('first task');
addTask('second task');
addTask('third task');
addTask('fourth task');
addTask('fifth task', PROGRESS);
changePriority(2, LOW);
changeStatus(4, DONE);
deleteTask(4);
// console.log('-----');
showBy(STATUS);
console.log('-----');
showBy(PRIORITY);
