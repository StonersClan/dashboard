import React from "react";
import MaterialTable from "material-table";
import { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => (
    <CheckCircleOutlineOutlinedIcon {...props} ref={ref} />
  )),
  Cancel: forwardRef((props, ref) => (
    <CancelOutlinedIcon {...props} ref={ref} />
  )),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  Save: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

function StatusTable({ posts }) {
  const categoryLookupMap = {};
  const statusLookupMap = {
    SUCCESS: "SUCCESS",
    PENDING: "PENDING",
    DENIED: "DENIED",
  };
  for (let i = 0; i < posts.length; i++) {
    categoryLookupMap[posts[i].category] = posts[i].category;
  }
  const columns = [
    { title: "Name", field: "name" },
    {
      title: "Status",
      field: "status",
      lookup: statusLookupMap,
      render: (rowData) => {
        console.log(rowData);
        return rowData.status === "PENDING" ? (
          <p style={{ color: "#2d6ba6", fontWeight: "bold" }}>
            {rowData.status}
          </p>
        ) : rowData.status === "SUCCESS" ? (
          <p style={{ color: "#32a31c", fontWeight: "bold" }}>
            {rowData.status}
          </p>
        ) : (
          <p style={{ color: "#d10d0d", fontWeight: "bold" }}>
            {rowData.status}
          </p>
        );
      },
    },
    { title: "Category", field: "category", lookup: categoryLookupMap },
  ];
  const data = posts;
  const options = {
    filtering: true,
  };
  return (
    <MaterialTable
      title="User Status Table"
      icons={tableIcons}
      columns={columns}
      data={data}
      options={options}
      style={{
        background: "#f5f5f5",
      }}
    />
  );
}

export default StatusTable;
