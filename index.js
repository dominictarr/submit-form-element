var qs = require('querystring')

//get the data for this form, including the clicked button.
exports.getData = function (form, button) {
  var data = {}
  ;[].forEach.call(form.querySelectorAll('input'), function (input) {
    if(input.name) data[input.name] = input.value
  })
  if(button && button.name)
    data[button.name] = button.value

  return data
}

exports.submit = function (form, button, cb) {
  var data = exports.getData(form, button)
  var data_encoded = qs.encode(data)
  var xhr = new XMLHttpRequest()
  xhr.open(form.method || 'POST', form.action || window.location)
  xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
  xhr.onload = function (ev) {
    cb(null, xhr.response)
  }
  xhr.onerror = function (ev) {
    cb(new Error(xhr.status+':'+xhr.statusText))
  }
  xhr.send(data_encoded)
}





