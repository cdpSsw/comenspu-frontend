import React, { useEffect, useState } from "react";
import Axios from "axios";
import Footer from "../components/Footer";
// import notFound from "../../assets/images/page-not-found.svg";

const API_URL = import.meta.env.VITE_API_URL;

const showcase = () => {
  // Get *Approved Showcase
  const [showcase, setShowcase] = useState([]);
  // console.log(showcase);

  const handleShowcase = async () => {
    try {
      const res = await Axios.get(`${API_URL}/studentShowcase/approved`, {
        withCredentials: true,
      });

      if (res.status === 200) {
        setShowcase(res.data);
      } else {
        alert(`Get Approved Showcase failed.`);
      }
    } catch (err) {
      alert(`Internal server error: ${err.message}`);
    }
  };

  useEffect(() => {
    document.title = "Showcase (Files) | Comen - SPU";
    handleShowcase();
  }, []);
  
  const [images, setImages] = useState([]);
  // console.log(images)
  const handleGetImages = async () => {
    try {
      const res = await Axios.get(`${API_URL}/studentShowcase/images`, {
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


  return (
    <main className="user-showcase-container">
      <article className="top-container">
        <h1 className="topic">Showcase (Files)</h1>
        <p className="desc">
          เวทีแสดงศักยภาพ ความคิดสร้างสรรค์
          และผลงานสุดโดดเด่นจากนักศึกษามหาวิทยาลัยศรีปทุม
          ที่นี่คือพื้นที่สำหรับการนำเสนอไอเดีย แรงบันดาลใจ
          และความสามารถของนักศึกษาผ่านผลงานที่หลากหลาย
        </p>
      </article>

      {showcase.length == 0 ? (
        <section className="not-found-container">
          {/* <img src={notFound} className="svg-not-found" /> */}
        </section>
      ) : (
        <article className="content-container row m-0">
          {showcase.map((showcaseItem, idx) => {
            const showcaaseImages = images.filter(
              (img) => img.id === showcaseItem.id
            );
            return(
              <section key={idx} className="content-card-container col-md-3">
              {/* Card ที่มี hover effect */}
              <section className="content-card-1 ih-item square effect3 bottom_to_top">
                {/* <img
                  src={`${API_URL}/images/stu_showcase/${showcaseItem.image}`}
                  alt={showcaseItem.topic}
                  className="content-img"
                /> */}
                {/* กล่องข้อมูลที่จะเลื่อนขึ้นมา */}
                {showcaaseImages.length > 0 && (
                  <img
                    key={showcaseItem.id}
                    src={showcaaseImages[0].image}
                    alt={`img-${showcaaseImages[0].id}`}
                    className="content-img"
                  />
                )}
                <div className="info">
                  <h3 className="topic">{showcaseItem.topic}</h3>
                  <p className="desc">{showcaseItem.description}</p>
                </div>
              </section>
            </section>
            );
          })}
        </article>
      )}
      <Footer />
    </main>
  );
};

export default showcase;
