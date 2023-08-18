import React from "react";
import styles from "./Signup.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
	const navigate = useNavigate();
	const [student, setStudent] = useState(true);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [branch, setBranch] = useState("");
	const [resume, setResume] = useState("");
	const [role, setRole] = useState("");
	const [currentCompany, setCurrentCompany] = useState("");
	const [YOP, setYOP] = useState(2024);
	const [nextSection, setNextSection] = useState(false);

	const handleSignup = async (e) => {
		try {
			if (!nextSection) {
				const currentYear = new Date().getFullYear();
				if (YOP < currentYear) setStudent(false);
				setNextSection(true);
			} else {
				await axios.post("http://localhost:4000/api/signup", { username, password, name, email, resume, branch, YOP, currentCompany, role });
				navigate("/login");
			}
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
					<div className={`${styles.cardInput}`}>
						<label htmlFor="YOP">Graduation Year</label>
						<input type="number" onChange={(e) => setYOP(e.target.value)} id="YOP"></input>
					</div>
					{nextSection &&
						(student ? (
							<div>
								<div className={`${styles.cardInput}`}>
									<label htmlFor="branch">Branch</label>
									<input id="branch" onChange={(e) => setBranch(e.target.value)}></input>
								</div>
								<div className={`${styles.cardInput}`}>
									<label htmlFor="resume">Resume</label>
									<input onChange={(e) => setResume(e.target.value)} id="resume"></input>
								</div>
							</div>
						) : (
							<div>
								<div className={`${styles.cardInput}`}>
									<label htmlFor="currentCompany">Current Company</label>
									<input id="currentCompany" onChange={(e) => setCurrentCompany(e.target.value)}></input>
								</div>
								<div className={`${styles.cardInput}`}>
									<label htmlFor="resume">Resume</label>
									<input onChange={(e) => setResume(e.target.value)} id="resume"></input>
								</div>
								<div className={`${styles.cardInput}`}>
									<label htmlFor="role">Role</label>
									<input onChange={(e) => setRole(e.target.value)} id="role"></input>
								</div>
							</div>
						))}
					<div className="buttons">
						<button className="signup-button" onClick={handleSignup}>
							{nextSection ? "Signup" : "Next"}
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
