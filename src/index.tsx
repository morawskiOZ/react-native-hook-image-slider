import * as React from "react"
import { StyleSheet, View } from "react-native"
import Content from "./Content"
import Pagination from "./Pagination"

interface Props {
	images: string[]
	imageHeight?: number
	loadingIndicatorColour?: string
	separatorWidth?: number
	separatorColor?: string
	activeDotColor?: string
	emptyDotColor?: string
}

export const Slider = ({
	images,
	imageHeight = 300,
	loadingIndicatorColour = "#000",
	separatorWidth =  0,
	separatorColor = "#FFF",
	activeDotColor= "#000",
	emptyDotColor="#FFF"
	

}: Props) => {
	const [activeIndex, setActiveIndex] = React.useState(0)
	return (
		<View style={styles(imageHeight).container}>
			<Content
				images={images}
				setActiveIndex={setActiveIndex}
				imageHeight={imageHeight}
				loadingIndicatorColor={loadingIndicatorColour}
				separatorColor={separatorColor}
				separatorWidth={separatorWidth}
			/>
			<Pagination images={images} activeIndex={activeIndex} activeDotColor={activeDotColor} emptyDotColor={emptyDotColor}/>
		</View>
	)
}

const styles = (imageHeight: number) =>
	StyleSheet.create({
		container: {
			position: "relative",
			width: "100%",
			height: imageHeight,
			overflow: "hidden",
		},
	})

export default Slider
