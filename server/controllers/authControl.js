import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import UserSchema from "../models/userSchema.js";
import StudentSchema from "../models/studentSchema.js";
import PassoutSchema from "../models/passoutSchema.js";
import dotenv from "dotenv";

dotenv.config();

class AuthControl {
	async signup(req, res) {
		try {
			const { username, name, email } = req.body;
			const password = bcrypt.hashSync(req.body.password, 8);
			const linkedin = req.body.linekdin || "";
			const github = req.body.github || "";
			const profilePhoto = req.profilePhoto || "";
			const user = await UserSchema.create({ username, name, email, password, linkedin, github, profilePhoto });
			res.status(200).send(user);
		} catch (err) {
			res.status(501).send({ message: err.message });
		}
	}

	async studentSignup(req, res) {
		try {
			const { resume, YOP, branch } = req.body;
			const userID = req.user._id;
			const student = await StudentSchema.create({ resume, YOP, branch, userID });
			res.status(200).send(student);
		} catch (err) {
			res.status(501).send({ message: err.message });
		}
	}

	async passoutSignup(req, res) {
		try {
			const { YOP } = req.body;
			const role = req.body.role || "";
			const currentCompany = req.body.currentCompany || "";
			const resume = req.body.resume || "";
			const userID = req.user._id;
			const passout = await PassoutSchema.create({ YOP, role, currentCompany, resume, userID });
			res.status(200).send(passout);
		} catch (err) {
			res.status(501).send({ message: err.message });
		}
	}

	async login(req, res) {
		try {
			const user = await UserSchema.findOne({ email: req.body.email });
			const secret = process.env.TOKEN_SECRET;

			if (!user) {
				res.status(401).send({ message: "User not found" });
			}

			const pass = bcrypt.compareSync(req.body.password, user.password);

			if (!pass) {
				res.status(402).send({ message: "Incorrect Password" });
			}

			const accessToken = jwt.sign({ user: user }, process.env.TOKEN_SECRET, { expiresIn: "1h" });
			const refreshToken = jwt.sign({ user: user }, process.env.TOKEN_SECRET, { expiresIn: "1d" });
			res.cookie("refreshToken", refreshToken, { httpOnly: true, sameSite: "strict" }).header("accessToken", accessToken);

			res.status(200).send(user);
		} catch (err) {
			res.status(501).send({ message: err.message });
		}
	}
}

export default new AuthControl();
