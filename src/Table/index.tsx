import { ReactNode, useState, Fragment } from 'react';
import { BsChevronRight, BsChevronDown } from 'react-icons/bs';
import {
  Table as StyledTable,
  Th,
  Td,
  Tr,
  ExpandIcon,
  ExpandTd,
  Container,
} from './styles';

export type Column = {
  title?: string;
  width?: string;
  render?: (record: Record) => ReactNode;
  key: string;
};

export type Expandable = {
  expandedRowRender?: (record: Record) => ReactNode;
  rowExpandable?: (record: Record) => boolean;
};

export type Record = {
  id: string;
  [key: string]: any;
};

type Props = {
  dataSource: Record[];
  columns: Column[];
  expandable?: Expandable;
};

function Table(props: Props) {
  const { columns, dataSource, expandable } = props;
  const { expandedRowRender, rowExpandable } = expandable || {};
  const [expandedRows, setExpandedRows] = useState<{ [key: string]: boolean }>(
    {}
  );

  function handleExpandIconClick(record: Record) {
    setExpandedRows((expandedRows) => ({
      ...expandedRows,
      [record.id]: !expandedRows[record.id],
    }));
  }

  return (
    <Container>
      <StyledTable>
        <thead>
          <tr>
            {expandable && <ExpandTd></ExpandTd>}
            {columns.map((column, idx) => (
              <Th key={idx} width={column.width || 'auto'}>
                {column.title}
              </Th>
            ))}
          </tr>
        </thead>

        <tbody>
          {!dataSource.length && (
            <tr>
              <td align="center" colSpan={columns.length + 1}>
                No Data
              </td>
            </tr>
          )}
          {dataSource.map((source) => {
            const expanded =
              rowExpandable && rowExpandable(source) && expandedRows[source.id];

            return (
              <Fragment key={source.id}>
                <Tr>
                  {rowExpandable && rowExpandable(source) ? (
                    <ExpandTd>
                      <ExpandIcon onClick={() => handleExpandIconClick(source)}>
                        {expanded ? <BsChevronDown /> : <BsChevronRight />}
                      </ExpandIcon>
                    </ExpandTd>
                  ) : expandable ? (
                    <ExpandTd />
                  ) : null}
                  {columns.map((column, idx) => (
                    <Td key={idx}>
                      {column.render
                        ? column.render(source)
                        : source[column.key]}
                    </Td>
                  ))}
                </Tr>
                {expanded && (
                  <tr>
                    <ExpandTd />
                    <td colSpan={columns.length}>
                      {expandedRowRender && expandedRowRender(source)}
                    </td>
                  </tr>
                )}
              </Fragment>
            );
          })}
        </tbody>
      </StyledTable>
    </Container>
  );
}

export default Table;
