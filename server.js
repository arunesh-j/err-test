const http = require('http')
const port = process.env.PORT || 3000
// A bad commit: an unclosed call, the kind of typo that reaches a branch.
http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('err-test: ok\n'
  })
  .listen(port, () => console.log(`listening on ${port}`))
