const Doctor = require("../models/Doctors");
const ErrorResponse = require("../utils/errorResponse");

// @desc            GET all doctors
// @route           GET /api/v1/doctors
// @access          Public
exports.getDoctors = async (req, res, next) => {
  try {
    const doctors = await Doctor.find();
    res.status(201).json({
      success: true,
      count: doctors.length,
      data: doctors,
    });
  } catch (error) {
    next(error);
  }
};

// @desc            GET Single doctor
// @route           GET /api/v1/doctors/:id
// @access          Public
exports.getDoctor = async (req, res, next) => {
  try {
    const doctor = await Doctor.findById(req.params.id);

    if (!doctor) {
      return next(
        new ErrorResponse(
          `Doctor not found with the id of ${req.params.id}`,
          404
        )
      );
    }

    res.status(201).json({
      success: true,
      data: doctor,
    });
  } catch (error) {
    // res.status(400).json({ success: false });
    next(error);
  }
};

// @desc            Create new Doctor
// @route           POST /api/v1/doctors
// @access          Private
exports.createDoctor = async (req, res, next) => {
  try {

    const {email} = req.body;
    const isNewUser = await Doctor.isThisEmailInUse(email);
    if(!isNewUser)
    {
      return res.json({success:false, message: "email already in use "})
    }

    const doctor = await Doctor.create(req.body);

    res.status(201).json({
      success: true,
      data: doctor,
    });
  } catch (error) {
    next(error);
  }
};

// @desc            Update a Doctor
// @route           PUT /api/v1/doctors/:id
// @access          Private
exports.updateDoctor = async (req, res, next) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doctor) {
      return next(
        new ErrorResponse(
          `Doctor not found with the id of ${req.params.id}`,
          404
        )
      );
    }
    res.status(201).json({
      success: true,
      data: doctor,
    });
  } catch (error) {
    next(error);
  }
};

// @desc            DELETE a Doctor
// @route           DELETE /api/v1/doctors/:id
// @access          Private
exports.deleteDoctor = async (req, res, next) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);

    if (!doctor) {
      return next(
        new ErrorResponse(
          `Doctor not found with the id of ${req.params.id}`,
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
