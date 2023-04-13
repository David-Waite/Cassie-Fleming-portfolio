import Head from "next/head";

export default function YoutubeEmbed() {
  return (
    <div>
      <Head>
        <title>Cassie Fleming | Showreel</title>
      </Head>
      <div class="iframeLoader">
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/817149627?h=13ea9c434e"
          width="640"
          height="360"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <style jsx>{`
        .holds-the-iframe {
          background-color: blue;
        }
      `}</style>
    </div>
  );
}
