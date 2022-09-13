import React from "react";

export default function YoutubeEmbed() {
  return (
    <div className="video-responsive">
      <iframe
        src={`https://www.youtube.com/embed/v9V-7TvYq8s`}
        frameBorder="0"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}