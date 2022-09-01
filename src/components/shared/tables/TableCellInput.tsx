import {InputHTMLAttributes} from "react";
import styled from "styled-components";

const StyledTableCellInput = styled.input`
  text-align: left;
  background-color: #fafbff;
  border: none;
  border-bottom: 1px solid #4F6EF7;
  font-size: 16px;
  padding-left: 0px;
`;

const TableCellInput = ({...props}: InputHTMLAttributes<HTMLInputElement>) => (
    <StyledTableCellInput {...props} />
);

export default TableCellInput;
