import React from 'react';
/*
const Button = () => {
  const handleClick = () => {
    window.location.href = 'https://velog.io/@yj_y/posts'; // ← 여기에 본인 블로그 주소 넣기!
  };

  return (
    <button onClick={handleClick}>
      블로그로 이동
    </button>
  );
  
}; */

export default function Button({ value, onClick }) {
  return (
    <button onClick={() => onClick(value)} style={styles.button}>
      {value}
    </button>
  );
} // value, onClick이라는 Props를 받아서 버튼 렌더링
// 클릭하면 onClick(value) 함수 실행, 재사용 가능 

const styles = {
  button: {
    margin: '8px',
    padding: '16px 32px',
    fontSize: '18px',
    borderRadius: '20px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  }
};

