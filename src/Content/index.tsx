import * as React from "react"
import { FlatList, StyleSheet, ViewToken, Dimensions, ViewabilityConfig, View } from "react-native"
import Slide from "../Slide"
import { MutableRefObject, useCallback } from "react"
import {Separator} from "../Separator"

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

		const { width } = Dimensions.get("window")

		// This is why I use ref https://github.com/facebook/react-native/issues/17408
		const onViewConfigRef: MutableRefObject<ViewabilityConfig> = React.useRef({
			viewAreaCoveragePercentThreshold: 80,
			waitForInteraction: false
		})
		const onViewRef = React.useRef((info: ViewableItemsChangedProps) => {
			if (info?.changed?.[0]) {
				if (info.changed[0].index === null) {
					setActiveIndex(0)
				} else if (info.changed[0].isViewable) {
					setActiveIndex(info.changed[0].index)
				}
			}
		})

		const separatorWidth = 10
		const totalItemWidth = width + separatorWidth;

		return (
			<FlatList
				showsHorizontalScrollIndicator={false}
				pagingEnabled={true}
				horizontal={true}
				data={images}
				keyExtractor={(url, index) => `${url}-${index}`}
				viewabilityConfig={onViewConfigRef.current}
				onViewableItemsChanged={onViewRef.current}
				snapToInterval={totalItemWidth}
				decelerationRate="fast"
				bounces={false}
				progressViewOffset={50}
				ItemSeparatorComponent={ Separator.bind(null, {width: separatorWidth})}
				getItemLayout={(data, index) => ({
					length: totalItemWidth,
					offset: totalItemWidth * index,
					index,
				})}
				renderItem={({ item, index }) =>
					<Slide
						slide={item}
						imageHeight={imageHeight}
						loadingIndicatorColour={loadingIndicatorColour}
					/>
				}
			/>
		)
	}
)

const styles = StyleSheet.create({})

export default Content
