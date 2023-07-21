/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { categories } from "./data";

const schema = z.object({
  description: z.string().min(3).max(50),
  amount: z.number().min(0.01).max(10000),
  category: z.enum(categories),
});

interface Props {
  onSubmit: (data: ExpanseFormData) => void;
}

type ExpanseFormData = z.infer<typeof schema>;
const ExpanseForm = ({ onSubmit }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const {
    register,
    handleSubmit,
    formState: { errors },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  } = useForm<ExpanseFormData>();
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <input
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            {...register("description")}
            className="form-control"
            type="text"
            name="description"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message} </p>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="amount">
            Amount:
          </label>
          <input
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            {...register("amount")}
            className="form-control"
            type="number"
            name="amount"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message} </p>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="category">
            category:
          </label>

          <select {...register("category")} className="form-select">
            <option value="">All Category</option>
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message} </p>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default ExpanseForm;
