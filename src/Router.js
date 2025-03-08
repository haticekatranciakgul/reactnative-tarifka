import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './Pages/Categories/Categories';
import Detail from './Pages/Detail/Detail';
import Meal from './Pages/Meals/Meals';

const Stack = createNativeStackNavigator();


const Router = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="CategoriesPage" options={{
          title: 'CATEGORIES',
          headerTintColor: '#fba401',
          headerStyle: { backgroundColor: '#eee' },
          headerTitleAlign: 'center',
        }} component={Categories} />

        <Stack.Screen name="DetailPage"
           options={{
            title: 'Detail',
            headerTintColor: '#fba401',
            headerStyle: {backgroundColor: '#eee'},
            headerTitleAlign: 'center',
          }}
         component={Detail} />

        <Stack.Screen name="MealPage" 
        options={{
          title: 'MEALS',
          headerTintColor: '#fba401',
          headerStyle: { backgroundColor: '#eee' },
          headerTitleAlign: 'center',
        }} component={Meal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Router;

