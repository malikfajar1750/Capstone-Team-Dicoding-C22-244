import React from 'react';
import Parent from '../img-parent/img-1.jpg';
import ImgParent from '../img-parent/img-2.jpg';
import ImgParentp from '../img-parent/img-3.jpg';
import imgParents from '../img-parent/img-4.jpg'
function TipsTriks() {
  return (
    <>
     <div>
        <h3 className='head-h3'>Seputar Tips And Trik agar anda Bisa Semangat</h3>
         <div className='img-TipsAndTriks'>
         <div className='img-rata'>
         <h4 className='Head-4'>Menjaga agar tidak bosan dengan anak</h4>
         <img alt="panda" className="photo" src={Parent}  width={269} height={173}/>
         <p className='p-Tips'>Sebagai orang tua yang baik, perhatikanlah anak-anak Anda jika sedang mendekati deterjen, disinfektan, atau hal lain yang mengandung bahan kimia berbahaya. Jauhkanlah bahan pembersih rumah tangga yang berbahaya dan beracun tersebut dari jangkauan anak-anak.
        Simpanlah di tempat yang tidak terjangkau oleh anak-anak. Bahkan kalau bisa simpan dalam lemari yang terkunci.
        Selain bahan pembersih rumah tangga, hindari juga kosmetik, perlengkapan mandi, dan botol obat yang mudah dijangkau.
         Itu juga sangat membahayakan anak-anak Anda. </p>

         <h4 className='Head-4'>Cara menjaga agar mental tidak  Down </h4>
         <img alt="panda" className="photo" src={ImgParent}  width={269} height={173}/>
         <p className='p-Tips'> Cara menjaga kesehatan mental yang pertama dan mudah untuk dilakukan adalah menceritakan kondisi
          yang Anda alami pada orang-orang terdekat. Membicarakan perasaan bukanlah tanda kelemahan, itu adalah salah satu perawatan
          mandiri yang bisa dilakukan untuk menjaga kondisi mental tetap sehat. Meski terlihat mudah, menggambarkan perasaan saat 
          berbicara dengan orang lain bagi beberapa orang merupakan hal yang sulit </p>
         
          <h4 className='Head-4'>Cara  kita sayang kepada anak</h4>
          <img alt="panda" className="photo" src={ImgParentp}  width={269} height={173}/>
          <p className='p-Tips'>Sebagai orang tua yang baik, perhatikanlah anak-anak Anda jika sedang mendekati deterjen, disinfektan, atau hal lain yang mengandung bahan kimia berbahaya. Jauhkanlah bahan pembersih rumah tangga yang berbahaya dan beracun tersebut dari jangkauan anak-anak.
          Simpanlah di tempat yang tidak terjangkau oleh anak-anak. Bahkan kalau bisa simpan dalam lemari yang terkunci.
          Selain bahan pembersih rumah tangga, hindari juga kosmetik, perlengkapan mandi, dan botol obat yang mudah dijangkau.
          Itu juga sangat membahayakan anak-anak Anda. </p>

          <h4 className='Head-4'>Cara  kita sayang kepada anak</h4>
          <img alt="panda" className="photo" src={imgParents}  width={269} height={173}/>
          <p className='p-Tips'>Sebagai orang tua yang baik, perhatikanlah anak-anak Anda jika sedang mendekati deterjen, disinfektan, atau hal lain yang mengandung bahan kimia berbahaya. Jauhkanlah bahan pembersih rumah tangga yang berbahaya dan beracun tersebut dari jangkauan anak-anak.
          Simpanlah di tempat yang tidak terjangkau oleh anak-anak. Bahkan kalau bisa simpan dalam lemari yang terkunci.
          Selain bahan pembersih rumah tangga, hindari juga kosmetik, perlengkapan mandi, dan botol obat yang mudah dijangkau.
          Itu juga sangat membahayakan anak-anak Anda. </p>
          </div> 
         </div> 
     </div>
    </>
  );
}

export default TipsTriks;