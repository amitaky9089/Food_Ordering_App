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


// here we are creating our header componet ,name should be camelcase
// const Header = () => {
//   return (
//     <div className="header">
//       <div className="logo-container">
//         <img
//           className="logo"
//           src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All"
//         ></img>
//       </div>
//       <div className="nav-items">
//         <ul>
//           <li>Home</li>
//           <li>About Us</li>
//           <li>Contact Us</li>
//           <li>Cart</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// here we are creating restraunt card component as we are using it multiple times
// const RestrauntCard = (props) => {
//     // const {resName, cuisine}=props;
//     const {resData}=props;
//     // console.log(resData.info)
//     const {name, cuisines, avgRating, deliveryTime, cloudinaryImageId, costForTwo} = resData?.info;
//   return (
//     <div className="res-card">
//       <img
//         className="res-logo"
//         src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
//       ></img>
//       {/* <h3>{resData.info.name}</h3>
//       <h4>{resData.info.cuisines.join(", ")}</h4>
//       <h5>{resData.info.avgRating} Stars</h5> 
//      <h5>{resData.info.sla.deliveryTime} minutes</h5> */}

//        <h3>{name}</h3>
//       <h4>{cuisines.join(", ")}</h4>
//       <h5>{avgRating} Stars</h5> 
//        <h5>{costForTwo}</h5>
//     </div>
//   );
// };

// here we are creating our body component
// const Body = () => {
//   return (
//     <div className="body">
//       {/* here is our seach box  */}
//       <div className="search">Search</div>
//       {/* here is our restraunt cards */}
//       <div className="res-container">

//         {/* <RestrauntCard resName="Megha's Foods" cuisine="Daal ,Roti"/> */}
//         {/* <RestrauntCard resData={resList[0]}/>
//         <RestrauntCard resData={resList[1]}/>
//         <RestrauntCard resData={resList[2]}/>
//         <RestrauntCard resData={resList[3]}/>
//         <RestrauntCard resData={resList[4]}/>
//         <RestrauntCard resData={resList[5]}/>
//         <RestrauntCard resData={resList[6]}/>
//         <RestrauntCard resData={resList[7]}/>
//         <RestrauntCard resData={resList[8]}/>
//         <RestrauntCard resData={resList[9]}/>
//         <RestrauntCard resData={resList[10]}/>
//         <RestrauntCard resData={resList[11]}/>
//         <RestrauntCard resData={resList[12]}/>
//         <RestrauntCard resData={resList[13]}/>
//         <RestrauntCard resData={resList[14]}/>
//         <RestrauntCard resData={resList[15]}/>
//         <RestrauntCard resData={resList[16]}/>
//         <RestrauntCard resData={resList[17]}/>
//         <RestrauntCard resData={resList[18]}/>
//         <RestrauntCard resData={resList[19]}/> */}

//         {/* for increasing readability of our code we use map function to generate these cards as it js function we have to write in parenthesis. */}
//         {
//           resList.map((restaurant)=>
//              (<RestrauntCard key={restaurant.info.id} resData={restaurant}/>)
//         )
//         }
//       </div>
//     </div>
//   );
// };
// creating overall full component which contain all component inside it. basically a div


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
  // {
  //   //if configuration is "/about" then it will render about component
  //   path:"/about",
  //   element:<About/>,
  // },
  // {
  //   // if configuration is "/contact" then it will load contact us page 
  //    path:"/contact",
  //    element:<Contact/>,
    
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//earilier we are directly rendering applayout now routerprovider handle this task.
// root.render(<Applayout />);
root.render(<RouterProvider router={Approuter}/>)
