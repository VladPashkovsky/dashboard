import React, { useEffect, useState } from 'react'
import './edit.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'
import { doc, collection, setDoc, addDoc, serverTimestamp, onSnapshot, updateDoc } from 'firebase/firestore'
import { auth, db, storage } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { useNavigate, useParams } from 'react-router-dom'
import { CircularProgress } from '@mui/material'

const EditProduct = ({ title }) => {

  const {id} = useParams()
  const [file, setFile] = useState('')
  const [data, setData] = useState({})
  const [percentage, setPercentage] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const newData = onSnapshot(doc(db, 'products', id), (doc) => {
      setData({...doc.data()})
    })
    return () => newData()

  }, [id])

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name
      const storageRef = ref(storage, file.name)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          setPercentage(progress)
        },
        (error) => {
          console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }))
          })
        },
      )
    }
    file && uploadFile()
  }, [file])

  const handleAdd = async (e) => {
    e.preventDefault()
    try {
      const newProduct = doc(collection(db, 'products'))
      await setDoc(newProduct,
        { category: `${data.category}`, timeStamp: serverTimestamp()
      })
      // await updateDoc(doc(db, 'products', id), {
      //   category: `${data.category}`,
      //   timeStamp: serverTimestamp()
      // }, )

      navigate('/products')
    } catch (err) {
      console.log(err)
    }
  }

  const handleInput = (e) => {
    const id = e.target.id
    const value = e.target.value

    setData({ ...data, [id]: value })
  }

  return (
    <div className='edit'>
      <Sidebar />
      <div className='editContainer'>
        <Navbar />
        <div className='topEdit'>
          <h1>{title}</h1>
        </div>
        <div className='bottomEdit'>

          <div className='left'>
            <div className='formInput'>
              <label htmlFor='file'>
                <img
                  src={
                    file
                      ? URL.createObjectURL(file)
                      : data.img}
                  alt=''
                />
              </label>
              <input
                type='file'
                id='file'
                onChange={e => setFile(e.target.files[0])}
                style={{ display: 'none' }}
              />
            </div>

          </div>
          <div className='right'>
            <form onSubmit={handleAdd}>
              <div className='formInput'>
                <label htmlFor='file'>
                  Image: <DriveFolderUploadIcon className='icon' />
                </label>
                <input
                  type='file'
                  id='file'
                  onChange={e => setFile(e.target.files[0])}
                  style={{ display: 'none' }}
                />
              </div>

              {/*{inputs.map(input => (*/}
              {/*  <div className='formInput' key={input.id}>*/}
              {/*    <label>{input.label}</label>*/}
              {/*    <input*/}
              {/*      id={input.id}*/}
              {/*      type={input.type}*/}
              {/*      placeholder={input.placeholder}*/}
              {/*      onChange={handleInput} />*/}
              {/*  </div>*/}
              {/*))}*/}
              <div className='formInput'>
                <label>Category</label>
                <input type='text' placeholder={data.category}
                       onChange={handleInput}/>
              </div>
              <div className='formInput'>
                <label>Description</label>
                <input type='text' placeholder={data.description}
                       onChange={handleInput}/>
              </div>
              <div className='formInput'>
                <label>Price</label>
                <input type='text' placeholder={data.price}
                       onChange={handleInput}/>
              </div>
              <div className='formInput'>
                <label>Title</label>
                <input type='text' placeholder={data.title}
                       onChange={handleInput}/>
              </div>
              <div className='formInput'>
                <label>Status</label>
                <input type='text' placeholder={data.status}
                       onChange={handleInput}/>
              </div>
              <button disabled={percentage !== null && percentage < 100} type='submit'>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProduct