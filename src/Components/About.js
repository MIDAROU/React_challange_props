import johnimg from "../images/John-Doe.jpg"
function About (){
    return (
    <section id="about-me">
        <h1>
          Hello, my name is
          <span className="rotate text-important">John doe</span>,<br />
          and i make horrible websites.
        </h1>
        <img className="avatar" src={johnimg} alt="jhon-doe" />
      </section>
    )
}
export default About;