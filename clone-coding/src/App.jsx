import React, { useRef } from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 상단 헤더 */}
      <header className="flex justify-between items-center px-8 py-4 shadow-sm bg-white">
        <h1 className="text-2xl font-bold">오늘의집</h1>
        <nav className="flex gap-6 mr-80 text-gray-700">
          <a href="#" className="text-black hover:text-blue-500">커뮤니티</a>
          <a href="#" className="text-black hover:text-blue-500">쇼핑</a>
          <a href="#" className="text-black hover:text-blue-500">인테리어/생활</a>
        </nav>
        <div className="flex gap-1 ml-8 items-center">
          <nav className="flex gap-6 ml-8  text-gray-700">
          <a href="#" className="inline-flex items-center justify-center">🔍</a>
          <a href="#" className="inline-flex items-center justify-center">🛒</a>
          <a href="#" className="inline-flex items-center text-black hover:text-blue-500">로그인</a>
          <a href="#" className="inline-flex items-center text-black hover:text-blue-500">회원가입</a>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">글쓰기</button>
          </nav>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="max-w-screen-xl mx-auto px-8 py-10">
        <div className="bg-white rounded-lg overflow-hidden">
          <img
            src="src/example.jpg"
            alt="뷰 좋은 방"
            className="w-full h-[400px] object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold">
              무광 블랙과 스틸 감성, 멋진 뷰까지! 보는 맛이 있어요 😋
            </h2>
            <p className="text-sm text-gray-500 mt-2">블랙좋아해요 ❤️</p>
          </div>
        </div>
         <CategoryMenu />
         <RecommendSection />
         <ReviewSection />
         <Footer />
      </main>
    </div>
    
  );
}

