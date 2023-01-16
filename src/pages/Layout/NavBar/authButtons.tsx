import { Link } from 'react-router-dom';

const AuthButtons = () => {
	return (
		<div className="hidden md:block">
			<Link to="/sign-in">
				<button className="m-1 py-3 px-5 rounded-lg">Sign in</button>
			</Link>
			<Link to="/register">
				<button className="m-1 bg-black text-white py-3 px-5 rounded-lg">Sign Up</button>
			</Link>
		</div>
	);
};

export default AuthButtons;
