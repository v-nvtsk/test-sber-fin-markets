import { useEffect, useState } from "react"
import styles from './style.module.css'
import type { DataItem, Title, ApiData } from "./types"
import { DataView } from "./data-view/data-view"

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

export const App = () => {
  const [data,setData]=useState<DataItem[]>([])
  const [titles,setTitles]=useState<Title[]>([])
  const[error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(VITE_BASE_URL + 'data.json')
    .then(res=>res.json())
    .then(({data,titles}:ApiData)=>{
      if (!data || !titles) throw new Error("Ошибка: неполные данные")
      setData(data) 
      setTitles(titles)

    })
    .catch(err=>{
      setError("Ошибка при загрузке данных")
      console.log(err)})
  },[])


  if (!data.length || !titles.length) return null
  if (error) return <div>{error}</div>

  return (
    <div className={styles.container}>
      <DataView data={data} titles={titles} />
   </div>
  )
}

