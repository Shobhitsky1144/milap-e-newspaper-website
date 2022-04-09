import React from "react";
import AdminPanel from "./AdminPanel";
import editIcon from "../assests/Icons-Web and Admin/edit 1x.png";
import previewIcon from "../assests/Icons-Web and Admin/Preview 1x.png";
import deleteIcon from "../assests/Icons-Web and Admin/Delete 1x.png";
import "./upload.css";

const UploadSection = () => {
  return (
    <div className="upload" style={{ height: "100vh" }}>
      <AdminPanel />
      <div
        style={{
          paddingLeft: "11rem",
          paddingTop: "1.3rem",
          background: "#e7e7e7",
        }}
      >
        <input
          className="pl-5 "
          // type="file"
          placeholder="Upload File"
          accept="application/pdf"
          style={{
            width: "59rem",
            height: "2.2rem",
            borderRadius: "8px",
            border: "none",
            color: "dark",
            outline: "none",
          }}
        />
        <button
          className="p-2 ml-5 text-white"
          style={{
            background: "#4997de",
            width: "10.9rem",
            height: "2.5rem",
            border: "none",
            outline: "none",
            borderRadius: "8px",
          }}
        >
          Submit
        </button>
      </div>
      <div className="mt-4 mr-4" style={{ paddingLeft: "11rem" }}>
        <table className="table table-bordered text-center">
          <thead className="" style={{ background: "#e7e7e7" }}>
            <tr>
              <th scope="col">S.NO.</th>
              <th scope="col">FILE NAME</th>
              <th scope="col" className="ml-5 bg-primary">
                FILE URL
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
              <td className="">
                <span className="p-2 ">
                  <img src={previewIcon} alt="preview" width={32} height={33} />
                </span>
                <span className="pl-3 pr-3 ">
                  <img src={editIcon} alt="edit" width={32} height={33} />
                </span>
                <span className="">
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

export default UploadSection;
