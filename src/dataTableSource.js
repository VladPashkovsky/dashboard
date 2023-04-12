export const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'user', headerName: 'User', width: 230, renderCell: (params) => {
      return (
        <div className='cellWithImg'>
          <img className='cellImg' src={params.row.img} alt='avatar' />
          {params.row.username}
        </div>
      )
    },
  },
  { field: 'email', headerName: 'Email', width: 230 },
  { field: 'age', headerName: 'Age', width: 100 },
  {
    field: 'status', headerName: 'Status', width: 160, renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
      )
    },
  },
]

export const userColumnsFirebase = [
  { field: 'id', headerName: 'ID', width: 200 },
  {
    field: 'user', headerName: 'User', width: 230, renderCell: (params) => {
      return (
        <div className='cellWithImg'>
          <img className='cellImg' src={params.row.img} alt='avatar' />
          {params.row.username}
        </div>
      )
    },
  },
  { field: 'email', headerName: 'Email', width: 230 },
  { field: 'address', headerName: 'Address', width: 300 },
  {
    field: 'phone', headerName: 'Phone', width: 200, renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.phone}`}>{params.row.phone}</div>
      )
    },
  },
]

export const productColumnsFirebase = [
  { field: 'id', headerName: 'ID', width: 200 },
  {
    field: 'product', headerName: 'Product', width: 230, renderCell: (params) => {
      return (
        <div className='cellWithImg'>
          <img className='cellImg' src={params.row.img} alt='avatar' />
          {params.row.username}
        </div>
      )
    },
  },
  { field: 'title', headerName: 'Title', width: 230 },
  { field: 'price', headerName: 'Price', width: 300 },
  {
    field: 'status', headerName: 'Status', width: 200, renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
      )
    },
  },
]

export const OrdersColumnsFirebase = [
  { field: 'id', headerName: 'ID', width: 200 },
  // {
  //   field: 'product', headerName: 'Product', width: 230, renderCell: (params) => {
  //     return (
  //       <div className='cellWithImg'>
  //         <img className='cellImg' src={params.row.img} alt='avatar' />
  //         {params.row.username}
  //       </div>
  //     )
  //   },
  // },
  { field: 'date', headerName: 'Date', width: 230 },
  { field: 'brand', headerName: 'Brand', width: 300 },
  {field: 'model', headerName: 'Model', width: 300},
  { field: 'description', headerName: 'Description', width: 300 }
  // {
  //   field: 'status', headerName: 'Status', width: 200, renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
  //     )
  //   },
  // },
]

export const userRows = [
  {
    id: 1,
    username: 'Snow',
    img: 'https://www.soyuz.ru/public/uploads/files/2/7072143/20170617131019a15ce8dda0.png',
    status: 'active',
    email: '1snow@gmail.com',
    age: 35,
  },
  {
    id: 2,
    username: 'Jamie Lannister',
    img: 'https://helios-i.mashable.com/imagery/articles/06TFEmMOtkvNH2r0BrEBQ6j/hero-image.fill.size_1200x900.v1623372463.jpg',
    email: '2snow@gmail.com',
    status: 'passive',
    age: 42,
  },
  {
    id: 3,
    username: 'Lannister',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBeeQ6rgzGvTdhBmXqaSWOGkAxwYVFfTex_g&usqp=CAU',
    email: '3snow@gmail.com',
    status: 'pending',
    age: 45,
  },
  {
    id: 4,
    username: 'Stark',
    img: 'https://blog.studylie.ru/wp-content/uploads/2019/09/jeddard-stark.jpg',
    email: '4snow@gmail.com',
    status: 'active',
    age: 16,
  },
  {
    id: 5,
    username: 'Targaryen',
    img: 'https://media.allure.com/photos/59a6ce34eb8b321ae9b3cd82/master/pass/viserys-targaryen-1024.jpg',
    email: '5snow@gmail.com',
    status: 'passive',
    age: 22,
  },
  {
    id: 6,
    username: 'Melisandre',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '6snow@gmail.com',
    status: 'active',
    age: 15,
  },
  {
    id: 7,
    username: 'Clifford',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '7snow@gmail.com',
    status: 'passive',
    age: 44,
  },
  {
    id: 8,
    username: 'Frances',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '8snow@gmail.com',
    status: 'active',
    age: 36,
  },
  {
    id: 9,
    username: 'Roxie',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'snow@gmail.com',
    status: 'pending',
    age: 65,
  },
  {
    id: 10,
    username: 'Roxie',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'snow@gmail.com',
    status: 'active',
    age: 65,
  },
]