import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Link = styled(NavLink)`
    font-size: 2rem;
    text-style: none;
`
export const Img = styled.img`
    width: 64px;
    height: 64px;
    padding: 7px;
    box-sizing: border-box;
    border-radius: 5px;
    &:hover {
       transform: scale(1.2);
    }
    $.active {
            box-shadow: inset 6px -5px 20px grey;
    }
`