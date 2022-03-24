import { Routes, Route } from "react-router-dom";
import CommonContextProvider from "./context/context";
import Layout from "./pages/Layout";
import Crew from "./pages/crew/Crew";
import Characters from "./pages/characters/Characters";
import './scss/common.scss';
import Quotes from "./pages/quotes";

function App() {
  return (
    <>
      <CommonContextProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='crew' element={<Crew />} />
            <Route path='characters' element={<Characters />} />
            <Route path='/characters/:id' element={<Quotes />}/>
            <Route index element={<Crew />} />
          </Route>
        </Routes>
      </CommonContextProvider>
    </>
  );
}

export default App;
