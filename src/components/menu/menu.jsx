import styles from "../../styles/page.module.css";
import MenuItem from "./menuItem";

const menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles["menu-title"]}>Add items to your bill:</div>
      {/* search */}
      <div className={styles["menu-container"]}>
        {Array.from({ length: 5 }).map((_, index) => (
          <MenuItem id={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default menu;
