const data = require("../../data")

async function getUsers(req, res){
    res.send(await data.getUsers())
}

module.exports = getUsers