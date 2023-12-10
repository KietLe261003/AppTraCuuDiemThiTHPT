import * as React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { List_item,Tra_cuu_diem,Setting,Select_school} from '../view';
const Tab = createBottomTabNavigator();
function TabBar(props) {
    return <Tab.Navigator initialRouteName="Chọn trường" screenOptions={{
        headerShown: false
    }}>
        <Tab.Screen options={{
            tabBarIcon: () => <Image style={{ width: 20, height: 20 }} source={require('../Image/search-interface-symbol.png')} />
        }} name="Chọn trường" component={Select_school} />
        <Tab.Screen options={{
            tabBarIcon: () => <Image style={{ width: 20, height: 20 }} source={require('../Image/home.png')} />
        }} name="Home" component={List_item} />
        <Tab.Screen options={{
            tabBarIcon: () => <Image style={{ width: 20, height: 20 }} source={require('../Image/bar-chart.png')} />
        }} name="Thống kê" component={Tra_cuu_diem} />
        {/* <Tab.Screen options={{
            tabBarIcon: () => <Image style={{ width: 20, height: 20 }} source={require('../Image/settings.png')} />
        }} name="Setting" component={Setting} /> */}
    </Tab.Navigator>
}
export default TabBar;