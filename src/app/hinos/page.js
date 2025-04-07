import styles from "../SectionCard.module.css";

export default function HinosPage() {
  return (
    <main className={styles.section}>
      <h1 className={styles.title}>Hinos e Canções Históricas</h1>
      <p className={styles.description}>
        Canções que representam a alma das armas do Exército e fortalecem o espírito de corpo.
      </p>

      <div style={{ marginTop: "2rem", maxWidth: "800px", textAlign: "left" }}>
        <h2>🎖️ Hino do Exército Brasileiro</h2>
        <p>
          Somos da pátria a guarda, fiéis soldados<br />
          Por ela amados<br />
          Braço armado, ou paz, somos soldados<br />
          Exército Brasileiro
        </p>

        <br />

        <h2>🎖️ Canção da Infantaria</h2>
        <p>
          Avante, soldados da Infantaria!<br />
          Na linha de frente da pátria a lutar<br />
          Com garra e com fé no peito a brilhar,<br />
          É nossa vitória que vamos cantar!
        </p>

        <br />

        <h2>🎖️ Canção da Artilharia</h2>
        <p>
          Troveja a Artilharia com seu poder fatal<br />
          Que quebra o inimigo com força sem igual<br />
          Honremos os canhões que trazem glória e luz<br />
          Ao Exército de Caxias, ao Brasil de Norte a Sul!
        </p>
      </div>
    </main>
  );
}
