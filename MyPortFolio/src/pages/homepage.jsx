import Aboutme from "../Components/aboutme"
import CertificationPre from "../Components/CertificationsPre"
import Contactme from "../Components/ContactMe"
import Introduction from "../Components/intro"
import ProjectsPre from "../Components/ProjectsPre"
import Skills from "../Components/skills"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"



const  Homepage = () => {
    const { hash } = useLocation();

    useEffect(() => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [hash]);
    return (
        <div>
            <Introduction />
            <Aboutme />
            <Skills />
            <ProjectsPre />
            <CertificationPre />
            <div id="contact-me">
                <Contactme />
            </div>
        </div>
    )
}

export default Homepage