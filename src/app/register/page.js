import Link from "next/link";

export default function RegisterPage(){

    return(

        <>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto mt-40">
            <legend className="fieldset-legend text-lg">Register</legend>

            <label className="label">Username</label>
            <input type="text" className="input" placeholder="Username" />

            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <Link href="/login" className="ml-40 hover:text-info"><label className="label">Have an account? login</label></Link>
            <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
        </>
    )
}