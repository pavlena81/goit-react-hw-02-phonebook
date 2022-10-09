import styled from "styled-components";

export const ListContacts = styled.ul`
list-style: none;
`

export const ItemContacts = styled.li`
display: flex;
alignItems: 'center',
padding: 10px 5px;
`

export const Btn = styled.button`
    font-size: 16px;
    padding: 10px;
    border-radius: 20px;
    border: none;

    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    
    &:hover: {
    background-color: #2EE59D;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
    }
`