import * as React from 'react';
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

export default function CategorySlider() {
    const width = Dimensions.get('window').width;
    return (
        <View style={{ height:200 }}>
            <Carousel
                // loop
                width={width}
                defaultIndex={2}
                // height={width / 2}
                autoPlay={true}
                data={[...new Array(6).keys()]}
                scrollAnimationDuration={2000}
                // mode="parallax"
                // modeConfig={{
                //     parallaxScrollingScale: 0.9,
                //     parallaxScrollingOffset: 50,
                //     parallaxAdjacentItemScale: 0.8,
                // }}
                // onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            // borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontSize: 30 }}>
                            {index}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}