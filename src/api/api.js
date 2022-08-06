import axios from 'axios';
import {PARENTSDATA} from "../data/parents"; 
const BASEURL = "https://myproxyb2m.herokuapp.com/http://54.177.198.128:8001/api"

export const getParents = async () => {
  return await axios
    .get(`${BASEURL}https://myproxyb2m.herokuapp.com/http://54.177.198.128:8001/api/cat-amenities-parents`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getChilds = async (id) => {
  return await axios
  .get(`${BASEURL}/cat-amenities-childs/?amenity_parent_id=${id}`)
  .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getItemById = async (parentId, itemId) => {
  return await axios
  .get(`${BASEURL}/cat-amenities-childs/?amenity_parent_id=${parentId}&id=${itemId}`)
  .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getParentsOffline = () => {
   return PARENTSDATA
}

