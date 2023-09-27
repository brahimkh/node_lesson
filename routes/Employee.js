const employeeController = require ('../controllers/EmployeeController')
const express = require ('express')
const router =express.Router()
const upload    = require('../middleware/upload')

router.get('/',employeeController.index)
router.post('/show',employeeController.show)
// router.post('/store',upload.single('avarta'),employeeController.store)
/// below for upload image as array
router.post('/store',upload.array('avarta[]'),employeeController.store)  
router.post('/update',employeeController.update)
router.post ('/delete',employeeController.deleteEmployee)
module.exports = router