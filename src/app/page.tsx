export default function Home() {
  return(
     <main>
    <div id="Mwhole">   {/* //1 whole */}
 
     <div className="Mcontainer" id="Mdiv1">   {/* //2 Left side */}
     <h1>Hello, I&apos;m Umer Ullah Khan</h1>
     <h2 >FRONTEND DEVELOPER</h2>
     <p>Aspiring Software Developer with a passion for learning and building software solutions. Proficient in basic programming concepts and currently enhancing skills in languages like [ TypeScript, Tailwind-Css and Css]. Eager to contribute to development teams, solve problems, and grow in the field of software development. Motivated to work on real-world projects and collaborate in a dynamic environment.</p>
     <a href="/contact">
        <button>Contact Me</button>
         </a>
    </div>   {/* //2 Left side */}
 
  
   <div className="Mcontainer" id="Mdiv2">   {/* //3 Right side */}
      <img src="image/pic.jpg" alt="" />
   </div>  {/* //3 Right side */}
 
   </div>  {/* //1  Whole */}
   </main>
  )
 }
