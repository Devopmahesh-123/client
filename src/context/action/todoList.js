import ApiClient from "../../api-client";
import { host, basePath } from "../../environment";

export const get_todo_List = (callback) => {
    return (dispatch) => {
      dispatch({ type: "ISLOADING", data: true });
      ApiClient.get(
        `${host}${basePath}/todo/gettodo`,
        null,
        dispatch
      ).then((response) => {
        dispatch({ type: "ISLOADING", data: false });
        if (response.code === 200) {
          dispatch({ type: "HEADERUPDATE", data: response.data });
  
          if (response) return callback(response);
        } else if (response.code === 404) {
          console.log("response", response);
        } else {
          console.log("response", response);
        }
      });
    };
  };

  export const add_todo_List = (data,callback) => {
    return (dispatch) => {
      dispatch({ type: "ISLOADING", data: true });
      ApiClient.post(
        `${host}${basePath}/todo/addTodo`,
        data,
        null,
        dispatch
      ).then((response) => {
        dispatch({ type: "ISLOADING", data: false });
        if (response.code === 200) {
          dispatch({ type: "HEADERUPDATE", data: response.data });
  
          if (response) return callback(response);
        } else if (response.code === 404) {
          console.log("response", response);
        } else {
          console.log("response", response);
        }
      });
    };
  };  

  export const update_todo_list = (id,data,callback) => {
    return (dispatch) => {
      dispatch({ type: "ISLOADING", data: true });
      const url = `${host}${basePath}/todo/updatetodo?id=${id}`;
      ApiClient.put(
        url,
        data,
        null,
        dispatch
      ).then((response) => {
        dispatch({ type: "ISLOADING", data: false });
        if (response.code === 200) {
          dispatch({ type: "HEADERUPDATE", data: response.data });
  
          if (response) return callback(response);
        } else if (response.code === 404) {
          console.log("response", response);
        } else {
          console.log("response", response);
        }
      });
    };
  };  

  export const delete_todo_list = (id,data,callback) => {
    return (dispatch) => {
      dispatch({ type: "ISLOADING", data: true });
      const url = `${host}${basePath}/todo/deletetodo?id=${id}`;
      ApiClient.delete(
        url,
        data,
        null,
        dispatch
      ).then((response) => {
        dispatch({ type: "ISLOADING", data: false });
        if (response.code === 200) {
          dispatch({ type: "HEADERUPDATE", data: response.data });
  
          if (response) return callback(response);
        } else if (response.code === 404) {
          console.log("response", response);
        } else {
          console.log("response", response);
        }
      });
    };
  };  

  export const get_todo_list = (data,callback) =>{
    return (dispatch) => {
      dispatch({ type: "ISLOADING", data: true });
      console.log("data>>>",data)
      const {filterkey,limit,page,sort} = data
      const url = `${host}${basePath}/todo/gettodo?filter=${encodeURIComponent(filterkey)}&limit=${encodeURIComponent(limit)}&page=${encodeURIComponent(page)}&sort=${encodeURIComponent(sort)}`;
      ApiClient.get(
        url,
        data,
        null,
        dispatch
      ).then((response) => {
        dispatch({ type: "ISLOADING", data: false });
        if (response.code === 200) {
          dispatch({ type: "GET_TODO_LIST", data: response.data });
          if (response) return callback(response);
        } else if (response.code === 404) {
          console.log("response", response);
        } else {
          console.log("response", response);
        }
      });
    };
  }