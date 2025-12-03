import { navigate } from "astro:transitions/client";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import toast, { Toaster } from "react-hot-toast";
import { validateEmail } from "../utils/formats";
import { STATES } from "../const/states";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");
  const [state, setState] = useState("");
  const [message, setMessage] = useState("");
  const [terms, setTerms] = useState("");
  const [validForm, setValidForm] = useState(false);
  const [captchaValidate, setCaptchaValidate] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleOnClick = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setValidForm(true);
    if (handleValidForm()) {
      handleSendData();
    }
  };

  const handleValidForm = () => {
    if (
      name === "" ||
      lastName === "" ||
      email === "" ||
      validateEmail(email) === false ||
      instagram === "" ||
      state === "" ||
      message === "" ||
      terms === ""
    ) {
      toast.error("Complete the required fields");
      setLoading(false);
      return false;
    } else {
      if (captchaValidate === null) {
        setLoading(false);
        toast.error("You must complete captcha");
        return false;
      } else {
        return true;
      }
    }
  };

  const handleSendData = async () => {
    const form = document.querySelector("#formOwine") as HTMLFormElement;
    const formData = new FormData(form);

    try {
      // TO DO: URL Dinamica
      const response = await fetch("https://sessions.o61wine.com/send.php", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      setLoading(false);
      if (result.e === 0) {
        navigate("https://sessions.o61wine.com/congrats");
      }
      if (result.e === 1) {
        toast.error("Email invalid");
      }
      if (result.e === 2) {
        toast.error("Complete the required fields");
      }
    } catch (e) {
      setLoading(false);
      console.error(e);
    }
  };

  const handleChangeCaptcha = (value: any) => setCaptchaValidate(value);

  return (
    <div className="bg-[url(/owine/assets/bg-border.jpeg)] lg:bg-[url(/owine/assets/border-form.png)] md:bg-cover md:bg-center md:bg-no-repeat w-full max-w-[630px] md:max-w-full md:w-[745px] md:h-[645px] lg:w-[680px] lg:h-[590px] px-2 py-2 mt-4 flex flex-col rounded-2xl md:rounded-none md:justify-center md:items-center rounded-xl">
      <form
        className="flex flex-col justify-center items-center w-full bg-black px-3 py-6 lg:bg-transparent rounded-2xl md:rounded-none"
        id="formOwine"
      >
        <input
          className={`w-full rounded-lg mb-2 p-[13px] text-[13px] placeholder-[#C3C3C3] h-[24px] font-normal placeholder:font-normal border-[2px] border-white ${validForm === true && name === "" ? "!border-red-500" : "border-white"}`}
          type="text"
          placeholder="Name*"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          name="name"
        />
        <input
          className={`w-full rounded-lg mb-2 p-[13px] text-[13px] placeholder-[#C3C3C3] h-[24px] font-normal placeholder:font-normal border-[2px] border-white ${validForm === true && lastName === "" ? "!border-red-500" : "border-white"}`}
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          id="lastName"
          name="lastName"
        />
        <input
          className={`w-full rounded-lg mb-2 p-[13px] text-[13px] placeholder-[#C3C3C3] h-[24px] font-normal placeholder:font-normal border-[2px] border-white ${validForm === true && validateEmail(email) === false ? "!border-red-500" : "border-white"}`}
          type="email"
          placeholder="Email*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          name="email"
        />
        <input
          className={`w-full rounded-lg mb-2 p-[13px] text-[13px] placeholder-[#C3C3C3] h-[24px] font-normal placeholder:font-normal border-[2px] border-white ${validForm === true && instagram === "" ? "!border-red-500" : "border-white"}`}
          type="text"
          placeholder="Instagram username (Public account)*"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
          id="instagram"
          name="instagram"
        />
        <select
          className={`w-full rounded-lg mb-2 text-[13px] px-[13px] text-[#C3C3C3] appearance-none form-select h-[28px] border-[2px] border-white ${validForm === true && state === "" ? "!border-red-500" : "border-white"} ${state !== "" && "!text-[#000000]"}`}
          value={state}
          onChange={(e) => {
            setState(e.target.value);
          }}
          defaultValue=""
          id="state"
          name="state"
        >
          <option value="">State*</option>
          {STATES.map((state, index) => (
            <option key={index} value={state.value}>
              {state.label}
            </option>
          ))}
        </select>
        <textarea
          className={`w-full rounded-lg mb-2 p-[13px] text-[13px] placeholder-[#C3C3C3] h-[150px] font-normal placeholder:font-normal border-[2px] border-white ${validForm === true && message === "" ? "!border-red-500" : "border-white"}`}
          placeholder="Tell us an amazing story to inspire Ami James*"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          name="message"
        />
        <div className="flex items-center bg-white p-[13px] rounded-lg w-full justify-between">
          <p className="text-[13px] text-[#C3C3C3] max-w-sm">
            The prize must be redeemed in person at Miami Ink (Tattoo Shop) in
            Miami, FL, during the month of August 2024. Travel and accommodation
            costs are not included in the prize and are the sole responsibility
            of the winner
          </p>
          <select
            className={`mb-2 text-[13px] w-[100px] px-2 text-[#C3C3C3] border-[#4d4d4d] border form-select-terms appearance-none ${validForm === true && terms === "" ? "!border-red-500" : "border-[#4d4d4d]"} ${terms !== "" && "!text-[#000000]"}`}
            value={terms}
            onChange={(e) => setTerms(e.target.value)}
            id="terms"
            name="terms"
          >
            <option value="0">-</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center w-full mt-4 gap-4">
          <ReCAPTCHA
            sitekey={import.meta.env.PUBLIC_VITE_SITE_RECAPTCHA_KEY as string}
            onChange={handleChangeCaptcha}
            hl="en"
          />
          {loading ? (
            <div className="spinner"></div>
          ) : (
            <button
              onClick={(e) => handleOnClick(e)}
              className="text-white bg-[url(/owine/assets/bg-boton-form.png)] bg-cover bg-no-repeat font-cheddar text-[42px] w-full max-w-[180px] px-10 duration-300 transition-colors hover:text-black"
            >
              Send
            </button>
          )}
        </div>
        <Toaster position="top-right" />
      </form>
    </div>
  );
};

export default FormComponent;
