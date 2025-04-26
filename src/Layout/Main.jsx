import { Outlet, useLocation } from "react-router-dom";

const Main = () => {
  return (
      <div className="bg-gray-200 h-full md:h-screen">
        <Outlet></Outlet>
      </div>
  );
};

export default Main;
