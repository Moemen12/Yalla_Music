import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { SignupInputs } from "../../types/interfaces/interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupSchema } from "../../utilities/validationSchema";
import { useState } from "react";
import { useRegisterMutation } from "../../services/auth.service";
import toast from "react-hot-toast";
import SubmitBtn from "../../components/buttons/SubmitBtn";

const SignupModule: React.FC = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<SignupInputs>({
    resolver: yupResolver(SignupSchema) as Resolver<SignupInputs>,
  });

  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);
  const [registerUser, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();
  // const [error, setError] = useState(null);

  const onSubmit: SubmitHandler<SignupInputs> = (data) => {
    if (data.password !== data.passwordConfirmation) {
      setPasswordsMatch(false);
      return;
    }

    registerUser(data)
      .unwrap()
      .then((res) => {
        localStorage.setItem("token", res.access_token);
        toast.success("User registered successfully");
        navigate("/auth/email/verification");
      })
      .catch((err) => {
        // setError(err?.data);
        toast.error(err?.data);
      });
  };

  return (
    <form
      className="w-full p-8 pt-4 lg:w-1/2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-2xl font-semibold text-center text-rose-400">
        <span className="text-black">Yalla</span>Music
      </h1>

      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Username
        </label>
        <input
          className={`bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none ${
            errors.username && "border-red-500"
          }`}
          type="text"
          {...register("username")}
        />
        <p className="text-red-500">{errors?.username?.message}</p>
      </div>

      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email Address
        </label>
        <input
          className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
          type="email"
          {...register("email")}
        />
        <p className="text-red-500">{errors?.email?.message}</p>
      </div>

      <div className="mt-4">
        <div className="flex justify-between">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
        </div>
        <input
          className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
          type="password"
          {...register("password")}
        />
        <p className="text-red-500">{errors?.password?.message}</p>
      </div>

      <div className="mt-4">
        <div className="flex justify-between">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password Confirmation
          </label>
        </div>
        <input
          className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
          type="password"
          {...register("passwordConfirmation")}
        />
        <p className="text-red-500">{errors?.passwordConfirmation?.message}</p>

        {!passwordsMatch && (
          <p className="text-red-500">Passwords do not match</p>
        )}
      </div>

      <div className="mt-8">
        <SubmitBtn
          className="audio-displayer text-white font-bold !w-full !rounded"
          text="Signup"
          textLoading="Signing Up..."
          loading={isLoading}
        />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="border-b w-1/5 md:w-1/4"></span>
        <Link to={"/auth/login"} className="text-xs text-gray-500 uppercase">
          or Log in
        </Link>
        <span className="border-b w-1/5 md:w-1/4"></span>
      </div>
    </form>
  );
};

export default SignupModule;
