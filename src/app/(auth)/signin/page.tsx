"use client";
import Button from "@/ui/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as yup from "yup";
// import { useAuth } from "@/context/AuthContext";
import RHFTextField from "@/components/RHFTextField";
import Spinner from "@/components/Spinner";
import { useAuth } from "@/context/AuthContext";

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
  const { signin } = useAuth();

  const onSubmit = async (values: SigninValues) => {
    await signin(values);
  };

  return (
    <div>
      <h1 className="lg:text-2xl text-xl font-bold text-secondary-500 text-center mb-6">
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
            <Button
              type="submit"
              variant="primary"
              className="w-full lg:text-lg"
            >
              ورود
            </Button>
          )}
        </div>
      </form>
      <div className="inline-flex items-center justify-center w-full mt-7">
        <hr className="w-72 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div className="absolute px-4 -translate-x-1/2 bg-base-200 left-1/2">
          <Link href="/signup" className="">
            ثبت نام
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Signin;
