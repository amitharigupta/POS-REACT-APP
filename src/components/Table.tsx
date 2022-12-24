import { TABLE_STATUS } from '../enums';

interface ITableProps {
  tableNumber: string;
  status: string;
}

const Table = ({ tableNumber, status }: ITableProps) => {
  return (
    <div
      className={`${
        status == TABLE_STATUS.AVAILABLE ? 'bg-green-800' : 'bg-slate-700'
      } text-white p-4 text-center`}
    >
      <h3 className="text-2xl">{tableNumber}</h3>
      <span className="text-sm">{status}</span>
    </div>
  );
};

export default Table;
