import jobPostSchema from "../models/jobPostSchema.js";

const jobRolecheck = async (req, res, next) => {
	const { role } = req.body;
	const job = await jobPostSchema.findOne({ role });
	if (job) {
		res.status(400).send({ message: "Role Already Posted" });
	} else next();
};

export default jobRolecheck;
