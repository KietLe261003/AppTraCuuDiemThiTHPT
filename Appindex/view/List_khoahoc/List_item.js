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
import Item from "./Item";
import Tracnghiem from "../Tracnghiem";
import  Tracnghiemsu  from "../TracNghiemsu";
function List_item({ navigation }){
    const[mItem,setItem] = useState([
        {
            uri: 'https://images.tuyensinh247.com/picture/2018/1212/1_1.png',
            NameKhoahoc: '[S0] - MẤT GỐC TOÁN HÌNH 12 NĂM 2023 - THẦY NGUYỄN CÔNG NGUYÊN',
            NameGiaovien: 'Nguyễn Công Nguyên',
            DateEnd: '30/07/2023',
            Price: '499,000đ'
        },
        {
            uri: 'https://images.tuyensinh247.com/picture/2022/0705/600-imggv.png',
            NameKhoahoc: '[S0] - MẤT GỐC TOÁN HÌNH 12 NĂM 2023 - THẦY NGUYỄN CÔNG NGUYÊN',
            NameGiaovien: 'Lê Thị Thanh Loan',
            DateEnd: '30/07/2022',
            Price: '499,000đ'
        },
        {
            uri: 'https://images.tuyensinh247.com/picture/2018/1212/1_1.png',
            NameKhoahoc: '[S0] - MẤT GỐC TOÁN HÌNH 12 NĂM 2023 - THẦY NGUYỄN CÔNG NGUYÊN',
            NameGiaovien: 'Nguyễn Minh thắng',
            DateEnd: '30/07/2023',
            Price: '499,000đ'
        },
        {
            uri: 'https://images.tuyensinh247.com/picture/2018/1212/1_1.png',
            NameKhoahoc: '[S0] - MẤT GỐC TOÁN HÌNH 12 NĂM 2023 - THẦY NGUYỄN CÔNG NGUYÊN',
            NameGiaovien: 'Nguyễn Công Nguyên',
            DateEnd: '30/07/2023',
            Price: '499,000đ'
        },
        {
            uri: 'https://images.tuyensinh247.com/picture/2018/1212/1_1.png',
            NameKhoahoc: '[S0] - MẤT GỐC TOÁN HÌNH 12 NĂM 2023 - THẦY NGUYỄN CÔNG NGUYÊN',
            NameGiaovien: 'Nguyễn Công Nguyên',
            DateEnd: '30/07/2023',
            Price: '499,000đ'
        },
        {
            uri: 'https://images.tuyensinh247.com/picture/2018/1212/1_1.png',
            NameKhoahoc: '[S0] - MẤT GỐC TOÁN HÌNH 12 NĂM 2023 - THẦY NGUYỄN CÔNG NGUYÊN',
            NameGiaovien: 'Nguyễn Minh Thắng',
            DateEnd: '30/07/2023',
            Price: '499,000đ'
        },
        
    ])

    const[study,setstudy] = useState([
        {
            url: 'https://cdn-icons-png.flaticon.com/512/1739/1739515.png',
            NameMon: 'Toán'
        },
        {
            url: 'https://cdn-icons-png.flaticon.com/512/3534/3534033.png',
            NameMon: 'Ngữ văn'
        },
        {
            url: 'https://cdn-icons-png.flaticon.com/512/2682/2682065.png',
            NameMon: 'Lịch sử'
        },
        {
            url: 'https://cdn-icons-png.flaticon.com/512/290/290336.png',
            NameMon: 'Địa lý'
        },
        {
            url: 'https://cdn-icons-png.flaticon.com/512/2999/2999463.png',
            NameMon: 'Vật lý'
        },
        {
            url: 'https://cdn-icons-png.flaticon.com/512/995/995446.png',
            NameMon: 'Hóa'
        },
        {
            url: 'https://cdn-icons-png.flaticon.com/128/2941/2941552.png',
            NameMon: 'Sinh'
        },
    ])  

    const banner=[
        'https://admin.mit.vn/Uploads/images/banner-huong-dan-dang-ky-thi-thpt-truc-tuyen.png',
        'https://giasuthanhtai.com.vn/uploads/posts/lich-thi-thpt-quoc-gia-va-dai-hoc_2.jpg',
        'https://cdn.tgdd.vn/Files/2022/07/16/1448356/cover_1280x720-800-resize.jpg'
    ]
    const [imgActive,setimgActive] = useState(0);
    const [cnt,setcnt]=useState(0)
    function onchange(nativeEven){
            setcnt(cnt+1)
            setimgActive(cnt%3)
            //alert(`${cnt}`)
    }

    return <View style={styles.container}>
        <ScrollView>
            <View style={styles.header}>
                <ScrollView
                    onScroll={({ nativeEven }) => onchange(nativeEven)}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    style={styles.header}
                >
                    {
                        banner.map((e, index) =>
                            <Image
                                key={e}
                                resizeMode='stretch'
                                style={styles.header}
                                source={{ uri: e }}
                            />
                        )
                    }
                </ScrollView>
                <View style={styles.wrapDot}>
                    {
                        banner.map((e, index) =>
                            <Text
                                key={e}
                                style={imgActive == index ? styles.dotActive : styles.dot}
                            >
                                ●
                            </Text>
                        )
                    }
                </View>
            </View>
            <View style={styles.Listbody}>
                <View style={{ height: 1, backgroundColor: 'black' }}></View>
                <FlatList
                    horizontal
                    data={study}
                    keyExtractor={item => item.NameMon}
                    renderItem={({ item }) => {
                        if (item.NameMon == 'Toán') {
                            return <TouchableOpacity
                                onPress={()=>navigation.navigate('TracNghiem')}
                            >
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Image
                                        style={styles.Img}
                                        source={{ uri: `${item.url}` }}
                                    />
                                    <Text style={{ fontSize: 15 }}>{item.NameMon}</Text>
                                </View>
                            </TouchableOpacity>
                        }
                        else if(item.NameMon=='Lịch sử')
                        {
                            return <TouchableOpacity
                                onPress={()=>navigation.navigate('TracNghiemSu')}
                            >
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Image
                                        style={styles.Img}
                                        source={{ uri: `${item.url}` }}
                                    />
                                    <Text style={{ fontSize: 15 }}>{item.NameMon}</Text>
                                </View>
                            </TouchableOpacity>
                        }
                        else {
                            return <TouchableOpacity>
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Image
                                        style={styles.Img}
                                        source={{ uri: `${item.url}` }}
                                    />
                                    <Text style={{ fontSize: 15 }}>{item.NameMon}</Text>
                                </View>
                            </TouchableOpacity>
                        }
                    }}
                    style={{ flex: 1 }}
                >

                </FlatList>
                <View style={{ height: 1, backgroundColor: 'black' }}></View>
            </View>
            {/* <ScrollView>
            {mItem.map(eachmItem=>{
                return <Item mItem={eachmItem} />
            })}
        </ScrollView> */}
            <View>
                <Text style={{ fontSize: 23, fontWeight: 'bold' }}>Các khóa học</Text>
                <FlatList
                    data={mItem}
                    renderItem={({ item }) => {
                        return <Item mItem={item} key={item.NameKhoahoc} />
                    }}
                    keyExtractor={eachmItem => mItem.NameKhoahoc}
                />
            </View>
        </ScrollView>
    </View>
}
var styles=StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: 400,
        height: 180,
    },
    wrapDot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    dotActive: {
        margin: 3,
        color: 'black'
    },
    dot: {
        margin: 3,
        color: 'white'
    },
    Listbody: {
        height: 100,
        justifyContent: 'center',
    },
    Img: {
        height: 50,
        width: 50,
        resizeMode: 'cover',
        margin: 10
    },
    Menu: {
        height: 50,
        flexDirection: 'row',
    },
    itemMenu: {
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftWidth: 1,
        borderColor: "black",
    }

})
export default List_item;