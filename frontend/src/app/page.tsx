import Card from "../components/Card";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex justify-center h-screen items-center bg-gray-400">
      <Link href="/list-pokemons" className="fixed top-4 right-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg">
          Pokemons Capturados
        </button>
      </Link>
      <Card />
    </main>
  );
}
