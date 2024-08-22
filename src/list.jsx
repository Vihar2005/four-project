// import React from 'react'
// import './App.css'
import { addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, query, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from './List/Firebase'
import Userlist from './List/StudentList'

const List = (e) => {
  const [data, setData] = useState({
    List: "",
    id: "",
    uid: ""
  })
  const [userdata, setUserData] = useState([])
  const handleChange = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }
  const saveData = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "Userlisting"), data)
    console.log('inserted successfully');

    setData({
      List: "",
      id: "",
      uid: ""
    })
  }

  const deleteData = async (id) => {
    await deleteDoc(doc(db, "Userlisting", id))
    console.log('deleted successfully');
  }
  const editData = async (id) => {
    const userInfo = doc(db, "Userlisting", id) // db = getFirestore()

    // Fetch document
    const docSnap = await getDoc(userInfo)
    if (docSnap.exists()) {
      let data1 = docSnap.data();
      setData({
        List: data1.List,
        id: id,
        uid: id
      })

    }
  }
  const updateData = async (e) => {
    e.preventDefault();
    console.log(data.uid);
    await updateDoc(doc(db, "Userlisting", data.uid), data)
    console.log("updated successfully");

    setData({
      List: "",
      id: "",
      uid: ""
    })
  }


  useEffect(() => {
    const qr = query(collection(db, "Userlisting"));
    const myfunc = onSnapshot(qr, (Qsnapshot) => {
      let myData = []
      Qsnapshot.forEach((i) => {
        myData.push({ ...i.data(), id: i.id });
      })
      setUserData(myData)
    })
    return () => myfunc()
  }, [])

  return (
    <div>
      <div>
        <h3>CRUD Example With Firebase</h3>
        <form action="#" method='post' onSubmit={data.uid != '' ? updateData : saveData}>
          <label>List</label>
          <input type="text" name="List" value={data.List} onChange={handleChange} />
          <br /><br />

          <input type="submit" value={data.uid != "" ? "Update Data" : "Save Data"} />
        </form>
        <table border={2}>
          <tr>
            <th>ID</th>
            <th>List</th>
            <th>Action</th>
          </tr>
          {
            userdata.map((i) => {
              return (
                <tr>
                  <td>{i.id}</td>
                  <td>{i.List}</td>
                  <td>
                    <button onClick={() => editData(i.id)}>Edit</button>
                    <button onClick={() => deleteData(i.id)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </table>
      </div>
      {/* <Userlist /> */}
    </div>
  )
}

export default List
