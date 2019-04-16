var qs = require('querystring')
var h = require('hyperscript')
var http = require('http')
var form, cb

var server = http.createServer(function (req, res) {
  if(req.method == 'POST') {
    var b = []
    req
    .on('data', function (d) {
      b.push(d)
    })
    .on('end', function () {
      var data = qs.decode(Buffer.concat(b).toString('utf8'))
      cb(null, data)
      res.setHeader('location', '/')
      res.writeHead(303)
//      res.writeHead(403, '/')
      res.end(JSON.stringify(data))
    })
  }
  else
  if(form)
    res.end(h('html', h('body', form)).outerHTML)
  else
    res.end(new Error('no form ready').stack)
}).listen(8321)

function serve (_form, _cb) {
  form = _form, cb = _cb
}

serve(h('form', {method: 'POST', encoding: 'application/json'},
  h('input', {type: 'submit', value: 'okay', name: 'button'}),
  h('input', {type: 'submit', value: 'okay2', name: 'button2'}),
  h('input', {type: 'submit', value: 'nameless'})
), function (err, data) {
  console.log(err, data)
})

