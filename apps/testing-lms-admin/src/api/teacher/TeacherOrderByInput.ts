import { SortOrder } from "../../util/SortOrder";

export type TeacherOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  specialization?: SortOrder;
  yearsOfExperience?: SortOrder;
  email?: SortOrder;
  name?: SortOrder;
  role?: SortOrder;
  phone?: SortOrder;
};
