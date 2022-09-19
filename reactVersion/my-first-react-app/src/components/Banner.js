import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useState, useEffect } from "react";
import 'animate.css';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleteing] = useState(false);
    const toRotate = [
        "A web Developer", "A web Designer", "A UI/UX Designer"
    ]
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleteing(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleteing(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => {
            clearInterval(ticker);
        };
    }, [text])

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Welcome to my Website
                        </span>
                        <h1>{'Hi, I am'}</h1>
                        <h2>{'Gary Xue'}</h2>
                        <span className="wrap">{text}</span>
                        <p>{'I graduated from East China Normal University'}</p>
                        <button onClick={() => {
                            console.log('connect')
                        }}>Let's connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}