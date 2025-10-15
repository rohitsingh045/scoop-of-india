import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import icecreamBox1 from "@/assets/icecream-box-1.png";
import icecreamBox2 from "@/assets/icecream-box-2.png";
import icecreamBox3 from "@/assets/icecream-box-3.png";

const slides = [
  {
    title: "मस्त है Bharat",
    subtitle: "with Namaste Bharat",
    description: "Rich chocolate flavors made from creamy milk that delight your senses",
    images: [icecreamBox1, icecreamBox2]
  },
  {
    title: "स्वाद है Bharat",
    subtitle: "with Namaste Bharat",
    description: "Authentic kulfi flavors that bring traditional Indian taste to life",
    images: [icecreamBox2, icecreamBox3]
  },
  {
    title: "मज़ा है Bharat",
    subtitle: "with Namaste Bharat",
    description: "Premium ice cream crafted with the finest ingredients and love",
    images: [icecreamBox3, icecreamBox1]
  }
];

const HeroCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return;

    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [emblaApi]);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <div 
                className="relative min-h-[calc(100vh-80px)] flex items-center"
                style={{ background: "var(--gradient-hero)" }}
              >
                <div className="container mx-auto px-6 py-20">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6 text-white animate-fade-in">
                      <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-3xl md:text-4xl font-light italic opacity-90">
                        {slide.subtitle}
                      </p>
                      <p className="text-lg md:text-xl max-w-lg opacity-80 leading-relaxed">
                        {slide.description}
                      </p>
                    </div>

                    {/* Right Product Images */}
                    <div className="relative flex items-center justify-center gap-6 animate-slide-in">
                      {slide.images.map((image, imgIndex) => (
                        <div 
                          key={imgIndex}
                          className="relative animate-float"
                          style={{ animationDelay: `${imgIndex * 0.2}s` }}
                        >
                          <img
                            src={image}
                            alt={`Ice cream box ${imgIndex + 1}`}
                            className="w-64 h-auto object-contain drop-shadow-2xl"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0"
      >
        <ChevronLeft className="w-8 h-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0"
      >
        <ChevronRight className="w-8 h-8" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === selectedIndex 
                ? "bg-white w-8" 
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
