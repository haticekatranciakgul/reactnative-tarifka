import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';
import Config from 'react-native-config';
import config from '../../../config';
import { API_URL_CATEGORIES } from '@env';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import useFetch from '../../hook/useFetch';
import styles from './Categories.style'
import Loading from '../../Components/Loading/Loading';
import Error from '../../Components/Error/Error';

const Categories = ({ navigation }) => {
  const { data , loading, error } = useFetch(API_URL_CATEGORIES);

  const handleCategorySelect = (strCategory) => {
    navigation.navigate('MealPage', { strCategory });
    console.log(strCategory);
  }

  const renderCategories = ({ item }) => (
    <CategoryCard category={item} onSelect={() => handleCategorySelect(item.strCategory)} />
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }


  return (
    <View style={styles.container}>
      <FlatList
        data={data.categories}
        keyExtractor={(item) => item.idCategory}
        renderItem={renderCategories}
      />
    </View>
  );
};


export default Categories;
