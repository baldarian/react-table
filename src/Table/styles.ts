import styled from 'styled-components';

export const Container = styled.div`
  max-height: 700px;
  overflow: auto;
`;

export const Table = styled.table`
  font-family: OpenSans;
  width: 100%;
  text-align: left;
  border-spacing: 0;
  color: #fff;
  font-size: 0.8rem;
  color: rgb(91, 87, 119);
  background: #fff;
  table-layout: fixed;
`;

export const Th = styled.th<{ width: string }>`
  padding: 12px 12px;
  width: ${(props) => props.width};
`;

export const Td = styled.td`
  padding: 12px 12px;
`;

export const ExpandTd = styled.td`
  padding: 12px 12px;
  width: 30px;
`;

export const Tr = styled.tr`
  transition: background 0.3s;

  &:hover {
    background: #f2efef;
  }
`;

export const ExpandIcon = styled.span`
  padding: 4px;
  cursor: pointer;
`;
