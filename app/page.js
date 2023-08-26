import TopSection from "./topsection";

import EnterGame from "@/Components/gamesection/entergame";
export default function Home() {
  return (
    <main className="w-full px-2 max-w-4xl flex flex-col gap-y-10 " >
      <TopSection />
      <EnterGame />
    </main>
  )
}
