import Link from "next/link";

export default function CvcExerciseCard({ href, title, description }) {
  return (
    <Link href={href}>
      <div className="bg-bittersweet rounded-xl shadow-lg py-6 px-6 cursor-pointer">
        <div>{title}</div>
        <div className="bg-white rounded-md py-2 px-4 my-2">
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}
