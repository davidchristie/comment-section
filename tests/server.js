const test = require('tape')
const request = require('supertest')

const server = require('../server')

test('GET /', (t) => {
  request(server)
    .get('/')
    .expect(200)
    .expect('Content-Type', 'text/html; charset=utf-8')
    .end((error, response) => {
      t.error(error, 'no error')
      t.equal(response.type, 'text/html', 'content type is html')
      t.end()
    })
})
