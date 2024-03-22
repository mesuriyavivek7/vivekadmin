import React from 'react'

//importing sass
import './datatable.scss'

import { DataGrid } from '@mui/x-data-grid';

//importing users data
import { usersCol,usersRow } from '../../datatablesource';

import { Link } from 'react-router-dom';

export default function DataTable() {
  const actionCol=[{field:'action' ,headerName:'Action',width:200,
   renderCell:()=>{
    return (
      <div className='cellAction'>
        <Link to='/users/232' style={{textDecoration:'none'}}>
          <span className='viewBtn'>View</span>
        </Link>
         <span className='deleteBtn'>Delete</span>
      </div>
    )
   }
  }
]
  return (
    <div className='datatable'>
        <div className='dataTabelTitle'>
          Add New User
          <Link to='/users/new' style={{textDecoration:'none'}} className='link'>Add New</Link>
        </div>
        <DataGrid
        rows={usersRow}
        columns={usersCol.concat(actionCol)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSize={8}
        pageSizeOptions={[5,10]}
        checkboxSelection
       />
    </div>
  )
}
