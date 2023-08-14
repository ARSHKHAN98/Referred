import requestSchema from "../models/requestSchema.js";

class requestMiddleware {
	async requestCheck(req, res, next) {
		try {
			const { userID, postID } = req.body;
			const request = await requestSchema.findOne({ userID, postID });
			if (request) {
				res.status(400).send({ message: "request already made" });
			} else next();
		} catch (err) {
			res.status(500).send({ message: err.message });
		}
	}

	async expiredCheck(req, res, next) {
		try {
			const { userID, postID } = req.body;
			const date = new Date();
			const request = await requestSchema.findOne({ userID, postID });
			if (date - request.date >= 2.592e6) {
				await requestSchema.deleteOne({ _id: request._id });
				res.status(400).send({ message: "Request Expired" });
			} else next();
		} catch (err) {
			res.status(500).send({ message: err.message });
		}
	}
}

export default new requestMiddleware();
