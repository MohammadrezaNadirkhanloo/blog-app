"use client";
import Button from "@/ui/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import RHFTextField from "@/components/RHFTextField";
import Spinner from "@/components/Spinner";
import { useAuth } from "@/context/AuthContext";

const schema = yup
  .object({
    name: yup
      .string()
      .min(5, "نام و نام خانوادگی نامعتبر است")
      .max(30)
      .required("نام و نام خانوادگی الزامی است"),
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
    password: yup.string().required("رمز عبور الزامی است"),
  })
  .required();

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  //   const { signup } = useAuth();

  interface SignupValues {
    name: string;
    email: string;
    password: string;
  }
  const { signup } = useAuth();
  const onSubmit = async (values: SignupValues) => {
    await signup(values);
  };

  return (
    <>
      <h1 className="lg:text-2xl text-xl font-bold text-secondary-500 text-center mb-8">
        به بلاگ بایت خوش آمدید
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <RHFTextField
          label="نام و نام خانوادگی"
          name="name"
          register={register}
          isRequired
          errors={errors}
        />
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
              ثبت‌نام
            </Button>
          )}
        </div>
      </form>
      <div className="flex items-start justify-center mt-8 gap-x-1">
        <p>قبلا عضو شده‌اید؟</p>
        <Link
          href="/signin"
          className="underline decoration-primary decoration-wavy underline-offset-4"
        >
          رفتن به صفحه ورود
        </Link>
      </div>
    </>
  );
}
export default Signup;
