import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { coordinates, apiKey } from "../../utils/constants.js";
import { useModalClose } from "../../hooks/useModalClose.js";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal";
import Profile from "../Profile/Profile.jsx";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import { getItems, addItem, removeItem } from "../../utils/api.js";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.jsx";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: "", C: "" },
    city: "",
    condition: "",
    isDay: true,
  });

  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const onAddItem = (inputValues) => {
    const newCardData = {
      name: inputValues.name,
      imageUrl: inputValues.imageUrl,
      weather: inputValues.weather,
    };

    addItem(newCardData)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        closeAllModals();
      })
      .catch(console.error);
  };

  const deleteItemHandler = (itemId) => {
    setItemToDelete(itemId);
    setIsDeleteConfirmOpen(true);
    setActiveModal("");
  };

  const confirmDelete = () => {
    removeItem(itemToDelete)
      .then(() => {
        setClothingItems(
          clothingItems.filter((item) => item._id !== itemToDelete),
        );
        closeAllModals();
        setIsDeleteConfirmOpen(false);
        setItemToDelete(null);
      })
      .catch(console.error);
  };

  const cancelDelete = () => {
    setIsDeleteConfirmOpen(false);
    setItemToDelete(null);
  };

  const closeAllModals = () => {
    setActiveModal("");
  };

  useModalClose(!!activeModal, closeAllModals);

  useEffect(() => {
    getWeather(coordinates, apiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);

    getItems()
      .then((data) => {
        setClothingItems(data.reverse());
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />

            <Route
              path="/profile"
              element={
                <Profile
                  clothingItems={clothingItems}
                  weatherData={weatherData}
                  onCardClick={handleCardClick}
                />
              }
            />
          </Routes>
        </div>
        <Footer />
        <AddItemModal
          isOpen={activeModal === "add-garment"}
          onClose={closeAllModals}
          //  Removed thefollowing code and added code below: handleSubmit={(event) => event.preventDefault()}
          onAddItem={onAddItem}
        />
        <ItemModal
          isOpen={activeModal === "preview"}
          card={selectedCard}
          onClose={closeAllModals}
          onDelete={deleteItemHandler}
        />
        <ConfirmDeleteModal
          isOpen={isDeleteConfirmOpen}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
