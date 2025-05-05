import type { JSX } from "react";

import styles from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

function LoadMoreBtn({ onClick }: LoadMoreBtnProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

export default LoadMoreBtn;
