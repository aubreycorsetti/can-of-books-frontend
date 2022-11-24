import { Component } from "react";
import "./About.css";

class Profile extends Component {

  render() {
    return (
      <>
        <article className="about">
          <section className="Aubrey">
            <h1>Aubrey Corsetti</h1>
            <img src="./img/aubrey.jpg" alt="aubrey profile" />
            <p>Hello, my name is Aubrey Corsetti and I am a Software Developer. Before changing my career towards tech, I was a dog groomer and a solar panel salesperson. Two very different things.. fortunately from that I've learned many skills that may not be tech but I can bring into my tech career such as; time management, the ability to multitask and swift problem solving skills. I decided to go into software development because I've always been intrigued with how websites/apps are built and presented to the user as well as coming up with ways on how I would improve them. This is why I’ve chosen to specialize in Python. I would love to use my skill in a fun environment that is open-minded, allows me to be creative and aims to leave a positive, memorable experience for the user. I am sure that no matter where I go in life, tech will always be a passion of mine and I am always excited to create something that will be used by many.</p>
          </section>

          <section className="Brenda">
            <h1>Brenda Jow</h1>
            <img src="./img/Brenda.jpg" alt="Brenda Jow profile"/>
            <p>My name is Brenda and I am a software developer with an early childhood education background. I had been working as a preschool lead teacher for years and later on decided to switch my career path to software development. I really enjoy solving problems and I am always interested in tech since I was a kid. I started teaching myself coding with Java couple of months ago and I am recently learning JS because I want to be able to build a website myself as a professional full-stack developer. I hope one day I can use my technical and problem-solving skills to make positive contributions to my community, to help educate children, or to make contributions to open sources. </p>
          </section>
        </article>
      </>
    )
  }
};

export default Profile;
