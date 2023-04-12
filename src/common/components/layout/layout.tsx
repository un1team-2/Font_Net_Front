import React from "react";
import Header from "./header";

type Props = {
	children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};

export default React.memo(Layout);
