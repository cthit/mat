import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

export const Container = styled.div`
    min-width:200px;
    min-height:200px;

    width:200px;
    height:200px;

    text-align:center;
    background-color: white;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4);

    &:hover{ 
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4);
    }

    &:active{
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
    }
`

export const Link = styled(NavLink)`
    text-decoration: none;
    display:inline-block;
    width:100%;
    height:100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

`

export const Text = styled.h2`
    color:black;
    margin:0;
`