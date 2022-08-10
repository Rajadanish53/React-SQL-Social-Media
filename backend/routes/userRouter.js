const { createNewUser, loginUser } = require("../controllers/userController");

const router = require("express").Router();

router.post("/register", createNewUser);
router.post("/login", loginUser);
module.exports = router;
