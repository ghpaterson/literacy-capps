import Link from "next/link";

export default function HighFreqExerciseCard({ href, title, description }) {
  return (
    <Link href={href}>
      <div className="bg-tiffany w-80 h-66 rounded-xl shadow-lg py-6 px-6 cursor-pointer">
        <div className="text-2xl flex justify-center">{title}</div>
        <div className="bg-buff rounded-md py-2 px-4 my-2">
          <p className="flex justify-center">{description}</p>
        </div>
      </div>
    </Link>
  );
}
