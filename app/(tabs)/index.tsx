import { CategoriesHorizontal } from "@/components/categories";
import { Filters } from "@/components/filters";
import ProductCard, { Product } from "@/components/product-card";
import React from "react";
import {
	Dimensions,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
export default function HomeScreen() {
	const products: Product[] = [
		{
			id: "1",
			name: "Apple iPhone 15 Pro",
			price: 999,
			image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
			category: "Electronics",
			description: "Latest Apple iPhone with advanced features.",
			stars: 5,
			sold: 10000,
			for_bidding: false,
			buy_and_bid: true,
		},
		{
			id: "2",
			name: "Samsung Galaxy S23",
			price: 899,
			image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
			category: "Electronics",
			description: "Flagship Samsung smartphone with stunning display.",
			stars: 4,
			sold: 5,
			for_bidding: false,
			buy_and_bid: true,
		},
		{
			id: "3",
			name: "Sony WH-1000XM5 Headphones",
			price: 349,
			image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
			category: "Audio",
			description: "Industry-leading noise cancelling headphones.",
			stars: 3,
			sold: 100,
			for_bidding: true,
			buy_and_bid: false,
		},
		{
			id: "4",
			name: "Dell XPS 13 Laptop",
			price: 1199,
			image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
			category: "Computers",
			description: "Ultra-portable laptop with InfinityEdge display.",
			stars: 3,
			sold: 1000,
			for_bidding: false,
			buy_and_bid: true,
		},
		{
			id: "5",
			name: "Nike Air Max 270",
			price: 150,
			image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
			category: "Footwear",
			description: "Comfortable and stylish running shoes.",
			stars: 2,
			sold: 300,
			for_bidding: false,
			buy_and_bid: false,
		},
		{
			id: "6",
			name: "Canon EOS R6 Camera",
			price: 2499,
			image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
			category: "Photography",
			description: "Professional mirrorless camera for creators.",
			stars: 5,
			sold: 1000000,
			for_bidding: false,
			buy_and_bid: true,
		},
		{
			id: "7",
			name: "Apple Watch Series 9",
			price: 399,
			image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
			category: "Wearables",
			description: "Smartwatch with health and fitness tracking.",
			stars: 0,
			sold: 0,
			for_bidding: false,
			buy_and_bid: false,
		},
		{
			id: "8",
			name: "GoPro HERO12",
			price: 499,
			image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
			category: "Cameras",
			description: "Action camera for adventure enthusiasts.",
			stars: 0,
			sold: 0,
			for_bidding: false,
			buy_and_bid: false,
		},
		{
			id: "9",
			name: "Amazon Echo Dot (5th Gen)",
			price: 49,
			image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
			category: "Smart Home",
			description: "Compact smart speaker with Alexa.",
			stars: 0,
			sold: 0,
			for_bidding: false,
			buy_and_bid: false,
		},
		{
			id: "10",
			name: "Logitech MX Master 3S Mouse",
			price: 99,
			image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
			category: "Accessories",
			description: "Advanced wireless mouse for productivity.",
			stars: 0,
			sold: 0,
			for_bidding: false,
			buy_and_bid: false,
		},
	];
	const screenHeight = Dimensions.get("window").height;

	return (
		<ScrollView className='flex px-4 py-4'>
			<CategoriesHorizontal />
			<Filters />
			<View className='flex-row justify-between mb-4'>
				<Text className=' text-xl font-bold text-primary'>Most Popular</Text>
				<TouchableOpacity>See All</TouchableOpacity>
			</View>
			<ScrollView
				style={{ height: screenHeight - 180 }}
				showsVerticalScrollIndicator={false}
				className='rounded-3xl w-full'>
				<View className='grid grid-cols-2 gap-2 w-full'>
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</View>
			</ScrollView>
		</ScrollView>
	);
}
