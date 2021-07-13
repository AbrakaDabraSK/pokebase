import { useState, useEffect } from 'react'
import Head from 'next/head'
import Axios from 'axios'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import BaseContainer from '../../components/container/base'
import Pagination from '../../components/pagination'
import Domain from '../../components/card/link/block/domain'

import {
  Direction,
  LinkColumns
} from '../../enums'

dayjs.extend(relativeTime)

export default function List() {
  const [count, setCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [pokes, setPokes] = useState([])

  useEffect(() => {
    fetchCount().then(() => fetchPokes())
  }, [currentPage]);

  const fetchCount = async () => {
    try {
      const { data } = await Axios.get('/link/total')
      setCount(data.count)
    } catch (error) {
      console.error(error)
    }
  }

  const fetchPokes = async () => {
    try {
      const { data } = await Axios.get('/link', { params: { 
        perPage, 
        currentPage,
        column: LinkColumns.CREATED,
        direction: Direction.DESC
      }})
      setPokes(data)
    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <>
      <Head>
        <title>Pokes</title>
        <meta name="description" content="pokes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseContainer>
        <div className="flex flex-col h-screen mt-10">
          {/** Table */}
          <div className="-my-2 overflow-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                        >
                          Last Update
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                        >
                          Domain
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                      >
                        Poke
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Open</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {pokes.map(poke => (
                      <tr key={poke.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-gray-900">
                                <i className="mr-2 relative inset-0.5 text-md text-green-400 bx bx-time-five"></i>
                                {dayjs(poke.updatedAt).fromNow()}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <Domain name={poke.domain} />
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900 break-normal text-md">{poke.title}</div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-center whitespace-nowrap">
                          <a 
                            className="px-2 py-2 text-xs font-semibold text-white uppercase bg-green-500 border border-green-500 rounded"
                            href={poke.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="bx bx-link-external"></i>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/** Pagination */}
          <Pagination
            count={count}
            perPage={perPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </BaseContainer>
    </>
  )
}
