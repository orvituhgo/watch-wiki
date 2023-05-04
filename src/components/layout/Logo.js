import style from '../../styles/layout/Logo.module.css';

export default function ToolbarMenu() {
  return (
    <>
      <div className={style.topBar} />
      <section className={style.section}>

        <div className={style.horizontalLine} />
        <h1 className={style.title}> WATCH HUB</h1>
        <div className={style.horizontalLine} />
      </section>
    </>
  );
}
