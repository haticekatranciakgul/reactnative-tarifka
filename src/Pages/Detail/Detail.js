import react from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ActivityIndicator } from 'react-native';
import useFetch from '../../hook/useFetch';
import { API_URL } from '@env';
import DetailCard from '../../Components/DetailCard/DetailCard';
import config from '../../../config';
import Error from '../../Components/Error/Error';
import Loading from '../../Components/Loading/Loading'

const Detail = ({ route }) => {
  const { idMeal } = route.params;

  const { data, loading, error } = useFetch(`${config.API_URL_DETAIL}=${idMeal}`);
  console.log(`${config.API_URL_DETAIL}=${idMeal}`);
  const renderDetailCard = ({ item }) => <DetailCard detail={item} />;

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }


  return (
    <View >
      <FlatList
        data={data.meals}
        renderItem={renderDetailCard}
        keyExtractor={item => item.idMeal}
      />
    </View>
  );
}
export default Detail;