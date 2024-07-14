import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const StudentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" />
        <TextInput label="name" source="name" />
        <TextInput label="gradeLevel" source="gradeLevel" />
        <TextInput label="course" source="course" />
        <TextInput label="role" source="role" />
        <TextInput label="phone" source="phone" />
      </SimpleForm>
    </Create>
  );
};
