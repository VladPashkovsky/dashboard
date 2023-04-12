import React, { useEffect, useState } from 'react'
import './new.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import {Box, Button, TextField} from "@mui/material"
import {Formik} from 'formik'
import * as yup from 'yup'
import { useMediaQuery } from '@mui/material'

const initialValues = {
  date: '',
  brand: '',
  model: '',
  description: ''
}

const regExp =  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/

const orderSchema = yup.object().shape({
  data: yup.string().matches(regExp, 'Date is not valid').required('required'),
  brand: yup.string().required('required'),
  model: yup.string().required('required'),
  description: yup.string().required('required')
})

const NewOrder = ({title}) => {
  const isNonMobile = useMediaQuery('(min-width:600px)')

  const handleFormSubmit = (values) => {
    console.log(values)
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
              {({values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                  <Box display='grid'
                       gap='30px'
                       gridTemplateColumns='repeat(4, minmax(0, 1fr))'
                       sx={{"& > div" : {gridColumn: isNonMobile ? undefined : "span 4"}}}
                  >
                    <TextField
                      fullWidth
                      variant='filled'
                      type='text'
                      label='Date'
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.date}
                      name='date'
                      error={!!touched.date}
                    />
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