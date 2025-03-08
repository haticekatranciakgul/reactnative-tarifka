import react from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ActivityIndicator } from 'react-native';
import useFetch from '../../hook/useFetch';
import { API_URL } from '@env';
import MealCard from '../../Components/MealCard/MealCard';
import config from '../../../config';
import styles from './Meals.style';

const Meals = ({ navigation, route }) => {
    const { strCategory } = route.params;

    const { data, loading, error } = useFetch(`${config.API_URL_MEALS}=${strCategory}`);


    const handleMeals = idMeal => {
        navigation.navigate('DetailPage', { idMeal });
    };
    const renderMealCard = ({ item }) => <MealCard meals={item} onSelect={() => handleMeals(item.idMeal)} />


    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <Error />;
    }

    return (
        <View>
            <FlatList
                data={data.meals}
                keyExtractor={(item) => item.idMeal}
                renderItem={renderMealCard}
            />
        </View>
    );
}
export default Meals;