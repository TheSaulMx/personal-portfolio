import Footer from "./components/Footer";
import Header from "./components/Header";
import PresentationCard from "./components/PresentationCard";
import Projects from "./components/Projects";
import SectionContainer from "./components/SectionContainer";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div
      className="top-0 bottom-0 min-h-screen w-full bg-gray-50 dark:bg-gray-950
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
      dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
    >
      <Header />
      <main className="space-y-24 pb-35">
        <SectionContainer>
          <PresentationCard />
        </SectionContainer>
        <SectionContainer id="experiencia">
          <WorkExperience />
        </SectionContainer>
        <SectionContainer id="proyectos">
          <Projects />
        </SectionContainer>
      </main>
      <Footer />
    </div>
  );
}

export default App;
