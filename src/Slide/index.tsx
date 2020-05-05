import * as React from "react"
import { useState } from "react"
import {
	ActivityIndicator,
	Dimensions,
	StyleSheet,
	View,
	Image,
} from "react-native"

interface Props {
	slide: any
	imageHeight: number
	loadingIndicatorColour: string
}

// TODO add image placeholder (pixelated image)
const Slide = ({ slide, imageHeight, loadingIndicatorColour }: Props) => {
	const { width } = Dimensions.get("window")
	const [isLoading, setIsLoading] = useState(true)

	const handleLoad = () => setIsLoading(false)

	return (
		<View style={{ width }}>
			<Image
				resizeMode='cover'
				source={{ uri: slide }}
				style={styles(imageHeight, width).image}
				onLoad={handleLoad}
			/>
			{isLoading && (
				<View style={styles(imageHeight, width).container}>
					<ActivityIndicator size='large' color={loadingIndicatorColour} />
				</View>
			)}
		</View>
	)
}

const styles = (imageHeight: number, width: number) =>
	StyleSheet.create({
		image: {
			overflow: "hidden",
			resizeMode: "cover",
			height: imageHeight,
			width
		},
		container: {
			backgroundColor: "#D3D3D3",
			width,
			height: imageHeight,
			flex: 1,
			justifyContent: "center",
			alignItems: 'center',
		},
	})

export default Slide
