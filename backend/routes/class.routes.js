const { Router } = require("express");
const router = Router();

const { getAllClasses, addClass, joinClass } = require("../controllers/class.controllers")

router.get("/", getAllClasses);
router.post("/add", addClass);
router.post("/join", joinClass);

module.exports = router;