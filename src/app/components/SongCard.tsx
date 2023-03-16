'use client';

import Image from 'next/image';
import labelAvatar from '../../../resources/assets/avatar/label.svg';

interface songCardI {
	image: string;
	title: string;
	name: string;
	// func: any;
}

const SongCard = ({ image, title, name }: songCardI) => {
	return (
		<div
			className="flex flex-col gap-1 w-[153px] cursor-pointer"
			// onClick={func}
		>
			<Image
				className="rounded-3xl"
				src={image}
				width={153}
				height={153}
				alt="avatar"
			/>
			<p className="text-xs">{title}</p>
			<p className="text-sm opacity-50">{name}</p>
		</div>
	);
};

export default SongCard;
