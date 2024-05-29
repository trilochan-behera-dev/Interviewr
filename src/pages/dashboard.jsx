import Card from "@/components/Card";
import CardDetails from "@/components/CardDetails";
import Form from "@/components/Form";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Dashboard() {
  const router = useRouter();
  const initialObj = {
    company_name: "",
    company_location: "",
    company_strength: "",
    contact_person: "",
    contact_number: "",
    job_type: "",
    applied_date: "",
    applied_through: "",
    expected_ctc: "",
    interview_start_date: "",
    next_interview_date: "",
    recruitment_status: "",
    offer_ctc: "",
    joining_date: "",
    offer_accepted: "",
    note: "",
    designation: "",
    technology: "",
    total_experience: "",
    auth_user: "",
  };

  const errorMsg = {
    designation: true,
    company_name: true,
    recruitment_status: true,
    applied_date: true,
    job_type: true,
  };

  const [formData, setformData] = useState(initialObj);
  const [errorMessage, setErrorMessage] = useState(errorMsg);
  const [cardData, setCardData] = useState([]);
  const [cardDetails, setCardDetails] = useState("");
  const handleSave = (value, id) => {
    if (!value) {
      setErrorMessage({ ...errorMessage, [id]: true });
    } else {
      setErrorMessage({ ...errorMessage, [id]: false });
    }
    setformData({ ...formData, [id]: value });
  };

  const saveData = async () => {
    let allOk = true;
    for (let key in errorMessage) {
      if (errorMessage[key]) {
        allOk = false;
        break;
      }
    }

    if (allOk) {
      const localData = localStorage.getItem("authUser");
      const newData = JSON.parse(localData);
      const uploadData = { ...formData, auth_user: newData.id };
      console.log("uploadData: ", uploadData);
      const res = await fetch("/api/interview", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(uploadData),
      });

      const result = await res.json();
      const data = [...cardData, result?.data];
      setCardData(data);
      setformData(initialObj);
      setErrorMessage(errorMsg);
    } else {
      alert("Please fill all required fields");
    }
  };

  const handleReadMore = (id) => {
    setCardDetails(id);
  };

  const handleBack = () => {
    setCardDetails("");
  };

  const handleLogout = () => {
    localStorage.removeItem("authUser");
    router.push("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      const localData = localStorage.getItem("authUser");
      const newData = JSON.parse(localData);
      const res = await fetch(`/api/interview?auth_user=${newData.id}`); // Fetch from the "interview" database
      const result = await res.json();
      setCardData(result?.data);
    };
    if (window !== "undefined") fetchData();
  }, []);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const userData = localStorage.getItem("authUser");
    const data = userData && JSON.parse(userData);
    if (!data?.token) {
      router.push("/");
    }
  }, []);

  if (!isClient) return null;

  return (
    <>
      <div
        className={`relative flex flex-col lg:max-h-screen items-center gap-8 py-12 px-4 sm:px-12 xl:px-24 bg-white dark:bg-dark ${inter.className}`}
      >
        <div className="relative w-full ">
          <p className="border-b-4 w-fit border-dotted border-cyan-700 text-cyan-700 font-bold text-4xl  m-auto text-center">
            {isClient ? "Interviewr" : ""}
          </p>
          <p
            className="text-gray-500 absolute top-0 right-0 border-2 px-2 py-1 font-bold cursor-pointer text-sm"
            onClick={() => handleLogout()}
          >
            Logout
          </p>
        </div>
        <div className="w-full xl:flex justify-between gap-20 overflow-hidden">
          <div className="w-full xl:w-3/5">
            <Form
              formData={formData}
              handleSave={handleSave}
              saveData={saveData}
              errorMsg={errorMessage}
            />
          </div>
          <div className="w-full xl:w-2/5 overflow-auto px-4 mb-2 py-8 xl:py-0">
            {cardDetails ? (
              <div className=" h-fit overflow-auto">
                <CardDetails
                  cardData={cardData.find(
                    (d) => d.company_name === cardDetails
                  )}
                  handleBack={handleBack}
                />
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-4  h-fit overflow-auto">
                {cardData?.map((cards, index) => (
                    <Card data={cards} onClick={(id) => handleReadMore(id)} key={index}/>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
