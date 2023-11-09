const exps = global.exports;

onNet('whitigol.weather:sendForecast', (forecast: any) => {
  exps['npwd'].sendUIMessage({
    type: 'BD_FORECAST_UPDATE',
    payload: forecast,
  });
});

// Sync on connect
emitNet('whitigol.weather:requestForecast', GetPlayerServerId(PlayerId()));

/* Created by Whitigol Web Design */
