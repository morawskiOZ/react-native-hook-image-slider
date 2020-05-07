import * as React from "react"
import { MutableRefObject } from "react"
import { Dimensions, FlatList, ViewabilityConfig, ViewToken } from "react-native"
import Slide from "../Slide"

interface ViewableItemsChangedProps {
	viewableItems: ViewToken[]
	changed: ViewToken[]
}

interface Props {
	images: string[]
	imageHeight: number
	loadingIndicatorColor: string
	separatorWidth: number
	separatorColor: string
	setActiveIndex: React.Dispatch<React.SetStateAction<number>>
}

const Content = React.memo(
	({ images, setActiveIndex, imageHeight, loadingIndicatorColor, separatorColor, separatorWidth }: Props) => {

		const { width } = Dimensions.get("window")

		// This is why I use ref https://github.com/facebook/react-native/issues/17408
		const onViewConfigRef: MutableRefObject<ViewabilityConfig> = React.useRef({
			viewAreaCoveragePercentThreshold: 60,
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

		const totalItemWidth = width + separatorWidth;
		return (
			<FlatList
				style={{ width: totalItemWidth, height: "100%" }}
				showsHorizontalScrollIndicator={false}
				horizontal
				data={images}
				keyExtractor={(url, index) => `${url}-${index}`}
				viewabilityConfig={onViewConfigRef.current}
				onViewableItemsChanged={onViewRef.current}
				decelerationRate="fast"
				bounces={false}
				pagingEnabled
				getItemLayout={(data, index) => ({
					length: width,
					offset: totalItemWidth * index,
					index,
				})}
				renderItem={({ item }) =>
					<Slide
						totalItemWidth={totalItemWidth}
						separatorColor={separatorColor}
						slide={item}
						loadingIndicatorColor={loadingIndicatorColor}
					/>
				}
			/>
		)
	}
)

export default Content
