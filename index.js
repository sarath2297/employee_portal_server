const server = require('json-server')

const employeeServer = server.create()

const router = server.router("db.json")

const middleware = server.defaults()

employeeServer.use(middleware)
employeeServer.use(router)

const PORT = 3000 || process.env.PORT

employeeServer.listen(PORT,()=>{
    console.log(`Server Running successfully at : ${PORT}`);
})