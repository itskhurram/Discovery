import headerImage from "../assets/images/conclusion-smartphone.png";

const Welcome = ()=>{
    return(
        <header id="header" className="header py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32">
            <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
                <div className="mb-16 lg:mt-32 xl:mt-40 xl:mr-12">
                    <h1 className="h1-large mb-5">Your Voice Matters</h1>
                    <p className="p-large mb-8">Search Company to leave your comments anonymously</p>
                    <a className="btn-solid-lg" href="#your-link"><i class="fab fa-Sign-up"></i>Sign up</a>
                    <a className="btn-solid-lg secondary" href="#your-link"><i class="fab fa-Sign-in"></i>Sign in</a>
                </div>
                <div className="xl:text-right">
                    <img className="inline" src={headerImage} alt="alternative" />
                </div>
            </div> 
        </header>
    );
};
export default Welcome;