import styled from "@emotion/styled";

export const Table = styled.table`
  margin-top: 40px;
  font-size: 16px;
  text-align: center;
  border-radius: 12px;
  
  overflow: hidden;
  box-shadow: 0px 3px 13px -4px #000000;
`;
  
export const TableHead = styled.thead`
  color: rgb(255,255,255);
  text-transform: uppercase;
  background-color: rgb(0,188,213);
  height: 44px;
`;

export const TableRow = styled.tr`
  color: rgb(151,155,156);
  border: 1px solid rgb(236,236,236);
  height: 44px;

  :nth-child(even) {
    background-color: rgb(255,255,255);
  }

  :nth-child(odd) {
    background-color: rgb(236,241,244);
  }
`;

export const TableColumn = styled.td`
  width: 300px;
`