import img from "../../assets/not-found.png";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const NotFound = () => {
  return (
    <div className={styles.div1}>
      <div className={styles.custom}>
        <h3> You're in a wrong place! </h3>
        <h3>
          <Link to="home">
            {" "}
            GO HOME <ArrowForwardRoundedIcon sx={{ marginLeft: 1 }} />{" "}
          </Link>{" "}
        </h3>
      </div>
      <img src={img} alt="Image" className={styles.img} />
    </div>
  );
};

export default NotFound;
