import React from "react";
import "./styles.css";

interface PaperProps {
	children: React.ReactNode;
}

const Paper: React.FC<PaperProps> = ({ children }) => {
	return (
		<div className="paper-container">
			<span>{children}</span>
		</div>
	);
};

export default Paper;
