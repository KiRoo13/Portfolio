import { useEffect, useState } from "react"

export function getItemInStorage (key, defaultValue) {
   return JSON.parse(localStorage.getItem(key)) || defaultValue
}

export function useLocalStorage (key, defaultValue) {
   const [value, setValue] = useState(getItemInStorage(key, defaultValue))

   useEffect(()=> {
      localStorage.setItem(key, JSON.stringify(value))
   }, [value, setValue])

   return [value, setValue]
}