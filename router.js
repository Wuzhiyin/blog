var express = require('express')

var router = express.Router()

router.get('/', function (req, res) {
  // console.log(req.session.user)
  res.render('index.html')
})

router.get('/register', function (req, res) {
  res.render('register.html')
})

router.post('/register', function (req, res) {
  
})

module.exports = router
