const data = require("../../data")


async function updateUser(req, res){
    const user = await data.update(req.body)
    res.send(user)
}

module.exports = updateUser