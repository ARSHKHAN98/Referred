import mongoose from "mongoose";

const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	userName: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	Linkedin: {
		type: String,
	},
	Github: {
		type: String,
	},
	email: {
		type: String,
		unique: true,
	},
	profilePhoto: {
		type: String,
	},
	Followings: [
		{
			type: String,
		},
	],
	timestamps: Date,
});

export default mongoose.model("referredUser", userSchema);
