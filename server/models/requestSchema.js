import mongoose, { now } from "mongoose";

const requestSchema = mongoose.Schema({
	userID: {
		type: String,
		required: true,
	},
	postID: {
		type: String,
		required: true,
	},
	resume: {
		type: String,
		required: true,
	},
	status: {
		type: Boolean,
		default: false,
		required: true,
	},
	date: {
		type: Date,
		default: now,
	},
});

export default mongoose.model("referredRequest", requestSchema);
