import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { CityCard, DefaultBody, Header, Loading } from '../components';
import { useWeatherList } from '../hooks/loadWeather';
import { IWeather } from '../hooks/loadWeather/interface';
import { actions } from '../redux/ducks/weather';
import { ParamList } from '../routes/paramList';

const Home: React.FC = () => {
  const { getWeatherList, isLoading, citiesWeather } = useWeatherList();
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<ParamList>>();

  useEffect(() => {
    getWeatherList();
  }, [getWeatherList]);
  const handlePress = useCallback(
    (item: IWeather) => {
      dispatch(actions.listWeatherCities({ weatherList: citiesWeather }));
      dispatch(actions.setSelectedCitie({ citieId: item.id }));
      navigation.navigate('details');
    },
    [citiesWeather, dispatch, navigation],
  );

  const renderContent = useCallback(() => {
    if (isLoading) {
      return <Loading />;
    }
    return (
      <FlatList
        data={citiesWeather}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity delayPressIn={50} onPress={() => handlePress(item)}>
            <CityCard
              cityName={item.name}
              temperature={item.main}
              weather={item.weather[0]}
            />
          </TouchableOpacity>
        )}
        refreshing={isLoading}
        onRefresh={() => getWeatherList()}
        style={{ marginTop: 32, marginBottom: 32 }}
        ItemSeparatorComponent={() => <View style={{ marginBottom: 16 }} />}
        contentContainerStyle={{ padding: 16 }}
      />
    );
  }, [isLoading, citiesWeather, handlePress]);

  return (
    <DefaultBody colors="sunnyDay">
      <Header headerText="Weather conditions" />
      {renderContent()}
    </DefaultBody>
  );
};
export default Home;
