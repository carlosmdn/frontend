import { useRouter } from "next/router";
import { Button } from "@mui/material";
import styles from "../styles/Home.module.css";

export default function Home ({name, summary}) {

  const router = useRouter();
  return (
    <section className={styles.Home}>
      <h1 className={styles.Name}>{name}</h1>
      <div className={styles.Summary}>{summary}</div>
      <div>
        <Button variant="contained" size="large" onClick={() => router.push("/projects")}>
          Projects
        </Button>
      </div>
    </section>
  );
}

export async function getStaticProps () {
  // Get you date from an API
  console.log("hola");
  return {
    props: {
      name: "Carlos Medina",
      summary:
        "I am a skilled full-stack developer with expertise in both front-end and back-end technologies. I specialize in designing and implementing innovative solutions and strive to create user-friendly interfaces and high-quality web applications. I am passionate about leveraging technology to solve complex problems and continuously expanding my skills in the dynamic field of full-stack development."
    }
  }
}