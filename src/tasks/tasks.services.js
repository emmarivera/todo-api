//? En este archivo vamos a utilizar todo lo relacionado al REQ y RES

const taskControllers = require ('./tasks.controllers')

//* taskControllers.createTodo()
//* taskControllers.findAllTodos()
//* taskControllers.findTodoById()

const getAllTodos = (req, res) => {
    taskControllers.findAllTodos()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

// const getAllTodosWithTryCatch = (req, res) => {
//         try {
//             const data = taskControllers.findAllTodos()
//             res.status(200).json(data)
//             return data
//         } catch (error) {
//             res.status(400).json({message: err.message})
//             return error
//         }
// }

const getTodoById = (req, res) => {
    const id = req.params.id
    const data = taskControllers.findTodoById(id)
        .then((data) => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch(() => {
            res.status(400).json({message: err.message})
        })
}

const postTodo = (req, res) => {
    const {title, description} = req.body

    taskControllers.createTodo({title, description})
        .then((data) => {
            res.status(201).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })

    // if (title && description) {
    //     const data = taskControllers.createTodo({title, description})
    //     res.status(201).json(data)
    // } else {
    //     res.status(404).json({message: 'Invalid ID', fields: {title: 'String', description: 'String'}})
    // }
}

const patchTask = (req, res) => {
    const id = req.params.id
    const {title, description, is_completed} = req.body

    taskControllers.updateTodo(id, {title, description, is_completed})
        .then((data) => {
            if (data) {
                res.status(200).json({message: 'Task Modified Succesfully'})
            } else {
                res.status(400).json({message: 'Invalid ID'})
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

module.exports = {
    getAllTodos,
    getTodoById,
    postTodo,
    patchTask
}