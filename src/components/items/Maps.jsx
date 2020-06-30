import React from "react";
import "./Maps.css";
function Maps() {
  return (
    <div className="map">
      <h3>Find Us</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1247.0640416920207!2d106.82046423991287!3d-6.36034777494441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed653a29ad0b%3A0xaf72640dfc060568!2sPuzzle%20Koffie!5e0!3m2!1sen!2sid!4v1593497167630!5m2!1sen!2sid"
        width="400"
        height="250"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
        title="maps"
      ></iframe>
      <h4>
        Jalan Haji Amat No.11A RT.4/RW.3 Kukusan Kecamatan Beji <br />
        Kota Depok Jawa Barat 16425 Indonesia
      </h4>
    </div>
  );
}

export default Maps;
