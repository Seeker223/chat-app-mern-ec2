const express = require('express')
const http = require('http')
const Server = require('socket.io').Server
const app = express()

const server = http.createServer(app)
const io = new Server(server, {
    cors:{
        origin:"*  "
    }
})



io.on("connection", (socket) => {
    console.log('We are connected')

     socket.on("chat", chat => {
        io.emit('chat', chat)
     })

    socket.on('disconnected', ()=>{
        console.log('disconnected')
    })
})


server.listen(5001, () => console.log('listening to port 5001'))
