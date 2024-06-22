const MainPage = () => {
    return(
        <div className="MainPage ml-6 md:ml-[37%]">
            <div>
                <section>
                    <h1 className="TitleAbout after:w-0 hover:after:w-[45%] md:hover:after:w-[25%]">About Me</h1>
                    <p className="Description">A vocational school graduate majoring in computer and network engineering who has an interest in working in the IT field. Passed with good grades. I have had experience as Data Quality Assurance at the Tebet Tax Service, where this can hone the skills needed, such as problem solving, critical thinking, and other soft skills.</p>
                </section>
            </div>
            <div className="Information flex flex-col md:flex-row md:justify-between justify-center">
                <section className="experience">
                    <h1 className="TitleExperience after:w-0 hover:after:w-[50%] md:hover:after:w-[55%]">Experience</h1>
                    <div className="DescriptionSize">
                        <p className="Date">February 2022 - April 2022</p>
                        <h3 className="Work">Data Quality Assurance - Derektoriat Jenderal Pajak Tebet</h3>
                        <p className="Date">March 2023 - May 2023</p>
                        <h3 className="Work">Supply Delivery Assurance - Iconnet</h3>
                        <p className="Date">Januay 2024 - May 2024</p>
                        <h3 className="Work">IT Engineer - PT Fajar Inti Surya</h3>
                    </div>
                </section>
                <section className="Education mt-5 md:mt-0">
                    <h1 className="TitleEducation after:w-0 hover:after:w-[45%] md:hover:after:w-[50%]">Education</h1>
                    <div className="DescriptionSize">
                        <p className="Date">2020 - 2023</p>
                        <h3 className="Work">SMK Daarul Uluum - Computer and Network Engineering</h3>
                    </div>
                </section>
            </div>
            <div className="SecondPage">
                <h1 className="TitlePersonalProject after:w-0 hover:after:w-[73%] md:hover:after:w-[37%]">Personal Project</h1>
                <div className="ProjectPage md:justify-evenly flex md:flex-row flex-col md:ml-[-90px]">
                    <div className="BorderProject">
                        <h2 className="Work">My Anime List - Clone</h2>
                        <ul className="list">
                            <li>Built with Next.Js Framework</li>
                            <li>Design use Tailwind CSS</li>
                            <li>Deployment with Vercel.App</li>
                        </ul>
                    </div>
                    <div className="BorderProject">
                        <h2 className="Work mt-5 md:mt-2">Tic-Tac--Toe Games</h2>
                        <ul className="list">
                            <li>Built with Javascript</li>
                            <li>Design use CSS</li>
                            <li>Deployment with Github</li>
                        </ul>
                    </div>
                </div>
                <div className="SecondaryPage">
                    <h1 className="TitleSkills after:w-0 hover:after:w-[25%] md:hover:after:w-[14%]">Skills</h1>
                    <div className="SkillPage">
                        <div>
                            <div className="SkillsPage">
                            <h2 className="Work">Softskills</h2>
                                <ul className="list2 md:grid md:grid-cols-3 gap-flex flex-col">
                                <li>Critical Thinking</li>
                                <li>Problem Solving</li>
                                <li>Adaptable</li>
                                </ul>
                            </div>
                        </div>
                        <div className="SkillsPage" id="Hardskills">
                            <h2 className="Work">Hardskills</h2>
                            <ul className="list2 md:grid md:grid-cols-3 gap-flex flex-col">
                                <li>Knowledge TCP/IP</li>
                                <li>Cisco Packet Tracer</li>
                                <li>HTML, CSS, Javascript</li>
                                <li>Tailwind CSS</li>
                                <li>Mikrotik</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;