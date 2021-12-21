import LottieView from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import { LottieContainer } from './styles';

interface ILottie {
  weatherMain: string;
}

const LottieComponent: React.FC<ILottie> = ({ weatherMain }) => {
  const [play, setPlay] = useState<boolean>(false);
  const [speed, setspeed] = useState<number>(0);
  const [loop, setLoop] = useState<boolean>(false);
  const [animationState, setAnimationState] = useState<LottieView>();

  const sources = () => {
    switch (weatherMain) {
      case 'Clear':
        return require('../../../assets/lottie/4804-weather-sunny.json');
      case 'Clouds':
        return require('../../../assets/lottie/4800-weather-partly-cloudy.json');
      case 'Snow':
        return require('../../../assets/lottie/4793-weather-snow.json');
      case 'Rain':
        return require('../../../assets/lottie/4792-weather-stormshowersday.json');
      case 'Drizzle':
        return require('../../../assets/lottie/4792-weather-stormshowersday.json');
      case 'Thunderstorm':
        return require('../../../assets/lottie/4803-weather-storm.json');
      default:
        return require('../../../assets/lottie/4800-weather-partly-cloudy.json');
    }
  };

  useEffect(() => {
    animationState?.reset();
    animationState?.play();
    setPlay(true);
    setspeed(1);
    setLoop(true);
  }, [animationState]);

  return (
    <LottieContainer>
      <LottieView
        ref={(animation) => (animation ? setAnimationState(animation) : null)}
        source={sources()}
        speed={speed}
        loop={loop}
        autoPlay={play}
      />
    </LottieContainer>
  );
};
export default LottieComponent;
