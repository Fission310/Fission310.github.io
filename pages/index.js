import Head from "next/head"
import Image from "next/image"
import home from "../styles/Home.module.scss"
import Footer from "../modules/Footer"

export default function Home() {
  return (
    <div className={home.container}>
      <Head>
        <title>Stuy Fission 310</title>
        <script type="text/javascript">
          document.getElementById(&quot;vid&quot;).play();
        </script>
      </Head>

      <main className={home.main}>
        
        <div className={home.titlecontainer}>
          <div className={home.vertnum}>
            <span>3</span>
            <span>1</span>
            <span>0</span>
          </div>
          <div className={home.topcontainer}>
            <h1 className={home.title}>
              Stuy Fission
            </h1>
            <div className={home.estyear}>
              <span className={home.est}>
                <span>E</span>
                <span>S</span>
                <span>T</span>
              </span>
              <span className={home.year}>
                <span>20</span>
                <span className={home.spcolor}>08</span>
              </span>
            </div>
          </div>
          <div className={home.bgBorder}>
            <video muted loop name="Video Name" className={home.bg} id="vid">
              <source src="bg.mp4"/>
            </video>
            <img className={home.bgimg} src="bg-img.png"></img>
          </div>
          <div className={home.subtitlecontainer}>
            <h2 className={home.subtitlel}>
              Gracious Professionalism
            </h2>
            <h2 className={home.subtitler}>
              Fortune favors the brave
            </h2>
          </div>
        </div>
        <span className={home.caret}>&#8964;</span>

        <div className={home.block}>
          <h1>Stuy Fission 310</h1>
          <p>Award-winning robotics team based in lower west Manhattan since 2008</p>
          <p>Comprised of dedicated Stuyvesant High School students who not only wish to succeed in competition but also to spread the values of FIRST.</p>
        </div>

        <div className={home.block}>
          <h1>GoFundMe</h1>
          <p>Help send us to MTI 2022! Support us at our GoFundMe!</p>
          <a href="https://www.gofundme.com/f/send-ftc-310-and-479-to-mti?utm_campaign=p_lico+share-sheet&utm_medium=copy_link&utm_source=customer" target="_blank" rel="noopener noreferrer"><button>Support</button></a>
        </div>
        
      </main>

    <Footer></Footer>

    </div>
  )
}
