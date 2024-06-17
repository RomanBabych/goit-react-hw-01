import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionsTable}>
      <thead>
        <tr>
          <th className={css.transactionHeadText}>Type</th>
          <th className={css.transactionHeadText}>Amount</th>
          <th className={css.transactionHeadText}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr className={css.transactionTableRow} key={item.id}>
            <td className={css.transactionText}>{item.type}</td>
            <td className={css.transactionText}>{item.amount}</td>
            <td className={css.transactionText}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
