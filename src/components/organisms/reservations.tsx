import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'


const data = Array(3).fill(null).map(() => ({

}))


const Reservation = () => (
    <View style={styles.reservation}>
        <View>
            <View style={styles.plate}>
                <View>
                    <Text>
                        ایران
                        ۱۲
                    </Text>
                </View>
                <Text>۳۳۳ الف ۲۲</Text>
            </View>
            <View>
                <Text>بنز نوک مدادی</Text>
                <Text>آقای علی عزیزی</Text>
            </View>
        </View>
        <View>
            <View style={{ flexDirection: "row" }}>
                <Text>کارواش با آۤب</Text>
                <Text>در انتظار تایید</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 39 }}>
                <View>
                    <Text>روشویی‌‌، نظافت داخل، واکس داشبورد</Text>
                    <Text>۴۰۰٬۰۰۰ ریال</Text>
                </View>
                <View>
                    <Text>شنبه</Text>
                </View>
            </View>
            <View>
                <Text>۱۴۰۰-۰۳-۰۸</Text>
                <Text>۱۶:۰۸:۵۱</Text>
            </View>
        </View>
    </View>
)

const Reservations = () => {
    return (
        <FlatList
            style={styles.container}
            contentContainerStyle={styles.contentContainerStyle}
            keyExtractor={(_, i) => i.toString()}
            data={data}
            renderItem={Reservation}
        />
    )
}


const styles = StyleSheet.create({
    plate: {
        borderColor: "black",
        borderWidth: 1
    },

    container: {
        padding: 10,
        marginTop: 10
    },
    contentContainerStyle: {
        gap: 10
    },
    reservation: {
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    }
});

export default Reservations