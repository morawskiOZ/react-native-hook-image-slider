import * as React from "react"
import { StyleSheet, View } from "react-native"

interface Props {
	active: boolean
}

// TODO change to something lightweight
const Dot = ({ active }: Props) => {
	return <View style={[styles.badge, active && styles.active]} />
}

const styles = StyleSheet.create({
	badge: {
		borderRadius: 50,
		borderColor: "#FFF",
		borderWidth: 2,
		width: 20,
		height: 20,
		marginRight: 7,
		backgroundColor: "#FFF",
	},
	active: {
		backgroundColor: "#282828",
	},
})

export default Dot
