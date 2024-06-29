import React from 'react'
import {
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

const EmblaCarousel = ({ slides, options, onTap }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi);

    return (
        <div className="flex justify-center">

            <section className="embla">

                <div className="embla__buttons mb-[25px]">
                    <button onClick={onPrevButtonClick} disabled={prevBtnDisabled} className="bg-[#181818] rounded-full h-[50px] w-[50px] flex items-center justify-center">
                        <img src={`/img/uparrow.png`} alt={'uparrow'}/>
                    </button>
                </div>

                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">

                        <div className="embla__slide">
                            <div className="embla__slide__number border border-[#00B8A2] p-[5px] rounded-[20px]">
                                <div className="w-[324px] h-[324px] bg-[#161616] rounded-[15px]">
                                    <p className="absolute text-base bottom-[20px] left-[20px]">3:25:12</p>
                                    <button className="absolute text-white text-base bottom-[20px] right-[20px] bg-black px-[10px] py-[5px] rounded-[10px] font-normal">фармить</button>
                                    <div className="h-[324px] shadow-inner shadow-black/[.25] bg-gradient-to-r from-[#FFC530] to-[#BC8700] rounded-[15px] w-[65%]"></div>
                                </div>
                            </div>
                        </div>

                        <div className="embla__slide">
                            <div className="embla__slide__number border border-[#00B8A2] p-[5px] rounded-[20px]">
                                <div className="w-[324px] h-[324px]">
                                    <button className="absolute text-white text-base bottom-[-335px] right-[20px] bg-black px-[10px] py-[5px] rounded-[10px] font-normal">играть</button>
                                    <img className="rounded-[15px]" src={`/img/chess.png`} alt={'chess'}/>
                                </div>
                            </div>
                        </div>

                        <div className="embla__slide">
                            <div className="embla__slide__number border border-[#00B8A2] p-[5px] rounded-[20px]">
                                <div className="w-[324px] h-[324px] bg-gradient-to-b from-[#000000] to-[#3A2A00] rounded-[15px] flex items-center justify-center">
                                    <img className="rounded-[15px]" src={`/img/cointap.png`} alt={'cointap'}/>
                                    <button onClick={onTap} className="absolute text-white text-base bottom-[-685px] right-[20px] bg-black px-[10px] py-[5px] rounded-[10px] font-normal">тапать</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="embla__buttons mt-[25px]">
                    <button onClick={onNextButtonClick} disabled={nextBtnDisabled} className="bg-[#181818] rounded-full h-[50px] w-[50px] flex items-center justify-center">
                        <img src={`/img/downarrow.png`} alt={'downarrow'}/>
                    </button>
                </div>
            </section>

        </div>
    )
}
export default EmblaCarousel;
