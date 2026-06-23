const services = [
  "Once-Off Garden Clean-Up",
  "Branch Cutting & Removal",
  "Green Waste Removal",
  "Post-Storm Clean-Up",
  "Small Shrub & Bush Removal",
  "General Outdoor Clean-Up",
  "Not Sure",
];

const statuses = [
  "Request Submitted",
  "Estimate Generated",
  "Awaiting Verification",
  "More Photos Requested",
  "Site Visit Requested",
  "Quote Verified",
  "Quote Accepted",
  "Scheduled",
  "Team Assigned",
  "Team On Route",
  "In Progress",
  "Completed",
];

const defaultServiceTeams = [
  {
    id: "team-aloe",
    name: "Team Aloe",
    mainMember: "Sipho Maseko",
    ownerContact: "071 220 1407",
    members: "Sipho Maseko, Daniel Naidoo",
    serviceAbility: "Garden Clean-Up, Green Waste Removal",
    serviceAreas: "Durbanville, Bellville, Table View",
  },
  {
    id: "team-spekboom",
    name: "Team Spekboom",
    mainMember: "Mia Jacobs",
    ownerContact: "082 441 9033",
    members: "Mia Jacobs, Lerato Khumalo",
    serviceAbility: "Branch Cutting & Removal, Post-Storm Clean-Up",
    serviceAreas: "Claremont, Rondebosch, Newlands",
  },
  {
    id: "team-acacia",
    name: "Team Acacia",
    mainMember: "Daniel Naidoo",
    ownerContact: "079 811 5570",
    members: "Daniel Naidoo, Priya Reddy",
    serviceAbility: "Small Shrub & Bush Removal, General Outdoor Clean-Up",
    serviceAreas: "Somerset West, Stellenbosch",
  },
];

const defaultSettings = {
  banking: {
    accountName: "City Garden Co",
    bankName: "First National Bank",
    accountNumber: "1234567890",
    branchCode: "250655",
    paymentNote: "Use your CGG project reference as payment reference.",
  },
  pricing: {
    time: { T1: 450, T2: 650, T3: 1150, T4: 2200 },
    load: { L1: 0, L2: 150, L3: 450, L4: 850 },
    complexity: { A: 0, B: 150, C: 350, D: 650 },
    urgentAsap: 250,
    extraArea: 180,
  },
};

const demoProjects = [
  seedProject("CGG-2026-00124", "Amelia", "Botha", "Durbanville", "Estimate Generated", 650, "T2", "L2", "B"),
  seedProject("CGG-2026-00131", "Bianca", "Olivier", "Bellville", "Awaiting Verification", 850, "T2", "L3", "B"),
  seedProject("CGG-2026-00132", "David", "Williams", "Newlands", "Quote Verified", 1450, "T3", "L3", "C"),
  seedProject("CGG-2026-00125", "Thabo", "Dlamini", "Claremont", "Quote Accepted", 1250, "T3", "L3", "B"),
  seedProject("CGG-2026-00126", "Karen", "Visser", "Constantia", "Awaiting Verification", 1850, "T3", "L4", "C"),
  seedProject("CGG-2026-00127", "Naledi", "Mokoena", "Table View", "Scheduled", 950, "T2", "L3", "A"),
  seedProject("CGG-2026-00128", "Francois", "Meyer", "Somerset West", "Team Assigned", 2450, "T4", "L4", "C"),
  seedProject("CGG-2026-00129", "Priya", "Reddy", "Stellenbosch", "In Progress", 1450, "T3", "L3", "B"),
  seedProject("CGG-2026-00130", "Michael", "Stone", "Rondebosch", "Completed", 720, "T1", "L2", "A"),
];

const state = {
  mode: "office",
  officeTab: "overview",
  selectedRef: "CGG-2026-00124",
  search: "",
  step: "start",
  projects: loadProjects(),
  settings: loadSettings(),
  serviceTeams: loadServiceTeams(),
  customers: loadCustomers(),
  matchedCustomer: null,
  editingSettings: null,
  selectedTeamIndex: null,
  editingTeamIndex: null,
  form: blankForm(),
};

function render() {
  const pathProject = getProjectFromPath();
  if (pathProject) {
    app().innerHTML = renderPublicProject(pathProject);
    bindPublicProject(pathProject);
    return;
  }

  if (window.location.pathname === "/estimate") {
    app().innerHTML = renderEstimateShell();
    bindEstimate();
    return;
  }

  app().innerHTML = renderBackOffice();
  bindOffice();
}

function app() {
  return document.getElementById("app");
}

function renderBackOffice() {
  const project = selectedProject();
  const settingsOnly = state.officeTab === "settings";
  const teamsOnly = state.officeTab === "teams";
  return `
    <main class="ops-shell">
      <aside class="ops-sidebar">
        <div class="ops-brand">
          <img class="ops-logo real-logo" src="assets/CGG_BO_Logo.png" alt="City Garden Guys" />
        </div>
        <nav class="ops-nav">
          ${officeTab("overview", "Overview")}
          ${officeTab("pipeline", "Pipeline")}
          ${officeTab("quote", "Quote Control")}
          ${officeTab("portal", "Customer Portal")}
          ${officeTab("teams", "Service Teams")}
        </nav>
        <div class="ops-sidebar-footer">
          <button class="ops-btn light" id="openEstimate"><span class="nav-icon">+</span>Create Internal Quote</button>
          ${officeTab("settings", "Admin Settings")}
        </div>
      </aside>
      <section class="ops-main">
        ${settingsOnly ? `
        <header class="ops-topbar settings-topbar">
          <div>
            <h1>Admin Settings</h1>
            <p>Manage finance details and configurable job pricing.</p>
          </div>
        </header>
        <section class="settings-only">
          ${renderSettingsControl()}
        </section>
        ` : teamsOnly ? `
        <header class="ops-topbar settings-topbar">
          <div>
            <h1>Service Teams</h1>
            <p>Manage team ownership, service ability, areas, current work, planned work and past projects.</p>
          </div>
          <div class="ops-actions">
            <button class="ops-btn orange" id="addTeam">Add Team</button>
          </div>
        </header>
        <section class="settings-only">
          ${renderServiceTeamsControl()}
        </section>
        ` : `
        <header class="ops-topbar">
          <div>
            <h1>Project Control</h1>
            <p>Manage quote, status, team, portal visibility and next actions from one workspace.</p>
          </div>
          <div class="ops-actions">
            <button class="ops-btn" id="saveProject">Save Changes</button>
            <button class="ops-btn orange" data-open-project="${project.reference}">Open Portal</button>
          </div>
        </header>
        <section class="ops-metrics">
          ${metric("Open", projectsByStatus(["Request Submitted", "Estimate Generated", "Awaiting Verification", "More Photos Requested", "Site Visit Requested", "Quote Verified", "Quote Accepted", "Scheduled", "Team Assigned", "Team On Route", "In Progress"]).length)}
          ${metric("Needs Verify", countStatus("Awaiting Verification") + countStatus("Estimate Generated"))}
          ${metric("Accepted", countStatus("Quote Accepted") + countStatus("Scheduled"))}
          ${metric("In Progress", countStatus("In Progress"))}
          ${metric("Revenue", money(state.projects.reduce((sum, item) => sum + Number(item.price || 0), 0)))}
        </section>
        <section class="ops-workspace">
          <div class="ops-panel project-queue">
            <div class="panel-head">
              <div><h2>Project Queue</h2><span>${filteredProjects().length} visible projects</span></div>
            </div>
            <input class="ops-search" id="projectSearch" placeholder="Search customer, suburb, reference" value="${escapeHtml(state.search)}" />
            <div class="queue-list">
              ${filteredProjects().map(queueRow).join("")}
            </div>
          </div>
          <div class="ops-detail">
            ${renderOfficeTab(project)}
          </div>
        </section>
        `}
      </section>
    </main>
    <div class="toast" id="toast"></div>
  `;
}

