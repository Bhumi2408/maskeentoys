"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { useRef, useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

const videos = [
  "/home/video1.mp4",
  "/home/video2.mp4",
  "/home/video3.mp4",
  "/home/video4.mp4",
  "/home/video5.mp4",
  "/home/video6.mp4",
  "/home/video7.mp4",
  "/home/video8.mp4",
  "/home/video9.mp4",
];

export default function IndoorPlayArea() {
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  const playVideo = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;

      if (i === index) {
        if (video.paused) {
          video.play();
          setPlayingIndex(index);
        } else {
          video.pause();
          setPlayingIndex(null);
        }
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  };
  return (
    <section
      className="relative pb-10 bg-cover bg-center"
      style={{
        backgroundImage: "url('/home/bg3.jpg')",
      }}
    >
      <div className="mx-auto max-w-[1650px] px-8 md:px-20">
        <h2
          className="text-center text-[40px] md:text-[74px] leading-none text-[#3d3d3d] mb-5"
          style={{ fontFamily: "var(--font-love)" }}
        >
          Indoor Play Areas Kids Love
        </h2>

        <div className="relative">
          <button className="custom-prev absolute -left-8 top-1/2 z-20 -translate-y-1/2">
            <ChevronLeft size={25} color="#A9A9A9" />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 12,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 2.5,
                spaceBetween: 18,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
          >
            {videos.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[400px] overflow-hidden">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={item}
                    className="h-full w-full object-cover cursor-pointer"
                    playsInline
                    preload="metadata"
                    onClick={() => playVideo(index)}
                    onEnded={() => setPlayingIndex(null)}
                  />

                  {playingIndex !== index && (
                    <button
                      onClick={() => playVideo(index)}
                      className="absolute inset-0 flex items-center justify-center bg-black/10"
                    >
                      <FontAwesomeIcon
                        icon={faPlayCircle}
                        className="text-white text-4xl"
                      />
                    </button>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="custom-next absolute -right-8 top-1/2 z-20 -translate-y-1/2">
            <ChevronRight size={25} color="#A9A9A9" />
          </button>
        </div>
      </div>
    </section>
  );
}
