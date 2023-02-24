import { Inter } from '@next/font/google';
import Herocard from './components/HeroCard';
import Slide from './components/Slide';
import TopChartCard from './components/TopChartCard';
import SongCard from './components/SongCard';
import Controller from './components/Controller';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
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

	return (
		<main className="min-height-screen pb-8 pt-20 text-red-500 flex flex-col">
			<div className="flex flex-col gap-10">
				<div className="flex flex-col gap-8 md:flex-row md:gap-2">
					<Herocard />
					<div className="hidden md:flex-col md:gap-4 md:flex md:flex-[1_1_32%]">
						<h1 className="text-2xl font-bold">
							<Link href="/chart">Top Charts</Link>
						</h1>
						<TopChartCard />
						<TopChartCard />
						<TopChartCard />
					</div>
				</div>
				<div className="md:hidden">
					<Slide
						data={cards}
						responsive={responsiveTopChart}
						Component={<TopChartCard />}
						title={'Top charts'}
						link={'/chart'}
					/>
				</div>
				<Slide
					data={cards}
					responsive={responsiveNewRelease}
					Component={<SongCard />}
					title={'New releases'}
					link="releases"
				/>
			</div>
			<div className="md:hidden">
				<Controller />
			</div>
		</main>
	);
};

export default Home;
