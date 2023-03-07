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
import { useState, useEffect, memo, useLayoutEffect, useReducer } from 'react';
import {
	setTrackList,
	changeTrack,
	setPlaying,
	setRepeatTrack,
} from 'store/slice/track';

const Controller = () => {
	const { audioUrl, image, name, title, tracks, play, trackId, repeatTrack } =
		useAppSelector((state) => state.trackSlice);
	const dispatch = useAppDispatch();

	const [audio] = useState(new Audio(audioUrl));

	const [event, updateEvent] = useReducer(
		(prev: any, next: any) => {
			return { ...prev, ...next };
		},
		{ progress: 0, currentTrackIndex: 0, shuffle: false }
	);

	const audioProgress = () => {
		const { currentTime, duration } = audio;
		updateEvent({ progress: Math.floor((currentTime / duration) * 100) });
		event.progress > 98.9 && updateEvent({ progress: 0 });
	};

	const handlePlay = () => {
		dispatch(setPlaying(!play));
	};

	const handleChangeTrack = (index: number) => {
		if (!tracks) return;
		const track = tracks[index];
		const change = {
			audioUrl: track.preview_url,
			title: track.name,
			trackId: track.id,
		};
		dispatch(changeTrack(change));

		setTimeout(() => {
			dispatch(setPlaying(true));
		}, 1);
	};

	const handleNext = () => {
		if (!tracks) return;
		if (event.currentTrackIndex >= tracks?.length - 1) {
			updateEvent({ currentTrackIndex: 0 });
			handleChangeTrack(0);
			!event.repeat && dispatch(setPlaying(false));
		} else {
			updateEvent({ currentTrackIndex: event.currentTrackIndex + 1 });
			handleChangeTrack(event.currentTrackIndex + 1);
		}
	};

	const handlePrev = () => {
		if (!tracks) return;
		if (event.currentTrackIndex <= 0) {
			updateEvent({ currentTrackIndex: tracks?.length - 1 });
			handleChangeTrack(tracks?.length - 1);
		} else {
			updateEvent({ currentTrackIndex: event.currentTrackIndex - 1 });
			handleChangeTrack(event.currentTrackIndex - 1);
		}
	};

	const handleShuffleTracks = () => {
		const newTracks = tracks
			?.map((value: any) => ({ value, sort: Math.random() }))
			.sort((a: any, b: any) => a.sort - b.sort)
			.map(({ value }: any) => value);
		dispatch(setTrackList(newTracks));

		updateEvent({ shuffle: !event.shuffle });
	};

	const handleAutoNext = () => {
		if (!repeatTrack) {
			handleNext();
			return;
		}

		handleChangeTrack(event.currentTrackIndex);

		console.log(event.currentTrackIndex);

		dispatch(setPlaying(false));
	};

	const setCurrentTrackIndex = () => {
		const currentTrack = tracks?.findIndex((track) => {
			return trackId === track.id;
		});

		updateEvent({ currentTrackIndex: currentTrack });
	};

	useEffect(() => {
		audio.src = audioUrl;
		audio.currentTime = 0;
		updateEvent({ progress: 0 });
		dispatch(setPlaying(false));
		setCurrentTrackIndex();
	}, [audioUrl]);

	useEffect(() => {
		audio.addEventListener('ended', async () => handleAutoNext());
		return () => {
			audio.removeEventListener('ended', () => async () => handleAutoNext());
		};
	});

	useEffect(() => {
		play ? audio.play() : audio.pause();
	}, [play]);

	// console.log(repeatTrack, 'general playing');

	audio.addEventListener('timeupdate', audioProgress);

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
							className={`w-[16px] h-[16px] cursor-pointer ${
								event.shuffle && 'text-alt'
							}`}
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
								icon={play ? faPause : faPlay}
							/>
						</div>
						<FontAwesomeIcon
							onClick={handleNext}
							className="w-[16px] h-[16px] cursor-pointer"
							icon={faForward}
						/>
						<FontAwesomeIcon
							className={`w-[16px] h-[16px] cursor-pointer ${
								repeatTrack && 'text-alt'
							}`}
							icon={faRepeat}
							onClick={() => dispatch(setRepeatTrack(!repeatTrack))}
						/>
					</div>
					<div className="w-full mt-6 bg-[rgba(255,255,255,0.04)] overflow-hidden rounded-full">
						<div
							className={`h-1 bg-secondary`}
							style={{ width: `${Number(event.progress)}%` }}
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
