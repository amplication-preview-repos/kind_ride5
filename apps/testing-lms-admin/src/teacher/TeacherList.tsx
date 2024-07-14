import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TeacherList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Teachers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="specialization" source="specialization" />
        <TextField label="yearsOfExperience" source="yearsOfExperience" />
        <TextField label="email" source="email" />
        <TextField label="name" source="name" />
        <TextField label="role" source="role" />
        <TextField label="phone" source="phone" />
      </Datagrid>
    </List>
  );
};