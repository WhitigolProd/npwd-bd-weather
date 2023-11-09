import React, { useState } from 'react';
import { NuiProvider, useNuiEvent } from 'react-fivem-hooks';
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import GetWeatherText from './weatherText';

import ImgBlizzard from './img/BLIZZARD.png';
import ImgClearing from './img/CLEARING.png';
import ImgClouds from './img/CLOUDS.png';
import ImgExtrasunny from './img/EXTRASUNNY.png';
import ImgHalloween from './img/HALLOWEEN.png';
import ImgOvercast from './img/OVERCAST.png';
import ImgRain from './img/RAIN.png';
import ImgSmog from './img/SMOG.png';
import ImgSnow from './img/SNOW.png';
import ImgSnowlight from './img/SNOWLIGHT.png';
import ImgThunder from './img/THUNDER.png';
import ImgXmas from './img/XMAS.png';

import { IPhoneSettings } from '@project-error/npwd-types';
import { i18n } from 'i18next';
import { Theme, StyledEngineProvider, Paper } from '@mui/material';
import ThemeSwitchProvider from './ThemeSwitchProvider';
import { HomeRounded, InfoRounded } from '@mui/icons-material';
import Header, { HEADER_HEIGHT } from './components/Header';
import { path } from '../npwd.config';
import styles from './styles';
import { WeatherForecast, WeatherTypes } from './types';

const Container = styled(Paper)`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-height: 100%;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 1.5rem;
  max-height: calc(100% - 3.5rem - ${HEADER_HEIGHT});
  overflow: auto;
`;

const LinkItem = styled(Link)`
  font-family: sans-serif;
  text-decoration: none;
`;

const Footer = styled.footer`
  margin-top: auto;
`;

interface AppProps {
  theme: Theme;
  i18n: i18n;
  settings: IPhoneSettings;
}

const App = (props: AppProps) => {
  const { data } = useNuiEvent<string>({ event: 'BD_FORECAST_UPDATE' });

  // forecast eaquals data if not null, undefined, "null", or "undefined".
  const forecast: WeatherForecast | null = data ? JSON.parse(data) : null;

  const SelectImage = (weather: WeatherTypes) => {
    switch (weather) {
      case 'BLIZZARD':
        return ImgBlizzard;
      case 'CLEAR':
        return ImgExtrasunny;
      case 'CLEARING':
        return ImgClearing;
      case 'CLOUDS':
        return ImgClouds;
      case 'EXTRASUNNY':
        return ImgExtrasunny;
      case 'FOGGY':
        return ImgSmog;
      case 'HALLOWEEN':
        return ImgHalloween;
      case 'NEUTRAL':
        return ImgClearing;
      case 'OVERCAST':
        return ImgOvercast;
      case 'RAIN':
        return ImgRain;
      case 'SMOG':
        return ImgSmog;
      case 'SNOW':
        return ImgSnow;
      case 'SNOWLIGHT':
        return ImgSnowlight;
      case 'THUNDER':
        return ImgThunder;
      case 'XMAS':
        return ImgXmas;
    }
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeSwitchProvider mode={props.theme.palette.mode}>
        <Container
          square
          elevation={0}
          style={{
            backgroundColor: 'skyblue',
            display: 'block',
          }}
        >
          <Header>Big Daddy's Hourly Forecast</Header>
          <Content style={styles.mainContainer}>
            <div style={styles.weatherContainer}>
              {forecast ? (
                forecast.splice(0, 6).map((item, index) => {
                  return (
                    <div key={index} style={styles.weatherCard}>
                      <img
                        src={SelectImage(item.weather)}
                        style={styles.weatherImage}
                        alt={item.weather as string}
                      />
                      <span>•</span>
                      <div style={styles.weatherTextContainer}>
                        <span style={styles.weatherText1}>{item.temp}&deg;</span>
                        <span style={styles.weatherText2}>{GetWeatherText(item.weather)}</span>
                      </div>
                    </div>
                  );
                })
              ) : (
                <span>Loading Weather Data</span>
              )}
            </div>
          </Content>
        </Container>
      </ThemeSwitchProvider>
    </StyledEngineProvider>
  );
};

const WithProviders: React.FC<AppProps> = (props) => (
  <NuiProvider>
    <App {...props} />
  </NuiProvider>
);

export default WithProviders;

/* Created by Whitigol Web Design */
