import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const TeacherCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="specialization" source="specialization" />
        <NumberInput
          step={1}
          label="yearsOfExperience"
          source="yearsOfExperience"
        />
        <TextInput label="email" source="email" />
        <TextInput label="name" source="name" />
        <TextInput label="role" source="role" />
        <TextInput label="phone" source="phone" />
      </SimpleForm>
    </Create>
  );
};
