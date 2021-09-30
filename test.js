import React, { useState } from 'react';
import { Button, View, Text, Image } from 'react-native';

const Ball = () => {
	var x = "idk";
	return (
		<View>
			<Text>This is the ball component {x}</Text>
		</ View>
	);
}

const Avatar = (props) => {
	const [ isCasual, setIsCasual ] = useState(false);
	const formalurl=props.formal;
	const casualurl=props.casual;

	return (
		<View>
			<Text> This is {props.name} </Text>
			<Image source={isCasual ? {uri: casualurl} : {uri: formalurl}} style={{width:200, height:200}} />
			<Button title={isCasual ? "Become Formal" : "Become Casual"}
				onPress={() => {setIsCasual(!isCasual);}} />
		</View>
	);
}


const Foo = () => {
	return (
		<View>
			<Ball />
			<Ball />
		</ View>
	);
}

export default Avatar;
