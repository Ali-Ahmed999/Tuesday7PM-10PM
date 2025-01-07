import UserForm from "./components/UserForm";

export default async function Home() {

  const url = await fetch('http://localhost:3000/api/hello', {
    cache: 'no-store'
  })
  const res = await url.json()
  console.log(res)

  return (
    <div>
      <UserForm />

      {
        res.map((product: any) => (
          <h1>{product.name}</h1>
        ))
      }
    </div>
  );
}
