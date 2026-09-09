import './style.css'

const STREAMLIT_URL = 'https://complyagent-mj.streamlit.app'
const GITHUB_URL = 'https://github.com/MJThePrimarch/complyagent'

document.querySelector('#app').innerHTML = `

  <!-- =========================================
       HEADER
  ========================================== -->

  <header class="site-header">

    <nav class="navbar">

      <a
        href="#top"
        class="brand"
        aria-label="ComplyAgent home"
      >

        <img
          src="/assets/favicon.png"
          alt=""
          class="brand-logo"
        />

        <span class="brand-name">
          ComplyAgent
        </span>

      </a>


      <div
        class="nav-links"
        id="navLinks"
      >

        <a href="#problem">
          Why it matters
        </a>

        <a href="#workflow">
          How it works
        </a>

        <a href="#outputs">
          Outputs
        </a>

        <a href="#demo">
          Try it
        </a>

      </div>


      <a
        href="${STREAMLIT_URL}"
        target="_blank"
        rel="noopener noreferrer"
        class="nav-cta"
      >
        Try ComplyAgent
        <span>↗</span>
      </a>


      <button
        class="mobile-menu-button"
        id="mobileMenuButton"
        type="button"
        aria-label="Open navigation"
        aria-expanded="false"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </nav>

  </header>



  <main id="top">


    <!-- =========================================
         HERO
    ========================================== -->

    <section class="hero">

      <div class="hero-content">

        <div class="eyebrow reveal">

          <span class="status-dot"></span>

          AI-POWERED COMPLIANCE TRIAGE

        </div>


        <h1 class="reveal">

          Your compliance backlog,

          <span>
            triaged before your coffee gets cold.
          </span>

        </h1>


        <p class="hero-description reveal">

          ComplyAgent reads your control assessment,
          identifies what needs attention, drafts
          remediation tickets, and prepares an
          executive summary — so you can focus on
          fixing the gaps.

        </p>


        <div class="hero-actions reveal">

          <a
            href="#demo"
            class="button button-primary"
          >
            Try ComplyAgent
            <span>→</span>
          </a>


          <a
            href="${GITHUB_URL}"
            target="_blank"
            rel="noopener noreferrer"
            class="button button-secondary"
          >
            View source
            <span>↗</span>
          </a>

        </div>


        <div class="hero-meta reveal">

          <div class="meta-item">

            <strong>
              Strands Agents SDK
            </strong>

            <span>
              Agent orchestration
            </span>

          </div>


          <div class="meta-divider"></div>


          <div class="meta-item">

            <strong>
              Amazon Bedrock
            </strong>

            <span>
              Model inference
            </span>

          </div>


          <div class="meta-divider"></div>


          <div class="meta-item">

            <strong>
              Control-library agnostic
            </strong>

            <span>
              Bring your controls
            </span>

          </div>

        </div>

      </div>



      <!-- PRODUCT VISUAL -->

      <div class="hero-visual reveal">

        <div class="floating-tag tag-top">

          <span>✦</span>

          Risk triage

        </div>


        <div class="agent-card">

          <div class="agent-card-header">

            <div class="agent-name">

              <span class="status-dot"></span>

              COMPLYAGENT

            </div>

            <span class="live-label">
              LIVE
            </span>

          </div>


          <div class="agent-card-divider"></div>


          <div class="score-label">
            Compliance score
          </div>


          <div class="score">
            72<span>/100</span>
          </div>


          <div class="score-status">
            Action required
          </div>


          <div class="control-list">


            <div class="control-row">

              <div class="control-info">

                <div class="control-title">

                  <span class="control-dot critical"></span>

                  Critical gaps

                </div>

                <span>
                  3 controls
                </span>

              </div>

              <strong class="severity critical-text">
                HIGH
              </strong>

            </div>


            <div class="control-row">

              <div class="control-info">

                <div class="control-title">

                  <span class="control-dot partial"></span>

                  Partial controls

                </div>

                <span>
                  7 controls
                </span>

              </div>

              <strong class="severity partial-text">
                MED
              </strong>

            </div>


            <div class="control-row">

              <div class="control-info">

                <div class="control-title">

                  <span class="control-dot passing"></span>

                  Passing controls

                </div>

                <span>
                  28 controls
                </span>

              </div>

              <strong class="severity passing-text">
                OK
              </strong>

            </div>


          </div>


          <div class="agent-footer">

            <span>
              AI triage complete
            </span>

            <span class="footer-pulse"></span>

          </div>

        </div>


        <div class="floating-tag tag-bottom">

          <span>✓</span>

          Ticket drafted

        </div>

      </div>

    </section>



    <!-- =========================================
         PROBLEM
    ========================================== -->

    <section
      class="problem-section"
      id="problem"
    >

      <div class="section-heading reveal">

        <div class="section-kicker">
          THE COMPLIANCE BOTTLENECK
        </div>

        <h2>

          Finding the gaps is only

          <span>
            the beginning.
          </span>

        </h2>

        <p>

          A control assessment can tell you what's
          failing. It doesn't tell your team what
          deserves attention first, who should own it,
          or how to turn the finding into an actionable
          remediation task.

        </p>

      </div>


      <div class="problem-grid">


        <article class="problem-card reveal">

          <div class="problem-number">
            01
          </div>

          <div class="problem-icon">
            ◌
          </div>

          <h3>
            Too many findings
          </h3>

          <p>

            Compliance assessments can produce dozens
            or hundreds of control results. Reviewing
            every failure manually slows everything down.

          </p>

        </article>


        <article class="problem-card reveal">

          <div class="problem-number">
            02
          </div>

          <div class="problem-icon">
            ⌁
          </div>

          <h3>
            Risk gets buried
          </h3>

          <p>

            Not every failing control deserves the same
            urgency. Teams need a faster way to separate
            critical gaps from lower-priority work.

          </p>

        </article>


        <article class="problem-card reveal">

          <div class="problem-number">
            03
          </div>

          <div class="problem-icon">
            →
          </div>

          <h3>
            Findings need action
          </h3>

          <p>

            A compliance report is only useful if someone
            can act on it. Turning findings into clear
            remediation work takes another round of
            manual effort.

          </p>

        </article>

      </div>


      <div class="solution-strip reveal">

        <div class="solution-mark">

          <img
            src="/assets/favicon.png"
            alt=""
          />

        </div>


        <div>

          <span class="solution-label">
            THIS IS WHERE COMPLYAGENT COMES IN
          </span>

          <h3>

            From control gaps to

            <span>
              actionable next steps.
            </span>

          </h3>

        </div>


        <a
          href="#workflow"
          class="solution-link"
        >
          See how it works →
        </a>

      </div>

    </section>



    <!-- =========================================
         WORKFLOW / ARCHITECTURE
    ========================================== -->

    <section
      class="workflow-section"
      id="workflow"
    >

      <div class="workflow-heading reveal">

        <div class="section-kicker">
          HOW THE AGENT WORKS
        </div>

        <h2>

          From assessment data to

          <span>
            remediation-ready output.
          </span>

        </h2>

        <p>

          ComplyAgent takes a control assessment,
          evaluates the gaps, prioritizes risk,
          and turns the highest-priority findings
          into work your team can act on.

        </p>

      </div>



      <!-- HIGH-LEVEL ARCHITECTURE -->

      <div class="architecture reveal">

        <div class="architecture-node input-node">

          <span class="node-label">
            INPUT
          </span>

          <div class="node-icon">
            ↓
          </div>

          <h3>
            Control assessment
          </h3>

          <p>
            Pass, fail, and partial results.
          </p>

        </div>


        <div class="architecture-arrow">
          →
        </div>


        <div class="architecture-agent">

          <div class="architecture-agent-header">

            <div class="architecture-agent-brand">

              <img
                src="/assets/favicon.png"
                alt=""
              />

            </div>

            <div>

              <span class="node-label">
                AGENT
              </span>

              <h3>
                ComplyAgent
              </h3>

            </div>

            <span class="architecture-live">
              LIVE
            </span>

          </div>


          <div class="architecture-stack">

            <div class="stack-item">

              <span class="stack-dot green"></span>

              Strands Agents SDK

            </div>


            <div class="stack-item">

              <span class="stack-dot blue"></span>

              Amazon Bedrock

            </div>

          </div>

        </div>


        <div class="architecture-arrow">
          →
        </div>


        <div class="architecture-node output-node">

          <span class="node-label">
            OUTPUT
          </span>

          <div class="node-icon">
            ✓
          </div>

          <h3>
            Actionable results
          </h3>

          <p>
            Risks, tickets, and summary.
          </p>

        </div>

      </div>



      <!-- FOUR TOOL PIPELINE -->

      <div class="pipeline-wrapper reveal">

        <div class="pipeline-header">

          <div>

            <span class="section-kicker">
              AGENT PIPELINE
            </span>

            <h3>
              Four steps. One workflow.
            </h3>

          </div>

          <span class="pipeline-badge">
            STRANDS AGENT LOOP
          </span>

        </div>


        <div class="pipeline-grid">


          <article class="pipeline-step">

            <div class="pipeline-number">
              01
            </div>

            <div class="pipeline-icon">
              ↓
            </div>

            <span class="pipeline-label">
              LOAD
            </span>

            <h4>
              Read the assessment
            </h4>

            <p>

              Loads the control dataset and groups
              controls by their current status.

            </p>

            <span class="pipeline-output">
              CONTROL DATA
            </span>

          </article>


          <article class="pipeline-step active">

            <div class="pipeline-number">
              02
            </div>

            <div class="pipeline-icon">
              ✦
            </div>

            <span class="pipeline-label">
              CLASSIFY
            </span>

            <h4>
              Rank the gaps
            </h4>

            <p>

              Evaluates failing and partial controls
              and ranks them by severity.

            </p>

            <span class="pipeline-output">
              RISK PRIORITY
            </span>

          </article>


          <article class="pipeline-step">

            <div class="pipeline-number">
              03
            </div>

            <div class="pipeline-icon">
              →
            </div>

            <span class="pipeline-label">
              DRAFT
            </span>

            <h4>
              Create remediation work
            </h4>

            <p>

              Turns priority findings into structured
              tickets with suggested ownership and
              priority.

            </p>

            <span class="pipeline-output">
              REMEDIATION TICKETS
            </span>

          </article>


          <article class="pipeline-step">

            <div class="pipeline-number">
              04
            </div>

            <div class="pipeline-icon">
              ✓
            </div>

            <span class="pipeline-label">
              SUMMARIZE
            </span>

            <h4>
              Give leadership the picture
            </h4>

            <p>

              Produces the overall score, top risks,
              and an executive-ready summary.

            </p>

            <span class="pipeline-output">
              EXECUTIVE SUMMARY
            </span>

          </article>

        </div>

      </div>



      <!-- TECHNOLOGY -->

      <div class="agent-engine reveal">

        <div class="engine-top">

          <div class="engine-status">

            <span class="status-dot"></span>

            AGENT ENGINE

          </div>

          <span class="engine-live">
            STRANDS + BEDROCK
          </span>

        </div>


        <div class="engine-content">

          <div class="engine-brand">

            <img
              src="/assets/favicon.png"
              alt=""
            />

          </div>


          <div>

            <h3>
              Built with agents, not just prompts.
            </h3>

            <p>

              ComplyAgent uses the
              <strong>Strands Agents SDK</strong>
              to orchestrate the compliance workflow,
              with model inference running through
              <strong>Amazon Bedrock</strong>.

            </p>

          </div>

        </div>

      </div>

    </section>



    <!-- =========================================
         OUTPUT SHOWCASE
    ========================================== -->

    <section
      class="outputs-section"
      id="outputs"
    >

      <div class="section-heading reveal">

        <div class="section-kicker">
          WHAT COMES OUT
        </div>

        <h2>

          Less reading.

          <span>
            More action.
          </span>

        </h2>

        <p>

          The point isn't another compliance dashboard.
          ComplyAgent turns assessment data into concrete
          outputs that security and leadership teams can
          actually use.

        </p>

      </div>


      <div class="output-grid">


        <!-- SCORE -->

        <article class="output-card score-output reveal">

          <div class="output-card-top">

            <span class="output-type">
              RISK OVERVIEW
            </span>

            <span class="output-status">
              GENERATED
            </span>

          </div>


          <div class="output-score">

            <div>

              <span class="mini-label">
                COMPLIANCE SCORE
              </span>

              <strong>
                72
              </strong>

            </div>

            <span class="score-denom">
              /100
            </span>

          </div>


          <div class="mini-risk-list">

            <div>

              <span class="mini-risk-dot red"></span>

              <span>
                Critical gaps
              </span>

              <strong>
                3
              </strong>

            </div>


            <div>

              <span class="mini-risk-dot yellow"></span>

              <span>
                Partial controls
              </span>

              <strong>
                7
              </strong>

            </div>


            <div>

              <span class="mini-risk-dot green"></span>

              <span>
                Passing controls
              </span>

              <strong>
                28
              </strong>

            </div>

          </div>

        </article>



        <!-- TICKET -->

        <article class="output-card ticket-output reveal">

          <div class="output-card-top">

            <span class="output-type">
              REMEDIATION TICKET
            </span>

            <span class="priority-pill">
              P1
            </span>

          </div>


          <div class="ticket-title">
            Review access control enforcement
          </div>


          <div class="ticket-row">

            <span>
              Suggested owner
            </span>

            <strong>
              Security Engineering
            </strong>

          </div>


          <div class="ticket-row">

            <span>
              Severity
            </span>

            <strong class="danger-text">
              High
            </strong>

          </div>


          <div class="ticket-description">

            Close the identified control gap and
            verify that the required access restrictions
            are consistently enforced.

          </div>

        </article>



        <!-- EXEC SUMMARY -->

        <article class="output-card summary-output reveal">

          <div class="output-card-top">

            <span class="output-type">
              EXECUTIVE SUMMARY
            </span>

            <span class="output-status">
              READY
            </span>

          </div>


          <div class="email-window">

            <div class="email-header">

              <span>
                To
              </span>

              <strong>
                Security Leadership
              </strong>

            </div>


            <div class="email-subject">

              Compliance assessment —
              priority findings

            </div>


            <p>

              The current assessment indicates
              several gaps requiring attention.
              The highest-risk findings have been
              prioritized below for remediation.

            </p>


            <div class="email-line"></div>

            <div class="email-placeholder">
              Top risks · Recommended actions · Score
            </div>

          </div>

        </article>

      </div>


      <p class="output-note reveal">
        Example outputs shown for illustration.
        Actual results are generated from the assessment
        you run through ComplyAgent.
      </p>

    </section>



    <!-- =========================================
         LIVE DEMO
    ========================================== -->

    <section
      class="demo-section"
      id="demo"
    >

      <div class="demo-heading reveal">

        <div class="section-kicker">
          SEE IT IN ACTION
        </div>

        <h2>

          Try the

          <span>
            real agent.
          </span>

        </h2>

        <p>

          This is the actual ComplyAgent application
          running live. Use the workspace below or
          open it in a full browser window.

        </p>

      </div>


      <div class="live-app-wrapper reveal">

        <div class="live-app-header">

          <div class="live-app-title">

            <span class="status-dot"></span>

            COMPLYAGENT — LIVE APPLICATION

          </div>


          <a
            href="${STREAMLIT_URL}"
            target="_blank"
            rel="noopener noreferrer"
            class="live-app-link"
          >
            Open full screen ↗
          </a>

        </div>


        <div class="live-app-frame">

          <iframe
            src="${STREAMLIT_URL}/?embed=true"
            title="ComplyAgent live application"
            loading="lazy"
            allow="clipboard-write"
          ></iframe>

        </div>

      </div>

    </section>



    <!-- =========================================
         FRAMEWORKS
    ========================================== -->

    <section
      class="framework-section"
      id="frameworks"
    >

      <div class="framework-content reveal">

        <div>

          <div class="section-kicker">
            BUILT AROUND CONTROL DATA
          </div>

          <h2>
            Not locked to one standard.
          </h2>

          <p>

            ComplyAgent's workflow is designed around
            control assessment data rather than a single
            compliance framework. Start with the control
            library you're assessing and let the same
            triage workflow do the heavy lifting.

          </p>

        </div>


        <div class="framework-pills">

          <span class="framework-pill active">
            PCI-DSS
          </span>

          <span class="framework-pill active">
            SOC 2
          </span>

          <span class="framework-pill">
            Custom controls
          </span>

          <span class="framework-pill">
            JSON control library
          </span>

        </div>

      </div>

    </section>



    <!-- =========================================
         FINAL CTA
    ========================================== -->

    <section class="final-cta">

      <div class="final-cta-content reveal">

        <div class="section-kicker">
          COMPLIANCE WORK, WITHOUT THE BUSYWORK
        </div>


        <h2>

          Stop staring at the backlog.

          <span>
            Start fixing it.
          </span>

        </h2>


        <p>

          Run ComplyAgent against the sample assessment,
          inspect the generated results, and see how an
          agent can turn compliance findings into a
          prioritized starting point for remediation.

        </p>


        <div class="final-actions">

          <a
            href="#demo"
            class="button button-primary"
          >
            Try ComplyAgent
            <span>→</span>
          </a>


          <a
            href="${GITHUB_URL}"
            target="_blank"
            rel="noopener noreferrer"
            class="button button-secondary"
          >
            View GitHub
            <span>↗</span>
          </a>

        </div>

      </div>

    </section>

  </main>



  <!-- =========================================
       FOOTER
  ========================================== -->

  <footer class="site-footer">

    <div class="footer-main">

      <div class="footer-brand">

        <img
          src="/assets/favicon.png"
          alt=""
        />

        <span>
          ComplyAgent
        </span>

      </div>


      <p class="footer-tagline">

        AI-powered compliance triage.

        <br />

        From control gaps to actionable next steps.

      </p>


      <div class="footer-links">

        <div>

          <span>
            PRODUCT
          </span>

          <a href="#workflow">
            How it works
          </a>

          <a href="#outputs">
            Outputs
          </a>

          <a href="#demo">
            Try it
          </a>

        </div>


        <div>

          <span>
            PROJECT
          </span>

          <a
            href="${GITHUB_URL}"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source code ↗
          </a>

          <a
            href="${STREAMLIT_URL}"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live app ↗
          </a>

        </div>

      </div>

    </div>


    <div class="footer-bottom">

      <span>
        Built with Strands Agents SDK · Amazon Bedrock
      </span>

      <span>
        © <span id="currentYear"></span> ComplyAgent
      </span>

    </div>

  </footer>

`



