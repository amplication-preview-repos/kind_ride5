import { SortOrder } from "../../util/SortOrder";

export type AdminOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  role?: SortOrder;
  phone?: SortOrder;
  email?: SortOrder;
};
