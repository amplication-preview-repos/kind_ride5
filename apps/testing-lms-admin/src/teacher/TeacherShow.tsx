import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const TeacherShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="specialization" source="specialization" />
        <TextField label="yearsOfExperience" source="yearsOfExperience" />
        <TextField label="email" source="email" />
        <TextField label="name" source="name" />
        <TextField label="role" source="role" />
        <TextField label="phone" source="phone" />
      </SimpleShowLayout>
    </Show>
  );
};
