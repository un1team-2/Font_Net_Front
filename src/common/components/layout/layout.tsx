import React from "react";
import Header from "./header";
import Background from "@/modules/background/background";

type Props = {
	children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Header />
			<Background/>
			{children}
		</>
	);
};

export default React.memo(Layout);
