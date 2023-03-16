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
import {
	useState,
	useEffect,
	useLayoutEffect,
	memo,
	useReducer,
	useRef,
} from 'react';
import {
	setTrackList,
	changeTrack,
	setPlaying,
	setRepeatTrack,
} from 'store/slice/track';
import { shuffle } from 'resources/helper/functions';

declare let window: { Audio: any };

const Controller = () => {
	const { audioUrl, image, name, title, tracks, play, trackId, repeatTrack } =
		useAppSelector((state) => state.trackSlice);
	const dispatch = useAppDispatch();

	const [audio] = useState(new window.Audio(audioUrl));
	// const audio = new Audio(audioUrl);

	const [event, updateEvent] = useReducer(
		(prev: any, next: any) => {
			return { ...prev, ...next };
		},
		{ progress: 0, currentTrackIndex: 0, shuffle: false, volume: 0.5 }
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
			audioUrl: track?.preview_url,
			title: track?.name,
			trackId: track?.id,
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
		if (!tracks) return;
		const newTracks = shuffle(tracks);
		dispatch(setTrackList(newTracks));

		updateEvent({ shuffle: !event.shuffle });
	};

	const handleAutoNext = () => {
		if (!repeatTrack) {
			handleNext();
			return;
		}

		handleChangeTrack(event.currentTrackIndex);
		dispatch(setPlaying(false));
	};

	const setCurrentTrackIndex = () => {
		const currentTrack = tracks?.findIndex((track) => {
			return trackId === track.id;
		});

		updateEvent({ currentTrackIndex: currentTrack });
	};

	const handleTrackEvent = (e) => {
		//set the current track time
		audio.currentTime = (e.target.value * audio.duration) / 100;
	};

	const handleVolume = (e) => {
		audio.volume = Number(e.target.value);
		updateEvent({ volume: Number(e.target.value) });
	};

	const handleMute = () => {
		audio.volume = event.volume - 0.1;
		updateEvent({ volume: event.volume - 0.1 });
	};

	useEffect(() => {
		//set tracks and audio url when the
		//url is changed for next track or selected track
		audio.src = audioUrl;
		audio.currentTime = 0;
		updateEvent({ progress: 0 });
		dispatch(setPlaying(false));
		setCurrentTrackIndex();
	}, [audioUrl]);

	useEffect(() => {
		//play next track if current track ended
		audio.addEventListener('ended', async () => handleAutoNext());
		return () => {
			audio.removeEventListener('ended', () => async () => handleAutoNext());
		};
	});

	useEffect(() => {
		play ? audio.play().catch((e: any) => console.log(e)) : audio.pause();
	}, [play]);

	useEffect(() => {
		audio.volume = event.volume;
	}, [event.volume]);

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
						<button aria-label="shuffle">
							<FontAwesomeIcon
								onClick={handleShuffleTracks}
								className={`w-[16px] h-[16px] cursor-pointer ${
									event.shuffle && 'text-alt'
								}`}
								icon={faShuffle}
							/>
						</button>
						<button aria-label="previous">
							<FontAwesomeIcon
								onClick={handlePrev}
								className="w-[16px] h-[16px] cursor-pointer"
								icon={faBackward}
							/>
						</button>
						<button
							onClick={handlePlay}
							aria-label="play"
							className="bg-secondary rounded-full flex justify-center cursor-pointer items-center h-[34px] w-[34px] shadow-3xl"
						>
							<FontAwesomeIcon
								className="w-[16px] h-[16px]"
								icon={play ? faPause : faPlay}
							/>
						</button>
						<button aria-label="next">
							<FontAwesomeIcon
								onClick={handleNext}
								className="w-[16px] h-[16px] cursor-pointer"
								icon={faForward}
							/>
						</button>
						<button aria-label="repeat">
							<FontAwesomeIcon
								className={`w-[16px] h-[16px] cursor-pointer ${
									repeatTrack && 'text-alt'
								}`}
								icon={faRepeat}
								onClick={() => dispatch(setRepeatTrack(!repeatTrack))}
							/>
						</button>
					</div>
					<div className="mt-6 w-full">
						<input
							type="range"
							name="scroll"
							id="scroll"
							min="0"
							max="100"
							value={event.progress}
							className="w-full"
							onChange={handleTrackEvent}
						/>
					</div>
					{/* <div className="relative mt-6">
						<div className="w-full bg-[rgba(255,255,255,0.04)] overflow-hidden rounded-full">
							<div
								className={`h-1 bg-secondary`}
								style={{ width: `${Number(event.progress)}%` }}
							></div>
						</div>
						<div
							className="absolute -top-1.5 z-50 flex justify-center items-center w-4 h-4 border border-2 rounded-full border-light cursor-pointer"
							style={{ left: `${Number(event.progress)}%` }}
						>
							<span className="w-2 h-2 bg-secondary block border rounded-full"></span>
						</div>
					</div> */}
				</div>
				<div className="hidden md:flex md:flex-row md:gap-4 md:items-center md:flex-initial md:w-48">
					<FontAwesomeIcon
						className="w-[18px] h-[18px] cursor-pointer"
						icon={faVolumeUp}
						onClick={handleMute}
					/>
					{/* <div className="w-full bg-[rgba(255,255,255,0.04)] overflow-hidden rounded-full">
						<div className="w-[20%] h-1 bg-secondary"></div>
					</div> */}
					<input
						type="range"
						name="volume"
						id="volume"
						min="0"
						max="1"
						step="0.1"
						value={event.volume}
						className="w-full cursor-pointer"
						onChange={handleVolume}
					/>
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
