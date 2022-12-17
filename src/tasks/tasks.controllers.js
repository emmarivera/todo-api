//? Este archivo va a manejar todo lo relacionado a acciones de la base de datos de todo's

const Tasks = require('../models/task.model')

const todoDB = []
//? TODO
//* {
//*   id: 5,
//*   title: 'Practicar express',
//*   description: 'Ver videos de apoyo y crear otra API',
//*   is_completed: false
//* }

let id = 1

const findAllTodos = async() => {
    //? Esta función debe de traer todos los todo's de mi base de datos

    const data = await Tasks.findAll() //? select * from tasks;
    return data
}

const findTodoById = async(id) => {
    //? Esta función debe de retornar un todo dependiendo del id
    //? const todo = await Tasks.findByPk(id)
    const todo = await Tasks.findOne({
        where: {
            id: id,
        },
    })
    return todo
}

const createTodo = async(obj) => {
    //? Esta función debe de crear un nuevo todo en mi base de datos y retornar el todo creado
    const newTodo = Tasks.create({
        title: obj.title,
        description: obj.description,
    })
    return newTodo
}

const updateTodo = async (id, obj) => {
    const data = await Tasks.update(obj, {
        where: {
            id: id
        }
    })
    return data[0] //? Retorna un arreglo, este arreglo puede lucir de dos maneras [1], [0]
}

const deleteTodo = async (id) => {
    const data = await Tasks.destroy({
        where: {
            id: id
        }
    })
    return data
}


module.exports = {
    findAllTodos,
    findTodoById,
    createTodo,
    updateTodo,
    deleteTodo
}
