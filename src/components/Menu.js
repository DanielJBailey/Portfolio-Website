import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


class Menu extends React.Component {

    render() {
        return (
            <MenuContainer>
                <MenuList>
                    <a>
                        <li>
                            Home
                        </li>
                    </a>
                    <a>
                        <li>
                            About
                        </li>
                    </a>
                    <a>
                        <li>
                            Experience
                        </li>
                    </a>
                    <a>
                        <li>
                            Portfolio
                        </li>
                    </a>
                    <Link to={`/Contact`}>
                        <li>
                            Contact
                        </li>
                    </Link>

                </MenuList>

            </MenuContainer>
        )
    }
}


const MenuContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    min-height: 100vh;
    width: 100vw;
    background-color: #1e1e1e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MenuList = styled.ul`
    list-style: none;
    width: 100%;
    a {
        text-decoration: none;
        color: white;
        li {
            padding: 20px;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            font-family: 'Catamaran', sans-serif;
            font-size: 25px;
            text-align: left;
        }
    }
    
`;


export default Menu;