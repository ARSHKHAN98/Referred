import React from "react";
import styles from "./Share.module.css";

const Share = () => {
	return (
		<div className="share">
			<div className="container">
				<div className="top">
					<div className="left">
						<img src="" alt="" />
						<input type="text" placeholder={`What's on your mind ?`} />
					</div>
					<div className="right"></div>
				</div>
				<hr />
				<div className="bottom">
					<div className="left"></div>
					<div className="right">
						<button>Share</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Share;
