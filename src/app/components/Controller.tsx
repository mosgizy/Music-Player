'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faShuffle,
	faBackward,
	faPlay,
	faPause,
	faForward,
	faRepeat,
	faVolumeUp,
	faVolumeXmark,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import musicAvatar from '../../../resources/assets/avatar/music.png';

const Controller = () => {
	return (
		<div className="fixed z-50 bottom-0 py-8 px-6 md:px-10 md:py-5 bg-[rgba(29,33,35,0.3)] backdrop-blur-lg w-full border border-[rgba(255,255,255,0.1)]">
			<div className="flex flex-row justify-between items-center md:gap-8">
				<div className="flex flex-row gap-4 items-center">
					<Image
						className="w-[57px] h-[57px] rounded-2xl"
						src={musicAvatar}
						alt="Avatar"
					/>
					<div className="">
						<p className="text-sm">Seasons in</p>
						<p className="text-xs opacity-50 mt-1">James</p>
					</div>
				</div>
				<div className="hidden md:block md:flex-1">
					<div className="flex flex-row gap-6 items-center justify-center text-base">
						<FontAwesomeIcon icon={faShuffle} />
						<FontAwesomeIcon icon={faBackward} />
						<div className="bg-secondary rounded-full flex justify-center items-center h-[34px] w-[34px] shadow-3xl">
							<FontAwesomeIcon icon={faPlay} />
						</div>
						<FontAwesomeIcon icon={faForward} />
						<FontAwesomeIcon icon={faRepeat} />
					</div>
					<div className="w-full mt-6 bg-[rgba(255,255,255,0.04)] overflow-hidden rounded-full">
						<div className="w-[20%] h-1 bg-secondary"></div>
					</div>
				</div>
				<div className="hidden md:flex md:flex-row md:gap-4 md:items-center md:flex-initial md:w-48">
					<FontAwesomeIcon icon={faVolumeUp} />
					<div className="w-full bg-[rgba(255,255,255,0.04)] overflow-hidden rounded-full">
						<div className="w-[20%] h-1 bg-secondary"></div>
					</div>
				</div>
				<div className="flex flex-row items-center gap-6 md:hidden">
					<div className="bg-secondary rounded-full flex justify-center items-center h-[34px] w-[34px] shadow-3xl">
						<FontAwesomeIcon icon={faPlay} />
					</div>
					<FontAwesomeIcon icon={faForward} />
				</div>
			</div>
		</div>
	);
};

export default Controller;
