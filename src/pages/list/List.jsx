import React from 'react'

//importing sass
import './list.scss'

//importing components
import SideBar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'
import DataTable from '../../components/datatable/DataTable'

export default function List() {
  return (
    <div className='list'>
      <SideBar></SideBar>

      <div className='listContainer'>
        <Navbar></Navbar>
        
        <DataTable></DataTable>
      </div>
    </div>
  )
}
