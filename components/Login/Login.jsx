import { useState } from "react"; // useState import 
import Icon from '../../assets/img/icon.png';
import './Login.css'; // css import 
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(props) {
    const [email, setEmail] = useState(""); 
    const [pw, setPw] = useState(""); 
    const [isSubmitting, setIsSubmitting] = useState(false); // 중복 요청 방지 상태 추가
    const navigate = useNavigate(); // useNavigate 훅 사용

    const onEmailChang = (event) => {
        setEmail(event.target.value);
    }
    const onPwChang = (event) => {
        setPw(event.target.value);
    }
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        if (isSubmitting) return; 
        setIsSubmitting(true);

        if (!email.includes("@dgsw.hs.kr")) {
            alert("dgsw.hs.kr 이메일만 사용할 수 있습니다.");
            setIsSubmitting(false); // 상태 초기화
            return;
        }

        try {
            const response = await axios.post(
                "http://34.123.11.208/auth/login", 
                { email: email, password: pw }, 
                { headers: { "Content-Type": "application/json" } }
            );

            if (response.status === 200) {
                const token = response.data.token;
                console.log("받은 토큰:", token);

                // 토큰 저장 (예: 로컬 스토리지)
                localStorage.setItem("authToken", token);

                alert("로그인 성공!");
                navigate("/profile"); // props.history.push 대신 navigate 사용
            }
        } catch (error) {
            console.error("에러 발생:", error);
            alert(`로그인 실패: ${error.response?.data?.message || "네트워크 오류"}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="Login">
            <img alt = "text" src={Icon} className="LoginPoto" />
            <h1 style={{
                    fontSize:"50px",
                    marginTop:"-2px",
                    marginLeft:"160px",
                    fontWeight:"1200",
                    color:"#FF9864"
                }}>너의 멘토</h1>
                <p style={{
                    fontSize:"19px",
                    fontWeight:"900",
                    marginTop:"-30px",
                    marginLeft:"140px",
                    color:"#593523"
                }}>다시 돌아오신 것을 환영해요!</p>
                <br />
                <p style={{
                    fontSize:"19px",
                    fontWeight:"900",
                    marginTop:"-30px",
                    marginLeft:"120px",
                    color:"#C4BEBB"
                }}>dgsw.hs.kr 이메일을 작성해주세요</p>
            <br /><br /><br />
            <h3 style={{marginLeft:"100px", marginTop:"-20px"}}>이메일</h3>
            <input className="Emailtool" type="text" placeholder="0000@dgsw.hs.kr" value={email} onChange={onEmailChang}/>
            <br /><br /><br />
            <h3 style={{marginLeft:"100px", marginTop:"-20px"}}>비밀번호</h3>
            <input className="Emailtool" type="password" placeholder="암호를 입력하세요" value={pw} onChange={onPwChang}/>
            <br /><br /><br />
            <button className="LoginButton" onClick={onSubmitHandler} disabled={isSubmitting}>로그인</button>
        </div>
    );
}

export default Login;