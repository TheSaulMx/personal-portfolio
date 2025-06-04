import Navbar from "./components/Navbar/Navbar";
import PresentationCard from "./components/PresentationCard/PresentationCard";

function App() {
  return (
    <div className="bg-stone-50 h-screen">
      <header>
        <Navbar />
      </header>
      <main>
        <PresentationCard />
      </main>
    </div>
  );
}

export default App;
