import NavBar from "@/components/navbar";
import CvcExerciseCard from "@/components/cvcExerciseCard";
import HighFreqExerciseCard from "@/components/highFreqExerciseCard";

export default function Menu() {
  const cvcExercises = [
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
  ];

  const highFreqExercises = [
    {
      href: "/HighFrequencyOne",
      title: "Exercise 1",
      description: "High Frequency Words",
    },
    {
      href: "/HighFrequencyTwo",
      title: "Exercise 2",
      description: "High Frequency Words",
    },
    {
      href: "/HighFrequencyThree",
      title: "Exercise 3",
      description: "High Frequency Words",
    },
  ];

  return (
    <>
      <main>
        <NavBar />
        <div>
          <div className="flex justify-center text-3xl md:text-5xl font-comic my-10">
            <h2>Click to Spell</h2>
          </div>
          <div className="flex justify-center py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto text-xl">
              {cvcExercises.map((exercise) => (
                <CvcExerciseCard
                  key={exercise.href}
                  href={exercise.href}
                  title={exercise.title}
                  description={exercise.description}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="my-10">
          <div className="flex justify-center text-3xl md:text-5xl font-comic">
            <h2>High Frequency Words</h2>
          </div>
          <div className="flex justify-center py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto text-xl">
              {highFreqExercises.map((exercise) => (
                <HighFreqExerciseCard
                  key={exercise.href}
                  href={exercise.href}
                  title={exercise.title}
                  description={exercise.description}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
