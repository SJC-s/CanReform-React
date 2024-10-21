import { Button, Col, DropdownButton, DropdownItem, Nav, Row } from 'react-bootstrap';
import '../../../public/css/Layout.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {Link, useNavigate} from "react-router-dom";
import logo_sample from '../../../public/upload/logo_sample.svg';

function SpreadBtn() {
    return (
        <DropdownButton className="spread-button" drop="down" title={<FontAwesomeIcon icon={faBars} />}>
            <DropdownItem as={Link} to="/">
                홈페이지
            </DropdownItem>
            <DropdownItem as={Link} to="/posts">
                게시판
            </DropdownItem>
        </DropdownButton>
    );
}

export default function LayoutHeader({ isLoggedIn, setIsLoggedIn }) {

    const navigate = useNavigate();

    const handleLogout = () => {
        // 로그아웃 처리
        localStorage.removeItem("token"); // 토큰 삭제
        setIsLoggedIn(false); // 로그인 상태 변경
        navigate("/"); // 로그아웃 후 메인 페이지로 이동
    };

    return (
        <>
            <Row>
                <Col xs={12}>
                    <div className="d-flex justify-content-between align-items-center header-custom">
                        <SpreadBtn />
                        <div className="logo justify-content-center">
                            <img src={logo_sample} alt="LOGO" className="logo-image" onClick={()=>navigate('/')}/>
                        </div>
                        <Nav className="justify-content-end gap-2 nav-custom">
                            {!isLoggedIn ? (
                                <>
                                    <Button variant="outline-secondary" as={Link} to="/login" className="text-reset">로그인</Button>
                                    <Button variant="outline-secondary" as={Link} to="/signup" className="text-reset">회원가입</Button>
                                </>
                            ) : (
                                <>
                                    <Button variant="outline-secondary" as={Link} to="/mypage" className="text-reset">내정보</Button>
                                    <Button variant="outline-secondary" onClick={handleLogout} className="text-reset">로그아웃</Button>
                                </>
                            )}
                        </Nav>
                    </div>
                </Col>
            </Row>
        </>
    );
}