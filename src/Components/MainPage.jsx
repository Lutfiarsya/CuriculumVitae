const MainPage = () => {
    return(
        <div className="MainPage">
            <div>
                <section>
                    <h1 className="TitleAbout">About Me</h1>
                    <p className="Description">A vocational school graduate majoring in computer and network engineering who has an interest in working in the IT field. Passed with good grades. I have had experience as Data Quality Assurance at the Tebet Tax Service, where this can hone the skills needed, such as problem solving, critical thinking, and other soft skills.</p>
                </section>
            </div>
            <div className="Information">
                <section className="experience">
                    <h1 className="TitleExperience">Experience</h1>
                    <div className="DescriptionSize">
                        <p className="Date">February 2022 - April 2022</p>
                        <h3 className="Work">Data Quality Assurance - Derektoriat Jenderal Pajak Tebet</h3>
                        <p className="Date">March 2023 - May 2023</p>
                        <h3 className="Work">Supply Delivery Assurance - Iconnet</h3>
                        <p className="Date">Januay 2024 - May 2024</p>
                        <h3 className="Work">IT Engineer - PT Fajar Inti Surya</h3>
                    </div>
                </section>
                <section className="Education">
                    <h1 className="TitleEducation">Education</h1>
                    <div className="DescriptionSize">
                        <p className="Date">2020 - 2023</p>
                        <h3 className="Work">SMK Daarul Uluum - Computer and Network Engineering</h3>
                    </div>
                </section>
            </div>
            <div className="SecondPage">
                <h1 className="TitlePersonalProject">Personal Project</h1>
                <div className="ProjectPage">
                    <div className="BorderProject">
                        <h2 className="Work">My Anime List - Clone</h2>
                        <ul className="list">
                            <li>Built with Next.Js Framework</li>
                            <li>Design use Tailwind CSS</li>
                            <li>Deployment with Vercel.App</li>
                        </ul>
                    </div>
                    <div className="BorderProject">
                        <h2 className="Work">Tic-Tac--Toe Games</h2>
                        <ul className="list">
                            <li>Built with Javascript</li>
                            <li>Design use CSS</li>
                            <li>Deployment with Github</li>
                        </ul>
                    </div>
                </div>
                <div className="SecondaryPage">
                    <h1 className="TitleSkills">Skills</h1>
                    <div className="SkillPage">
                        <div>
                            <div className="SkillsPage">
                            <h2 className="Work">Softskills</h2>
                                <ul className="list2">
                                <li>Critical Thinking</li>
                                <li>Problem Solving</li>
                                <li>Adaptable</li>
                                </ul>
                            </div>
                        </div>
                        <div className="SkillsPage" id="Hardskills">
                            <h2 className="Work">Hardskills</h2>
                            <ul className="list2">
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