 const format = require('date-format')

const comments = []

function getIndex (request, response) {
  response.render('index', {comments})
}

function postIndex (request, response) {
  // console.log(request.body)
  comments.push({
    name: request.body.name,
    text: request.body.text,
    time: format('hh:mm dd/MM/yyyy', new Date())
  })
  response.redirect('/')
}

module.exports = {
  getIndex,
  postIndex
}
