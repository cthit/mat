import React from 'react';

import { HeaderContainer, Link, HeaderText } from './styles';


export const Header = () =>
    <HeaderContainer>
        <Link to="/">
            <HeaderText>Mat</HeaderText>
        </Link>
    </HeaderContainer>