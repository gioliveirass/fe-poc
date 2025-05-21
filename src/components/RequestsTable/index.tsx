import IRequests from "../../interfaces/requests.interface";

interface IRequestsTable {
  requests: IRequests[];
}

const RequestsTable = ({ requests }: IRequestsTable) => {
  const columns: string[] = [
    "ID",
    "Data de Criação",
    "Cliente",
    "Produto",
    "Status",
    "Valor",
  ];

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns.map((column) => (
              <th scope="col" className="px-6 py-3">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {request.id}
              </th>
              <td className="px-6 py-4">
                {new Date(request.createdAt).toLocaleDateString()}
              </td>
              <td className="px-6 py-4">{request.client}</td>
              <td className="px-6 py-4">{request.product}</td>
              <td className="px-6 py-4">{request.status}</td>
              <td className="px-6 py-4">{request.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestsTable;
