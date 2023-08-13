import express from "express";
import AuthMiddleware from "./middlewares/authMiddleware.js";
import AuthControl from "./controllers/authControl.js";

const router = express.Router();

router.post("/api/login", AuthControl.login);
router.post("/api/signup", AuthMiddleware.userExists, AuthControl.signup);
router.post("/api/studentsignup", AuthControl.studentSignup);
router.post("/api/passoutsignup", AuthControl.passoutSignup);
// router.post("/api/home", homeController);
// router.get("/api/requests", requestController);
// router.post("/api/profile", profileController);
// router.post("/api/notifications", notiController);

export default router;
