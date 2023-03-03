import { Inter } from '@next/font/google';
import HomePage from './components/HomePage';

const inter = Inter({ subsets: ['latin'] });

const Home = async () => {
	return (
		<main className="min-height-screen pb-8 pt-20 text-red-500 flex flex-col">
			<HomePage />
		</main>
	);
};

export default Home;
