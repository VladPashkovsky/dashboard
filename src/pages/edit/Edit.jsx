import React, { useEffect, useState } from 'react'
import './edit.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'
import { doc, onSnapshot, serverTimestamp, updateDoc, } from 'firebase/firestore'
import { auth, db, storage } from '../../firebase'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = ( {title} ) => {

  const {id} = useParams()
  const [file, setFile] = useState('')
  const [data, setData] = useState({})
  const [percentage, setPercentage] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const newData = onSnapshot(doc(db, 'users', id), (doc) => {
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


  const handleEdit = async (e) => {
    e.preventDefault()
    setData({...data})
    try {
      await updateDoc(doc(db, 'users', id), {
        username : data.username,
        timeStamp: serverTimestamp()
      }, )
      navigate('/users')
    } catch (err) {
      console.log(err)
    }
  }

  function handleInput(e) {
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
            <form onSubmit={handleEdit}>
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
                <label>Username</label>
                <input type='text' placeholder={data.username}
                       onChange={handleInput}/>
              </div>
              <div className='formInput'>
                <label>Name and Surname</label>
                <input type='text' placeholder={data.displayName}
                       onChange={handleInput}/>
              </div>
              <div className='formInput'>
                <label>Email</label>
                <input type='email' placeholder={data.email}
                       onChange={handleInput}/>
              </div>
              <div className='formInput'>
                <label>Phone</label>
                <input type='text' placeholder={data.phone}
                       onChange={handleInput}/>
              </div>
              <div className='formInput'>
                <label>Password</label>
                <input type='password' placeholder={data.password}
                       onChange={handleInput}/>
              </div>
              <div className='formInput'>
                <label>Address</label>
                <input type='text' placeholder={data.address}
                       onChange={handleInput}/>
              </div>
              <div className='formInput'>
                <label>Country</label>
                <input type='text' placeholder={data.country}
                       onChange={handleInput}/>
              </div>
              <button disabled={percentage !== null && percentage < 100 }
                      type='submit'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit