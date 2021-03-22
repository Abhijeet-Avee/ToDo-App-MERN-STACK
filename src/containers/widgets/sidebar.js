import React from 'react';
import Home from 'react-feather/dist/icons/home';
import AddNotes from 'react-feather/dist/icons/file-plus';
import ListNotes from 'react-feather/dist/icons/file-text';
import SearchNotes from 'react-feather/dist/icons/search';
import DeleteNotes from 'react-feather/dist/icons/trash-2';
import { NavLink } from 'react-router-dom';

export const SideBar = (props) => {
  return (
    <>
      <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/">
                <Home size={15} /> <span style={{ marginLeft: '10px' }}>DashBoard</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/add">
                <AddNotes size={15} /> <span style={{ marginLeft: '10px' }}>Add Notes</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/list">
                <ListNotes size={15} /><span style={{ marginLeft: '10px' }}>List Notes</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/search">
               <SearchNotes size={15}/><span style={{ marginLeft: '10px' }}>Search Notes</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/delete">
               <DeleteNotes size={15}/> <span style={{ marginLeft: '10px' }}>Delete Notes</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
};