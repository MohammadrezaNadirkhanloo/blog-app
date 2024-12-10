"use client";
import Button from "@/ui/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as yup from "yup";
// import { useAuth } from "@/context/AuthContext";
import RHFTextField from "@/components/RHFTextField";
import Spinner from "@/components/Spinner";
import { singinApi } from "@/services/authService";
import axios from "axios";
import toast from "react-hot-toast";

const schema = yup
  .object({
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
    password: yup.string().required("رمز عبور الزامی است"),
  })
  .required();

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  //   const { signup } = useAuth();

  interface SigninValues {
    email: string;
    password: string;
  }

  const onSubmit = async (values: SigninValues) => {
    try {
      const { user, message } = await singinApi(values);
      toast.success(message);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message);
      } else {
        console.log("An unexpected error occurred:", error);
      }
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">
        به بلاگ بایت خوش آمدید
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <RHFTextField
          label="ایمیل"
          name="email"
          register={register}
          dir="ltr"
          isRequired
          errors={errors}
        />
        <RHFTextField
          label="رمز عبور"
          name="password"
          register={register}
          type="password"
          dir="ltr"
          isRequired
          errors={errors}
        />
        <div>
          {isLoading ? (
            <Spinner />
          ) : (
            <Button type="submit" variant="primary" className="w-full">
              تایید
            </Button>
          )}
        </div>
      </form>
      <Link href="/signup" className="text-secondary-500 mt-6 text-center">
        ثبت نام
      </Link>
    </div>
  );
}
export default Signin;