function renderOfficeTab(project) {
  if (state.officeTab === "pipeline") return renderPipelineControl(project);
  if (state.officeTab === "quote") return renderQuoteControl(project);
  if (state.officeTab === "portal") return renderPortalControl(project);
  if (state.officeTab === "settings") return renderSettingsControl();
  return renderOverviewControl(project);
}

function renderOverviewControl(project) {
  return `
    <section class="ops-panel">
      <div class="record-head">
        <div>
          <span class="eyebrow">${project.reference}</span>
          <h2>${project.customer.firstName} ${project.customer.lastName}</h2>
          <p>${fullAddress(project)}</p>
        </div>
        <span class="status-pill">${project.status}</span>
      </div>
      <div class="control-grid">
        ${selectControl("Status", "status", statuses, project.status)}
        ${selectControl("Assigned Team", "team", teamOptions(), project.team || "Unassigned")}
        ${inputControl("Scheduled Date", "scheduledDate", project.scheduledDate || "")}
        ${inputControl("Quote Amount", "price", project.price, "number")}
      </div>
    </section>
    <section class="split-grid">
      <div class="ops-panel">
        <div class="panel-head"><div><h2>Customer</h2><span>Contact and preference</span></div></div>
        <div class="data-grid">
          ${dataItem("Cell", project.customer.cell)}
          ${dataItem("Email", project.customer.email)}
          ${dataItem("Preferred", project.customer.contactMethod)}
          ${dataItem("Suburb", project.property.suburb)}
        </div>
      </div>
      <div class="ops-panel">
        <div class="panel-head"><div><h2>Rating</h2><span>Internal estimate logic</span></div></div>
        <div class="rating-controls">
          ${selectControl("Time", "time", ["T1", "T2", "T3", "T4"], project.rating.time)}
          ${selectControl("Load", "load", ["L1", "L2", "L3", "L4"], project.rating.load)}
          ${selectControl("Complexity", "complexity", ["A", "B", "C", "D"], project.rating.complexity)}
        </div>
      </div>
    </section>
    <section class="ops-panel">
      <div class="panel-head"><div><h2>Uploaded Areas</h2><span>Photos and site notes</span></div></div>
      <div class="area-strip">${project.areas.map(areaTile).join("")}</div>
    </section>
  `;
}

function renderPipelineControl(project) {
  return `
    <section class="ops-panel">
      <div class="record-head">
        <div><span class="eyebrow">Pipeline</span><h2>${project.reference}</h2><p>Move the project forward without losing visibility.</p></div>
        <span class="status-pill">${project.status}</span>
      </div>
      <div class="compact-pipeline">
        ${statuses.map((status, index) => {
          const current = statuses.indexOf(project.status);
          return `<button class="pipe-step ${index < current ? "done" : index === current ? "active" : ""}" data-set-status="${status}">
            <span>${index + 1}</span>${status}
          </button>`;
        }).join("")}
      </div>
    </section>
    <section class="ops-panel">
      <div class="panel-head"><div><h2>Manager Notes</h2><span>Visible internally only</span></div></div>
      <textarea class="ops-notes" data-project-field="managerNotes" placeholder="Add scheduling, access or quality notes.">${escapeHtml(project.managerNotes || "")}</textarea>
    </section>
  `;
}

function renderQuoteControl(project) {
  return `
    <section class="ops-panel">
      <div class="record-head">
        <div><span class="eyebrow">Internal Verification</span><h2>${money(project.price)}</h2><p>Review photos, service type, address, rating and price before the customer accepts.</p></div>
        <span class="status-pill">${project.rating.time} / ${project.rating.load} / ${project.rating.complexity}</span>
      </div>
      <div class="control-grid">
        ${inputControl("Estimated Price", "price", project.price, "number")}
        ${selectControl("Time Rating", "time", ["T1", "T2", "T3", "T4"], project.rating.time)}
        ${selectControl("Load Rating", "load", ["L1", "L2", "L3", "L4"], project.rating.load)}
        ${selectControl("X Rating", "complexity", ["A", "B", "C", "D"], project.rating.complexity)}
      </div>
      <div class="data-grid verification-grid">
        ${dataItem("Service Type", project.selectedServices.join(", ") || "Not Sure")}
        ${dataItem("Address", fullAddress(project))}
        ${dataItem("Uploaded Areas", project.areas.length)}
        ${dataItem("Photos", project.areas.reduce((sum, area) => sum + area.photos.length, 0))}
      </div>
      <textarea class="ops-notes" data-project-field="quoteNotes" placeholder="Verification notes">${escapeHtml(project.quoteNotes || "Estimate includes labour, loading, clean-up and green waste removal.")}</textarea>
      <div class="button-row">
        <button class="ops-btn" data-set-status="Awaiting Verification">Awaiting Verification</button>
        <button class="ops-btn orange" data-set-status="Quote Verified">Verify Estimate</button>
        <button class="ops-btn light" data-action="Estimate adjusted">Adjust Estimate</button>
        <button class="ops-btn light" data-set-status="More Photos Requested">Request More Photos</button>
        <button class="ops-btn light" data-set-status="Site Visit Requested">Request Site Visit</button>
      </div>
    </section>
  `;
}

function renderPortalControl(project) {
  return `
    <section class="ops-panel">
      <div class="record-head">
        <div>
          <span class="eyebrow">Public Customer URL</span>
          <h2>/project/${project.reference}</h2>
          <p>No login required. The customer sees status, quote, photos, payment placeholder and updates.</p>
        </div>
        <button class="ops-btn orange" data-open-project="${project.reference}">Open</button>
      </div>
      <div class="portal-preview">
        <div class="portal-mini-top">
          <span class="status-pill">${project.status}</span>
          <strong>${project.reference}</strong>
        </div>
        <div class="quote-total"><span>Quote amount</span><strong>${money(project.price)}</strong></div>
        ${renderTimeline(statuses.indexOf(project.status), statuses)}
      </div>
    </section>
    <section class="ops-panel">
      <div class="panel-head"><div><h2>Customer Updates</h2><span>Short, reassuring messages</span></div></div>
      <div class="updates-list">
        <div><strong>Project created</strong><p>Your estimate and project record have been generated.</p></div>
        <div><strong>Next update</strong><p>We verify your photos and confirm scheduling.</p></div>
      </div>
    </section>
  `;
}

