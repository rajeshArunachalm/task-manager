const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const filePath = './data/tasks.json';

const readData = () => JSON.parse(fs.readFileSync(filePath, 'utf8'));
const writeData = (data) => fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

exports.getTasks = (req, res) => {
  const tasks = readData();
  res.json(tasks);
};

exports.getTaskById = (req, res) => {
  const tasks = readData();
  const task = tasks.find(t => t.id === req.params.id);
  task ? res.json(task) : res.status(404).json({ message: 'Task not found' });
};

exports.createTask = (req, res) => {
  const tasks = readData();
  const newTask = { id: uuidv4(), ...req.body };
  tasks.push(newTask);
  writeData(tasks);
  res.status(201).json(newTask);
};

exports.updateTask = (req, res) => {
  const tasks = readData();
  const index = tasks.findIndex(t => t.id === req.params.id);
  if (index !== -1) {
    tasks[index] = { ...tasks[index], ...req.body };
    writeData(tasks);
    res.json(tasks[index]);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};

exports.deleteTask = (req, res) => {
  const tasks = readData();
  const filteredTasks = tasks.filter(t => t.id !== req.params.id);
  writeData(filteredTasks);
  res.json({ message: 'Task deleted' });
};

