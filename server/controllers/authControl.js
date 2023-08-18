import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import UserSchema from "../models/userSchema.js";
import dotenv from "dotenv";

dotenv.config();

class AuthControl {
	async signup(req, res) {
		try {
			const { username, name, email, role, currentCompany, resume, YOP, branch } = req.body;
			const password = bcrypt.hashSync(req.body.password, 8);
			const linkedin = req.body.linekdin || "";
			const github = req.body.github || "";
			const profilePhoto = req.profilePhoto || "";
			const user = await UserSchema.create({ username, name, email, password, linkedin, github, profilePhoto, resume, YOP, branch, role, currentCompany });
			res.status(200).send(user);
		} catch (err) {
			res.status(501).send({ message: err.message });
		}
	}

	async login(req, res) {
		try {
			const user = await UserSchema.findOne({ email: req.body.email });

			if (!user) {
				res.status(401).send({ message: "User not found" });
			} else {
				const pass = bcrypt.compareSync(req.body.password, user.password);
				if (!pass) {
					res.status(402).send({ message: "Incorrect Password" });
				} else {
					const accessToken = jwt.sign({ user: user }, process.env.TOKEN_SECRET, { expiresIn: "1h" });
					const refreshToken = jwt.sign({ user: user }, process.env.TOKEN_SECRET, { expiresIn: "1d" });
					await res.cookie("refreshToken", refreshToken, { httpOnly: true, sameSite: "strict" }).header("accessToken", accessToken);
					res.status(200).send(user);
				}
			}
		} catch (err) {
			res.status(501).send({ message: err.message });
		}
	}
}

export default new AuthControl();
