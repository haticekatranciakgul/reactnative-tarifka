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

  const handleCategorySelect = (idCategory) => {
    navigation.navigate('MealPage', {idCategory});
    console.log(idCategory);
  } 

  const renderCategories = ({ item }) => (
    <CategoryCard category={item} onSelect={() => handleCategorySelect(item.idCategory)} />
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
