const TableData = ({ title, headers, data }) => {
  console.log(data)
  return (
    <div>
      <h1 className="my-2 mt-6 font-bold">{title}</h1>
      <div className="w-full mx-auto relative overflow-x-auto shadow-md sm:rounded-lg my-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-red-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {headers?.map((cell, index) => (
                <th
                  key={index}
                  scope="col"
                  className={`${index && "text-center"} px-6 py-3 `}
                >
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((row, index) => (
              <tr key={index}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                {row.map((cell, idx) => (
                  <td className={`${idx && "text-center"} px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white`} key={`${index}-${idx}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableData;