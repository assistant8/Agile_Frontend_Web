import PropTypes from "prop-types"; // npm i prop-types 로 깔아서 prop type 체크 가능
import styles from "./Button.module.css";

function Button({text}) {
    return (
     <button className={styles.btn}>{text}</button>
    );
}

Button.propTypes = {
    text : PropTypes.string.isRequired,
}

export default Button;