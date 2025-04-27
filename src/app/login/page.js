import Link from "next/link"


export default function LoginPage(){

    return(
        <div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto mt-40">
                <legend className="fieldset-legend text-lg">Login</legend>

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />
                <div className="grid grid-cols-2">

                    <Link href="" className="hover:text-info"><label className="label">forgot password?</label></Link>
                    <Link href="/register" className=" hover:text-info"><label className="label">New to opportune? register</label></Link>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
        </div>
    )
}