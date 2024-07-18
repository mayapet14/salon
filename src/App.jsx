import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import AboutPage from "./pages/About.jsx";
import LocationPage from "./pages/Location.jsx";
import ServicesPage from "./pages/Services.jsx";
import BookingPage from "./pages/Booking.jsx";
import ErrorPage from "./pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/location", element: <LocationPage /> },
      { path: "/services", element: <ServicesPage /> },
      { path: "/booking", element: <BookingPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
