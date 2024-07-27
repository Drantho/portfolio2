import styles from "@/styles/Home.module.css";
import Avatar from "@/components/Avatar";
import Hero from "@/components/Hero";
import Image from "next/image";
import IconButton from "@/components/IconButton";
import Button from "@/components/Button";
import GithubIcon from "@/components/GithubIcon";
import LinkedinIcon from "@/components/LinkedinIcon";
import EmailIcon from "@/components/EmailIcon";
import TextBlock from "@/components/TextBlock";
import { data } from "@/data/data2";
import Row from "@/components/Row";
import CardHorizontal from "@/components/CardHorizontal";
import Page from "@/components/Page";
import Link from "next/link";
import SimpleCard from "@/components/SimpleCard";

export default function Home() {
  return (
    <Page>
      <div className="hiddenId" id="home"></div>
      <div style={{ position: "absolute", top: 0, zIndex: -1 }}>
        <Hero src="/beach2.jpg" height="30vw" objectPosition="70% 80%" />
      </div>
      <section className={`container ${styles.heroInfoContainer}`}>
        <div className={styles.personalInfoContainer}>
          <div className={styles.avatarContainerOuter}>
            <div className={styles.avatarContainerInner}>
              <Avatar />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: 100,
              }}
            >
              <IconButton href="https://github.com/Drantho">
                <GithubIcon style={{ width: "75%" }} />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/drantho/">
                <LinkedinIcon style={{ width: "100%" }} />
              </IconButton>
              <IconButton href="mailto:mitchellanthonyd@gmail.com">
                <EmailIcon style={{ width: "70%" }} />
              </IconButton>
            </div>
          </div>
        </div>
        <div className={styles.mainContainer}>
          <div className={styles.welcomeContainer}>
            <Image
              src="/banner.gif"
              alt=""
              width={351}
              height={81}
              style={{ position: "absolute" }}
            />
            Welcome
          </div>
          <h1>I'm Anthony Mitchell</h1>
          <p>FULL STACK WEB DEVELOPER</p>
          <Button href="./resume.docx" style={{ bottom: -70 }}>Download CV</Button>
        </div>
      </section>
      <section className={`container ${styles.aboutContainer}`}>
        <div className="hiddenId" id="about"></div>
        <h2>About Me</h2>
        <TextBlock>
          Hi, I'm Anthony Mitchell, a full-stack web developer with expertise in
          building functional and stylish web applications. I work with a
          variety of technologies, including the C#/.NET stack, the MERN stack,
          and Next.js. I’m available for new projects and collaborations.
          Explore my <a href="#portfolio">portfolio</a> to see some of my recent
          work, and feel free to <a href="#contact">contact me</a> with any
          questions.
        </TextBlock>
        <article>
          <h3>Technologies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>Javascript</li>
            <li>JQuery</li>
            <li>D3</li>
            <li>Bootstrap</li>
            <li>Materialize</li>
            <li>C#</li>
            <li>Java</li>
            <li>SQL</li>
            <li>Mongo</li>
            <li>Express</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Vue</li>
            <li>Angular</li>
            <li>Node</li>
            <li>Handlebars</li>
          </ul>
        </article>
      </section>
      <section className={`container`}>
        <div className="hiddenId" id="portfolio"></div>
        <h2>Portfolio</h2>
        <div className={styles.portfoliioContainer}>
          <Row across={2}>
            {data.map((item) => (
              <SimpleCard key={item.displayName} {...item} />
            ))}
          </Row>
        </div>
      </section>
      <section className={`full-width ${styles.resume}`}>
        <h2 className="container">Resume</h2>
        <div className="hiddenId" id="resume"></div>
        <article className="container">
          <h3>Summary</h3>
          <p>
            Full Stack Developer leveraging a strong foundation in business,
            customer service, and data tracking and visualization. Certified in
            Full Stack Web Development from the University of Washington Coding
            Boot Camp. Skilled in understanding complex client requirements and
            developing tailored software solutions. Proven track record in
            leading teams to deliver projects on time. Contributed to the
            award-winning Norway Lights travel and tourism website. Notable
            projects include No Brainer Meals and Peninsula RV.
          </p>
          <dl>
            <dt>Front-End:</dt>
            <dd>
              HTML, CSS, SASS, JavaScript, TypeScript, JQuery React, Next.js,
              Vue, Angular, Handlebars, D3
            </dd>
            <dt>Back-End:</dt>
            <dd>Node.js, Express, C#, Visual Basic, .NET, Java Spring, APIs</dd>
            <dt>Design Frameworks:</dt>
            <dd>Bootstrap, Material Design, Foundation, Ant Design</dd>
            <dt>Databases/Data/ORMs:</dt>
            <dd>
              MSSQL, MySQL, PSQL, Hibernate, Sequelize, Mongo, Mongoose, JSON,
              XML, MS Access
            </dd>
            <dt>Version Control:</dt>
            <dd>Git, SVN</dd>
            <dt>Applications:</dt>
            <dd>
              Visual Studio, VS Code, IntelliJ, PG Admin MySQL Workbench, Robo
              3T, Git CLI, MS Office, Figma, Photoshop
            </dd>
            <dt>Other:</dt>
            <dd>G Code</dd>
          </dl>
          <h3>Projects</h3>
          <h4>No Brainer Meals | nobrainermeals.com Project/Full Stack</h4>
          <ul>
            <li>
              Developed a mobile-responsive recipe, food planning, and grocery
              ordering web application.
            </li>
            <li>Utilized ASP.NET, C#, MSSQL, Javascript, Material Design</li>
            <li>
              Improved user experience and streamlined meal planning for users.
            </li>
          </ul>
          <h4>Peninsula RV | no longer in service Solo Project/Full Stack</h4>
          <ul>
            <li>
              Built an inventory management system with a public-facing site,
              sales tracking, commission tracking, payroll processing, sales
              document generation, tax document generation, customer list,
              service invoice generation, vehicle service history, and sales
              lead generation and tracking.
            </li>
            <li>
              Enhanced operational efficiency and compliance with state and
              federal regulations.
            </li>
            <li>
              Developed and implemented software tools to streamline operations
              and enhance productivity.
            </li>
            <li>
              Ensured adherence to regulatory standards and maintained high
              standards of customer service.
            </li>
            <li>Utilized ASP.NET, C#, MSSQL, Bootstrap, Javascript, JQuery</li>
          </ul>
          <h3>Experience</h3>
          <h4 className={styles.light}>October 2022 - Current</h4>
          <h4>RCS Union Software, Coralville, IA - Developer</h4>
          <ul>
            <li>
              Implement new features to align with accounting, record keeping,
              and reporting requirements.
            </li>
            <li>
              Work with domain experts to diagnose complicated financial issues
              as bugs vs user error, implement bug fixes, implement better
              guardrails to prevent user error.
            </li>
            <li>Develop custom reports.</li>
            <li>
              Ensure accuracy and quality of code results comply with federal
              and state agencies.
            </li>
          </ul>
          <h4 className={styles.light}>May 2021 - September 2022</h4>
          <h4>Simpleview Inc, Tucson, AZ - CMS Developer I</h4>
          <ul>
            <li>
              Worked with clients to develop reusable widgets for enhanced site
              functionality.
            </li>
            <li>
              Identified, documented, and fixed bugs in existing codebase.
            </li>
            <li>Reviewed proposed code changes.</li>
            <li>
              Identified opportunities for performance and accessibility
              improvements and implemented solutions to enhance user experience
              and compliance.
            </li>
            <li>
              Contributed to the Norway Lights project, which earned the Award
              of Excellence for Travel and Tourism Website at the 27th annual
              Communicator Awards.
            </li>
          </ul>
          <h4 className={styles.light}>October 2008 - September 2020</h4>
          <h4>Peninsula RV, Sequim, WA- Owner/Manager</h4>
          <ul>
            <li>Ensured compliance with state and federal regulations.</li>
            <li>
              Developed and trained employees in software tools to maintain
              productivity and compliance.
            </li>
          </ul>
          <h3>Education</h3>
          <h4 className={styles.light}>December 2020 - March 2021</h4>
          <h4>University of Washington Coding Bootcamp – Certificate</h4>
          <ul>
            <li>
              Completed an intensive program focused on Full Stack Web
              Development.
            </li>
            <li>
              Developed multiple full-stack projects, including a capstone
              project that demonstrated proficiency in modern web technologies.
            </li>
          </ul>
        </article>
      </section>
    </Page>
  );
}
