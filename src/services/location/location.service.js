import camelize from 'camelize';

export const locationRequest = (searchTerm) => {
  return fetch(
    `http://localhost:5001/thesocial-c43f1/us-central1/geocode?city=${searchTerm}`
  ).then((res) => {
    return res.json();
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  console.log(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
