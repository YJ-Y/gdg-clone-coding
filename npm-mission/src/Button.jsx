import React from 'react';

const Button = () => {
  const handleClick = () => {
    window.location.href = 'https://velog.io/@yj_y/posts'; // ← 여기에 본인 블로그 주소 넣기!
  };

  return (
    <button onClick={handleClick}>
      블로그로 이동
    </button>
  );
};

export default Button;