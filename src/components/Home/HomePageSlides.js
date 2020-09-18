/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import AliceCarousel from 'react-alice-carousel'

const items = [
    {
        id: 1,
        class: 'slide-1'
    },
    {
        id: 2,
        class: 'slide-2'
    },
    {
        id: 3,
        class: 'slide-3'
    },
    {
        id: 4,
        class: 'slide-4'
    },
    {
        id: 5,
        class: 'slide-5'
    }
];

const HomePageSlides = () => {
    const state = {
        galleryItems:
            items.map((item, index) => {
                return (
                    <div
                    key={index}
                        className={`home-background-container ${item.class} bg-img pb-4`}
                    >
                    </div>
                )
            }),
    }
    return (
        <AliceCarousel
            items={state.galleryItems}
            duration={2000}
            autoPlayInterval={5000}
            autoPlayDirection="ltr"
            autoPlay={true}
            controlsStrategy='responsive'
            transitionTimingFunction='ease-in-out'
            buttonsDisabled={true}
            dotsDisabled={true}
            disableAutoPlayOnAction={true} />
    )
}


export default HomePageSlides