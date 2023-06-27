import { useState } from "react"
import { AddCategory, GifGrid } from "./Components";

export const  GifExpertApp = () => {
  // eslint-disable-next-line no-unused-vars
  const [ categories, setCategories ] = useState(['One Puch', 'Dragon Ball']);
  const onAddCategory = ( newCategorie = '' ) => {
    if(categories.includes(newCategorie)) return;
    setCategories([newCategorie, ...categories]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
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