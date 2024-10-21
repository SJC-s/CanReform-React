import MainSlide from "./MainSlide.jsx";
import MainScroll from "./MainScroll.jsx";
import '../../css/MainPage.css';

export default function MainPage() {

    return (
        <>
            <div className='logoimg'>
                <img src={`/upload/CanReform.png`} alt='logo' onClick={()=>{window.location.href='/'}}/>
            </div>
            <MainSlide/>
            <MainScroll/>
        </>
    )
}