import "./globals.css";
import { Poppins } from "next/font/google";

const fontPoppins = Poppins({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	variable: "--font-poppins",
});

export const metadata = {
	title: "Portfílio",
	description: "Conheça um ótimo desenvolvedor",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-br" className={`${fontPoppins.variable}`}>
			<body>{children}</body>
		</html>
	);
}
