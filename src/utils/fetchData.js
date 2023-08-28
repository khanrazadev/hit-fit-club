export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "10d6236308msh1b873d82c44a2eep19add3jsn8ea5475da1c0",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "10d6236308msh1b873d82c44a2eep19add3jsn8ea5475da1c0",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
