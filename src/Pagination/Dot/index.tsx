import * as React from "react"
import { StyleSheet, View } from "react-native"

interface Props {
	active: boolean
	emptyDotColor: string
	activeDotColor: string
}

// TODO change to something lightweight
const Dot = ({ active, emptyDotColor, activeDotColor }: Props) => {
	return <View style={[styles(emptyDotColor, activeDotColor).badge, active && styles(emptyDotColor, activeDotColor).active]} />
}

const styles = (emptyDotColor: string, activeDotColor: string) => StyleSheet.create({
	badge: {
		borderRadius: 50,
		borderColor: emptyDotColor,
		backgroundColor: emptyDotColor,
		borderWidth: 2,
		width: 20,
		height: 20,
		marginRight: 7,
	},
	active: {
		backgroundColor: activeDotColor,
	},
})

export default Dot
