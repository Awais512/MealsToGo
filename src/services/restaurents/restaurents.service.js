import { mocks } from './mocks';
import camelize from 'camelize';

export const restaurantsRequest = (location = '37.7749295,-122.4194155') => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject('Not Found');
    }
    resolve(mock);
  });
};

restaurantsRequest()
  .then((result) => {
    console.log(camelize(result));
  })
  .catch((err) => {
    console.log(err);
  });
