const path = require('path')
const http = require('http')
const epxress = require('express')
const socketIO = require('socket.io')

const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000
const app = epxress()
const server = http.createServer(app)
const io = socketIO(server)

app.use(epxress.static(publicPath))

io.on('connection', (socket) => {
  console.log('New user connected.')

  socket.on('disconnect', () => {
    console.log('A user was disconnected.')
  })
})

server.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})
