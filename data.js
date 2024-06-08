let users = []
let id = 1

const sql = require("./sql.controller")

module.exports = {
    getUsers: async ()=> await sql.getUsers(),
    addUser: async (user)=>await sql.addUser(user),
    deleteUser: async (idUser)=> await sql.deleteUser(idUser),
    update: async (user)=> await sql.updateUser(user)
}