import React from 'react';
import { TouchableWithoutFeedback, View, Image } from 'react-native';
import styles from './CategoryCard.style';
import { Card, Text } from 'react-native-paper';


function CategoryCard({ category, onSelect }) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
       <Card style={styles.card}>
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: category.strCategoryThumb }} />
          <Text style={styles.text}>{category.strCategory}</Text>
        </View>
      </Card>
    </TouchableWithoutFeedback>
  );
}
export default CategoryCard;
