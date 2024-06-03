const express = require("express")
const app = express()

const port = 2525

app.listen(port, ()=>{
		console.log(`Server started on ${port} port`)
})
