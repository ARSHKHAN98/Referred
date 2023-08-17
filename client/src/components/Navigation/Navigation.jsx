import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useDispatch } from "react-redux";
import { setUser, setAuth } from "../../store/authSlice";

const Navigation = () => {
	const dispatch = useDispatch();

	const handleLogout = async (e) => {
		e.preventDefault();
		try {
			dispatch(setUser(""));
			dispatch(setAuth(false));
			localStorage.clear();
		} catch (e) {
			console.log(e.message);
		}
	};

	return (
		<nav className={`${styles.navbar} container `}>
			<Link to="/" style={{ textDecoration: "none" }}>
				<img src="" alt=""></img>
				<span>Referred</span>
			</Link>
			<button onClick={handleLogout}>Logout</button>
		</nav>
	);
};

export default Navigation;
