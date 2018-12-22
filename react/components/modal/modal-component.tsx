import * as React from "react";
import { modal } from "../../../styles/modal/modal-styles.css";

export const ModalComponent: React.SFC = ({ children }) => <div className={modal}>{children}</div>;
