import styled from "styled-components";

export const Container = styled.div`
    position:relative;
    padding:16px;

    min-width:400px;
    min-height:250px;

    background-color: white;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);

    border-radius: 8px;
    border: 12px solid;
    border-color: ${props => props.restaurantOpenStatus === 'open' ? '#05c46b' : 
                                (props.restaurantOpenStatus === 'closed' ? '#ff3f34' : 'white')};
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
    width:100%;
    display:table;
    margin:8px;
`

export const Row = styled.div`
    display:table-row;
    margin:0px;
    padding:0px;
    text-transform:capitalize;
    
    &:nth-child(odd){
        background-color: #e7ebef;
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
    height: 38px; 
    width:100%;
    position: absolute;
    right: 8px;
    bottom: 16px; 
`