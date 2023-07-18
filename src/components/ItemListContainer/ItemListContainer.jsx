import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import {getFirestore, collection, getDocs,query,where} from "firebase/firestore"


const ItemListContainer = () => {

  const [data, setData] = useState([])
  const {categoryId} = useParams()

  useEffect(()=>{
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "items");
      if(categoryId){
        const queryFilter = query(queryCollection,
          where("category","==",categoryId))
          getDocs(queryFilter)
          .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
      }else{
        getDocs(queryCollection)
        .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
      
      }
  },[categoryId])


  return (
    <>
    <ItemList data={data}/>
    </>
  );
}

export default ItemListContainer