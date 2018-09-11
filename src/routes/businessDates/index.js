import { Router } from 'express'
import getBusinessDateWithDelay from './getBusinessDateWithDelay'
const router = new Router()

router.get('/getBusinessDateWithDelay', getBusinessDateWithDelay)
router.post('/getBusinessDateWithDelay', getBusinessDateWithDelay)

module.exports = router
