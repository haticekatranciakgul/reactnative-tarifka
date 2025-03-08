import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, ImageBackground, Dimensions } from 'react-native'
import styles from './MealCard.style';

const deviceSize = Dimensions.get('window');

const MealCard = ({ meals, onSelect }) => {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onSelect}>

                <ImageBackground
                    style={styles.image}
                    imageStyle={{ borderRadius: 15 }}
                    source={{ uri: meals.strMealThumb }}
                >
                    <View style={styles.textContainer}>
                        <Text style={styles.text} numberOfLines={1}>{meals.strMeal}</Text>
                    </View>
                </ImageBackground>
            </TouchableWithoutFeedback>
        </View>

    )
}

export default MealCard