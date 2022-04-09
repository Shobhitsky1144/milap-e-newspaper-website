import React from "react";
import AdminPanel from "./AdminPanel";
import editIcon from "../assests/Icons-Web and Admin/edit 1x.png";
import deleteIcon from "../assests/Icons-Web and Admin/Delete 1x.png";
import "./upload.css";

const AdminNotification = () => {
  return (
    <div>
      <AdminPanel />
      <div
        style={{
          paddingLeft: "11rem",
          paddingTop: "1.3rem",
          background: "#e7e7e7",
        }}
      >
        <span style={{ fontWeight: "bold", fontSize: "20px" }}>
          {" "}
          Notifications
        </span>

        <button
          className="p-2  text-white"
          style={{
            background: "#4997de",
            width: "10.9rem",
            height: "2.5rem",
            border: "none",
            marginLeft: "54.4rem",
            outline: "none",
            borderRadius: "8px",
          }}
        >
          Send Notificatons
        </button>
      </div>
      <div className="mt-4 mr-4" style={{ paddingLeft: "11rem" }}>
        <table className="table table-bordered text-center">
          <thead className="" style={{ background: "#e7e7e7" }}>
            <tr>
              <th scope="col">S.NO.</th>
              <th scope="col">TITLE</th>
              <th scope="col" className="ml-5 ">
                MESSAGE
              </th>
              <th scope="col" className="">
                DATE
              </th>
              <th scope="col" className="">
                ACTIONS
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
              <td className="">
                <span className="">
                  <img src={editIcon} alt="edit" width={32} height={33} />
                </span>
                <span>
                  <img src={deleteIcon} alt="delete" width={32} height={33} />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminNotification;
