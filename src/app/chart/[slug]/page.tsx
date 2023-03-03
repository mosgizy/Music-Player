'use client';

import Image from 'next/image';
import heart from '../../../../resources/assets/svg/Heart-red.svg';
import heartLight from '../../../../resources/assets/svg/Heart-light.svg';
import addMusic from '../../../../resources/assets/svg/music-square-add.svg';
import play from '../../../../resources/assets/svg/Play.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector, useAppDispatch } from 'store/hook';
import {
	msToTime,
	totalTrackTime,
	handleTrackUpload,
} from 'resources/helper/functions';
import { setTrack } from 'store/slice/track';
import { trackI } from 'resources/interface/trackInterface';

const Page = ({ params }: { params: { slug: string } }) => {
	const { albums } = useAppSelector((state) => state.albumSlice);
	const dispatch = useAppDispatch();

	const path = params.slug.replaceAll('%20', ' ');
	const album = albums.filter((album) => album.name === path);
	const time = msToTime(totalTrackTime(album[0].tracks.items));

	const sumTime = () => {
		let hrs = time.slice(0, 2);
		if (hrs === '00') return time.slice(3, 5) + '+';
		else return hrs + '+';
	};

	const handleTrackClick = (item: any) => {
		dispatch(setTrack(handleTrackUpload(item, album)));
	};

	// console.log(album[0].artists[0].name);
	return (
		<section className="min-h-screen pt-20 pb-8 px-5">
			<div className="flex flex-col gap-6">
				<div className="flex flex-col gap-6 md:flex-row md:items-end">
					<div className="flex justify-center">
						<Image
							className="rounded-3xl w-full"
							src={album[0].images[1].url}
							alt="cover"
							height={640}
							width={640}
						/>
					</div>
					<div className="flex flex-col gap-3">
						<h1 className="text-3xl">{album[0].artists[0].name}</h1>
						<div className="text-sm text-light flex flex-col gap-3 md:max-w-[75ch]">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
								incidunt excepturi nam repellat, quas sapiente. Lorem ipsum
								dolor sit amet consectetur adipisicing elit. Ipsa, iure
								voluptates laudantium voluptatum quia labore nam. Pariatur amet
								esse aliquam.
							</p>
							<p>
								{album[0].total_tracks} songs - {sumTime()}{' '}
							</p>
						</div>
						<div className="flex flex-row gap-2 mt-6 justify-between md:justify-start">
							<div className="flex flex-auto md:flex-initial flex-row items-center justify-center text-xs gap-2 backdrop-blur-sm bg-[rgba(255,255,255,0.07)] rounded-3xl px-3 py-1 cursor-pointer">
								<Image src={play} alt="icon" /> play all
							</div>
							<div className="flex flex-auto md:flex-initial flex-row items-center justify-center text-xs gap-2 backdrop-blur-sm bg-[rgba(255,255,255,0.07)] rounded-3xl px-3 py-2 cursor-pointer">
								<Image src={addMusic} alt="icon" /> add to collection
							</div>
							<div className="flex flex-auto md:flex-initial flex-row items-center justify-center text-xs gap-2 backdrop-blur-sm bg-[rgba(255,255,255,0.07)] rounded-3xl px-3 py-2 cursor-pointer">
								<Image src={heart} alt="icon" />{' '}
								<span className="md:hidden">like</span>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-4">
					{album[0].tracks.items.map((item: any) => {
						return (
							<div
								key={item.id}
								onClick={() => handleTrackClick(item)}
								className="flex flex-row justify-between md: px-4 py-3 backdrop-blur-sm bg-[rgba(51,55,59,0.37)] hover:bg-dark rounded-xl cursor-pointer "
							>
								<div className="flex flex-row gap-3 md:hidden">
									<div className="">
										<Image
											className="h-[39px] w-[39px] rounded"
											src={album[0].images[2].url}
											height={64}
											width={64}
											alt="avatar"
										/>
									</div>
									<div className="flex flex-col gap-1 md:hidden">
										<p className="text-xs">{item.name}</p>
										<p className="text-xs">{item.type}</p>
									</div>
								</div>
								<div className="flex flex-col items-end gap-1 md:hidden">
									<div>
										<FontAwesomeIcon
											className="text-sm text-secondary"
											icon={faEllipsisVertical}
										/>
									</div>
									<div className="text-xs">
										{msToTime(item.duration_ms).slice(4)}
									</div>
								</div>
								<div className="hidden md:flex md:flex-row md:items-center md:justify-between md:w-full md:mr-5">
									<div className="flex gap-6">
										<Image
											className="h-[39px] w-[39px] rounded"
											src={album[0].images[2].url}
											height={64}
											width={64}
											alt="avatar"
										/>
										<Image src={heartLight} alt="heartLight" />
									</div>
									<p className="text-xs">{item.name}</p>
									<p className="text-xs">{item.type}</p>
									<div className="text-xs">
										{msToTime(item.duration_ms).slice(4)}
									</div>
									<div>
										<FontAwesomeIcon
											className="text-sm text-secondary"
											icon={faEllipsisVertical}
										/>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Page;
