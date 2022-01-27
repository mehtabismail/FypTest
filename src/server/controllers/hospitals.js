const Hospital = require("../models/Hospitals");
const ErrorResponse = require("../utils/errorResponse");

// @desc            GET all Hospitals
// @route           GET /api/v1/hospitals
// @access          Public
exports.getHospitals = async (req, res, next) => {
  try {
    const hospitals = await Hospital.find();
    res.status(201).json({
      success: true,
      count: hospitals.length,
      data: hospitals,
    });
  } catch (error) {
    next(error);
  }
};

// @desc            GET Single Hospital
// @route           GET /api/v1/hospitals/:id
// @access          Public
exports.getHospital = async (req, res, next) => {
  try {
    const hospital = await Hospital.findById(req.params.id);

    if (!hospital) {
      return next(
        new ErrorResponse(
          `hospital not found with the id of ${req.params.id}`,
          404
        )
      );
    }

    res.status(201).json({
      success: true,
      data: hospital,
    });
  } catch (error) {
    next(error);
  }
};

// @desc            Create new Hospital
// @route           POST /api/v1/hospitals
// @access          Private
exports.createHospital = async (req, res, next) => {
  try {

    const {email} = req.body;
    const isNewUser = await Hospital.isThisEmailInUse(email);
    if(!isNewUser)
    {
      return res.json({success:false, message: "email already in use "})
    }

    const hospital = await Hospital.create(req.body);

    res.status(201).json({
      success: true,
      data: hospital,
    });
  } catch (error) {
    next(error);
  }
};

// @desc            Update a hospital
// @route           PUT /api/v1/hospitals/:id
// @access          Private
exports.updateHospital = async (req, res, next) => {
  try {
    const hospital = await Hospital.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!hospital) {
      return next(
        new ErrorResponse(
          `hospital not found with the id of ${req.params.id}`,
          404
        )
      );
    }
    res.status(201).json({
      success: true,
      data: hospital,
    });
  } catch (error) {
    next(error);
  }
};

// @desc            DELETE a Hospital
// @route           DELETE /api/v1/hospital/:id
// @access          Private
exports.deleteHospital = async (req, res, next) => {
  try {
    const hospital = await Hospital.findByIdAndDelete(req.params.id);

    if (!hospital) {
      return next(
        new ErrorResponse(
          `hospital not found with the id of ${req.params.id}`,
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
