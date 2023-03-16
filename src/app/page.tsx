import { Inter } from '@next/font/google';
import getData from 'utils/Api';
import HomePage from './components/HomePage';

const inter = Inter({ subsets: ['latin'] });

const Home = async () => {
	const data = await getData();

	return (
		<main className="min-height-screen pb-8 pt-20 text-red-500 flex flex-col">
			<HomePage data={data} />
		</main>
	);
};

export default Home;
