import React, { useEffect, useState } from 'react'
import { db } from '../firebase'

import{
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot 
}from 'firebase/firestore'

const UserManagement = () => {

    const [form,setForm] = useState({
        name:"",
        email:"",
        role:""
    });

    const [users,setUsers] = useState([]);
    

    useEffect(()=>{
      const stop = onSnapshot(collection(db,'users'),(snapshot)=>{
        const usersList = snapshot.docs.map((u)=>({
          id:u.id,
          ...u.data()
        }))
        setUsers(usersList);
      })
      return ()=>stop();
    },[])

    const handleChange = (e)=>{
      setForm({
        ...form,
        [e.target.name] : e.target.value
      })
    }

    const handleSubmit = async(e)=>{
      e.preventDefault();
      try{
        await addDoc(collection(db,'users'),{
          ...form,
          createdAt:serverTimestamp()
        })
        alert('User added successfully.');
        setForm({ name:"",
        email:"",
        role:""})
      }
      catch(err){
        console.log('Failed to add user..!!',err);
      }
    }

  return (
    <div>
      <h1>UserManagement</h1>

      {users.map((u)=>(
        <div className="card" key={u.id}>
          <h3>{u.name}</h3>
          <h4>{u.email}</h4>
          <p>{u.role}</p>
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' name='name' value={form.name} onChange={handleChange} />
        <input type="text" placeholder='Email' name='email'  value={form.email} onChange={handleChange} />
        <input type="text" placeholder='Role' name='role'  value={form.role} onChange={handleChange} />
        <button>Add User</button>
      </form>
    </div>
  )
}

export default UserManagement