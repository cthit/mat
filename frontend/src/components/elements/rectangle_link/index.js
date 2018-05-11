import React from 'react'
import { Container, Link, Text } from './styles';

export const RectangleLink = ({text, link}) => 
    <Container>
        <Link to={link}>
            <Text>{text}</Text>
        </Link>
    </Container>