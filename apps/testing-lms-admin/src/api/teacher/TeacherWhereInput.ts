import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type TeacherWhereInput = {
  id?: StringFilter;
  specialization?: StringNullableFilter;
  yearsOfExperience?: IntNullableFilter;
  email?: StringNullableFilter;
  name?: StringNullableFilter;
  role?: StringNullableFilter;
  phone?: StringNullableFilter;
};
