const path = require('path')
const epxress = require('express')

const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000
const app = epxress()

app.use(epxress.static(publicPath))

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})
