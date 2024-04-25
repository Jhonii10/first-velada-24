'use client'
import { TrashIcon } from "@heroicons/react/24/solid";
import { deletePlay } from "../lib/actions";
import Notiflix from "notiflix";

export function DeletePlay({ id }) {
    
   
    const confirmDelete = ()=>{
        Notiflix.Confirm.show(
            'Eliminar cancion',
            '¿Estas seguro de eliminar esta cancion?',
            'Eliminar',
            'Cancelar',
            function okCb() {
                deletePlay(id);
            },
            function cancelCb() {
              return
            },
            {
              width: '320px',
              borderRadius: '8px',
              titleColor:'black',
              okButtonBackground:'red',
              cssAnimationStyle:'zoom',
      
            },
          );
      }
      
     
      
  return (
    <>  
          <form action={confirmDelete}>
        <button className="rounded-md border p-2 hover:bg-gray-100" >
            <span className="sr-only">Delete</span>
            <TrashIcon className="w-5" color="red" />
        </button>
        </form> 
    </>
  );
}