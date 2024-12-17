let DIGITALASSETS = require("../model/digital-assets")

exports.digitalAssetsUpload = async function(req, res, next) {
    try {
      req.body.document = req.file.filename
      let digitalAssetsUpload = await DIGITALASSETS.create(req.body)
      res.status(201).json({
        status : "Success",
        message : "File Upload Successfully",
        data : digitalAssetsUpload
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.digitalAssetsAlldata = async function(req, res, next) {
    try {
      
      let digitalAssetsAlldata = await DIGITALASSETS.find().populate("uploadedBy")
      res.status(200).json({
        status : "Success",
        message : "Assets All Data Found Successfully",
        data : digitalAssetsAlldata
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.digitalAssetsFound = async function(req, res, next) {
    try {
      
      let digitalAssetsFound = await DIGITALASSETS.findById(req.params.id)
      res.status(200).json({
        status : "Success",
        message : "Assets Found Successfully",
        data : digitalAssetsFound
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.digitalAssetsUpdate = async function(req, res, next) {
    try {
      
      let digitalAssetsUpdate = await DIGITALASSETS.findByIdAndUpdate(req.params.id,req.body,{new : true})
      res.status(200).json({
        status : "Success",
        message : "Assets Update Successfully",
        data : digitalAssetsUpdate
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.digitalAssetsDelete = async function(req, res, next) {
    try {
      
      await DIGITALASSETS.findByIdAndUpdate(req.params.id)
      res.status(200).json({
        status : "Success",
        message : "Assets Delete Successfully"
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }