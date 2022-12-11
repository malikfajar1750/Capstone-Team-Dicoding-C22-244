import React from "react";

function Video() {
  return (
    <>
      <div class="content">
        <article class="video-list" id="video">
          <div class="vid-parenting">
            <div class="parent">
              <iframe
                src="https://www.youtube.com/embed/aCn8ERT7hLs"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <br></br>
              <br></br>
              <p>
                <a
                  class="w3-button w3-indigo w3-right"
                  href="https://www.youtube.com/watch?v=aCn8ERT7hLs"
                >
                  Putar
                </a>
              </p>
            </div>
            <div class="parent">
              <iframe
                src="https://www.youtube.com/embed/-BMnMrEQq8I"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <br></br>
              <br></br>
              <p>
                <a
                  class="w3-button w3-indigo w3-right"
                  href="https://www.youtube.com/watch?v=-BMnMrEQq8I"
                >
                  Putar
                </a>
              </p>
            </div>
            <div class="parent">
              <iframe
                src="https://www.youtube.com/embed/wuu97C6TiDs"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <br></br>
              <br></br>
              <p>
                <a
                  class="w3-button w3-indigo w3-right"
                  href="https://www.youtube.com/watch?v=wuu97C6TiDs"
                >
                  Putar
                </a>
              </p>
            </div>
            <div class="parent">
              <iframe
                src="https://www.youtube.com/embed/NIk1-ck4c6Q"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <br></br>
              <br></br>
              <p>
                <a
                  class="w3-button w3-indigo w3-right"
                  href="https://www.youtube.com/watch?v=NIk1-ck4c6Q"
                >
                  Putar
                </a>
              </p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default Video;
