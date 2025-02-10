import { CgFileDocument } from "react-icons/cg";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

const iconMap = {
  comments: HiOutlineChatBubbleLeftRight,
  users: HiOutlineUserGroup,
  posts: CgFileDocument,
};

type IconType = keyof typeof iconMap; // "comments" | "users" | "posts"

interface CardCustomProps {
  title: string;
  value: number;
  type: IconType; // فقط کلیدهای موجود در iconMap مجاز هستند
}

function CardCustom({ title, value, type }: CardCustomProps) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-base-100 p-2 shadow-sm">
      <div className="flex p-4 text-secondary-600">
        {Icon ? <Icon className="h-5 w-5" /> : null}
        <h3 className="mr-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`truncate rounded-xl bg-secondary-0 px-4 py-8 text-center text-2xl text-secondary-500`}
      >
        {value}
      </p>
    </div>
  );
}

export default CardCustom;
