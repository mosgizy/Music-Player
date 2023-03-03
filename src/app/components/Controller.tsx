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
import { useAppSelector, useAppDispatch } from 'store/hook';
import { useState, useEffect, memo } from 'react';
import { handleTrackUpload } from 'resources/helper/functions';
import { setTrackList, changeTrack } from 'store/slice/track';

const Controller = () => {
	const { audioUrl, image, name, title, tracks } = useAppSelector(
		(state) => state.trackSlice
	);
	const { albums } = useAppSelector((state) => state.albumSlice);
	const dispatch = useAppDispatch();

	const [playing, setPlaying] = useState<boolean>(false);
	const [audio] = useState(new Audio(audioUrl));
	const [progress, setProgress] = useState<number>(0);
	const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
	// const [repeat, setRepeat] = useState()

	const audioProgress = () => {
		const { currentTime, duration } = audio;
		setProgress(Math.floor((currentTime / duration) * 100));
		progress > 98 && setProgress(0);
	};

	const handlePlay = () => {
		setPlaying((prev) => !prev);
	};

	const handleChangeTrack = (index: number) => {
		if (!tracks) return;
		const track = tracks[index];
		const change = {
			audioUrl: track.preview_url,
			title: track.name,
		};
		dispatch(changeTrack(change));
		setPlaying(false);
	};

	const handleNext = () => {
		if (!tracks) return;
		if (currentTrackIndex >= tracks?.length - 1) {
			setCurrentTrackIndex(0);
			handleChangeTrack(0);
		} else {
			setCurrentTrackIndex((prev) => prev + 1);
			handleChangeTrack(currentTrackIndex + 1);
		}
	};

	const handlePrev = () => {
		if (!tracks) return;
		if (currentTrackIndex <= 0) {
			setCurrentTrackIndex(tracks?.length - 1);
			handleChangeTrack(tracks?.length - 1);
		} else {
			setCurrentTrackIndex((prev) => prev - 1);
			handleChangeTrack(currentTrackIndex - 1);
		}
	};

	const handleShuffleTracks = () => {
		const newtracks = tracks
			?.map((value: any) => ({ value, sort: Math.random() }))
			.sort((a: any, b: any) => a.sort - b.sort)
			.map(({ value }: any) => value);
		dispatch(setTrackList(newtracks));
	};

	useEffect(() => {
		audio.src = audioUrl;
		audio.currentTime = 0;
		setProgress(0);
		setPlaying(true);
	}, [audioUrl]);

	useEffect(() => {
		playing ? audio.play() : audio.pause();
	}, [playing]);

	useEffect(() => {
		audio.addEventListener('ended', handleNext);
		return () => {
			audio.removeEventListener('ended', handleNext);
		};
	});
	audio.addEventListener('timeupdate', audioProgress);
	// console.log(playing);

	return (
		<div className="fixed z-50 bottom-0 py-8 px-6 md:px-10 md:py-5 bg-[rgba(29,33,35,0.3)] backdrop-blur-lg w-full border border-[rgba(255,255,255,0.1)]">
			<div className="flex flex-row justify-between items-center md:gap-8">
				<div className="flex flex-row gap-4 items-center">
					<Image
						className="rounded-2xl"
						src={image}
						alt="Avatar"
						width={57}
						height={57}
					/>
					<div className="">
						<p className="text-sm">{title}</p>
						<p className="text-xs opacity-50 mt-1">{name}</p>
					</div>
				</div>
				<div className="hidden md:block md:flex-1">
					<div className="flex flex-row gap-6 items-center justify-center text-base">
						<FontAwesomeIcon
							onClick={handleShuffleTracks}
							className="w-[16px] h-[16px] cursor-pointer"
							icon={faShuffle}
						/>
						<FontAwesomeIcon
							onClick={handlePrev}
							className="w-[16px] h-[16px] cursor-pointer"
							icon={faBackward}
						/>
						<div
							onClick={handlePlay}
							className="bg-secondary rounded-full flex justify-center cursor-pointer items-center h-[34px] w-[34px] shadow-3xl"
						>
							<FontAwesomeIcon
								className="w-[16px] h-[16px]"
								icon={playing ? faPause : faPlay}
							/>
						</div>
						<FontAwesomeIcon
							onClick={handleNext}
							className="w-[16px] h-[16px] cursor-pointer"
							icon={faForward}
						/>
						<FontAwesomeIcon
							className="w-[16px] h-[16px] cursor-pointer"
							icon={faRepeat}
						/>
					</div>
					<div className="w-full mt-6 bg-[rgba(255,255,255,0.04)] overflow-hidden rounded-full">
						<div
							className={`h-1 bg-secondary`}
							style={{ width: `${Number(progress)}%` }}
						></div>
					</div>
				</div>
				<div className="hidden md:flex md:flex-row md:gap-4 md:items-center md:flex-initial md:w-48">
					<FontAwesomeIcon
						className="w-[18px] h-[18px] cursor-pointer"
						icon={faVolumeUp}
					/>
					<div className="w-full bg-[rgba(255,255,255,0.04)] overflow-hidden rounded-full">
						<div className="w-[20%] h-1 bg-secondary"></div>
					</div>
				</div>
				<div className="flex flex-row items-center gap-6 md:hidden">
					<div
						onClick={handlePlay}
						className="bg-secondary rounded-full flex justify-center items-center h-[34px] w-[34px] shadow-3xl"
					>
						<FontAwesomeIcon icon={faPlay} />
					</div>
					<FontAwesomeIcon icon={faForward} />
				</div>
			</div>
		</div>
	);
};

export default memo(Controller);
