import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';
import Config from 'react-native-config';
import config from '../../../config';
import { API_URL_CATEGORIES } from '@env';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import useFetch from '../../hook/useFetch';


const Categories = ({navigation}) => {
  const {data} = useFetch(API_URL_CATEGORIES);

  const handleCategorySelect = (strCategory) => {
    navigation.navigate('MealPage', {strCategory});
    console.log(strCategory);
  } 

  const renderCategories = ({ item }) => (
    <CategoryCard category={item} onSelect={() => handleCategorySelect(item.strCategory)} />
);


  return (
    <View >
      <FlatList
        data={data.categories}
        keyExtractor={(item) => item.idCategory}
        renderItem={renderCategories}
      />
    </View>
  );
};


export default Categories;
