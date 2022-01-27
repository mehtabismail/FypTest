const express = require("express");
const {
  getDoctors,
  getDoctor,
  createDoctor,
  updateDoctor,
  deleteDoctor,
} = "../controllers/doctors.js";
const router = express.Router();

router.route("/").get(getDoctors).post(createDoctor);

router.route("/:id").get(getDoctor).put(updateDoctor).delete(deleteDoctor);

module.exports = router;


// const express = require("express");
// const router = express.Router();

// router.get("/", (req, res) => {
//   res.status(200).json({ success: true, msg: "Show all Doctors" });
// });

// router.get("/:id", (req, res) => {
//   res.status(200).json({ success: true, msg: `Show Doctor ${req.params.id}` });
// });

// router.post("/", (req, res) => {
//   res.status(200).json({ success: true, msg: "Create new Doctor" });
// });

// router.put("/:id", (req, res) => {
//   res
//     .status(200)
//     .json({ success: true, msg: `Update Doctor ${req.params.id}` });
// });

// router.delete("/:id", (req, res) => {
//   res
//     .status(200)
//     .json({ success: true, msg: `Delete Doctor ${req.params.id}` });
// });

// module.exports = router;




  
  
