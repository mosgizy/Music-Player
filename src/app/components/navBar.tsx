'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../resources/assets/svg/logo.svg';
import search from '../../../resources/assets/svg/search.svg';
import Image from 'next/image';
import { activeSideBar } from 'store/slice/sideBar';
import { useAppDispatch, useAppSelector } from 'store/hook';

const NavBar = () => {
	const active = useAppSelector((state) => state.sidebar);
	const dispatch = useAppDispatch();

	const handleToggle = () => {
		dispatch(activeSideBar(true));
	};
	return (
		<nav className="flex justify-between gap-8 items-center fixed top-0 w-full z-10 h-10 px-6 py-10 md:pl-36">
			<div className="w-24 flex gap-5 md:hidden">
				<FontAwesomeIcon
					className="w-6 h-6 cursor-pointer"
					icon={faBurger}
					onClick={handleToggle}
				/>
				<Image src={logo} alt="logo" />
			</div>
			<div className="text-[rgba(255,255,255,0.25)]">
				<label className="relative cursor-pointer" htmlFor="search">
					<input
						className="bg-transparent rounded-xl border-none px-2 py-1 md:pl-9 focus-within:outline-darkAlt"
						type="text"
						name="search"
						placeholder="Search artists..."
					/>
					{/* <span className="hidden md:block md:absolute md:-top-0.5 md:left-10">
						Search artists
					</span> */}
					<Image
						className="absolute w-6 -top-1 right-2 md:left-1"
						src={search}
						alt="search"
					/>
				</label>
			</div>
		</nav>
	);
};

export default NavBar;
