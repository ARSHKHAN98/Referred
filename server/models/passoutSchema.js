import mongoose from "mongoose";

const passoutSchema = mongoose.Schema({
	YOP: {
		type: String,
		required: true,
	},
	currentCompany: {
		type: String,
	},
	role: {
		type: String,
	},
	resume: {
		type: String,
	},
	numberOfJobPosted: {
		type: Number,
		default: 0,
	},
	userID: {
		type: String,
		required: true,
	},
});

export default mongoose.model("referredPassout", passoutSchema);
