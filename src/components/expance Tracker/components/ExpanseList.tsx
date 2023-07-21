interface Expense {
  id: number;
  description: string;
  amount: number; // Corrected property name to "amount"
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void; // Corrected prop name to "expenses"
}

const ExpanseList = ({ expenses, onDelete }: Props) => {
  const totalAmount = expenses.reduce(
    (acc, expense) => acc + parseFloat(expense.amount),
    0
  );
  if (expenses.length === 0) return null;
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>${totalAmount.toFixed(2)}</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpanseList;
