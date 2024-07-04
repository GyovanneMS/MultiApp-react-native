import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import Map from "../pages/Map";
import {Entypo, FontAwesome6, AntDesign} from "@expo/vector-icons";
import Experience from "../pages/Experience";
import HardSkills from "../pages/HardSkills";


const Tab = createBottomTabNavigator();

export function Routes(){
    return <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: "purple",
                    },
                    tabBarActiveTintColor: "yellow",
                    tabBarInactiveTintColor: "gray",
                }}>
        <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarIcon: ({ focused, size, color}) => {
                    if(focused)
                        return <Entypo name="hand" size={size} color={color} />
                    else
                        return <Entypo name="grid" size={size} color={color} />
                }
            }}/>
        <Tab.Screen
            name="Map"
            component={Map}
            options={{
                tabBarIcon: ({ focused, size, color}) => {
                    if(focused)
                        return <FontAwesome6 name="explosion" size={size} color={color} />
                    else
                        return <Entypo name="globe" size={size} color={color} />
                }
            }}/>
        <Tab.Screen
            name="Experience"
            component={Experience}
            options={{
                tabBarIcon: ({ focused, size, color}) => {
                    if(focused)
                        return <FontAwesome6 name="people-carry-box" size={size} color={color} />
                    else
                        return <AntDesign name="eye" size={size} color={color} />
                }
            }}/>
        <Tab.Screen
            name="HardSkills"
            component={HardSkills}
            options={{
                tabBarIcon: ({ focused, size, color}) => {
                    if(focused)
                        return <FontAwesome6 name="person-hiking" size={size} color={color} />
                    else
                        return <FontAwesome6 name="brain" size={size} color={color} />
                }
            }}/>
    </Tab.Navigator>
}