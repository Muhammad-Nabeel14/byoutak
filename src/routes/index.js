import { useRoutes } from "react-router-dom";
import NewHome from "../pages/SelectionPages/NewHome";
import Property from "../pages/SelectionPages/Property";
import Unit from "../pages/SelectionPages/Unit";
import Price from "../pages/SelectionPages/Price";
import Projects from "../pages/Projects/Projects";
import Slider from "../pages/Slider/Slider";
import Meeting from "../pages/Meeting/Meeting";
import ContactUs from "../pages/ContactUs/ContactUs";
import Search from "../pages/Search/Search";
import PropertyPage from "../pages/Property/Property";

export default function Router(){

    let element=useRoutes([
        {
      path:"/",            
      element:<NewHome/>
    },
    {path:"property",element:<Property/>},
    {path:"unit",element:<Unit/>},
    {path:"price",element:<Price/>},
    {path:"projects",element:<Projects/>},
    {path:"slider",element:<Slider/>},
    {path:"meeting",element:<Meeting /> },
    {path:"contactus",element:<ContactUs/> },
    {path:"search",element:<Search/> },
    {path:"property-page",element:<PropertyPage/> },
    
])
    return element;
}