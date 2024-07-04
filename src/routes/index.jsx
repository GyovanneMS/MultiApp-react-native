import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import Map from "../pages/Map";
import { Entypo, FontAwesome6, AntDesign } from "@expo/vector-icons";
import Experience from "../pages/Experience";
import HardSkills from "../pages/HardSkills";

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false, // Oculta o cabeçalho padrão de navegação
                tabBarStyle: {
                    backgroundColor: "purple", // Estilo de fundo da barra de navegação
                },
                tabBarActiveTintColor: "yellow", // Cor dos ícones ativos
                tabBarInactiveTintColor: "gray", // Cor dos ícones inativos
            }}
        >
            {/* Definição de cada tela/tab dentro do navigator */}
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        // Ícone e cor para a tela Home, variando com o foco
                        if (focused)
                            return <Entypo name="hand" size={size} color={color} />;
                        else
                            return <Entypo name="grid" size={size} color={color} />;
                    }
                }}
            />
            <Tab.Screen
                name="Map"
                component={Map}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        // Ícone e cor para a tela Map, variando com o foco
                        if (focused)
                            return <FontAwesome6 name="explosion" size={size} color={color} />;
                        else
                            return <Entypo name="globe" size={size} color={color} />;
                    }
                }}
            />
            <Tab.Screen
                name="Experience"
                component={Experience}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        // Ícone e cor para a tela Experience, variando com o foco
                        if (focused)
                            return <FontAwesome6 name="people-carry-box" size={size} color={color} />;
                        else
                            return <AntDesign name="eye" size={size} color={color} />;
                    }
                }}
            />
            <Tab.Screen
                name="HardSkills"
                component={HardSkills}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        // Ícone e cor para a tela HardSkills, variando com o foco
                        if (focused)
                            return <FontAwesome6 name="person-hiking" size={size} color={color} />;
                        else
                            return <FontAwesome6 name="brain" size={size} color={color} />;
                    }
                }}
            />
        </Tab.Navigator>
    );
}
