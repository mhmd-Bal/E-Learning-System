const { Router } = require("express");
const router = Router();

const { getAllClasses, addClass } = require("../controllers/class.controllers")

router.get("/", getAllClasses);
router.post("/add", addClass);

module.exports = router;