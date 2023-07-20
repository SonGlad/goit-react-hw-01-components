import { styled } from "styled-components";

export const online = 'online';
export const offline = 'offline';

export const FriendListStyle = styled.ul`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-size: 20px;

    .item{
    min-width: 300px;
    height: auto;
    border-radius: 10px;
    list-style: none;
    display: flex;
    align-items: center;
    width: 200px;
    padding: 10px;
    }
    .avatar{
        margin-right: 70px;
    }

    .online{
        margin-right: 20px;
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: green;
    }

    .offline{
        margin-top: 10px;
        margin-right: 20px;
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: red;
    }
    .name{
        color: #000;
        font-weight: 800;
    }
`