import React, { useState } from "react";
import ReactCodeInput from "react-code-input";
import {
  useResendCodeMutation,
  useVerifyEmailMutation,
} from "../../services/auth.service";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import SubmitBtn from "../../components/buttons/SubmitBtn";

const EmailVerificationModule: React.FC = () => {
  const [verificationCode, setVerificationCode] = useState("");

  const navigate = useNavigate();
  const [verifyEmail, { isLoading, isSuccess }] = useVerifyEmailMutation();
  const [resendEmailCode] = useResendCodeMutation();
  const sendCode = (event: React.FormEvent) => {
    event.preventDefault();

    verifyEmail({ code: verificationCode })
      .unwrap()
      .then((res) => {
        navigate("/");
        toast.success(res.message);
      })
      .catch((err) => {
        toast.error(err.data);
      });
  };

  const resendCode = (event: React.FormEvent) => {
    event.preventDefault();

    resendEmailCode(null)
      .unwrap()
      .then((res) => {
        toast.success(res.message);
      })
      .catch((err) => {
        toast.error(err.data);
      });
  };

  const handleChange = (value: string) => {
    setVerificationCode(value);
  };

  const props = {
    inputStyle: {
      width: "55px",
      fontSize: "32px",
      border: `2px solid ${isSuccess ? "#53e08c" : "#fc0b68"}`,
      marginLeft: "0.5rem",
      height: "55px",
      borderRadius: "0.5rem",
      background: "white",
    },
    inputStyleInvalid: {
      fontFamily: "monospace",
      margin: "4px",
      width: "15px",
      borderRadius: "3px",
      fontSize: "14px",
      height: "26px",
      paddingLeft: "7px",
      backgroundColor: "black",
      color: "red",
      border: "1px solid red",
    },
  };

  return (
    <form
      className="w-full p-8 lg:w-1/2 flex flex-col items-center gap-20"
      onSubmit={sendCode}
    >
      <h1 className="text-3xl font-semibold text-center text-rose-400">
        <span className="text-black">Yalla</span>Music
      </h1>

      <div className="flex flex-col gap-6 text-black">
        <b className="text-xl font-extrabold text-center block">
          Email Verification
        </b>
        <p className="text-center font-medium">
          Please enter the 6-digit verification code <br />
          that was sent to your email
        </p>
        <div className="mt-4">
          <ReactCodeInput
            className="!flex !justify-center verification-code"
            {...props}
            type="text"
            fields={6}
            name="verification-code"
            inputMode="numeric"
            value={verificationCode}
            onChange={handleChange}
          />
          <SubmitBtn
            loading={isLoading}
            textLoading="Submitting..."
            text="Submit"
            className="!w-full mt-8 rounded-md"
          />

          <p className="text-center mt-4">
            Didn't receive an email?{" "}
            <a href="" className="font-semibold" onClick={resendCode}>
              Resend
            </a>
          </p>
        </div>
      </div>
    </form>
  );
};

export default EmailVerificationModule;
