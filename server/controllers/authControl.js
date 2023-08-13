import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import UserSchema from "../models/userSchema.js";
import StudentSchema from "../models/studentSchema.js";
import PassoutSchema from "../models/passoutSchema.js";
import dotenv from "dotenv";

dotenv.config();

class AuthControl {
	async signup(req, res) {
		const { username, name, email } = req.body;
		const password = bcrypt.hashSync(req.body.password, 16);
		const user = await UserSchema.create({ username, name, email, password }); // optional chize

		res.status(200).send(user);
	}

	async studentSignup(req, res) {
		const student = await StudentSchema.create(req.data);
		res.status(200).send(student);
	}

	async passoutSignup(req, res) {
		const passout = await PassoutSchema.create(req.data);
		res.status(200).send(passout);
	}

	async login(req, res) {
		try {
			const user = await UserSchema.findOne({ email: req.body.email });
			const secret = process.env.TOKEN_SECRET;

			if (!user) {
				res.status(401).send({ message: "User not found" });
			}

			const pass = bcrypt.compareSync(req.body.password, user.password);
			const { email, password } = user;

			if (!pass) {
				res.status(402).send({ message: "Incorrect Password" });
			}

			const token = jwt.sign({ email, password }, secret, {
				algorithm: "HS256",
				allowInsecureKeySizes: true,
				expiresIn: 86400,
			});

			res.cookie("token", token, {
				maxAge: 1000 * 60 * 60 * 24 * 30,
				httpOnly: true,
			});

			res.status(200).send(user);
		} catch (err) {
			res.status(501).send({ message: err.message });
		}
	}
}

export default new AuthControl();
