
import { Suspense } from 'react';
import './App.css'
import Banner from './Components/Banner';
import ExploreTechnologies from './Components/ExploreTechnologies/ExploreTechnologies';
import Nav from './Components/Nav';
import type { technologyType } from './type';

const techPromise = async(): Promise<technologyType[]>=> {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}


function App() {


  return (
  <>
    <Nav />
    <Banner />
    <Suspense fallback={<h2>Loading...</h2>}>
    <ExploreTechnologies techPromise={techPromise()} /> 

    </Suspense>
  </>

  )
}

export default App
