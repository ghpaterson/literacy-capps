import NavBar from "@/components/navbar";
import CvcExerciseCard from "@/components/cvcExerciseCard";
import HighFreqExerciseCard from "@/components/highFreqExerciseCard";

export default function Menu() {
  const cvcExercises = [
    {
      href: "/CVC",
      title: "Exercise 1",
      description: "CVC/C Words",
    },
    {
      href: "/CCVCa",
      title: "Exercise 2a",
      description: "CCVC/C Words",
    },
    {
      href: "/CCVCb",
      title: "Exercise 2b",
      description: "CCVC/C Words with silent letters",
    },
    {
      href: "/CVCC",
      title: "Exercise 3",
      description: "CVCC Words",
    },
    {
      href: "/CCVCC",
      title: "Exercise 4",
      description: "CCVCC Words",
    },
    {
      href: "/CCCVCCC",
      title: "Exercise 5",
      description: "CCCVCCC Words",
    },
  ];

  const highFreqExercises = [
    {
      href: "/HighFrequencyOne",
      title: "Exercise 1",
      description: "Part 1.1",
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
    {
      href: "/HighFrequencyFour",
      title: "Exercise 4",
      description: "High Frequency Words",
    },
    {
      href: "/HighFrequencyFive",
      title: "Exercise 5",
      description: "Part 2.2",
    },
    {
      href: "/HighFrequencySix",
      title: "Exercise 6",
      description: "High Frequency Words",
    },
    {
      href: "/HighFrequencySeven",
      title: "Exercise 7",
      description: "High Frequency Words",
    },
    {
      href: "/HighFrequencyEight",
      title: "Exercise 8",
      description: "High Frequency Words",
    },
    {
      href: "/HighFrequencyNine",
      title: "Exercise 9",
      description: "Part 3.3",
    },
  ];

  return (
    <>
      <main>
        <NavBar />
        <div>
          <div className="flex justify-center text-2xl md:text-5xl font-comic my-10">
            <h2>Click to Read Real and Nonsense Words</h2>
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
          <div className="flex justify-center text-2xl md:text-5xl font-comic mb-10">
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
