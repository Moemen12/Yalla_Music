import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ChangePassword } from "../../types/interfaces/interface";
import { changePasswordSchema } from "../../utilities/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import SubmitBtn from "../../components/buttons/SubmitBtn";
import {
  useChangePasswordMutation,
  useResetPasswordMutation,
} from "../../services/auth.service";
import toast from "react-hot-toast";
import { ResetPassword } from "../../types/responses/response";
import { useState } from "react";

const ResetPasswordModule: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePassword>({
    resolver: yupResolver(changePasswordSchema) as Resolver<ChangePassword>,
  });

  const { resetToken } = useParams();

  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);
  const navigate = useNavigate();
  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const onSubmit: SubmitHandler<ChangePassword> = (data) => {
    if (data.password !== data.passwordConfirmation) {
      setPasswordsMatch(false);
      return;
    }
    const passwordData = { ...data, resetToken };
    changePassword(passwordData)
      .unwrap()
      .then((res: ResetPassword) => {
        navigate("/auth/login");
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

      <div className="flex flex-col gap-6 text-black">
        <b className="text-xl font-extrabold text-center block">
          Reset Password
        </b>
        <p className="text-center font-medium">
          Enter a new password for YallaMusic Platform
        </p>

        <div className="sm:w-5/6 sm:mx-auto">
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                New Password
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
            <p className="text-red-500">
              {errors?.passwordConfirmation?.message}
            </p>

            {!passwordsMatch && (
              <p className="text-red-500">Passwords do not match</p>
            )}
          </div>
          <SubmitBtn
            loading={isLoading}
            textLoading="Submitting..."
            text="Reset Password"
            className="!w-full mt-8 rounded-md"
          />
        </div>
      </div>
    </form>
  );
};

export default ResetPasswordModule;
