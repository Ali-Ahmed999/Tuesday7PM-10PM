import { NextRequest, NextResponse } from "next/server";

const shoppingList = [
    {name: 'Shoes'}
]

export function GET(){
    return NextResponse.json(shoppingList)
}

export async function POST(request: NextRequest){
    const body = await request.json() //In
    // console.log('InBACKEND',body)
    shoppingList.push(body)
    return NextResponse.json(body) // Out
}