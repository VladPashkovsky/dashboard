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
  { field: 'date', headerName: 'Date', width: 200 },
  { field: 'brand', headerName: 'Brand', width: 200 },
  {field: 'model', headerName: 'Model', width: 200},
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

export const chartBarData =
  [
    {
      "country": "AD",
      "hot dog": 176,
      "hot dogColor": "hsl(299, 70%, 50%)",
      "burger": 197,
      "burgerColor": "hsl(129, 70%, 50%)",
      "sandwich": 136,
      "sandwichColor": "hsl(293, 70%, 50%)",
      "kebab": 63,
      "kebabColor": "hsl(31, 70%, 50%)",
      "fries": 169,
      "friesColor": "hsl(275, 70%, 50%)",
      "donut": 90,
      "donutColor": "hsl(230, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 47,
      "hot dogColor": "hsl(258, 70%, 50%)",
      "burger": 58,
      "burgerColor": "hsl(188, 70%, 50%)",
      "sandwich": 170,
      "sandwichColor": "hsl(37, 70%, 50%)",
      "kebab": 104,
      "kebabColor": "hsl(246, 70%, 50%)",
      "fries": 200,
      "friesColor": "hsl(329, 70%, 50%)",
      "donut": 105,
      "donutColor": "hsl(332, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 67,
      "hot dogColor": "hsl(14, 70%, 50%)",
      "burger": 93,
      "burgerColor": "hsl(104, 70%, 50%)",
      "sandwich": 38,
      "sandwichColor": "hsl(286, 70%, 50%)",
      "kebab": 147,
      "kebabColor": "hsl(172, 70%, 50%)",
      "fries": 106,
      "friesColor": "hsl(299, 70%, 50%)",
      "donut": 125,
      "donutColor": "hsl(72, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 160,
      "hot dogColor": "hsl(309, 70%, 50%)",
      "burger": 191,
      "burgerColor": "hsl(289, 70%, 50%)",
      "sandwich": 124,
      "sandwichColor": "hsl(166, 70%, 50%)",
      "kebab": 166,
      "kebabColor": "hsl(208, 70%, 50%)",
      "fries": 46,
      "friesColor": "hsl(14, 70%, 50%)",
      "donut": 141,
      "donutColor": "hsl(295, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 39,
      "hot dogColor": "hsl(351, 70%, 50%)",
      "burger": 61,
      "burgerColor": "hsl(2, 70%, 50%)",
      "sandwich": 39,
      "sandwichColor": "hsl(64, 70%, 50%)",
      "kebab": 4,
      "kebabColor": "hsl(112, 70%, 50%)",
      "fries": 117,
      "friesColor": "hsl(270, 70%, 50%)",
      "donut": 95,
      "donutColor": "hsl(158, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 73,
      "hot dogColor": "hsl(162, 70%, 50%)",
      "burger": 146,
      "burgerColor": "hsl(252, 70%, 50%)",
      "sandwich": 184,
      "sandwichColor": "hsl(332, 70%, 50%)",
      "kebab": 82,
      "kebabColor": "hsl(14, 70%, 50%)",
      "fries": 139,
      "friesColor": "hsl(283, 70%, 50%)",
      "donut": 151,
      "donutColor": "hsl(47, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 29,
      "hot dogColor": "hsl(175, 70%, 50%)",
      "burger": 143,
      "burgerColor": "hsl(288, 70%, 50%)",
      "sandwich": 7,
      "sandwichColor": "hsl(3, 70%, 50%)",
      "kebab": 42,
      "kebabColor": "hsl(181, 70%, 50%)",
      "fries": 42,
      "friesColor": "hsl(131, 70%, 50%)",
      "donut": 61,
      "donutColor": "hsl(224, 70%, 50%)"
    }
  ]