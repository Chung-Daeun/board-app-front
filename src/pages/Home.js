import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    alert("하이염.");
  }, []);
  return (
    <div>게시판 홈</div>
  );
};

export default Home;