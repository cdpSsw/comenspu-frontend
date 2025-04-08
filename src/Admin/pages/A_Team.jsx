import React, { useState, useEffect } from "react";
import Axios from "axios";

// Components
import Modal from "../../EComponents/Modal";
import ModalDel from "../../EComponents/ModalDel";

import J from "../../DAssets/person/j.png";
import N from "../../DAssets/person/n.png";
import B from "../../DAssets/person/b.png";
import P from "../../DAssets/person/p.png";

const API_URL = import.meta.env.VITE_API_URL;

const A_Team = () => {
  // PREVIEW INFO
  const [selectedInfo, setSelectedInfo] = useState([]);
  const [selectedImage, setSelectedImage] = useState([]);
  // console.log(selectedInfo);

  // GET ALL *TEAMS
  // const teamsA = [
  //   {
  //     id: 1,
  //     image: J,
  //     name: "ผู้ช่วยศาสตราจารย์ จิโรจน์ จริตควร",
  //     position: "หัวหน้าสาขาวิชาวิศวกรรมคอมพิวเตอร์",
  //     educations: [
  //       "ปริญญาโท: M.Eng. (Microelectronics) Asian Institute of Technology, Thailand",
  //       "ปริญญาตรี: วิศวกรรมศาสตรบัณฑิต (วิศวกรรมไฟฟ้า) มหาวิทยาลัยศรีปทุม",
  //     ],
  //     expertises: [
  //       "Hardware. Digital.& analog circuit.design",
  //       "IoT (Embedded system)",
  //       "Robotics and Hardware Interfaces",
  //     ],
  //     // experience: [
  //     //   {
  //     //     expLocation: "คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม",
  //     //     expPosition: "หัวหน้าสาขาวิศวกรรมคอมพิวเตอร์ (2553 – ปัจจุบัน)",
  //     //   },
  //     //   {
  //     //     expLocation: "คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม",
  //     //     expPosition: "อาจารย์ประจำ (2551 – 2552)",
  //     //   },
  //     //   {
  //     //     expLocation: "คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม",
  //     //     expPosition: "หัวหน้าสาขาวิศวกรรมคอมพิวเตอร์ (2547 – 2551)",
  //     //   },
  //     //   {
  //     //     expLocation: "คณะสารสนเทศศาสตร์ มหาวิทยาลัยศรีปทุม",
  //     //     expPosition: "ตำแหน่ง: อาจารย์ประจำ (2543 – 2547)",
  //     //   },
  //     // ],
  //     expLocations: [
  //       "คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม",
  //       "คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม",
  //       "คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม",
  //       "คณะสารสนเทศศาสตร์ มหาวิทยาลัยศรีปทุม",
  //     ],
  //     expPositions: [
  //       "หัวหน้าสาขาวิศวกรรมคอมพิวเตอร์ (2553 – ปัจจุบัน)",
  //       "อาจารย์ประจำ (2551 – 2552)",
  //       "หัวหน้าสาขาวิศวกรรมคอมพิวเตอร์ (2547 – 2551)",
  //       "ตำแหน่ง: อาจารย์ประจำ (2543 – 2547)",
  //     ],
  //     tels: ["0 2579 1111 ต่อ 2197", "0 2579 1111 ต่อ 2197"],
  //     emails: "chirot.ch@spu.ac.th",
  //     websites: "https://chirotch.wixsite.com/chirot-charitkhuan",
  //   },
  //   {
  //     id: 2,
  //     image: B,
  //     name: "ดร.สุรชัย ทองแก้ว",
  //     position: "อาจารย์ประจำ",
  //     educations: [
  //       "ปริญญาเอก: Ph.D. (Communication and Integrated Systems), Tokyo Institute of Technology, Japan",
  //       "ปริญญาโท: M.E. (Microelectronics), Asian Institute of Technology, Thailand",
  //       "ปริญญาตรี: B.E. (Computer Engineering), Sripatum University, Thailand",
  //     ],
  //     expertises: [
  //       " IoT Solution",
  //       "Hardware Programming",
  //       "Processor design and Computer Architecture",
  //       "Embedded systems",
  //     ],
  //     // experience: [
  //     //   {
  //     //     expLocation: "คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม",
  //     //     expPosition:
  //     //       "ตำแหน่ง: หัวหน้าสาขาสาขาวิชาเทคโนโลยีสารสนเทศและการสื่อสาร (พ.ศ.2565 – ปัจจุบัน)",
  //     //   },
  //     //   {
  //     //     expLocation: "คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม",
  //     //     expPosition:
  //     //       "อาจารย์ประจำสาขาวิชาวิศวกรรมคอมพิวเตอร์ (พ.ศ.2543 – ปัจจุบัน)",
  //     //   },
  //     //   {
  //     //     expLocation: "คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม",
  //     //     expPosition: "ผู้ช่วยคณบดีฝ่ายกิจการนักศึกษา (พ.ศ.2549 -2553)",
  //     //   },
  //     // ],
  //     expLocations: [
  //       "คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม",
  //       "คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม",
  //       "คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม",
  //     ],
  //     expPositions: [
  //       "ตำแหน่ง: หัวหน้าสาขาสาขาวิชาเทคโนโลยีสารสนเทศและการสื่อสาร (พ.ศ.2565 – ปัจจุบัน)",
  //       "อาจารย์ประจำสาขาวิชาวิศวกรรมคอมพิวเตอร์ (พ.ศ.2543 – ปัจจุบัน)",
  //       "ผู้ช่วยคณบดีฝ่ายกิจการนักศึกษา (พ.ศ.2549 -2553)",
  //     ],
  //     researchs: [
  //       "ปฏิภาณ ศรีสวัสดิ์, สุรชัย ทองแก้ว. “อินเทอร์เน็ตประสานสรรพสิ่งควบคุมน้ำ และปุ๋ยในฟาร์มเมล่อนคิโมจิ.”. (2563). รายงานสืบเนื่องจากการประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2020). ครั้งที่ 15. มหาวิทยาลัยศรีปทุม.หน้า 1643-1652.",
  //       "นริศรา จิตต์เที่ยง, สรวีย์ นีรนาถภูวดล, ภาสกร พรสี่, นิมิตร ทักษวิทยาพงศ์, สุรชัย ทองแก้ว. “อุปกรณ์เสริมตรวจจับวัตถุและช่วยเหลือการเดินทางสําหรับผู้พิการทางสายตา.”. (2562). รายงานสืบเนื่องจากการประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2019). ครั้งที่ 14. มหาวิทยาลัยศรีปทุม.หน้า 1828-1837.",
  //       "ยุทธศักดิ์ ฝูงพิลา, ศรัณย์ โนราช, ณัฐนันท์ โมราสุข, ผิน ฉัตรแก้วมณี, สุรชัย ทองแก้ว. “ระบบจัดการเวอร์ชั่นของอุปกรณ์อินเทอร์เน็ตในทุกสรรพสิ่งผ่านบริการคลาวด์.”. (2562). รายงานสืบเนื่องจากการประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2019). ครั้งที่ 14. มหาวิทยาลัยศรีปทุม.หน้า 1857-1865.",
  //       "อภิสิทธิ์ หมัดแสง, พุฒิสรรค์ แหสกุล, อนุรักษ์ แสงคํา, ผิน ฉัตรแก้วมณี, สุรชัย ทองแก้ว. “ระบบเฝ้าสังเกตอาการง่วงด้วยการประมวลผลด้วยภาพ.”. (2562). รายงานสืบเนื่องจากการประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2019). ครั้งที่ 14. มหาวิทยาลัยศรีปทุม.หน้า 1908-1917.",
  //       "ณัฐวุฒิ กอแก้วปฐมกุล, ธนพัฒน์ เด่นไกรรักษ์, กฤชบ์พัทธ์ สกุลชินสีห์, ผิน แก้วฉัตรมณี, สุรชัย ทองแก้ว. “ระบบวิเคราะห์กิจวัตรประจําวันสําหรับผ้สูงอาย.”. (2561). รายงานสืบเนื่องจากการประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2018). ครั้งที่ 13. มหาวิทยาลัยศรีปทุม.หน้า 2186-2194.",
  //       "สุรชัย ทองแก้ว, จิโรจน์ จริตควร และสัลยุทธ์ สว่างวรรณ. (2561). ระบบสมองกลฝังตัวเพื่อการประหยัดพลังงานเครื่องปรับอากาศแบบแยกส่วน โดยการควบคุมความเย็นสะสมของลมจ่ายออก. การประชุมวิชาการทางวิศกรรมไฟฟ้า ครั้งที่ 41, หน้า 166-169.",
  //       "วรพฤกษ์ คงเจริญ, วีรวัฒน์ แย้มโสม, นันทวัฒน์ ฮาบละคร,จิโรจน์ จริตควร,สุรชัย ทองแก้ว. “ระบบควบคุมการให้น้ำให้ปุ๋ยสําหรับการทําสวนกล้วยหอมทอง.”. (2561). รายงานสืบเนื่องจากการประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2018). ครั้งที่ 13. มหาวิทยาลัยศรีปทุม. หน้า 2297-2306.",
  //       "ไพวรรณ มะละ, ปราลี มณีรัตน์, สุขสวัสดี ณัฏฐวุฒิสิทธิ์, และสุรชัย ทองแก้ว. (2561). การพัฒนาระบบ วิเคราะห์ข้อมูลเตียงลมอัจฉริยะเพื่อลดอาการเกิดโรคแผลกดทับ. Sripatum Review of Science and Technology, 10(1), หน้า 88-101.",
  //       "วีรยุทธ แก้วเกษ, จิโรจน์ จริตควร, และสุรชัย ทองแก้ว. (2560). ระบบ IOT และฐานข้อมูลสำหรับการทดสอบปัจจัยการเจริญเติบโตของพืช. การประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม ครั้งที่ 12 ประจำปี 2560 (SPUCON2017), วันที่ 14 ธันวาคม 2560, หน้า 2207-2216",
  //       "กฤษฎา พรหมมา, ลักษมี เหมนรากร, สุรชัย ทองแก้ว, และจิโรจน์ จริตควร. (2560). อินเตอร์เน็ตทุกสรรพสิ่งสำหรับการควบคุมประสิทธิภาพของยาโดยการตรวจสอบอุณหภูมิ. การประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม ครั้งที่ 12 ประจำปี 2560 (SPUCON2017), วันที่ 14 ธันวาคม 2560, หน้า 2226-2236",
  //       "S. Thongkaew and C. Charitkuan .(2018). IoT for Energy Saving of Split-Type Air Conditioner by Controlling Supply Air and Area Temperature, .22nd International Computer Science and Engineering Conference (ICSEC), pp. 1-4, doi: 10.1109/ICSEC.2018.8712656.",
  //     ],
  //     tels: "0 2579 1111 ต่อ 2212",
  //     emails: ["surachai.th@spu.ac.th", "surachait@hotmail.com"],
  //     websites: "https://surachaith.wixsite.com/dr-bird",
  //   },
  //   {
  //     id: 3,
  //     image: N,
  //     name: "อาจารย์นิมิตร ทักษวิทยาพงศ์",
  //     position: "หัวหน้าสาขาวิชาวิศวกรรมคอมพิวเตอร์",
  //     educations: [
  //       "ปริญญาโท: M.Eng. (Microelectronics and Embedded Systems ) Asian Institute of Technology, Thailand",
  //       "ปริญญาตรี : วิศวกรรมศาสตรบัณฑิต (วิศวกรรมคอมพิวเตอร์) มหาวิทยาลัยศรีปทุม",
  //     ],
  //     expertises: [
  //       "Internet of Thing (IoT)",
  //       "Embedded system (hardware/software)",
  //       "Application development (web/mobile)",
  //     ],
  //     // experience: [
  //     //   {
  //     //     expLocation: "คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม",
  //     //     expPosition:
  //     //       "ตำแหน่ง: อาจารย์ประจำสาขาวิศวกรรมคอมพิวเตอร์ (พ.ศ.2549 – ปัจจุบัน)",
  //     //   },
  //     // ],
  //     expLocations: ["คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม"],
  //     expPositions: [
  //       "ตำแหน่ง: อาจารย์ประจำสาขาวิศวกรรมคอมพิวเตอร์ (พ.ศ.2549 – ปัจจุบัน)",
  //     ],
  //     researchs: [
  //       "นายการันต์ เศรษฐี, นายชนกันต์ อิ่มใจ, นิมิตร ทักษวิทยาพงศ์, ภูริลาภ จุฑาวัชระพล “แอปพลิเคชันดูแลสุขภาพด้วยนาฬิกาอัจฉริยะ” (2563) รายงานสืบเนื่อง (Proceedings) การประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2019) ครั้งที่ 15 มหาวิทยาลัยศรีปทุม. หน้า 1585-1595",
  //       "นพดล ชะนางวัลย์ , ณรงค์ชัย ชาติชาญชัย , นิรวิทธ์ อินดี, นิมิตร ทักษวิทยาพงศ์, ผศ.จิโรจน์ จริตควร “การพัฒนาระบบควบคุมอุณหภูมิอัจฉริยะสําหรับฟาร์มเลี้ยงไก่” (2562) รายงานสืบเนื่อง (Proceedings) การประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2019) ครั้งที่ 14 มหาวิทยาลัยศรีปทุม หน้า 1818-1827",
  //       "นริศรา จิตต์เท่ียง , สรวีย์ นีรนาถภูวดล , ภาสกร พรสี่, นิมิตร ทักษวิทยาพงศ์, ดร.สุรชัย ทองแก้ว “อุปกรณ์เสริมตรวจจับวัตถุและช่วยเหลือการเดินทางสําหรับผู้พิการทางสายตา” (2562) รายงานสืบเนื่อง (Proceedings) การประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2019) ครั้งที่ 14 มหาวิทยาลัยศรีปทุม หน้า 1828-1837",
  //       "ดุสิตา สีตาชัย, เชิดศักดิ์ ดงบัง, ธีรพงษ์ คงประเสริฐ, ดร.สุรชัย ทองแก้ว, นิมิตร ทักษวิทยาพงศ์ “อินเทอร์เน็ตของทุกสรรพสิ่งสำหรับตรวจสอบสุขภาพจิตกลุ่มเสี่ยงภาวะโรคซึมเศร้า” (2561) รายงานสืบเนื่อง (Proceedings) การประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2018) ครั้งที่ 13 มหาวิทยาลัยศรีปทุม หน้า 2195-2204",
  //       "นิมิตร ทักษวิทยาพงศ์, กันยารัตน์ ศรีวิสทิยกุล, กฤษณ์ ไชยวงศ์ “อินเตอร์เน็ตของทุกสรรพสิ่งสำหรับระบบเพิ่มประสิทธิภาพผลผลิตและประหยัดพลังงานส าหรับฟาร์มกล้วยหอมทอง” (2561) รายงานสืบเนื่อง (Proceedings) การประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2018) ครั้งที่ 13 มหาวิทยาลัยศรีปทุม หน้า 2236-2246",
  //       "ผิน ฉัตรแก้วมณี, นิมิตร ทักษวิทยาพงศ์ “อินเตอร์เน็ตของทุกสรรพสิ่งสําหรับโรงเพาะเห็ดอัจฉริยะ” (2560) รายงานสืบเนื่อง (Proceedings) การประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2017) ครั้งที่ 12 มหาวิทยาลัยศรีปทุม หน้า 2147-2156",
  //       "กนกพนธ์ นิลสวัสดิ์, วรากร ถาวร, ผิน ฉัตรแก้วมณี, นิมิตร ทักษวิทยาพงศ์ “ระบบลานจอดรถอัจฉริยะ” (2560) รายงานสืบเนื่อง (Proceedings) การประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2017) ครั้งที่ 12 มหาวิทยาลัยศรีปทุม หน้า 2198-2206",
  //       "บุญญาภา หรรษากานต์, จักรพงษ์ จันทร์ประทักษ์, นิมิตร ทักษวิทยาพงศ์, ผิน ฉัตรแก้วมณี “อินเตอร์เน็ตทุกสรรพสิ่งสําหรับถังขยะอัจฉริยะ” (2560) รายงานสืบเนื่อง (Proceedings) การประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2017) ครั้งที่ 12 มหาวิทยาลัยศรีปทุม หน้า 2217-2225",
  //       "นิพิชญ์ นิธิสุภา, เมธัส ชูจิตอธิคม, ประภาพร โปธาคํา, นิมิตร ทักษวิทยาพงศ์, ผิน ฉัตรแก้วมณี “อินเตอร์เน็ตในทุกสรรพส่ิงสําหรับระบบบันทึกการดิ้นของทารกในครรภ์” (2559) รายงานสืบเนื่อง (Proceedings) การประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2016) ครั้งที่ 11 มหาวิทยาลัยศรีปทุม หน้า 1417-1427",
  //       "ณัฐชากร คำยอด, ปริญญา แสนจันทร์, มนัสนันท์ หรั่งยิ้ม, สุรชัย ทองแก้ว, นิมิตร ทักษวิทยาพงศ์ “การวิเคราะห์ความอับชื้นเพื่อเปลี่ยนการใช้งานของผ้าอ้อมสำเร็จรูปสำหรับผู้สูงอายุ” (2559) รายงานสืบเนื่อง (Proceedings) การประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2016) ครั้งที่ 11 มหาวิทยาลัยศรีปทุม หน้า 1428-1437",
  //       "มานพ เกษประดิษฐ์, พิชัย แนวดี, สุรชัย ทองแก้ว, จิโรจน์ จริตควร, นิมิตร ทักษวิทยาพงศ์ “ระบบอินเตอร์เน็ตในทุกสรรพสิ่งสําหรับควบคุมน้ำในนาข้าว” (2559) รายงานสืบเนื่อง (Proceedings) การประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2016) ครั้งที่ 11 มหาวิทยาลัยศรีปทุม หน้า 1602-1612",
  //     ],
  //     tels: "0 2579 1111 ต่อ 2212",
  //     emails: "nimit.tu@spu.ac.th",
  //     websites: "https://nimittu.wixsite.com/spu-nimit",
  //   },
  //   {
  //     id: 4,
  //     image: P,
  //     name: "อาจารย์ภูริลาภ จุฑาวัชระพล",
  //     position: "อาจารย์ประจำ",
  //     educations: [
  //       "ปริญญาโท: วิทยาศาสตรมหาบัณฑิต (เทคโนโลยีสารสนเทศ) คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม",
  //       "ปริญญาตรี: วิศวกรรมศาสตรบัณฑิต (วิศวกรรมไฟฟ้า) มหาวิทยาลัยศรีปทุม",
  //       "ปริญญาตรี: วิทยาศาสตรบัณฑิต (วิทยาการคอมพิวเตอร์) คณะสารสนเทศศาสตร์ มหาวิทยาลัยศรีปทุม",
  //       "ประกาศนียบัตร: Java Certification",
  //       "ประกาศนียบัตร: Web 2.0 Certification",
  //     ],
  //     expertises: [
  //       "Programming",
  //       "Mobile Developer",
  //       "Web Programming",
  //       "Database System",
  //     ],
  //     // experience: [
  //     //   {
  //     //     expLocation: "คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม",
  //     //     expPosition:
  //     //       "ตำแหน่ง: อาจารย์ประจำสาขาวิชาวิศวกรรมคอมพิวเตอร์ (พ.ศ.2544-ปัจจุบัน)",
  //     //   },
  //     // ],
  //     expLocations: ["คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม"],
  //     expPositions: [
  //       "ตำแหน่ง: อาจารย์ประจำสาขาวิชาวิศวกรรมคอมพิวเตอร์ (พ.ศ.2544-ปัจจุบัน)",
  //     ],
  //     tels: "0 2579 1111 ต่อ 2212",
  //     emails: "purilarp.ch@spu.ac.th",
  //     websites: "https://purilarpch.wixsite.com/myprofile",
  //   },
  // ];

  const [teams, setTeam] = useState([]);
  // console.log("teams", teams);

  const handelGetAllTeam = async () => {
    try {
      const res = await Axios.get(`${API_URL}/teams`, {
        withCredentials: true,
      });

      setTeam(
        res.data.map((item) => {
          return {
            ...item,
            tels: item.tel.split("/"),
            emails: item.email.split("/"),
            websites: item.website.split("/"),
            researchs: item.research.split("/"),
            educations: item.education.split("/"),
            expertises: item.expertise.split("/"),
            expLocations: item.expLocation.split("/"),
            expPositions: item.expPosition.split("/"),
          };
        })
      );
    } catch (error) {
      console.error("Error fetching team data:", error);
    }
  };

  useEffect(() => {
    handelGetAllTeam();
  }, []);

  const [images, setImages] = useState([]);
  // console.log(images);
  const handleGetImages = async () => {
    try {
      const res = await Axios.get(`${API_URL}/teams/images`, {
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

  // POST NEW *TEAM
  const [previewImage, setPreviewImage] = useState();
  const [image, setImage] = useState();
  const [position, setPosition] = useState("");
  const [name, setName] = useState("");
  const [educations, setEducations] = useState([""]);
  const [expertises, setExpertises] = useState([""]);
  const [expLocations, setExpLocations] = useState([""]);
  const [expPositions, setExpPositions] = useState([""]);
  const [researchs, setResearchs] = useState([""]);
  const [tels, setTels] = useState([""]);
  const [emails, setEmails] = useState([""]);
  const [websites, setWebsites] = useState([""]);

  const handleImage = (e) => {
    setImage(e);
    setPreviewImage(URL.createObjectURL(e));
  };

  // ฟังก์ชันที่ใช้ร่วมกันสำหรับการเปลี่ยนค่าใน array ต่างๆ
  const handleFieldChange = (index, value, type) => {
    const updatedFields =
      type === "tels"
        ? [...tels]
        : type === "emails"
        ? [...emails]
        : type === "websites"
        ? [...websites]
        : type === "educations"
        ? [...educations]
        : type === "expertises"
        ? [...expertises]
        : type === "experience"
        ? [...experience]
        : type === "researchs"
        ? [...researchs]
        : type === "expLocations"
        ? [...expLocations]
        : type === "expPositions"
        ? [...expPositions]
        : [];

    updatedFields[index] = value;
    type === "tels"
      ? setTels(updatedFields)
      : type === "emails"
      ? setEmails(updatedFields)
      : type === "websites"
      ? setWebsites(updatedFields)
      : type === "educations"
      ? setEducations(updatedFields)
      : type === "expertises"
      ? setExpertises(updatedFields)
      : type === "experience"
      ? setExperience(updatedFields)
      : type === "researchs"
      ? setResearchs(updatedFields)
      : type === "expLocations"
      ? setExpLocations(updatedFields)
      : type === "expPositions"
      ? setExpPositions(updatedFields)
      : null;
  };

  // ฟังก์ชันที่ใช้ร่วมกันสำหรับการเพิ่มค่าใน array ต่างๆ
  const handleAddField = (type) => {
    type === "tels"
      ? setTels([...tels, ""])
      : type === "emails"
      ? setEmails([...emails, ""])
      : type === "websites"
      ? setWebsites([...websites, ""])
      : type === "educations"
      ? setEducations([...educations, ""])
      : type === "expertises"
      ? setExpertises([...expertises, ""])
      : type === "researchs"
      ? setResearchs([...researchs, ""])
      : type === "expLocations"
      ? setExpLocations([...expLocations, ""])
      : type === "expPositions"
      ? setExpPositions([...expPositions, ""])
      : null;
  };

  // ฟังก์ชันที่ใช้ร่วมกันสำหรับการลบค่าใน array ต่างๆ
  const handleDeleteField = (index, type) => {
    const updatedFields =
      type === "tels"
        ? [...tels]
        : type === "emails"
        ? [...emails]
        : type === "websites"
        ? [...websites]
        : type === "educations"
        ? [...educations]
        : type === "expertises"
        ? [...expertises]
        : type === "researchs"
        ? [...researchs]
        : type === "expLocations"
        ? [...expLocations]
        : type === "expPositions"
        ? [...expPositions]
        : [];

    updatedFields.splice(index, 1);
    type === "tels"
      ? setTels(updatedFields)
      : type === "emails"
      ? setEmails(updatedFields)
      : type === "websites"
      ? setWebsites(updatedFields)
      : type === "educations"
      ? setEducations(updatedFields)
      : type === "expertises"
      ? setExpertises(updatedFields)
      : type === "researchs"
      ? setResearchs(updatedFields)
      : type === "expLocations"
      ? setExpLocations(updatedFields)
      : type === "expPositions"
      ? setExpPositions(updatedFields)
      : null;
  };

  // POST *FUNCTION
  const handlePostTeam = async () => {
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("name", name);
      formData.append("position", position);
      formData.append(
        "education",
        educations.map((edu) => edu.trim()).join("/")
      );
      formData.append(
        "expertise",
        expertises.map((expt) => expt.trim()).join("/")
      );
      formData.append(
        "expLocation",
        expLocations.map((expL) => expL.trim()).join("/")
      );
      formData.append(
        "expPosition",
        expPositions.map((expP) => expP.trim()).join(",")
      );
      formData.append("research", researchs.map((res) => res.trim()).join("/"));
      formData.append("tel", tels.map((t) => t.trim()).join("/"));
      formData.append("email", emails.map((e) => e.trim()).join("/"));
      formData.append("website", websites.map((w) => w.trim()).join("/"));

      const res = await Axios.post(`${API_URL}/teams`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });

      if (res.status === 200) {
        alert(`Add New *Team Member Succesful.`);
        location.reload();
      } else {
        alert(`Error to get *Team Member, for this id: ${id}`);
        location.reload();
      }
    } catch {
      alert(`Internal server ${err}`);
    }
  };

  // PUT *SHOWCASE
  const [oldInfo, setOldInfo] = useState([""]);
  const [newPreviewImage, setNewPreviewImage] = useState();
  const [newImage, setNewImage] = useState();
  const [newPosition, setNewPosition] = useState("");
  const [newName, setNewName] = useState("");
  const [newEducations, setNewEducations] = useState([""]);
  const [newExpertises, setNewExpertises] = useState([""]);
  const [newExpLocations, setNewExpLocations] = useState([""]);
  const [newExpPositions, setNewExpPositions] = useState([""]);
  const [newResearchs, setNewResearchs] = useState([""]);
  const [newTels, setNewTels] = useState([""]);
  const [newEmails, setNewEmails] = useState([""]);
  const [newWebsites, setNewWebsites] = useState([""]);
  // console.log(newExpLocations);
  // console.log(newExpPositions);

  useEffect(() => {
    if (oldInfo.educations) {
      setNewEducations(
        Array.isArray(oldInfo.educations)
          ? [...oldInfo.educations]
          : [oldInfo.educations]
      );
    }

    if (oldInfo.expertises) {
      setNewExpertises(
        Array.isArray(oldInfo.expertises)
          ? [...oldInfo.expertises]
          : [oldInfo.expertises]
      );
    }

    if (oldInfo.expLocations) {
      setNewExpLocations(
        Array.isArray(oldInfo.expLocations)
          ? [...oldInfo.expLocations]
          : [oldInfo.expLocations]
      );
    }

    if (oldInfo.expPositions) {
      setNewExpPositions(
        Array.isArray(oldInfo.expPositions)
          ? [...oldInfo.expPositions]
          : [oldInfo.expPositions]
      );
    }

    if (oldInfo.researchs) {
      setNewResearchs(
        Array.isArray(oldInfo.researchs)
          ? [...oldInfo.researchs]
          : [oldInfo.researchs]
      );
    }

    if (oldInfo.tels) {
      setNewTels(
        Array.isArray(oldInfo.tels) ? [...oldInfo.tels] : [oldInfo.tels]
      );
    }

    if (oldInfo.emails) {
      setNewEmails(
        Array.isArray(oldInfo.emails) ? [...oldInfo.emails] : [oldInfo.emails]
      );
    }

    if (oldInfo.websites) {
      setNewWebsites(
        Array.isArray(oldInfo.websites)
          ? [...oldInfo.websites]
          : [oldInfo.websites]
      );
    }
  }, [oldInfo]);

  const handleNewImage = (e) => {
    setNewImage(e);
    setNewPreviewImage(URL.createObjectURL(e));
  };

  const handleNewFieldChange = (index, value, type) => {
    const updateField = (setter, field) => {
      setter((prev) => {
        const updatedFields = [...prev];
        updatedFields[index] = value;
        return updatedFields;
      });
    };

    switch (type) {
      case "newEducations":
        updateField(setNewEducations, newEducations);
        break;
      case "newExpertises":
        updateField(setNewExpertises, newExpertises);
        break;
      case "newExpLocations":
        updateField(setNewExpLocations, newExpLocations);
        break;
      case "newExpPositions":
        updateField(setNewExpPositions, newExpPositions);
        break;
      case "newResearchs":
        updateField(setNewResearchs, newResearchs);
        break;
      case "newTels":
        updateField(setNewTels, newTels);
        break;
      case "newEmails":
        updateField(setNewEmails, newEmails);
        break;
      case "newWebsites":
        updateField(setNewWebsites, newWebsites);
        break;
      default:
        break;
    }
  };

  const handleNewAddField = (type) => {
    const addField = (setter) => {
      setter((prev) => [...prev, ""]);
    };

    switch (type) {
      case "newEducations":
        addField(setNewEducations);
        break;
      case "newExpertises":
        addField(setNewExpertises);
        break;
      case "newExpLocations":
        addField(setNewExpLocations);
        break;
      case "newExpPositions":
        addField(setNewExpPositions);
        break;
      case "newResearchs":
        addField(setNewResearchs);
        break;
      case "newTels":
        addField(setNewTels);
        break;
      case "newEmails":
        addField(setNewEmails);
        break;
      case "newWebsites":
        addField(setNewWebsites);
        break;
      default:
        break;
    }
  };

  const handleNewDeleteField = (index, type) => {
    const deleteField = (setter) => {
      setter((prev) => prev.filter((_, i) => i !== index));
    };

    switch (type) {
      case "newEducations":
        deleteField(setNewEducations);
        break;
      case "newExpertises":
        deleteField(setNewExpertises);
        break;
      case "newExpLocations":
        deleteField(setNewExpLocations);
        break;
      case "newExpPositions":
        deleteField(setNewExpPositions);
        break;
      case "newResearchs":
        deleteField(setNewResearchs);
        break;
      case "newTels":
        deleteField(setNewTels);
        break;
      case "newEmails":
        deleteField(setNewEmails);
        break;
      case "newWebsites":
        deleteField(setNewWebsites);
        break;
      default:
        break;
    }
  };

  // PUT *FUNCTION
  const handlePutTeam = async () => {
    try {
      const formData = new FormData();
      const updatedImage = newImage ? newImage : oldInfo.image;
      const updatedName = newName.trim() ? newName : oldInfo.name;
      const updatedPosition = newPosition.trim()
        ? newPosition
        : oldInfo.position;
      const updatedEducations = educations.length
        ? newEducations
        : oldInfo.educations;
      const updatedExpertises = newExpertises.length
        ? newExpertises
        : oldInfo.expertises;
      const updatedExpLocations = newExpLocations.length
        ? newExpLocations
        : oldInfo.expLocations;
      const updatedExpPositions = newExpPositions.length
        ? newExpPositions
        : oldInfo.expPositions;
      const updatedResearchs = newResearchs.length
        ? newResearchs
        : oldInfo.researchs;
      const updatedTels = newTels.length ? newTels : oldInfo.tels;
      const updatedEmails = newEmails.length ? newEmails : oldInfo.emails;
      const updatedWebsites = newWebsites.length
        ? newWebsites
        : oldInfo.websites;

      // เพิ่มข้อมูลใน FormData
      formData.append("image", updatedImage);
      formData.append("name", updatedName);
      formData.append("position", updatedPosition);
      formData.append(
        "education",
        updatedEducations.map((edu) => edu.trim()).join(",")
      );
      formData.append(
        "expertise",
        updatedExpertises.map((expt) => expt.trim()).join(",")
      );
      formData.append(
        "expLocation",
        updatedExpLocations.map((loc) => loc.trim()).join(",")
      );
      formData.append(
        "expPosition",
        updatedExpPositions.map((pos) => pos.trim()).join(",")
      );
      formData.append(
        "research",
        updatedResearchs.map((res) => res.trim()).join(",")
      );
      formData.append("tel", updatedTels.map((t) => t.trim()).join(","));
      formData.append("email", updatedEmails.map((e) => e.trim()).join(","));
      formData.append(
        "website",
        updatedWebsites.map((w) => w.trim()).join(",")
      );

      const res = await Axios.put(`${API_URL}/teams/${oldInfo.id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });

      if (res.status === 200) {
        alert(`Add New *Team Member Succesful.`);
        location.reload();
      } else {
        alert(`Error to get *Team Member, for this id: ${id}`);
        location.reload();
      }
    } catch (err) {
      alert(`Internal server ${err}`);
    }
  };

  // -----------------------------------------------------------------------------------------------------

  // DELETE *SHOWCASE
  const [delInfo, setDelInfo] = useState([]);

  // Handle Cancel Button
  const handleCancel = () => {
    document.getElementById("image").value = null;
    document.getElementById("position").value = null;
    document.getElementById("name").value = null;
    setEducations([""]);
    setExpertises([""]);
    setExpLocations([""]);
    setExpPositions([""]);
    setResearchs([""]);
    setTels([""]);
    setEmails([""]);
    setWebsites([""]);
    setPreviewImage(null);
  };

  return (
    <main className="a-team-container">
      <article className="top-container">
        <h1 className="topic">Teams Management</h1>
        <section className="add-new-container">
          <button
            data-bs-toggle="modal"
            data-bs-target="#modal-add"
            className="btn btn-add-new"
          >
            Add New
          </button>
        </section>
      </article>
      <hr />

      <article className="content-container row m-0">
        {teams.map((team, idx) => {
          const teamImages = images.filter((img) => img.id === team.id);

          return (
            <section key={idx} className="col-sm-6 col-md-3">
              <section className="content-card">
                {/* แสดงรูปภาพที่เกี่ยวข้องกับทีม */}
                {teamImages.length > 0 && (
                  <img
                    key={team.id}
                    src={teamImages[0].image}
                    alt={`img-${teamImages[0].id}`}
                    className="content-img"
                  />
                )}
                <section className="text-container">
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-preview"
                    className="btn btn-preview mb-1"
                    onClick={() => [ 
                      setSelectedInfo(team),
                      setSelectedImage(teamImages[0])
                    ]}
                  >
                    Preview
                  </button>

                  <p className="position">{team.position}</p>
                  <h6 className="name">{team.name}</h6>
                  <div className="hr"></div>

                  <section className="edit-del-container">
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#modal-update"
                      className="btn btn-update"
                      onClick={() => setOldInfo(team)}
                    >
                      Update
                    </button>
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#modal-delete"
                      className="btn btn-del"
                      onClick={() => setDelInfo(team)}
                    >
                      Delete
                    </button>
                  </section>
                </section>
              </section>
            </section>
          );
        })}
      </article>

      {/* Modal - Add New */}
      <Modal
        modalID="modal-add"
        modalHeaderStyle="d-none"
        modalFooterStyle="d-none"
        modalSize="modal-lg"
        modalBodyContent={
          <form className="form">
            <h1 className="topic">Add New *Team Member</h1>
            <div className="hr"></div>
            <article className="form-content row m-0">
              {/* Left Side */}
              <section className="input-container col-md-6">
                {/* Preview Image */}
                {previewImage ? (
                  <img
                    src={previewImage}
                    className="preview-img"
                    alt="Preview"
                  />
                ) : null}

                {/* Image */}
                <div className="input-box">
                  <label htmlFor="image" className="form-label mb-2">
                    * Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    className="form-control mb-3"
                    onChange={(e) => handleImage(e.target.files[0])}
                  />
                </div>

                {/* Positon */}
                <div className="input-box">
                  <label htmlFor="position" className="form-label mb-2">
                    * Position
                  </label>
                  <input
                    type="text"
                    id="position"
                    placeholder="enter position"
                    className="form-control mb-3"
                    onChange={(e) => setPosition(e.target.value)}
                  />
                </div>

                {/* Name */}
                <div className="input-box">
                  <label htmlFor="name" className="form-label mb-2">
                    * Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="enter name"
                    className="form-control mb-3"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* tels */}
                <div className="d-flex flex-column">
                  <label className="form-label mb-2">* tels</label>
                  {tels.map((telsValue, index) => (
                    <div
                      className="input-box d-flex align-items-start gap-2"
                      key={index}
                    >
                      <div className="flex-grow-1">
                        <input
                          type="text"
                          id={`tels-${index}`}
                          placeholder="ex. 0 2579 1111 ต่อ 2212"
                          className="form-control mb-3"
                          value={telsValue}
                          onChange={(e) =>
                            handleFieldChange(index, e.target.value, "tels")
                          }
                        />
                      </div>
                      {index > 0 && (
                        <button
                          type="button"
                          className="btn btn-danger mb-3"
                          onClick={() => handleDeleteField(index, "tels")}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={() => handleAddField("tels")}
                    className="btn btn-secondary mb-4"
                  >
                    Add tels.
                  </button>
                </div>

                {/* emails */}
                <div className="d-flex flex-column">
                  <label className="form-label mb-2">* emails</label>
                  {emails.map((emailsValue, index) => (
                    <div
                      className="input-box d-flex align-items-start gap-2"
                      key={index}
                    >
                      <div className="flex-grow-1">
                        <input
                          type="emails"
                          id={`emails-${index}`}
                          placeholder="ex. nimit.tu@spu.ac.th"
                          className="form-control mb-3"
                          value={emailsValue}
                          onChange={(e) =>
                            handleFieldChange(index, e.target.value, "emails")
                          }
                        />
                      </div>
                      {index > 0 && (
                        <button
                          type="button"
                          className="btn btn-danger mb-3"
                          onClick={() => handleDeleteField(index, "emails")}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={() => handleAddField("emails")}
                    className="btn btn-secondary mb-4"
                  >
                    Add emails.
                  </button>
                </div>

                {/* websites */}
                <div className="d-flex flex-column">
                  <label className="form-label mb-2">* websites</label>
                  {websites.map((websitesValue, index) => (
                    <div
                      className="input-box d-flex align-items-start gap-2"
                      key={index}
                    >
                      <div className="flex-grow-1">
                        <input
                          type="text"
                          id={`websites-${index}`}
                          placeholder="ex. https://nimittu.wixsite.com/spu-nimit"
                          className="form-control mb-3"
                          value={websitesValue}
                          onChange={(e) =>
                            handleFieldChange(index, e.target.value, "websites")
                          }
                        />
                      </div>
                      {index > 0 && (
                        <button
                          type="button"
                          className="btn btn-danger mb-3"
                          onClick={() => handleDeleteField(index, "websites")}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={() => handleAddField("websites")}
                    className="btn btn-secondary mb-4"
                  >
                    Add Web.
                  </button>
                </div>
              </section>

              {/* Right Side */}
              <section className="input-container col-md-6">
                {/* educations */}
                <div className="d-flex flex-column">
                  <label className="form-label mb-2">* educations</label>
                  {educations.map((educationsValue, index) => (
                    <div
                      className="input-box d-flex align-items-start gap-2"
                      key={index}
                    >
                      <div className="flex-grow-1">
                        <textarea
                          type="text"
                          id={`educations-${index}`}
                          placeholder="ex. ปริญญาตรี: วิศวกรรมศาสตรบัณฑิต (วิศวกรรมไฟฟ้า) มหาวิทยาลัยศรีปทุม"
                          className="form-control mb-3"
                          value={educationsValue}
                          onChange={(e) =>
                            handleFieldChange(
                              index,
                              e.target.value,
                              "educations"
                            )
                          }
                        ></textarea>
                      </div>
                      {index > 0 && (
                        <button
                          type="button"
                          className="btn btn-danger mb-3"
                          onClick={() => handleDeleteField(index, "educations")}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={() => handleAddField("educations")}
                    className="btn btn-secondary mb-4"
                  >
                    Add Edu.
                  </button>
                </div>

                {/* expertises */}
                <div className="d-flex flex-column">
                  <label className="form-label mb-2">* expertises</label>
                  {expertises.map((expertisesValue, index) => (
                    <div
                      className="input-box d-flex align-items-start gap-2"
                      key={index}
                    >
                      <div className="flex-grow-1">
                        <input
                          type="text"
                          id={`expertises-${index}`}
                          placeholder="ex. Internet of Thing (IoT)"
                          className="form-control mb-3"
                          value={expertisesValue}
                          onChange={(e) =>
                            handleFieldChange(
                              index,
                              e.target.value,
                              "expertises"
                            )
                          }
                        />
                      </div>
                      {index > 0 && (
                        <button
                          type="button"
                          className="btn btn-danger mb-3"
                          onClick={() => handleDeleteField(index, "expertises")}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={() => handleAddField("expertises")}
                    className="btn btn-secondary mb-4"
                  >
                    Add Expt.
                  </button>
                </div>

                {/* Experience - Location / Position */}
                <div>
                  <p className="topic text-start">Experience</p>
                  <div className="d-flex flex-column">
                    <label className="form-label mb-2">
                      * Location / Position
                    </label>
                    {expLocations.map((expLocationsValue, index) => (
                      <div
                        className="input-box d-flex flex-column gap-2"
                        key={index}
                      >
                        {/* Location Input */}
                        <div className="mb-2">
                          <input
                            type="text"
                            id={`expLocations-${index}`}
                            placeholder="ex. Location"
                            className="form-control"
                            value={expLocationsValue}
                            onChange={(e) =>
                              handleFieldChange(
                                index,
                                e.target.value,
                                "expLocations"
                              )
                            }
                          />
                        </div>

                        {/* Position Input */}
                        <div className="exp-position-box d-flex row">
                          <div
                            className={`mb-2 ${
                              index > 0 ? "col-md-9" : "col-md-12"
                            }`}
                          >
                            {/* Position Input */}
                            <input
                              type="text"
                              id={`expPositions-${index}`}
                              placeholder="ex. Position"
                              className="form-control"
                              value={expPositions[index]}
                              onChange={(e) =>
                                handleFieldChange(
                                  index,
                                  e.target.value,
                                  "expPositions"
                                )
                              }
                            />
                          </div>

                          {/* Delete Button */}
                          {index > 0 && (
                            <div className="btn-del-container col-md-3">
                              <button
                                type="button"
                                className="btn btn-danger mb-3"
                                onClick={() => {
                                  handleDeleteField(index, "expLocations");
                                  handleDeleteField(index, "expPositions");
                                }}
                              >
                                Delete
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={() => {
                        handleAddField("expLocations");
                        handleAddField("expPositions");
                      }}
                      className="btn btn-secondary mb-4"
                    >
                      Add Expt.
                    </button>
                  </div>
                </div>

                {/* researchs */}
                <div className="d-flex flex-column">
                  <label className="form-label mb-2">* researchs</label>
                  {researchs.map((researchsValue, index) => (
                    <div
                      className="input-box d-flex align-items-start gap-2"
                      key={index}
                    >
                      <div className="flex-grow-1">
                        <textarea
                          type="text"
                          id={`researchs-${index}`}
                          placeholder="ex. นายการันต์ เศรษฐี, นายชนกันต์ อิ่มใจ, นิมิตร ทักษวิทยาพงศ์, ภูริลาภ จุฑาวัชระพล “แอปพลิเคชันดูแลสุขภาพด้วยนาฬิกาอัจฉริยะ” (2563) รายงานสืบเนื่อง (Proceedings) การประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2019) ครั้งที่ 15 มหาวิทยาลัยศรีปทุม. หน้า 1585-1595"
                          className="form-control mb-3"
                          value={researchsValue}
                          onChange={(e) =>
                            handleFieldChange(
                              index,
                              e.target.value,
                              "researchs"
                            )
                          }
                        ></textarea>
                      </div>
                      {index > 0 && (
                        <button
                          type="button"
                          className="btn btn-danger mb-3"
                          onClick={() => handleDeleteField(index, "researchs")}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={() => handleAddField("researchs")}
                    className="btn btn-secondary mb-4"
                  >
                    Add Res.
                  </button>
                </div>
                <div className="hr"></div>

                {/* Button */}
                <section className="btn-container">
                  <button
                    type="button"
                    className="btn btn-cancel"
                    data-bs-dismiss="modal"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-add"
                    onClick={handlePostTeam}
                    disabled={
                      !image ||
                      position.trim() === "" ||
                      name.trim() === "" ||
                      educations.some((e) => e.trim() === "") ||
                      expertises.some((e) => e.trim() === "") ||
                      expLocations.some((e) => e.trim() === "") ||
                      expPositions.some((e) => e.trim() === "") ||
                      researchs.some((e) => e.trim() === "") ||
                      tels.some((e) => e.trim() === "") ||
                      emails.some((e) => e.trim() === "") ||
                      websites.some((e) => e.trim() === "")
                    }
                  >
                    Add New
                  </button>
                </section>
              </section>
            </article>
          </form>
        }
      />

      {/* Modal - Edit */}
      <Modal
        modalID="modal-update"
        modalHeaderStyle="d-none"
        modalFooterStyle="d-none"
        modalSize="modal-lg"
        modalBodyContent={
          <form className="form">
            <h1 className="topic">Add New *Team Member</h1>
            <div className="hr"></div>
            <article className="form-content row m-0">
              {/* Left Side */}
              <section className="input-container col-md-6">
                {/* Preview Image */}
                {newPreviewImage ? (
                  <img
                    src={newPreviewImage}
                    className="preview-img"
                    alt="Preview"
                  />
                ) : (
                  <img
                    // src={oldInfo.image}
                    src={`${API_URL}/images/teams/${oldInfo.image}`}
                    className="preview-img"
                    alt="Preview"
                  />
                )}

                {/* Image */}
                <div className="input-box">
                  <label htmlFor="image" className="form-label mb-2">
                    * New Image
                  </label>
                  <input
                    type="file"
                    id="newImage"
                    className="form-control mb-3"
                    onChange={(e) => handleNewImage(e.target.files[0])}
                  />
                </div>

                {/* Positon */}
                <div className="input-box">
                  <label htmlFor="position" className="form-label mb-2">
                    * New Position
                  </label>
                  <input
                    type="text"
                    id="newPosition"
                    placeholder={oldInfo.position}
                    className="form-control mb-3"
                    onChange={(e) => setNewPosition(e.target.value)}
                  />
                </div>

                {/* Name */}
                <div className="input-box">
                  <label htmlFor="name" className="form-label mb-2">
                    * New Name
                  </label>
                  <input
                    type="text"
                    id="newName"
                    placeholder={oldInfo.name}
                    className="form-control mb-3"
                    onChange={(e) => setNewName(e.target.value)}
                  />
                </div>

                {/* tels */}
                <div className="d-flex flex-column">
                  <label className="form-label mb-2">* New Tels</label>
                  {newTels.map((telsValue, index) => (
                    <div
                      className="input-box d-flex align-items-start gap-2"
                      key={index}
                    >
                      <div className="flex-grow-1">
                        <textarea
                          id={`tels-${index}`}
                          placeholder={telsValue || "New Tel"}
                          className="form-control mb-3"
                          value={newTels[index]}
                          onChange={(e) =>
                            handleNewFieldChange(
                              index,
                              e.target.value,
                              "newTels"
                            )
                          }
                        ></textarea>
                      </div>
                      {index > 0 && (
                        <button
                          type="button"
                          className="btn btn-danger mb-3"
                          onClick={() => handleNewDeleteField(index, "newTels")}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => handleNewAddField("newTels")}
                    className="btn btn-secondary mb-4"
                  >
                    Add Res.
                  </button>
                </div>

                {/* emails */}
                <div className="d-flex flex-column">
                  <label className="form-label mb-2">* New Emails</label>
                  {newEmails.map((emailsValue, index) => (
                    <div
                      className="input-box d-flex align-items-start gap-2"
                      key={index}
                    >
                      <div className="flex-grow-1">
                        <textarea
                          id={`emails-${index}`}
                          placeholder={emailsValue || "New Email"}
                          className="form-control mb-3"
                          value={newEmails[index]}
                          onChange={(e) =>
                            handleNewFieldChange(
                              index,
                              e.target.value,
                              "newEmails"
                            )
                          }
                        ></textarea>
                      </div>
                      {index > 0 && (
                        <button
                          type="button"
                          className="btn btn-danger mb-3"
                          onClick={() =>
                            handleNewDeleteField(index, "newEmails")
                          }
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => handleNewAddField("newEmails")}
                    className="btn btn-secondary mb-4"
                  >
                    Add Email.
                  </button>
                </div>

                {/* websites */}
                <div className="d-flex flex-column">
                  <label className="form-label mb-2">* New Websites</label>
                  {newWebsites.map((websitesValue, index) => (
                    <div
                      className="input-box d-flex align-items-start gap-2"
                      key={index}
                    >
                      <div className="flex-grow-1">
                        <textarea
                          id={`websites-${index}`}
                          placeholder={websitesValue || "New Web"}
                          className="form-control mb-3"
                          value={newWebsites[index]}
                          onChange={(e) =>
                            handleNewFieldChange(
                              index,
                              e.target.value,
                              "newWebsites"
                            )
                          }
                        ></textarea>
                      </div>
                      {index > 0 && (
                        <button
                          type="button"
                          className="btn btn-danger mb-3"
                          onClick={() =>
                            handleNewDeleteField(index, "newWebsites")
                          }
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => handleNewAddField("newWebsites")}
                    className="btn btn-secondary mb-4"
                  >
                    Add Web.
                  </button>
                </div>
              </section>

              {/* Right Side */}
              <section className="input-container col-md-6">
                {/* educations */}
                <div className="d-flex flex-column">
                  <label className="form-label mb-2">* New Education</label>
                  {newEducations.map((educationValue, index) => (
                    <div
                      className="input-box d-flex align-items-start gap-2"
                      key={index}
                    >
                      <div className="flex-grow-1">
                        <textarea
                          id={`education-${index}`}
                          placeholder={educationValue || "New Education"}
                          className="form-control mb-3"
                          value={newEducations[index]}
                          onChange={(e) =>
                            handleNewFieldChange(
                              index,
                              e.target.value,
                              "newEducations"
                            )
                          }
                        ></textarea>
                      </div>
                      {index > 0 && (
                        <button
                          type="button"
                          className="btn btn-danger mb-3"
                          onClick={() =>
                            handleNewDeleteField(index, "newEducations")
                          }
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => handleNewAddField("newEducations")}
                    className="btn btn-secondary mb-4"
                  >
                    Add Edu.
                  </button>
                </div>

                {/* expertises */}
                <div className="d-flex flex-column">
                  <label className="form-label mb-2">* New Expertises</label>
                  {newExpertises.map((expertisesValue, index) => (
                    <div
                      className="input-box d-flex align-items-start gap-2"
                      key={index}
                    >
                      <div className="flex-grow-1">
                        <textarea
                          id={`expertises-${index}`}
                          placeholder={expertisesValue || "New Ecxpertise"}
                          className="form-control mb-3"
                          value={newExpertises[index]}
                          onChange={(e) =>
                            handleNewFieldChange(
                              index,
                              e.target.value,
                              "newExpertises"
                            )
                          }
                        ></textarea>
                      </div>
                      {index > 0 && (
                        <button
                          type="button"
                          className="btn btn-danger mb-3"
                          onClick={() =>
                            handleNewDeleteField(index, "newExpertises")
                          }
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => handleNewAddField("newExpertises")}
                    className="btn btn-secondary mb-4"
                  >
                    Add Expt.
                  </button>
                </div>

                {/* Experience - Location / Position */}
                <div className="exp-container">
                  <p className="topic text-start">Experience</p>
                  <div>
                    <label className="form-label mb-2">
                      * Location / Position
                    </label>

                    {newExpLocations.map((_, index) => (
                      <div className="row mb-3 d-flex flex-column" key={index}>
                        {/* Location */}
                        <div className="col">
                          <textarea
                            id={`newExpLocation-${index}`}
                            placeholder={
                              newExpLocations[index] || "New Location"
                            }
                            className="form-control mb-3"
                            value={newExpLocations[index]}
                            onChange={(e) =>
                              handleNewFieldChange(
                                index,
                                e.target.value,
                                "newExpLocations"
                              )
                            }
                          ></textarea>
                        </div>

                        <section className="row">
                          {/* Position */}
                          <div className="col ">
                            <textarea
                              id={`expPosition-${index}`}
                              placeholder={
                                newExpPositions[index] || "New Position"
                              }
                              className="form-control"
                              value={newExpPositions[index]}
                              onChange={(e) =>
                                handleNewFieldChange(
                                  index,
                                  e.target.value,
                                  "newExpPositions"
                                )
                              }
                            ></textarea>
                          </div>

                          {/* Delete button */}
                          <div className="col-auto d-flex align-items-start btn-del-container">
                            {index > 0 && (
                              <button
                                type="button"
                                className="btn btn-danger btn-del"
                                onClick={() => {
                                  handleNewDeleteField(
                                    index,
                                    "newExpLocations"
                                  );
                                  handleNewDeleteField(
                                    index,
                                    "newExpPositions"
                                  );
                                }}
                              >
                                Delete
                              </button>
                            )}
                          </div>
                        </section>
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={() => {
                        handleNewAddField("newExpLocations");
                        handleNewAddField("newExpPositions");
                      }}
                      className="btn btn-secondary mb-4"
                    >
                      Add Exp.
                    </button>
                  </div>
                </div>

                {/* researchs */}
                <div className="d-flex flex-column">
                  <label className="form-label mb-2">* New Researchs</label>
                  {newResearchs.map((researchValue, index) => (
                    <div
                      className="input-box d-flex align-items-start gap-2"
                      key={index}
                    >
                      <div className="flex-grow-1">
                        <textarea
                          id={`researchs-${index}`}
                          placeholder={researchValue || "New Research"}
                          className="form-control mb-3"
                          value={newResearchs[index]}
                          onChange={(e) =>
                            handleNewFieldChange(
                              index,
                              e.target.value,
                              "newResearchs"
                            )
                          }
                        ></textarea>
                      </div>
                      {index > 0 && (
                        <button
                          type="button"
                          className="btn btn-danger mb-3"
                          onClick={() =>
                            handleNewDeleteField(index, "newResearchs")
                          }
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => handleNewAddField("newResearchs")}
                    className="btn btn-secondary mb-4"
                  >
                    Add Res.
                  </button>
                </div>

                <div className="hr"></div>

                {/* Button */}
                <section className="btn-container">
                  <button
                    type="button"
                    className="btn btn-cancel"
                    data-bs-dismiss="modal"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-update"
                    onClick={handlePutTeam}
                  >
                    Update
                  </button>
                </section>
              </section>
            </article>
          </form>
        }
      />

      {/* Modal - Preview Info */}
      <Modal
        modalID="modal-preview"
        modalHeaderStyle="preview-topic-container"
        modalTitleStyle="preview-topic"
        modalTitle={"Information"}
        modalFooterStyle="d-none"
        modalSize="modal-lg"
        modalBodyContent={
          <article className="preview-info-container">
            <article className="preview-content row m-0">
              <section className="col-md-4">
                <img
                  src={selectedImage.image}
                  alt={selectedInfo.name}
                  className="content-img"
                />
              </section>
              <section className="col-md-8">
                <p className="position">{selectedInfo.position}</p>
                <h6 className="name">{selectedInfo.name}</h6>

                <h6 className="edu-topic">วุฒิการศึกษา: </h6>
                {Array.isArray(selectedInfo.educations) ? (
                  selectedInfo.educations.map((edu, idx) => (
                    <p key={idx} className="edu">
                      {edu}
                    </p>
                  ))
                ) : (
                  <p className="edu">{selectedInfo.educations}</p>
                )}

                {Array.isArray(selectedInfo.expertises) &&
                  selectedInfo.expertises.length !== 0 && (
                    <ol className="expt-list">
                      <h6 className="expt-topic">ความถนัด:</h6>
                      {selectedInfo.expertises.map((expt, idx) => (
                        <li key={idx} className="expt">
                          {expt}
                        </li>
                      ))}
                    </ol>
                  )}

                {Array.isArray(selectedInfo.expLocations) &&
                  selectedInfo.expLocations.length !== 0 &&
                  Array.isArray(selectedInfo.expPositions) &&
                  selectedInfo.expPositions.length !== 0 && (
                    <>
                      <h6 className="exp-topic">ประสบการณ์:</h6>
                      {selectedInfo.expLocations.map((expLocat, idx) => (
                        <section key={idx}>
                          <p className="exp m-0">{expLocat}</p>
                          <p className="exp">
                            {selectedInfo.expPositions[idx]}
                          </p>
                        </section>
                      ))}
                    </>
                  )}

                {Array.isArray(selectedInfo.researchs) &&
                  selectedInfo.researchs.length !== 0 && (
                    <>
                      <h6 className="res-topic">ผลงานวิจัย:</h6>
                      {selectedInfo.researchs.map((res, idx) => (
                        <p key={idx} className="res">
                          {res}
                        </p>
                      ))}
                    </>
                  )}

                <p className="tels">tels: {selectedInfo.tels}</p>
                {Array.isArray(selectedInfo.emails) &&
                selectedInfo.emails.length > 1 ? (
                  <>
                    <p className="emails">emails: {selectedInfo.emails[0]}</p>
                    <p className="emails">emails: {selectedInfo.emails[1]}</p>
                  </>
                ) : (
                  <p className="emails">
                    emails:{" "}
                    {Array.isArray(selectedInfo.emails)
                      ? selectedInfo.emails[0]
                      : selectedInfo.emails}
                  </p>
                )}
                <p className="websites">websites: {selectedInfo.websites}</p>
              </section>
            </article>
          </article>
        }
      />

      {/* Modal - Delete *Showcase */}
      <ModalDel
        modalDelID="modal-delete"
        modalDelTitle="(Admin) Teams"
        modalDelContent={delInfo}
        modalDelPath="teams"
      />
    </main>
  );
};

export default A_Team;
