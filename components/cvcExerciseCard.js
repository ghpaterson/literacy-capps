import Link from "next/link";

export default function CvcExerciseCard({ href, title, description }) {
  return (
    <Link href={href}>
      <div className="bg-bittersweet w-80 h-66 rounded-xl shadow-lg py-4 px-6 cursor-pointer">
        <div className="text-2xl flex justify-center items-center">{title}</div>
        <div className="bg-buff h-20 rounded-md py-2 px-4 my-2">
          <p className="flex justify-center items-center">{description}</p>
        </div>
      </div>
    </Link>
  );
}
