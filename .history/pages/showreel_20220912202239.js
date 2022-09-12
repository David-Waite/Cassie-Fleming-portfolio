import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = () => (
  <div className="video-responsive">
    <iframe
      src={`https://www.youtube.com/embed/v9V-7TvYq8s`}
      frameBorder="0"
      allowFullScreen
      title="Embedded youtube"
    />
    <style jsx>{`
      iframe {
        width: 1250px;
        height: calc((1250px / 16) * 9);
      }

      @media (max-width: 1400px) {
        iframe {
          width: 1000px;
          height: calc((1000px / 16) * 9);
        }
      }

      @media (max-width: 1000px) {
        iframe {
          width: 95vw;
          height: calc((90vw / 16) * 9);
        }
      }
    `}</style>
  </div>
);

export default YoutubeEmbed;
