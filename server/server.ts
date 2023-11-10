import axios from 'axios';

const hotReloadConfig = {
  resourceName: GetCurrentResourceName(),
  files: ['/dist/server.js', '/dist/client.js', '/dist/html/index.js'],
};

/* Version Check */
const VERSION_URL: string =
  'https://raw.githubusercontent.com/WhitigolProd/auto-update-tmp/main/package.json';
const CURRENT_VERSION: string = GetResourceMetadata(GetCurrentResourceName(), 'version', 0);

axios
  .get(VERSION_URL)
  .then((res) => {
    if (res.data.version > CURRENT_VERSION) {
      console.log(
        `^1NPWD Big Daddy Weather is outdated!^7 ^3${CURRENT_VERSION}^7 -> ^2${res.data.version}^7`,
      );
      console.log(
        `Download the latest version at ^5https://github.com/WhitigolProd/npwd-bd-weather/releases/latest/download/npwd_BigDaddy_Weather.zip ^7`,
      );
    } else {
      console.log(`^2NPWD Big Daddy Weather is up to date!^7`);
    }
  })
  .catch((err) => {
    console.log(`^1Failed to check for updates!^7`);
  });

console.log('NPWD Weather Forecast for BigDady Weather by Whitigol Web Design');

// Send to all connected clients every 10 seconds
setInterval(() => {
  const forecast = exports['BigDaddy-Weather']['ExportForecast']();
  emitNet('whitigol.weather:sendForecast', -1, forecast);
}, 3000);

// Sync to new clients
onNet('whitigo.weather:requestForecast', (player: any) => {
  const forecast = exports['BigDaddy-Weather']['ExportForecast']();
  emitNet('whitigol.weather:sendForecast', player, forecast);
});

/* Created by Whitigol Web Design */
