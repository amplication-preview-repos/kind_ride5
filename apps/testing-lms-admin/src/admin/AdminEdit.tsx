import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AdminEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="role" source="role" />
        <TextInput label="phone" source="phone" />
        <TextInput label="email" source="email" />
      </SimpleForm>
    </Edit>
  );
};
