import React from "react";
import Navbar from "../component/Navbar.jsx";
import Card from "../component/Card.jsx";
import Jumbotron from "../component/Jumbotron.jsx";
import Footer from "../component/Footer.jsx"

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<br />
			<div className="row space-between justify-content-center"> 
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<br />
			<Footer />
		</>
	);
};

export default Home;
