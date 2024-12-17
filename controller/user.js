let USER = require("../model/user")
let bcrypt = require("bcrypt")
var jwt = require('jsonwebtoken')

exports.sequre = async function(req, res, next) {
    try {
      let token = req.headers.authorization
      if(!token) throw new Error("Please Enter a Token")
        let verify = jwt.verify(token,"SURAT")
    let userVerify = await USER.findById(verify.id)
    if(!userVerify) throw new Error("USER Not Found")
        next()
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

exports.userSignup = async function(req, res, next) {
    try {
      req.body.password = await bcrypt.hash(req.body.password,10)
      let userSignup = await USER.create(req.body)
      res.status(201).json({
        status : "Success",
        message : "User Create Successfully",
        data : userSignup
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.userLogin = async function(req, res, next) {
    try {
        let userLogin = await USER.findOne({email : req.body.email})
        if(!userLogin) throw new Error("User not Found")
        let passwordCompare = await bcrypt.compare(req.body.password,userLogin.password)
        if(!passwordCompare) throw new Error("Invalid Password")

            var token = jwt.sign({ id : userLogin._id }, "SURAT" )

      res.status(200).json({
        status : "Success",
        message : "User Login Successfully",
        data : userLogin, token
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.userGetAllData = async function(req, res, next) {
    try {
        let userGetAllData = await USER.find()
      res.status(200).json({
        status : "Success",
        message : "User Find All Data Successfully",
        data : userGetAllData
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.userIdFound = async function(req, res, next) {
    try {
        let userIdFound = await USER.findById(req.params.id)
      res.status(200).json({
        status : "Success",
        message : "User ID Found Successfully",
        data : userIdFound
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.userIdUpdate = async function(req, res, next) {
    try {
      req.body.password = await bcrypt.hash(req.body.password,10)
        let userIdUpdate = await USER.findByIdAndUpdate(req.params.id,req.body,{new : true})
      res.status(200).json({
        status : "Success",
        message : "User ID Update Successfully",
        data : userIdUpdate
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.userIdDelete = async function(req, res, next) {
    try {
        await USER.findByIdAndDelete(req.params.id)
      res.status(200).json({
        status : "Success",
        message : "User ID Delete Successfully"
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }