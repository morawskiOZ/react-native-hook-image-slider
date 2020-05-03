import React from "react"
import { StyleSheet, View } from "react-native"
import Dot from "./Dot"

interface Props {
	images: string[]
	activeIndex: number
}

const Pagination = ({ images, activeIndex }: Props) => {
	return (
		<View style={styles.wrapper}>
			{images.map((slide, i) => (
				<Dot key={slide} active={activeIndex === i} />
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		position: "absolute",
		bottom: 25,
		width: "100%",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
})

export default Pagination
