/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from "react";
import "./App.css";
import ExpanseForm from "./components/expance Tracker/components/ExpanseForm";
import ExpanseList from "./components/expance Tracker/components/ExpanseList";
import ExpenseFilter from "./components/expance Tracker/components/ExpenseFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState();

  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem("dataKey"))
  );

  useEffect(() => {
    localStorage.setItem("dataKey", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("dataKey"));
    if (items !== null) {
      setExpenses(items);
    }
  }, []);

  const visibleExpense = selectedCategory
    ? expenses.filter((item) => item.category === selectedCategory)
    : expenses;

  const onDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };
  const onSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <ExpanseForm
        onSubmit={(expense) =>
          setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
        }
      />
      <ExpenseFilter onSelectCategory={onSelectCategory} />
      <ExpanseList expenses={visibleExpense} onDelete={onDelete} />
    </div>
  );
}

export default App;
