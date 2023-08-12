import mongoose from "mongoose";

const passoutSchema = mongoose.Schema({
	YOP: {
		type: String,
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
	},
	email: {
		type: String,
	},
});

export default mongoose.model("referredPassout", passoutSchema);
