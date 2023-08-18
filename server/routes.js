import express from "express";
import AuthMiddleware from "./middlewares/authMiddleware.js";
import AuthControl from "./controllers/authControl.js";
import jobPostControl from "./controllers/jobPostControl.js";
import jobRolecheck from "./middlewares/jobPostMiddleware.js";
import requestMiddleware from "./middlewares/requestMiddleware.js";
import requestControl from "./controllers/requestControl.js";

const router = express.Router();

router.post("/api/login", AuthControl.login);
router.post("/api/signup", AuthMiddleware.userExists, AuthControl.signup);
// router.post("/api/studentsignup", AuthControl.studentSignup);
// router.post("/api/passoutsignup", AuthControl.passoutSignup);
router.post("/api/request", [AuthMiddleware.verifyToken, requestMiddleware.requestCheck], requestControl.post);
router.post("/api/requests", AuthMiddleware.verifyToken, requestControl.fetch);
router.post("/api/approve", [AuthMiddleware.verifyToken, requestMiddleware.expiredCheck], requestControl.approv);
router.get("/api/jobposts", AuthMiddleware.verifyToken, jobPostControl.fetch);
router.post("/api/jobposts", [AuthMiddleware.verifyToken, jobRolecheck], jobPostControl.post);
// router.post("/api/profile", profileController);
// router.post("/api/notifications", notiController);

export default router;