/* =========================================
   MOBILE NAVIGATION
========================================= */

const mobileMenuButton =
  document.querySelector('#mobileMenuButton')

const navLinks =
  document.querySelector('#navLinks')


if (mobileMenuButton && navLinks) {

  mobileMenuButton.addEventListener(
    'click',
    () => {

      const isOpen =
        navLinks.classList.toggle('mobile-open')

      mobileMenuButton.setAttribute(
        'aria-expanded',
        String(isOpen)
      )

      mobileMenuButton.classList.toggle(
        'open',
        isOpen
      )

    }
  )


  navLinks
    .querySelectorAll('a')
    .forEach((link) => {

      link.addEventListener(
        'click',
        () => {

          navLinks.classList.remove(
            'mobile-open'
          )

          mobileMenuButton.classList.remove(
            'open'
          )

          mobileMenuButton.setAttribute(
            'aria-expanded',
            'false'
          )

        }
      )

    })

}



/* =========================================
   SCROLL REVEALS
========================================= */

const revealElements =
  document.querySelectorAll('.reveal')


if ('IntersectionObserver' in window) {

  const observer =
    new IntersectionObserver(
      (entries, observerInstance) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add(
            'is-visible'
          )

          observerInstance.unobserve(
            entry.target
          )

        })

      },
      {
        threshold: 0.08
      }
    )


  revealElements.forEach(
    (element) => observer.observe(element)
  )

} else {

  revealElements.forEach(
    (element) => {
      element.classList.add('is-visible')
    }
  )

}



/* =========================================
   CURRENT YEAR
========================================= */

const yearElement =
  document.querySelector('#currentYear')


if (yearElement) {
  yearElement.textContent =
    new Date().getFullYear()
}