import styles from "../SectionCard.module.css";

export default function OracoesPage() {
  return (
    <main className={styles.section}>
      <h1 className={styles.title}>Orações Militares</h1>
      <p className={styles.description}>
        Oração do Guerreiro de Selva, da Montanha e do Combatente. Fé, força e foco na missão.
      </p>

      <div style={{ marginTop: "2rem", maxWidth: "800px", textAlign: "left" }}>
        <h2>🙏 Oração do Guerreiro de Selva</h2>
        <p>
          Sou um guerreiro de selva!<br />
          Minha missão é cumprir a missão, mesmo com o sacrifício da própria vida!<br />
          Na selva, só existe um guerreiro: EU!<br />
          SELVA!
        </p>

        <br />

        <h2>🙏 Oração do Combatente</h2>
        <p>
          Senhor, eu sou um soldado, instrumento da paz.<br />
          Que minha missão seja sempre voltada ao bem.<br />
          Dá-me coragem para cumprir o dever com honra,<br />
          e protege meus irmãos de farda em cada jornada.
        </p>

        <br />

        <h2>🙏 Oração da Montanha</h2>
        <p>
          Senhor dos Montes, guia-me pela trilha do dever.<br />
          Dá-me equilíbrio para vencer as alturas e coragem para enfrentar o frio.<br />
          Que eu honre meu berço de montanha em cada passo firme.
        </p>
      </div>
    </main>
  );
}
