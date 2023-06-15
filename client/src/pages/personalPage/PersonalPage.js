import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import PetsitterPageCard from "../../components/petsitterPage-card/PetsitterPageCard";
import "./sitter-personal.css";

function PersonalPage() {
  return (
    <div>
      <Header />
      <PetsitterPageCard />
      <Footer />
    </div>
  );
}

export default PersonalPage;
