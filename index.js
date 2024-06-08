const express = require("express")
const router = require("./routes/router.js")

const app = express()
const port = 3060	

app.use(express.json())
app.use('/', (req, res, next)=>{
	res.setHeader(
		'Access-Control-Allow-Origin',
		"*"
	)
	res.setHeader(
		'Access-Control-Allow-Headers',
		"Content-Type"
	)
})
app.use(router)

async function startApp(){
	try{
		app.listen(port, ()=>{
				console.log(`Server started on ${port} port`)
		})    
	} catch(e) {
			console.log(e)
	}
}

startApp()
