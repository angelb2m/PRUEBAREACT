import {PARENTSDATA} from "../data/parents";
const BASEURL= "http://54.177.198.128:8001/api"

class Api {

    getParents =  () => {
       const query = PARENTSDATA;
       return (
        query
    )
    }

    /*
    getParents = async () => {
        const query = await fetch(`${BASEURL}/cat-amenities-parents`)
        const parents = await query.json();
          return (
            parents
        )
      }
    */

    getChilds = async (id) => {
      const query = await fetch(`${BASEURL}/cat-amenities-childs/?amenity_parent_id=${id}`)
      const childs = await query.json();
        return (
            childs
      )
    }
  
  }

export default new Api();
