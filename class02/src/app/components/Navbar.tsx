import Link from "next/link"
function Navbar() {
    return (
        <div style={{ background: "black", color: "white", width: "100%" }}>
            <Link href="https://nextjs.org/docs/pages/api-reference/components/link">
                NextJS Link Component
            </Link>
            <br />
            <Link href="/">
                Home
            </Link> <br />
            <Link href="/about">
                About
            </Link> <br />
            <Link href="/bbq">
                BBQ
            </Link>
            <hr />
        </div>
    )
}

export default Navbar