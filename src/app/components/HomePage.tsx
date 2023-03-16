'use client';

import Herocard from './../components/HeroCard';
import Slide from './../components/Slide';
import TopChartCard from './../components/TopChartCard';
import SongCard from './../components/SongCard';
import Controller from './../components/Controller';
import Link from 'next/link';
import { setAlbum, fetchAlbums, setMyCollections } from 'store/slice/Album';
import { useAppDispatch, useAppSelector } from 'store/hook';
import { useEffect } from 'react';
import { totalTrackTime, msToTime, shuffle } from 'resources/helper/functions';
import { changeTrack, setTrack, setTrackList } from 'store/slice/track';
import { trackI } from 'resources/interface/trackInterface';

const HomePage = ({ data }: any) => {
	const cards = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
	];

	const responsiveTopChart = {
		0: {
			items: 1.1,
		},
		500: {
			items: 2.1,
		},
		768: {
			items: 3.1,
			itemsFit: 'contain',
		},
		1024: {
			items: 5.1,
			itemsFit: 'contain',
		},
	};

	const responsiveNewRelease = {
		0: {
			items: 2.1,
		},
		500: {
			items: 3.1,
		},
		768: {
			items: 4.1,
			itemsFit: 'contain',
		},
		1024: {
			items: 6.1,
			itemsFit: 'contain',
		},
		1640: {
			items: 9.1,
			itemsFit: 'contain',
		},
	};

	const dispatch = useAppDispatch();
	const { albums, loading } = useAppSelector((state) => state.albumSlice);

	const albumCarousel = albums.map((album, index) => {
		const track = {
			audioUrl: album.tracks.items[0].preview_url,
			title: album.tracks.items[0].name.replace(',', ''),
			image: album.images[2].url,
			name: album.artists[0].name,
			trackId: album.tracks.items[0].id,
		} as trackI;

		if (index === 0) {
			dispatch(setTrack(track));
			dispatch(setTrackList(album.tracks.items));
		}

		return (
			<TopChartCard
				avatar={album.images[2].url}
				title={album.name.replace(',', '')}
				time={`${msToTime(totalTrackTime(album.tracks.items))}`}
				artist={album.artists[0].name}
				key={album.id}
			/>
		);
	});

	const imageUrls: string[] = albums.map((album) => {
		return album.images[2].url;
	});

	const handleSetTracks = (item: any, album: any) => {
		dispatch(
			setTrack({
				title: item.name,
				audioUrl: item.preview_url,
				trackId: item.id,
				name: item.name,
				image: album.images[2].url,
			})
		);

		// console.log('hello');
	};

	const songCards = albums.map((album, index) => {
		const items = album.tracks.items;

		return items.map((item: any, index: number) => {
			return (
				<SongCard
					image={album.images[2].url}
					title={item.artists[0].name}
					name={item.name}
					// func={handleSetTracks(item, album)}
					key={index}
				/>
			);
		});
	});

	console.log(shuffle(songCards.flat()));

	const loader = cards.slice(0, 3).map((card) => {
		return <div key={card} className="loader bg-darkAlt"></div>;
	});

	useEffect(() => {
		dispatch(setAlbum(data.albums));
		// dispatch(fetchAlbums());
	}, []);

	// useEffect(() => {
	// 	// dispatch(setMyCollections(songCards.flat()));
	// }, [songCards]);

	return (
		<div>
			<div className="flex flex-col gap-10">
				<div className="flex flex-col gap-8 md:flex-row md:gap-2">
					<Herocard imageUrls={imageUrls} />
					<div className="hidden md:flex-col md:gap-4 md:flex md:flex-[1_1_32%] md:h-[420px]">
						<h1 className="text-2xl font-bold">
							<Link href="/chart">Top Charts</Link>
						</h1>
						<div className="flex flex-col gap-4 overflow-scroll h-full">
							{loading || albums.length === 0 ? loader : albumCarousel}
						</div>
					</div>
				</div>
				<div className="md:hidden">
					<Slide
						responsive={responsiveTopChart}
						Component={albumCarousel}
						title={'Top charts'}
						link={'/chart'}
					/>
				</div>
				<Slide
					responsive={responsiveNewRelease}
					Component={shuffle(songCards.flat())}
					title={'New releases'}
					link="releases"
				/>
			</div>
			<div className="md:hidden">{data.albums && <Controller />}</div>
		</div>
	);
};

export default HomePage;
