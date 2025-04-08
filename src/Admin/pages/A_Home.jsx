import React, { useState, useEffect } from "react";
import Axios from "axios";

import ev1 from "../../DAssets/exposter/ev1.png";
import ev2 from "../../DAssets/exposter/ev2.png";
import ev3 from "../../DAssets/exposter/ev3.png";

// Components
import A_Main from "../A_Main";
import Modal from "../../EComponents/Modal";

const API_URL = import.meta.env.VITE_API_URL;

const A_Home = () => {
  const [openShowFiles, setOpenShowFiles] = useState(false);
  const [openShowTiktok, setOpenShowTiktok] = useState(false);
  const [openComp, setOpenComp] = useState();

  const showcaseInfo = [
    {
      topic: "Our Showcase (Files)",
      description:
        "เวทีแสดงศักยภาพ ความคิดสร้างสรรค์และผลงานสุดโดดเด่นจากนักศึกษามหาวิทยาลัยศรีปทุมที่นี่คือพื้นที่สำหรับการนำเสนอไอเดีย แรงบันดาลใจและความสามารถของนักศึกษาผ่านผลงานที่หลากหลาย",
    },
  ];
  const showcaseA = [
    {
      id: 1,
      studentID: "64053441",
      image: ev1,
      topic: "Main Topic #1",
      description: "Description Support Topic",
      status: "Approved",
    },
    {
      id: 2,
      studentID: "64053441",
      image: ev2,
      topic: "Main Topic #2",
      description: "Description Support Topic",
      status: "Approved",
    },
    {
      id: 3,
      studentID: "64053441",
      image: ev3,
      topic: "Main Topic #3",
      description: "Description Support Topic",
      status: "Approved",
    },
  ];

  // ------------------------------------- SHOWCASE --------------------------------------------
  // GET *SELECTED SHOWCASE
  const [showcase, setShowcases] = useState([]);
  // console.log(showcase)

  const handleGetSelectedShowcase = async () => {
    try {
      const res = await Axios.get(`${API_URL}/selectedShowcase`);
      if (res.status === 200) {
        setShowcases(res.data);
      } else {
        alert(`Get Selected Showcase Failed.`);
      }
    } catch (err) {
      alert(`Internal server error ${err}`);
    }
  };

  useEffect(() => {
    handleGetSelectedShowcase();
  }, []);

  const [images, setImages] = useState([]);
  // console.log(images)
  const handleGetImages = async () => {
    try {
      const res = await Axios.get(`${API_URL}/selectedShowcase/images`, {
        withCredentials: true,
      });
      // console.log("res", res.data);

      if (res.status === 200) {
        setImages(res.data);
      } else {
        alert(`Error to get Showcase, for this id: ${id}`);
      }
    } catch (err) {
      alert(`Internal server ${err}`);
    }
  };

  useEffect(() => {
    handleGetImages();
  }, []);

  // Showcase (Files) Management
  const [oldCase, setOldCase] = useState([]);
  const [topicCase, setTopicCase] = useState("");
  const [descCase, setDescCase] = useState("");

  // ------------------------------------- SHOWCASE --------------------------------------------
  const showtiktokInfo = [
    {
      topic: "Our Showcase (Tiktok)",
      description:
        "เวทีแสดงศักยภาพ ความคิดสร้างสรรค์และผลงานสุดโดดเด่นจากนักศึกษามหาวิทยาลัยศรีปทุมที่นี่คือพื้นที่สำหรับการนำเสนอไอเดีย แรงบันดาลใจและความสามารถของนักศึกษาผ่านผลงานที่หลากหลาย",
    },
  ];
  const showTiktokA = [
    {
      id: 1,
      studentID: "64053441",
      topic: "Ex Topic #1 ",
      description: "Description Support Topic",
      embed:
        '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@impeanuts/video/7477057682168384786" data-video-id="7477057682168384786" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@impeanuts" href="https://www.tiktok.com/@impeanuts?refer=embed">@impeanuts</a> เด็กคอมรัน  เขียนโค้ด ❌ แก้โค้ด ✅ <a title="spu" target="_blank" href="https://www.tiktok.com/tag/spu?refer=embed">#spu</a> <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a> <a target="_blank" title="♬ original sound - sp99d.s0ngs" href="https://www.tiktok.com/music/original-sound-7071809975861005099?refer=embed">♬ original sound - sp99d.s0ngs</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>',
      status: "Approved",
    },
    {
      id: 2,
      studentID: "64053441",
      topic: "Ex Topic #2 ",
      description: "Description Support Topic",
      embed:
        '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@bunniebinie/video/7477156937201782024" data-video-id="7477156937201782024" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@bunniebinie" href="https://www.tiktok.com/@bunniebinie?refer=embed">@bunniebinie</a> <a title="cpe" target="_blank" href="https://www.tiktok.com/tag/cpe?refer=embed">#CPE</a> <a title="it_spu" target="_blank" href="https://www.tiktok.com/tag/it_spu?refer=embed">#it_spu</a> <a title="spu" target="_blank" href="https://www.tiktok.com/tag/spu?refer=embed">#spu</a> <a target="_blank" title="♬ original sound - Hellomello - Hellomellooo" href="https://www.tiktok.com/music/original-sound-Hellomello-7477157015078308624?refer=embed">♬ original sound - Hellomello - Hellomellooo</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>',
      status: "Approved",
    },
    {
      id: 3,
      studentID: "64053441",
      topic: "Ex Topic #1 ",
      description: "Description Support Topic",
      embed:
        '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@sripatum.spu/video/7368684229170957576" data-video-id="7368684229170957576" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@sripatum.spu" href="https://www.tiktok.com/@sripatum.spu?refer=embed">@sripatum.spu</a> <p>สาย IT ต้องห้ามพลาด‼️ คณะเทคโนฯ มัดรวมความรู้ จัดเต็มอัดแน่นมาให้น้องๆ แล้วว ถ้าเรื่อง IT มันใช่ มาสมัครเป็น DEK IT SPU ได้เลย #คณะเทคโนโลยีสารสนเทศ #มหาวิทยาลัยศรีปทุม #SPU #SripatumUniversity #Dek67 #TCAS67 #TGAT67 #TPAT67</p> <a target="_blank" title="♬ เสียงต้นฉบับ  - Sripatum University SPU" href="https://www.tiktok.com/music/เสียงต้นฉบับ-Sripatum-University-SPU-7368684324280896257?refer=embed">♬ เสียงต้นฉบับ  - Sripatum University SPU</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>',
      status: "Waiting",
    },
  ];

  // GET *SELECTED SHOWTIKTOK
  const [showTiktok, setShowTiktok] = useState([]);
  // console.log(showTiktok);

  const handleGetSelectedShowtiktok = async () => {
    try {
      const res = await Axios.get(`${API_URL}/selectedShowTiktok`);
      if (res.status === 200) {
        setShowTiktok(res.data);
      } else {
        alert(`Get Selected Showcase Failed.`);
      }
    } catch (err) {
      alert(`Internal server error ${err}`);
    }
  };

  useEffect(() => {
    handleGetSelectedShowtiktok();
  }, []);

  //   showcase (Tiktok) Management
  const [oldTiktok, setOldTiktok] = useState([]);
  const [topicTiktok, setTopicTiktok] = useState("");
  const [descTiktok, setDescTiktok] = useState("");

  // Handle Cancel Button
  const handleCancel = () => {
    document.getElementById("topicCase").value = "";
    document.getElementById("descCase").value = "";
  };

  // Load Tiktok
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [showTiktok]);

  return (
    <>
      {openComp ? (
        <A_Main showComp={openComp} setSelectComp1={setOpenComp} />
      ) : (
        <main className="a-home-container">
          <article className="top-container">
            <h1 className="topic">
              Welcome to <strong>Admin</strong> Dashboard
            </h1>
          </article>
          <hr />

          <article className="content-container row m-0">
            <section className="left-side col-md-6">
              {showcaseInfo.map((showcaseInfo, idx) => (
                <section key={idx} className="showcase-files-container">
                  <section className="top-container">
                    <h1 className="topic">Showcase (Files) Managemnet </h1>

                    <section className="setting-container">
                      <i
                        className="bi bi-three-dots"
                        onClick={() => setOpenShowFiles(!openShowFiles)}
                      ></i>

                      {openShowFiles && (
                        <ul className="setting-items">
                          <li>
                            <button
                              data-bs-toggle="modal"
                              data-bs-target="#modal-edit-showcase"
                              onClick={() => setOldCase(showcaseInfo)}
                            >
                              Edit Information
                            </button>
                          </li>
                          {/* <li>
                            <button onClick={handleViewAllShowcase}>
                              View All Showcase
                            </button>
                          </li> */}
                        </ul>
                      )}
                    </section>
                  </section>
                  <div className="hr"></div>

                  <section className="info-container">
                    <h1 className="topic">
                      Topic: <span>{showcaseInfo.topic}</span>
                    </h1>
                    <p className="desc">
                      Description: <span>{showcaseInfo.description}</span>
                    </p>
                  </section>

                  <section className="showcase-container row m-0">
                    {showcase.map((showcaseItem, idx) => {
                      const showcaaseImages = images.filter(
                        (img) => img.id === showcaseItem.id
                      );
                      return (
                        <section key={idx} className="col-md-6">
                          <section className="showcase-card">
                            {/* <img
                          // src={showcaseItem.image}
                          src={`${API_URL}/images/stu_showcase/${showcaseItem.image}`}
                          alt={showcaseItem.topic}
                          className="showcase-image"
                        /> */}
                            {showcaaseImages.length > 0 && (
                              <img
                                key={showcaseItem.id}
                                src={showcaaseImages[0].image}
                                alt={`img-${showcaaseImages[0].id}`}
                                className="showcase-image"
                              />
                            )}
                            <section className="text-container">
                              {showcaseItem.status === "Approved" ? (
                                <span
                                  className={`status
                      ${showcaseItem.status === "Approved" ? "Approved" : ""}
                    `}
                                >
                                  <i className="bi bi-check-circle-fill"></i>
                                  {showcaseItem.status}
                                </span>
                              ) : (
                                <span
                                  className={`status
                      ${showcaseItem.status === "Waiting" ? "Waiting" : ""}
                    `}
                                  data-bs-toggle="modal"
                                  data-bs-target="#modal-approve"
                                  onClick={() => setApproveItem(showcaseItem)}
                                >
                                  <i className="bi bi-clock-fill"></i>
                                  {showcaseItem.status}
                                </span>
                              )}

                              <section>
                                <p className="id">
                                  Student ID: {showcaseItem.studentID}
                                </p>
                                <h1 className="topic">{showcaseItem.topic}</h1>
                                <p className="desc">
                                  {showcaseItem.description}
                                </p>
                              </section>
                            </section>
                          </section>
                        </section>
                      );
                    })}
                  </section>
                </section>
              ))}
            </section>

            <section className="right-side col-md-6">
              {showtiktokInfo.map((showtiktokInfo, idx) => (
                <section key={idx} className="showtiktok-files-container">
                  <section className="top-container">
                    <h1 className="topic">Showcase (Files) Managemnet </h1>
                    <section className="setting-container">
                      <i
                        className="bi bi-three-dots"
                        onClick={() => setOpenShowTiktok(!openShowTiktok)}
                      ></i>

                      {openShowTiktok && (
                        <ul className="setting-items">
                          <li>
                            <button
                              data-bs-toggle="modal"
                              data-bs-target="#modal-edit-showtiktok"
                              onClick={() => setOldTiktok(showtiktokInfo)}
                            >
                              Edit Information
                            </button>
                          </li>
                          {/* <li>
                            <button onClick={handleViewAllShowcase}>
                              View All Showcase
                            </button>
                          </li> */}
                        </ul>
                      )}
                    </section>
                  </section>
                  <div className="hr"></div>

                  <section className="info-container">
                    <h1 className="topic">
                      Topic: <span>{showtiktokInfo.topic}</span>
                    </h1>
                    <p className="desc">
                      Description: <span>{showtiktokInfo.description}</span>
                    </p>
                  </section>

                  <section className="showtiktok-container row m-0">
                    {showTiktok.map((showTiktokItem, idx) => (
                      <section key={idx} className="col-lg-12">
                        <section className="showtiktok-card">
                          <section
                            className="content-tiktok"
                            key={idx}
                            dangerouslySetInnerHTML={{
                              __html: showTiktokItem.embed,
                            }}
                          />

                          <section className="text-container">
                            {showTiktokItem.status === "Approved" ? (
                              <span
                                className={`status
                        ${
                          showTiktokItem.status === "Approved" ? "Approved" : ""
                        }
                      `}
                              >
                                <i className="bi bi-check-circle-fill"></i>
                                {showTiktokItem.status}
                              </span>
                            ) : (
                              <span
                                className={`status
                        ${showTiktokItem.status === "Waiting" ? "Waiting" : ""}
                      `}
                                data-bs-toggle="modal"
                                data-bs-target="#modal-approve"
                                onClick={() => setApproveItem(showTiktokItem)}
                              >
                                <i className="bi bi-clock-fill"></i>
                                {showTiktokItem.status}
                              </span>
                            )}

                            <section>
                              <p className="id">
                                Student ID: {showTiktokItem.studentID}
                              </p>
                              <h1 className="topic">{showTiktokItem.topic}</h1>
                              <p className="desc">
                                {showTiktokItem.description}
                              </p>
                            </section>
                          </section>
                        </section>
                      </section>
                    ))}
                  </section>
                </section>
              ))}
            </section>
          </article>
        </main>
      )}

      <Modal
        modalID="modal-edit-showcase"
        modalHeaderStyle="d-none"
        modalFooterStyle="d-none"
        modalBodyContent={
          <form className="a-home-form">
            <h1 className="topic">Edit Showcase</h1>

            <div className="input-box">
              <label htmlFor="topicCase" className="form-label mb-2">
                * Topic
              </label>
              <input
                type="text"
                name="topicCase"
                id="topicCase"
                placeholder={oldCase.topic}
                className="form-control mb-3"
                onChange={(e) => setTopicCase(e.target.value)}
              />
            </div>

            <div className="input-box">
              <label htmlFor="descCase" className="form-label mb-2">
                * Description
              </label>
              <textarea
                type="text"
                name="descCase"
                id="descCase"
                placeholder={oldCase.description}
                className="form-control mb-3"
                onChange={(e) => setDescCase(e.target.value)}
              ></textarea>
            </div>

            <section className="btn-container">
              <button
                data-bs-dismiss="modal"
                className="btn btn-cancel"
                onClick={handleCancel}
              >
                Cancel
              </button>

              <button className="btn btn-update">Update</button>
            </section>
          </form>
        }
      />

      <Modal
        modalID="modal-edit-showtiktok"
        modalHeaderStyle="d-none"
        modalFooterStyle="d-none"
        modalBodyContent={
          <form className="a-home-form">
            <h1 className="topic">Edit Showcase</h1>

            <div className="input-box">
              <label htmlFor="topicTiktok" className="form-label mb-2">
                * Topic
              </label>
              <input
                type="text"
                name="topicTiktok"
                id="topicTiktok"
                placeholder={oldTiktok.topic}
                className="form-control mb-3"
                onChange={(e) => setTopicTiktok(e.target.value)}
              />
            </div>

            <div className="input-box">
              <label htmlFor="descTiktok" className="form-label mb-2">
                * Description
              </label>
              <textarea
                type="text"
                name="descTiktok"
                id="descTiktok"
                placeholder={oldTiktok.description}
                className="form-control mb-3"
                onChange={(e) => setDescTiktok(e.target.value)}
              ></textarea>
            </div>

            <section className="btn-container">
              <button
                data-bs-dismiss="modal"
                className="btn btn-cancel"
                onClick={handleCancel}
              >
                Cancel
              </button>

              <button className="btn btn-update">Update</button>
            </section>
          </form>
        }
      />
    </>
  );
};

export default A_Home;
