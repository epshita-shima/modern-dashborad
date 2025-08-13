import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import RootLayout from "@/components/Layout/RootLayout";
import TopCard from "@/components/DashboardDetails/TopCard";
import CategorywiseDetails from "@/components/DashboardDetails/CategorywiseDetails";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
   <TopCard></TopCard>
     <CategorywiseDetails></CategorywiseDetails> 
    </div>
  );
}

Home.getLayout= function getLayout(page){
  return <RootLayout>{page}</RootLayout>
}
