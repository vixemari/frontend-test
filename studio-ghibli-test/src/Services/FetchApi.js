export const fetchMovies = async () => {
  const response = await fetch("https://ghibliapi.herokuapp.com/films");
  const data = await response.json();
  return data;
}

export const fetchPeople = async () => {
  const response = await fetch("https://ghibliapi.herokuapp.com/people");
  const data = await response.json();
  return data;
}

export const fetchLocations = async () => {
  const response = await fetch("https://ghibliapi.herokuapp.com/locations");
  const data = await response.json();
  return data;
}
