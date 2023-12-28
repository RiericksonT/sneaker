"use client";

import { use, useCallback, useEffect, useState } from "react";
import styles from "./slider.module.scss";
import Image from "next/image";

type SlideProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  color: string;
  position: number;
};

const HandleSlider = (length: number) => {
  const [index, setIndex] = useState(0);

  const handleSliderLeft = useCallback(() => {
    if (index === 0) {
      setIndex(length - 1);
    } else {
      setIndex(index - 1);
    }
  }, [index]);
  const handleSliderRight = useCallback(() => {
    if (index === length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }, [index]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSliderLeft();
    }, 5000);

    return () => clearTimeout(timer);
  }, [index]);

  return {
    index,
    handleSliderLeft,
    handleSliderRight,
  };
};

export default function Slider({ slide }: { slide: SlideProps[] }) {
  const { index, handleSliderLeft, handleSliderRight } = HandleSlider(
    slide?.length
  );

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        <div className={styles.sliderContentText}>
          <h1
            className={styles.sliderContentTextTitle}
            style={{
              boxShadow: `3px 5px white`,
              background: slide[index].color,
            }}
          >
            {slide[index]?.title}
          </h1>
          <p
            className={styles.sliderContentTextDescription}
            style={{ background: slide[index]?.color }}
          >
            {slide[index]?.description}
          </p>
          <a
            href={slide[index]?.link}
            target="_blank"
            className={styles.sliderContentTextButton}
            style={{ backgroundColor: slide[index]?.color }}
          >
            Mais...
          </a>
        </div>
        <div className={styles.sliderContentImage}>
          <Image
            src={slide[index]?.image}
            alt={slide[index].title}
            width={400}
            height={400}
          />
          <div className={styles.sliderSkip}>
            <button
              className={styles.sliderContentImageArrowLeft}
              onClick={handleSliderLeft}
            >
              <Image
                src="/icons/arrow-left.svg"
                alt="arrow left"
                width={20}
                height={20}
              />
            </button>
            <button
              className={styles.sliderContentImageArrowRight}
              onClick={handleSliderRight}
            >
              <Image
                src="/icons/arrow-right.svg"
                alt="arrow right"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
