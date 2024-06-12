const sql = require("sqlite3").verbose()
require('dotenv').config()
const db = new sql.Database(process.env.db)

db.run(`create table if not exists users (
        id integer primary key autoincrement,
        name text not null
    );`)

module.exports = {
    async getUsers(){
        // try {
            const users = await new Promise((resolve, reject)=>{
                db.all(`select * from users;`, [], (err, row)=>{
                    if (err) reject(err)
                    resolve(row)
                })
            })
            return users
        // if (!users) return null
    },
    async addUser(user){
        const idUser = await new Promise((resolve, reject)=>{
            db.run(`insert into users (name) values (?);`, [user.name], (err)=>{
                if (err) reject(err)
                resolve(this.changes)
            })
        })
        return {id: idUser, ...user}
    },

    async deleteUser(id){
        const status = await new Promise((resolve, reject)=>{
            db.run(`delete from users where id = ( ?);`, [id],  function (err){
                if (err) reject(err)
                resolve(this.changes)
            })
        })
        return status >0 
    },
    async updateUser(user){
        const update = await new Promise((resolve, reject)=>{
            db.run(`update users set name = (?) where id = (?);`, [user.name, user.id], (err)=>{
                if (err) reject(err)
                resolve(true)
            })
        })
        return await this.getUserById(user.id)
    },

    async getUserById(id){
        const user = await new Promise((resolve, reject)=>{
            db.get(`select * from users where id = (?);`, [id], (err, row)=>{
                if (err) reject(err)
                resolve(row)
            })
        })
        // console.log(user);
        return user
    }
}