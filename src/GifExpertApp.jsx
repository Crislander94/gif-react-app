import { useState } from "react"
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

export const  GifExpertApp = () => {
  // eslint-disable-next-line no-unused-vars
  const [ categories, setCategories ] = useState(['One Puch', 'Dragon Ball']);
  const onAddCategory = ( newCategorie = '' ) => {
    if(categories.includes(newCategorie)) return;
    setCategories([newCategorie, ...categories]);
  }

  return (
    <>
      {/* TITULO */}
      <h1>GifExpertApp</h1>
      {/* Input */}
      <AddCategory
        //setCategories = { setCategories }
        onNewCategory = { onAddCategory }
      />
      
         {
            categories.map( (category) => (
              <GifGrid 
                  key={category}
                  category={category} />
            ))
         }
       {/* Gif Item */}
    </>
  )
}