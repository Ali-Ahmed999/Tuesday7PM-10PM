import Link from "next/link"
export default async function Home() {
  const url = await fetch("https://simple-books-api.glitch.me/books")
  const response = await url.json()
  console.log(response)
  return (
    <main>
      {
        response.map((book: any) => (
          <div>
            {/*              5   */}
            <Link href={`${book.id}`}>
              <h1 className="text-7xl">
                {book.name} &nbsp; &nbsp; {book.id}
              </h1>
            </Link>
          </div>
        ))
      }
    </main>
  );
}
