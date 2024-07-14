import { SortOrder } from "../../util/SortOrder";

export type StudentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  email?: SortOrder;
  name?: SortOrder;
  gradeLevel?: SortOrder;
  course?: SortOrder;
  role?: SortOrder;
  phone?: SortOrder;
};
