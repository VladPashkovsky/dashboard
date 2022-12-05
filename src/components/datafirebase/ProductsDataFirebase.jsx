import React, { useEffect, useState } from 'react'
import './datafirebase.scss'
import { DataGrid } from '@mui/x-data-grid'
import { productColumnsFirebase } from '../../dataTableSource'
import { Link } from 'react-router-dom'
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase'

const ProductsDataFirebase = ({type}) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'products'), (snapShot) => {
      let list = []
      snapShot.docs.forEach(doc => {
        list.push({ id: doc.id, ...doc.data() })
      })
      setData(list)
    }, (error) => console.log(error))
    return () => unsub()
  }, [])

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'products', id))
      setData(data.filter(item => item.id !== id))
    } catch (err) {
      console.log(err)
    }
  }

  const actionColumn = [
    {
      field: 'action', headerName: 'Action', width: 200, renderCell: (params) => {
        return (
          <div className='cellAction'>
            <Link to={`/products/${params.row.id}`} style={{ textDecoration: 'none' }}>
              <div className='viewButton'>View</div>
            </Link>
            <div className='deleteButton' onClick={() => handleDelete(params.row.id)}>Delete</div>
          </div>
        )
      },
    },
  ]


  return (
    <div className='datatable'>
      <div className='datatableTitle'>
        Add New Product
        <Link to='/products/new' className='link'>Add new</Link>
      </div>
      <DataGrid className='datagrid'
                rows={data}
                columns={productColumnsFirebase.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
      />
    </div>
  )
}

export default ProductsDataFirebase