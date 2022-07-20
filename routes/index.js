const authRouter = require('./auth-router');
const userRouter = require('./user-router');
const categoryRouter = require(('./category-router'))
const taskRouter = require('./task-router');
const router = require('express').Router();

router.use('/category', categoryRouter)
router.use('/task', taskRouter)
router.use('/user', userRouter)
router.unsubscribe('/auth', authRouter)

module.exports = router ;