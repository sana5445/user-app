import React from 'react'
import UserNavbar from './UserNavbar'

const DeleteUser = () => {
  return (
    <div>
        <UserNavbar/>
         <div style={{ backgroundColor: '#FAF0E6', minHeight: '100vh', paddingBottom: '30px' }}>
        <h2 style={{ color: "brown", textAlign: "center" }}>DELETE USER</h2>
        <div className="bg-light p-4 rounded shadow">
         <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                    <div className="row g-4">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                             <div className="label form-label">Name</div>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-3">
                         <button className="btn btn-danger">DELETE</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </div>
   </div>
  )
}

export default DeleteUser