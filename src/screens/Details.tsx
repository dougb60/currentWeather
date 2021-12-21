import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useMemo } from 'react';
import {
  DefaultBody,
  Header,
  DetailsBody,
  DetailFooter,
  DetailsSun,
} from '../components';
import { useAppSelector } from '../hooks/redux';
import { ParamList } from '../routes/paramList';

interface IDetailsProps {
  citieId: number;
}

const Details: React.FC<IDetailsProps> = () => {
  const navigation = useNavigation<NavigationProp<ParamList>>();
  const weatherList = useAppSelector((state) => state.weather.weatherList);
  const citieId = useAppSelector((state) => state.weather.citieId);

  const weatherCity = useMemo(() => {
    if (citieId && weatherList)
      return weatherList.find((citie) => citie.id === citieId);
    return null;
  }, [weatherList, citieId]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const RenderDetailsBody = () => {
    if (weatherCity && weatherCity.weather.length > 0) {
      return <DetailsBody weather={weatherCity} />;
    }

    return null;
  };

  const RenderDetailsFooter = () => {
    if (weatherCity) return <DetailFooter weather={weatherCity} />;
    return null;
  };

  const RenderSunsetFooter = () => {
    if (weatherCity) {
      const { sys } = weatherCity;
      return <DetailsSun sys={sys} />;
    }
    return null;
  };

  return (
    <DefaultBody colors="sunnyDay">
      <Header
        headerText={weatherCity?.name ?? 'Weather details'}
        goBack={handleGoBack}
      />
      <RenderDetailsBody />
      <RenderDetailsFooter />
      <RenderSunsetFooter />
    </DefaultBody>
  );
};

export default Details;
