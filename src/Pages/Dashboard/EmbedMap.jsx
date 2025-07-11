import React from "react";

function EmbedMap() {
  return (
    <div className="map-container">
      <iframe
        className="map-iframe"
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1631.3070695793008!2d60.643972642324194!3d41.55190699819122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfcfda0c802c8f%3A0x2c62da3ee3eee3e2!2sKRALBRAND%20MARKAZI!5e1!3m2!1sen!2s!4v1752226795415!5m2!1sen!2s"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default EmbedMap;
