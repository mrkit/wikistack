const router = require('express').Router();

router.get('/', (req, res, next)=> res.send('You made it to user!!'));

module.exports = router;