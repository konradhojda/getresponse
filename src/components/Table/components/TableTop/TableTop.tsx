import React from "react";

const TableTop = ({ data }: any) => {
  return (
    <div>
      {data.map((e: any) => (
        <span>{data.id}</span>
      ))}
    </div>
  );
};

export default TableTop;
