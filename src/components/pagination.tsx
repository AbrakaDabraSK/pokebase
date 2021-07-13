import {
  PaginationProps
} from '../types'

const Pagination: React.FC<PaginationProps> = ({
  count, perPage, currentPage, setCurrentPage
}) => {
  const pageCount = Math.ceil(count / perPage)
  const startIndex = ((currentPage * perPage) - perPage) + 1
  const endIndex = (currentPage * perPage)

  const changePage = (page) => {
    if (page <= 0 || page > pageCount) {
      return;
    }
    setCurrentPage(page);
  }

  return (
    <div className="flex justify-between">
      <div className="my-4"><p>Showing {startIndex} to {endIndex} of total {count}</p></div>
      <div className="flex items-center">
        <div className="">
          <a
            onClick={() => changePage(currentPage - 1)}
            className={`mr-4 px-2 py-2 inline-flex items-center ${currentPage === 1 ? ' cursor-not-allowed' : ' cursor-pointer '} text-sm leading-5 font-medium hover:text-gray-800 hover:bg-gray-100 rounded-lg text-gray-500 focus:outline-none transition ease-in-out duration-150`}
          >
            Previous
          </a>
        </div>
        <ul className="flex pl-0 my-2 list-none rounded">
          {[...Array(pageCount)].map((e, page) => (
            <li className="cursor-pointer" key={page + 1}>
              <a
                onClick={() => changePage(page + 1)}
                className="inline-flex items-center px-3 py-2 text-sm font-medium leading-5 text-center transition duration-150 ease-in-out rounded-lg hover:text-gray-800 hover:bg-gray-100 focus:outline-none"
              >
                {page + 1}
              </a>
            </li>

          ))}
        </ul>
        <div className="flex justify-end">
          <a
            onClick={() => changePage(currentPage + 1)}
            className={`ml-4 px-2 py-2 inline-flex items-center ${currentPage === pageCount ? ' cursor-not-allowed' : ' cursor-pointer '} text-sm leading-5 font-medium hover:text-gray-800 hover:bg-gray-100 rounded-lg text-gray-500 focus:outline-none transition ease-in-out duration-150`}
          >
            Next
          </a>
        </div>
      </div>
    </div>
  )
}

export default Pagination
