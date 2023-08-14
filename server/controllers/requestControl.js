import requestSchema from "../models/requestSchema.js";

class requestControl {
	async fetch(req, res) {
		try {
			const { postID } = req.body;
			const { _id } = req.user;
			let requests = await requestSchema.find({ postID: { $all: postID } });
			res.status(200).send(requests);
		} catch (err) {
			res.status(500).send({ message: err.message });
		}
	}

	async post(req, res) {
		try {
			const { postID, userID, resume } = req.body;
			const request = await requestSchema.create({ postID, userID, resume });
			res.status(200).send(request);
		} catch (err) {
			res.status(500).send({ message: err.message });
		}
	}

	async approv(req, res) {
		try {
			const { requestID } = req.body;
			const request = await requestSchema.updateOne({ _id: requestID }, { status: true });
			res.status(200).send(request);
		} catch (err) {
			res.status(500).send({ message: err.message });
		}
	}
}

export default new requestControl();
