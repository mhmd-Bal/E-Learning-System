const { Router } = require("express");
const router = Router();

const { getAllForms } = require("../controllers/form.controllers")

router.get("/", getAllForms);

module.exports = router;