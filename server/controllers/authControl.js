import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import UserSchema from "../models/userSchema.js";
import StudentSchema from "../models/studentSchema.js";
import PassoutSchema from "../models/passoutSchema.js";

class AuthControl {
	async signup(req, res) {
		try {
			const { userName, name, email } = req.body;

			const SECRET_KEY = "8eb2e62432950d71d3cac50fabce8d43e056d854820b1284a5e5752eb1660f93d6d1353d0db289a9bee49382017cbe8aa590f0e47099f6e7c899eded174fc3e3";

			const token = await jwt.sign({ id: user.id }, SECRET_KEY, {
				algorithm: "HS256",
				allowInsecureKeySizes: true,
				expiresIn: 86400,
			});

			req.session.token = token;

			const password = await bcrypt.hashSync(req.body.password, 16);
			const user = await UserSchema.create({ userName, name, email, password });

			res.status(200).send(user);
		} catch (err) {
			res.status(501).send({ message: err.message });
		}
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

			if (!user) {
				res.status(401).send({ message: "User not found" });
			}

			if (bcrypt.compareSync(req.body.password, user.password)) {
				res.status(402).send({ message: "Incorrect Password" });
			}

			res.status(200).send(user);
		} catch (err) {
			res.status(501).send({ message: err });
		}
	}
}

export default new AuthControl();
