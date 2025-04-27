import Image from "next/image";
import Link from 'next/link'
export default function Home() {
  return (
    <>
              <div className="hero min-h-screen pt-0"
          style={{backgroundImage:"url(/img/hero_bg.jpg)",}}>
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
            <p className="text-sm uppercase tracking-widest text-primary mb-2">One Place. Every Rally.</p>

              <h1 className="mb-5 text-5xl font-bold">Track Your Next Big Win.</h1>
              <p className="mb-5">
              Organize your job and internship hunts, stay on top of deadlines, and keep your Beacons close. All in one place.
              </p>
              <button className="btn btn-outline btn-accent ml-3">Get Started</button>
              <Link href="/features">
                <button className="btn btn-outline btn-accent ml-3">Explore Features</button>
              </Link>
            </div>
          </div>
        </div>
        
    </>
  );
}
