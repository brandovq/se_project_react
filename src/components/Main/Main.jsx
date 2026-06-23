import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";

function Main({ weatherData, handleCardClick }) {
  return (
    <main>
      <WeatherCard />
      <section className="cards">
        <p className="cards__text">
          Today is 75 &deg; F / You may want to wear:
        </p>
        {/* To render the list of items remember that you use a ul */}
        <ul className="cards__list">
          {/* to escape back to javascript we use the curly braces below for defaultClothingItems and I used the map function to iterate over each item in the array. And 'item' in the parenthesis after map, respresents each item in teh array   */}
          {defaultClothingItems
            // .filter((item) => {
            //   return item.weather === weatherData.type;
            // })
            .map((item) => {
              // Remember to ALWAYS give a unique key property when I render a list in React to help React identify which items have changed, are added, or are removed. As seen below)
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
