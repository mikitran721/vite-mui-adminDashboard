import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./users.scss";
import { userRows } from "../../data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "avatar",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="avatar" />;
    },
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    sortable: false,
    width: 160,
  },
  {
    field: "phone",
    headerName: "Phone",
    sortable: false,
    width: 160,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    sortable: false,
    width: 160,
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 100,
    type: "boolean",
  },
];

const Users = () => {
  return (
    <div className="users">
      <div className="info">
        <h2>Users</h2>
        <button>Add New User</button>
      </div>
      <DataTable slug="user" columns={columns} rows={userRows} />
    </div>
  );
};

export default Users;
