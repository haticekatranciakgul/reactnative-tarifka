import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, ImageBackground, Dimensions } from 'react-native'

const deviceSize = Dimensions.get('window');

const MealCard = ({ meals, onSelect }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <Text>{meals.strMeal}</Text>

            {/* <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <ImageBackground
                        style={styles.image}
                        imageStyle={{ borderRadius: 15 }}
                        source={{ uri: meals.strMealThumb }}
                    >
                        <View style={styles.titleContainer}>
                            <Text numberOfLines={1} style={styles.title}>{meals.strMeal}</Text>
                        </View>
                    </ImageBackground>
                </View>
            </View> */}
        </TouchableWithoutFeedback>
    )
}

export default MealCard