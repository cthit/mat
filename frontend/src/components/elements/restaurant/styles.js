import styled from "styled-components";

export const Container = styled.div`
    padding:16px;

    min-width:430px;
    min-height:250px;

    width:300px;
    height:250px;

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
    margin-top:4px;
    margin-bottom:4px;
`

export const PhoneNumber = styled.a`
    font-size: 12pt;
    font-weight: normal;
    padding:4px;
    margin:0px;
`

export const Table = styled.div`
    display:table;
    margin:8px;
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
        background-color: #e7ebef;
    }

    & > *{
        text-align:center;
    }

`

export const BaseLinkButton = styled.a`
    float:right;
    height:30px;
    line-height:30px;
    padding:4px;
    margin:4px;
    border-radius: 4px;
    color:white;
    text-decoration: none;
`

export const ShowMenuButton = styled(BaseLinkButton)`
    background-color: #ffa801;

    &:hover{
        background-color: #ffb934;
        cursor: pointer;
    }

    &:active{
        background-color:#cd8700;
    }
`

export const ShowMapButton = styled(ShowMenuButton)`
    background-color: #CCC;

    &:hover{
        background-color: #e5e5e5;
        cursor: pointer;
    }

    &:active{
        background-color:#b3b3b3;
}

`

export const Bold = styled.span`
    font-weight: bold;
`

export const ButtonGroup = styled.div`
    margin-top:8px;
`