const express = require("express");
const {
  getDoctors,
  getDoctor,
  createDoctor,
  updateDoctor,
  deleteDoctor,
} = require("../controllers/doctors");
const { protect, authorize } = require("../middleware/auth");

const router = express.Router();

router
  .route("/")
  .get(getDoctors)
  .post(protect, authorize("hospital"), createDoctor);

router
  .route("/:id")
  .get(getDoctor)
  .put(protect, authorize("hospital"), updateDoctor)
  .delete(protect, authorize("hospital"), deleteDoctor);

module.exports = router;
