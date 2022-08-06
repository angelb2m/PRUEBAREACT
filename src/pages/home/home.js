import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {setLoading,setParents} from "../../actions";
import {getParentsOffline} from "../../api/api";
import Card from "../../components/Card";

function Home(){

  const parents = useSelector(state => state.parents);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();


  useEffect(() => {
    const fetchParents = async () => {
      dispatch(setLoading(true));
      const parentsRes = await getParentsOffline();
      dispatch(setParents(parentsRes.data));
      dispatch(setLoading(false));
    };

    fetchParents();
  }, []);
  
  return (
      <div className="h-4/5 flex justify-center items-center">
        <div className="py-4 text-center">
        <h3 className="text-5xl text-gray-900 font-bold whitespace-pre-line dark:text-gray-100">HOME</h3>
        {loading ? (
           <h3 className="text-5xl text-gray-900 font-bold whitespace-pre-line dark:text-gray-100">Loading</h3>
          ) : (
            parents.map((item)=>(
              <Card key={item.id} data={item}/> 
             ))     
        )}
        </div>
      </div>
  )
}



export default Home;
