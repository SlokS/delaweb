const Router = require('express');
const router = new Router();
const countryRouter = require('./countryRouter');
const userRouter = require('./userRouter');

router.use('/user', userRouter)
router.use('/country', countryRouter)

module.exports = router