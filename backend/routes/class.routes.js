const { Router } = require("express");
const router = Router();

const { getAllClasses } = require("../controllers/class.controllers")

router.get("/", getAllClasses);

module.exports = router;