const express = require("express");
const router = express.Router();

const { signup,
  signin,
  signout,
  requireSignin,
  forgotPassword,
    resetPassword
   } = require("../controllers/auth");


// import password reset validator
const { userSignupValidator , passwordResetValidator} = require("../validator");

router.post("/signup", userSignupValidator, signup);
router.post("/signin",  signin);
router.get("/signout",  signout);
// password forgot and reset routes
router.put("/forgot-password", forgotPassword);
router.put("/reset-password", passwordResetValidator, resetPassword);




module.exports = router;
