'use client';

import TopChartCard from '../components/TopChartCard';

const Page = () => {
	const cards = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
	];
	return (
		<main className="flex flex-col gap-4 pt-20">
			{cards.map((card) => {
				return <TopChartCard key={card} />;
			})}
		</main>
	);
};

export default Page;
