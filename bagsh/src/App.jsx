import Cards from "./components/Cards";
import Header from "./components/Header";
import Highlight from "./components/Highlight";
import "./styles/global.css";

export default function App() {
  return (
    <div>
      <Header />
      <Highlight />
      <Cards />
    </div>
  );
}
