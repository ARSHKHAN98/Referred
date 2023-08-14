import mongoose from "mongoose";

const jobPostSchema = mongoose.Schema({
	userID: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	companyName: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		required: true,
	},
});

export default mongoose.model("referredJobPost", jobPostSchema);
