import Button from "@/ui/Button";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import imghome from "../../public/images/ImageHome.svg";

export const metadata: Metadata = {
  title: "خانه  - وب اپلیکیشن مدیریت بلاگ",
};

export default function Page() {
  return (
    <div className="container">
      <div className="grid grid-cols-3">
        <div className="col-span-3 lg:col-span-2">
          <h1 className="font-bold text-start text-3xl md:text-5xl text-secondary-800 my-20">
            به <strong className="text-primary">بلاگ بایت</strong> خوش آمدید!
          </h1>

          <div>
            <p className="text-start text-secondary-500 text-lg leading-loose">
              سلام!{" "}
              <a
                href="https://github.com/MohammadrezaNadirkhanloo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                من
              </a>{" "}
              در بلاگ بایت، داستان‌ها و تجربیات خودم در زمینه برنامه‌نویسی و
              توسعه نرم‌افزار را با شما به اشتراک می‌گذارم.
              <br />
              اگر شما هم علاقه‌مند به فناوری و کدنویسی هستید و دوست دارید
              تجربیات خود را با دیگران به اشتراک بگذارید،
              <br />
              اینجا جای شماست! به ما بپیوندید و بلاگ خود را در بلاگ بایت قرار
              دهید.
            </p>
            <div className="flex justify-start gap-x-8 w-full mt-10">
              <Link href="/blogs">
                <Button variant="neutral">مطالعه بلاگ ها</Button>
              </Link>
              <Link href="/profile">
                <Button variant="primary">مدیریت بلاگ ها</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-1 flex items-center justify-center">
          <Image src={imghome} alt="image home page" className="mt-14" />
        </div>
      </div>
    </div>
  );
}
