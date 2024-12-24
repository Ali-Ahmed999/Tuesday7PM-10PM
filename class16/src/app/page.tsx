import { client } from "../sanity/lib/client";
export default async function Home() {

  const getPets = async () => {
    const pets = client.fetch((`*[_type=="pet"]`));
    return pets
  }

  const allPets = await getPets();
  console.log(allPets);

  return (
    <h1>
      {allPets.map((pet: any) => (
        <div>
          {pet.name}
          <p>{pet.description}</p>
          {/* <Image src={} alt="Cow image" /> */}
        </div>
      ))}
    </h1>
  );
}
