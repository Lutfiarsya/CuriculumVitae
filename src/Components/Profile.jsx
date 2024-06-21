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
        <div className="PageProfile">
            <section className="Profile">
                <img
                    src={ProfilePicture}
                    width={200}
                    height={200}
                    className="ProfilePicture"
                />
                <h1 className="Name">Luthfie Arsya Darmaputra</h1>
                <div className="SocialMedia">
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
                <button onClick={HandleClick} className="Contact">
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