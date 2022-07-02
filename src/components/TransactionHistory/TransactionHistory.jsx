import { Table, TableHead, TableRow, TableColumn } from "./TransactionHistory.styled"

export const TransactionHistory = ({ items }) => {
    // console.log(items)
    return (
        <Table className="transaction-history">
            <TableHead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </TableHead>

            <tbody>
                {items.map(({ id, type, amount, currency}) => (
                <TableRow key={id}>
                    <TableColumn>{type}</TableColumn>
                    <TableColumn>{amount}</TableColumn>
                    <TableColumn>{currency}</TableColumn>
                </TableRow>
                ))}
            </tbody>
        </Table>
    )
}