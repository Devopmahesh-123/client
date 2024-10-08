import React, { useEffect, useState } from 'react'
import AddEditForm from './addEditForm';
import UserList from './userList';
import '../css/TodoList.css';
import { Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { add_todo_List, delete_todo_list, get_todo_list, update_todo_list } from '../context/action/todoList';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';


const TodoList = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(false);
    const [addingUser,setAddingUser] = useState(false);
    const [modal,setModal] =  useState(false);
    const [editingId,setEditingId] = useState();
    const [deletingId,setDeletingId] = useState();
    const [handleDeleted,setHandleDelete] = useState(false);
    const [totalCount,setTotalCount] = useState(false);
    const [selectedOption, setSelectedOption] = useState('select status');
    const [pageNumber,setPageNumber] = useState(1);

    const dispatch = useDispatch();
    console.log("selectedOption1",selectedOption);
    useEffect(()=>{
      console.log("selectedOption",selectedOption);
      if(selectedOption === 'select status'){
      dispatch(get_todo_list({filterKey:'',limit:10,page:pageNumber,sort:'createdAt'},(result)=>{
        setUsers(result?.data?.docs);
        setTotalCount(result?.data.count)
      }))
    } 
    },[selectedOption,editingUser,addingUser,handleDeleted,pageNumber]);

    const handleDelete = (user) =>{
        setDeletingId(user?._id)
        setHandleDelete(true)
        setModal(true)
    }

    const handleEdit = (user) => {
        setEditingUser(user);
        setEditingId(user?._id)
      };

      const _handlepage = (pageNumber) => {
        setPageNumber(pageNumber);
        if(selectedOption !== 'select status'){
          handlePageSelectChange(pageNumber)
        }
      };  
    
      const toggle = ()=>{
        setModal(false)
      }
      const handleAdd = () => {
        // navigate('addtodo')
        setAddingUser(true)
      };
    
      const handleSubmit = (userData) => {
        let formdatas;
        if (editingUser) {
          if(userData?.status === 'upcoming'){
            formdatas = {
            ...userData,
            status:false
            }
         }else {
          formdatas = {
            ...userData,
            status:true
            }
         }
          // Update existing user
          dispatch(update_todo_list(editingId,formdatas,(response)=>{
            toast.success(response.message);
            setAddingUser(false);
            setEditingUser(false)
          }))
        } else {
          if(userData?.status === ''){
            formdatas = {
            ...userData,
            status:false
            }
         }
          // Add new user
          dispatch(add_todo_List(formdatas,(response)=>{
            if(response.status === 'Success'){
              toast.success(response.message);
              setAddingUser(false);
              setEditingUser(false)
            }
          }))
        }
        setEditingUser(null);
      };

      const deleteTodo = ()=>{
        dispatch(delete_todo_list(deletingId,null,(response)=>{
          if(response.status === 'Success'){
            toast.success(response.message);
            setModal(false)
            setHandleDelete(false)
            setAddingUser(false);
            setEditingUser(false)
          }
        }))
      }

      const cancelFun = ()=>{
        setEditingUser(false);
        setAddingUser(false)
      }

      const handleSelectChange = (event) => {
        let filter = event.target.value;
        setSelectedOption(event.target.value);
        dispatch(get_todo_list({filterkey:filter,limit:10,page:pageNumber,sort:'createdAt'},(response)=>{
         if(response.status === 'Success'){
          // toast.success(response.message);
          setUsers(response?.data?.docs);
          setTotalCount(response?.data?.count)
          // setClear(true);
          // setAddingUser(false);
          // setEditingUser(false)
         }
        }))
      };

      const handleCancelBtn =()=>{
        setModal(false)
        setHandleDelete(false)
      }
      const clearfun = ()=>{
        setSelectedOption('select status');
        setPageNumber(1)
        // setClear(true);
      }
      const handlePageSelectChange = (page) =>{
        dispatch(get_todo_list({filterkey:selectedOption,limit:10,page:page,sort:'createdAt'},(response)=>{
          if(response.status === 'Success'){
          //  toast.success(response.message);
           setUsers(response?.data?.docs);
           // setClear(true);
           // setAddingUser(false);
           // setEditingUser(false)
          }
         }))
      }
  return (
    <div className="todo-list-container">
    <h1>User Management</h1>
    <div className="button-container">
        { !editingUser ? <button onClick={handleAdd} className="add-button">
          Add User
        </button> : <span className="add-buttontm">Edit Todo List</span>}
        <div>
        { (!editingUser && !addingUser) && (
          <>
        <label htmlFor="statusSelect" style={{ marginRight: '10px' }}>
         Select Status: 
       </label>
       <select id="statusSelect" value={selectedOption} onChange={handleSelectChange}>
       <option value="select status">Select Status</option>
       <option value="Done">Done</option>
       <option value="Upcoming">Upcoming</option>
       </select>
       <button style={{backgroundColor:"#0056b3", marginLeft:'4px',height:'44px'}} onClick={()=>clearfun()}>Clear Filter</button>
       </>
       )}
    </div>
      </div>
    {editingUser || addingUser ? (
      <AddEditForm user={editingUser} add={addingUser} onSubmit={handleSubmit} onCancel={() => cancelFun(null)} />
    ) : (
      <UserList users={users} onEdit={handleEdit} ondelete={handleDelete} totalCount={totalCount} handlepag={_handlepage} pagecount={pageNumber}/>
    )}
     {/* Model Component to handle delete check */}
      <Modal
        isOpen={modal}
        toggle={toggle}
      >
        <ModalHeader toggle={toggle}>Todo List</ModalHeader>
        <ModalBody style={{textAlign:'center'}}>
           <p>Are you sure want to delete.</p>
           <p>Todo</p>
        </ModalBody>
        <ModalFooter>
          <Button theme="btn btn-white" onClick={()=>handleCancelBtn()} className="ml-2">Cancel</Button>
          <Button theme="accent" className="ml-2" onClick={() => deleteTodo() }>Delete</Button>
        </ModalFooter>
      </Modal>
  </div>
);
}

export default TodoList;