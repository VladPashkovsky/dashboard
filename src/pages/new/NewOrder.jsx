import React from 'react'
import './new.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { Box, Button, TextField, useMediaQuery } from '@mui/material'
import { Formik } from 'formik'
import * as yup from 'yup'
import { collection, doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import { useNavigate } from 'react-router-dom'

const initialValues = {
  date: '',
  brand: '',
  model: '',
  description: ''
}

//const regExp =  /^(0?[1-9]|[12]\d|30|31)[^\w\d\r\n:](0?[1-9]|1[0-2])[^\w\d\r\n:](\d{4}|\d{2})$/

const orderSchema = yup.object().shape({
  data: yup.date().required('required').default(() => new Date()),
  brand: yup.string().required('required'),
  model: yup.string().required('required'),
  description: yup.string().required('required')
})

const NewOrder = ({title}) => {
  const isNonMobile = useMediaQuery('(min-width:600px)')
  const navigate = useNavigate()

  const handleFormSubmit = async (data) => {
      try {
        const newOrder = doc(collection(db, 'orders'))
        await setDoc(newOrder, { ...data, timeStamp: serverTimestamp() })
        navigate('/orders')
      } catch (err) {
        console.log(err)
      }
  }


  return (
    <div className='new'>
      <Sidebar />
      <div className='newContainer'>
        <Navbar />
        <div className='topNew'>
          <h1>{title}</h1>
        </div>
        <div className='bottomNew'>

          <Box m='20px'>
            <Formik
              initialValues={initialValues}
              onSubmit={handleFormSubmit}
              validationSchema={orderSchema}
            >
              {({values, errors, touched, handleBlur, handleChange, handleSubmit, }) => (
                <form onSubmit={handleSubmit}>
                  <Box display='grid'
                       gap='30px'
                       gridTemplateColumns='repeat(4, minmax(0, 1fr))'
                       sx={{"& > div" : {gridColumn: isNonMobile ? undefined : "span 4"}}}
                  >
                    <TextField
                      fullWidth
                      variant='filled'
                      type='date'
                      label=''
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.date}
                      name='date'
                      error={!!touched.date && !!errors.date}
                      helperText={touched.date && errors.date}
                      sx={{gridColumn: 'span 2'}}
                    />
                    <TextField
                      fullWidth
                      variant='filled'
                      type='text'
                      label='Brand'
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.brand}
                      name='brand'
                      error={!!touched.brand && !!errors.brand}
                      helperText={touched.brand && errors.brand}
                      sx={{gridColumn: 'span 2'}}
                    />
                    <TextField
                      fullWidth
                      variant='filled'
                      type='text'
                      label='Model'
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.model}
                      name='model'
                      error={!!touched.model && !!errors.model}
                      helperText={touched.model && errors.model}
                      sx={{gridColumn: 'span 4'}}
                    />
                    <TextField
                      fullWidth
                      variant='filled'
                      type='text'
                      label='Description'
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.description}
                      name='description'
                      error={!!touched.description && !!errors.description}
                      helperText={touched.description && errors.description}
                      sx={{gridColumn: 'span 4'}}
                    />
                  </Box>
                  <Box display='flex' justifyContent='end' mt='20px'>
                    <Button disabled={values !== values} type='submit' color='secondary' variant='contained'>
                      Add New Order
                    </Button>
                  </Box>
                </form>
              )}
            </Formik>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default NewOrder