import React, { useState } from 'react';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Main from '../Main/Main'
import Header from "../Header/Header";
import Footer from "../Footer/Footer"
const Router = () => {

  const [mainTrigger, setMainTrigger] = useState(false)

    return(
        <div>
          <BrowserRouter>
          {mainTrigger && <Header/>}
            <Routes>
              <Route path='/nickWeb' element={<Main setMainTrigger={setMainTrigger}/>}/>
            </Routes>
          {mainTrigger&& <Footer/>}
          </BrowserRouter>
          
        </div>
    )
}

export default Router
