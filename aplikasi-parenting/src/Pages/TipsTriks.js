import React from "react";
import img1 from "../images/tips-img/img-1.jpg";
import img2 from "../images/tips-img/img-2.jpg";
import img3 from "../images/tips-img/img-3.jpg";
import img4 from "../images/tips-img/img-4.jpg";

function TipsTriks() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-[1200px] mx-auto">
        <h3 className="my-16 text-3xl text-white">
          Seputar Tips And Trik Agar Anda Bisa Semangat
        </h3>
        <div className="flex justify-between mb-20">
          <img
            src={img1}
            alt="panda"
            className="rounded-xl w-1/5 h-[175px] object-cover"
          />
          <div className="w-3/5 flex flex-col text-white">
            <h3 className="font-bold mb-5">
              Menjaga agar tidak bosan dengan anak
            </h3>
            <p className="text-sm text-justify">
              Sebagai orang tua yang baik, perhatikanlah anak-anak Anda jika
              sedang mendekati deterjen, disinfektan, atau hal lain yang
              mengandung bahan kimia berbahaya. Jauhkanlah bahan pembersih rumah
              tangga yang berbahaya dan beracun tersebut dari jangkauan
              anak-anak. Simpanlah di tempat yang tidak terjangkau oleh
              anak-anak. Bahkan kalau bisa simpan dalam lemari yang terkunci.
              Selain bahan pembersih rumah tangga, hindari juga kosmetik,
              perlengkapan mandi, dan botol obat yang mudah dijangkau. Itu juga
              sangat membahayakan anak-anak Anda.
            </p>
          </div>
        </div>
        <div className="flex justify-between mb-20">
          <img
            src={img2}
            alt="panda"
            className="rounded-xl w-1/5 h-[175px] object-cover mr-5"
          />
          <div className="w-3/5 flex flex-col text-white">
            <h3 className="font-bold mb-5">
              Cara menjaga agar mental tidak Down
            </h3>
            <p className="text-sm text-justify">
              Cara menjaga kesehatan mental yang pertama dan mudah untuk
              dilakukan adalah menceritakan kondisi yang Anda alami pada
              orang-orang terdekat. Membicarakan perasaan bukanlah tanda
              kelemahan, itu adalah salah satu perawatan mandiri yang bisa
              dilakukan untuk menjaga kondisi mental tetap sehat. Meski terlihat
              mudah, menggambarkan perasaan saat berbicara dengan orang lain
              bagi beberapa orang merupakan hal yang sulit.
            </p>
          </div>
        </div>
        <div className="flex justify-between mb-20">
          <img
            src={img3}
            alt="panda"
            className="rounded-xl w-1/5 h-[175px] object-cover mr-5"
          />
          <div className="w-3/5 flex flex-col text-white">
            <h3 className="font-bold mb-5">
            Cara kita sayang kepada anak
            </h3>
            <p className="text-sm text-justify">
            Sebagai orang tua yang baik, perhatikanlah anak-anak Anda jika
              sedang mendekati deterjen, disinfektan, atau hal lain yang
              mengandung bahan kimia berbahaya. Jauhkanlah bahan pembersih rumah
              tangga yang berbahaya dan beracun tersebut dari jangkauan
              anak-anak. Simpanlah di tempat yang tidak terjangkau oleh
              anak-anak. Bahkan kalau bisa simpan dalam lemari yang terkunci.
              Selain bahan pembersih rumah tangga, hindari juga kosmetik,
              perlengkapan mandi, dan botol obat yang mudah dijangkau. Itu juga
              sangat membahayakan anak-anak Anda.
            </p>
          </div>
        </div>
        <div className="flex justify-between mb-20">
          <img
            src={img4}
            alt="panda"
            className="rounded-xl w-1/5 h-[175px] object-cover mr-5"
          />
          <div className="w-3/5 flex flex-col text-white">
            <h3 className="font-bold mb-5">
              Cara menjaga agar mental tidak Down
            </h3>
            <p className="text-sm text-justify">
              Cara menjaga kesehatan mental yang pertama dan mudah untuk
              dilakukan adalah menceritakan kondisi yang Anda alami pada
              orang-orang terdekat. Membicarakan perasaan bukanlah tanda
              kelemahan, itu adalah salah satu perawatan mandiri yang bisa
              dilakukan untuk menjaga kondisi mental tetap sehat. Meski terlihat
              mudah, menggambarkan perasaan saat berbicara dengan orang lain
              bagi beberapa orang merupakan hal yang sulit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TipsTriks;
