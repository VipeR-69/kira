const apiKey = "67d955ada27440663a072d3b182eb585";
const url = 'https://api.themoviedb.org/3/authentication';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2N2Q5NTVhZGEyNzQ0MDY2M2EwNzJkM2IxODJlYjU4NSIsIm5iZiI6MTczODYwOTM4OS45NzQwMDAyLCJzdWIiOiI2N2ExMTJlZDcxNmJmZDc0ZWNlMmI0NTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9fIk9aJBDYnIJ-qcp4rgUGJR7-oofwQxXk3p7Wb2OFo'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));