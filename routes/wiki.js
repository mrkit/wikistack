const router = require('express').Router();

router.get('/', (req, res, next)=> res.send('You made it to wiki!'));

module.exports = router;