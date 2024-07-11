import {  useContext } from "react";
import { Link } from "react-router-dom";
import { useWindowSize } from "usehooks-ts";
import sidebarNav from "../../config/sidebarNav";
import SidebarContext from "../../store/sidebarContext";
import LoginContext from "../../store/loginContext";
import { Icon } from "@iconify/react";
import classes from "./Sidebar.module.scss";
import Item from "./Item";

function Sidebar() {
  const { width } = useWindowSize();
  const sidebarCtx = useContext(SidebarContext);
  const loginCtx = useContext(LoginContext);

  function openSidebarHandler() {
    //for width>768(tablet size) if sidebar was open in width<768 was opened too.
    //just in case of tablet size and smaller then, sidebar__open can added.
    if (width <= 768) document.body.classList.toggle("sidebar__open");
  }

  function logoutHandler() {
    openSidebarHandler();
    loginCtx.toggleLogin();
  }


  return (
    <div
      className={`${classes.sidebar} ${
        !sidebarCtx.isOpen && classes.sidebar_close
      }`}
    >
      <div className={classes.sidebar__logo}>
        <span className="mt-3 inline-block">logo</span>
        {/* <img src={images.logo} alt="digikala" /> */}
      </div>
      <div className={classes.sidebar__menu}>
        {sidebarNav.map((nav, index) => (
          <Item key={index} {...nav} index={index} openSidebarHandler={openSidebarHandler}/>
        ))}
      </div>

      <div className={[classes.sidebar__menu, classes.logout].join("")}>
        <Link
          to="/login"
          className={classes.sidebar__menu__item}
          onClick={logoutHandler}
        >
          <div className={classes.sidebar__menu__item__icon}>
            <Icon icon="tabler:logout" />
          </div>
          <div className={classes.sidebar__menu__item__txt}>خروج</div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
