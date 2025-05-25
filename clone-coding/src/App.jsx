import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from "react";

// pages/index.js
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 상단 헤더 */}
      <header className="flex justify-between items-center px-8 py-4 shadow-sm bg-white">
        <h1 className="text-2xl font-bold">오늘의집</h1>
        <nav className="flex gap-6 ml-8 text-gray-700">
          <a href="#">커뮤니티</a>
          <a href="#">쇼핑</a>
          <a href="#">인테리어/생활</a>
        </nav>
        <div className="flex gap-1 ml-8 items-center">
          <nav className="flex gap-6 ml-8  text-gray-700">
          <a href="#" className="inline-flex items-center justify-center">🔍</a>
          <a href="#" className="inline-flex items-center justify-center">🛒</a>
          <a href="#" className="hover:underline inline-flex items-center">로그인</a>
          <a href="#" className="hover:underline inline-flex items-center">회원가입</a>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">글쓰기</button>
          </nav>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="max-w-screen-xl mx-auto px-8 py-10">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
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
      </main>
    </div>
  );
}





