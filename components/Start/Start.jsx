import Icon from '../../assets/img/icon.png';
import './Start.css';
import { Link } from 'react-router-dom';

function Start() {
    return (
        <div className="Start">
            <img src={Icon}  alt = "text" className="startpoto" />
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
                }}>고민을 나누고 소통하는 성장 플랫폼</p>
            <br />
            <br />
            <br />
            <br />
            <Link to="/SignupPages">
                <button type="button" className="SignupPagesButton">가입하기</button>
            </Link>
            <br />
            <br /> 
            <Link to="/LoginPages">
                <button type="button" className="LoginPagesButton">로그인</button>
            </Link>
        </div>
    );
}

export default Start;