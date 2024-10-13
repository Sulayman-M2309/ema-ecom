import {  NavLink, Outlet, useNavigation } from "react-router-dom";
import Footer from "../pages/Footer/Footer";
import Spinner from "../components/Spinner/Spinner";

// const style = {
//     backgroundColor: "cycan",
//    color:'red',
//   };

const MainLayouts = () => {
    const navigation = useNavigation();
  const isLoadingProducts = navigation.state === "loading";
  return (
    <div>
      <section  className="flex justify-between px-10 shadow-md py-7">
      <div>
          <h1 className="text-xl font-bold">Amajhon</h1>
        </div>
        <nav>
          <ul  className="flex gap-5">
            <li>
              <NavLink to="/"  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? `bg-cyan-500` : ""
              }>Home</NavLink>
            </li>
            <li>
              <NavLink to="/products"  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? `bg-cyan-500` : ""
              }>Products</NavLink>
            </li>
            <li>
              <NavLink
                to="/
dashboard"  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? `bg-cyan-500` : ""
  }
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>
      {isLoadingProducts ? (
        <Spinner></Spinner>
      ) : (
        <div className="my-10 min-h-screen">
          <Outlet></Outlet>
        </div>
      )}

      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
