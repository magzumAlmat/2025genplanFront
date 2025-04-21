"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { getAllBanners } from "@/store/slices/authSlice";
import { useSelector, useDispatch } from "react-redux";

export default function BannerDetails() {
    const host = process.env.NEXT_PUBLIC_HOST;
    const { id } = useParams();
    const dispatch = useDispatch();

    const { allBanners} = useSelector((state) => state.auth);
    useEffect(()=>{
        dispatch(getAllBanners())
    },[dispatch])
    console.log(allBanners)


    return(<>
    <h1>{id}</h1>
    

    </>)
}