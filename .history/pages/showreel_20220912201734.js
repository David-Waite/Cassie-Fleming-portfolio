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
    <styles jsx>{`
    iframe {
      width: 1250px;

    }
    `}</styles>
  </div>
);

export default YoutubeEmbed;
