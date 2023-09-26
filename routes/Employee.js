const employeeController = require ('../controllers/EmployeeController')
const express = require ('express')
const router =express.Router()
 
router.get('/',employeeController.index)
router.post('/show',employeeController.show)
router.post('/store',employeeController.store)
router.post('/update',employeeController.update)
router.post ('/delete',employeeController.deleteEmployee)
module.exports = router