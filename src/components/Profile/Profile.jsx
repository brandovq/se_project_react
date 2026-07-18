import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

export default function Profile() {
  return (
    <section className="profile">
      <SideBar />
      <ClothesSection />
    </section>
  );
}
