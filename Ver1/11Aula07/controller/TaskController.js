const Task = require('../models/Task');
let message = '';
let type = '';
const getAllTasks = async (req, res) => 
    {
        try 
        {
            setTimeout(() => 
            {
                message = '';
                type = '';
            }
            , 1000);
            const tasksList = await Task.find();
            return res.render('index', 
            { 
                 tasksList,
                 task: null, 
                 taskDelete: null ,
                 message, 
                type
            });
        } 
        catch (err) 
        {
            res.status(500).send({ error: err.message});
        }
    }
const createTask = async(req, res) =>   
    {
        const task = req.body;
        if (!task.task) {
            message = 'The task field cannot be empty!';
            type = 'danger';
        
            return res.redirect('/'); 
        }
        try {
            await  Task.create(task);
            message = 'Task created successfully!';
            type = 'success';
            return res.redirect('/');
        }
        catch (err) {
            console.error('Error creating task:', err);
            return res.status(500).send({ error: err.message});       
        }    
    } 
const getById = async (req, res) => 
    {
        try 
        {
            const taskDelete = await Task.findOne({ _id: req.params.id });
            const tasksList = await Task.find();
            if (req.params.method == 'update') {
                res.render('index', { task: taskDelete, taskDelete: null, tasksList, message, type});
            } else {
                res.render('index', { task: null, taskDelete, tasksList, message, type });
            }
        }
        catch (err) 
        {
            res.status(500).send({ error: err.message});
        }
     }

const updateOneTask = async (req, res) => {
  try {
    const task = req.body;
    await Task.updateOne({ _id: req.params.id }, task);
    message = 'Task updated successfully!';
    type = 'success';   
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
const deleteOneTask = async (req, res) => {
    try {
        await Task.deleteOne({ _id: req.params.id });
        message = 'Task deleted successfully!';
        type = 'success';
        res.redirect("/");
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};
const taskCheck = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id });
         if (task.check) {
            task.check = false;
        } else {
            task.check = true;
        }
        await Task.updateOne({ _id: req.params.id }, task);
        res.redirect("/");
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};
module.exports = {
    getAllTasks,
    createTask,
    getById,
    updateOneTask,
    deleteOneTask,
    taskCheck

};