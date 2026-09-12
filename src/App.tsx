import { Suspense } from "react";
import "./App.css";
import Banner from "./Components/Header_Section/Banner";
import ExploreTechnologies from "./Components/ExploreTechnologies/ExploreTechnologies";
import Nav from "./Components/Header_Section/Nav";
import type { technologyType } from "./type";
import Footer from "./Components/Footer";

const techPromise = async (): Promise<technologyType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-100">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <ExploreTechnologies techPromise={techPromise()} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
