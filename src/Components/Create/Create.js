import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import {FirebaseContext,AuthContext} from '../../store/Context'
import { useHistory } from 'react-router-dom';

const Create = () => {
  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const [name,setName] =useState('')
  const [price,setPrice] =useState('')
  const [category,setCategory] =useState('')
  const [image,setImage] =useState('')
  const history = useHistory()
  const date = new Date()
  const handleSubmit = ()=>{
     firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
      console.log(url);
      firebase.firestore().collection('products').add({
        name,
        category,
        price,
        url,
        userId:user.uid,
        createdAt:date.toDateString()
      })
      history.push('/')
      })
     })
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={name}
            onChange={(e)=>setName(e.target.value)}
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={category}
            onChange={(e)=>setCategory(e.target.value)}
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input 
            className="input"
             type="number"
              id="fname"
              value={price}
            onChange={(e)=>setPrice(e.target.value)}
             name="Price" />
            <br />
          <br />
          <img  alt="Posts"
           width="200px"
            height="200px"
             src={image ? URL.createObjectURL(image):'🌇'}></img>
            <br />
            <input onChange={(e)=>{
             setImage(e.target.files[0])
            }} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn"
            >upload and Submit</button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
