const ArrayMap = () => {
    // const fruits = ["Apple" , "Orange" , "Mango" ,80 , 811,849];
    const fruits = [
        { fruitName: "Apple", price: 200 },
        { fruitName: "Orange", price: 500 },
        { fruitName: "Mango", price: 800 },
        { fruitName: "WaterMelons", price: 300 },
    ]

    const carName = [
        { carName: "Toyota", price: 200 },
        { carName: "Civic", price: 82930 },
        { carName: "Alto", price: 900 }
    ]

    return (
        <div>
            {/* {
                fruits.map((phal) => {
                    return (
                        <div>
                            <div className="border my-3 border-red-500">
                                <h1>{phal.fruitName}</h1>
                                <p>{phal.price}</p>
                            </div>
                        </div>
                    )
                })
            } */}

            {
                carName.map((veh) => {
                    return (
                        <div className="flex my-4 bg-red-500 text-white">
                            <h4>{veh.carName}</h4>
                            <p>{veh.price}</p>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default ArrayMap