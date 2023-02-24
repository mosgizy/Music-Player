'use client';

import NavBar from './components/navBar';
import SideBar from './components/sideBar';
import { Providers } from '../../store/provider';
import Controller from './components/Controller';
import { usePathname } from 'next/navigation';
import bg from '../../resources/assets/Lead-image.svg';
import './globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();

	const path = pathname?.includes('/chart/');

	return (
		<html lang="en">
			<head />
			<body className="bg-dark text-light min-height-screen overflow-x-hidden">
				<Providers>
					<NavBar />
					<SideBar />
					<div className="hidden md:block">
						<Controller />
					</div>
					<main
						className="md:pl-24 md:pt-8 md:pb-28 bg-no-repeat bg-fixed bg-cover bg-center"
						style={{
							backgroundImage: `${
								path
									? `linear-gradient(180deg, rgba(29, 33, 35, 0.8) 0%, #1D2123 61.48%),url(${bg.src})`
									: ''
							}`,
						}}
					>
						{children}
					</main>
				</Providers>
			</body>
		</html>
	);
}
