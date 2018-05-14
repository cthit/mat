import styled from "styled-components";
import Button from '@atlaskit/button'

export const Container = styled.div`
    padding:16px;

    min-width:430px;
    min-height:200px;

    width:300px;
    height:200px;

    background-color: white;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
`

export const Heading = styled.h2`
    margin:4px;
`

export const Text = styled.p`
    font-size: 11pt;
    font-weight: normal;
    padding:4px;
    margin:0px;
`

export const Table = styled.div`
    display:table;
    margin:4px;
`

export const Row = styled.div`
    display:table-row;
    margin:0px;
    padding:0px;
`

export const Element = styled.div`
    text-transform:capitalize;
    display:table-cell;
    margin:0px;
    padding:0px;
    
    &:nth-child(odd){
        background-color: #ccc;
    }

    & > *{
        text-align:center;
    }

`

export const ShowMenuButton = styled(Button)`
    float:right;
    margin:4px;

    background-color: #ffa801;

    &:hover{
        background-color: #ffb934;
    }

    &:active{
        background-color:#cd8700;
    }
`

export const ShowMapButton = styled(Button)`
    float:right;
    margin:4px;
`

export const Bold = styled.span`
    font-weight: bold;
`