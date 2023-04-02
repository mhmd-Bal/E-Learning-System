const { Router } = require("express");
const router = Router();

const { getAllClasses, addClass, joinClass, getAllEnrolledStudents } = require("../controllers/class.controllers")

router.get("/", getAllClasses);
router.post("/add", addClass);
router.post("/join", joinClass);
router.get("/enrolled_students", getAllEnrolledStudents);

module.exports = router;