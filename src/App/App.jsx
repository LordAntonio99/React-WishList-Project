import React, { useState } from "react";
import WishInput from "./WishInput";
import WishList from "./WishList";
import WishTittle from "./WishTittle";
import "./App.css";

const initialWishes = [
		{ text: "This is an example of wish", done: false },
		{ text: "This is a completed wish", done: true },
	];

const App = () => {
	const [wishes, setWishes] = useState(initialWishes);
	return (
	<div className="app">
		< WishTittle />
		< WishInput onNewWish={wish => setWishes([wish,...wishes])}/>
		< WishList wishes={wishes} onWishesChange={setWishes}/>
		<button type="button" className="wish-clear" onClick={() => setWishes(wishes.filter(wishes => !wishes.done))}>
			Archive
		</button>
	</div>
	);
};

export default App;
