import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Kfc from "../../Assets/Projects/Kfc.png";
import Skinstore from "../../Assets/Projects/Skinstore.png";
import bigbasket1 from "../../Assets/Projects/bigbasket2.png";
import bigbasket2 from "../../Assets/Projects/bigbasket1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Kfc}
              isBlog={false}
              title="Kfc"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/mulkesh-sharma/kfc"
              demoLink="https://kfc-dummy-1.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bigbasket2}
              isBlog={false}
              title="Bigbasket2"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/Mulkesh-sharma/BigbasketClone"
              demoLink="https://bigbasket12321.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bigbasket1}
              isBlog={false}
              title="Bigbasket"
              description="creating a website similar to bigbasket which is a groceries website where you can buy grocery for home"
              ghLink="https://github.com/Mulkesh-sharma/BigbasketClone"
              demoLink="https://bigbasket12321.netlify.app/"
            />
          </Col>

          <Col md={4} className="Skin-store">
            <ProjectCard
              imgPath={Skinstore}
              isBlog={false}
              title="Skin-Store"
              description="Making a website similar to skinstore which is women's grooming website"
              ghLink="https://github.com/Mulkesh-sharma/skinStore"
              demoLink="https://skin-store-cl.netlify.app"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
