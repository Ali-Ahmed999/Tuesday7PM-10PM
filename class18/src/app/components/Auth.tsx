"use client"
import { FormEvent, useRef } from "react"
import { useRouter } from "next/navigation"
const Auth = () => {
    const email = useRef<HTMLInputElement>(null)
    const router = useRouter()

    const handle_Req = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const emailBody = email?.current?.value // Keeping the track of the value
        console.log("email", emailBody)
        let res = await fetch('/api/auth', {
            cache: 'no-store',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: emailBody })
        })

        // Returning the API response
        let data = await res.json()
        console.log('Data', data)

        if(data.redirectUrl){
            router.push(data.redirectUrl)
        }

    }

    return (
        <div>
            <form onSubmit={handle_Req}>
                <input
                    ref={email} // reference to track value 
                    placeholder="Email" type="email"
                    className="bg-slate-500 text-white py-2 px-8"
                />
                <button
                    className="bg-blue-600 text-white px-8 py-2"
                >Submit</button>
            </form>

        </div>
    )
}

export default Auth