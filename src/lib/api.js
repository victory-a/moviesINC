import { baseUrl, APIKEY, sessionID } from '../config';

export const getCurrentMovies = async () => {
  try {
    const response = await fetch(
      `${baseUrl}/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCredits = async movieId => {
  try {
    const response = await fetch(
      `${baseUrl}/movie/${movieId}/credits?api_key=${APIKEY}&language=en-US`
    );
    const data = await response.json();
    return data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const getToken = () => {
  fetch(`${baseUrl}authentication/token/new?api_key=${APIKEY}&language=en-US&page=1`)
    .then(response => response.json)
    .then(data => data.request_token)
    .catch(err => console.log(err));
};

// const generateSessionId = () => {
//   fetch(`${baseUrl}authentication/token/new?api_key=${APIKEY}&language=en-US&page=1`)
//     .then(response => response.json)
//     .then(data => data.session_id)
//     .catch(err => console.log(err));
// };

export const rateMovie = async (movieID, rating) => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: {
      value: rating
    }
  };

  options.body = JSON.stringify({
    value: rating
  });

  console.log(options);

  try {
    const response = await fetch(
      `${baseUrl}/movie/${movieID}/rating?api_key=${APIKEY}&session_id=${sessionID}`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
