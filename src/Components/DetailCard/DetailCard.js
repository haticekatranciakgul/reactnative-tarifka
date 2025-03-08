import React from 'react';
import {View, Text, Image, Linking, TouchableOpacity} from 'react-native';


const DetailCard = ({detail}) => {
    return (
        <View>
            <Image source={{uri: detail.strMealThumb}} style={{width: 400, height: 200}} />
            <Text>{detail.strMeal}</Text>
            <Text>{detail.strInstructions}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(detail.strYoutube)}>
                <Text>Watch Video</Text>
            </TouchableOpacity>
        </View>
    )
}
export default DetailCard;