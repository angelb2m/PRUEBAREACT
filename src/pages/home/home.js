import React, {useEffect} from "react";
import API  from "../../api/api";
import { connect } from "react-redux";
import {loadParents} from "../../actions/index";
function Home({currentParents}){

  useEffect(() =>{

  });
  
  return (
      <div className="h-4/5 flex justify-center items-center">
        <div className="py-4 text-center">
          <h3 className="text-5xl text-gray-900 font-bold whitespace-pre-line dark:text-gray-100">HOME</h3>
        </div>
      </div>
  )
}

const mapStateToProps = state => {
  return {
    currentParents: state.currentParents
  };
};


export default connect(mapStateToProps)(Home);
