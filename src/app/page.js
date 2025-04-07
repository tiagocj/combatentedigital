import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Combatente Digital</h1>
      <p className={styles.description}>
        Canções de TFM, orações e hinos do Exército reunidos em um só lugar.
      </p>

      <div className={styles.grid}>
        <Link href="/tfm" className={styles.card}>
          <h2>🎵 Canções de TFM</h2>
          <p>As mais cantadas no TFM de norte a sul do Brasil.</p>
        </Link>

        <Link href="/oracoes" className={styles.card}>
          <h2>🙏 Orações Militares</h2>
          <p>As orações usadas em instruções como CIGS, Montanha e mais.</p>
        </Link>

        <Link href="/hinos" className={styles.card}>
          <h2>🎖️ Hinos e Canções Históricas</h2>
          <p>Hinos das armas, canções da Infantaria, Artilharia, etc.</p>
        </Link>
      </div>
    </main>
  );
}
