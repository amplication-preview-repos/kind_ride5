import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AdminWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  role?: StringNullableFilter;
  phone?: StringNullableFilter;
  email?: StringNullableFilter;
};
