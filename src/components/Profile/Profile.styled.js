import { styled } from "styled-components";

export const ProfileStyle = styled.div`
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 500px;
    background-image: linear-gradient(90deg,#4daf54,#3d8880);
    box-shadow: 0 2px 6px -2px rgba(0, 0, 0, 0.26);
    border-radius: 10px;
    text-align: center;
    font-family: "Montserrat";
    font-weight: 600;
    padding: 15px;

    .avatar{
        width: 100%;
        max-width: 300px;
        border-radius: 50%;
        background-color: #FFF0F5;
    }
    .name{ 
        font-size: 35px;
        margin: 12px 0;
        color: #742da6;
    }
    .tag{
        margin: 12px 0;
        font-size: 30px;
        color: #934752;
    }
    .location{
        font-size: 30px;
        margin: 12px 0;
        color: #742da6;
    }
    .stats{
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        padding: 0;
        width: 100%;
    }
    .stats-items{
        display: flex;
        flex-direction: column;
        min-width: 125px;
    }
    .label{
        font-size: 30px;
        color: #934752;
        margin: 10px 0;
    }
    .quantity{
        font-size: 30px;
        color: #742da6;
    }

`