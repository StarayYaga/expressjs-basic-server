const express = require("express")
const data = require("../../data")

async function addUser (req, res){
    res.send(await data.addUser(req.body))
}

module.exports = addUser