function renderSettingsControl() {
  const settings = state.settings;
  const editing = state.editingSettings;
  if (editing === "finance") return renderFinanceEditor(settings);
  if (editing === "addons") return renderAddOnsEditor(settings);
  if (editing === "pricing") return renderPricingEditor(settings);
  if (editing === "services") return renderServicesSummary(true);
  return `
    <section class="split-grid">
      ${settingsSummaryCard("Finance Details", "Banking details shown on customer project/payment screens", [
        ["Account Name", settings.banking.accountName],
        ["Bank", settings.banking.bankName],
        ["Account No.", settings.banking.accountNumber],
        ["Branch Code", settings.banking.branchCode],
        ["Payment Note", settings.banking.paymentNote],
      ], "finance")}
      ${settingsSummaryCard("Pricing Add-Ons", "Applied on top of T / L / X job pricing", [
        ["ASAP Urgency", money(settings.pricing.urgentAsap)],
        ["Extra Area", money(settings.pricing.extraArea)],
        ["Formula", "Time + Load + Complexity + Urgency + Extra Areas"],
      ], "addons")}
    </section>
    ${pricingSummaryCard(settings)}
    ${renderServicesSummary(false)}
  `;
}

function settingsSummaryCard(title, subtitle, rows, editKey) {
  return `
    <section class="ops-panel settings-card">
      <div class="panel-head">
        <div><h2>${title}</h2><span>${subtitle}</span></div>
        <button class="ops-btn light" data-edit-settings="${editKey}">Edit</button>
      </div>
      <div class="data-grid settings-readonly">
        ${rows.map(([label, value]) => dataItem(label, value)).join("")}
      </div>
    </section>
  `;
}

function pricingSummaryCard(settings) {
  return `
    <section class="ops-panel settings-card">
      <div class="panel-head">
        <div><h2>Job Pricing Configuration</h2><span>Saved T1-T4, L1-L4 and X/A-D values used in instant quotes</span></div>
        <button class="ops-btn light" data-edit-settings="pricing">Edit</button>
      </div>
      <div class="settings-matrix readonly">
        ${pricingReadOnlyGroup("Time Rating", settings.pricing.time)}
        ${pricingReadOnlyGroup("Load Rating", settings.pricing.load)}
        ${pricingReadOnlyGroup("X Rating", settings.pricing.complexity)}
      </div>
    </section>
  `;
}

function pricingReadOnlyGroup(title, values) {
  return `
    <div class="pricing-group">
      <h3>${title}</h3>
      ${Object.keys(values).map((key) => `<div class="price-row readonly"><span><strong>${key}</strong></span><strong>${money(values[key])}</strong></div>`).join("")}
    </div>
  `;
}

function renderServicesSummary(isEditing) {
  return `
    <section class="ops-panel settings-card">
      <div class="panel-head">
        <div><h2>Service Configuration</h2><span>Services available in the customer estimate flow</span></div>
        ${isEditing ? `<button class="ops-btn light" data-cancel-settings>Close</button>` : `<button class="ops-btn light" data-edit-settings="services">View</button>`}
      </div>
      <div class="service-settings">
        ${services.map((service) => `<span>${service}</span>`).join("")}
      </div>
    </section>
  `;
}

function renderFinanceEditor(settings) {
  return `
    <section class="ops-panel settings-editor">
      <div class="panel-head"><div><h2>Edit Finance Details</h2><span>Save to return to the details box</span></div>${settingsEditorActions()}</div>
      <div class="control-grid settings-grid">
        ${settingsInput("Account Name", "banking", "accountName", settings.banking.accountName)}
        ${settingsInput("Bank Name", "banking", "bankName", settings.banking.bankName)}
        ${settingsInput("Account Number", "banking", "accountNumber", settings.banking.accountNumber)}
        ${settingsInput("Branch Code", "banking", "branchCode", settings.banking.branchCode)}
      </div>
      <label class="field full"><span class="field-label">Payment Note</span><textarea data-setting-group="banking" data-setting-field="paymentNote">${escapeHtml(settings.banking.paymentNote)}</textarea></label>
    </section>
  `;
}

function renderAddOnsEditor(settings) {
  return `
    <section class="ops-panel settings-editor">
      <div class="panel-head"><div><h2>Edit Pricing Add-Ons</h2><span>Save to return to the details box</span></div>${settingsEditorActions()}</div>
      <div class="control-grid settings-grid">
        ${pricingInput("ASAP Urgency", "urgentAsap", settings.pricing.urgentAsap)}
        ${pricingInput("Extra Area", "extraArea", settings.pricing.extraArea)}
      </div>
    </section>
  `;
}

function renderPricingEditor(settings) {
  return `
    <section class="ops-panel settings-editor">
      <div class="panel-head"><div><h2>Edit Job Pricing Configuration</h2><span>Save to return to the details box</span></div>${settingsEditorActions()}</div>
      <div class="settings-matrix">
        ${pricingGroup("Time Rating", "time", settings.pricing.time, { T1: "1-2 hours", T2: "2-4 hours", T3: "5-8 hours", T4: "2 days" })}
        ${pricingGroup("Load Rating", "load", settings.pricing.load, { L1: "1 dustbin", L2: "2 dustbins", L3: "Half bakkie / half ton bag", L4: "Full bakkie / 1 ton bag" })}
        ${pricingGroup("X Rating", "complexity", settings.pricing.complexity, { A: "Easy", B: "Moderate", C: "Tedious", D: "Complex" })}
      </div>
    </section>
  `;
}

function settingsEditorActions() {
  return `<div class="button-row"><button class="ops-btn light" data-cancel-settings>Cancel</button><button class="ops-btn orange" data-save-settings-window>Save Changes</button></div>`;
}

function renderServiceTeamsControl() {
  if (state.editingTeamIndex !== null) return renderTeamEditor(state.editingTeamIndex);
  if (state.selectedTeamIndex !== null) return renderTeamFullView(state.selectedTeamIndex);
  return `
    <section class="team-grid">
      ${state.serviceTeams.map((team, index) => renderTeamSummaryCard(team, index)).join("")}
    </section>
  `;
}

function renderTeamSummaryCard(team, index) {
  const current = teamProjects(team.name, "current");
  return `
    <article class="ops-panel team-card">
      <div class="panel-head">
        <div><h2>${escapeHtml(team.name || `Team ${index + 1}`)}</h2><span>${escapeHtml(team.mainMember || "No main member set")}</span></div>
        <span class="status-pill">${current.length} current</span>
      </div>
      <div class="data-grid settings-readonly">
        ${dataItem("Team Owner", team.mainMember || "Not set")}
        ${dataItem("Owner Contact", team.ownerContact || "Not set")}
        ${dataItem("Team Link", `/team/${team.id}`)}
        ${dataItem("Current Projects", current.length)}
      </div>
      <div class="team-mini-list">
        ${current.slice(0, 3).map(project => `<span>${project.reference} · ${project.status}</span>`).join("") || `<span>No current projects</span>`}
      </div>
      <div class="button-row">
        <button class="ops-btn orange" data-view-team="${index}">See Team</button>
        <button class="ops-btn light" data-edit-team="${index}">Edit Team</button>
      </div>
    </article>
  `;
}

