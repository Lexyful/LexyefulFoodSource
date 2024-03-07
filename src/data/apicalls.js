
export const fetchFoodData = id => {
    let path;
    id ? path = id : path = '';
    return fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&ingr=${path}&nutrition-type=cooking`)
    .then((response) => {
      if (!response.ok) {
        throw new Error( `${response.status}:${response.statusText}`)
      }
  
      return response.json();
    });
  }
