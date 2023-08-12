import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
	branch: {
		type: String,
	},
	YOP: {
		type: String,
	},
	resume: {
		type: String,
		required: true,
	},
	skills: {
		type: String,
	},
	numberOfTimesReferred: {
		type: Number,
	},
	Followings: {
		type: Object,
	},
	email: {
		type: String,
	},
});

export default mongoose.model("referredStudent", studentSchema);
