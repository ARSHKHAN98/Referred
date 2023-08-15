import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
	return (
		<nav className={`${styles.navbar} container`}>
			<Link to="/">
				<img src="" alt=""></img>
				<span>Referred</span>
			</Link>
		</nav>
	);
};

export default Navigation;
