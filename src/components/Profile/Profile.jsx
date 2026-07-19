import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

export default function Profile({
  clothingItems,
  weatherData,
  onCardClick,
  onAddClick,
}) {
  return (
    <section className="profile">
      <SideBar />
      <ClothesSection
        clothingItems={clothingItems}
        weatherData={weatherData}
        handleCardClick={onCardClick}
        onAddClick={onAddClick}
      />
    </section>
  );
}
