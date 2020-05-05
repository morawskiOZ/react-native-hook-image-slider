import * as React from "react"
import { FlatList, StyleSheet, ViewToken, Dimensions, ViewabilityConfig } from "react-native"
import Slide from "../Slide"
import { MutableRefObject } from "react"

interface ViewableItemsChangedProps {
	viewableItems: ViewToken[]
	changed: ViewToken[]
}

interface Props {
	images: string[]
	imageHeight: number
	loadingIndicatorColour: string
	setActiveIndex: React.Dispatch<React.SetStateAction<number>>
}
const { width } = Dimensions.get("window")
const Content = React.memo(
	({ images, setActiveIndex, imageHeight, loadingIndicatorColour }: Props) => {

		// This is why I use ref https://github.com/facebook/react-native/issues/17408
		const onViewConfigRef: MutableRefObject<ViewabilityConfig> = React.useRef({
			viewAreaCoveragePercentThreshold: 80
		})
		const onViewRef = React.useRef((info: ViewableItemsChangedProps) => {
			if (info?.viewableItems?.[0]) {
				if (info.viewableItems[0].index === null) {
					setActiveIndex(0)
				} else {
					setActiveIndex(info.viewableItems[0].index)
				}
			}
		})

		return (
			<FlatList
				showsHorizontalScrollIndicator={false}
				pagingEnabled={true}
				horizontal={true}
				data={images}
				keyExtractor={(url) => url}
				viewabilityConfig={onViewConfigRef.current}
				onViewableItemsChanged={onViewRef.current}
				getItemLayout={(data, index) => (
					{ length: width, offset: width * index, index }
				)}
				renderItem={({ item: url }) => {
					return (
						<Slide
							slide={url}
							imageHeight={imageHeight}
							loadingIndicatorColour={loadingIndicatorColour}
						/>
					)
				}}
			/>
		)
	}
)

const styles = StyleSheet.create({
	columnWrapper: {
		width
	},
})

export default Content
