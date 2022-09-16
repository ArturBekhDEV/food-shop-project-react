import React from "react";
import NotFound from "../pages/NotFound";
import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <NotFound />
    </div>
  );
};

export default NotFoundBlock;
