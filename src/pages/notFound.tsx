import { Link } from "react-router-dom";
import Button from "../components/UI/button/Button";

function NotFound() {
  return (
    <div className={`${"notFound__container_rtl"}`}>
      <h2 className={`notFound__title  notFound__title_rtl `}>
      صفحه مورد نظر یافت نشد!
      </h2>
      <Link to="/">
        <Button>برگشت به صفحه اصلی</Button>
      </Link>
      <div className="notFound__img">
        {/* <img
          src={
            require("../assets/images/Oops 404 Error with a broken robot-cuate.svg")
              .default
          }
          alt="404 page"
        /> */}
      </div>
    </div>
  );
}

export default NotFound;
