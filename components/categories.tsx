import { Image } from "expo-image";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
export function CategoriesHorizontal() {
	const [activeCategory, setActiveCategory] = useState("All");
	const categories = [
		{
			id: 1,
			name: "All",
			image: {
				uri: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=64&q=80",
			},
		},
		{
			id: 2,
			name: "Sofa",
			image: {
				uri: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=64&q=80",
			},
		},
		{
			id: 3,
			name: "Chair",
			image: {
				uri: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=64&q=80",
			},
		},
		{
			id: 4,
			name: "Kitchen",
			image: {
				uri: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=64&q=80",
			},
		},

		{
			id: 6,
			name: "Vase",
			image: {
				uri: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=64&q=80",
			},
		},
		{
			id: 7,
			name: "Cupboard",
			image: {
				uri: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=64&q=80",
			},
		},

		{
			id: 9,
			name: "Electronics",
			image: {
				uri: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=64&q=80",
			},
		},
	];
	return (
		<View className='py-4'>
			<View className='grid grid-cols-3 '>
				{categories.map((category) => (
					<View key={category.id} className=''>
						<TouchableOpacity
							onPress={() => setActiveCategory(category.name)}
							activeOpacity={0.8}
							className={`w-24 h-24 rounded-full items-center justify-center`}>
							{/* Category image */}
							<Image
								source={category.image}
								className='w-16 h-16 rounded-full'
								resizeMode='cover'
							/>
						</TouchableOpacity>
						<Text
							className={`font-bold text-center -ml-8 ${category.name === activeCategory ? "text-primary" : ""}`}>
							{category.name}
						</Text>
					</View>
				))}
			</View>
		</View>
	);
}
