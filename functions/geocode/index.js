const { locations: locationsMock } = require('./geocode.mock');
const url = require('url');

module.exports.geocodeRequest = (request, response, client) => {
  const { city, mock } = url.parse(request.url, true).query;
  if (mock === 'true') {
    const locationMock = locationsMock[city.toLowerCase()];

    response.json(locationMock);
  }

  client
    .geocode({
      params: {
        address: city,
        key: 'apikey',
      },
      timeout: 1000,
    })
    .then((res) => {
      return res.json(res.data);
    })
    .catch((e) => {
      return response.status(400);
      return response.send(e.response.data.error_message);
    });
};