function Footer() {
  return (
    <footer className="bg-gray-100 text-sm text-gray-600 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-200">

        {/* 고객센터 */}
        <div>
          <h3 className="font-semibold text-black mb-2">고객센터</h3>
          <p className="text-lg font-bold text-black">1670-0876</p>
          <p>09:00 - 18:00</p>
          <div className="mt-3 space-x-2">
            <button className="px-3 py-1 border rounded text-sm">카톡 상담</button>
            <button className="px-3 py-1 border rounded text-sm">이메일 문의</button>
          </div>
        </div>

        {/* 회사 정보 */}
        <div className="space-y-1">
          <p className="mt-4 text-xs text-gray-500">
            (주)버킷플레이스 · 대표 이승재 · <br />서울 서초구 서초대로74길 4 삼성생명서초타워 27층<br />
            사업자등록번호 119-86-91254 <br /> 통신판매업신고번호 2018-서울서초-0580호<br />
            contact@bucketplace.net
          </p>
        </div>

        {/* 인증 & 소셜 */}
        <div className="flex items-center justify-end text-sm text-gray-400">
          
          <p className="mx-5 my-5 text-xs text-gray-400 mt-4">
            © 2014 Bucketplace Co., Ltd. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}


const reviews = [
  {
    id: 1,
    title: "코드디자인인테리어",
    image: "https://i.pinimg.com/736x/91/64/b8/9164b8e874b92e69c804d5c33b873faf.jpg",
    content: "제가 여러 업체 실측&상담을 한 끝에 디자인 코드를 선택했습니다! 모든 면에서 다 좋았지만...",
  },
  {
    id: 2,
    title: "요즘인테리어",
    image: "https://i.pinimg.com/736x/e9/3a/6e/e93a6efdf83882028892211e04a8a5b2.jpg",
    content: "저희는 구축 아파트를 계약해서 무조건 올수리 인테리어를 생각했던 예비 신혼 부부입니다...",
  },
  {
    id: 3,
    title: "ABLY_design",
    image: "https://i.pinimg.com/736x/04/2b/ea/042bea824c286bf90a72a61cda91a26f.jpg",
    content: "구O빈 팀장님께서 소통도 원활히 잘 해주시고 젊은 감각으로 트렌디한 자재를 잘 추천해주셨습니다...",
  },
];

function ReviewSection() {
  return (
    <section className="px-6 py-10 bg-white">
      {/* 제목 */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">유저들의 인테리어 시공 리뷰</h2>
        <a href="#" className="text-sm text-blue-500 font-medium">더보기</a>
      </div>

      {/* 카드 목록 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <img
              src={review.image}
              alt={review.title}
              className="w-full h-[220px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm font-bold text-gray-800 mb-1">{review.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                {review.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const categories = [
  { emoji: '📺', label: '8시라이브' },
  { emoji: '⏰', label: '오늘의딜' },
  { emoji: '💬', label: '커뮤니티' },
  { emoji: '❌', label: '행운출첵' },
  { emoji: '🧳', label: '살림살이' },
  { emoji: '💄', label: '취향의발견' },
  { emoji: '🧼', label: '오마트' },
  { emoji: '🚚', label: '원하는날도착' },
  { emoji: '👷‍♂️', label: '리모델링' },
  { emoji: '🎁', label: '혜택보기' },
];

function CategoryMenu() {
  return (
    <section className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-5 sm:grid-cols-6 md:grid-cols-10 gap-4">
        {categories.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-sm text-gray-700 hover:text-blue-600">
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl mb-2 shadow-sm">
              {item.emoji}
            </div>
            <span className="text-xs text-center">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const items = [
  {
    id: 1,
    username: "merci_sun",
    image: "https://i.pinimg.com/736x/de/b6/37/deb6374dd30604b1fd01862eb9ea4b01.jpg",
  },
  {
    id: 2,
    username: "zacance",
    image: "https://i.pinimg.com/736x/64/ea/1f/64ea1fa47fca06e82391bd8020e234e8.jpg",
  },
  {
    id: 3,
    username: "crunky_",
    image: "https://i.pinimg.com/736x/7c/55/38/7c5538f20b23c535d468ec54ebf2fac1.jpg",
  },
  {
    id: 4,
    username: "민스홈이야기",
    image: "https://i.pinimg.com/736x/18/cb/56/18cb563da1e071c23cfb25bcca3289cc.jpg",
  },
  {
    id: 5,
    username: "메가커피",
    image: "https://i.pinimg.com/736x/33/7d/1e/337d1e395f7abbac465b40d6abf42583.jpg",
  },
  {
    id: 6,
    username: "ddoddo",
    image: "https://i.pinimg.com/736x/40/0e/2a/400e2a336569e170e5be75ee7945c61c.jpg",
  }
];

function RecommendSection() {

  const scrollRef = useRef(null);
  const scrollByAmount = 300;

  const handleScrollRight = () => {
    scrollRef.current?.scrollBy({
      left: scrollByAmount,
      behavior: 'smooth',
    });
  };

  const handleScrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -scrollByAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="px-6 py-10 bg-gray-50">
      {/* 제목 */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 text-left">이런 사진 찾고 있나요?</h2>
          <p className="text-sm text-gray-500 text-left">좋아하실 만한 인테리어 콘텐츠를 추천해드려요</p>
        </div>
        <a href="#" className="text-sm text-blue-500 font-medium">더보기</a>
      </div>
      

      {/* 카드 리스트 */}
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide pr-14"></div>
     <div className="relative">
      <div ref={scrollRef} className="flex space-x-4 overflow-x-auto scrollbar-hide pr-14">
        {items.map((item) => (
          <div
            key={item.id}
            className="min-w-[200px] rounded-lg overflow-hidden shadow bg-white relative"
           >
             {/* ✅ 이미지 비율 고정 */}
           <div className="aspect-[3/4] w-full overflow-hidden">
             <img
                src={item.image}
                alt={item.username}
                className="w-full h-full object-cover"
              />
             </div>
            <div className="absolute bottom-0 left-0 w-full px-3 py-2 bg-gradient-to-t from-black/70 to-transparent text-white text-sm font-medium">
              {item.username}
            </div>
            <div className="absolute bottom-2 right-2 text-white text-xl">
              🔖
            </div>
          </div>
        ))}
      </div>

        {/* 👈 왼쪽 화살표 버튼 */}
       <button
         onClick={handleScrollLeft}
         className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white text-gray-700 shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 z-10"
       >
        <span className="text-2xl">‹</span>
       </button>

        {/* 👉 오른쪽 화살표 버튼 */}
        <button
          onClick={handleScrollRight}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white text-gray-700 shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100"
        >
          <span className="text-2xl">›</span>
        </button>
      </div>
    </section>
    
  );
}
