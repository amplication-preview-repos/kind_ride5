import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AdminCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="role" source="role" />
        <TextInput label="phone" source="phone" />
        <TextInput label="email" source="email" />
      </SimpleForm>
    </Create>
  );
};
