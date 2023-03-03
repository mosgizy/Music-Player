'use client';
import Link from 'next/link';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

interface slide {
	responsive: {};
	Component: any[];
	title: string;
	link: string;
}

const Slide = ({ responsive, Component, title, link }: slide) => {
	const handleDragStart = (e: any) => e.preventDefault();

	const items = Component?.map((card) => {
		return (
			<div onDragStart={handleDragStart} key={card}>
				{card}
			</div>
		);
	});

	return (
		<section className="pl-5">
			<h3>
				<Link href={link}>{title}</Link>
			</h3>
			<div className="mt-4">
				<AliceCarousel
					mouseTracking
					disableButtonsControls={true}
					disableDotsControls={true}
					keyboardNavigation={true}
					responsive={responsive}
					items={Component}
				/>
			</div>
		</section>
	);
};

export default Slide;
