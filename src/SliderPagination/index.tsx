import * as React from "react"
import { View, Text, StyleSheet } from "react-native"
import Dot from "../Pagination/Dot"

interface Props {
	slides: string[]
	activeIndex: number
}

const Pagination = ({ slides, activeIndex }: Props) => {
	return (
		<View style={styles.wrapper}>
			{slides.map((slide, i) => (
				<Dot key={slide} active={activeIndex === i} />
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		position: "absolute",
		bottom: 35,
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
})

export default Pagination
