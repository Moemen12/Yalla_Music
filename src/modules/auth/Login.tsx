import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { LoginInputs } from "../../types/interfaces/interface";
import { LoginSchema } from "../../utilities/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import SubmitBtn from "../../components/buttons/SubmitBtn";
import { useLoginMutation } from "../../services/auth.service";
import toast from "react-hot-toast";

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
  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    login(data)
      .unwrap()
      .then((res) => {
        if (res.user_status === "not verified") {
          localStorage.setItem("token", res.access_token);
          toast.error("You're not verified. Verification email has been sent.");

          navigate("/auth/email/verification");
        }
        if (res.user_status === "verified") {
          localStorage.setItem("token", res.access_token);
          toast.success("You logged in successfully");

          navigate("/");
        }
      })
      .catch((err) => {
        toast.error(err?.data);
      });
  };

  return (
    <form className="w-full p-8 lg:w-1/2" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-2xl font-semibold text-center text-rose-400">
        <span className="text-black">Yalla</span>Music
      </h1>

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
          <Link to={"/auth/forget-password"} className="text-xs text-gray-500">
            Forget Password?
          </Link>
        </div>
        <input
          className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
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
        <Link to={"/auth/signup"} className="text-xs text-gray-500 uppercase">
          or sign up
        </Link>
        <span className="border-b w-1/5 md:w-1/4"></span>
      </div>
    </form>
  );
};

export default LoginModule;
