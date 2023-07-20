import { styled } from "styled-components";

export const StatisticStyle = styled.section`
    font-family: 'Monserat';
    width: 100%;
    max-width: 1000px;
    .title{
        font-size: 35px;
        color: #000;
        text-align: center;
    }
    .stat-list{
        display: flex;
        width: 100%;
        list-style-type: none;
        padding: 0;
        margin: 0;
        padding: 20px;
        background-color: blue;
        border-radius: 15px;
        justify-content: space-between;
    }
    .item{
        padding: 15px 55px;
        border-radius: 15px;
        color: #f5f5f5;
        font-weight: 600;
        font-size: 25px;
        display: flex;
        flex-direction: column;
    }
    .percentage{
        margin-top: 10px;
    }
` 