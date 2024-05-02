import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { EmailCode, LoginInputs } from "../../types/interfaces/interface";
import { LoginSchema, resetSchema } from "../../utilities/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import SubmitBtn from "../../components/buttons/SubmitBtn";
import { useResetPasswordMutation } from "../../services/auth.service";
import toast from "react-hot-toast";
import { ResetPassword } from "../../types/responses/response";

const ForgetPasswordModule: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailCode>({
    resolver: yupResolver(resetSchema) as Resolver<EmailCode>,
  });

  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const onSubmit: SubmitHandler<EmailCode> = (email) => {
    resetPassword(email)
      .unwrap()
      .then((res: ResetPassword) => {
        toast.success(res.message);
      })
      .catch((err) => {
        toast.error(err.data);
      });
  };

  return (
    <form
      className="w-full p-8 lg:w-1/2 flex flex-col gap-16"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-2xl font-semibold text-center text-rose-400">
        <span className="text-black">Yalla</span>Music
      </h1>

      {/* <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email Address
        </label>
        <input
          className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
          type="email"
          {...register("email")}
        />
        <p className="text-red-500">{errors?.email?.message}</p>
      </div> */}

      <div className="flex flex-col gap-6 text-black">
        <b className="text-xl font-extrabold text-center block">
          Reset Password
        </b>
        <p className="text-center font-medium">
          Enter your email to reset your password
        </p>

        <div className="mt-4 sm:w-5/6 sm:mx-auto">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email Address
          </label>
          <input
            className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            type="email"
            {...register("email")}
          />
          <p className="text-red-500">{errors?.email?.message}</p>
          <SubmitBtn
            loading={isLoading}
            textLoading="Submitting..."
            text="Reset Password"
            className="!w-full mt-8 rounded-md"
          />

          <p className="text-center mt-8">
            Remember your password?{" "}
            <Link to={"/auth/login"} className="capitalize font-bold">
              go back
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default ForgetPasswordModule;
