'use client';

import TopChartCard from '../components/TopChartCard';
import { useAppDispatch, useAppSelector } from 'store/hook';
import { totalTrackTime, msToTime } from 'resources/helper/functions';

const Page = () => {
	const cards = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
	];
	const { albums, loading } = useAppSelector((state) => state.albumSlice);
	return (
		<main className="flex flex-col gap-4 pt-20 md:flex-row md:flex-wrap">
			{albums.map((album) => {
				return (
					<div className="md:flex-initial" key={album.id}>
						<TopChartCard
							avatar={album.images[2].url}
							title={album.name}
							time={`${msToTime(totalTrackTime(album.tracks.items))}`}
							artist={album.artists[0].name}
							key={album.id}
						/>
					</div>
				);
			})}
		</main>
	);
};

export default Page;
