import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cookieSession from "cookie-session";
import routes from "./routes.js";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();

app.use(bodyParser.json({ limit: "50mb" }));
app.use (cookieParser());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());
app.use(routes);
app.use(
	cookieSession({
		name: "refereed-session",
		keys: [process.env.SECRET],
		httpOnly: true,
	})
);
app.use(
	cors({
		origin: "http://localhost:3000",
	})
);

mongoose.set("strictQuery", false);

mongoose
	.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Connected to Server"))
	.catch((error) => console.log(error.message));

app.listen(process.env.PORT || 4000, () => console.log(`Server running on port: ${process.env.PORT || 4000}`));
