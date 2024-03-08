/* eslint-disable react/prop-types */
import clsx from "clsx";
import { useKeyDown } from "../../entity/hooks/useKeyDown";
import { useMoreDetail } from "../../entity/more_detail/store";
import styles from "./index.module.scss";
import React from "react";

export default function MoreDetail() {
  const { modalContent, setModallContent } = useMoreDetail();

  useKeyDown("Escape", () => {
    setModallContent(null);
  });

  return (
    <div
      className={clsx(styles.modal, {
        [styles.active]: modalContent,
      })}
    >
      <div className={styles.modal_body}>
        <div className={styles.modal_close}>
          <button onClick={() => setModallContent(null)}>ESC</button>
        </div>
        <div className={styles.modal_content}>
          {modalContent ? modalContent() : null}
        </div>
      </div>
    </div>
  );
}
