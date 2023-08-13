import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
	branch: {
		type: String,
		required: true,
	},
	YOP: {
		type: String,
		required: true,
	},
	resume: {
		type: String,
		required: true,
	},
	numberOfTimesReferred: {
		type: Number,
		default: 0,
	},
	userID: {
		type: String,
		required: true,
	},
});

export default mongoose.model("referredStudent", studentSchema);