function renderTeamFullView(index) {
  const team = state.serviceTeams[index];
  if (!team) {
    state.selectedTeamIndex = null;
    return renderServiceTeamsControl();
  }
  const current = teamProjects(team.name, "current");
  const planned = teamProjects(team.name, "planned");
  const past = teamProjects(team.name, "past");
  return `
    <section class="ops-panel team-full">
      <div class="record-head">
        <div>
          <span class="eyebrow">Team View</span>
          <h2>${escapeHtml(team.name)}</h2>
          <p>${escapeHtml(team.serviceAbility || "No service ability set")}</p>
        </div>
        <div class="button-row">
          <button class="ops-btn light" data-back-teams>Back</button>
          <button class="ops-btn orange" data-edit-team="${index}">Edit Team</button>
        </div>
      </div>
      <div class="data-grid">
        ${dataItem("Team Owner", team.mainMember || "Not set")}
        ${dataItem("Owner Contact", team.ownerContact || "Not set")}
        ${dataItem("Team Members", team.members || "Not set")}
        ${dataItem("Service Areas", team.serviceAreas || "Not set")}
        ${dataItem("Team Link", `/team/${team.id}`)}
        ${dataItem("Current Projects", current.length)}
      </div>
    </section>
    <section class="split-grid">
      ${teamProjectPanel("Current Projects", current)}
      ${teamProjectPanel("Planned Projects", planned)}
    </section>
    ${teamProjectPanel("Past Projects", past)}
  `;
}

function renderTeamEditor(index) {
  const team = state.serviceTeams[index];
  if (!team) {
    state.editingTeamIndex = null;
    return renderServiceTeamsControl();
  }
  return `
    <section class="ops-panel settings-editor">
      <div class="panel-head">
        <div><h2>Edit Team Details</h2><span>Save to return to the team view</span></div>
        <div class="button-row">
          <button class="ops-btn light" data-cancel-team-edit>Cancel</button>
          <button class="ops-btn orange" data-save-team-edit>Save Team</button>
        </div>
      </div>
      <div class="control-grid settings-grid">
        ${teamInput("Team Name", index, "name", team.name)}
        ${teamInput("Team Owner", index, "mainMember", team.mainMember)}
        ${teamInput("Owner Contact Link", index, "ownerContact", team.ownerContact)}
        ${teamInput("Team Link", index, "id", team.id)}
      </div>
      <label class="field full">
        <span class="field-label">Team Members</span>
        <textarea data-team-index="${index}" data-team-field="members" placeholder="Name, name, name">${escapeHtml(team.members || "")}</textarea>
      </label>
      <label class="field full">
        <span class="field-label">Service Ability</span>
        <textarea data-team-index="${index}" data-team-field="serviceAbility" placeholder="Garden Clean-Up, Green Waste Removal">${escapeHtml(team.serviceAbility || "")}</textarea>
      </label>
      <label class="field full">
        <span class="field-label">Service Areas</span>
        <textarea data-team-index="${index}" data-team-field="serviceAreas" placeholder="Durbanville, Bellville, Claremont">${escapeHtml(team.serviceAreas || "")}</textarea>
      </label>
      <div class="button-row">
        <button class="ops-btn light" data-remove-team="${index}">Remove Team</button>
      </div>
    </section>
  `;
}

function teamProjectPanel(title, projects) {
  return `
    <section class="ops-panel">
      <div class="panel-head"><div><h2>${title}</h2><span>${projects.length} projects</span></div></div>
      <div class="team-project-list">
        ${projects.map(project => `
          <div class="team-project-row">
            <strong>${project.reference}</strong>
            <span>${project.customer.firstName} ${project.customer.lastName} · ${project.status}</span>
          </div>
        `).join("") || `<div class="team-project-row"><span>No projects yet</span></div>`}
      </div>
    </section>
  `;
}

function renderEstimateShell() {
  return `
    <main class="request-shell">
      <section class="request-card">
        <div class="request-top">
          <div class="ops-brand compact">
            <div class="brand-mark">CGG</div>
            <div><strong>City Garden Guys</strong><span>Fast estimate</span></div>
          </div>
          <button class="ops-btn light" id="backOffice">Back Office</button>
        </div>
        ${renderEstimateStep()}
      </section>
    </main>
    <div class="toast" id="toast"></div>
  `;
}

function renderEstimateStep() {
  if (state.step === "customer") return renderCustomerDetails();
  if (state.step === "property") return renderPropertyDetails();
  if (state.step === "services") return renderServiceSelection();
  if (state.step === "areas") return renderAreaUploads();
  if (state.step === "questions") return renderQuickQuestions();
  if (state.step === "quote") return renderQuoteScreen(selectedProject());
  if (state.step === "accepted") return renderAccepted(selectedProject());
  return `
    <div class="request-intro">
      <span class="eyebrow">Instant estimate</span>
      <h1>Get Your Garden Clean-Up Estimate</h1>
      <p>Upload a few photos, tell us what needs to be done, and receive your estimate fast.</p>
      <button class="ops-btn orange large" data-step="customer">Get My Estimate</button>
    </div>
  `;
}

function renderCustomerDetails() {
  const match = state.matchedCustomer;
  return `
    ${stepHeader("Customer Details", "Contact details for quote and updates.")}
    ${match ? `<div class="returning-customer"><strong>Returning customer found</strong><span>${escapeHtml(match.firstName)} ${escapeHtml(match.lastName)} · ${escapeHtml(match.cell)}</span></div>` : `<div class="returning-customer muted"><strong>Cell number is the unique customer ID</strong><span>If this client has used CGG before, their details will appear after entering the cell number.</span></div>`}
    <div class="control-grid">
      ${formInput("firstName", "First Name", state.form.customer.firstName, "customer")}
      ${formInput("lastName", "Last Name", state.form.customer.lastName, "customer")}
      ${formInput("cell", "Cell Number", state.form.customer.cell, "customer")}
      ${formInput("email", "Email Address", state.form.customer.email, "customer", "email")}
      <label class="field">
        <span class="field-label">Preferred Contact</span>
        <select data-group="customer" data-field="contactMethod">${["WhatsApp", "Call", "Email"].map(option => `<option ${state.form.customer.contactMethod === option ? "selected" : ""}>${option}</option>`).join("")}</select>
      </label>
    </div>
    ${stepActions("start", "property")}
  `;
}

function renderPropertyDetails() {
  return `
    ${stepHeader("Property Details", "Address, map link and access notes.")}
    <div class="control-grid">
      ${formInput("street", "Street Address", state.form.property.street, "property")}
      ${formInput("suburb", "Suburb", state.form.property.suburb, "property")}
      ${formInput("city", "City", state.form.property.city, "property")}
      ${formInput("mapsLink", "Google Maps Link", state.form.property.mapsLink, "property")}
    </div>
    <label class="field full"><span class="field-label">Access Notes</span><textarea data-group="property" data-field="accessNotes" placeholder="Gate code, dogs, parking, security estate">${escapeHtml(state.form.property.accessNotes)}</textarea></label>
    ${stepActions("customer", "services")}
  `;
}

function renderServiceSelection() {
  return `
    ${stepHeader("Service Selection", "Select all that apply.")}
    <div class="service-grid">${services.map(service => `
      <label class="service-chip ${state.form.selectedServices.includes(service) ? "selected" : ""}">
        <input type="checkbox" data-choice-service value="${escapeHtml(service)}" ${state.form.selectedServices.includes(service) ? "checked" : ""} />
        ${service}
      </label>`).join("")}
    </div>
    ${stepActions("property", "areas")}
  `;
}

function renderAreaUploads() {
  return `
    ${stepHeader("Area Uploads", "Add project areas, notes and up to 3 photos each.")}
    <div class="areas">${state.form.areas.map(renderAreaCard).join("")}</div>
    <button class="ops-btn light full" id="addArea">Add Another Area</button>
    ${stepActions("services", "questions")}
  `;
}

