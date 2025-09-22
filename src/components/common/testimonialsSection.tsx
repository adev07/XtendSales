import { motion } from "framer-motion";
import { Quote, User, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState, useMemo, memo } from "react";

type Testimonial = {
    quote: string;
    name: string;
    title: string;
};

const testimonials: Testimonial[] = [
    {
        quote: "Hotpack has been in the forefront in the packaging industry in innovating its operations from the factory floor to customer relationship management. With the implementation of XtendSales, we have been able to get an end-to-end view of our sales and delivery management processes in turn helping us curb redundancy and gain cost efficiency in the UAE.",
        name: "Mr.P.B.Abdul Jebbar",
        title: "Group Managing Director",
    },
    {
        quote: "Post-implementation, our sales team gained efficiency remarkably with the integration of Xtendsales mobility solution to our combined and comprehensive processes.",
        name: "Mr. Zainudeen Beeravunni",
        title: "Group Executive Director",
    },
    {
        quote: "We used two different Vansales softwares but Xtendsales is the only one which easily integrated with our Tally ERP. Our entire sales & delivery team is happy with this mobile app that helped them keep track of sales and customer receivables very handy.",
        name: "Development Manager",
        title: "Gourment Food Groups, UAQ",
    },
];

function TestimonialsSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: 'start',
            skipSnaps: false,
            dragFree: false,
            containScroll: 'trimSnaps',
            inViewThreshold: 0.7,
            watchDrag: true,
            watchResize: true
        },
        [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true, stopOnFocusIn: false })]
    );
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollTo = useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    );

    const scrollPrev = useCallback(
        () => emblaApi && emblaApi.scrollPrev(),
        [emblaApi]
    );

    const scrollNext = useCallback(
        () => emblaApi && emblaApi.scrollNext(),
        [emblaApi]
    );

    const onInit = useCallback((emblaApi: any) => {
        setScrollSnaps(emblaApi.scrollSnapList());
    }, []);

    const onSelect = useCallback((emblaApi: any) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onInit(emblaApi);
        onSelect(emblaApi);
        emblaApi.on("reInit", onInit);
        emblaApi.on("select", onSelect);

        return () => {
            emblaApi.off("reInit", onInit);
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi, onInit, onSelect]);

    // Memoize testimonial cards to prevent unnecessary re-renders
    const testimonialCards = useMemo(() =>
        testimonials.map((t, idx) => (
            <div key={idx} className="embla__slide flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_33.333%] px-2 sm:px-3">
                <div
                    className="bg-blue-500 text-white rounded-xl p-4 sm:p-6 border h-full flex flex-col"
                    style={{
                        willChange: 'transform',
                        transform: 'translateZ(0)',
                        backfaceVisibility: 'hidden'
                    }}
                >
                    {/* Header with quote icon */}
                    <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-blue-100 mb-3 sm:mb-4">
                        <Quote className="text-blue-700 w-4 h-4 sm:w-5 sm:h-5" />
                    </div>

                    {/* Content area that grows to fill available space */}
                    <div className="flex-1 flex flex-col">
                        <p className="text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1">
                            {t.quote}
                        </p>

                        {/* Separator */}
                        <div className="bg-blue-300 h-px w-full mb-3 sm:mb-4" />

                        {/* Footer with author info - always at bottom */}
                        <div className="flex items-center gap-2 sm:gap-3 mt-auto">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-blue-300">
                                <User className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700" />
                            </div>
                            <div className="min-w-0">
                                <p className="font-semibold text-xs sm:text-sm truncate">{t.name}</p>
                                <p className="text-blue-100 text-xs truncate">{t.title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )), []
    );

    return (
        <section className="bg-white py-16 sm:py-18 lg:py-18">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <motion.div
                    className="text-center mb-10 sm:mb-12 lg:mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                        What Our Clients <span className="relative">Says
                            <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 mx-auto h-1.5 sm:h-2 w-24 sm:w-32 bg-yellow-300 rounded-full"></span>
                        </span>
                    </h2>
                </motion.div>

                {/* Carousel */}
                <div className="relative">
                    {/* Navigation Buttons - Hidden on mobile, visible on tablet and up */}
                    <button
                        className="hidden md:block absolute left-[-40px] lg:left-[-50px] border border-gray-200 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-900 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                        onClick={scrollPrev}
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
                    </button>

                    <button
                        className="hidden md:block absolute right-[-40px] lg:right-[-50px] border border-gray-200 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-900 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                        onClick={scrollNext}
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
                    </button>

                    <div
                        className="embla overflow-hidden"
                        ref={emblaRef}
                    >
                        <div className="embla__container flex">
                            {testimonialCards}
                        </div>
                    </div>
                </div>

                {/* Dots */}
                <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
                    {scrollSnaps.map((_, idx) => (
                        <button
                            key={idx}
                            className={`w-2 h-2 rounded-full transition-colors duration-200 ${idx === selectedIndex ? "bg-blue-400" : "bg-blue-300"
                                }`}
                            onClick={() => scrollTo(idx)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default memo(TestimonialsSection);

