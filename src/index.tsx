import * as React from "react"
import { StyleSheet, View } from "react-native"
import Content from "./Content"
import Pagination from "./Pagination"

interface Props {
	slides: string[]
	imageHeight?: number
	loadingIndicatorColour?: string
}

export const Slider = ({
	slides,
	imageHeight = 300,
	loadingIndicatorColour = "#000",
}: Props) => {
	const [activeIndex, setActiveIndex] = React.useState(0)

	return (
		<View style={styles(imageHeight).container}>
			<Content
				slides={slides}
				setActiveIndex={setActiveIndex}
				imageHeight={imageHeight}
				loadingIndicatorColour={loadingIndicatorColour}
			/>
			<Pagination slides={slides} activeIndex={activeIndex} />
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
