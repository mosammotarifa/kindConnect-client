
"use client";

import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import type { Event } from "@/type/type";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

interface CorsoleEventProps {
  showevent: Event[];
}

const CorsoleEvent = ({ showevent }: CorsoleEventProps) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Section Heading */}
      <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400">
            Make a Difference Together
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Explore Community Events
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-7 text-text-muted sm:text-base">
            Discover upcoming events, connect with people, and become part of
            something meaningful.
          </p>
        </div>

        {/* Custom Navigation */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => swiper?.slidePrev()}
            aria-label="Previous events"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-200 bg-card text-purple-600 shadow-sm transition duration-300 hover:border-purple-600 hover:bg-purple-600 hover:text-white dark:border-purple-900"
          >
            <ChevronLeft size={23} />
          </button>

          <button
            onClick={() => swiper?.slideNext()}
            aria-label="Next events"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white shadow-lg shadow-purple-600/20 transition duration-300 hover:scale-105 hover:bg-purple-700"
          >
            <ChevronRight size={23} />
          </button>
        </div>
      </div>

      {/* Event Carousel */}
      <Swiper
        modules={[Pagination, Autoplay]}
        onSwiper={setSwiper}
        spaceBetween={24}
        slidesPerView={1}
        loop={showevent.length > 3}
        grabCursor
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        className="!pb-14"
      >
        {showevent.slice(0, 6).map((event) => (
          <SwiperSlide key={event._id} className="!h-auto">
            <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10">

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <span className="absolute left-5 top-5 rounded-full border border-white/40 bg-white/95 px-4 py-2 text-xs font-bold text-purple-700 shadow-md">
                  {event.category}
                </span>

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-xs font-semibold uppercase tracking-widest text-purple-200">
                    Community Event
                  </p>

                  <p className="mt-2 flex items-center gap-2 text-sm font-medium">
                    {event.location}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="line-clamp-1 text-xl font-bold text-foreground transition-colors group-hover:text-purple-600 dark:group-hover:text-purple-400">
                  {event.title}
                </h3>

                <p className="mt-3 line-clamp-2 min-h-12 text-sm leading-6 text-text-muted">
                  {event.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                      Organized by
                    </p>

                    <p className="mt-1 truncate text-sm font-bold text-foreground">
                      {event.organizerName}
                    </p>
                  </div>

                  <Link
                    href={`/show-event/${event._id}`}
                    className="flex shrink-0 items-center gap-2 rounded-xl bg-purple-600 px-4 py-3 text-xs font-bold text-white transition-all duration-300 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/20"
                  >
                    Explore
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CorsoleEvent;
