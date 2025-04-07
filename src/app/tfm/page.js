import styles from "../SectionCard.module.css";

export default function TFMPage() {
  return (
    <main className={styles.section}>
      <h1 className={styles.title}>Canções de TFM</h1>
      <p className={styles.description}>
        As mais conhecidas e entoadas durante o Treinamento Físico Militar. Sempre em cadência, sempre padrão!
      </p>

      <div style={{ marginTop: "2rem", maxWidth: "800px", textAlign: "left" }}>
        <h2>🎵 Em Cada Canto do Brasil</h2>
        <p>
          Em cada canto do Brasil há um recruta<br />
          Com o peito estufado de amor<br />
          Carregando o fuzil com alegria<br />
          Honrando o verde-oliva com fervor
        </p>

        <br />

        <h2>🎵 Se Eu Morrer no Campo de Batalha</h2>
        <p>
          Se eu morrer no campo de batalha<br />
          Quero ao menos ser lembrado<br />
          Como um bravo combatente<br />
          Que lutou pelo seu Estado
        </p>

        <br />

        <h2>🎵 Selva! Selva!</h2>
        <p>
          Selva! Selva! Grita o guerreiro<br />
          No peito a honra, a coragem no olhar<br />
          Pisando forte nesse chão brasileiro<br />
          É o combatente pronto pra lutar
        </p>
      </div>
    </main>
  );
}
