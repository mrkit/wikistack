const 
  router = require('express').Router(),
  wiki = require('./wiki'),
  user = require('./user');


router.use('/wiki', wiki);

router.use('/user', user);

module.exports = router;