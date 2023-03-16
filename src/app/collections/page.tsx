'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import cover from '../../../resources/assets/avatar/cover.svg';
import { useState } from 'react';

const Collections = () => {
	const [active, setActive] = useState<boolean>(false);

	const handleClick = () => {
		setActive((prev) => !prev);
	};

	return (
		<section className="pt-20 px-5">
			<div className="flex flex-row gap-3 justify-between md:justify-start">
				<button
					className={`flex-1 md:flex-none rounded-[27px] px-2.5 py-2.5 md:px-9 cursor-pointer text-sm bg-secondary text-dark ${
						active && 'bg-transparent border border-light text-light opacity-25'
					}`}
					onClick={handleClick}
				>
					My collection
				</button>
				<button
					className={`flex-1 md:flex-none rounded-[27px] px-2.5 py-2.5 md:px-9 cursor-pointer text-sm bg-secondary text-dark ${
						!active &&
						'bg-transparent border border-light text-light opacity-25'
					}`}
					onClick={handleClick}
				>
					Likes
				</button>
			</div>
			<div className="mt-6 flex flex-col flex-wrap gap-6 md:flex-row md:items-start">
				<div
					className="group bg-no-repeat bg-cover flex flex-row justify-between items-end rounded-[20px] w-full h-[234px] p-5 md:flex-[1_0_24%] lg:flex-[1_0_18.6%]  overflow-hidden"
					style={{
						backgroundImage: `linear-gradient(179.89deg, rgba(0, 0, 0, 0) 0.1%, rgba(15, 18, 19, 0.85) 80.67%),url(${cover.src})`,
					}}
				>
					<div className="flex flex-col gap-6 text-light transition-transform md:translate-y-11 md:group-hover:translate-y-0">
						<div className="flex flex-col gap-0">
							<h1 className="text-[24px] font-normal">Limits</h1>
							<p className="text-[10px] opacity-40">John watts</p>
						</div>
						<div className="text-sm text-white font-normal">2.3m likes</div>
					</div>
					<div className="flex justify-center items-center cursor-pointer bg-[rgba(250,205,102,0.4)] w-[34px] h-[34px] rounded-full transition-all md:hidden md:group-hover:flex">
						<FontAwesomeIcon className="text-secondary" icon={faPlay} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Collections;
