import { styled } from "styled-components";

export const TransactionHistoryStyle = styled.table`
    width: 100%;
    max-width: 800px;
    text-align: center;
    background-image: linear-gradient(90deg,#4daf54,#3d8880);
    padding: 30px 20px;
    border-radius: 15px;
    font-weight: 600;
    margin-bottom: 20px;
    margin-top: 40px;

    th{
        padding: 15px;
        font-size: 30px;
        color: #fff;
    }

    td{
        border: 2px solid #000;
        font-size: 25px;
        color: #fff;
        opacity: 0.7;
    }

`