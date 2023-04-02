const { Router } = require("express");
const router = Router();

const { getAllFiles } = require("../controllers/file.controllers")

router.get("/", getAllFiles);

module.exports = router;