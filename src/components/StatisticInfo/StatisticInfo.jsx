import React from 'react';
import sprite from '../../image/icons.svg';
import { CalorieIcon, StatisticInfoBlock, VideoTutorialBlock, VideoTutorialTextBlock, NumbersOfVideos, VideoTutorial, IconPlay, CalorieStatistics, CalorieTextBlock, CalorieNumber, CalorieText} from './StatisticInfo.styled'

const StatisticInfo = () => {
  return (
    <StatisticInfoBlock>
      <VideoTutorialBlock>
        <IconPlay>
        <svg width="30" height="30">
          <use href={`${sprite}#icon-play`} />{' '}
        </svg>
        </IconPlay>
        <VideoTutorialTextBlock>
          <NumbersOfVideos>350+</NumbersOfVideos>
          <VideoTutorial>Video Tutorial</VideoTutorial>
        </VideoTutorialTextBlock>
      </VideoTutorialBlock>
      <CalorieStatistics>
        <CalorieIcon>
          <svg width="12" height="12">
          <use href={`${sprite}#icon-running-stick-figure-svgrepo-com-1`} />{' '}
          </svg>
        </CalorieIcon>
        <CalorieTextBlock>
          <CalorieNumber>500</CalorieNumber>
          <CalorieText>cal</CalorieText>
        </CalorieTextBlock>
      </CalorieStatistics>
    </StatisticInfoBlock>
  );
};

export default StatisticInfo;
