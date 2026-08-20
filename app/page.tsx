const skills = ["Playwright","Selenium","Postman","JMeter","JavaScript","Java","Jenkins","GitHub Actions"];
const projects = [
  ["01","Playwright Automation Framework","Maintainable UI tests using Page Objects, reusable fixtures, and reliable assertions.","Playwright · Java · JUnit","24 tests passed"],
  ["02","Data-Driven Web Testing","Selenium coverage powered by CSV and Excel datasets, including edge cases and failure evidence.","Selenium · JavaScript · Mocha","20 scenarios covered"],
  ["03","Snapcart CI Pipeline","An automated workflow connecting tests, reports, containers, and deployment checks.","Jenkins · Docker · CI/CD","Pipeline healthy"],
];
function Dots(){return <span className="dots"><i/><i/><i/></span>}
export default function Home(){
 return <main>
  <nav className="nav shell"><a className="logo" href="#top">A<span>Q</span></a><div className="navlinks"><a href="#about">About</a><a href="#work">Work</a><a href="#contact">Contact</a></div><a className="pill" href="#contact">Let&apos;s talk ↗</a></nav>
  <section className="hero shell" id="top">
   <div><p className="eyebrow"><b/> Available for QA opportunities</p><h1>I test, break,<br/>and <em>improve</em><br/>digital experiences.</h1><p className="intro">Junior QA Engineer based in Vancouver, turning curiosity into dependable software through thoughtful manual and automated testing.</p><div className="actions"><a className="button" href="#work">Explore my work ↓</a><a className="link" href="https://github.com/sureeporn-sudo">GitHub ↗</a></div></div>
   <div className="workspace">
    <div className="code"><header><Dots/><span>anna.spec.js</span><small>⌘ K</small></header><pre><span>describe</span>(<b>&apos;great experiences&apos;</b>, () =&gt; {"{"}{"\n"}  <span>it</span>(<b>&apos;should feel effortless&apos;</b>, () =&gt; {"{"}{"\n"}    expect(product).toBe(<i>reliable</i>);{"\n"}  {"}"});{"\n"}{"}"});</pre></div>
    <div className="profile"><div className="portrait"><small>ANNA</small><strong>A</strong></div><div><small>QA ENGINEER</small><b>Sureeporn<br/>Apaikawee</b></div></div>
    <div className="tests"><div><Dots/><b>Test run</b></div><p>✓ Login flow</p><p>✓ Add to cart</p><p>✓ API response</p><footer><span>3 passed</span><small>1.8s</small></footer></div><div className="badge">ship it! ↗</div>
   </div>
  </section>
  <div className="marquee"><div>MANUAL TESTING <span>✦</span> AUTOMATION <span>✦</span> API TESTING <span>✦</span> PERFORMANCE <span>✦</span> CI/CD <span>✦</span> MANUAL TESTING</div></div>
  <section className="about shell section" id="about"><Label n="01" text="ABOUT.EXE"/><div className="aboutgrid"><h2>Curious by nature.<br/><em>Quality-focused</em><br/>by practice.</h2><div className="copy"><p>I&apos;m Anna, a Software Quality Assurance Engineering student who enjoys finding the small details that make a big difference.</p><p>My background in digital marketing gives me a user-first perspective; my testing toolkit helps me turn that perspective into clear, actionable results.</p><div className="location">⌖ <span><small>CURRENTLY BASED IN</small><b>Vancouver, BC</b></span></div></div></div></section>
  <section className="shell toolkit"><div className="terminal"><header><Dots/><span>anna@portfolio — toolkit</span><small>⌁</small></header><div className="terminalbody"><p><b>anna@qa ~ %</b> run toolkit --all</p><p className="muted">Running Anna&apos;s QA toolkit...</p><div className="skills">{skills.map((s,i)=><div key={s}><span>✓</span> {s}<small>0{i+1}</small></div>)}</div><p className="success">8 tools ready · let&apos;s build quality software_</p></div></div></section>
  <section className="work shell section" id="work"><Label n="02" text="SELECTED_WORK"/><div className="workhead"><h2>Things I&apos;ve<br/><em>tested & built.</em></h2><p>Selected projects that show how I think, test, document, and improve.</p></div><div>{projects.map(p=><article className="project" key={p[0]}><small>PROJECT / {p[0]}</small><div><h3>{p[1]}</h3><p>{p[2]}</p><span className="tags">{p[3]}</span></div><div className="status"><span>● {p[4]}</span><a href="https://github.com/sureeporn-sudo" aria-label={"View "+p[1]}>↗</a></div></article>)}</div></section>
  <section className="contact section" id="contact"><div className="shell contactgrid"><div><Label n="03" text="CONTACT.TXT"/><h2>Have a project,<br/>an opportunity, or<br/><em>a curious idea?</em></h2></div><div className="contactcard"><small>MY INBOX IS OPEN</small><p>Let&apos;s talk about quality, creative technology, or how I could help your team.</p><a href="mailto:sureeporn.apaikawee@gmail.com"><span>sureeporn.apaikawee@gmail.com</span><span>↗</span></a><div><a href="https://github.com/sureeporn-sudo">GitHub</a> • <a href="#top">LinkedIn</a></div></div></div></section>
  <footer><div className="shell"><p>Designed with curiosity. Tested with care.</p><p>© 2026 ANNA — QA ENGINEER</p><a href="#top">Back to top ↑</a></div></footer>
 </main>
}
function Label({n,text}:{n:string,text:string}){return <div className="label"><span>{n}</span>{text}</div>}
