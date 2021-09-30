import React, { useState } from 'react'
import { Pressable, Image , Text } from 'react-native'

const Pizza = (props) => {
	const pizzapng  = require('./assets/pizza.png');
	const [count, setCount] = useState(0);

	return (
		<Pressable onPress={() => { setCount(count + 1); }}>
			<Image source={pizzapng} />
			<Text> Pizzas Baked: {count} </Text>
		</Pressable>
	);
}

export default Pizza;
