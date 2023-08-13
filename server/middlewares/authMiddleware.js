import userSchema from "../models/userSchema.js";
import jwt from "jsonwebtoken";

class AuthMiddleware {
	async userExists(req, res, next) {
		const user = await userSchema.findOne({ username: req.body.username });
		const user2 = await userSchema.findOne({ email: req.body.email });

		if (user) {
			res.status(401).send({ message: "Username Already Exits" });
		} else if (user2) {
			res.status(401).send({ message: "Email Already Exits" });
		}
		next();
	}

	async checkToken(req, res, next) {
		const token = req.session.token;
		if (!token) {
			res.send(403).send({ message: "Token not provided" });
		}
		jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
			if (err) {
				return res.status(401).send({
					message: "Invalid Token",
				});
			}
			req.userId = decoded.id;
			next();
		});
	}
}

export default new AuthMiddleware();
