import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import classes from "./Sidebar.module.scss";
import sidebarNav from "../../config/sidebarNav";
import clsx from "clsx";

interface Props {
  link?: string;
  icon: string;
  section?: string;
  text: string;
  subLinks?: {
    link: string;
    section: string;
    text: string;
  }[];
  index: number;
  openSidebarHandler: () => void;
}
const Item = ({
  link,
  icon,
  text,
  index,
  openSidebarHandler,
  subLinks,
}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSubIndex, setActiveSubIndex] = useState(0);
  const [isOpenSubLink, setIsOpenSubLink] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = sidebarNav.findIndex((item) => item.section === curPath);

    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  // Sub Links
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = subLinks?.findIndex((item) => item.section === curPath);

    if (Number(activeItem) > -1) setIsOpenSubLink(true);
    else setIsOpenSubLink(false);

    setActiveSubIndex(activeItem!);
  }, [location]);

  const subMenuHeight = (subLinks ? subLinks.length * 45.5 : 0) + "px";

  return (
    <>
      {subLinks ? (
        <div>
          <div
            key={`nav-${index}`}
            className={`${classes.sidebar__menu__item} cursor-pointer justify-between`}
            onClick={() => setIsOpenSubLink(!isOpenSubLink)}
          >
            <div className="flex">
              <div className={classes.sidebar__menu__item__icon}>
                <Icon icon={icon} />
              </div>
              <div className={classes.sidebar__menu__item__txt}>{text}</div>
            </div>
            <div className="pl-[16px]">
              <Icon icon="octicon:chevron-down-16" />
            </div>
          </div>

          {/* Sub links */}

          <ul
            className={clsx(
              classes.sidebar__menu__subMenu,
              isOpenSubLink ? `h-auto` : "h-0"
              // isOpenSubLink ? `h-[${subMenuHeight}px]` : "h-0"
            )}
            style={{ height: isOpenSubLink ? subMenuHeight : "0px" }}
          >
            {subLinks?.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  key={`nav-${index}`}
                  className={`${classes.sidebar__menu__item}  ${
                    activeSubIndex === index && classes.active
                  }`}
                >
                  <div
                    className={clsx(
                      classes.sidebar__menu__item__txt,
                      "pr-2 text-[15px]"
                    )}
                  >
                    {item.text}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Link
          to={link!}
          key={`nav-${index}`}
          className={`${classes.sidebar__menu__item} ${
            activeIndex === index && classes.active
          }`}
          onClick={openSidebarHandler}
        >
          <div className={classes.sidebar__menu__item__icon}>
            <Icon icon={icon} />
          </div>
          <div className={classes.sidebar__menu__item__txt}>{text}</div>
        </Link>
      )}
    </>
  );
};

export default Item;
