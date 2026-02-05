"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { ShieldCheck } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function AboutCommitment({ title, description1, description2, description3, btnText, imgSlider }) {
  return (
    <section className="w-[90%] mx-auto py-12 md:py-16 lg:py-6 bg-[#f8fcff] overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start space-y-6 max-w-2xl">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-blue-600 font-medium text-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>Integrity First</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-[#0ea5e9]">
              {title || "Our Commitment"}
            </h2>

            {/* Descriptions */}
            <div className="space-y-4 text-lg md:text-xl text-slate-600 leading-relaxed">
              {description1 && <p>{description1}</p>}
              {description2 && <p>{description2}</p>}
              {description3 && <p>{description3}</p>}
            </div>

            {/* CTA Button */}
            {btnText && (
               <button className="mt-4 px-8 py-4 bg-[#0284c7] text-white text-base font-bold rounded-full hover:bg-sky-600 transition-all shadow-lg hover:shadow-sky-500/25">
                {btnText}
              </button>
            )}
          </div>

          {/* Right Column: Swiper Slider */}
          <div className="w-full relative">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,      
                stretch: 80,    
                depth: 200,     
                modifier: 1,    
                slideShadows: false,
              }}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true, el: '.custom-pagination' }}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              className="mySwiper py-10"
            >
              {imgSlider?.map((img, index) => {
                const imgUrl = img.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${img.url}` : null;
                if (!imgUrl) return null;

                return (
                  <SwiperSlide key={index} className="max-w-[350px] md:max-w-[300px]">
                    <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/20">
                      <Image
                        src={imgUrl}
                        alt={img.alternativeText || `Slide ${index}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* Custom Navigation & Pagination UI */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button className="swiper-button-prev-custom w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md text-slate-600 hover:text-blue-600 transition-colors cursor-pointer z-10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              
              <div className="custom-pagination !w-auto flex gap-2"></div>

              <button className="swiper-button-next-custom w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md text-slate-600 hover:text-blue-600 transition-colors cursor-pointer z-10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #cbd5e1;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #0ea5e9;
          width: 24px;
          border-radius: 5px;
        }
      `}</style>
    </section>
  );
}