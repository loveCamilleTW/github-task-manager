import { useEffect, useState } from "react";
import { useAccessToken } from "../hooks";
import { useNavigate } from "react-router-dom";

export function CallbackPage() {
  const [code, setCode] = useState("");
  const { data: accessToken } = useAccessToken(code);

  const navigate = useNavigate();

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    setCode(urlParams.get("code") as string);
  }, []);

  useEffect(() => {
    if (accessToken) {
      console.log("accessToken =", accessToken);
      localStorage.setItem("accessToken", accessToken);
      navigate("/issues");
    }
  });

  return <h1>Callback</h1>;
}
