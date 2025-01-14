import { NextRequest, NextResponse } from "next/server";

// export async function POST(request:NextRequest){
//     const body = await request.json()

//     if(body.email == 'ali@gmail.com'){
//         console.log('You are logged in')
//     }
//     else{
//         console.log('Invlaid Creds')
//     }

//     console.log('Value in backend',body)
//     return NextResponse.json({body})
// }



export async function POST(req: NextRequest){
    const body = await req.json()

    try {
        if(body.email == 'daniyal@gmail.com'){
            return NextResponse.json({
                redirectUrl: '/admin'
            })
        }
        else{
            return NextResponse.json({
                redirectUrl: '/student'
            })
        }
    }
    catch(err: any){
        return NextResponse.json({
            // message: 'Fail'
            message : err.message
        })
    }






}