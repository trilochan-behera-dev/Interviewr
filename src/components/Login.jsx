import InputText from "@/widgets/InputText";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Login({ handleToggle, isLogin }) {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
    requestFor: isLogin ? "login" : "register",
  });

  const handleLogin = async () => {
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    if (result?.token) {
      localStorage.setItem("authUser", JSON.stringify(result));
      router.push("/dashboard");
      setData({
        email: "",
        password: "",
        requestFor: isLogin ? "login" : "register",
      });
    }
  };

  const handleSave = (value, id) => {
    setData({ ...data, [id]: value });
  };
  useEffect(() => {
    setData({ ...data, requestFor: isLogin ? "login" : "register" });
  }, [isLogin]);

  return (
    <div className="w-full sm:w-[75%] md:w-[50%] xl:w-[25%] m-auto">
      <div className="w-full">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {isLogin ? "Sign in" : "Sign Up"} to your account
        </h2>
      </div>

      <div className="mt-10 ">
        <InputText
          type="email"
          label="Email"
          id="email"
          placeholder=""
          //   errorMsg={errorMsg?.company_name}
          onChange={(value, id) => handleSave(value, id)}
          value={data?.email}
        />
        <InputText
          type="password"
          label="Password"
          id="password"
          placeholder=""
          //   errorMsg={errorMsg?.company_name}
          onChange={(value, id) => handleSave(value, id)}
          value={data?.password}
        />

        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-5"
          onClick={() => handleLogin()}
        >
          Sign in
        </button>
        {isLogin ? (
          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 pl-2"
              onClick={() => handleToggle()}
            >
              Create an account
            </a>
          </p>
        ) : (
          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member!
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 pl-2"
              onClick={() => handleToggle()}
            >
              Login
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
