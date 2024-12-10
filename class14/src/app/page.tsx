export default async function Home() {

  // Making API request
  const url = await fetch("https://simple-books-api.glitch.me/books")
  
  // COnverting it into JSON
  const res = await url.json()
  console.log(res)

  return (
    <main>
      Hello
    </main>
  );
}
