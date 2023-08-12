import mongoose from "mongoose";

const requestSchema = mongoose.Schema({
	studentID: {
		type: String,
	},
	studentName: {
		type: String,
	},
	resume: {
		type: String,
	},
	timestamps: Date,
});

export default mongoose.model("referredRequest", requestSchema);
