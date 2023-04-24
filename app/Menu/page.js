import NavBar from "@/components/navbar";
import ExerciseCard from "@/components/exerciseCard";

export default function Menu() {
  const exercises = [
    {
      href: "/CVC",
      title: "Exercise 1",
      description: "Read a Three Letter Word",
    },
    {
      href: "/CCVCa",
      title: "Exercise 2a",
      description: "Read a Four Letter Word",
    },
    {
      href: "/CCVCb",
      title: "Exercise 2b",
      description: "Read a Four Letter Word",
    },
    {
      href: "/CVCC",
      title: "Exercise 3",
      description: "Read a Four Letter Word",
    },
    {
      href: "/CCVCC",
      title: "Exercise 4",
      description: "Read a Five Letter Word",
    },
    {
      href: "/CCCVCCC",
      title: "Exercise 5",
      description: "Read a Seven Letter Word",
    },
    {
      href: "/HighFrequency",
      title: "Exercise 6",
      description: "High Frequency Words",
    },
  ];

  return (
    <>
      <main className="bg-tiffany h-screen">
        <NavBar />
        <div className="flex justify-center py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto text-xl">
            {exercises.map((exercise) => (
              <ExerciseCard
                key={exercise.href}
                href={exercise.href}
                title={exercise.title}
                description={exercise.description}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
