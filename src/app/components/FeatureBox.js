import Link from 'next/link';

export default function FeatureBox(){

    return (

        <div className="flex space-x-2 justify-center mt-20 hover:scale-x-105 hover:scale-y-105 hover:z-10 transition-all duration-300">
                <div className="h-[500px] w-[600px] bg-[#1e1e1e] rounded-md shadow-md p-4 hover:scale-y-105 hover:translate-y-[5px] transition-all duration-300">
                    <div className="card card-side  h-full w-full ps-[50px] bg-[#1e1e1e] shadow-sm">
                        <figure className="h-[468px]">
                            <img
                            src="/img/rally_.jpg"
                            alt="Rally" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title transition-all duration-300 hover:text-2xl">Rally</h2>
                            <p>Rally is your centralized hub for <br/>  managing all career-related <br/> 
                             pursuits—be it internships,<br/>  job applications, or competitions. <br/>
                             With status tracking, deadline <br/>  reminders, and a clean interface,<br/>
                             Rally ensures you never miss an opportunity and stay focused on <br/> 
                             what truly matters: <br/>  progressing your career.</p>
                            <div className="card-actions justify-end">
                            <Link href="/rally">
                            <button className="btn btn-outline hover:bg-amber-50 hover:text-base-100">go rally</button>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-rows-2 gap-2">
                    <div className="h-[245px] w-[480px] bg-[#1e1e1e] rounded-md shadow-md p-4 hover:scale-y-105 hover:translate-y-[-5px] transition-all duration-300">
                    <div className="card lg:card-side bg-[#1e1e1e] h-full w-full shadow-sm">
                        <figure className="h-[213px] w-[515px]">
                            <img
                            src="/img/beacon_.jpg"
                            alt="beacon" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title transition-all duration-300 hover:text-warning hover:text-2xl">Beacon</h2>
                            <p>Beacons help you jot down what matters—ideas, feedback, or anything you need to remember later.</p>
                            <div className="card-actions justify-end">
                            <Link href="./beacon">
                            <button className="btn btn-outline btn-warning">let's go</button>
                            </Link>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="h-[245px] w-[480px] bg-[#1e1e1e] rounded-md shadow-md p-4 hover:scale-y-105 hover:translate-y-[5px] transition-all duration-300">
                    <div className="card lg:card-side bg-[#1e1e1e] h-full w-full shadow-sm">
                        <figure className="h-[213px] w-[450px]">
                            <img
                            src="/img/vault_.jpg"
                            alt="vault" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title transition-all duration-300 hover:text-info hover:text-2xl">Vault</h2>
                            <p>Vault is your safe space for storing resumes, letters, and everything application-related.</p>
                            <div className="card-actions justify-end">
                            <Link href="./vault">
                            <button className="btn btn-outline btn-info">go vault</button>
                            </Link>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                    
                </div>
            </div>
    );
}