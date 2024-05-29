import Login from "@/components/Login";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const router=useRouter();

  const handleToggle = () => {
    setIsLogin((prev)=>!prev);
  };

  useEffect(() => {
    setIsClient(true);
    const userData = localStorage.getItem("authUser");
    const data = userData && JSON.parse(userData);
    if (data?.token) {
      router.push("/dashboard");
    }
  }, []);

  if (!isClient) return null;
  return (
    <div
      className={`flex flex-col lg:max-h-screen h-screen items-center gap-8 py-12 px-4 sm:px-12 lg:px-24 bg-white dark:bg-dark ${inter.className}`}
    >
      <Login
        handleToggle={handleToggle}
        isLogin={isLogin}
      />
    </div>
  );
}
