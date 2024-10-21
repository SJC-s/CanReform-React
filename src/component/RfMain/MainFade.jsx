import { useState, useEffect } from 'react';
import '../../css/MainFade.css';

const images = [
    "business.jpg",
    "marketing.jpg",
    "socialmedia.jpg",
    // 더 많은 이미지 파일 추가
];

export default function MainFade() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // 2.5초마다 이미지 전환
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2500);

        return () => clearInterval(intervalId); // 컴포넌트가 unmount될 때 타이머 정리
    }, []);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="container">
            <div className='logoimg'>
                <img src={`/upload/CanReform.png`} alt='logo'/>
            </div>
            <div className="fader">
                <button className="prev" onClick={goToPrevious}>
                    &#10094;
                </button>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`fade ${index === currentIndex ? "active" : ""}`}
                    >
                        <img src={`/upload/${image}`} alt={`fade-${index}`}/>
                    </div>
                ))}
                <button className="next" onClick={goToNext}>
                    &#10095;
                </button>
            </div>
        </div>
    );
}