import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setUser, setAuth } from "../../store/authSlice";

const Signup = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const user = await axios.post("http://localhost:4000/api/login", { password, email });
			navigate("/");
			dispatch(setUser(user.data));
			dispatch(setAuth({ auth: true }));
		} catch (err) {
			console.log(err.message);
		}
	};

	const handleNavigate = (e) => {
		navigate("/signup");
	};

	return (
		<div className={`${styles.cardWrapper}`}>
			<div className={`${styles.card}`}>
				<div className={`${styles.cardHeader}`}>
					<div>Welcome to Referred</div>
				</div>
				<div className={`${styles.cardBody}`}>
					<div className={`${styles.cardInput}`}>
						<label htmlFor="email">Email</label>
						<input id="email" onChange={(e) => setEmail(e.target.value)}></input>
					</div>
					<div className={`${styles.cardInput}`}>
						<label htmlFor="password">Password</label>
						<input id="password" type="password" onChange={(e) => setPassword(e.target.value)}></input>
					</div>
					<div className="buttons">
						<button className="signup-button" onClick={handleLogin}>
							Login
						</button>
						<button className="signup-button" onClick={handleNavigate}>
							Signup
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
