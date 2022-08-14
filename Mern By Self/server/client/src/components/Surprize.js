import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import number from "../images/number.png";
const Surprize = () => {
  const emojis = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCAWWw95qO1pyDduDOb3x6TRnsc3_1Yh1imczE4IyjJ6T9-GUz0Tio-GafMzqCUirGPNw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIxWTGP1IoRDgDUVUYtQQAKN-lgRrgMUy2VQ&usqp=CAU",
    "https://i.guim.co.uk/img/media/d325182bd10baf8634784b7c6d0349930b8a8677/0_0_1592_1592/master/1592.png?width=700&quality=85&auto=format&fit=max&s=93b9159b3d7feca091956045d306fd69",
    "https://shscourier.com/wp-content/uploads/2017/03/paper-plane.jpg",
  ];
  const [student, setStudentData] = useState([]);

  const callStudentsData = async () => {
    try {
      const res = await fetch("/studentsurprize", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();

      setStudentData(data);

      if (!res.status === 200) {
        console.log("No Data Found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callStudentsData();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          {student.length != 0 ? (
            student.map((ele, i) => {
              return (
                <div
                  key={ele._id}
                  className="col-md-3 data p-1 col-10 col-lg-3 col-sm-5 col-xs-5 mx-auto mt-2"
                >
                  <div className="number">
                    <h1 className="text-center text-danger">{i + 1}</h1>
                  </div>
                  <div className="emoji">
                    <img
                      src={emojis[Math.round(Math.random() * emojis.length)]}
                      alt=""
                    />
                  </div>
                  <div className="text">
                    <div className="row">
                      <div className="col-12 col-md-12 d-flex justify-content-between mb-2">
                        <h5 className="text-left mx-5 text-capitalize">
                          {ele.name}
                        </h5>
                      </div>
                      <div className="col-12 col-md-12 d-flex justify-content-between ">
                        <h5 className="text-left ">
                          <i
                            className="fa fa-instagram text-primary mx-2"
                            aria-hidden="true"
                          ></i>
                          Instagram
                        </h5>
                        <h5 className="mr-2 text-success">
                          +{ele.instafollower}
                        </h5>
                      </div>
                      <div className="col-12 col-md-12 d-flex justify-content-between ">
                        <h5 className="text-left ">
                          <i
                            className="fa fa-github mx-2 text-success"
                            aria-hidden="true"
                          ></i>
                          Github
                        </h5>
                        <h5 className="mr-2 text-success">
                          +{ele.githubfollower}
                        </h5>
                      </div>
                      <div className="col-12 col-md-12 d-flex justify-content-between ">
                        <h5 className="text-left ">
                          <i
                            className="fa fa-youtube mx-2 text-danger"
                            aria-hidden="true"
                          ></i>
                          Youtube
                        </h5>
                        <h5 className="mr-2 text-success">+{ele.subscribe}</h5>
                      </div>
                      <hr />
                      <hr />
                      <div className="col-12 col-md-12 d-flex justify-content-between ">
                        <h5 className="text-left text-danger">
                          <i
                            className="fa fa-ravelry mx-2"
                            aria-hidden="true"
                          ></i>
                          Total
                        </h5>
                        <h5 className="mr-2 text-danger">
                          {ele.instafollower +
                            ele.githubfollower +
                            ele.subscribe}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </>
  );
};

export default Surprize;
