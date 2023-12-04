import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Customer } from "./components/Customer";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/Customer',
    element: <Customer />
  }
];

export default AppRoutes;
