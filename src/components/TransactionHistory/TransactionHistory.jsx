import PropTypes from 'prop-types';
import {TransactionHistoryStyle} from './TransactionHistory.styled';


export const TransactionHistory = ({transactions}) => (
    <TransactionHistoryStyle>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {transactions.map(({id, type, amount, currency}) => (
            <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
            ))}
        </tbody>
    </TransactionHistoryStyle>
);


TransactionHistory.propTypes={
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};