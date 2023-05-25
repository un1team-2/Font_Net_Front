import React from "react";
import Header from "./header";
import Background from "@/modules/background/background";
import Footer from "@/modules/main/footer/footer";

type Props = {
	children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Header />
			<Background />
			{children}
			<Footer data={[{ title: 'Следите за нами в телеграмме !', links: [{ label: 'Telegram-канал', link: 'https://t.me/fontrus' },{ label: 'Telegram-Бот', link: 'https://t.me/FontNET_bot' }]}]} />
		</>
	);
};

export default React.memo(Layout);
