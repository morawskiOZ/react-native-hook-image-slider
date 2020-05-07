import * as React from "react"
import { useCallback, useState } from "react"
import { ActivityIndicator, Dimensions, Image, StyleSheet, View } from "react-native"

interface Props {
	slide: string
	loadingIndicatorColor: string
	totalItemWidth: number
	separatorColor: string
}

// TODO add image placeholder (pixelated image)
const Slide = ({ slide, loadingIndicatorColor, totalItemWidth, separatorColor }: Props) => {
	const { width } = Dimensions.get("window")
	const [isLoading, setIsLoading] = useState(true)

	const handleLoad = useCallback(() => setIsLoading(false), [])

	return (
		<View style={styles(separatorColor, totalItemWidth, width).wrapper}>
			<Image
				resizeMode='cover'
				source={{ uri: slide }}
				style={styles(separatorColor, totalItemWidth, width).image}
				onLoad={handleLoad}
			/>
			{isLoading && (
				<View style={styles(separatorColor, totalItemWidth, width).indicatorContainer}>
					<ActivityIndicator size='large' color={loadingIndicatorColor} />
				</View>
			)}
		</View>
	)
}

const styles = (separatorColor: string, totalItemWidth: number, width: number) =>
	StyleSheet.create({
		wrapper: {
			width: totalItemWidth,
			height: 'auto',
			backgroundColor: separatorColor
		},
		image: {
			overflow: "hidden",
			resizeMode: "cover",
			height: '100%',
			width: width,
		},
		indicatorContainer: {
			backgroundColor: "#D3D3D3",
			width,
			height: "100%",
			position: 'absolute',
			justifyContent: "center",
			alignItems: 'center',
		},
	})

export default Slide
