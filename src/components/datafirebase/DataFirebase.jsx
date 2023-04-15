import React, { useEffect, useState } from 'react'
import './datafirebase.scss'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { userColumnsFirebase } from '../../dataTableSource'
import { Link } from 'react-router-dom'
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase'
import { Modal } from '../modal/Modal'


const DataFirebase = () => {
  const [data, setData] = useState([])
  const [modalActive, setModalActive] = useState(false)
  const [currentRowId, setCurrentRowId] = useState(null)

  useEffect(() => {

    //Fetch(data)
    // const fetchData = async () => {
    //   let list = []
    //   try {
    //     const querySnapshot = await getDocs(collection(db, 'users'))
    //     querySnapshot.forEach((doc) => {
    //       list.push({ id: doc.id, ...doc.data() })
    //     })
    //     setData(list)
    //   } catch (err) {
    //     console.log(err)
    //   }
    // }
    // fetchData()

    //Listen (Real time)
    const unsub = onSnapshot(collection(db, 'users'), (snapShot) => {
      let list = []
      snapShot.docs.forEach(doc => {
        list.push({ id: doc.id, ...doc.data() })
      })
      setData(list)
    }, (error) => console.log(error))
    return () => unsub()
  }, [])

  function handleRow(id) {
    setCurrentRowId(id)
    setModalActive(true)
  }

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'users', id))
      setData(data.filter(item => item.id !== id))
      setModalActive(false)
    } catch (err) {
      console.log(err)
    }
  }


  const actionColumn = [
    {
      field: 'action', headerName: 'Action', width: 200, renderCell: (params) => {
        return (
          <div className='cellAction'>
            <Link to={`/users/${params.row.id}`} style={{ textDecoration: 'none' }}>
              <div className='viewButton'>View</div>
            </Link>
            <div className='deleteButton' onClick={() => handleRow(params.row.id)}>Delete</div>
          </div>
        )
      },
    },
  ]


  return (
    <div className='datatable'>
      <div className='datatableTitle'>
        Add New User
        <Link to='/users/new' className='link' style={{ textDecoration: 'none' }}>Add new</Link>
      </div>
      <DataGrid className='datagrid'
                rows={data}
                columns={userColumnsFirebase.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                components={{Toolbar: GridToolbar}}
                checkboxSelection
                disableSelectionOnClick
      />
      <Modal active={modalActive} setActive={setModalActive}>
        <div className='modalWindow'>
          <div className='modalText'>User will be removed</div>
          <div className='modalButtons'>
            <button className='modalOk' onClick={() => handleDelete(currentRowId)}>Ok</button>
            <button className='modalCancel' onClick={() => setModalActive(false)}>Cancel</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default DataFirebase