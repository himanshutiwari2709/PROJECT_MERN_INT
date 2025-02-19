const TaskModel = require("../Models/TaskModel");


const createTask = async (req, res) => {
    try {
        const { taskName, isDone } = req.body;
        console.log('Received task data:', { taskName, isDone });
        
        if (!taskName) {
            return res.status(400).json({ 
                message: 'Task name is required', 
                success: false 
            });
        }

        const model = new TaskModel({
            taskName,
            isDone: isDone || false
        });

        const savedTask = await model.save();
        console.log('Task saved successfully:', savedTask);

        res.status(201).json({ 
            message: 'Task is created', 
            success: true,
            data: savedTask
        });
    } catch (err) {
        console.error('Error creating task:', err);
        res.status(500).json({ 
            message: 'Failed to create task: ' + err.message, 
            success: false 
        });
    }
}

const fetchAllTasks = async (req, res) => {
    try {
        console.log('Fetching all tasks...');
        const data = await TaskModel.find({}).sort({ _id: -1 });
        console.log('Tasks found:', data);
        res.status(200).json({ 
            message: 'All Tasks', 
            success: true, 
            data 
        });
    } catch (err) {
        console.error('Error fetching tasks:', err);
        res.status(500).json({ 
            message: 'Failed to get all tasks: ' + err.message, 
            success: false 
        });
    }
}


const updateTaskById = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const obj = { $set: { ...body } };
        await TaskModel.findByIdAndUpdate(id, obj)
        res.status(200)
            .json({ message: 'Task Updated', success: true });
    } catch (err) {
        res.status(500).json({ message: 'Failed to updated task', success: false });
    }
}


const deleteTaskById = async (req, res) => {
    try {
        const id = req.params.id;
        await TaskModel.findByIdAndDelete(id);
        res.status(200)
            .json({ message: 'Task is deleted', success: true });
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete task', success: false });
    }
}

module.exports = {
    createTask,
    fetchAllTasks,
    updateTaskById,
    deleteTaskById
}