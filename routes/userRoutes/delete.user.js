const data = require("../../data")

async function deleteUser(req, res){
    const user = await data.deleteUser(req.body.id)
    res.send(user)
}

module.exports = deleteUser