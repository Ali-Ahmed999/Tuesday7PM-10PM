const DynamicBook = async (props: any) => {
    console.log(props)
    const url = await fetch(`https://simple-books-api.glitch.me/books/${props.params.id}`)
    const response = await url.json()
    console.log("Single Book", response)
    return (
        <h1 className="text-7xl">
            Dynammic Route <br /> <br />
            {response.name}
        </h1>
    )
}
export default DynamicBook;