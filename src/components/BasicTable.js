import React, {useMemo} from 'react'
import {
    useTable,
    useGroupBy,
    useFilters,
    useSortBy,
    useExpanded,
    usePagination } from 'react-table'

import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'

export const BasicTable = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA,[])

   const tableInstance =  useTable(
        {
            columns,
            data
        }
    )
const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance
    
    return (
        <div class="my-20 mx-10"> 
        <table {...getTableProps()} className='ml-20 mr-20'>
            <thead className='bg-gray-200  '>
            
                 {headerGroups.map((headerGroup)=>(
                     
                <tr {...headerGroup.getHeaderGroupProps()} >
                <th class="h-10 w-40 text-center" > <input type="checkbox" class="checked:bg-blue-700" /> </th>
                    {  
                        headerGroup.headers.map(column => (   
                        <th {...column.getHeaderProps()} class="h-10 w-40 text-center text-gray-800">
                            {column.render('Header')}
                        </th>
                        ))
                    }
                    
                </tr>
                
                 ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            
                {rows.map((row )=> {
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()} class="w-full">
                            <td class="h-10 p-4 text-center border-b-2 text-blue-700"> <input type="checkbox" class="checked:border-white checked:bg-green-400"/> </td>
                            {row.cells.map((cell)=> {
                                return <td {...cell.getCellProps()} class="h-10 px-8 text-center border-b-2 p-4">
                                    {cell.render('Cell')}</td>
                            })}
                             </tr>
                        )
                    })}   
            </tbody>
        </table>
        </div>
    )
}