function renderAreaCard(area, index) {
  return `
    <article class="area-card smooth">
      <div class="area-head"><strong>Area ${index + 1}</strong>${state.form.areas.length > 1 ? `<button class="icon-btn" data-remove-area="${index}">×</button>` : ""}</div>
      <div class="control-grid">
        <label class="field"><span class="field-label">Area Name</span><input value="${escapeHtml(area.name)}" data-area="${index}" data-area-field="name" /></label>
        <label class="field"><span class="field-label">Photos</span><input type="file" accept="image/*" multiple data-photo-area="${index}" /></label>
      </div>
      <label class="field full"><span class="field-label">Area Notes</span><textarea data-area="${index}" data-area-field="notes" placeholder="Remove branches, clear green waste, cut back overgrowth.">${escapeHtml(area.notes)}</textarea></label>
      <div class="thumb-row">${area.photos.length ? area.photos.map(photo => `<img src="${photo.src}" alt="${escapeHtml(photo.name)}" />`).join("") : `<span>No photos yet</span>`}</div>
    </article>
  `;
}

function renderQuickQuestions() {
  const a = state.form.estimateAnswers;
  return `
    ${stepHeader("Quick Estimate", "These answers create the internal rating and price.")}
    ${question("How overgrown is the area?", "overgrown", ["Light", "Moderate", "Heavy"], a.overgrown)}
    ${question("How much green waste do you expect?", "waste", ["1-2 dustbins", "Half bakkie load", "Full bakkie load", "Not sure"], a.waste)}
    ${question("How easy is access?", "access", ["Easy", "Moderate", "Difficult"], a.access)}
    ${question("How urgent is the project?", "urgency", ["ASAP", "This week", "Next week", "Flexible"], a.urgency)}
    <div class="button-row"><button class="ops-btn light" data-step="areas">Back</button><button class="ops-btn orange large" id="generateQuote">Generate Estimate</button></div>
  `;
}

function renderQuoteScreen(project) {
  return `
    ${stepHeader("Estimate Generated", "You now have a project reference, estimated price and public project link.")}
    <section class="quote-slab">
      <span>${project.reference}</span>
      <strong>Your Estimated Project Cost: ${money(project.price)}</strong>
      <p>This estimate is based on your photos and answers. A City Garden Guys coordinator will verify your project before scheduling.</p>
    </section>
    ${renderProjectSummary(project)}
    <div class="button-row">
      <button class="ops-btn orange large" data-open-project="${project.reference}">Open Project Tracking</button>
      <button class="ops-btn light" data-action="Change request noted">Request Changes</button>
      <button class="ops-btn light" data-action="Site visit requested">I Need A Site Visit</button>
    </div>
  `;
}

function renderAccepted(project) {
  return `
    ${stepHeader("Project Created", "Thank you. Your City Garden Guys project is ready.")}
    <div class="next-steps compact">
      <div>We verify your photos</div>
      <div>We schedule your service team</div>
      <div>You receive updates through your project link</div>
    </div>
    ${renderProjectSummary(project)}
    <button class="ops-btn orange large" data-open-project="${project.reference}">Open Project Link</button>
  `;
}

function renderPublicProject(project) {
  const verified = project.status === "Quote Verified";
  return `
    <main class="public-shell">
      <section class="public-header">
        <div class="ops-brand compact"><div class="brand-mark">CGG</div><div><strong>City Garden Guys</strong><span>Project Portal</span></div></div>
        <span class="status-pill">${project.status}</span>
      </section>
      <section class="public-grid">
        <div class="ops-panel primary">
          <span class="eyebrow">Project Reference</span>
          <h1>${project.reference}</h1>
          <div class="quote-total"><span>Quote amount</span><strong>${money(project.price)}</strong></div>
          ${verified ? `<div class="verified-box"><strong>Your Quote Has Been Verified</strong><p>You can accept the quote, request changes, or ask for a site visit.</p><div class="button-row"><button class="ops-btn orange" data-public-action="Quote accepted">Accept Quote</button><button class="ops-btn light" data-public-action="Change request sent">Request Changes</button><button class="ops-btn light" data-public-action="Site visit requested">Request Site Visit</button></div></div>` : `<div class="verified-box muted"><strong>${project.status}</strong><p>Your estimate is in the CGG tracking system. We will verify the photos and details before scheduling.</p></div>`}
          ${renderTimeline(statuses.indexOf(project.status), statuses)}
        </div>
        <div class="ops-panel">${publicSection("Customer", [
          ["Name", `${project.customer.firstName} ${project.customer.lastName}`],
          ["Cell", project.customer.cell || "Not supplied"],
          ["Email", project.customer.email || "Not supplied"],
        ])}</div>
        <div class="ops-panel">${publicSection("Property", [
          ["Address", fullAddress(project)],
          ["Access", project.property.accessNotes || "None supplied"],
          ["Services", project.selectedServices.join(", ") || "Not Sure"],
        ])}</div>
        <div class="ops-panel"><h2>Uploaded Photos</h2><div class="area-strip">${project.areas.map(areaTile).join("")}</div></div>
        <div class="ops-panel">${publicSection("Payment", [
          ["Account", state.settings.banking.accountName],
          ["Bank", state.settings.banking.bankName],
          ["Account No.", state.settings.banking.accountNumber],
          ["Branch", state.settings.banking.branchCode],
          ["Reference", project.reference],
          ["Note", state.settings.banking.paymentNote],
        ])}</div>
        <div class="ops-panel"><h2>Updates</h2><div class="updates-list"><div><strong>Project created</strong><p>Your estimate and project record have been generated.</p></div><div><strong>Next update</strong><p>We verify your photos and confirm scheduling.</p></div></div></div>
      </section>
      <div class="toast" id="toast"></div>
    </main>
  `;
}

function renderProjectSummary(project) {
  return `
    <section class="summary-card compact">
      <div class="summary-head">
        <div><span class="eyebrow">${project.reference}</span><strong>${project.status}</strong></div>
        <span class="status-pill">${project.rating.time} / ${project.rating.load} / ${project.rating.complexity}</span>
      </div>
      <div class="data-grid">
        ${dataItem("Estimate", money(project.price))}
        ${dataItem("Address", fullAddress(project))}
        ${dataItem("Service", project.selectedServices.join(", ") || "Not Sure")}
        ${dataItem("Project Link", `/project/${project.reference}`)}
      </div>
    </section>
  `;
}

