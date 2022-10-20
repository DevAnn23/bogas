import React from "react";
import LettersBackgroundType from "./LettersBackground.type";
import * as styles from "./LetterBackground.module.scss";
import { cn } from '../../../utils';

const LettersBackground = ({text, className}: LettersBackgroundType) => {
    return (
        <span className={cn(styles.label, className ? className : "")}>{text}</span>
    )
}
export default LettersBackground;