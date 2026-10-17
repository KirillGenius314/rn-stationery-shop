import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import DrugListScreen from '../screens/DrugListScreen';
import DrugDetailsScreen from '../screens/DrugDetailsScreen';
import CartScreen from '../screens/CartScreen';
import HeaderCartButton from '../components/HeaderCartButton';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="DrugList"
          component={DrugListScreen}
          options={{
            title: 'Лекарства',
            headerTitleStyle: { color: '#008000' , fontSize: 30},
            headerTitleAlign: 'center',
            headerRight: () => <HeaderCartButton />,
          }}
        />
        <Stack.Screen
          name="DrugDetails"
          component={DrugDetailsScreen}
          options={{
            title: 'Товар',
            headerRight: () => <HeaderCartButton />,
          }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ title: 'Корзина' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}