function bindOffice() {
  document.querySelectorAll("[data-office-tab]").forEach(button => button.addEventListener("click", () => {
    state.officeTab = button.dataset.officeTab;
    render();
  }));
  document.querySelectorAll("[data-select-project]").forEach(button => button.addEventListener("click", () => {
    state.selectedRef = button.dataset.selectProject;
    render();
  }));
  document.getElementById("projectSearch")?.addEventListener("input", event => {
    state.search = event.target.value;
    render();
  });
  document.querySelectorAll("[data-project-field]").forEach(field => field.addEventListener("input", updateProjectField));
  document.querySelectorAll("[data-set-status]").forEach(button => button.addEventListener("click", () => {
    selectedProject().status = button.dataset.setStatus;
    saveAll();
    render();
  }));
  document.querySelectorAll("[data-action]").forEach(button => button.addEventListener("click", () => showToast(button.dataset.action)));
  document.querySelectorAll("[data-setting-group][data-setting-field]").forEach(field => {
    field.addEventListener("input", updateSettingField);
    field.addEventListener("change", updateSettingField);
  });
  document.querySelectorAll("[data-price-group][data-price-key]").forEach(field => {
    field.addEventListener("input", updatePricingField);
    field.addEventListener("change", updatePricingField);
  });
  document.querySelectorAll("[data-price-field]").forEach(field => {
    field.addEventListener("input", updatePricingFlatField);
    field.addEventListener("change", updatePricingFlatField);
  });
  document.getElementById("saveSettings")?.addEventListener("click", () => {
    saveSettings();
    state.editingSettings = null;
    showToast("Settings saved. New estimates will use the updated pricing.");
    render();
  });
  document.querySelectorAll("[data-edit-settings]").forEach(button => button.addEventListener("click", () => {
    state.editingSettings = button.dataset.editSettings;
    render();
  }));
  document.querySelectorAll("[data-cancel-settings]").forEach(button => button.addEventListener("click", () => {
    state.editingSettings = null;
    render();
  }));
  document.querySelectorAll("[data-save-settings-window]").forEach(button => button.addEventListener("click", () => {
    saveSettings();
    state.editingSettings = null;
    showToast("Settings saved.");
    render();
  }));
  document.querySelectorAll("[data-team-index][data-team-field]").forEach(field => {
    field.addEventListener("input", updateTeamField);
    field.addEventListener("change", updateTeamField);
  });
  document.getElementById("addTeam")?.addEventListener("click", () => {
    state.serviceTeams.push(blankTeam());
    state.editingTeamIndex = state.serviceTeams.length - 1;
    state.selectedTeamIndex = null;
    saveServiceTeams();
    render();
  });
  document.getElementById("saveTeams")?.addEventListener("click", () => {
    saveServiceTeams();
    showToast("Service teams saved.");
  });
  document.querySelectorAll("[data-remove-team]").forEach(button => button.addEventListener("click", () => {
    state.serviceTeams.splice(Number(button.dataset.removeTeam), 1);
    state.selectedTeamIndex = null;
    state.editingTeamIndex = null;
    saveServiceTeams();
    render();
  }));
  document.querySelectorAll("[data-view-team]").forEach(button => button.addEventListener("click", () => {
    state.selectedTeamIndex = Number(button.dataset.viewTeam);
    state.editingTeamIndex = null;
    render();
  }));
  document.querySelectorAll("[data-edit-team]").forEach(button => button.addEventListener("click", () => {
    state.editingTeamIndex = Number(button.dataset.editTeam);
    render();
  }));
  document.querySelectorAll("[data-back-teams]").forEach(button => button.addEventListener("click", () => {
    state.selectedTeamIndex = null;
    state.editingTeamIndex = null;
    render();
  }));
  document.querySelectorAll("[data-cancel-team-edit]").forEach(button => button.addEventListener("click", () => {
    state.editingTeamIndex = null;
    render();
  }));
  document.querySelectorAll("[data-save-team-edit]").forEach(button => button.addEventListener("click", () => {
    saveServiceTeams();
    state.selectedTeamIndex = state.editingTeamIndex;
    state.editingTeamIndex = null;
    showToast("Team saved.");
    render();
  }));
  document.querySelectorAll("[data-open-project]").forEach(button => button.addEventListener("click", () => go(`/project/${button.dataset.openProject}`)));
  document.getElementById("openEstimate")?.addEventListener("click", () => go("/estimate"));
  document.getElementById("saveProject")?.addEventListener("click", () => {
    saveAll();
    showToast("Project changes saved locally.");
  });
}

function bindEstimate() {
  document.getElementById("backOffice")?.addEventListener("click", () => go("/"));
  document.querySelectorAll("[data-step]").forEach(button => button.addEventListener("click", () => {
    state.step = button.dataset.step;
    render();
  }));
  document.querySelectorAll("[data-group][data-field]").forEach(field => {
    field.addEventListener("input", updateFormField);
    field.addEventListener("change", updateFormField);
  });
  document.querySelectorAll("[data-choice-service]").forEach(box => box.addEventListener("change", () => {
    const selected = new Set(state.form.selectedServices);
    box.checked ? selected.add(box.value) : selected.delete(box.value);
    state.form.selectedServices = [...selected];
    render();
  }));
  document.querySelectorAll("[data-question]").forEach(input => input.addEventListener("change", () => {
    state.form.estimateAnswers[input.dataset.question] = input.value;
    render();
  }));
  document.querySelectorAll("[data-area][data-area-field]").forEach(field => field.addEventListener("input", () => {
    state.form.areas[Number(field.dataset.area)][field.dataset.areaField] = field.value;
  }));
  document.querySelectorAll("[data-photo-area]").forEach(field => field.addEventListener("change", async () => {
    state.form.areas[Number(field.dataset.photoArea)].photos = await readPhotos([...field.files].slice(0, 3));
    render();
  }));
  document.querySelectorAll("[data-remove-area]").forEach(button => button.addEventListener("click", () => {
    state.form.areas.splice(Number(button.dataset.removeArea), 1);
    render();
  }));
  document.getElementById("addArea")?.addEventListener("click", () => {
    state.form.areas.push({ name: `Area ${state.form.areas.length + 1}`, notes: "", photos: [] });
    render();
  });
  document.getElementById("generateQuote")?.addEventListener("click", () => {
    const project = createProjectFromForm();
    state.projects = [project, ...state.projects];
    state.selectedRef = project.reference;
    saveAll();
    state.step = "quote";
    render();
  });
  document.getElementById("acceptEstimate")?.addEventListener("click", () => {
    selectedProject().status = "Quote Accepted";
    saveAll();
    state.step = "accepted";
    render();
  });
  document.querySelectorAll("[data-open-project]").forEach(button => button.addEventListener("click", () => go(`/project/${button.dataset.openProject}`)));
  document.querySelectorAll("[data-action]").forEach(button => button.addEventListener("click", () => showToast(button.dataset.action)));
}

function bindPublicProject(project) {
  document.querySelectorAll("[data-public-action]").forEach(button => button.addEventListener("click", () => {
    if (button.dataset.publicAction === "Quote accepted") {
      project.status = "Quote Accepted";
      saveAll();
      render();
      return;
    }
    showToast(button.dataset.publicAction);
  }));
}

function updateProjectField(event) {
  const project = selectedProject();
  const field = event.target.dataset.projectField;
  if (["time", "load", "complexity"].includes(field)) project.rating[field] = event.target.value;
  else if (field === "price") project.price = Number(event.target.value || 0);
  else project[field] = event.target.value;
}

function updateFormField(event) {
  state.form[event.target.dataset.group][event.target.dataset.field] = event.target.value;
  if (event.target.dataset.group === "customer" && event.target.dataset.field === "cell") {
    hydrateCustomerFromCell(event.target.value);
  }
}

function updateSettingField(event) {
  state.settings[event.target.dataset.settingGroup][event.target.dataset.settingField] = event.target.value;
}

function updatePricingField(event) {
  state.settings.pricing[event.target.dataset.priceGroup][event.target.dataset.priceKey] = Number(event.target.value || 0);
}

function updatePricingFlatField(event) {
  state.settings.pricing[event.target.dataset.priceField] = Number(event.target.value || 0);
}

function updateTeamField(event) {
  state.serviceTeams[Number(event.target.dataset.teamIndex)][event.target.dataset.teamField] = event.target.value;
}

