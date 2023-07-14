import { Outlet } from "react-router-dom";
import Heading from '../Header/Header'
const Layout = () => {
  return (
    <>
      <Heading/>
      <Outlet />
    </>
  )
};

export default Layout;