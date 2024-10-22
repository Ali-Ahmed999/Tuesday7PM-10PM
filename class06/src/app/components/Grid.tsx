export default function Grid() {
    return (
        <div>
            <div className="grid grid-cols-4 grid-rows-3 gap-2 m-4 h-44">
                <div className="row-span-3 bg-red-400"></div>
                <div className="col-span-2 bg-teal-400"></div>
                <div className="bg-sky-400"></div>
                <div className="bg-fuchsia-400"></div>
                <div className="bg-orange-400"></div>
                <div className="row-span-2 bg-fuchsia-400"></div>
                <div className="bg-sky-400"></div>
                <div className="bg-sky-400"></div>
            </div>
        </div>
    )
}