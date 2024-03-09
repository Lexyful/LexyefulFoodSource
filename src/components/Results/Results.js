import { FoodItem } from "../FoodItems/FoodItems";

export const Results = ({ searchedResults }) => {
    const storedData = localStorage.getItem('apiData');
    if (storedData) {
      // If data exists in local storage, parse it from JSON format
      JSON.parse(storedData);
    }
  
    const foodItem = (food) => {
        if (food){
      return (
        <div className="food-item-container">
          <div className="food-grid">
            <div className="food-items">
              {food.hints.map((item, index) => (
                <div key={index} className="food-item">
                  {item.food.image && (
                    <img
                      className="food-item-image"
                      src={item.food.image}
                      alt={item.food.label}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    } else {
        return (
          <div>Sorry, no results found!</div>
        )
    }
    }
  
    return (
    //  foodItem(storedData)
    <div></div>
    );
  };

