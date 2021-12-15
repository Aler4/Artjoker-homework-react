import React, {useCallback, useState} from "react";
import {Img, Link} from "./styled";



export function NavBar(props) {
    const config = props.config;
    // const [state,setState] = useState({isActive: false})
    //
    // const clickHandler = useCallback((e) => {
    //
    // })
    return (
            <nav>
                <Link to={config.home.path}>
                    <Img src='/NavBar-icons/home.png' alt={config.home.label}/>

                </Link>

                <Link to={config.todo.path}>
                    <Img src='/NavBar-icons/to-do-list.png' alt={config.todo.label}/>
                </Link>

                <Link to={config.converter.path}>
                    <Img src='/NavBar-icons/exchange.png' alt={config.converter.label}/>
                </Link>
            </nav>
    )
}