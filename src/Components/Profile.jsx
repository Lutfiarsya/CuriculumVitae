"use client"
import Github from "../Assets/Github.png"
import LinkedIn from "../Assets/Linkedin.png"
import Instagram from "../Assets//Instagram.png"

import ProfilePicture from "../Assets/PP.jpeg"
const Profile = () => {
    const HandleClick = () => {
        const Gmail = "lutfiarsya34@gmail.com";
        const Subject = ''
        const bodyGmail = "Hai Luthfie, apakah hari ini saya bisa berbicara dengan anda?"

        const mailToUrl = `mailto:${Gmail}?subject=${encodeURIComponent(Subject)}&body=${encodeURIComponent(bodyGmail)}`

        window.location.href = mailToUrl;
    }



    return(
<>
        <div className="PageProfile relative md:fixed w-full md:w-1/3 p-6 md:p-0 items-center md:h-full h-1/2">
            <section className="Profile">
                <img
                    src={ProfilePicture}
                    width={200}
                    height={200}
                    className="ProfilePicture md:mt-20 mt-4 md:ml-20 ml-16"
                />
                <h1 className="Name">Luthfie Arsya Darmaputra</h1>
                <div className="SocialMedia md:mt-7 mt-2 m-auto">
                    <a href="https://github.com/Lutfiarsya">
                        <img 
                            src={Github}
                            width={50}
                            height={50}
                            className="Icon"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/luthfie-arsya-darmaputra-3641b6208/">
                        <img 
                            src={LinkedIn}
                            width={50}
                            height={50}
                            className="Icon"
                        />
                    </a>
                    <a href="https://www.instagram.com/lutfrsya/">
                        <img 
                            src={Instagram}
                            width={50}
                            height={50}
                            className="Icon"
                        />
                    </a>
                </div>
            </section>
            <section>
                <button onClick={HandleClick} className="Contact md:mt-14 mt-6">
                    <p className="Gmail">
                      Let's Talk  
                    </p>
                </button>
            </section>
        </div>
</>
    )
}

export default Profile