const express = require("express");
const {
  getPatients,
  getPatient,
  createPatient,
  updatePatient,
  deletePatient,
} = require("../controllers/patients");
const { protect, authorize } = require("../middleware/auth");

const router = express.Router();

router.route("/").get(getPatients).post(protect, authorize('doctor'), createPatient);

router
  .route("/:id")
  .get(getPatient)
  .put(protect, authorize('doctor'), updatePatient)
  .delete(protect, authorize('doctor'), deletePatient);

module.exports = router;
