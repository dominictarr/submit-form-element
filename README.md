# submit-form-element

given a form html element, submit it with an XHR as if you had clicked submit,
but without navigating the page.

sets all the necessary headers etc so that it looks like a regular form submit.

## example

``` js
var submit = require('submit-form-element').submit

submit.($('form'), $('button'), function (err, response) {
  //calls back error, or xhr response
})

```

## api

### getData (form, button) => {}

return a js object representing the data that would be submitted if you were to click this button.

### submit (form, button, cb)

submit the given form by clicking a particular button, and callback the response

## License

MIT

