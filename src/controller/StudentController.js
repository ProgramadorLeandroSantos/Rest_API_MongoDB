const mongoose = require('mongoose');
require('../../databases/model/StudentModel');
const Student = mongoose.model('students');
mongoose.set('useFindAndModify', false);

module.exports = {
    async Read(req,res){
       try {
            const students = await Student.find(); 
            return res.json(students)
       } catch (error) {
           return res.status(400).json({
               error: true,
               message: "something wrong not is correct ! :/"
           })
       };
    },
    async Create(req,res){
       try {
            await Student.create(req.body);
            return res.status(201).send("Student saved !");
       } catch (error) {
           return res.status(400).json({
               error: true,
               message: "error on save student..."
           });
       };
    },
    async ReadOne(req,res){
        try {
            const student = await Student.findById(req.params.id);
            return res.status(200).json(student);
        } catch (error) {
            res.status(401).json({
                error: true,
                message: "student not found !"
            })
        };
    },
    async Update(req,res){
        try {
            await Student.findByIdAndUpdate(req.params.id, req.body,{ new:true });
            return res.status(200).send("student updated !");
        } catch (error) {
            res.status(401).json({
                error: true,
                message: "student not updated !"
            });
        }
    },
    async Destroy(req,res){
       try {
            await Student.findByIdAndDelete(req.params.id);
            return res.status(200).json({
                error: false,
                message: "student deleted !"
            })
       } catch (error) {
            res.status(401).json({
                error: true,
                message: "Error  student not deleted !"
            });
       };
    }
};