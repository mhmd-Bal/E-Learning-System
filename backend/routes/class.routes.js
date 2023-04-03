const { Router } = require("express");
const router = Router();

const { getAllClasses, addClass, joinClass, getAllEnrolledStudents, checkIfEnrolled } = require("../controllers/class.controllers")

router.get("/", getAllClasses);
router.post("/add", addClass);
router.post("/join", joinClass);
router.get("/enrolled_students", getAllEnrolledStudents);
router.post("/check_if_enrolled", checkIfEnrolled);

module.exports = router;