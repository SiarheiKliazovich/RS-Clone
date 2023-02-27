import { FunctionComponent, useEffect, useState, useRef } from "react";
import "./carousel.scss";
import { СarouselType } from "../../../types/home";
import { nightTheme } from "../../../data/constants";
import carouselLang from "../../../data/carousel";
import { ILangReducer } from "../../../interfaces/langReducer";
import { useSelector } from "react-redux";

const Сarousel: FunctionComponent<СarouselType> = ({
  accentColor,
  isNavbarNightMode,
}: СarouselType) => {
  const testimonial = ["1", "2", "3"];
  const delay = 2500;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const backgroundColor = nightTheme.background.element;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    /* eslint-disable @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === testimonial.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    /* eslint-enable */
    return () => {
      resetTimeout();
    };
  }, [index]);
  const { lang } = useSelector((state: ILangReducer) => state.langReducer);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const list = carouselLang.find((c) => c.lang === lang)!;

  return (
    <div className="section-testimonial">
      <div className="container">
        <div className="section-testimonial-title">
          <span className="title-design">{list.title.littletitle}</span>
          <h2 className="testimonial-title">{list.title.bigtitle}</h2>
        </div>
        <div className="carousel">
          <div className="slideshow">
            <div className="carousel-wrapper">
              <div
                className=" slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
              >
                {list.data.map((item) => (
                  <div className="slide testimonial-item" key={item.nameUser}>
                    <div className="testimonial-item__wrapper">
                      <div className="user-wrapper">
                        <img
                          className="user-img-carousel"
                          src={item.image}
                          alt=""
                        />
                        <div className="user-info">
                          <p className="name-user">{item.nameUser}</p>
                          <p className="name-user-job">{item.profUser}</p>
                        </div>
                      </div>
                      <p className="testimonial-text">{item.testimonials}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="slideshowDots">
                {testimonial.map((_, idx) => (
                  <div
                    key={idx}
                    className="slideshowDot"
                    style={{
                      backgroundColor: isNavbarNightMode
                        ? backgroundColor
                        : index === idx
                        ? accentColor.static
                        : "#959393",
                    }}
                    onClick={() => {
                      setIndex(idx);
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Сarousel;
