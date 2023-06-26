const router = require("express").Router();

router.use("/movies", require('./movies.routes'));
router.use("/todos", require("./auth.routes"));

module.exports = router