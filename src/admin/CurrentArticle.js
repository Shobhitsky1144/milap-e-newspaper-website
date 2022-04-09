import React from "react";
import AdminPanel from "./AdminPanel";
import "./upload.css";

const CurrentArticle = () => {
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
          Current Articles
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
          + Add New Article
        </button>
      </div>
      <div className="mt-4 mr-4" style={{ paddingLeft: "11rem" }}>
        <table className="table table-bordered text-center">
          <thead className="" style={{ background: "#e7e7e7" }}>
            <tr>
              <th scope="col">S.NO.</th>
              <th scope="col">FILE NAME</th>
              <th scope="col" className="ml-5 ">
                FILE URL
              </th>
              <th scope="col" className="">
                DATE
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

export default CurrentArticle;
