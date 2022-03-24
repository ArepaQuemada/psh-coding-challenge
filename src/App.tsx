import { Routes, Route } from "react-router-dom";
import CommonContextProvider from "./context/context";
import Layout from "./pages/Layout";
import Crew from "./pages/crew/Crew";
import Characters from "./pages/characters/Characters";
import './scss/common.scss';
import Quotes from "./pages/quotes";
import CommonError from "./pages/errors/common";
import Error404 from "./pages/errors/404";

function App() {
  return (
    <>
      <CommonContextProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='crew' element={<Crew />} />
            <Route path='characters' element={<Characters />} />
            <Route path='/characters/:id' element={<Quotes />}/>
            <Route path='/error' element={<CommonError />} />
            <Route index element={<Crew />} />
            <Route path='*' element={<Error404 />} />
          </Route>
        </Routes>
      </CommonContextProvider>
    </>
  );
}

export default App;
