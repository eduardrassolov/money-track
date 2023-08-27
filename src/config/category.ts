export interface ICategory {
  id: number;
  name: string;
  type_id: number;
}

//TODO - migrate this data to the database, add new table 'category'
export const INCOME_OPTIONS: Array<ICategory> = [
  {
    id: 1,
    name: "Salary",
    type_id: 2,
  },
  {
    id: 2,
    name: "Selling",
    type_id: 2,
  },
  {
    id: 3,
    name: "Bonus",
    type_id: 2,
  },
  {
    id: 4,
    name: "Gift",
    type_id: 2,
  },
];

export const EXPENSE_OPTIONS: Array<ICategory> = [
  {
    id: 5,
    name: "Housing",
    type_id: 1,
  },
  {
    id: 6,
    name: "Food",
    type_id: 1,
  },
  {
    id: 7,
    name: "Utility",
    type_id: 1,
  },
  {
    id: 8,
    name: "Utilities",
    type_id: 1,
  },
  {
    id: 9,
    name: "Insurance",
    type_id: 1,
  },
  {
    id: 10,
    name: "Medical & HelthCare",
    type_id: 1,
  },
  {
    id: 11,
    name: "Saving, Investing & Debt Pay",
    type_id: 1,
  },
  {
    id: 12,
    name: "Personal spending",
    type_id: 1,
  },
  {
    id: 14,
    name: "Entartainment",
    type_id: 1,
  },
  {
    id: 15,
    name: "Miscellaneous",
    type_id: 1,
  },
  {
    id: 16,
    name: "Taxes",
    type_id: 1,
  },
];
