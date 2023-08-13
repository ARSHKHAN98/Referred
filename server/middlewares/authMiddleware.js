import userSchema from "../models/userSchema.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

class AuthMiddleware {
	async userExists(req, res, next) {
		const user = await userSchema.findOne({ username: req.body.username });
		const user2 = await userSchema.findOne({ email: req.body.email });
		console.log(user2);
		if (user2) {
			res.status(401).send({ message: "Username Already Exits" });
		} else if (user) {
			res.status(401).send({ message: "Email Already Exits" });
		} else next();
	}

	async verifyToken(req, res, next) {
		const accessToken = req.headers["accessToken"];
		const refreshToken = req.cookies["refreshToken"];

		if (!accessToken && !refreshToken) {
			res.status(401).send("Refresh Token Expired");
		}

		// check if accessToken is avaliable
		try {
			const decoded = jwt.verify(accessToken, process.env.TOKEN_SECRET);
			req.user = decoded.user;
			next();
		} catch (err) {
			res.status(501).send("Internal Error");
		}

		// check if access token is not avaliable
		try {
			const decoded = jwt.verify(refreshToken, process.env.TOKEN_SECRET);
			const accessToken = jwt.sign({ user: decoded.user }, secretKey, { expiresIn: "1h" });
			req.user = decoded.user;
			res.cookie("refreshToken", refreshToken, { httpOnly: true, sameSite: "strict" }).header("accessToken", accessToken);
			next();
		} catch (err) {
			res.status(501).send("Internal Error");
		}
	}
}

export default new AuthMiddleware();
