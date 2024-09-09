import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Lottie from "lottie-react";
import arrowLoader from "../assets/arrow-loader.json";
// import Register from "./Register";
import BlackPage from "./BlackPage";
import WhitePage from "./WhitePage";

const backend = import.meta.env.VITE_BACKEND_URL;
// const registrationLink= "http://localhost:5173/register/NPR/125"
// const registrationLink= "http://localhost:5173/NPR/125"
// const registrationLink= "http://localhost:5174/NPR/125"
const Layout = () => {
  const params = useParams();
  const { sub_id_1, sub_id_2 } = params;

  const [isWhitePage, setIsWhitePage] = useState(false);
  const [isBlackPage, setIsBlackPage] = useState(false);

  const [redirectUrl, setRedirectUrl] = useState("");
  const [userId, setUserId] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const [responseData, setResponseData] = useState();

  console.log({ params });
  console.log({ userId });
  console.log({ redirectUrl });
  console.log({ errorMessage });
  console.log({ responseData });

  useEffect(() => {
    signUp();
  }, []);

  async function signUp() {
    setIsLoading(true);
    let newUrl = "";

    if (sub_id_1 && sub_id_2) {
      newUrl = `${backend}/register/?sub_id_1=${sub_id_1}&sub_id_2=${sub_id_2}`;
    }
    if (sub_id_1 && !sub_id_2) {
      newUrl = `${backend}/register/?sub_id_1=${sub_id_1}`;
    }

    if (!sub_id_1 && !sub_id_2) {
      newUrl = `${backend}/register`;
    }

    console.log({ newUrl });
    try {
      const response = await axios.get(newUrl);

      if (response.data) {
        setResponseData(response.data);
        let { userId, url, page } = response.data;

        if (page === "white") {
          setIsWhitePage(true);
          setIsBlackPage(false);
          setIsLoading(false);
        }

        if (page === "black") {
          setIsWhitePage(false);
          setIsBlackPage(true);
          setIsLoading(false);
        }
        // registrationPageEvent(); // facebook event
        setUserId(userId);
        setRedirectUrl(url);
        // registration successful
      }
    } catch (error) {
      console.log({ error });
      setErrorMessage({ "Registration error": error });
    }
  }

  const loadingComponent = (
    <div
      // className="w-screen relative [background:linear-gradient(180deg,_#1e1e1e,_#040303)] h-screen overflow-hidden flex flex-col items-center justify-center text-left text-13xl text-gray-100 font-poppins"
      className="w-screen relative h-screen bg-white overflow-hidden flex flex-col items-center justify-center text-left text-13xl text-gray-100 font-poppins"
    >
      <div className="flex flex-row justify-center items-center text-2xl text-white font-bold">
        <div className="flex flex-col gap-4 items-start justify-start text-[18px]">
          {/* ==============={on component mount}====================== */}
          <Lottie animationData={arrowLoader} />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* <BlackPage /> */}
      {/* <WhitePage /> */}
      {isLoading && <>{loadingComponent}</>}
      {isWhitePage && <WhitePage />}
      {isBlackPage && <BlackPage />}
    </>
  );
};

export default Layout;
