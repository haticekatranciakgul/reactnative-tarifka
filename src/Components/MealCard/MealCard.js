import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, ImageBackground, Dimensions } from 'react-native'

const deviceSize = Dimensions.get('window');

const MealCard = ({ meals, onSelect }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View >
                <View >
                    <ImageBackground
                        
                        imageStyle={{ borderRadius: 15 }}
                        source={{ uri: meals.strMealThumb }}
                    >
                        <View>
                            <Text numberOfLines={1}>{meals.strMeal}</Text>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default MealCard