function createProjectFromForm() {
  const rating = calculateRating(state.form);
  const customerId = normalizeCell(state.form.customer.cell);
  upsertCustomer(state.form.customer);
  return {
    reference: nextReference(),
    customerId,
    status: "Estimate Generated",
    price: calculatePrice(rating, state.form),
    rating,
    customer: { ...state.form.customer },
    property: { ...state.form.property },
    selectedServices: [...state.form.selectedServices],
    estimateAnswers: { ...state.form.estimateAnswers },
    areas: state.form.areas.map(area => ({
      name: area.name || "Project Area",
      notes: area.notes || "No notes supplied.",
      photos: area.photos.length ? area.photos : [placeholderPhoto(area.name || "Project Area")],
    })),
    team: "Unassigned",
    scheduledDate: "",
    createdAt: new Date().toISOString(),
  };
}

function calculateRating(form) {
  const areaCount = Math.max(1, form.areas.length);
  const heavy = form.selectedServices.some(service => service.includes("Post-Storm") || service.includes("Branch") || service.includes("Shrub"));
  const { overgrown, waste, access } = form.estimateAnswers;
  let time = "T1";
  if (areaCount >= 2 || overgrown === "Moderate") time = "T2";
  if (areaCount >= 3 || overgrown === "Heavy" || heavy) time = "T3";
  if (areaCount >= 4 && overgrown === "Heavy") time = "T4";
  let load = waste === "1-2 dustbins" ? "L2" : waste === "Full bakkie load" ? "L4" : waste === "Half bakkie load" || waste === "Not sure" ? "L3" : "L1";
  let complexity = access === "Difficult" && heavy ? "D" : access === "Difficult" || overgrown === "Heavy" ? "C" : access === "Moderate" || overgrown === "Moderate" ? "B" : "A";
  return { time, load, complexity };
}

function calculatePrice(rating, form) {
  const pricing = state.settings.pricing;
  const time = pricing.time[rating.time] || 0;
  const load = pricing.load[rating.load] || 0;
  const complexity = pricing.complexity[rating.complexity] || 0;
  const urgent = form.estimateAnswers.urgency === "ASAP" ? pricing.urgentAsap : 0;
  const areas = Math.max(0, form.areas.length - 1) * pricing.extraArea;
  return time + load + complexity + urgent + areas;
}

function seedProject(reference, firstName, lastName, suburb, status, price, time, load, complexity) {
  const cell = "082 220 1400";
  return {
    reference,
    customerId: normalizeCell(cell),
    status,
    price,
    rating: { time, load, complexity },
    customer: {
      firstName,
      lastName,
      cell,
      email: `${firstName}.${lastName}@example.com`.toLowerCase(),
      contactMethod: "WhatsApp",
    },
    property: {
      street: "18 Oak Avenue",
      suburb,
      city: "Cape Town",
      mapsLink: "https://maps.google.com",
      accessNotes: "Side gate access. Call on arrival.",
    },
    selectedServices: ["Once-Off Garden Clean-Up", "Green Waste Removal"],
    estimateAnswers: { overgrown: "Moderate", waste: "1-2 dustbins", access: "Moderate", urgency: "This week" },
    areas: [{ name: "Back Garden", notes: "Clear branches and remove green waste.", photos: [placeholderPhoto("Back Garden")] }],
    team: defaultTeamOptions()[Math.floor(Math.random() * defaultTeamOptions().length)] || "Unassigned",
    scheduledDate: "2026-06-26",
    createdAt: new Date().toISOString(),
  };
}

function officeTab(tab, label) {
  return `<button class="${state.officeTab === tab ? "active" : ""}" data-office-tab="${tab}"><span class="nav-icon">${navIcon(tab)}</span>${label}</button>`;
}

function navIcon(tab) {
  return {
    overview: "⌂",
    pipeline: "▦",
    quote: "R",
    portal: "◉",
    teams: "T",
    settings: "S",
  }[tab] || "•";
}

function metric(label, value) {
  return `<div class="ops-metric"><span>${label}</span><strong>${value}</strong></div>`;
}

function queueRow(project) {
  return `
    <button class="queue-row ${state.selectedRef === project.reference ? "active" : ""}" data-select-project="${project.reference}">
      <span><strong>${project.reference}</strong><small>${project.customer.firstName} ${project.customer.lastName} · ${project.property.suburb}</small></span>
      <em>${project.status}</em>
    </button>
  `;
}

function selectControl(label, field, options, value) {
  return `<label class="field"><span class="field-label">${label}</span><select data-project-field="${field}">${options.map(option => `<option ${value === option ? "selected" : ""}>${option}</option>`).join("")}</select></label>`;
}

function inputControl(label, field, value, type = "text") {
  return `<label class="field"><span class="field-label">${label}</span><input type="${type}" value="${escapeHtml(value || "")}" data-project-field="${field}" /></label>`;
}

function teamInput(label, index, field, value) {
  return `<label class="field"><span class="field-label">${label}</span><input value="${escapeHtml(value || "")}" data-team-index="${index}" data-team-field="${field}" /></label>`;
}

function settingsInput(label, group, field, value, type = "text") {
  return `<label class="field"><span class="field-label">${label}</span><input type="${type}" value="${escapeHtml(value || "")}" data-setting-group="${group}" data-setting-field="${field}" /></label>`;
}

function pricingInput(label, field, value) {
  return `<label class="field"><span class="field-label">${label}</span><input type="number" min="0" value="${escapeHtml(value || 0)}" data-price-field="${field}" /></label>`;
}

function pricingGroup(title, group, values, labels) {
  return `
    <div class="pricing-group">
      <h3>${title}</h3>
      ${Object.keys(values).map((key) => `
        <label class="price-row">
          <span><strong>${key}</strong><small>${labels[key]}</small></span>
          <input type="number" min="0" value="${escapeHtml(values[key])}" data-price-group="${group}" data-price-key="${key}" />
        </label>
      `).join("")}
    </div>
  `;
}

function formInput(field, label, value, group, type = "text") {
  return `<label class="field"><span class="field-label">${label}</span><input type="${type}" value="${escapeHtml(value)}" data-group="${group}" data-field="${field}" /></label>`;
}

function dataItem(label, value) {
  return `<div class="data-item"><span>${label}</span><strong>${escapeHtml(String(value || "Not supplied"))}</strong></div>`;
}

function areaTile(area) {
  return `<article class="area-tile"><strong>${escapeHtml(area.name)}</strong><p>${escapeHtml(area.notes)}</p><div class="thumb-row">${area.photos.map(photo => `<img src="${photo.src}" alt="${escapeHtml(photo.name)}" />`).join("")}</div></article>`;
}

function publicSection(title, rows) {
  return `<h2>${title}</h2><div class="data-grid">${rows.map(row => dataItem(row[0], row[1])).join("")}</div>`;
}

function stepHeader(title, copy) {
  return `<div class="step-line"><span class="eyebrow">Estimate Request</span><h1>${title}</h1><p>${copy}</p></div>`;
}

function stepActions(back, next) {
  return `<div class="button-row"><button class="ops-btn light" data-step="${back}">Back</button><button class="ops-btn orange" data-step="${next}">Continue</button></div>`;
}

