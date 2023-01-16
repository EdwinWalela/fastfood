import { Link } from 'react-router-dom';
import BookTable from './bookTable';

const LandingPage = () => {
	return (
		<div className="md:py-2 py-8 md:px-28 px-8 mb-8">
			<div className="md:flex">
				<div className="md:flex-auto mb-8 md:mb-0">
					<h3 className="font-medium my-2">EASY WAY TO ORDER YOUR FOOD</h3>
					<h1 className="md:text-6xl text-4xl font-bold">
						Choose Healthy <br />& Fresh Food
					</h1>
					<p className="my-2">Just confirm your order and enjoy our delicious fastest delivery.</p>
					<Link to="/menu" className="md:block hidden">
						<button className="bg-black text-white py-3 px-5 rounded-lg my-2 w-full md:w-auto">
							Order Now
						</button>
					</Link>
				</div>
				<div className="flex-auto">
					<img className="md:w-80 w-60 mx-auto block" src="/assets/img/food-landing.png" />
				</div>
				<Link to="/menu" className="block md:hidden my-6">
					<button className="bg-black text-white py-3 px-5 rounded-lg my-2 w-full md:w-auto">
						Order Now
					</button>
				</Link>
			</div>
			<BookTable />
		</div>
	);
};

export default LandingPage;
