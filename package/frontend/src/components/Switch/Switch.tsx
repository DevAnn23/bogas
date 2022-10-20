import React, { useState } from "react"
import SwitchType from "./Switch.type";
import * as styles from "./Switch.module.scss";
const Switch = ({
  switcher,
  text
}: SwitchType) => {
  const [isDiasbled, toggleSwitch] = useState<boolean>(switcher)
  console.log(isDiasbled)
  return (
    <button
    onClick={() => {
      toggleSwitch(!isDiasbled)
    }} className={`${styles.toggle} ${isDiasbled ? styles.enabled : styles.disabled}`}
  >
    {text}
  </button>
  );
};

export default Switch;