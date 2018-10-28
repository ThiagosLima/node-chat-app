let socket = io()

socket.on('connect', () => {
  console.log('Connected to server.')

  socket.emit('createMessage', {
    from: 'grasi@gmail.com',
    text: 'e ae, sumida'
  })
})

socket.on('newMessage', (message) => {
  console.log('newMessage', message)
})

socket.on('disconnect', () => {
  console.log('Disconnected from server')
})
