import React from "react";

interface TabelProps {
  children: React.ReactNode;
}

function Table({ children }: TabelProps) {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">{children}</table>
    </div>
  );
}

export default Table;

function TableHeader({ children }: TabelProps) {
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  );
}

function TableBody({ children }: TabelProps) {
  return <tbody>{children}</tbody>;
}

function TableRow({ children }: TabelProps) {
  return <tr>{children}</tr>;
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
