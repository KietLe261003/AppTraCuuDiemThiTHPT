import React, { Component, useEffect, useState } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard,
    KeyboardAvoidingView,
    ScrollView,
    FlatList
} from "react-native";
import { data } from "../Api_web";
function test(props) {
    const [Products,setProducts] = useState([
        {
            name: 'Samsung Galaxy Z Flip4 128GB',
            uri: 'https://cdn.tgdd.vn/Products/Images/42/258047/TimerThumb/samsung-galaxy-z-flip4-(6).jpg',
            dungluong: [
                '128GB',
                '256GB',
                '512GB',
            ],
            manhinh: [
                'Chính 6.7 & Phụ 1.9',
                'FullHD'
            ],
            picec: '23.990.000',
            sale: '-22%',
            picecSale: '18.490.000',
            danhgia: '48'
        },
        {
            name: 'iPhone 11',
            uri: 'https://cdn.tgdd.vn/Products/Images/42/153856/TimerThumb/iphone-11-(74).jpg',
            dungluong: [
                '64GB',
                '128GB',
            ],
            manhinh: [
                'Chính 6.7 & Phụ 1.9',
                'FullHD'
            ],
            picec: '14.990.000',
            sale: '-23%',
            picecSale: '11.990.000',
            danhgia: '48'
        },
        {
            name: 'SamSung Galaxy M53',
            uri: 'https://cdn.tgdd.vn/Products/Images/42/258047/TimerThumb/samsung-galaxy-z-flip4-(6).jpg',
            dungluong: [
                '128GB',
                '256GB',
                '512GB',
            ],
            manhinh: [
                'Chính 6.7 & Phụ 1.9',
                'FullHD'
            ],
            picec: '23.990.000',
            sale: '-22%',
            picecSale: '18.490.000',
            danhgia: '48'
        },
        {
            name: 'SamSung Galaxy M53',
            uri: 'https://cdn.tgdd.vn/Products/Images/42/258047/TimerThumb/samsung-galaxy-z-flip4-(6).jpg',
            dungluong: [
                '128GB',
                '256GB',
                '512GB',
            ],
            manhinh: [
                'Chính 6.7 & Phụ 1.9',
                'FullHD'
            ],
            picec: '23.990.000',
            sale: '-22%',
            picecSale: '18.490.000',
            danhgia: '48'
        },
        {
            name: 'SamSung Galaxy M53',
            uri: 'https://cdn.tgdd.vn/Products/Images/42/258047/TimerThumb/samsung-galaxy-z-flip4-(6).jpg',
            dungluong: [
                '128GB',
                '256GB',
                '512GB',
            ],
            manhinh: [
                'Chính 6.7 & Phụ 1.9',
                'FullHD'
            ],
            picec: '23.990.000',
            sale: '-22%',
            picecSale: '18.490.000',
            danhgia: '48'
        },
        {
            name: 'SamSung Galaxy M53',
            uri: 'https://cdn.tgdd.vn/Products/Images/42/258047/TimerThumb/samsung-galaxy-z-flip4-(6).jpg',
            dungluong: [
                '128GB',
                '256GB',
                '512GB',
            ],
            manhinh: [
                'Chính 6.7 & Phụ 1.9',
                'FullHD'
            ],
            picec: '23.990.000',
            sale: '-22%',
            picecSale: '18.490.000',
            danhgia: '48'
        },
        {
            name: 'SamSung Galaxy M53',
            uri: 'https://cdn.tgdd.vn/Products/Images/42/258047/TimerThumb/samsung-galaxy-z-flip4-(6).jpg',
            dungluong: [
                '128GB',
                '256GB',
                '512GB',
            ],
            manhinh: [
                'Chính 6.7 & Phụ 1.9',
                'FullHD'
            ],
            picec: '23.990.000',
            sale: '-22%',
            picecSale: '18.490.000',
            danhgia: '48'
        },
        {
            name: 'SamSung Galaxy M53',
            uri: 'https://cdn.tgdd.vn/Products/Images/42/258047/TimerThumb/samsung-galaxy-z-flip4-(6).jpg',
            dungluong: [
                '128GB',
                '256GB',
                '512GB',
            ],
            manhinh: [
                'Chính 6.7 & Phụ 1.9',
                'FullHD'
            ],
            picec: '23.990.000',
            sale: '-22%',
            picecSale: '18.490.000',
            danhgia: '48'
        },
        {
            name: 'SamSung Galaxy M53',
            uri: 'https://cdn.tgdd.vn/Products/Images/42/258047/TimerThumb/samsung-galaxy-z-flip4-(6).jpg',
            dungluong: [
                '128GB',
                '256GB',
                '512GB',
            ],
            manhinh: [
                'Chính 6.7 & Phụ 1.9',
                'FullHD'
            ],
            picec: '23.990.000',
            sale: '-22%',
            picecSale: '18.490.000',
            danhgia: '48'
        },
    ])
    return <View style={styles.container}>
        <FlatList
            data={Products}
            numColumns={2}
            renderItem={({item,index}) =>
                <TouchableOpacity style={{
                    //backgroundColor: index%2 ? 'blue' : 'green',
                    flex: 0.52,
                    height: 400,
                    borderWidth: 1,
                    borderColor: 'black',
                    //marginRight: index%2==0 && index==Products.length-1 ? 10 : 0,
                    marginRight: 10, 
                    marginBottom: 10,
                    marginTop: 10,
                    marginLeft: 10
                }}>
                    <Image style={{
                         marginTop: 5,
                         width: 160,
                         height: 160,
                         borderBottomStartRadius: 5
                    }}
                    source={{
                        uri: item.uri
                    }}/>
                    <View style={{
                        width: '60%',
                        backgroundColor: 'red',
                        height: 22,
                        marginLeft: 10,
                        marginTop: 10,
                        borderRadius: 10,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        {/* đây là  hình điện thoại */}
                        <Image source={{uri: 'https://cdn.tgdd.vn/2022/12/content/Label-50x50-1.png'}}
                            style={{
                                width: 22,
                                height: 22,
                                marginRight: 5
                            }}
                        />
                        <Text style={{fontSize: 11,color: 'white'}}>Sale to đón Tết</Text>
                    </View>
                    <Text style={{marginHorizontal: 5,marginTop: 10}}>{item.name}</Text>
                    {/* màn hình */}
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <TouchableOpacity style={{
                            backgroundColor: "#C0C0C0",
                            marginHorizontal: 5
                        }}>
                            <Text style={{fontSize: 13}}>{item.manhinh[0]}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            backgroundColor: "#C0C0C0",
                            marginHorizontal: 5
                        }}>
                            <Text style={{fontSize: 13}} >{item.manhinh[1]}</Text>
                        </TouchableOpacity>
                    </View>
                    {/*đây là dung lượng */}
                    <View style={{ marginTop: 10, flexDirection: 'row', marginHorizontal: 5 }}>
                        {item.dungluong.map(Eachdata =>
                            <TouchableOpacity style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '30%',
                                height: 20,
                                borderWidth: 1,
                                borderColor: 'black',
                                marginRight: 8
                            }}>
                                <Text>{Eachdata}</Text>
                            </TouchableOpacity>)}
                    </View>

                    <Text style={{marginTop: 20,fontSize: 15, marginLeft: 10}}>{item.picec}  -{item.sale}</Text>
                    <Text style={{
                        marginLeft: 12,
                        fontSize: 17,
                        fontWeight: 'bold'
                    }}>
                       chỉ còn: {item.picecSale}
                    </Text>
                </TouchableOpacity>
            } 
        />
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gridView: {
        flex: 0.5,
        backgroundColor: 'blue',
        height: 200
    }
})
export default test