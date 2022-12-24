import Table from '../components/Table';
import { TABLE_STATUS } from '../enums';

const tables = [
  {
    id: 1,
    tableNumber: 'T0001',
    status: TABLE_STATUS.AVAILABLE,
  },
  {
    id: 2,
    tableNumber: 'T0002',
    status: TABLE_STATUS.OCCUPIED,
  },
  {
    id: 3,
    tableNumber: 'T0003',
    status: TABLE_STATUS.AVAILABLE,
  },
];

const HomePage = () => {
  return (
    <div className="flex gap-2">
      {tables.map((table) => {
        return <Table tableNumber={table.tableNumber} status={table.status} />;
      })}
    </div>
  );
};

export default HomePage;
