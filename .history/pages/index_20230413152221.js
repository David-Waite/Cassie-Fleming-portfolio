import Head from "next/head";

export default function YoutubeEmbed() {
  return (
    <div>
      <Head>
        <title>Cassie Fleming | Showreel</title>
      </Head>
      <div className="iframeLoader">
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
        .iframeLoader {
          background: url(/iframeloadingImg.png);
          height: calc((1000px / 16) * 9);
          background-size: cover;
        }
        @media (max-width: 1200px) {
          .iframeLoader {
            width: 900px;
            height: calc((900px / 16) * 9);
          }
        }

        @media (max-width: 950px) {
          .iframeLoader {
            width: 95vw;
            height: calc((95vw / 16) * 9);
          }
        }
      `}</style>
    </div>
  );
}
