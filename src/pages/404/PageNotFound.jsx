import React from "react";
import styles from "./pagenotfound.module.css";
import { useDocumentTitle } from "hooks";
import { useNavigate } from "react-router-dom";

export function PageNotFound() {
  useDocumentTitle("Page not found");
  const navigate = useNavigate();
  const btnClickHandler = () => {
    navigate("/");
  };

  return (
    <div className={styles.show404}>
      <h1 className={styles.heading}>oops...This page doesn't exists</h1>
      
      <button className='btn btn-secondary' onClick={btnClickHandler}>
        Go to Tunnel Tube
      </button>
    </div>
  );
}
