const Patient = require("../models/Patients");
const ErrorResponse = require("../utils/errorResponse");

// @desc            GET all Patients
// @route           GET /api/v1/patients
// @access          Public
exports.getPatients = async (req, res, next) => {
  try {
    const patients = await Patient.find();
    res.status(201).json({
      success: true,
      count: patients.length,
      data: patients,
    });
  } catch (error) {
    next(error);
  }
  };
  
  // @desc            GET Single Patient
  // @route           GET /api/v1/patients/:id
  // @access          Public
  exports.getPatient = async (req, res, next) => {
    try {
      const patient = await Patient.findById(req.params.id);
  
      if (!patient) {
        return next(
          new ErrorResponse(
            `Patient not found with the id of ${req.params.id}`,
            404
          )
        );
      }
  
      res.status(201).json({
        success: true,
        data: patient,
      });
    } catch (error) {
      next(error);
    }
  };
  
  // @desc            Create new Patient
  // @route           POST /api/v1/patients
  // @access          Private
  exports.createPatient = async (req, res, next) => {
    try {

      const {email} = req.body;
      const isNewUser = await Patient.isThisEmailInUse(email);
      if(!isNewUser)
      {
        return res.json({success:false, message: "email already in use "})
      }
  
      const patient = await Patient.create(req.body);
  
      res.status(201).json({
        success: true,
        data: patient,
      });
    } catch (error) {
      next(error);
    }
  };
  
  // @desc            Update a Patient
  // @route           PUT /api/v1/patients/:id
  // @access          Private
  exports.updatePatient = async(req, res, next) => {
    try {
      const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
  
      if (!patient) {
        return next(
          new ErrorResponse(
            `patient not found with the id of ${req.params.id}`,
            404
          )
        );
      }
      res.status(201).json({
        success: true,
        data: patient,
      });
    } catch (error) {
      next(error);
    }
  };
  
  // @desc            DELETE a Patient
  // @route           DELETE /api/v1/patients/:id
  // @access          Private
  exports.deletePatient = async (req, res, next) => {
    try {
      const patient = await Patient.findByIdAndDelete(req.params.id);
  
      if (!patient) {
        return next(
          new ErrorResponse(
            `patient not found with the id of ${req.params.id}`,
            404
          )
        );
      }
      res.status(201).json({
        success: true,
        data: {},
      });
    } catch (error) {
      next(error);
    }
  };
  