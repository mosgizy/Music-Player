'use client';
import design from '../../../resources/assets/svg/herodesign.svg';
import designDesk from '../../../resources/assets/svg/herodeskbg.svg';
import heart from '../../../resources/assets/svg/heart.svg';
import avatar from '../../../resources/assets/avatar/avatar.svg';
import heroAvatar from '../../../resources/assets/avatar/hero.svg';
import Image from 'next/image';

const Herocard = () => {
	return (
		<section className="px-5 md:flex-[1_1_65%]">
			<div className="bg-card rounded-3xl py-6 px-8 flex flex-col gap-40 relative md:gap-20 md:items-between md:py-4 md:rounded-[40px] overflow-hidden">
				<div className="absolute top-0 right-0 md:hidden">
					<Image src={design} alt="design" />
				</div>
				<div className="hidden md:block md:absolute top-0 right-0">
					<Image src={designDesk} alt="design desktop" />
				</div>
				<div className="hidden md:block md:absolute top-0 right-0 bottom-0">
					<Image src={heroAvatar} alt="design desktop" />
				</div>
				<div className="text-xs font-normal">Currated playlist</div>
				<div className="flex flex-col gap-6 mt-16 md:mt-0">
					<div className="md:mb-16">
						<h1 className="text-4xl font-bold">R & B Hits</h1>
						<p className="text-sm mt-2 md:w-[40ch]">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
							temporibus laudantium harum asperiores obcaecati pariatur sit
							dolores, eius enim sunt?
						</p>
					</div>
					<div className="flex gap-6 items-center justify-between md:justify-start">
						<div className="flex -space-x-5 rounded-none overflow-hidden">
							<Image
								className="inline-block ring-2 md:w-[40px]"
								src={avatar}
								alt="avatar"
							/>
							<Image
								className="inline-block ring-2 md:w-[40px]"
								src={avatar}
								alt="avatar"
							/>
							<Image
								className="inline-block ring-2 md:w-[40px]"
								src={avatar}
								alt="avatar"
							/>
							<Image
								className="inline-block ring-2 md:w-[40px]"
								src={avatar}
								alt="avatar"
							/>
							<Image
								className="inline-block ring-2 md:w-[40px]"
								src={avatar}
								alt="avatar"
							/>
						</div>
						<div className="flex flex-row gap-4 items-center">
							<Image
								className="md:w-[20px] md:h-[18.67px]"
								src={heart}
								alt="heart"
							/>
							<h2 className="text-1xl md:text-lg">33k Likes</h2>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Herocard;
