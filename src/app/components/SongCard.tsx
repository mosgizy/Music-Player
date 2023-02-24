'use client';

import Image from 'next/image';
import labelAvatar from '../../../resources/assets/avatar/label.svg';

const SongCard = () => {
	return (
		<div className="flex flex-col gap-1 w-[153px]">
			<Image className="rounded-3xl" src={labelAvatar} alt="avatar" />
			<p className="text-xs">Life in a bubble</p>
			<p className="text-sm opacity-50">Asterisk</p>
		</div>
	);
};

export default SongCard;
