import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <nav class="navbar">

      <a href="#" class="brand">
        <img
          src="/assets/logo.png"
          alt="ComplyAgent"
          class="brand-logo"
        />
        <span class="brand-name">ComplyAgent</span>
      </a>

      <div class="nav-links">
        <a href="#how-it-works">How it works</a>
        <a href="#workflow">Workflow</a>
        <a href="#demo">Try it</a>
      </div>

      <a
        href="https://complyagent-mj.streamlit.app"
        target="_blank"
        rel="noopener noreferrer"
        class="nav-cta"
      >
        Try ComplyAgent
        <span>↗</span>
      </a>

    </nav>
  </header>


  <main>

    <!-- =========================================
         HERO
    ========================================== -->

    <section class="hero">

      <div class="hero-content">

        <div class="eyebrow">
          <span class="status-dot"></span>
          AI-POWERED COMPLIANCE TRIAGE
        </div>

        <h1>
          Your compliance backlog,
          <span>triaged before your coffee gets cold.</span>
        </h1>

        <p class="hero-description">
          ComplyAgent reads your control assessment, identifies
          what needs attention, drafts remediation tickets, and
          prepares an executive summary — so you can focus on
          fixing the gaps.
        </p>

        <div class="hero-actions">

          <a href="#demo" class="button button-primary">
            Try ComplyAgent
            <span>→</span>
          </a>

          <a
            href="https://github.com/MJThePrimarch/complyagent"
            target="_blank"
            rel="noopener noreferrer"
            class="button button-secondary"
          >
            View source
            <span>↗</span>
          </a>

        </div>

        <div class="hero-meta">

          <div class="meta-item">
            <strong>Strands Agents SDK</strong>
            <span>Agent orchestration</span>
          </div>

          <div class="meta-divider"></div>

          <div class="meta-item">
            <strong>Amazon Bedrock</strong>
            <span>AI inference</span>
          </div>

          <div class="meta-divider"></div>

          <div class="meta-item">
            <strong>Framework agnostic</strong>
            <span>Bring your controls</span>
          </div>

        </div>

      </div>


      <!-- PRODUCT PREVIEW -->

      <div class="hero-visual">

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

            <span class="live-label">LIVE</span>

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

                <span>3 controls</span>
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

                <span>7 controls</span>
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

                <span>28 controls</span>
              </div>

              <strong class="severity passing-text">
                OK
              </strong>

            </div>

          </div>


          <div class="agent-footer">
            <span>AI triage complete</span>
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

    <section class="problem-section" id="how-it-works">

      <div class="section-heading">

        <div class="section-kicker">
          THE COMPLIANCE BOTTLENECK
        </div>

        <h2>
          Finding the gaps is only
          <span>the beginning.</span>
        </h2>

        <p>
          A control assessment can tell you what's failing.
          It doesn't tell your team what deserves attention first,
          who should own it, or how to turn the finding into an
          actionable remediation task.
        </p>

      </div>


      <div class="problem-grid">

        <article class="problem-card">

          <div class="problem-number">01</div>

          <div class="problem-icon">◌</div>

          <h3>Too many findings</h3>

          <p>
            Compliance assessments can produce dozens or hundreds
            of control results. Reviewing every failure manually
            slows everything down.
          </p>

        </article>


        <article class="problem-card">

          <div class="problem-number">02</div>

          <div class="problem-icon">⌁</div>

          <h3>Risk gets buried</h3>

          <p>
            Not every failing control deserves the same urgency.
            Teams need a faster way to separate critical gaps
            from lower-priority work.
          </p>

        </article>


        <article class="problem-card">

          <div class="problem-number">03</div>

          <div class="problem-icon">→</div>

          <h3>Findings need action</h3>

          <p>
            A compliance report is only useful if someone can act
            on it. Turning findings into clear remediation work
            takes another round of manual effort.
          </p>

        </article>

      </div>


      <div class="solution-strip">

        <div class="solution-mark">
          <img
            src="/assets/logo.png"
            alt=""
          />
        </div>

        <div>

          <span class="solution-label">
            THIS IS WHERE COMPLYAGENT COMES IN
          </span>

          <h3>
            From control gaps to
            <span>actionable next steps.</span>
          </h3>

        </div>

        <a href="#workflow" class="solution-link">
          See how it works →
        </a>

      </div>

    </section>



    <!-- =========================================
         AGENT WORKFLOW
    ========================================== -->

    <section class="workflow-section" id="workflow">

      <div class="workflow-heading">

        <div class="section-kicker">
          THE AGENT WORKFLOW
        </div>

        <h2>
          From assessment data to
          <span>remediation-ready output.</span>
        </h2>

        <p>
          ComplyAgent turns raw control results into a prioritized
          view of what needs attention, then converts those findings
          into work your team can actually act on.
        </p>

      </div>


      <div class="workflow">

        <div class="workflow-line"></div>


        <article class="workflow-step">

          <div class="step-number">01</div>

          <div class="step-icon">↓</div>

          <h3>Load</h3>

          <p>
            Feed ComplyAgent your control assessment and its
            pass, fail, or partial results.
          </p>

          <span class="step-output">
            CONTROL DATA
          </span>

        </article>


        <article class="workflow-step active">

          <div class="step-number">02</div>

          <div class="step-icon">✦</div>

          <h3>Classify</h3>

          <p>
            The agent evaluates the gaps and ranks them by
            severity so the highest-risk issues rise to the top.
          </p>

          <span class="step-output">
            RISK PRIORITY
          </span>

        </article>


        <article class="workflow-step">

          <div class="step-number">03</div>

          <div class="step-icon">→</div>

          <h3>Draft</h3>

          <p>
            Top gaps become structured remediation tickets
            with a title, owner suggestion, priority, and next steps.
          </p>

          <span class="step-output">
            REMEDIATION TICKETS
          </span>

        </article>


        <article class="workflow-step">

          <div class="step-number">04</div>

          <div class="step-icon">✓</div>

          <h3>Summarize</h3>

          <p>
            ComplyAgent turns the assessment into an executive
            summary with the overall score and most important risks.
          </p>

          <span class="step-output">
            EXECUTIVE SUMMARY
          </span>

        </article>

      </div>


      <!-- AGENT ENGINE -->

      <div class="agent-engine">

        <div class="engine-top">

          <div class="engine-status">
            <span class="status-dot"></span>
            AGENT ENGINE
          </div>

          <span class="engine-live">
            RUNNING
          </span>

        </div>


        <div class="engine-content">

          <div class="engine-brand">

            <img
              src="/assets/logo.png"
              alt=""
            />

          </div>

          <div>

            <h3>
              Built with agents, not just prompts.
            </h3>

            <p>
              ComplyAgent uses the Strands Agents SDK to orchestrate
              the workflow, with Claude running through Amazon Bedrock.
            </p>

          </div>

        </div>

      </div>

    </section>



    <!-- =========================================
         DEMO PLACEHOLDER
    ========================================== -->

    <section class="demo-section" id="demo">

      <div class="demo-heading">

        <div class="section-kicker">
          SEE IT IN ACTION
        </div>

        <h2>
          Try the
          <span>real agent.</span>
        </h2>

        <p>
          The live ComplyAgent application runs separately from
          this product site. Launch it and run an assessment
          through the actual agent.
        </p>

      </div>


      <div class="demo-card">

        <div class="demo-card-top">

          <div class="demo-status">
            <span class="status-dot"></span>
            COMPLYAGENT
          </div>

          <span class="demo-live">
            LIVE APPLICATION
          </span>

        </div>


        <div class="demo-content">

          <div class="demo-icon">
            <img
              src="/assets/logo.png"
              alt=""
            />
          </div>

          <h3>
            Your compliance triage workspace
          </h3>

          <p>
            Upload your assessment, let the agent prioritize
            the gaps, and generate the remediation report.
          </p>

          <a
            href="https://complyagent-mj.streamlit.app"
            target="_blank"
            rel="noopener noreferrer"
            class="button button-primary"
          >
            Launch ComplyAgent
            <span>↗</span>
          </a>

        </div>

      </div>

    </section>



    <!-- =========================================
         FINAL CTA
    ========================================== -->

    <section class="final-cta">

      <div class="final-cta-content">

        <div class="section-kicker">
          COMPLIANCE WORK, WITHOUT THE BUSYWORK
        </div>

        <h2>
          Stop staring at the backlog.
          <span>Start fixing it.</span>
        </h2>

        <p>
          ComplyAgent turns assessment results into a prioritized
          starting point for remediation.
        </p>

        <div class="final-actions">

          <a
            href="https://complyagent-mj.streamlit.app"
            target="_blank"
            rel="noopener noreferrer"
            class="button button-primary"
          >
            Try ComplyAgent
            <span>→</span>
          </a>

          <a
            href="https://github.com/MJThePrimarch/complyagent"
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

    <div class="footer-brand">

      <img
        src="/assets/logo.png"
        alt="ComplyAgent"
      />

      <span>ComplyAgent</span>

    </div>

    <p>
      AI-powered compliance triage.
    </p>

    <div class="footer-links">

      <a
        href="https://github.com/MJThePrimarch/complyagent"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub ↗
      </a>

      <a
        href="https://complyagent-mj.streamlit.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Live app ↗
      </a>

    </div>

    <div class="footer-bottom">
      Built with Strands Agents SDK · Amazon Bedrock
    </div>

  </footer>
`