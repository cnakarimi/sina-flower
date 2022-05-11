import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import classes from "./MainCarousel.module.css";

function MainCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className={`${classes.embla} lg:h-1/2`} ref={emblaRef} dir="ltr">
      <div className={classes["embla__container"]}>
        <div className={classes["embla__slide"]}>
          <img
            src="/images/carouselimages/8-min.jpg"
            alt="advertisement"
            className="h-full"
          />
        </div>
        <div className={classes["embla__slide"]}>
          <img
            src="/images/carouselimages/9-min.jpg"
            alt="advertisement"
            className="h-full"
          />
        </div>
        <div className={classes["embla__slide"]}>
          <img
            src="/images/carouselimages/10-min.jpg"
            alt="advertisement"
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default MainCarousel;
