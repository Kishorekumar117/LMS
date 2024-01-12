import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataDisplay from "./DataDisplay";

import AddDataForm from "./AddDataForm";
import Home from "./FHome";
const FRouting = () => {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="addform" element={<AddDataForm/>}></Route>
                <Route path="alumniform" element={<DataDisplay/>}></Route>
                
                {/* <Route path="success" element={<Success/>}></Route> */}

            </Routes>
            </BrowserRouter>
            
            
        
         
           
        </div>
    );
};

export default FRouting;