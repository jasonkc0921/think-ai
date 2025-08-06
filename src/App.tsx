import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Landing } from "./pages/Landing";
import { TandS_us } from "./pages/TandS_us";
import { Privacy_us } from "./pages/Privacy_us";
//import { Zitanwood } from './pages/Take_care_of_zitan_furniture';
//import { Blog } from './pages/Blog';
//import 'leaflet/dist/leaflet.css';
import WhatsAppChat from "./components/WhatsAppChat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        // path: '/home',
        index: true,
        element: <Landing />,
      },
      {
        path: "/home",
        element: <Landing />,
      },
      /*       {
        path: '/about',
        element: <About_us/>,
      }, */
      {
        path: "/privacy",
        element: <Privacy_us />,
      },
      {
        path: "/termofservice",
        element: <TandS_us />,
      },
      /*       {
        path: '/blog',
        element: <Blog/>,
      }, */
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      {/* WhatsApp Chat Button (appears on all pages) */}
      <WhatsAppChat
        phoneNumber="0122670130" // Replace with your actual WhatsApp number
        companyName="Think AI" // Replace with your company name
      />
    </>
  );
};
export default App;
