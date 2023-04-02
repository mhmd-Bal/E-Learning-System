const { Router } = require("express");
const router = Router();

const { getAllForms, addForm } = require("../controllers/form.controllers")

router.get("/", getAllForms);
router.post("/request", addForm);

module.exports = router;