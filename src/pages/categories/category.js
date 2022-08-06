import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {setLoading, setChilds} from "../../actions";
import {getChilds} from "../../api/api";
import CardChild from "../../components/CardChild";
import {categoryNameToId} from "../../utils/categoryNameToId"
import {useParams} from "react-router-dom";
function Category(){
  
  const childs = useSelector(state => state.childs);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const {category} = useParams();



  useEffect(() => {
    const fetchCategory = async () => {
      let categoryId = categoryNameToId(category);
      dispatch(setLoading(true));
      const childRes = await getChilds(categoryId);
      dispatch(setChilds(childRes.results));
      dispatch(setLoading(false));
    };

    fetchCategory();
  }, []);
  return (
      <div className="h-4/5 flex justify-center items-center">
        <div className="py-4 text-center">
        <h3 className="text-5xl text-gray-900 font-bold whitespace-pre-line dark:text-gray-100">{category.split("-").join(" ").toUpperCase()}</h3>
        {loading ? (
           <h3 className="text-5xl text-gray-900 font-bold whitespace-pre-line dark:text-gray-100">Loading</h3>
          ) : (
          childs.length > 0 ?(
            childs.map((item)=>(
              <CardChild key={item.id} data={item}/> 
             )) 
          ):(
            <p>Nada para mostrar</p>
          )
        )}
        </div>
      </div>
  )
}



export default Category;
