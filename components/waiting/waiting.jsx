import React from 'react';
import styled from 'styled-components';
import Icon from '../../assets/img/icon.png';

const Waiting = () => {
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
                marginTop:"-35px",
                marginLeft:"110px",
                color:"#593523"
            }}>회원가입 신청이 완료되었습니다!</p>
        <br /><br /><br />
        <p style={{
                fontSize:"22px",
                fontWeight:"900",
                marginTop:"-35px",
                marginLeft:"110px",
                color:"#593523"
            }}>DGSW 학생이 맞는지 관리자의</p>
        <br />
        <p style={{
                fontSize:"22px",
                fontWeight:"900",
                marginTop:"-35px",
                marginLeft:"160px",
                color:"#593523"
            }}>확인이 필요합니다.</p> 
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <p style={{
                fontSize:"18px",
                fontWeight:"900",
                marginTop:"-35px",
                marginLeft:"180px",
                color:"#C4BEBB"
            }}>잠시 대기해주세요.</p> 

    </div>
);
}


export default Waiting;