import React, { useEffect, useState } from 'react'
import './datafirebase.scss'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { OrdersColumnsFirebase } from '../../dataTableSource'
import { Link } from 'react-router-dom'
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase'
import { Modal } from '../modal/Modal'


const OrdersDataFirebase = () => {
  const [data, setData] = useState([])
  const [modalActive, setModalActive] = useState(false)
  const [currentRowId, setCurrentRowId] = useState(null)

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'orders'), (snapShot) => {
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
      await deleteDoc(doc(db, 'orders', id))
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
            <div className='completeButton' onClick={() => handleRow(params.row.id)}>Completed</div>
          </div>
        )
      },
    },
  ]

  return (
      <div className='datatable'>
        <div className='datatableTitle'>
          Add New Order
          <Link to='/orders/neworder' className='link' style={{ textDecoration: 'none' }}>Add new</Link>
        </div>
          <DataGrid className='datagrid'
                    rows={data}
                    columns={OrdersColumnsFirebase.concat(actionColumn)}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                    components={{Toolbar: GridToolbar}}
                    checkboxSelection
                    disableSelectionOnClick

          />
        <Modal active={modalActive} setActive={setModalActive}>
          <div className='modalWindow'>
            <div className='modalText'>Order will be removed</div>
            <div className='modalButtons'>
              <button className='modalOk' onClick={() => handleDelete(currentRowId)}>Ok</button>
              <button className='modalCancel' onClick={() => setModalActive(false)}>Cancel</button>
            </div>
          </div>
        </Modal>
      </div>

  )
}

export default OrdersDataFirebase