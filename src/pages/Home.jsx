import Collapsible from "../components/Collapsible"

function Home() {
    return <section id="home">
         <header id="intro">
        <h1 className="page-title">Hello, [name].</h1>
        <p className="overall-grade" id="overall-gpa-statement">Your estimated current GPA is [3.00].</p>
      </header>

      <hr />

      <section id="grade-details">
        <h1>Details</h1>
        
        <div className="grid-container" id="grade-details-grid">
          <div className="flex-container" id="details-list">
            <Collapsible />
          </div>
          <div className="graph-wrapper">
            <div className="circle-placeholder" id="gpa-breakdown-graph"></div>
          </div>

        </div>
      </section>
    </section>
}

export default Home