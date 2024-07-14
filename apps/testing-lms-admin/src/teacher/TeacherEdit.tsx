import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const TeacherEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
