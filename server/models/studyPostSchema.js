import mongoose from "mongoose";

const studyPostSchema = mongoose.Schema({
	desciption: {
		type: String,
	},
	userID: {
		type: String,
	},
	PDF: {
		type: String,
	},
	timestamps: Date,
});

export default mongoose.model("referredStudyPost", studyPostSchema);
