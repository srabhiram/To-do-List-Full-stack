"use client";

import { useAppContext, UserData } from "@/app/theme-provider";
import axios from "axios";
import React, { useEffect, useState } from "react";



export default function page() {
  const [data, setData] = useState<UserData | null>(null);
  const fetchedData = useAppContext();
  useEffect(()=>{
      setData(fetchedData);
  }, [fetchedData])
  return (
    <>
      <main className="w-full  mx-2 my-3 p-3 rounded-lg">
        <header>
          <h1 className="text-[2.8rem] font-playwrite font-bold">Settings</h1>
        </header>
        <section className="flex justify-center w-full ">
          <div className="bg-zinc-50 flex items-start w-96 h-[28rem] px-5 py-3 m-5 rounded-md shadow-md">
            <div className="flex items-center justify-center gap-4">
              <div className="bg-green-400 rounded-full w-24 h-24"></div>
              <div className="font-semibold text-xl">
                <h1>{data?.fullname}</h1>
                <h2 className="text-zinc-400">{data?.email}</h2>
              </div>{" "}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
