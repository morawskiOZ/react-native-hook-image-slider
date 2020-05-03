import * as React from "react"
import { FlatList, StyleSheet, ViewToken } from "react-native"
import Slide from "../Slide"

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

const Content = React.memo(
	({ images, setActiveIndex, imageHeight, loadingIndicatorColour }: Props) => {
		// This is why I use ref https://github.com/facebook/react-native/issues/17408
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
				onViewableItemsChanged={onViewRef.current as any}
				renderItem={({ item: url, index }) => {
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
	wrapper: {},
})

export default Content
