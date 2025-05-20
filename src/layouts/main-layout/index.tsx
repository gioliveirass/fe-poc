import Header from "../../components/Header";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="p-4">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
