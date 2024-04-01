const zod=require("zod")


const createTodo=zod.objectUtil({
    title: zod.ZodString,
    descripition: zod.ZodString
})
const updateTodo=zod.objectUtil({
id:zod.ZodString
   
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}