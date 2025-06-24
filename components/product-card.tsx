import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { IconSymbol } from "./ui/IconSymbol";
export interface Product {
	id: string;
	image: any;
	stars: number;
	name: string;
	sold: number;
	price: number;
	category: string;
	description: string;
	for_bidding: boolean;
	buy_and_bid: boolean;
}

interface ProductCardProps {
	product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
	const [isFavourite, setFavourite] = useState(false);

	return (
		<TouchableOpacity className='mb-2'>
			<View className=' relative'>
				<Image source={product.image} className=' h-48 rounded-3xl' />
				<LinearGradient
					colors={["transparent", "rgba(0, 0, 0, 0.6)"]}
					className='absolute p-4 h-full w-full flex justify-between rounded-3xl'>
					<View className='flex-row justify-end'>
						<TouchableOpacity
							onPress={() => setFavourite(!isFavourite)}
							className='p-3 rounded-3xl'
							style={{ backgroundColor: "rgba(255,255,255,0.3)" }}>
							<IconSymbol
								name='house.fill'
								size={18}
								weight='medium'
								color='#597843'
							/>
						</TouchableOpacity>
					</View>
					<View className='space-y-1'>
						<Text className='text-sm font-bold text-gray-300'>
							$ {product.price} | {product.stars} Stars
						</Text>
						<View className='flex-row items-center space-x-2'>
							<Text className='text-sm text-gray-300'>{product.category}</Text>
						</View>
					</View>
				</LinearGradient>
			</View>
			<View className='px-4 pt-2'>
				<Text className='text-sm font-medium text-dark'>{product.name}</Text>
				<View className='space-y-1'>
					<View className='flex-row items-center space-x-2'>
						<Text className='text-sm text-gray font-medium'>
							{product.sold} sold
						</Text>
					</View>
				</View>
			</View>
			{/* {!product.for_bidding && !product.buy_and_bid && (
				<View className='px-4 pt-1 flex-row gap-2'>
					<TouchableOpacity className='bg-primary  px-4 rounded-xl'>
						<Text className='text-white pt-0.5 pb-0.5'>Buy</Text>
					</TouchableOpacity>
				</View>
			)} */}

			{(product.for_bidding && !product.buy_and_bid) ||
				(!product.buy_and_bid && !product.for_bidding && (
					<View className='px-4 pt-1 flex-row gap-2'>
						<TouchableOpacity className='bg-primary  px-4 rounded-xl'>
							<Text className='text-white pt-0.5 pb-0.5'>Buy</Text>
						</TouchableOpacity>
					</View>
				))}
			{product.buy_and_bid && (
				<View className='px-4 pt-1 flex-row gap-2'>
					<TouchableOpacity className='bg-primary  px-4 rounded-xl'>
						<Text className='text-white pt-0.5 pb-0.5'>Bid</Text>
					</TouchableOpacity>
					<TouchableOpacity className='bg-red-700  px-4 rounded-xl'>
						<Text className='text-white pt-0.5 pb-0.5'>Buy</Text>
					</TouchableOpacity>
				</View>
			)}
			{product.for_bidding && !product.buy_and_bid && (
				<View className='px-4 pt-1 flex-row gap-2'>
					<TouchableOpacity className='bg-primary  px-4 rounded-xl'>
						<Text className='text-white pt-0.5 pb-0.5'>Bid</Text>
					</TouchableOpacity>
				</View>
			)}
		</TouchableOpacity>
	);
}
