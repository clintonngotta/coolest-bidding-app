import { useState } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";

export function Filters() {
	const [activeCategory, setActiveCategory] = useState("All");
	const categories = [
		{
			id: 1,
			name: "All",
		},
		{
			id: 2,
			name: "Buy Only",
		},
		{
			id: 3,
			name: "Bid Only",
		},
		{
			id: 4,
			name: "Buy and Bid",
		},
	];
	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			className='py-4'>
			{categories.map((category) => (
				<TouchableOpacity
					onPress={() => setActiveCategory(category.name)}
					activeOpacity={0.8}
					key={category.id}
					className={`px-5 py-2 rounded-full mr-2 ${category.name === activeCategory ? "bg-primary" : "bg-primary/30"}`}>
					<Text
						className={`${category.name === activeCategory ? "text-white" : "text-dark"} font-bold`}>
						{category.name}
					</Text>
				</TouchableOpacity>
			))}
		</ScrollView>
	);
}
