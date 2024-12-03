import Image from "next/image"
import { Heart } from 'lucide-react';

const FigmaToCode = () => {
    return (
        <div>
            <div className="bg-[#F6F6F6] border border-red-600 w-[268px] h-[432px] rounded-lg">
                <div className="flex justify-end p-5 w-fill">
                    <Heart />
                </div>
                <div className="flex justify-center">
                    <Image src="/iphone14.png" alt="ProductOne" width={200} height={200} />
                </div>

                <h3 className="text-center pt-4 font-medium text-base">
                    Apple iPhone 14 Pro Max 128GB Deep Purple
                </h3>

                <div className="flex justify-center">
                    <button className="rounded-lg pt-3 mt-5 pb-3 bg-black text-white w-[183px] h-12">
                        Buy Now
                    </button>
                </div>


            </div>
        </div>
    )
}

export default FigmaToCode