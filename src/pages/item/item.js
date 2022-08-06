import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {setLoading, setItem} from "../../actions";
import {getItemById} from "../../api/api";
import ItemCard from "../../components/ItemCard";
import {categoryNameToId} from "../../utils/categoryNameToId"
import {useParams} from "react-router-dom";


function Item(){
  
  const selectedItem = useSelector(state => state.selectedItem);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const {category, item} = useParams();



  useEffect(() => {
    const fetchItemById = async () => {
      let categoryId = categoryNameToId(category);
      dispatch(setLoading(true));
      const itemRes = await getItemById(categoryId, item);
      dispatch(setItem(itemRes.results));
      dispatch(setLoading(false));
    };

    fetchItemById();
  }, []);
  return (
      <div className="h-4/5 flex justify-center items-center">
        <div className="py-4 text-center">
        <h3 className="text-5xl text-gray-900 font-bold whitespace-pre-line dark:text-gray-100">{category.split("-").join(" ").toUpperCase()}</h3>
        {loading ? (
           <h3 className="text-5xl text-gray-900 font-bold whitespace-pre-line dark:text-gray-100">Loading</h3>
          ) : (
            selectedItem.length > 0 ?(
              selectedItem.map((item)=>(
              <ItemCard key={item.id} data={item}/> 
             )) 
          ):(
            <p>Nada para mostrar</p>
          )
        )}
        </div>
      </div>
  )
}



export default Item;
