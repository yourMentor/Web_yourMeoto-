import styled from 'styled-components';
import Icon from '../../assets/img/icon.png';
import "./profile.css";

const Profile = () => {

  return (
    <div>
      <div className="profilebox">
        <button className="LogoutButton"> 로그아웃</button>
        <div className="seon" />
        <h2 style={{
          marginTop:"-480px", marginLeft:"550px", fontSize:"500", color:"#593523"
        }}>작성 글</h2>
      </div>
    </div>
  );
}

export default Profile;