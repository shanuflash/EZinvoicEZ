"use client";

import { Dialog } from "@headlessui/react";
import { useContext, useEffect, useState } from "react";
import styles from "../styles/page.module.css";
import { dataContext } from "@/context/dataProvider";

const total = ({ invoice }) => {
  let [isOpen, setIsOpen] = useState(false);
  const { count, setCount, price, setPrice, initialState } =
    useContext(dataContext);
  useEffect(() => {
    let total = 0;
    count.forEach((item) => {
      total += item.price * item.count;
    });
    setPrice(total);
  }, [count]);

  const handleClear = () => {
    setCount(initialState);
  };

  const handleGenerate = () => {
    setIsOpen(true);
  };

  return (
    <div className={styles.total}>
      <div className={styles["total-left"]}>
        {!invoice && (
          <>
            <button onClick={handleClear}>Clear</button>
            <button onClick={handleGenerate}>Generate</button>
          </>
        )}
      </div>
      <div className={styles["total-right"]}>
        <div className={styles["total-title"]}>
          Total:{" "}
          <span className={styles["total-price"]}>
            ₹{price.toLocaleString("en-IN")}
          </span>
        </div>
      </div>
      <div className={isOpen ? styles.backdrop : styles.backdropoff} />
      <Dialog
        className={styles.modal}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Dialog.Panel>
          <Dialog.Title>Generate Invoice</Dialog.Title>
          <Dialog.Description>
            This will add the currend invoice to the database. <br /> Make sure
            to check the details before generating the invoice. <br /> Check for
            the preview at the bottom of the site.
          </Dialog.Description>

          <button onClick={() => setIsOpen(false)}>Cancel</button>
          <button
            onClick={() => {
              setIsOpen(false);
              window.print();
            }}
          >
            Generate
          </button>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default total;
