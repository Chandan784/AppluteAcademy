import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import Contact from "./components/Contact";
import Home from "./components/Home";
import WhyUs from "./components/WhyUs";
import LiveTraining from "./components/LiveTraining";
import IntershipPlacement from "./components/IntershipPlacement";
import Feedback from "./components/Feedback";
import About from "./components/About";
import Courses from "./components/Courses";




let routes = createBrowserRouter(
  [
    {
      path:"/",
      element: <App/>,
      children:[
        {
          path:"/",
          element: <Home/>
        },
        {
         path: "/Courses",
         element: <Courses/>
        },
        {
          path:"/WhyUs",
          element:<WhyUs/>
        },
        {
          path:"/LiveTraining",
          element:<LiveTraining/>
        },
        {
          path:"/IntershipPlacement",
          element:<IntershipPlacement/>
        },
        {
          path:"/PaymentAddress",
          element:<PaymentAddress/>
        },
        {
          path:"/Contact",
          element:<Contact/>
        },
        {
          path:"/Feedback",
          element:<Feedback/>
        },
        {
          path:"/About",
          element:<About/>
        },
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes}/>
);
