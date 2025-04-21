// src/app/courses/page.js
import React from "react";
import ClientCourses from "./ClientCourses"; // Клиентский компонент
import BannerDetails from "./[id]/page";
// Основной файл остаётся серверным и просто рендерит клиентский компонент
export default function Banners() {
  return <BannerDetails />;
}

export const dynamic = "force-dynamic";