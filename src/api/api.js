// src/services/api.js
export const fetchApod = async () => {
  const response = await fetch(
    'https://api.nasa.gov/planetary/apod?api_key=9KMYMwO3CuyJheZn4tlL4uCtvbBVBcHzYhI9W8oc'
  );
  if (!response.ok) throw new Error('Failed to fetch APOD');
  return response.json();
};
