import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type StudentWhereInput = {
  id?: StringFilter;
  email?: StringNullableFilter;
  name?: StringNullableFilter;
  gradeLevel?: StringNullableFilter;
  course?: StringNullableFilter;
  role?: StringNullableFilter;
  phone?: StringNullableFilter;
};
