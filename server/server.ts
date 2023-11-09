const hotReloadConfig = {
  resourceName: GetCurrentResourceName(),
  files: ['/dist/server.js', '/dist/client.js', '/dist/html/index.js'],
};

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
