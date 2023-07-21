import { categories } from "./data";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <>
      <h5 className="mt-5">Filter Category</h5>
      <select
        name="category"
        onChange={(event) => onSelectCategory(event.target.value)}
        className="form-select mb-3 "
      >
        <option value="">All category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
};

export default ExpenseFilter;