function question(label, field, options, selected) {
  return `<fieldset class="question smooth"><legend>${label}</legend><div class="service-grid tight">${options.map(option => `<label class="service-chip ${selected === option ? "selected" : ""}"><input type="radio" name="${field}" value="${option}" data-question="${field}" ${selected === option ? "checked" : ""} />${option}</label>`).join("")}</div></fieldset>`;
}

function renderTimeline(current, list) {
  return `<div class="timeline compact">${list.map((item, index) => `<div class="timeline-item ${index < current ? "done" : index === current ? "current" : ""}"><div class="dot">${index < current ? "✓" : index === current ? "•" : ""}</div><div><strong>${item}</strong></div></div>`).join("")}</div>`;
}

function selectedProject() {
  return state.projects.find(project => project.reference === state.selectedRef) || state.projects[0];
}

function filteredProjects() {
  const term = state.search.toLowerCase();
  return state.projects.filter(project => [project.reference, project.status, project.customer.firstName, project.customer.lastName, project.property.suburb].join(" ").toLowerCase().includes(term));
}

function projectsByStatus(list) {
  return state.projects.filter(project => list.includes(project.status));
}

function teamProjects(teamName, type) {
  const projects = state.projects.filter(project => project.team === teamName);
  const planned = ["Quote Accepted", "Scheduled", "Team Assigned"];
  const current = ["Team On Route", "In Progress"];
  if (type === "past") return projects.filter(project => project.status === "Completed");
  if (type === "planned") return projects.filter(project => planned.includes(project.status));
  if (type === "current") return projects.filter(project => current.includes(project.status));
  return projects;
}

function countStatus(status) {
  return state.projects.filter(project => project.status === status).length;
}

function getProjectFromPath() {
  const match = window.location.pathname.match(/\/project\/(CGG-\d{4}-\d{5})/);
  if (!match) return null;
  return state.projects.find(project => project.reference === match[1]) || state.projects[0];
}

function nextReference() {
  const highest = state.projects.reduce((max, project) => Math.max(max, Number(project.reference.split("-").pop()) || 124), 124);
  return `CGG-2026-${String(highest + 1).padStart(5, "0")}`;
}

function loadProjects() {
  const saved = JSON.parse(localStorage.getItem("cggProjects") || "[]");
  return (saved.length ? saved : demoProjects).map(normalizeProject);
}

function normalizeProject(project) {
  const statusMap = {
    "Quote Generated": "Estimate Generated",
    "Photo Verification": "Awaiting Verification",
    "Approved": "Quote Accepted",
  };
  return {
    ...project,
    customerId: project.customerId || normalizeCell(project.customer?.cell || ""),
    status: statusMap[project.status] || project.status,
  };
}

function saveAll() {
  localStorage.setItem("cggProjects", JSON.stringify(state.projects));
}

function loadSettings() {
  const saved = JSON.parse(localStorage.getItem("cggSettings") || "null");
  return mergeSettings(saved || {});
}

function mergeSettings(saved) {
  return {
    banking: { ...defaultSettings.banking, ...(saved.banking || {}) },
    pricing: {
      ...defaultSettings.pricing,
      ...(saved.pricing || {}),
      time: { ...defaultSettings.pricing.time, ...((saved.pricing || {}).time || {}) },
      load: { ...defaultSettings.pricing.load, ...((saved.pricing || {}).load || {}) },
      complexity: { ...defaultSettings.pricing.complexity, ...((saved.pricing || {}).complexity || {}) },
    },
  };
}

function saveSettings() {
  localStorage.setItem("cggSettings", JSON.stringify(state.settings));
}

function loadServiceTeams() {
  const saved = JSON.parse(localStorage.getItem("cggServiceTeams") || "[]");
  return (saved.length ? saved : defaultServiceTeams).map(normalizeTeam);
}

function normalizeTeam(team) {
  const id = team.id || `team-${String(team.name || "new-team").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
  return {
    id,
    name: team.name || "New Team",
    mainMember: team.mainMember || "",
    ownerContact: team.ownerContact || "",
    members: team.members || "",
    serviceAbility: team.serviceAbility || "",
    serviceAreas: team.serviceAreas || "",
  };
}

function saveServiceTeams() {
  localStorage.setItem("cggServiceTeams", JSON.stringify(state.serviceTeams));
}

function loadCustomers() {
  const saved = JSON.parse(localStorage.getItem("cggCustomers") || "{}");
  const seeded = {};
  demoProjects.forEach((project) => {
    if (project.customerId) seeded[project.customerId] = { ...project.customer, customerId: project.customerId };
  });
  return { ...seeded, ...saved };
}

function saveCustomers() {
  localStorage.setItem("cggCustomers", JSON.stringify(state.customers));
}

function upsertCustomer(customer) {
  const customerId = normalizeCell(customer.cell);
  if (!customerId) return;
  state.customers[customerId] = { ...customer, customerId };
  saveCustomers();
}

function hydrateCustomerFromCell(cell) {
  const customerId = normalizeCell(cell);
  if (customerId.length < 9) {
    state.matchedCustomer = null;
    return;
  }
  const existing = state.customers[customerId];
  if (state.matchedCustomer?.customerId === customerId) return;
  state.matchedCustomer = existing || null;
  if (!existing) return;
  state.form.customer = {
    ...state.form.customer,
    firstName: existing.firstName || state.form.customer.firstName,
    lastName: existing.lastName || state.form.customer.lastName,
    cell: existing.cell || cell,
    email: existing.email || state.form.customer.email,
    contactMethod: existing.contactMethod || state.form.customer.contactMethod,
  };
  render();
}

function normalizeCell(cell) {
  return String(cell || "").replace(/\D/g, "");
}

function blankTeam() {
  return {
    id: `team-${Date.now()}`,
    name: "New Team",
    mainMember: "",
    ownerContact: "",
    members: "",
    serviceAbility: "",
    serviceAreas: "",
  };
}

function teamOptions() {
  return ["Unassigned", ...state.serviceTeams.map((team) => team.name).filter(Boolean)];
}

function defaultTeamOptions() {
  return ["Unassigned", ...defaultServiceTeams.map((team) => team.name)];
}

function blankForm() {
  return {
    customer: { firstName: "", lastName: "", cell: "", email: "", contactMethod: "WhatsApp" },
    property: { street: "", suburb: "", city: "", mapsLink: "", accessNotes: "" },
    selectedServices: [],
    areas: [{ name: "Front Garden", notes: "", photos: [] }],
    estimateAnswers: { overgrown: "Moderate", waste: "Half bakkie load", access: "Moderate", urgency: "This week" },
  };
}

function readPhotos(files) {
  return Promise.all(files.map(file => new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = () => resolve({ name: file.name, src: reader.result });
    reader.readAsDataURL(file);
  })));
}

function placeholderPhoto(name) {
  return {
    name,
    src: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420"><rect width="640" height="420" fill="#e9efe4"/><rect x="24" y="260" width="592" height="136" rx="14" fill="#004B23"/><text x="44" y="334" font-family="Arial" font-size="34" font-weight="700" fill="#fff">${name}</text></svg>`)}`,
  };
}

function fullAddress(project) {
  return [project.property.street, project.property.suburb, project.property.city].filter(Boolean).join(", ") || "Address not supplied";
}

function money(value) {
  return `R${Number(value || 0).toLocaleString("en-ZA")}`;
}

function go(path) {
  history.pushState({}, "", path);
  render();
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2400);
}

function escapeHtml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

window.addEventListener("popstate", render);
render();
