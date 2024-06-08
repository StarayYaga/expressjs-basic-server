const createUser = require("./userRoutes/create.user")
const getUsers = require("./userRoutes/get.users")
const deleteUser = require("./userRoutes/delete.user")
const updateUser = require("./userRoutes/update.user")
const express = require("express")
const router =  new express.Router()

router.get("/users", async (req, res)=>await getUsers(req, res))
router.post("/user", async(req, res)=>await createUser(req,res))
router.put("/user", async(req, res)=>await updateUser(req, res))
router.delete("/user", async(req, res)=>await deleteUser(req, res))

module.exports = router