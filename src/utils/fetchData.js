export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ba78f1ac2amsh5370676efc2046cp12994djsn6db15cc3dbc3',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
   
  };

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0727101e27msh6b6cfaa09659808p1255f8jsn079f85ef8154',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async(url,options)=>{
    const response = await fetch(url,options);
    const data = await response.json();
    return data;
     
}