import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";

import { createBrowserRouter ,RouterProvider ,Outlet } from "react-router-dom";

// createBrowserRouter help in creating configuration and routerprovide helps in Providing created config to app for rendering purposes.

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      {/* // now header is fixed and  things will appear on ui according to children path 
      and for this we use outlet component from react-router-dom for children routing  */}
      <Outlet/>
    </div>
  );
};

// here we are creating configuration after creation we need to provide this config to render it.
const Approuter=createBrowserRouter([

  {
    //if path/configuration is "/" then it will load/render our aaplayout complete interface.
    path:"/",
    element:<Applayout/>,
    // now these two will act as a children for applayout
    children:[
      {
         path:"/",
         element:<Body/>
      },
      {
        //if configuration is "/about" then it will render about component
        path:"/about",
        element:<About/>,
      },
      {
        // if configuration is "/contact" then it will load contact us page 
         path:"/contact",
         element:<Contact/>,
      },
      {
        // semi-colon indicates that now paths after restaurant is dynamic.
         path:"/restaurants/:resId",
         element:<RestaurantMenu/>,
      },
    ],
    errorElement:<Error/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//earilier we are directly rendering applayout now routerprovider handle this task.
// root.render(<Applayout />);
root.render(<RouterProvider router={Approuter}/>)
