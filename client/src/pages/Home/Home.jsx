import React from "react";
import styles from "./Home.module.css";
import Share from "../../components/Share/Share";
import Posts from "../../components/Posts/Posts";

const Home = () => {
	return (
		<div className={`${styles.homeWrapper}`}>
			<div className={`${styles.column1}`}>left</div>
			<div className={`${styles.column}`}>
				<Share />
				<Posts />
			</div>
			<div className={`${styles.column1}`}>right</div>
		</div>
	);
};

export default Home;
