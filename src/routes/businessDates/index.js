import { Router } from 'express'
import getBusinessDateWithDelay from './getBusinessDateWithDelay'
import isBusinessDay from './isBusinessDay'

const router = new Router()

router.get('/getBusinessDateWithDelay', getBusinessDateWithDelay)
router.post('/getBusinessDateWithDelay', getBusinessDateWithDelay)

router.get('/isBusinessDay', isBusinessDay)
router.post('/isBusinessDay', isBusinessDay)

module.exports = router
