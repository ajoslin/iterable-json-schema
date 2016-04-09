'use strict'

var test = require('tape')
var validator = require('is-my-json-valid')

test('unsubscriber', function (t) {
  var unsubscriber = require('./unsubscriber')
  var validate = validator(unsubscriber)

  t.test('is valid with email input', function (t) {
    var isValid = validate({
      email: 'test@test.com'
    })
    t.ok(isValid)
    t.end()
  })
  t.test('is invalid with additional inputs', function (t) {
    var isValid = validate({
      email: 'test@test.com',
      bad: 'bad'
    })
    t.false(isValid)
    t.end()
  })
})

test('list-details', function (t) {
  var listDetail = require('./list-detail')
  var validate = validator(listDetail)

  t.test('is valid with proper inputs', function () {
    var isValid = validate({
      id: 1,
      name: 'john'
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is invalid with invalid props', function (t) {
    var isValid = validate({
      id: 1,
      name: 1337
    })
    t.false(isValid)
    t.end()
  })
})

test('Commerce Item', function (t) {
  var item = require('./commerce-item')
  var validate = validator(item)

  t.test('is valid with minimum inputs', function (t) {
    var isValid = validate({
      id: '12',
      name: 'item',
      price: 1200,
      quantity: 5
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is invalid with additional inputs', function (t) {
    var isValid = validate({
      id: '12',
      name: 'item',
      price: 1200,
      quantity: 5,
      additional: 'bad'
    })
    t.false(isValid)
    t.end()
  })
})

test('Api User', function (t) {
  var user = require('./api-user')
  var validate = validator(user)

  t.test('is valid with minimum inputs', function (t) {
    var isValid = validate({
      email: 'test@test.com'
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is valid with maximum input amount', function (t) {
    var isValid = validate({
      email: 'test@test.com',
      dataFields: { data: 'fields' },
      userId: '12'
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is invalid with additional inputs', function (t) {
    var isValid = validate({
      email: 'test@test.com',
      apple: 'orange'
    })
    t.false(isValid)
    t.end()
  })
})
