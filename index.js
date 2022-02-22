const http = require('http')
const port = 8000
const fs = require('fs')

function requestHandler(req, res) {
  res.writeHead(200, { 'content-type': 'text/html' })

  let filePath

  switch (req.url) {
    case '/':
      filePath = './index.html'
      break
    case '/boot':
      filePath = './boot.html'
      break

    default:
      filePath = './404.html'
      break
  }

  fs.readFile(filePath, function (err, data) {
    if (err) {
      console.log('error :', err)
    }
    res.end(data)
  })
}

const server = http.createServer(requestHandler)

server.listen(port, function (error) {
  if (error) {
    console.log(error)
    return
  }
  // console.log(req);
  // console.log(res);
  console.log(`Server is running on port: ${port}`)
})
