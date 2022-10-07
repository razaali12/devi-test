import React from "react";
import { Table } from "antd";
function DataTable({ data, columns, pagination }) {
  const filteredData = data?.map((item, index) => {
    return { ...item, key: index + 1 };
  });
  return (
    <div className="ant-list-box" style={{ marginTop: 10 }}>
      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={{ ...pagination }}
      />
    </div>
  );
}

export default DataTable;
