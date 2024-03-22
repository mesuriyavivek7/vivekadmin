//importing images
import User from './assets/user.jpg'

export const usersCol=[
    { field: 'id', headerName: 'ID', width: 70 },
    {field:'username',headerName:'User',width:230,
     renderCell:(params)=>{
        return (
            <div className='cellWithImg'>
                <img src={params.row.img} className='cellImg' alt=""></img>
                <span>{params.row.username}</span>
            </div>
        )
     }
    },
    {field:'email',headerName:'Email',width:230},
    {field:'age',headerName:'Age',width:100},
    {field:'status',headerName:'Status',width:160,
     renderCell:(params)=>{
          return(
            <span className={`cellWithStatus ${params.row.status}`}>{params.row.status}</span>
          )
     }
    }

]

export const usersRow=[
    {
        id:1,
        username:'akshay patel',
        img:User,
        status:'active',
        email:'akshaypatel@gmail.com',
        age:20,
    },
    {
        id:2,
        username:'Harsh patel',
        img:User,
        status:'active',
        email:'harshpatel@gmail.com',
        age:35,
        
    },
    {
        id:3,
        username:'Jay patel',
        img:User,
        status:'passive',
        email:'akshaypatel@gmail.com',
        age:35,
    },
    {
        id:4,
        username:'Rohit Chauhan',
        img:User,
        status:'pending',
        email:'rohitchauhan@gmail.com',
        age:20,
    },
    {
        id:5,
        username:'akshay patel',
        img:User,
        status:'active',
        email:'akshaypatel@gmail.com',
        age:20,
    },
    {
        id:6,
        username:'Harsh patel',
        img:User,
        status:'active',
        email:'harshpatel@gmail.com',
        age:35,
        
    },
    {
        id:7,
        username:'Jay patel',
        img:User,
        status:'passive',
        email:'akshaypatel@gmail.com',
        age:35,
    },
    {
        id:8,
        username:'Rohit Chauhan',
        img:User,
        status:'pending',
        email:'rohitchauhan@gmail.com',
        age:20,
    },
]