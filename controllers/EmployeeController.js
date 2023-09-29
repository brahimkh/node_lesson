const { response } = require('express')
const  Employee = require ('../models/Employee')

const index = (req, res, next)=>{
    Employee.find()
    .then (response =>{
        res.json([
            response
        ])
    }).catch(error =>{
        res.json({
            message:' An error occured'
        })
    })
}

const show = (req, res, next) => {
    let employeeID =req.body.employeeID
    Employee.findById(employeeID)
    .then(response =>{
        res.json({
            response
        })
    }).catch (errr =>{
        res.json ({
            message: 'An error Occured'
    })
    } )

}

const store = (req, res, next) => {
    let employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        age: req.body.age,
        email: req.body.email,
        phone: req.body.phone
    });

    if (req.files && req.files.length > 0) {
        let path = '';
        req.files.forEach((item, index) => {
            path = path + item.path + ',';
        });
        path = path.substring(0, path.lastIndexOf(","));
        employee.avarta = path;
    }

    employee.save()
        .then(response => {
            res.json({
                'message': 'Data is saved in the database'
            });
        })
        .catch(error => {
            res.status(500).json({
                message: 'Error occurred while saving data'
            });
        });
};


 const update = (req, res, next) =>{
    let employeeID= req.body.employeeID

    let updateEmployee ={
        name: req.body.name,
        designation: req.body.designation,
        age:req.body.age,
        email: req.body.email
    }
    Employee.findOneAndUpdate (employeeID,{$set:updateEmployee})
    .then (response =>{
        res.json({
            message:'Employee updated successfully'
        
        })
    }).catch (error =>[
        res.json({
            message:'Errro when updating employee'
        })
    ])
 }

 const deleteEmployee= (req,res,next) =>{
    let employeeId =req.body.employeeID
    Employee.findByIdAndRemove(employeeId)
    .then(response =>{
        res.json({
            message:'Deleted from database successfully'
        })
    }).catch( error =>{
        res.json({
            message:'deleting unsuccesss...!'
        })
    })
 }

 module.exports = {index,show,store,update,deleteEmployee}