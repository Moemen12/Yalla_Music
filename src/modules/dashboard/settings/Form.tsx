import React, { useState, useEffect } from "react";
import Select from "react-select";
import countries from "../../../utilities/api/countries.json";
import SubmitBtn from "../../../components/buttons/SubmitBtn";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SettingsSchema } from "../../../utilities/validationSchema";
import { SettingsInputs } from "../../../types/interfaces/interface";
import {
  FaInstagram,
  FaFacebookF,
  FaSnapchatGhost,
  FaDiscord,
} from "react-icons/fa";

import {
  useGetUserInfoQuery,
  useUpdateUserInfoMutation,
} from "../../../services/user.service";
import toast from "react-hot-toast";
import { GeneralErrorResponse } from "../../../types/responses/response";

interface Country {
  name: string;
  flag: string;
  iso2: string;
  iso3: string;
}

interface OptionType {
  label: string;
  value: string;
  flag: string;
}

const Form: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<OptionType | null>(
    null
  );

  const { data: user, isLoading, isError, refetch } = useGetUserInfoQuery({});
  const [updateUserInfo, { isLoading: isUpdating }] =
    useUpdateUserInfoMutation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SettingsInputs>({
    resolver: yupResolver(SettingsSchema) as Resolver<SettingsInputs>,
  });

  useEffect(() => {
    if (user) {
      setValue("name", user.name || "");
      setValue("lastName", user.lastname || "");
      setValue("bio", user.bio || "");
      setValue("instagram_url", user.instagram_url || "");
      setValue("facebook_url", user.facebook_url || "");
      setValue("snapchat_url", user.snapchat_url || "");
      setValue("discord_url", user.discord_url || "");

      if (user.country) {
        const countryOption = countries.data.find(
          (country: Country) =>
            country.name.toLowerCase() === user.country.toLowerCase()
        );
        if (countryOption) {
          setSelectedCountry({
            label: countryOption.name,
            value: countryOption.iso2,
            flag: countryOption.flag,
          });
          setValue("country", countryOption.name);
        }
      }
    }
  }, [user, setValue]);

  const onSubmit: SubmitHandler<SettingsInputs> = (data) => {
    const updateData = {
      ...data,
      country: selectedCountry ? selectedCountry.label : data.country,
    };

    updateUserInfo(updateData)
      .unwrap()
      .then((res: boolean) => {
        toast.success("User info updated successfully");
      })
      .catch((err: GeneralErrorResponse) => {
        toast.error(err.data.message);
      });

    console.log(updateData);
  };

  const handleCountryChange = (option: OptionType | null) => {
    setSelectedCountry(option);
    setValue("country", option ? option.label : "");
  };

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      height: "47px",
      borderRadius: "0.5rem",
    }),
  };

  const formatOptionLabel = (option: OptionType) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={option.flag}
        alt={`Flag of ${option.label}`}
        style={{ width: "20px", height: "15px", marginRight: "10px" }}
      />
      <span>{option.label}</span>
    </div>
  );

  const countryOptions: OptionType[] = countries.data.map(
    (country: Country) => ({
      label: country.name,
      value: country.iso2,
      flag: country.flag,
    })
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid sm:grid-cols-2 col-span-2 grid-cols-1 gap-4"
    >
      <div className="col-span-1">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-white">Name</span>
          </div>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-full max-w-xs text-black placeholder:!text-black"
            {...register("name")}
          />
          <p className="text-red-500 min-h-[20px]">{errors?.name?.message}</p>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-white">Last Name</span>
          </div>
          <input
            type="text"
            placeholder="Enter your lastname"
            className="input input-bordered w-full max-w-xs text-black placeholder:!text-black"
            {...register("lastName")}
          />
          <p className="text-red-500 min-h-[20px]">
            {errors?.lastName?.message}
          </p>
        </label>
      </div>

      <div className="col-span-1">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-white">Email Address</span>
          </div>
          <input
            disabled
            type="email"
            placeholder={user?.email}
            className="input input-bordered w-full max-w-xs text-black placeholder:!text-black"
          />
          <p className="min-h-[20px]"></p>
        </label>

        <label className="form-control w-full max-w-xs text-black">
          <div className="label">
            <span className="label-text text-white">Country</span>
          </div>
          <Select
            options={countryOptions}
            styles={customStyles}
            formatOptionLabel={formatOptionLabel}
            placeholder="Select a country"
            onChange={handleCountryChange}
            value={selectedCountry}
          />
          <input
            type="hidden"
            {...register("country")}
            value={selectedCountry ? selectedCountry.label : ""}
          />
        </label>
      </div>

      <div className="sm:col-span-2 col-span-1 gap-4 grid sm:grid-cols-2">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-white flex items-center gap-2">
              <FaInstagram fontSize={"1.1rem"} />
              Instagram Profile
            </span>
          </div>
          <input
            type="text"
            {...register("instagram_url")}
            placeholder="https://instagram.com/username"
            className="input input-bordered w-full max-w-xs text-black placeholder:!text-black"
          />
          <p className="text-red-500 min-h-[20px]">
            {errors?.instagram_url?.message}
          </p>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-white flex items-center gap-2">
              <FaFacebookF fontSize={"1.1rem"} />
              Facebook Profile
            </span>
          </div>
          <input
            type="text"
            {...register("facebook_url")}
            placeholder="https://facebook.com/username"
            className="input input-bordered w-full max-w-xs text-black placeholder:!text-black"
          />
          <p className="text-red-500 min-h-[20px]">
            {errors?.facebook_url?.message}
          </p>
        </label>
      </div>

      <div className="sm:col-span-2 col-span-1 gap-4 grid sm:grid-cols-2">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-white flex items-center gap-2">
              <FaSnapchatGhost fontSize={"1.1rem"} />
              Snapchat Profile
            </span>
          </div>
          <input
            type="text"
            {...register("snapchat_url")}
            placeholder="https://snapchat.com/username"
            className="input input-bordered w-full max-w-xs text-black placeholder:!text-black"
          />
          <p className="text-red-500 min-h-[20px]">
            {errors?.snapchat_url?.message}
          </p>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-white flex items-center gap-2">
              <FaDiscord fontSize={"1.1rem"} />
              Discord Profile
            </span>
          </div>
          <input
            type="text"
            {...register("discord_url")}
            placeholder="https://discord.com/username"
            className="input input-bordered w-full max-w-xs text-black placeholder:!text-black"
          />
          <p className="text-red-500 min-h-[20px]">
            {errors?.discord_url?.message}
          </p>
        </label>
      </div>

      <div className="lg:col-span-2 sm:col-span-2">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-white">Bio</span>
          </div>
          <textarea
            placeholder="Enter a short bio"
            {...register("bio")}
            className="textarea textarea-bordered max-w-xs text-lg !h-32 sm:max-w-full textarea-lg w-full text-black placeholder:!text-black"
          ></textarea>
          <p className="text-red-500 min-h-[20px]">{errors?.bio?.message}</p>
        </label>
      </div>

      <div className="lg:col-span-3 sm:col-span-2 ml-auto">
        <SubmitBtn
          text="update"
          textLoading="updating..."
          loading={isUpdating}
        />
      </div>
    </form>
  );
};

export default Form;
