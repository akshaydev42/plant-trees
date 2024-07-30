
import React, {useCallback} from 'react'
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'


export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true },   [
    Autoplay({
      delay: 2000, 
      stopOnInteraction: true,
    })
  ])
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])
  return (
   
 <div className="embla__viewport relative max-h-[550px] " ref={emblaRef}>
     <div className="embla__container   ">
      <div className="embla__slide">
          <img src ="./Slider/image1.jpg" className= "hidden sm:block"  />
          <img src ="./Slider/mobileimg1.jpg  " className="sm:hidden" />
        </div>
        <div className="embla__slide">
        <img src ="./Slider/image2.jpg" className= "hidden sm:block"  />
        <img src ="./Slider/mobileimg2.jpg " className="sm:hidden" />
        </div>
        <div className="embla__slide">
        <img src ="./Slider/image3.jpg" className= "hidden sm:block"  />
        <img src ="./Slider/mobileimg3.jpg" className="sm:hidden" />
        </div>
        <div className="embla__slide">
        <img src ="./Slider/image4.jpg" className= "hidden sm:block"  />
        <img src ="./Slider/mobileimg4.jpg " className="sm:hidden" />
        </div>
      </div>

    <div className = "absolute inset-0 flex lg:justify-between lg:px-4 px-2 justify-between ">
    <button className="embla__prev" onClick={scrollPrev}>
    <FiChevronLeft size={30} className="text-slate-400 hover:bg-slate-200 rounded-full transition-transform hover:scale-110" />
      </button>
      <button className="embla__next" onClick={scrollNext}>
       <FiChevronRight size={30} className="text-slate-400 hover:bg-slate-200 rounded-full transition-transform hover:scale-110" />
      </button>
    </div>
    </div>
   
   
  )
}

export default EmblaCarousel;  