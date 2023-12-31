import mongoose from "mongoose";

const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	linkedin: {
		type: String,
	},
	github: {
		type: String,
	},
	email: {
		type: String,
		unique: true,
	},
	profilePhoto: {
		type: String,
	},
	applied: [
		{
			type: String,
		},
	],
	resume: {
		type: String,
	},
	YOP: {
		type: Number,
	},
	branch: {
		type: String,
	},
	role: {
		type: String,
	},
	currentCompany: {
		type: String,
	},
	timestamps: Date,
});

export default mongoose.model("referredUser", userSchema);
