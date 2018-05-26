import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

export const HeaderContainer = styled.div`
    height:103px;
    line-height:103px;
    text-align:center;
    background-color:#44aedb;
    margin-bottom: 16px;
`

export const HeaderText = styled.h1`
    margin:0;
    color:white;
`

export const Link = styled(NavLink)`
    text-decoration: none;
`