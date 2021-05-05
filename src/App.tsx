import { useState } from 'react';
import styled from 'styled-components';
import { BsX } from 'react-icons/bs';
import Table, { Record, Column } from './Table';
import { _dataSource } from './data';

const DeleteIcon = styled.span`
  font-size: 1rem;
  cursor: pointer;
  padding: 4px 4px;
`;

const Demo = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
  padding: 3rem 3rem 0 3rem;
  box-sizing: border-box;
`;

const _columns = {
  persons: [
    {
      title: 'Identification number',
      key: 'id',
    },
    {
      title: 'Name',
      key: 'name',
    },
    {
      title: 'Gender',
      key: 'gender',
    },
    {
      title: 'Risk',
      key: 'risk',
    },
    {
      title: 'Hair Length',
      key: 'hairLength',
    },
    {
      title: 'IQ',
      key: 'iq',
    },
    {
      title: 'Admission date',
      key: 'admissionDate',
    },
    {
      title: 'Last breakdown',
      key: 'lastBreakdown',
    },
    {
      title: 'Knows the Joker?',
      key: 'knowsTheJoker',
    },
  ],
  relatives: [
    {
      title: 'Relative ID',
      key: 'relativeId',
    },
    {
      title: 'Patient ID',
      key: 'patientId',
    },
    {
      title: 'Is alive?',
      key: 'isAlive',
    },
    {
      title: 'Frequency of visits',
      key: 'frequencyOfVisits',
    },
  ],
  phones: [
    {
      title: 'Phone ID',
      key: 'phoneId',
    },
    {
      title: 'ID of the relative',
      key: 'idOfTheRelative',
    },
    {
      title: 'Phone',
      key: 'phone',
    },
  ],
};

function App() {
  const [dataSource, setDataSource] = useState<Record[]>(_dataSource);

  const deleteColumn: Column = {
    key: 'action',
    width: '2rem',
    render: (record: Record) => {
      return (
        <DeleteIcon onClick={() => handleRowDelete(record.id)}>
          <BsX />
        </DeleteIcon>
      );
    },
  };

  function getChildren(record: Record) {
    const { relatives = [], phones = [] } = record;

    const type = relatives.length ? 'relatives' : phones.length ? 'phones' : '';
    const data = relatives.length ? relatives : phones ? phones : null;

    return { type, data };
  }

  function expandedRowRender(record: Record) {
    const children = getChildren(record);

    if (!children.data.length) {
      return null;
    }

    const columns = [
      ..._columns[children.type as keyof typeof _columns],
      deleteColumn,
    ];

    return (
      <Table
        dataSource={children.data}
        columns={columns}
        expandable={{
          expandedRowRender,
          rowExpandable,
        }}
      />
    );
  }

  function rowExpandable(record: Record) {
    const children = getChildren(record);

    return !!children.data.length;
  }

  function handleRowDelete(recordId: string) {
    function loop(array: Record[]) {
      return array.reduce((acc: Record[], curr: Record) => {
        const children = getChildren(curr);

        if (curr.id !== recordId) {
          acc.push(curr);
        }

        if (children.type) {
          curr[children.type] = loop(curr[children.type]);
        }

        return acc;
      }, []);
    }

    setDataSource(loop(dataSource));
  }

  return (
    <Demo>
      <Table
        dataSource={dataSource}
        columns={[..._columns.persons, deleteColumn]}
        expandable={{
          expandedRowRender,
          rowExpandable,
        }}
      />
    </Demo>
  );
}

export default App;
