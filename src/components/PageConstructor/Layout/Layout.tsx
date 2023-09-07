import { FC } from "react";

import Header from "../Header";
import Footer from "../Footer";

import { PropsType } from "./types";
import style from './index.module.scss'

const Layout: FC<PropsType> = ({ children }) => {
    return (
        <div className={style.component}>
            <Header />
            <div className={style.content}>{children}</div>
            <Footer />

        </div>
    )
}

export default Layout;