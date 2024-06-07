import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { LoginInputs } from "../../types/interfaces/interface";
import { LoginSchema } from "../../utilities/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import SubmitBtn from "../../components/buttons/SubmitBtn";
import { useLoginMutation } from "../../services/auth.service";
import toast from "react-hot-toast";
import {
  GeneralErrorResponse,
  GeneralResponse,
} from "../../types/responses/response";

import { storeUser } from "../../features/auth/authSlice";
import { useAppDispatch } from "../../app/hooks";

const LoginModule: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: yupResolver(LoginSchema) as Resolver<LoginInputs>,
  });

  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    login(data)
      .unwrap()
      .then((res: GeneralResponse) => {
        dispatch(storeUser(data.email));
        if (res.message === "totpRequired") {
          navigate("/auth/two-fa");

          return res;
        }
        if (res.access_token) {
          localStorage.setItem("token", res.access_token);
          toast.success("You logged in successfully");

          navigate("/");
        }
      })
      .catch((err: GeneralErrorResponse) => {
        if (err.data.message === "Email not verified") {
          dispatch(storeUser(data.email));
          toast.error("You're not verified. Verification email has been sent.");

          navigate("/auth/email/verification");

          return err;
        }

        toast.error(err.data.message);
      });
  };

  return (
    <form className="w-full p-8 lg:w-1/2" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-2xl font-semibold text-center text-special">
        <span className="text-black">Yalla</span>Music
      </h1>

      <div className="mt-4">
        <label className="block text-white text-sm font-bold mb-2">
          Email Address
        </label>
        <input
          className="bg-gray-200 text-music-title focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
          type="email"
          {...register("email")}
        />
        <p className="text-red-500">{errors?.email?.message}</p>
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <label className="block text-white text-sm font-bold mb-2">
            Password
          </label>
          <Link to={"/auth/forget-password"} className="text-xs text-white">
            Forget Password?
          </Link>
        </div>
        <input
          className="bg-gray-200 text-music-title focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
          type="password"
          {...register("password")}
        />
        <p className="text-red-500">{errors?.password?.message}</p>
      </div>
      <div className="mt-8">
        {/* <button className="audio-displayer text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
          Login
        </button> */}
        <SubmitBtn
          className="audio-displayer text-white font-bold !w-full !rounded"
          text="Login"
          textLoading="Logging in..."
          loading={isLoading}
        />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="border-b w-1/5 md:w-1/4"></span>
        <Link to={"/auth/signup"} className="text-xs text-white uppercase">
          or sign up
        </Link>
        <span className="border-b w-1/5 md:w-1/4"></span>
      </div>
    </form>
  );
};

export default LoginModule;
