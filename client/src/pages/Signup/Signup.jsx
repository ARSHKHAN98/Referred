import React from "react";
import styles from "./Signup.module.css";

const Signup = () => {
	return (
		<div className={`${styles.cardWrapper}`}>
			<div className={`${styles.card}`}>
				<div className={`${styles.left}`}>
					<div className={`${styles.header}`}>Welcome to Referred</div>
					<div className={`${styles.subheader}`}>Please enter your details</div>
					<label htmlFor="name">Name</label>
					<input id="name"></input>
					<label htmlFor="username">Username</label>
					<input id="username"></input>
					<label htmlFor="email">Email</label>
					<input id="email"></input>
					<label htmlFor="password">Password</label>
					<input id="password"></input>
					<button>Sign Up</button>
				</div>
				{/* <div className={`${styles.right}`}>image</div> */}
			</div>
		</div>
	);
};

export default Signup;
