import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-swiper'

interface PaginationProps {
    index: number,
    total: number,
    swiper: Swiper
}

const Pagination: React.FC<PaginationProps> = ({ index, swiper, total }) => {
    return (
        <View style={styles.paginationContainer}>
            <View style={styles.pages}>
                {Array(total).fill(null).map((_, i) => (
                    <View key={i} style={{ ...styles.item, backgroundColor: index == i ? "#F5AF19" : "#979797" }} />
                ))}
            </View>
        </View>
    )
}

const BannersSwiper = () => {
    return (
        <View style={styles.containerStyle}>
            <Swiper showsPagination={true} autoplay loop={true} autoplayDirection={false} renderPagination={(index, total, swiper) => <Pagination index={index} swiper={swiper} total={total} />}>
                {Array(3).fill(null).map((_, i) => (
                    <View key={i} style={styles.slide}>
                        <Image style={styles.image} source={require("./../../assets/images/car.jpg")} />
                    </View>
                ))}
            </Swiper>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#979797",
        flex: 1,
        height: 5,
        borderRadius: 9999
    },
    pages: {
        backgroundColor: "#ddd",
        padding: 10,
        paddingVertical: 6,
        overflow: "hidden",
        borderRadius: 9999,
        flexDirection: "row-reverse",
        width: 100,
        gap: 6
    },
    paginationContainer: {
        position: "absolute",
        zIndex: 435345,
        left: 0,
        alignItems: "center",
        width: "100%",
        top: "90%"
    },
    containerStyle: {
        marginTop: 10,
        alignSelf: "center",
        borderRadius: 19,
        overflow: "hidden",
        height: "50%",
        width: "90%",
    },
    slide: {
        flex: 1,
    },
    image: {
        width: "100%",
        height: "100%",
        flex: 1
    }
})

export default BannersSwiper