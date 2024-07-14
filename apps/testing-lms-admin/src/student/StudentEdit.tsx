import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const StudentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" />
        <TextInput label="name" source="name" />
        <TextInput label="gradeLevel" source="gradeLevel" />
        <TextInput label="course" source="course" />
        <TextInput label="role" source="role" />
        <TextInput label="phone" source="phone" />
      </SimpleForm>
    </Edit>
  );
};
