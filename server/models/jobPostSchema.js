import mongoose from "mongoose";

const jonPostSchema = mongoose.Schema({
	desciption: {
		type: String,
	},
	userID: {
		type: String,
	},
	timestamps: Date,
});

export default mongoose.model("referredJobPost", jonPostSchema);
