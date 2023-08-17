import React from "react";
import styles from "./Signup.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const handleSignup = async (e) => {
		try {
			await axios.post("http://localhost:4000/api/signup", { username, password, name, email });
			navigate("/login");
		} catch (err) {
			console.log(err.message);
		}
	};

	const handleNavigate = (e) => {
		navigate("/login");
	};

	return (
		<div className={`${styles.cardWrapper}`}>
			<div className={`${styles.card}`}>
				<div className={`${styles.cardHeader}`}>
					<div>Welcome to Referred</div>
				</div>
				<div className={`${styles.cardBody}`}>
					<div className={`${styles.cardInput}`}>
						<label htmlFor="name">Name</label>
						<input id="name" onChange={(e) => setName(e.target.value)}></input>
					</div>
					<div className={`${styles.cardInput}`}>
						<label htmlFor="username">Username</label>
						<input onChange={(e) => setUsername(e.target.value)} id="username"></input>
					</div>
					<div className={`${styles.cardInput}`}>
						<label htmlFor="email">Email</label>
						<input onChange={(e) => setEmail(e.target.value)} id="email"></input>
					</div>
					<div className={`${styles.cardInput}`}>
						<label htmlFor="password">Password</label>
						<input type="password" onChange={(e) => setPassword(e.target.value)} id="password"></input>
					</div>
					<div className="buttons">
						<button className="signup-button" onClick={handleSignup}>
							Sign Up
						</button>
						<button className="signup-button" onClick={handleNavigate}>
							Login
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
