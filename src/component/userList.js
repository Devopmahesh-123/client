import React, { useState } from 'react';
import '../css/userList.css';

const UserList = ({ users, onEdit, ondelete, totalCount,handlepag,pagecount}) => {
  console.log("count",totalCount,"m",pagecount)
  const [currentPage, setCurrentPage] = useState(pagecount);
  const [itemsPerPage] = useState(10);

  console.log(">>>>>>>user",users);
  // Calculate indexes for pagination
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);
//  console.log("currentItems",currentItems)
  // Change page
  const paginate = (pageNumber) => {
     handlepag(pageNumber)
    setCurrentPage(pageNumber)
  };

    return (
      <div>
         <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Date & Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.description}</td>
              <td>{user.dateTime}</td>
              <td>{user.status === false ? 'Upcomming' : 'Done'}</td>
              <td>
                {/* <button onClick={() => onEdit(user)} style={{marginRight:'3px'}}>Edit</button> */}
                <i class="fa-solid fa-pen" onClick={() => onEdit(user)} style={{marginRight:'15px'}}></i>
                {/* <button onClick={() => ondelete(user)}>delete</button> */}
                <i class="fa-solid fa-trash" onClick={() => ondelete(user)} ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table> 
       {/* Pagination */}
       <ul className="pagination">
        {Array.from({ length: Math.ceil(totalCount / itemsPerPage) }).map((_, index) => (
          <li key={index} className={currentPage === index + 1 ? 'active' : ''}>
          <button onClick={() => paginate(index + 1)} style={{marginRight:'5px', backgroundColor: currentPage === index + 1 ? '#007bff' : '#fff', color: currentPage === index + 1 ? '#fff' : 'black', border: '1px solid black'}}>
        {index + 1}
      </button></li>
        ))}
      </ul>
      </div>
    );
  };

export default UserList;