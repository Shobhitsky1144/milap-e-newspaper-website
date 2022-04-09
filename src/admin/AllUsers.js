import React from "react";
import AdminPanel from "./AdminPanel";

const AllUsers = () => {
  return (
    <div>
      <AdminPanel />
      <div
        style={{
          paddingLeft: "11rem",
          paddingTop: "1.9rem",
          background: "#e7e7e7",
        }}
      >
        <span style={{ fontWeight: "bold", fontSize: "20px" }}> User List</span>
        <input
          className="pl-5 "
          // type="file"
          placeholder="Search"
          accept="application/pdf"
          style={{
            width: "29rem",
            height: "2rem",

            borderRadius: "8px",
            marginLeft: "38rem",
            border: "none",
            color: "dark",
            outline: "none",
          }}
        />
      </div>
      <div className="mt-4 mr-4" style={{ paddingLeft: "11rem" }}>
        <table className="table table-bordered text-center">
          <thead className="" style={{ background: "#e7e7e7" }}>
            <tr>
              <th scope="col">S.NO.</th>
              <th scope="col">USER NAME</th>
              <th scope="col" className="ml-5 ">
                EMAIL ID
              </th>
              <th scope="col" className="">
                IP ADDRESS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>

              <td>Mark</td>
              <span className="p-5" style={{ border: "none" }}>
                <td>Otto</td>
              </span>
              <td>11-08-2021</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
