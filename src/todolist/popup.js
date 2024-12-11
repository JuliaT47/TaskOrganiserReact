import styles from "../App.module.css";

const Popup = ({ message, closePopup }) => {
  return (
    <div className={styles.popup}>
      <h2>{message}</h2>
      <p>Username: React </p>
      <p>Email: React@gmail.com</p>
      <button className={styles.popupBtn} onClick={closePopup}>
        Close
      </button>
    </div>
  );
};

export default Popup;
