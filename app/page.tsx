import Identity from "./components/Identity";
import Footer from "./components/Footer";
import Specialty from "./components/Specialty";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Values from "./components/Values";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container max-w-7xl mx-auto">
        <Hero />
        <Identity />
        <Values />
        <Specialty />
      </main>
      <Footer />
    </>
  );
}
