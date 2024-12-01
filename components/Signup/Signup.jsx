import React, { useState } from "react";
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import Icon from '../../assets/img/icon.png';
import axios from "axios";

function Signup(props) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [pw, setPw] = useState(""); 
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        if (isSubmitting) return; // 중복 요청 방지
        setIsSubmitting(true);
        try {
            const response = await axios.post("http://34.123.11.208/auth/join", 
            {
                email:email,
                nick:name,
                password:pw

            }, {
                headers: {"Content-Type": "application/json"}
            });
            if (!email.includes("@dgsw.hs.kr")) {
                alert("dgsw.hs.kr 이메일만 사용할 수 있습니다.");
                setIsSubmitting(false);
                return;
            }
            if (name.trim() === "" || pw.length < 6) {
                alert("닉네임 또는 비밀번호를 올바르게 입력하세요.");
                setIsSubmitting(false);
                return;
            } //sessionStorage.setItem("authToken", token);

            if (response.status === 201) {
                const token = response.data.token; // 서버로부터 반환된 토큰
                console.log("받은 토큰:", token);
    
                // 토큰을 로컬 스토리지에 저장
                localStorage.setItem("authToken", token);
                alert("회원가입에 성공했습니다.")
                console.log("성공! 이메일주소: " + response.data.email);
                navigate("/LoginPages");
            }
        } catch (error) {
            if (error.response) {
                console.error("응답 에러:", error.response.data);
                alert(`회원가입 실패: ${error.response.data.message || "알 수 없는 오류"}`);
            } else {
                console.error("네트워크 에러:", error.message);
                alert("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };
    
    return (
        <form className="Slgnup">
                <img src={Icon}  alt = "text" className="SignupPoto"/>
                <h1 style={{
                    fontSize:"50px",
                    marginTop:"-2px",
                    marginLeft:"160px",
                    fontWeight:"1200",
                    color:"#FF9864"
                }}>너의 멘토</h1>
                <p style={{
                    fontSize:"22px",
                    fontWeight:"900",
                    marginTop:"-30px",
                    marginLeft:"100px",
                    color:"#593523"
                }}>dgsw.hs.kr 이메일로 가입해주세요</p>
                <br /><br /><br /><br />
                <p style={{marginLeft:"90px", marginTop:"-70px"}}>이메일</p>
                <input className="signupemail" 
                    type="text" 
                    placeholder="0000@dgsw.hs.kr" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br /><br /><br /><br /><br /><br />
                <p style={{marginLeft:"90px", marginTop:"-70px"}}>닉네임</p>
                <input className="signupname" 
                    type="text" 
                    placeholder="예: mmg124" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                />
                <br /><br /><br /><br /><br /><br />
                <p style={{marginLeft:"90px", marginTop:"-70px"}}>비밀번호</p>
                <input className="signuppassword" 
                    type="password" 
                    placeholder="비밀번호를 입력하시오" 
                    value={pw} 
                    onChange={(e) => setPw(e.target.value)}
                />
                <br /><br /><br />
                <button className="SignupButton" onClick={onSubmitHandler}>시작하기</button>         
        </form>
    );
}

export default Signup;