import jobPostSchema from "../models/jobPostSchema.js";

class jobPostControl {
	async fetch(req, res) {
		try {
			let posts = await jobPostSchema.find();
			const { user } = req;
			posts = posts.filter((post) => !user.applied.includes(post._id.toString()));
			res.status(200).send(posts);
		} catch (err) {
			res.status(501).send({ message: err.message });
		}
	}

	async post(req, res) {
		try {
			const { description, companyName, role } = req.body;
			const userID = req.user._id;
			const job = await jobPostSchema.create({ description, companyName, userID, role });
			res.status(200).send(job);
		} catch (err) {
			res.status(501).send({ message: err.message });
		}
	}
}

export default new jobPostControl();
