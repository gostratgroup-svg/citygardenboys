const services = [
  "Once-Off Garden Clean-Up",
  "Branch Cutting & Removal",
  "Green Waste Removal",
  "Post-Storm Clean-Up",
  "Small Shrub & Bush Removal",
  "General Outdoor Clean-Up",
  "Not Sure",
];

const teamColorOptions = [
  { name: "Royal Blue", value: "#2563EB" },
  { name: "Sky Blue", value: "#0284C7" },
  { name: "Ocean", value: "#0369A1" },
  { name: "Cyan", value: "#0891B2" },
  { name: "Indigo", value: "#4F46E5" },
  { name: "Violet", value: "#7C3AED" },
  { name: "Purple", value: "#9333EA" },
  { name: "Fuchsia", value: "#C026D3" },
  { name: "Magenta", value: "#DB2777" },
  { name: "Rose Pink", value: "#BE185D" },
  { name: "Plum", value: "#86198F" },
  { name: "Navy", value: "#1E3A8A" },
  { name: "Steel", value: "#475569" },
  { name: "Charcoal", value: "#334155" },
  { name: "Graphite", value: "#3F3F46" },
];

const calendarDays = [
  { key: "mon", label: "Monday", short: "Mon" },
  { key: "tue", label: "Tuesday", short: "Tue" },
  { key: "wed", label: "Wednesday", short: "Wed" },
  { key: "thu", label: "Thursday", short: "Thu" },
  { key: "fri", label: "Friday", short: "Fri" },
  { key: "sat", label: "Saturday", short: "Sat" },
];

const defaultAvailability = {
  mon: { enabled: true, start: "08:00", end: "16:00" },
  tue: { enabled: true, start: "08:00", end: "16:00" },
  wed: { enabled: true, start: "08:00", end: "16:00" },
  thu: { enabled: true, start: "08:00", end: "16:00" },
  fri: { enabled: true, start: "08:00", end: "16:00" },
  sat: { enabled: true, start: "08:00", end: "13:00" },
};

const southAfricanAreas = {
  "Cape Town": ["Atlantic Seaboard", "Bellville", "Bishopscourt", "Blouberg", "Brackenfell", "Camps Bay", "Century City", "Claremont", "Constantia", "Durbanville", "Fish Hoek", "Gardens", "Goodwood", "Green Point", "Kenilworth", "Khayelitsha", "Kraaifontein", "Milnerton", "Mitchells Plain", "Newlands", "Observatory", "Parow", "Pinelands", "Rondebosch", "Sea Point", "Somerset West", "Stellenbosch", "Table View", "Tokai", "Woodstock"],
  Johannesburg: ["Alexandra", "Bedfordview", "Benoni", "Bryanston", "Edenvale", "Fourways", "Germiston", "Greenside", "Houghton", "Kempton Park", "Midrand", "Melville", "Northcliff", "Randburg", "Roodepoort", "Rosebank", "Sandton", "Soweto", "Sunninghill", "Wynberg"],
  Pretoria: ["Arcadia", "Brooklyn", "Centurion", "Faerie Glen", "Garsfontein", "Hatfield", "Irene", "Lynnwood", "Menlyn", "Montana", "Moreleta Park", "Muckleneuk", "Pretoria East", "Pretoria North", "Rietondale", "Silver Lakes", "Sunnyside", "Waterkloof", "Wonderboom"],
  Durban: ["Amanzimtoti", "Ballito", "Berea", "Bluff", "Durban North", "Glenwood", "Hillcrest", "Kloof", "La Lucia", "Morningside", "Musgrave", "Pinetown", "Queensburgh", "Umhlanga", "Westville"],
  "Gqeberha": ["Bluewater Bay", "Central", "Humewood", "Lorraine", "Mill Park", "Newton Park", "Rowallan Park", "Summerstrand", "Walmer"],
  Bloemfontein: ["Bainsvlei", "Bayswater", "Brandwag", "Dan Pienaar", "Fichardt Park", "Langenhoven Park", "Universitas", "Westdene"],
  "East London": ["Beacon Bay", "Berea", "Gonubie", "Nahoon", "Quigney", "Vincent"],
  Kimberley: ["Beaconsfield", "Belgravia", "Cassandra", "Hadison Park", "Hillcrest", "New Park"],
  Polokwane: ["Bendor", "Flora Park", "Ivy Park", "Ladanna", "Moregloed", "Ster Park"],
  Mbombela: ["Barberton", "Nelspruit Central", "Sonheuwel", "Steiltes", "Stonehenge", "West Acres"],
  Rustenburg: ["Cashan", "Geelhoutpark", "Protea Park", "Safari Gardens", "Waterkloof"],
  "George": ["Blanco", "Camphers Drift", "Denneoord", "Heather Park", "Loerie Park", "Wilderness"],
};

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
  "Project Review",
  "Completed",
  "Cancelled",
];

const pipelineStages = [
  { key: "verification", label: "Verification", note: "Request, photos, variables and verification decision." },
  { key: "quote", label: "Quote Verified", note: "Customer or back office must accept the quote." },
  { key: "allocation", label: "Team Allocation", note: "Accepted quote waiting for a team and timeslot." },
  { key: "upcoming", label: "Upcoming Projects", note: "Allocated to a team and visible on the Team Link." },
  { key: "review", label: "Project Review", note: "Completed by team, awaiting quality review and feedback." },
  { key: "completed", label: "Completed Projects", note: "All steps are complete." },
  { key: "cancelled", label: "Cancel Projects", note: "Cancelled quotes and projects." },
];

const defaultServiceTeams = [
  {
    id: "team-aloe",
    name: "Team Aloe",
    mainMember: "Sipho Maseko",
    ownerContact: "071 220 1407",
    color: "#2563EB",
    members: "Sipho Maseko, Daniel Naidoo",
    serviceAbility: "Garden Clean-Up, Green Waste Removal",
    serviceAreas: "Durbanville, Bellville, Table View",
  },
  {
    id: "team-spekboom",
    name: "Team Spekboom",
    mainMember: "Mia Jacobs",
    ownerContact: "082 441 9033",
    color: "#7C3AED",
    members: "Mia Jacobs, Lerato Khumalo",
    serviceAbility: "Branch Cutting & Removal, Post-Storm Clean-Up",
    serviceAreas: "Claremont, Rondebosch, Newlands",
  },
  {
    id: "team-acacia",
    name: "Team Acacia",
    mainMember: "Daniel Naidoo",
    ownerContact: "079 811 5570",
    color: "#DB2777",
    members: "Daniel Naidoo, Priya Reddy",
    serviceAbility: "Small Shrub & Bush Removal, General Outdoor Clean-Up",
    serviceAreas: "Somerset West, Stellenbosch",
  },
];

const defaultSettings = {
  services: [...services],
  serviceLocations: {
    "Cape Town": ["Durbanville", "Bellville", "Table View", "Claremont", "Rondebosch", "Newlands", "Somerset West", "Stellenbosch"],
  },
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
    waste: { W0: 0, W1: 120, W2: 220, W3: 350, W4: 550, W5: 220 },
    complexity: { A: 0, B: 150, C: 350, D: 650 },
    urgentAsap: 250,
    extraArea: 180,
  },
  quoteForm: {
    title: "Get Your Garden Clean-Up Estimate",
    intro: "Upload a few photos, tell us what needs to be done, and receive your estimate fast.",
    buttonText: "Get My Estimate",
    defaultSource: "Internal",
    links: [
      { name: "Flyer QR Code", source: "flyer-qr-code" },
      { name: "Facebook Bio", source: "facebook-bio" },
    ],
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
  pipelineStage: "verification",
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
  teamCalendarMode: "week",
  teamCalendarStart: weekStartKey(new Date()),
  calendarBlockMode: false,
  calendarBlockDate: null,
  calendarBlockForm: blankCalendarBlock(),
  teamPortalProjectRef: null,
  assigningProjectRef: null,
  areaUnavailable: false,
  mobileMenuOpen: false,
  form: blankForm(),
};

function render() {
  const pathTeam = getTeamFromPath();
  if (pathTeam) {
    app().innerHTML = renderTeamPortal(pathTeam.team, pathTeam.index);
    bindCopyActions();
    bindTeamPortal(pathTeam.index);
    return;
  }

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
  const notificationsOnly = state.officeTab === "notifications";
  const pipelineOnly = state.officeTab === "pipeline";
  return `
    <main class="ops-shell ${state.mobileMenuOpen ? "menu-open" : ""}">
      <button type="button" class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Open management menu" aria-expanded="${state.mobileMenuOpen ? "true" : "false"}">
        <span></span><span></span><span></span>
      </button>
      <button type="button" class="mobile-menu-scrim" id="mobileMenuScrim" aria-label="Close management menu"></button>
      <aside class="ops-sidebar">
        <div class="ops-brand">
          <img class="ops-logo real-logo" src="assets/CGG_BO_Logo.png" alt="City Garden Guys" />
        </div>
        <nav class="ops-nav">
          ${officeTab("notifications", "Notifications")}
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
      <section class="ops-main ${notificationsOnly ? "notifications-view" : ""}">
        ${notificationsOnly ? `
        <header class="ops-topbar settings-topbar">
          <div>
            <h1>Notifications</h1>
            <p>Review new projects and team movement updates before they move into the pipeline.</p>
          </div>
        </header>
        <section class="settings-only">
          ${renderNotificationsControl()}
        </section>
        ` : settingsOnly ? `
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
            ${state.selectedTeamIndex !== null ? `<button class="ops-btn light" data-back-teams>Back</button>` : ""}
            <button class="ops-btn orange" id="addTeam">Add Team</button>
          </div>
        </header>
        <section class="settings-only">
          ${renderServiceTeamsControl()}
        </section>
        ` : `
        <header class="ops-topbar">
          <div>
            <h1>${pipelineOnly ? "Pipeline" : "Project Control"}</h1>
            <p>${pipelineOnly ? "Move each request through the major CGG workflow stages." : "Manage quote, status, team, portal visibility and next actions from one workspace."}</p>
          </div>
          <div class="ops-actions">
            <button class="ops-btn" id="saveProject">Save Changes</button>
            <button class="ops-btn orange" data-open-project="${project.reference}">Open Portal</button>
          </div>
        </header>
        ${pipelineOnly ? "" : `<section class="ops-metrics">
          ${metric("Open", projectsByStatus(["Request Submitted", "Estimate Generated", "Awaiting Verification", "More Photos Requested", "Site Visit Requested", "Quote Verified", "Quote Accepted", "Scheduled", "Team Assigned", "Team On Route", "In Progress"]).length)}
          ${metric("Needs Verify", countStatus("Awaiting Verification") + countStatus("Estimate Generated"))}
          ${metric("Accepted", countStatus("Quote Accepted") + countStatus("Scheduled"))}
          ${metric("In Progress", countStatus("In Progress"))}
          ${metric("Revenue", money(state.projects.reduce((sum, item) => sum + Number(item.price || 0), 0)))}
        </section>`}
        <section class="ops-workspace">
          <div class="ops-panel project-queue">
            <div class="panel-head">
              <div><h2>${pipelineOnly ? "Pipeline Stages" : "Project Queue"}</h2><span>${pipelineProjects().length} visible projects</span></div>
            </div>
            ${pipelineOnly ? renderPipelineStageTabs() : ""}
            <input class="ops-search" id="projectSearch" placeholder="Search customer, suburb, reference" value="${escapeHtml(state.search)}" />
            <div class="queue-list">
              ${pipelineProjects().map(queueRow).join("") || `<div class="empty-note">No projects in this stage.</div>`}
            </div>
          </div>
          <div class="ops-detail">
            ${renderOfficeTab(project)}
          </div>
        </section>
        `}
      </section>
    </main>
    ${state.areaUnavailable ? renderAreaUnavailableModal() : ""}
    ${state.assigningProjectRef ? renderAssignTeamModal(state.projects.find(project => project.reference === state.assigningProjectRef) || project) : ""}
    <div class="toast" id="toast"></div>
  `;
}

function renderAreaUnavailableModal() {
  return `
    <div class="modal open">
      <section class="modal-panel ops-panel">
        <div class="panel-head"><div><h2>Area Not Available Yet</h2><span>City Garden Guys does not currently service this area.</span></div></div>
        <p class="hint">We are not active in ${escapeHtml(state.form.property.city || "this city")} ${state.form.property.suburb ? `, ${escapeHtml(state.form.property.suburb)}` : ""} yet. You can adjust the city or contact us to confirm availability.</p>
        <div class="button-row"><button class="ops-btn orange" data-close-area-unavailable>Choose Another Area</button></div>
      </section>
    </div>
  `;
}

function renderOfficeTab(project) {
  if (state.officeTab === "notifications") return renderNotificationsControl();
  if (state.officeTab === "pipeline") return renderPipelineControl(project);
  if (state.officeTab === "quote") return renderQuoteControl(project);
  if (state.officeTab === "portal") return renderPortalControl(project);
  if (state.officeTab === "settings") return renderSettingsControl();
  return renderOverviewControl(project);
}

function renderNotificationsControl() {
  const intake = projectNotifications();
  const movements = teamMovementNotifications();
  return `
    <section class="split-grid">
      <div class="ops-panel">
        <div class="panel-head"><div><h2>New Projects</h2><span>${intake.length} waiting for back office review</span></div></div>
        <div class="notification-list">
          ${intake.map(notificationCard).join("") || `<div class="empty-note">No new projects waiting.</div>`}
        </div>
      </div>
      <div class="ops-panel">
        <div class="panel-head"><div><h2>Team Updates</h2><span>${movements.length} movement updates</span></div></div>
        <div class="notification-list">
          ${movements.map(notificationCard).join("") || `<div class="empty-note">No team movement updates.</div>`}
        </div>
      </div>
    </section>
  `;
}

function notificationCard(item) {
  return `
    <article class="notification-card ${item.kind}">
      <div>
        <span class="notification-type">${item.type}</span>
        <strong>${item.team ? `${teamBadge(item.team)} ${escapeHtml(item.title)}` : escapeHtml(item.title)}</strong>
        <p>${escapeHtml(item.detail)}</p>
        <small>${escapeHtml(item.meta)}</small>
      </div>
      <div class="notification-actions">
        <button class="ops-btn light" data-open-notification="${item.reference}">Open</button>
        ${item.kind === "project" ? `<button class="ops-btn orange" data-handle-notification="${item.reference}">Handle</button>` : ""}
      </div>
    </article>
  `;
}

function renderOverviewControl(project) {
  return `
    <section class="ops-panel">
      <div class="record-head">
        <div>
          <span class="eyebrow">${project.reference}</span>
          <h2>${project.customer.firstName} ${project.customer.lastName}</h2>
          <p>${fullAddress(project)}</p>
          ${teamBadge(project.team)}
        </div>
        <span class="status-pill">${project.status}</span>
      </div>
      <div class="control-grid">
        ${selectControl("Status", "status", statuses, project.status)}
        ${selectControl("Assigned Team", "team", teamOptions(), project.team || "Unassigned")}
        ${inputControl("Scheduled Date", "scheduledDate", project.scheduledDate || "")}
        ${inputControl("Start Time", "scheduledTime", project.scheduledTime || "09:00", "time")}
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
          ${dataItem("Source", project.source || "Internal")}
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
  const activeStage = pipelineStageForProject(project);
  return `
    <section class="ops-panel">
      <div class="record-head pipeline-record-head">
        <div>
          <span class="eyebrow">${project.reference}</span>
          <h2>${escapeHtml(project.customer.firstName)} ${escapeHtml(project.customer.lastName)}</h2>
          <p>${escapeHtml(fullAddress(project))}</p>
        </div>
        <div class="pipeline-status-card">
          <span>Status</span>
          <strong>${escapeHtml(project.status)}</strong>
          <small>${pipelineStages.find(stage => stage.key === activeStage)?.label || "Pipeline"}</small>
        </div>
      </div>
      <div class="data-grid">
        ${dataItem("Cell", project.customer.cell || "Not supplied")}
        ${dataItem("Email", project.customer.email || "Not supplied")}
        ${dataItem("Service", project.selectedServices.join(", ") || "Not Sure")}
        ${dataItem("Quote", money(project.price))}
        ${dataItem("Uploaded Areas", project.areas.length)}
        ${dataItem("Photos", project.areas.reduce((sum, area) => sum + area.photos.length, 0))}
      </div>
    </section>
    ${renderPipelineStagePanel(project, activeStage)}
    <section class="ops-panel">
      <div class="panel-head"><div><h2>Manager Notes</h2><span>Visible internally only</span></div></div>
      <textarea class="ops-notes" data-project-field="managerNotes" placeholder="Add scheduling, access or quality notes.">${escapeHtml(project.managerNotes || "")}</textarea>
    </section>
  `;
}

function renderPipelineStagePanel(project, stage) {
  if (stage === "verification") return renderVerificationStage(project);
  if (stage === "quote") return renderQuoteVerifiedStage(project);
  if (stage === "allocation") return renderTeamAllocationStage(project);
  if (stage === "upcoming") return renderUpcomingStage(project);
  if (stage === "review") return renderProjectReviewStage(project);
  if (stage === "completed") return renderCompletedStage(project);
  return renderCancelledStage(project);
}

function renderVerificationStage(project) {
  return `
    <section class="ops-panel">
      <div class="panel-head"><div><h2>Verification</h2><span>Review the request, photos and quote variables before verifying.</span></div></div>
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
      <div class="area-strip">${project.areas.map(areaTile).join("")}</div>
      <textarea class="ops-notes" data-project-field="quoteNotes" placeholder="Verification notes">${escapeHtml(project.quoteNotes || "")}</textarea>
      <div class="button-row">
        <button class="ops-btn light" data-set-status="More Photos Requested">More Photos</button>
        <button class="ops-btn light" data-set-status="Site Visit Requested">Site Visit Requested</button>
        <button class="ops-btn orange" data-set-status="Quote Verified">Verify Quote</button>
        <button class="ops-btn light" data-set-status="Cancelled">Cancel Quote</button>
      </div>
    </section>
  `;
}

function renderQuoteVerifiedStage(project) {
  return `
    <section class="ops-panel">
      <div class="panel-head"><div><h2>Quote Verified</h2><span>The quote is now with the customer for acceptance and payment.</span></div><button class="ops-btn orange" data-open-project="${project.reference}">Open Customer Quote</button></div>
      <div class="data-grid">
        ${dataItem("Quote Amount", money(project.price))}
        ${dataItem("Customer", `${project.customer.firstName} ${project.customer.lastName}`)}
        ${dataItem("Cell", project.customer.cell || "Not supplied")}
        ${dataItem("Status", project.status)}
      </div>
      <div class="button-row">
        <button class="ops-btn orange" data-set-status="Quote Accepted">Accept Quote</button>
        <button class="ops-btn light" data-set-status="Cancelled">Cancel Quote</button>
      </div>
    </section>
  `;
}

function renderTeamAllocationStage(project) {
  return `
    <section class="ops-panel">
      <div class="panel-head"><div><h2>Team Allocation</h2><span>Quote accepted. Allocate this project to a team timeslot.</span></div><button class="ops-btn orange" data-open-assign-team="${project.reference}">Allocate To Team</button></div>
      <div class="data-grid">
        ${dataItem("Project Created", project.projectCreated ? "Yes" : "Pending")}
        ${dataItem("Team", project.team || "Unassigned")}
        ${dataItem("Date", project.scheduledDate || "Not allocated")}
        ${dataItem("Time", project.scheduledTime || "Not allocated")}
      </div>
    </section>
  `;
}

function renderUpcomingStage(project) {
  return `
    <section class="ops-panel">
      <div class="panel-head"><div><h2>Upcoming Project</h2><span>Allocated to a team and visible on their Team Link.</span></div></div>
      <div class="data-grid">
        ${dataItem("Team", project.team || "Unassigned")}
        ${dataItem("Scheduled", `${project.scheduledDate || "No date"} ${project.scheduledTime || ""}`)}
        ${dataItem("Team Decision", project.teamDecision || "Pending")}
        ${dataItem("Team Note", project.teamDecisionNote || "None")}
      </div>
      <div class="button-row">
        <button class="ops-btn light" data-open-assign-team="${project.reference}">Move Allocation</button>
        <button class="ops-btn orange" data-set-status="Project Review">Send To Review</button>
        <button class="ops-btn light" data-set-status="Cancelled">Cancel Project</button>
      </div>
    </section>
  `;
}

function renderProjectReviewStage(project) {
  return `
    <section class="ops-panel">
      <div class="panel-head"><div><h2>Project Review</h2><span>Service team has completed the work. Review quality and collect customer feedback.</span></div></div>
      <textarea class="ops-notes" data-project-field="reviewNotes" placeholder="Completion summary, customer feedback and internal review notes.">${escapeHtml(project.reviewNotes || "")}</textarea>
      <div class="button-row"><button class="ops-btn orange" data-set-status="Completed">Complete Project</button><button class="ops-btn light" data-set-status="Cancelled">Cancel Project</button></div>
    </section>
  `;
}

function renderCompletedStage(project) {
  return `<section class="ops-panel"><div class="panel-head"><div><h2>Completed Projects</h2><span>All steps have been completed.</span></div></div><div class="data-grid">${dataItem("Completed", project.completedAt || "Completed")}${dataItem("Final Status", project.status)}</div></section>`;
}

function renderCancelledStage(project) {
  return `<section class="ops-panel"><div class="panel-head"><div><h2>Cancel Projects</h2><span>This quote or project has been cancelled.</span></div></div><div class="data-grid">${dataItem("Cancelled", project.cancelledAt || "Cancelled")}${dataItem("Final Status", project.status)}</div></section>`;
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
        <button class="ops-btn light" data-set-status="More Photos Requested">More Photos</button>
        <button class="ops-btn light" data-set-status="Site Visit Requested">Site Visit Requested</button>
        <button class="ops-btn orange" data-set-status="Quote Verified">Quote Verified</button>
      </div>
    </section>
  `;
}

function renderAssignTeamModal(project) {
  const days = calendarVisibleDays();
  return `
    <div class="calendar-block-overlay">
      <section class="assign-team-modal ops-panel">
        <div class="panel-head">
          <div><h2>Assign Team</h2><span>${escapeHtml(project.reference)} · ${projectDurationHours(project)} hour allocation required</span></div>
          <button class="ops-btn light" data-close-assign-team>Close</button>
        </div>
        <div class="assign-team-grid">
          ${state.serviceTeams.map((team, teamIndex) => `
            <article class="assign-team-card" style="--team-color: ${escapeHtml(team.color || teamColorOptions[0].value)}">
              <div class="panel-head compact-head"><div><h2>${escapeHtml(team.name)}</h2><span>${escapeHtml(team.mainMember || "No owner")} · ${escapeHtml(team.ownerContact || "No number")}</span></div></div>
              <div class="assign-days">
                ${days.map(date => renderAssignDay(team, teamIndex, date, project)).join("")}
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    </div>
  `;
}

function renderAssignDay(team, teamIndex, date, project) {
  const key = dateKey(date);
  const dayKey = calendarDays[date.getDay() - 1]?.key;
  const availability = team.availability?.[dayKey] || defaultAvailability[dayKey];
  const slot = availability?.enabled ? firstAvailableSlot(team, date, project) : null;
  const segments = state.projects
    .filter(item => item.team === team.name && item.reference !== project.reference && item.status !== "Completed")
    .flatMap(item => bookingSegmentsForProject(team, item))
    .filter(segment => segment.date === key);
  const blocks = (team.blockedTimes || []).filter(block => block.date === key);
  return `
    <div class="assign-day">
      <div class="assign-day-head"><strong>${dayLabel(date)}</strong><span>${key}</span></div>
      ${availability?.enabled ? `<small>Open ${availability.start} - ${availability.end}</small>` : `<small>Closed</small>`}
      <div class="assign-busy-list">
        ${segments.map(segment => `<span class="busy project">${escapeHtml(segment.start)}-${escapeHtml(segment.end)} ${escapeHtml(projectName(segment.project))}</span>`).join("")}
        ${blocks.map(block => `<span class="busy block">${escapeHtml(block.start)}-${escapeHtml(block.end)} Blocked</span>`).join("")}
      </div>
      ${slot ? `<button class="ops-btn light" data-assign-project-slot="${teamIndex}|${key}|${slot.start}">Allocate ${slot.start}</button>` : `<em>No fitting slot</em>`}
    </div>
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
  if (editing === "quoteForm") return renderQuoteFormEditor(settings);
  if (editing === "services") return renderServicesSummary(true);
  if (editing === "locations") return renderLocationSettings(true);
  return `
    <section class="split-grid">
      ${settingsSummaryCard("Finance Details", "Banking details shown on customer project/payment screens", [
        ["Account Name", settings.banking.accountName],
        ["Bank", settings.banking.bankName],
        ["Account No.", settings.banking.accountNumber],
        ["Branch Code", settings.banking.branchCode],
        ["Payment Note", settings.banking.paymentNote],
      ], "finance", true)}
      ${settingsSummaryCard("Pricing Add-Ons", "Applied on top of T / L / X job pricing", [
        ["ASAP Urgency", money(settings.pricing.urgentAsap)],
        ["Extra Area", money(settings.pricing.extraArea)],
        ["Formula", "Time + Load + Waste + Complexity + Urgency + Extra Areas"],
      ], "addons")}
    </section>
    ${settingsSummaryCard("Quote Form", "Manage the internal quote creator and source-tracked form links", [
      ["Form Title", settings.quoteForm.title],
      ["Primary Button", settings.quoteForm.buttonText],
      ["Form Links", settings.quoteForm.links.length],
    ], "quoteForm")}
    ${pricingSummaryCard(settings)}
    ${renderServicesSummary(false)}
    ${renderLocationSettings(false)}
  `;
}

function settingsSummaryCard(title, subtitle, rows, editKey, dense = false) {
  return `
    <section class="ops-panel settings-card">
      <div class="panel-head">
        <div><h2>${title}</h2><span>${subtitle}</span></div>
        <button class="ops-btn light" data-edit-settings="${editKey}">Edit</button>
      </div>
      <div class="${dense ? "settings-lines" : "data-grid settings-readonly"}">
        ${rows.map(([label, value]) => dense ? settingLine(label, value) : dataItem(label, value)).join("")}
      </div>
    </section>
  `;
}

function pricingSummaryCard(settings) {
  return `
    <section class="ops-panel settings-card">
      <div class="panel-head">
        <div><h2>Job Pricing Configuration</h2><span>Saved T1-T4, L1-L4, W0-W5 and X/A-D values used in instant quotes</span></div>
        <button class="ops-btn light" data-edit-settings="pricing">Edit</button>
      </div>
      <div class="settings-matrix readonly">
        ${pricingReadOnlyGroup("Time Rating", settings.pricing.time)}
        ${pricingReadOnlyGroup("Load Rating", settings.pricing.load)}
        ${pricingReadOnlyGroup("Waste Removal", settings.pricing.waste)}
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
  const configuredServices = activeServices();
  if (isEditing) {
    return `
      <section class="ops-panel settings-editor">
        <div class="panel-head"><div><h2>Service Configuration</h2><span>Add or remove services used in estimate forms and team abilities.</span></div>${settingsEditorActions()}</div>
        <div class="service-config-list">
          ${configuredServices.map((service, index) => `
            <div class="service-config-row">
              <input value="${escapeHtml(service)}" data-service-index="${index}" />
              <button class="ops-btn light" data-remove-service="${index}">Remove</button>
            </div>
          `).join("") || `<div class="empty-note">No services configured yet.</div>`}
        </div>
        <div class="button-row"><button class="ops-btn light" data-add-service>Add Service</button></div>
      </section>
    `;
  }
  return `
    <section class="ops-panel settings-card">
      <div class="panel-head">
        <div><h2>Service Configuration</h2><span>Services available in forms and team setup</span></div>
        <button class="ops-btn light" data-edit-settings="services">Edit</button>
      </div>
      <div class="service-settings">
        ${configuredServices.map((service) => `<span>${escapeHtml(service)}</span>`).join("")}
      </div>
    </section>
  `;
}

function renderLocationSettings(isEditing) {
  const locations = activeServiceLocations();
  const cityNames = Object.keys(locations);
  if (isEditing) {
    return `
      <section class="ops-panel settings-editor">
        <div class="panel-head"><div><h2>City And Neighbourhoods</h2><span>Only these service areas can continue through the estimate form.</span></div>${settingsEditorActions()}</div>
        <div class="service-config-list">
          ${cityNames.map((city, cityIndex) => `
            <div class="location-config-row">
              <input value="${escapeHtml(city)}" data-location-city-index="${cityIndex}" />
              <input value="${escapeHtml((locations[city] || []).join(", "))}" data-location-areas-index="${cityIndex}" placeholder="Neighbourhoods separated by commas" />
              <button class="ops-btn light" data-remove-location-city="${cityIndex}">Remove</button>
            </div>
          `).join("") || `<div class="empty-note">No service cities configured yet.</div>`}
        </div>
        <div class="button-row"><button class="ops-btn light" data-add-location-city>Add City</button></div>
      </section>
    `;
  }
  return settingsSummaryCard("City And Neighbourhoods", "Cities and suburbs available in the estimate form", [
    ["Cities", cityNames.length],
    ["Neighbourhoods", Object.values(locations).reduce((sum, areas) => sum + areas.length, 0)],
    ["Active Areas", cityNames.slice(0, 3).join(", ") || "None"],
  ], "locations");
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
      <div class="settings-matrix four">
        ${pricingGroup("Time Rating", "time", settings.pricing.time, { T1: "1-2 hours", T2: "2-4 hours", T3: "5-8 hours", T4: "2 days" })}
        ${pricingGroup("Load Rating", "load", settings.pricing.load, { L1: "1 dustbin", L2: "2 dustbins", L3: "Half bakkie / half ton bag", L4: "Full bakkie / 1 ton bag" })}
        ${pricingGroup("Waste Removal", "waste", settings.pricing.waste, { W0: "No removal", W1: "1-2 dustbins", W2: "Half bakkie load", W3: "Full bakkie load", W4: "More than full bakkie", W5: "Unsure" })}
        ${pricingGroup("X Rating", "complexity", settings.pricing.complexity, { A: "Easy", B: "Moderate", C: "Tedious", D: "Complex" })}
      </div>
    </section>
  `;
}

function renderQuoteFormEditor(settings) {
  return `
    <section class="ops-panel settings-editor">
      <div class="panel-head"><div><h2>Quote Form</h2><span>Edit the internal quote creator and create trackable source links</span></div>${settingsEditorActions()}</div>
      <section class="team-edit-section">
        <div class="panel-head"><div><h2>Edit Form</h2><span>The quote creator stays the same; these details control the customer-facing wording.</span></div></div>
        <div class="control-grid settings-grid">
          ${settingsInput("Headline", "quoteForm", "title", settings.quoteForm.title)}
          ${settingsInput("Button Text", "quoteForm", "buttonText", settings.quoteForm.buttonText)}
          ${settingsInput("Default Source", "quoteForm", "defaultSource", settings.quoteForm.defaultSource)}
        </div>
        <label class="field full"><span class="field-label">Intro Text</span><textarea data-setting-group="quoteForm" data-setting-field="intro">${escapeHtml(settings.quoteForm.intro)}</textarea></label>
      </section>
      <section class="team-edit-section">
        <div class="panel-head"><div><h2>Form Links</h2><span>Create source-specific links for QR codes, flyers and campaigns.</span></div><button class="ops-btn light" data-add-form-link>Add Form Link</button></div>
        <div class="form-link-list">
          ${settings.quoteForm.links.map((link, index) => formLinkRow(link, index)).join("") || `<div class="empty-note">No source links yet.</div>`}
        </div>
      </section>
    </section>
  `;
}

function formLinkRow(link, index) {
  const url = `/estimate?source=${encodeURIComponent(link.source || "")}`;
  return `
    <div class="form-link-row">
      <input placeholder="Link name" value="${escapeHtml(link.name || "")}" data-form-link-index="${index}" data-form-link-field="name" />
      <input placeholder="source-id" value="${escapeHtml(link.source || "")}" data-form-link-index="${index}" data-form-link-field="source" />
      <code>${escapeHtml(url)}</code>
      <button class="ops-btn light" data-copy-form-link="${escapeHtml(url)}">Copy</button>
      <button class="ops-btn light" data-remove-form-link="${index}">Remove</button>
    </div>
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
  const current = teamProjects(team.name, "today");
  const planned = teamProjects(team.name, "upcoming");
  return `
    <article class="ops-panel team-card" style="--team-color: ${escapeHtml(team.color || teamColorOptions[0].value)}">
      <div class="panel-head">
        <div><h2>${escapeHtml(team.name || `Team ${index + 1}`)}</h2><span>${escapeHtml(team.mainMember || "No owner set")}</span></div>
        <button class="micro-link" data-copy-team-link="${teamPath(team)}">Team Link</button>
      </div>
      <div class="team-card-section">
        <strong>Today's Projects</strong>
        <div class="team-micro-list">
          ${current.slice(0, 4).map(project => `<span>${project.reference} · ${project.customer.firstName} · ${project.status}</span>`).join("") || `<span>No projects today</span>`}
        </div>
      </div>
      <div class="team-lines">
        ${teamLine("Number", phoneCopyButton(team.ownerContact || "Not set"), true)}
        ${teamLine("Upcoming Projects", planned.length)}
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
  const serviceAbility = team.serviceAbilityList?.length ? team.serviceAbilityList : String(team.serviceAbility || "").split(",").map(item => item.trim()).filter(Boolean);
  const serviceAreas = team.serviceAreasList?.length ? team.serviceAreasList.join(", ") : team.serviceAreas;
  const members = team.membersList?.length ? formattedTeamMembers(team).join(", ") : team.members;
  return `
    <section class="ops-panel team-full" style="--team-color: ${escapeHtml(team.color || teamColorOptions[0].value)}">
      <div class="record-head team-view-head">
        <div>
          <span class="eyebrow">Team View</span>
          <h2>${escapeHtml(team.name)}</h2>
        </div>
        <div class="button-row team-view-actions">
          <button class="icon-action-btn" data-report-manager title="Reports" aria-label="Reports">${reportIcon()}</button>
          <button class="ops-btn light" data-copy-team-link="${teamPath(team)}">Team Link</button>
          <button class="ops-btn orange" data-edit-team="${index}">Edit Team</button>
        </div>
        ${servicePills(serviceAbility)}
      </div>
      <div class="team-priority-grid">
        <div class="team-lines priority">
          ${teamLine("Team Owner", team.mainMember || "Not set")}
          ${teamLine("Owner Number", phoneCopyButton(team.ownerContact || "Not set"), true)}
          ${teamLinkLine("Team Link", teamShareUrl(team))}
          ${teamLine("Service Areas", serviceAreas || "Not set")}
        </div>
        <div class="team-lines priority team-members-priority">
          ${teamMembersLine("Team Members", team, members)}
        </div>
      </div>
    </section>
    ${renderTeamCalendar(team, { canBlock: true, teamIndex: index })}
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
        ${teamInput("Owner Contact Number", index, "ownerContact", team.ownerContact, "tel")}
        <label class="field"><span class="field-label">Team Link</span><input value="/team/${escapeHtml(team.id)}" readonly /></label>
      </div>
      ${renderTeamColourEditor(team, index)}
      ${renderTeamAvailabilityEditor(team, index)}
      ${renderTeamMembersEditor(team, index)}
      ${renderServiceAbilityEditor(team, index)}
      ${renderServiceAreaEditor(team, index)}
      <div class="button-row">
        <button class="ops-btn light" data-remove-team="${index}">Remove Team</button>
      </div>
    </section>
  `;
}

function renderTeamColourEditor(team, teamIndex) {
  const selected = team.color || teamColorOptions[0].value;
  return `
    <section class="team-edit-section">
      <div class="panel-head compact-head"><div><h2>Team Colour</h2><span>Choose an identifier colour.</span></div></div>
      <div class="team-colour-grid">
        ${teamColorOptions.map(option => `
          <label class="team-colour-option ${selected === option.value ? "selected" : ""}" title="${escapeHtml(option.name)}" aria-label="${escapeHtml(option.name)}">
            <input type="radio" name="team-colour-${teamIndex}" value="${escapeHtml(option.value)}" data-team-index="${teamIndex}" data-team-field="color" ${selected === option.value ? "checked" : ""} />
            <span style="--swatch: ${escapeHtml(option.value)}"></span>
          </label>
        `).join("")}
      </div>
    </section>
  `;
}

function renderTeamAvailabilityEditor(team, teamIndex) {
  return `
    <section class="team-edit-section">
      <div class="panel-head"><div><h2>Team Availability</h2><span>Set the normal working times used by the team calendar.</span></div></div>
      <div class="availability-grid">
        ${calendarDays.map(day => {
          const availability = team.availability[day.key] || defaultAvailability[day.key];
          return `
            <div class="availability-row">
              <label><input type="checkbox" data-team-index="${teamIndex}" data-availability-day="${day.key}" data-availability-field="enabled" ${availability.enabled ? "checked" : ""} /> ${day.short}</label>
              <input type="time" value="${escapeHtml(availability.start)}" data-team-index="${teamIndex}" data-availability-day="${day.key}" data-availability-field="start" />
              <input type="time" value="${escapeHtml(availability.end)}" data-team-index="${teamIndex}" data-availability-day="${day.key}" data-availability-field="end" />
            </div>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function renderTeamMembersEditor(team, teamIndex) {
  const members = team.membersList || [];
  return `
    <section class="team-edit-section">
      <div class="panel-head"><div><h2>Team Members</h2><span>Add team member name, surname and cell number</span></div><button class="ops-btn light" data-add-member="${teamIndex}">Add Team Member</button></div>
      <div class="member-list">
        ${members.map((member, memberIndex) => `
          <div class="member-row">
            <input placeholder="Name" value="${escapeHtml(member.name || "")}" data-team-index="${teamIndex}" data-member-index="${memberIndex}" data-member-field="name" />
            <input placeholder="Surname" value="${escapeHtml(member.surname || "")}" data-team-index="${teamIndex}" data-member-index="${memberIndex}" data-member-field="surname" />
            <input placeholder="Cell nr" value="${escapeHtml(member.cell || "")}" data-team-index="${teamIndex}" data-member-index="${memberIndex}" data-member-field="cell" />
            <button class="ops-btn light" data-remove-member="${teamIndex}:${memberIndex}">Remove</button>
          </div>
        `).join("") || `<div class="team-project-row"><span>No team members added yet.</span></div>`}
      </div>
    </section>
  `;
}

function renderServiceAbilityEditor(team, teamIndex) {
  const selected = new Set(team.serviceAbilityList || []);
  return `
    <section class="team-edit-section">
      <div class="panel-head"><div><h2>Service Ability</h2><span>Tick all services this team can perform</span></div></div>
      <div class="service-grid tight">
        ${activeTeamServices().map(service => `
          <label class="service-chip ${selected.has(service) ? "selected" : ""}">
            <input type="checkbox" data-team-service="${teamIndex}" value="${escapeHtml(service)}" ${selected.has(service) ? "checked" : ""} />
            ${service}
          </label>
        `).join("")}
      </div>
    </section>
  `;
}

function renderServiceAreaEditor(team, teamIndex) {
  const city = team.areaCity || Object.keys(southAfricanAreas)[0];
  const neighborhoods = southAfricanAreas[city] || [];
  const areaOptions = Object.entries(southAfricanAreas).flatMap(([areaCity, areas]) => areas.map(area => `${areaCity}: ${area}`));
  return `
    <section class="team-edit-section">
      <div class="panel-head"><div><h2>Service Areas</h2><span>Select by South African city and neighbourhood, or add a custom area</span></div></div>
      <div class="control-grid settings-grid">
        <label class="field"><span class="field-label">City</span><select data-team-index="${teamIndex}" data-team-field="areaCity">${Object.keys(southAfricanAreas).map(areaCity => `<option ${areaCity === city ? "selected" : ""}>${areaCity}</option>`).join("")}</select></label>
        <label class="field"><span class="field-label">Neighbourhood</span><select data-team-index="${teamIndex}" data-team-field="areaNeighborhood">${neighborhoods.map(area => `<option ${area === team.areaNeighborhood ? "selected" : ""}>${area}</option>`).join("")}</select></label>
        <label class="field"><span class="field-label">Search / Custom Area</span><input list="sa-area-options-${teamIndex}" placeholder="Search or type neighbourhood" data-team-index="${teamIndex}" data-team-field="customArea" value="${escapeHtml(team.customArea || "")}" /></label>
        <datalist id="sa-area-options-${teamIndex}">
          ${areaOptions.map(area => `<option value="${escapeHtml(area)}"></option>`).join("")}
        </datalist>
      </div>
      <div class="button-row"><button class="ops-btn light" data-add-area="${teamIndex}">Add Area</button></div>
      <div class="service-settings">
        ${(team.serviceAreasList || []).map((area, areaIndex) => `<span>${escapeHtml(area)} <button class="chip-remove" data-remove-area="${teamIndex}:${areaIndex}">×</button></span>`).join("") || `<span>No areas selected</span>`}
      </div>
    </section>
  `;
}

function teamProjectPanel(title, projects, type = "") {
  return `
    <section class="ops-panel team-project-panel ${type ? `team-project-panel-${type}` : ""}">
      <div class="panel-head"><div><h2>${title}</h2><span>${projects.length} projects</span></div></div>
      <div class="team-project-list">
        ${projects.map(teamProjectBox).join("") || `<div class="team-project-row"><span>No projects yet</span></div>`}
      </div>
    </section>
  `;
}

function teamProjectBox(project) {
  return `
    <div class="team-project-box" data-open-team-project="${project.reference}" role="button" tabindex="0">
      <span><strong>${escapeHtml(projectName(project))}</strong><small>${escapeHtml(project.reference)} ${teamBadge(project.team)}</small></span>
      <span><small>Customer</small><strong>${escapeHtml(project.customer.firstName)} ${escapeHtml(project.customer.lastName)}</strong></span>
      <span><small>Number</small><strong>${phoneCopyButton(project.customer.cell || "Not supplied")}</strong></span>
      <span><small>Area</small><strong>${escapeHtml(project.property.suburb || project.property.city || "Not supplied")}</strong></span>
    </div>
  `;
}

function renderTeamCalendar(team, options = {}) {
  const days = calendarVisibleDays();
  const portalClass = options.portal ? "team-calendar-portal" : "";
  const canBlock = options.canBlock || options.portal;
  return `
    <section class="ops-panel team-calendar ${portalClass}" style="--team-color: ${escapeHtml(team.color || teamColorOptions[0].value)}">
      <div class="panel-head">
        <div><h2>Team Calendar</h2><span>Light orange slots are open. Booked projects and blocked times occupy availability.</span></div>
        <div class="calendar-controls">
          <button class="${state.teamCalendarMode === "today" ? "active" : ""}" data-calendar-mode="today">Today</button>
          <button class="${state.teamCalendarMode === "week" ? "active" : ""}" data-calendar-mode="week">This Week</button>
          ${canBlock ? `<button class="block-time-btn ${state.calendarBlockMode ? "active block-active" : ""}" data-toggle-block-time>Block Time</button>` : ""}
          <button data-calendar-shift="-1">‹</button>
          <button data-calendar-shift="1">›</button>
        </div>
      </div>
      <div class="calendar-grid ${state.teamCalendarMode === "today" ? "today" : ""}">
        ${days.map(date => renderCalendarDay(team, date, false)).join("")}
      </div>
      ${canBlock && state.calendarBlockMode ? renderCalendarBlockOverlay(team, options.teamIndex, days) : ""}
    </section>
  `;
}

function renderCalendarDay(team, date, canBlock = false) {
  const key = dateKey(date);
  const dayKey = calendarDays[date.getDay() - 1]?.key;
  const availability = team.availability[dayKey] || { enabled: false, start: "", end: "" };
  const bookings = state.projects
    .filter(project => project.team === team.name && project.status !== "Completed")
    .flatMap(project => bookingSegmentsForProject(team, project))
    .filter(segment => segment.date === key)
    .sort((a, b) => a.start.localeCompare(b.start));
  const blocks = (team.blockedTimes || []).filter(block => block.date === key).sort((a, b) => (a.start || "").localeCompare(b.start || ""));
  return `
    <article class="calendar-day ${state.calendarBlockMode && canBlock ? "selectable" : ""} ${state.calendarBlockDate === key ? "selected-block-day" : ""}" ${state.calendarBlockMode && canBlock ? `data-calendar-block-day="${key}"` : ""}>
      <div class="calendar-day-head"><strong>${dayLabel(date)}</strong><span>${key}</span></div>
      ${availability.enabled ? `<div class="calendar-open">Open ${availability.start} - ${availability.end}</div>` : `<div class="calendar-closed">Closed</div>`}
      <div class="calendar-items">
        ${bookings.map(segment => calendarBooking(segment)).join("")}
        ${blocks.map(block => calendarBlock(block)).join("")}
        ${!bookings.length && !blocks.length ? `<span class="calendar-empty">No allocations</span>` : ""}
      </div>
    </article>
  `;
}

function calendarBooking(segment) {
  const { project, start, end, hours, index, total } = segment;
  return `
    <button class="calendar-booking ${project.teamAccepted ? "accepted" : "needs-decision"}" data-open-team-project="${project.reference}">
      <strong>${escapeHtml(projectName(project))}</strong>
      <span>${start} - ${end} · ${hours}h${total > 1 ? ` · Day ${index + 1}/${total}` : ""} · ${project.customer.firstName}</span>
    </button>
  `;
}

function bookingSegmentsForProject(team, project) {
  const segments = [];
  let remaining = projectDurationHours(project);
  let date = parseDate(project.scheduledDate || todayKey());
  let preferredStart = project.scheduledTime || "09:00";
  let guard = 0;

  while (remaining > 0 && guard < 14) {
    guard += 1;
    const dayIndex = date.getDay();
    const day = calendarDays[dayIndex - 1];

    if (day) {
      const availability = (team.availability || {})[day.key] || defaultAvailability[day.key];

      if (availability?.enabled) {
        const start = segments.length ? availability.start : laterTime(preferredStart, availability.start);
        const openHours = Math.max(0, timeToHours(availability.end) - timeToHours(start));

        if (openHours > 0) {
          const hours = Math.min(remaining, openHours);
          segments.push({
            project,
            date: dateKey(date),
            start,
            end: addHours(start, hours),
            hours,
          });
          remaining -= hours;
        }
      }
    }

    date.setDate(date.getDate() + 1);
    preferredStart = "";
  }

  return segments.map((segment, index) => ({ ...segment, index, total: segments.length }));
}

function calendarBlock(block) {
  return `<div class="calendar-block"><strong>Blocked</strong><span>${escapeHtml(block.start)} - ${escapeHtml(block.end)} · ${escapeHtml(block.reason || "Unavailable")}</span></div>`;
}

function renderCalendarBlockOverlay(team, teamIndex, days) {
  return `
    <div class="calendar-block-overlay">
      <section class="calendar-block-modal" style="--team-color: ${escapeHtml(team.color || teamColorOptions[0].value)}">
        <div class="panel-head">
          <div><h2>Block Time</h2><span>Select the day, then add the unavailable time.</span></div>
          <button class="ops-btn light" data-cancel-calendar-block>Close</button>
        </div>
        ${state.calendarBlockDate ? renderCalendarBlockForm(team, teamIndex) : `<div class="calendar-block-hint">Select a day in the calendar to block time.</div>`}
        <div class="calendar-grid block-picker ${state.teamCalendarMode === "today" ? "today" : ""}">
          ${days.map(date => renderCalendarDay(team, date, true)).join("")}
        </div>
      </section>
    </div>
  `;
}

function renderCalendarBlockForm(team, teamIndex) {
  const form = state.calendarBlockForm;
  return `
    <section class="calendar-block-form">
      <div>
        <h3>Block ${escapeHtml(state.calendarBlockDate)}</h3>
        <span>Set the unavailable time for this team.</span>
      </div>
      <input type="time" value="${escapeHtml(form.start)}" data-calendar-block-field="start" />
      <input type="time" value="${escapeHtml(form.end)}" data-calendar-block-field="end" />
      <input placeholder="Reason" value="${escapeHtml(form.reason)}" data-calendar-block-field="reason" />
      <label class="mini-check"><input type="checkbox" data-calendar-block-field="recurring" ${form.recurring ? "checked" : ""} /> Repeat weekly</label>
      <label class="mini-check"><input type="checkbox" data-calendar-block-field="repeatWeekly" ${form.repeatWeekly ? "checked" : ""} /> For 8 weeks</label>
      <button class="ops-btn orange" data-save-calendar-block="${teamIndex}">Save Block</button>
      <button class="ops-btn light" data-cancel-calendar-block>Cancel</button>
    </section>
  `;
}

function renderTeamPortal(team, index) {
  const current = teamProjects(team.name, "current");
  const serviceAbility = team.serviceAbilityList?.length ? team.serviceAbilityList : String(team.serviceAbility || "").split(",").map(item => item.trim()).filter(Boolean);
  const serviceAreas = team.serviceAreasList?.length ? team.serviceAreasList : String(team.serviceAreas || "").split(",").map(item => item.trim()).filter(Boolean);
  const members = formattedTeamMembers(team);
  const selectedProject = state.projects.find(project => project.reference === state.teamPortalProjectRef && project.team === team.name);
  return `
    <main class="team-portal-shell" style="--team-color: ${escapeHtml(team.color || teamColorOptions[0].value)}">
      <section class="team-portal-header">
        <img class="team-portal-logo" src="/assets/CGG_BO_Logo.png" alt="City Garden Guys" />
        <div>
          <span class="eyebrow">Team Link</span>
          <h1>${escapeHtml(team.name)}</h1>
          <p>${escapeHtml(team.mainMember || "Team owner")} · ${phoneCopyButton(team.ownerContact || "No number set")}</p>
        </div>
      </section>
      <section class="team-portal-grid team-portal-info-only">
        <article class="ops-panel team-full" style="--team-color: ${escapeHtml(team.color || teamColorOptions[0].value)}">
          <div class="panel-head"><div><h2>Team Info</h2><span>Details visible to this team owner</span></div><span class="status-pill">${current.length} current</span></div>
          <div class="team-lines dense">
            ${teamLine("Owner", team.mainMember || "Not set")}
            ${teamLine("Contact Number", phoneCopyButton(team.ownerContact || "Not set"), true)}
            ${teamMembersLine("Team Members", team, members.join(", ") || "Not set")}
            ${teamLine("Service Ability", serviceAbility.join(", ") || "Not set")}
            ${teamLine("Service Areas", serviceAreas.join(", ") || "Not set")}
            ${teamLine("Team Link", teamPath(team))}
          </div>
        </article>
      </section>
      ${renderTeamCalendar(team, { portal: true, teamIndex: index })}
      ${selectedProject ? renderTeamProjectDecisionModal(selectedProject) : ""}
      <div class="toast" id="toast"></div>
    </main>
  `;
}

function renderTeamProjectDecisionModal(project) {
  return `
    <div class="calendar-block-overlay">
      <section class="team-project-modal ops-panel">
        <div class="panel-head">
          <div><h2>${escapeHtml(projectName(project))}</h2><span>${escapeHtml(project.reference)} · ${escapeHtml(project.status)}</span></div>
          <button class="ops-btn light" data-close-team-project>Close</button>
        </div>
        <div class="team-project-modal-grid">
          ${dataItem("Customer", `${project.customer.firstName} ${project.customer.lastName}`)}
          ${dataItem("Cell", project.customer.cell || "Not supplied")}
          ${dataItem("Area", project.property.suburb || project.property.city || "Not supplied")}
          ${dataItem("Address", fullAddress(project))}
          ${dataItem("Date", project.scheduledDate || "Not scheduled")}
          ${dataItem("Time", project.scheduledTime || "09:00")}
          ${dataItem("Duration", `${projectDurationHours(project)} hours`)}
          ${dataItem("Quote", money(project.price))}
        </div>
        <label class="field full"><span class="field-label">Reject Reason</span><select data-team-project-reject-reason><option value="">Choose reason</option><option>Team unavailable</option><option>Area too far</option><option>Insufficient time allocated</option><option>Equipment unavailable</option><option>Other</option></select></label>
        <div class="button-row">
          <button class="ops-btn orange" data-team-project-action="accept" data-team-project-ref="${project.reference}" ${project.teamAccepted ? "disabled" : ""}>${project.teamAccepted ? "Accepted" : "Accept Project"}</button>
          <button class="ops-btn light" data-team-project-action="move" data-team-project-ref="${project.reference}">Move Request</button>
          <button class="ops-btn light" data-team-project-action="reject" data-team-project-ref="${project.reference}">Reject</button>
        </div>
      </section>
    </div>
  `;
}

function renderEstimateShell() {
  return `
    <main class="request-shell">
      <section class="request-card">
        <div class="request-top">
          ${quoteLogo("Fast estimate")}
          <button class="ops-btn light" id="backOffice">Back Office</button>
        </div>
        ${renderEstimateStep()}
      </section>
    </main>
    <div class="toast" id="toast"></div>
  `;
}

function renderEstimateStep() {
  if (state.step === "property") return renderPropertyDetails();
  if (state.step === "services") return renderServiceSelection();
  if (state.step === "areas") return renderAreaUploads();
  if (state.step === "questions") return renderQuickQuestions();
  if (state.step === "customer") return renderCustomerDetails();
  if (state.step === "quote") return renderQuoteScreen(selectedProject());
  if (state.step === "accepted") return renderAccepted(selectedProject());
  const quoteForm = state.settings.quoteForm;
  return `
    <div class="request-intro">
      <span class="eyebrow">Instant estimate</span>
      <h1>${escapeHtml(quoteForm.title)}</h1>
      <p>${escapeHtml(quoteForm.intro)}</p>
      <button class="ops-btn orange large" data-step="property">${escapeHtml(quoteForm.buttonText)}</button>
    </div>
  `;
}

function renderCustomerDetails() {
  const match = state.matchedCustomer;
  return `
    ${stepHeader("Personal Details", "Contact details for quote and updates.")}
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
    <div class="button-row"><button class="ops-btn light" data-step="questions">Back</button><button class="ops-btn orange large" id="generateQuote">Generate Estimate</button></div>
  `;
}

function renderPropertyDetails() {
  const locations = activeServiceLocations();
  const cities = Object.keys(locations);
  const city = state.form.property.city;
  const neighbourhoods = locations[city] || [];
  return `
    ${stepHeader("Property Details", "Tell us where the clean-up needs to happen.")}
    <div class="control-grid">
      <label class="field"><span class="field-label">City</span><input list="service-city-options" value="${escapeHtml(city)}" data-group="property" data-field="city" placeholder="Choose or type your city" /><datalist id="service-city-options">${cities.map(item => `<option value="${escapeHtml(item)}"></option>`).join("")}</datalist></label>
      <label class="field"><span class="field-label">Suburb / Neighbourhood</span>${neighbourhoods.length ? `<select data-group="property" data-field="suburb"><option value="">Select neighbourhood</option>${neighbourhoods.map(area => `<option ${state.form.property.suburb === area ? "selected" : ""}>${escapeHtml(area)}</option>`).join("")}</select>` : `<input value="${escapeHtml(state.form.property.suburb)}" data-group="property" data-field="suburb" placeholder="Type suburb" />`}</label>
      ${formInput("street", "Street Address", state.form.property.street, "property")}
      <label class="field"><span class="field-label">Location</span><div class="location-input-row"><input value="${escapeHtml(state.form.property.mapsLink)}" data-group="property" data-field="mapsLink" placeholder="Use current location or paste a map link" /><button type="button" class="ops-btn light" id="useLocation">Use Location</button></div></label>
    </div>
    <label class="field full"><span class="field-label">Access Notes</span><textarea data-group="property" data-field="accessNotes" placeholder="Gate code, dogs, parking, security estate">${escapeHtml(state.form.property.accessNotes)}</textarea></label>
    ${stepActions("start", "services")}
  `;
}

function renderServiceSelection() {
  return `
    ${stepHeader("Service Selection", "Select all that apply.")}
    <div class="service-grid">${activeServices().map(service => `
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
        <div class="field">
          <span class="field-label">Photos</span>
          <div class="photo-action-row">
            <button type="button" class="ops-btn light" data-open-photo="upload-${index}">Upload</button>
            <button type="button" class="ops-btn light" data-open-photo="camera-${index}">Camera</button>
          </div>
          <input class="hidden-file" id="upload-${index}" type="file" accept="image/*" multiple data-photo-area="${index}" />
          <input class="hidden-file" id="camera-${index}" type="file" accept="image/*" capture="environment" multiple data-photo-area="${index}" />
        </div>
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
    ${question("Green waste removal", "waste", ["No removal - we will keep it tidy for you to remove", "1-2 dustbins", "Half bakkie load", "Full bakkie load", "More", "Unsure"], a.waste)}
    ${question("How easy is access?", "access", ["Easy", "Moderate", "Difficult"], a.access)}
    ${question("How urgent is the project?", "urgency", ["ASAP", "This week", "Next week", "Flexible"], a.urgency)}
    ${stepActions("areas", "customer")}
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

function quoteLogo(label) {
  return `
    <div class="quote-logo-lockup">
      <img src="assets/CGG_Quote_Logo.png" alt="City Garden Guys" />
      <span>${escapeHtml(label)}</span>
    </div>
  `;
}

function renderPublicProject(project) {
  const verified = project.status === "Quote Verified";
  return `
    <main class="public-shell">
      <section class="public-header">
        ${quoteLogo("Project Portal")}
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
    state.mobileMenuOpen = false;
    if (state.officeTab === "pipeline") syncSelectedProjectToPipelineStage();
    render();
  }));
  document.getElementById("mobileMenuToggle")?.addEventListener("click", () => {
    state.mobileMenuOpen = !state.mobileMenuOpen;
    render();
  });
  document.getElementById("mobileMenuScrim")?.addEventListener("click", () => {
    state.mobileMenuOpen = false;
    render();
  });
  document.querySelectorAll("[data-select-project]").forEach(button => button.addEventListener("click", () => {
    state.selectedRef = button.dataset.selectProject;
    if (state.officeTab === "pipeline") state.pipelineStage = pipelineStageForProject(selectedProject());
    render();
  }));
  document.querySelectorAll("[data-pipeline-stage-tab]").forEach(button => button.addEventListener("click", () => {
    state.pipelineStage = button.dataset.pipelineStageTab;
    const first = pipelineProjects()[0];
    if (first) state.selectedRef = first.reference;
    render();
  }));
  document.querySelectorAll("[data-open-notification]").forEach(button => button.addEventListener("click", () => {
    const project = state.projects.find(item => item.reference === button.dataset.openNotification);
    if (project && ["Request Submitted", "Estimate Generated"].includes(project.status)) applyProjectStatus(project, "Awaiting Verification");
    state.selectedRef = button.dataset.openNotification;
    state.officeTab = "pipeline";
    saveAll();
    render();
  }));
  document.querySelectorAll("[data-handle-notification]").forEach(button => button.addEventListener("click", () => {
    const project = state.projects.find(item => item.reference === button.dataset.handleNotification);
    if (project && ["Request Submitted", "Estimate Generated"].includes(project.status)) applyProjectStatus(project, "Awaiting Verification");
    state.selectedRef = button.dataset.handleNotification;
    state.officeTab = "pipeline";
    saveAll();
    render();
  }));
  document.getElementById("projectSearch")?.addEventListener("input", event => {
    state.search = event.target.value;
    render();
  });
  document.querySelectorAll("[data-project-field]").forEach(field => field.addEventListener("input", updateProjectField));
  document.querySelectorAll("[data-set-status]").forEach(button => button.addEventListener("click", () => {
    applyProjectStatus(selectedProject(), button.dataset.setStatus);
    if (state.officeTab === "pipeline") state.pipelineStage = pipelineStageForProject(selectedProject());
    saveAll();
    render();
  }));
  document.querySelectorAll("[data-open-assign-team]").forEach(button => button.addEventListener("click", () => {
    state.assigningProjectRef = button.dataset.openAssignTeam;
    render();
  }));
  document.querySelectorAll("[data-close-assign-team]").forEach(button => button.addEventListener("click", () => {
    state.assigningProjectRef = null;
    render();
  }));
  document.querySelectorAll("[data-assign-project-slot]").forEach(button => button.addEventListener("click", () => {
    const [teamIndex, date, time] = button.dataset.assignProjectSlot.split("|");
    assignProjectToTeam(state.assigningProjectRef, Number(teamIndex), date, time);
    state.assigningProjectRef = null;
    saveAll();
    showToast("Project allocated to team.");
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
  document.querySelectorAll("[data-form-link-index][data-form-link-field]").forEach(field => {
    field.addEventListener("input", updateFormLinkField);
    field.addEventListener("change", updateFormLinkField);
  });
  document.querySelectorAll("[data-add-form-link]").forEach(button => button.addEventListener("click", () => {
    state.settings.quoteForm.links.push({ name: "New Source Link", source: `source-${state.settings.quoteForm.links.length + 1}` });
    render();
  }));
  document.querySelectorAll("[data-remove-form-link]").forEach(button => button.addEventListener("click", () => {
    state.settings.quoteForm.links.splice(Number(button.dataset.removeFormLink), 1);
    render();
  }));
  document.querySelectorAll("[data-copy-form-link]").forEach(button => button.addEventListener("click", () => {
    copyText(toAbsoluteUrl(button.dataset.copyFormLink), "Form link copied.");
  }));
  document.querySelectorAll("[data-service-index]").forEach(field => {
    field.addEventListener("input", updateConfiguredService);
    field.addEventListener("change", updateConfiguredService);
  });
  document.querySelectorAll("[data-add-service]").forEach(button => button.addEventListener("click", () => {
    state.settings.services.push(`New Service ${state.settings.services.length + 1}`);
    render();
  }));
  document.querySelectorAll("[data-remove-service]").forEach(button => button.addEventListener("click", () => {
    const removed = state.settings.services.splice(Number(button.dataset.removeService), 1)[0];
    removeServiceFromTeams(removed);
    saveServiceTeams();
    render();
  }));
  document.querySelectorAll("[data-location-city-index]").forEach(field => {
    field.addEventListener("input", updateLocationCity);
    field.addEventListener("change", updateLocationCity);
  });
  document.querySelectorAll("[data-location-areas-index]").forEach(field => {
    field.addEventListener("input", updateLocationAreas);
    field.addEventListener("change", updateLocationAreas);
  });
  document.querySelectorAll("[data-add-location-city]").forEach(button => button.addEventListener("click", () => {
    const key = `New City ${Object.keys(state.settings.serviceLocations).length + 1}`;
    state.settings.serviceLocations[key] = [];
    render();
  }));
  document.querySelectorAll("[data-remove-location-city]").forEach(button => button.addEventListener("click", () => {
    const city = Object.keys(state.settings.serviceLocations)[Number(button.dataset.removeLocationCity)];
    delete state.settings.serviceLocations[city];
    render();
  }));
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
  document.querySelectorAll("[data-member-index][data-member-field]").forEach(field => {
    field.addEventListener("input", updateTeamMemberField);
    field.addEventListener("change", updateTeamMemberField);
  });
  bindAvailabilityControls();
  bindBlockTimeControls();
  document.querySelectorAll("[data-add-member]").forEach(button => button.addEventListener("click", () => {
    state.serviceTeams[Number(button.dataset.addMember)].membersList.push({ name: "", surname: "", cell: "" });
    render();
  }));
  document.querySelectorAll("[data-remove-member]").forEach(button => button.addEventListener("click", () => {
    const [teamIndex, memberIndex] = button.dataset.removeMember.split(":").map(Number);
    const team = state.serviceTeams[teamIndex];
    team.membersList.splice(memberIndex, 1);
    syncTeamMembers(team);
    render();
  }));
  document.querySelectorAll("[data-team-service]").forEach(box => box.addEventListener("change", () => {
    const team = state.serviceTeams[Number(box.dataset.teamService)];
    const selected = new Set(team.serviceAbilityList || []);
    box.checked ? selected.add(box.value) : selected.delete(box.value);
    team.serviceAbilityList = [...selected];
    team.serviceAbility = team.serviceAbilityList.join(", ");
    render();
  }));
  document.querySelectorAll("[data-add-area]").forEach(button => button.addEventListener("click", () => {
    const team = state.serviceTeams[Number(button.dataset.addArea)];
    const area = team.customArea || `${team.areaCity}: ${team.areaNeighborhood}`;
    const selected = new Set(team.serviceAreasList || []);
    selected.add(area);
    team.serviceAreasList = [...selected];
    team.serviceAreas = team.serviceAreasList.join(", ");
    team.customArea = "";
    render();
  }));
  document.querySelectorAll("[data-remove-area]").forEach(button => button.addEventListener("click", () => {
    const [teamIndex, areaIndex] = button.dataset.removeArea.split(":").map(Number);
    const team = state.serviceTeams[teamIndex];
    team.serviceAreasList.splice(areaIndex, 1);
    team.serviceAreas = team.serviceAreasList.join(", ");
    render();
  }));
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
  document.querySelectorAll("[data-copy-team-link]").forEach(button => button.addEventListener("click", () => {
    copyTeamLink(button.dataset.copyTeamLink);
  }));
  bindCopyActions();
  document.querySelectorAll("[data-open-team-project]").forEach(box => {
    box.addEventListener("click", event => {
      if (event.target.closest("[data-copy-phone]")) return;
      openTeamProject(box.dataset.openTeamProject);
    });
    box.addEventListener("keydown", event => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openTeamProject(box.dataset.openTeamProject);
    });
  });
  document.querySelectorAll("[data-edit-team]").forEach(button => button.addEventListener("click", () => {
    state.editingTeamIndex = Number(button.dataset.editTeam);
    render();
  }));
  document.querySelectorAll("[data-back-teams]").forEach(button => button.addEventListener("click", () => {
    state.selectedTeamIndex = null;
    state.editingTeamIndex = null;
    render();
  }));
  bindCalendarControls();
  document.querySelectorAll("[data-report-manager]").forEach(button => button.addEventListener("click", () => {
    showToast("Reports coming next: week and month team views.");
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
  document.getElementById("openEstimate")?.addEventListener("click", () => {
    state.mobileMenuOpen = false;
    go("/estimate");
  });
  document.getElementById("saveProject")?.addEventListener("click", () => {
    saveAll();
    showToast("Project changes saved locally.");
  });
}

function bindEstimate() {
  document.getElementById("backOffice")?.addEventListener("click", () => go("/"));
  document.querySelectorAll("[data-step]").forEach(button => button.addEventListener("click", () => {
    if (state.step === "property" && button.dataset.step === "services" && !isServicedLocation()) {
      state.areaUnavailable = true;
      render();
      return;
    }
    state.step = button.dataset.step;
    render();
  }));
  document.querySelectorAll("[data-close-area-unavailable]").forEach(button => button.addEventListener("click", () => {
    state.areaUnavailable = false;
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
  document.querySelectorAll("[data-open-photo]").forEach(button => button.addEventListener("click", () => {
    document.getElementById(button.dataset.openPhoto)?.click();
  }));
  document.querySelectorAll("[data-photo-area]").forEach(field => field.addEventListener("change", async () => {
    state.form.areas[Number(field.dataset.photoArea)].photos = await readPhotos([...field.files].slice(0, 3));
    render();
  }));
  document.getElementById("useLocation")?.addEventListener("click", useCurrentLocation);
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
    applyProjectStatus(selectedProject(), "Quote Accepted");
    saveAll();
    state.step = "accepted";
    render();
  });
  document.querySelectorAll("[data-open-project]").forEach(button => button.addEventListener("click", () => go(`/project/${button.dataset.openProject}`)));
  document.querySelectorAll("[data-action]").forEach(button => button.addEventListener("click", () => showToast(button.dataset.action)));
}

function bindPublicProject(project) {
  bindCopyActions();
  document.querySelectorAll("[data-public-action]").forEach(button => button.addEventListener("click", () => {
    if (button.dataset.publicAction === "Quote accepted") {
      applyProjectStatus(project, "Quote Accepted");
      saveAll();
      render();
      return;
    }
    showToast(button.dataset.publicAction);
  }));
}

function bindTeamPortal(teamIndex) {
  bindCopyActions();
  bindCalendarControls();
  bindBlockTimeControls();
  document.querySelectorAll("[data-open-team-project]").forEach(button => button.addEventListener("click", event => {
    event.preventDefault();
    state.teamPortalProjectRef = button.dataset.openTeamProject;
    render();
  }));
  document.querySelectorAll("[data-close-team-project]").forEach(button => button.addEventListener("click", () => {
    state.teamPortalProjectRef = null;
    render();
  }));
  document.querySelectorAll("[data-team-project-action]").forEach(button => button.addEventListener("click", () => {
    const project = state.projects.find(item => item.reference === button.dataset.teamProjectRef);
    if (!project) return;
    if (button.dataset.teamProjectAction === "accept") {
      project.teamAccepted = true;
      project.teamDecision = "Accepted";
      if (project.status === "Scheduled") project.status = "Team Assigned";
      showToast("Project accepted.");
    }
    if (button.dataset.teamProjectAction === "move") {
      project.teamDecision = "Move Requested";
      project.teamDecisionNote = "Team requested a new time.";
      showToast("Move request sent to admin.");
    }
    if (button.dataset.teamProjectAction === "reject") {
      const reason = document.querySelector("[data-team-project-reject-reason]")?.value;
      if (!reason) {
        showToast("Choose a reject reason first.");
        return;
      }
      project.teamDecision = "Rejected";
      project.teamDecisionNote = reason;
      showToast("Project rejected and sent to admin.");
    }
    saveAll();
    state.teamPortalProjectRef = null;
    render();
  }));
}

function bindAvailabilityControls() {
  document.querySelectorAll("[data-availability-day][data-availability-field]").forEach(field => {
    field.addEventListener("input", updateAvailabilityField);
    field.addEventListener("change", updateAvailabilityField);
  });
}

function bindBlockTimeControls() {
  document.querySelectorAll("[data-toggle-block-time]").forEach(button => button.addEventListener("click", () => {
    state.calendarBlockMode = !state.calendarBlockMode;
    state.calendarBlockDate = null;
    render();
  }));
  document.querySelectorAll("[data-calendar-block-day]").forEach(day => day.addEventListener("click", event => {
    if (event.target.closest("[data-open-team-project]")) return;
    state.calendarBlockDate = day.dataset.calendarBlockDay;
    render();
  }));
  document.querySelectorAll("[data-calendar-block-field]").forEach(field => {
    field.addEventListener("input", updateCalendarBlockForm);
    field.addEventListener("change", updateCalendarBlockForm);
  });
  document.querySelectorAll("[data-save-calendar-block]").forEach(button => button.addEventListener("click", () => {
    saveCalendarBlock(Number(button.dataset.saveCalendarBlock));
    saveServiceTeams();
    state.calendarBlockMode = false;
    state.calendarBlockDate = null;
    state.calendarBlockForm = blankCalendarBlock();
    showToast("Time blocked.");
    render();
  }));
  document.querySelectorAll("[data-cancel-calendar-block]").forEach(button => button.addEventListener("click", () => {
    state.calendarBlockMode = false;
    state.calendarBlockDate = null;
    state.calendarBlockForm = blankCalendarBlock();
    render();
  }));
}

function bindCalendarControls() {
  document.querySelectorAll("[data-calendar-mode]").forEach(button => button.addEventListener("click", () => {
    state.teamCalendarMode = button.dataset.calendarMode;
    if (state.teamCalendarMode === "today") state.teamCalendarStart = todayKey();
    else state.teamCalendarStart = weekStartKey(parseDate(state.teamCalendarStart));
    render();
  }));
  document.querySelectorAll("[data-calendar-shift]").forEach(button => button.addEventListener("click", () => {
    const shift = Number(button.dataset.calendarShift);
    const base = parseDate(state.teamCalendarStart);
    base.setDate(base.getDate() + shift * 7);
    state.teamCalendarStart = weekStartKey(base);
    state.teamCalendarMode = "week";
    render();
  }));
}

function bindCopyActions() {
  document.querySelectorAll("[data-copy-phone]").forEach(button => button.addEventListener("click", () => copyPhoneNumber(button.dataset.copyPhone)));
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
  if (event.target.dataset.group === "property" && event.target.dataset.field === "city") {
    const areas = activeServiceLocations()[event.target.value] || [];
    if (areas.length && !areas.includes(state.form.property.suburb)) state.form.property.suburb = "";
    if (event.type === "change") render();
  }
  if (event.target.dataset.group === "customer" && event.target.dataset.field === "cell") {
    hydrateCustomerFromCell(event.target.value);
  }
}

function useCurrentLocation() {
  if (!navigator.geolocation) {
    showToast("Location is not available. Paste a map link instead.");
    return;
  }
  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    state.form.property.mapsLink = `https://maps.google.com/?q=${latitude},${longitude}`;
    showToast("Location added.");
    render();
  }, () => showToast("Could not access location. Paste a map link instead."), { enableHighAccuracy: true, timeout: 10000 });
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

function updateFormLinkField(event) {
  const link = state.settings.quoteForm.links[Number(event.target.dataset.formLinkIndex)];
  link[event.target.dataset.formLinkField] = event.target.value;
}

function updateConfiguredService(event) {
  const previous = state.settings.services[Number(event.target.dataset.serviceIndex)];
  const next = event.target.value;
  state.settings.services[Number(event.target.dataset.serviceIndex)] = next;
  state.serviceTeams.forEach(team => {
    if (!team.serviceAbilityList?.includes(previous)) return;
    team.serviceAbilityList = team.serviceAbilityList.map(service => service === previous ? next : service).filter(Boolean);
    team.serviceAbility = team.serviceAbilityList.join(", ");
  });
  saveServiceTeams();
}

function updateLocationCity(event) {
  const index = Number(event.target.dataset.locationCityIndex);
  const oldCity = Object.keys(state.settings.serviceLocations)[index];
  const nextCity = event.target.value.trim() || oldCity;
  if (oldCity === nextCity) return;
  const entries = Object.entries(state.settings.serviceLocations);
  entries[index] = [nextCity, entries[index][1]];
  state.settings.serviceLocations = Object.fromEntries(entries);
}

function updateLocationAreas(event) {
  const city = Object.keys(state.settings.serviceLocations)[Number(event.target.dataset.locationAreasIndex)];
  state.settings.serviceLocations[city] = event.target.value.split(",").map(area => area.trim()).filter(Boolean);
}

function removeServiceFromTeams(service) {
  state.serviceTeams.forEach(team => {
    team.serviceAbilityList = (team.serviceAbilityList || []).filter(item => item !== service);
    team.serviceAbility = team.serviceAbilityList.join(", ");
  });
}

function updateTeamField(event) {
  const team = state.serviceTeams[Number(event.target.dataset.teamIndex)];
  const field = event.target.dataset.teamField;
  team[field] = event.target.value;
  if (field === "name") team.id = slugifyTeam(team.name);
  if (field === "areaCity") {
    team.areaNeighborhood = (southAfricanAreas[team.areaCity] || [])[0] || "";
    team.customArea = "";
    render();
  }
}

function updateTeamMemberField(event) {
  const team = state.serviceTeams[Number(event.target.dataset.teamIndex)];
  const member = team.membersList[Number(event.target.dataset.memberIndex)];
  member[event.target.dataset.memberField] = event.target.value;
  syncTeamMembers(team);
}

function updateAvailabilityField(event) {
  const team = state.serviceTeams[Number(event.target.dataset.teamIndex)];
  const day = event.target.dataset.availabilityDay;
  const field = event.target.dataset.availabilityField;
  team.availability[day] = team.availability[day] || { ...defaultAvailability[day] };
  team.availability[day][field] = field === "enabled" ? event.target.checked : event.target.value;
  saveServiceTeams();
}

function updateCalendarBlockForm(event) {
  const field = event.target.dataset.calendarBlockField;
  state.calendarBlockForm[field] = event.target.type === "checkbox" ? event.target.checked : event.target.value;
}

function copyTeamLink(path) {
  const url = toAbsoluteUrl(path);
  copyText(url, "Team owner link copied.");
}

function copyPhoneNumber(number) {
  const value = String(number || "").trim();
  if (!normalizeCell(value)) {
    showToast("No cell number to copy.");
    return;
  }
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(value).then(() => showToast("Cell number copied."), () => showToast(value));
    return;
  }
  showToast(value);
}

function copyText(value, message) {
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(value).then(() => showToast(message), () => showToast(value));
    return;
  }
  showToast(value);
}

function openTeamProject(reference) {
  state.selectedRef = reference;
  state.officeTab = "overview";
  state.selectedTeamIndex = null;
  state.editingTeamIndex = null;
  render();
}

function syncTeamMembers(team) {
  team.members = (team.membersList || []).map(item => {
    const name = [item.name, item.surname].filter(Boolean).join(" ");
    return item.cell ? `${name} (${item.cell})`.trim() : name;
  }).filter(Boolean).join(", ");
}

function slugifyTeam(name) {
  const slug = String(name || "new-team").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  return `team-${slug || "new-team"}`;
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
    scheduledTime: "09:00",
    source: estimateSource(),
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
  let load = waste === "1-2 dustbins" ? "L2" : waste === "Full bakkie load" || waste === "More" ? "L4" : waste === "Half bakkie load" || waste === "Unsure" || waste === "Not sure" ? "L3" : "L1";
  let complexity = access === "Difficult" && heavy ? "D" : access === "Difficult" || overgrown === "Heavy" ? "C" : access === "Moderate" || overgrown === "Moderate" ? "B" : "A";
  return { time, load, complexity };
}

function calculatePrice(rating, form) {
  const pricing = state.settings.pricing;
  const time = pricing.time[rating.time] || 0;
  const load = pricing.load[rating.load] || 0;
  const waste = pricing.waste[wasteRatingForAnswer(form.estimateAnswers.waste)] || 0;
  const complexity = pricing.complexity[rating.complexity] || 0;
  const urgent = form.estimateAnswers.urgency === "ASAP" ? pricing.urgentAsap : 0;
  const areas = Math.max(0, form.areas.length - 1) * pricing.extraArea;
  return time + load + waste + complexity + urgent + areas;
}

function wasteRatingForAnswer(answer) {
  if (answer?.startsWith("No removal")) return "W0";
  if (answer === "1-2 dustbins") return "W1";
  if (answer === "Half bakkie load") return "W2";
  if (answer === "Full bakkie load") return "W3";
  if (answer === "More") return "W4";
  if (answer === "Unsure" || answer === "Not sure") return "W5";
  return "W5";
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
    scheduledTime: "09:00",
    createdAt: new Date().toISOString(),
  };
}

function officeTab(tab, label) {
  const alert = tab === "notifications" && newRequestCount() > 0;
  return `<button class="${state.officeTab === tab ? "active" : ""}" data-office-tab="${tab}"><span class="nav-icon ${tab === "notifications" ? "bell-icon" : ""} ${alert ? "has-alert" : ""}">${navIcon(tab)}</span>${label}</button>`;
}

function navIcon(tab) {
  return {
    notifications: bellIcon(),
    overview: "⌂",
    pipeline: "▦",
    quote: "R",
    portal: "◉",
    teams: "T",
    settings: "S",
  }[tab] || "•";
}

function bellIcon() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></svg>`;
}

function metric(label, value) {
  return `<div class="ops-metric"><span>${label}</span><strong>${value}</strong></div>`;
}

function queueRow(project) {
  return `
    <button class="queue-row ${state.selectedRef === project.reference ? "active" : ""}" data-select-project="${project.reference}">
      <span><strong>${project.reference}</strong><small>${project.customer.firstName} ${project.customer.lastName} · ${project.property.suburb} ${teamBadge(project.team)}</small></span>
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

function teamInput(label, index, field, value, type = "text") {
  return `<label class="field"><span class="field-label">${label}</span><input type="${type}" value="${escapeHtml(value || "")}" data-team-index="${index}" data-team-field="${field}" /></label>`;
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
  const display = label === "Cell" ? phoneCopyButton(value || "Not supplied") : escapeHtml(String(value || "Not supplied"));
  return `<div class="data-item"><span>${label}</span><strong>${display}</strong></div>`;
}

function teamBadge(teamName) {
  if (!teamName || teamName === "Unassigned") return `<span class="team-badge muted"><span></span>Unassigned</span>`;
  const team = state.serviceTeams.find(item => item.name === teamName);
  const color = team?.color || teamColorOptions[0].value;
  return `<span class="team-badge" style="--team-color: ${escapeHtml(color)}"><span></span>${escapeHtml(teamName)}</span>`;
}

function settingLine(label, value) {
  return `<div class="setting-line"><span>${label}:</span><strong>${escapeHtml(String(value || "Not supplied"))}</strong></div>`;
}

function teamLine(label, value, isHtml = false) {
  return `<div class="team-line"><span>${label}:</span><strong>${isHtml ? value : escapeHtml(String(value || "Not supplied"))}</strong></div>`;
}

function teamLinkLine(label, path) {
  return `<div class="team-line"><span>${label}:</span><strong><a href="${escapeHtml(path)}" target="_blank" rel="noopener noreferrer">${escapeHtml(path)}</a></strong></div>`;
}

function calendarIcon() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/></svg>`;
}

function reportIcon() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V5a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/><path d="M14 3v6h6M8 17v-4M12 17v-7M16 17v-2"/></svg>`;
}

function teamMembersLine(label, team, fallback) {
  const members = team.membersList || [];
  if (!members.length) return teamLine(label, fallback || "Not set");
  const html = members.map(member => {
    const name = [member.name, member.surname].filter(Boolean).join(" ") || "Team member";
    const cell = member.cell ? phoneCopyButton(member.cell) : `<span class="muted-inline">No cell</span>`;
    return `<span class="member-copy-item">${escapeHtml(name)} ${cell}</span>`;
  }).join("");
  return `<div class="team-line team-member-line"><span>${label}:</span><strong>${html}</strong></div>`;
}

function servicePills(items) {
  const list = Array.isArray(items) ? items : String(items || "").split(",").map(item => item.trim()).filter(Boolean);
  if (!list.length) return `<div class="team-service-pills"><span>No service ability set</span></div>`;
  return `<div class="team-service-pills">${list.map(item => `<span>${escapeHtml(item)}</span>`).join("")}</div>`;
}

function phoneCopyButton(number) {
  const value = String(number || "").trim();
  if (!normalizeCell(value)) return escapeHtml(value || "Not supplied");
  return `<button type="button" class="copy-phone" data-copy-phone="${escapeHtml(value)}" title="Copy cell number">${escapeHtml(value)}</button>`;
}

function areaTile(area) {
  return `<article class="area-tile"><strong>${escapeHtml(area.name)}</strong><p>${escapeHtml(area.notes)}</p><div class="thumb-row">${area.photos.map(photo => `<img src="${photo.src}" alt="${escapeHtml(photo.name)}" />`).join("")}</div></article>`;
}

function projectName(project) {
  return project.selectedServices?.[0] || project.areas?.[0]?.name || project.reference;
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

function applyProjectStatus(project, status) {
  project.status = status;
  if (status === "Quote Verified") {
    project.quoteVerifiedAt = new Date().toISOString();
    project.customerQuoteReady = true;
  }
  if (status === "Quote Accepted") {
    project.quoteAcceptedAt = project.quoteAcceptedAt || new Date().toISOString();
    project.projectCreated = true;
  }
  if (status === "Project Review") project.reviewStartedAt = new Date().toISOString();
  if (status === "Completed") project.completedAt = project.completedAt || new Date().toISOString();
  if (status === "Cancelled") project.cancelledAt = project.cancelledAt || new Date().toISOString();
}

function pipelineStageForProject(project) {
  if (project.status === "Cancelled") return "cancelled";
  if (project.status === "Completed") return "completed";
  if (project.status === "Project Review") return "review";
  if (["Team Assigned", "Team On Route", "In Progress", "Scheduled"].includes(project.status)) return "upcoming";
  if (project.status === "Quote Accepted" && (!project.team || project.team === "Unassigned" || !project.scheduledDate)) return "allocation";
  if (project.status === "Quote Accepted") return "upcoming";
  if (project.status === "Quote Verified") return "quote";
  return "verification";
}

function syncSelectedProjectToPipelineStage() {
  const selected = selectedProject();
  state.pipelineStage = pipelineStageForProject(selected);
  if (pipelineProjects().some(project => project.reference === state.selectedRef)) return;
  const first = pipelineProjects()[0];
  if (first) state.selectedRef = first.reference;
}

function assignProjectToTeam(reference, teamIndex, date, time) {
  const project = state.projects.find(item => item.reference === reference);
  const team = state.serviceTeams[teamIndex];
  if (!project || !team) return;
  project.team = team.name;
  project.scheduledDate = date;
  project.scheduledTime = time;
  project.status = "Team Assigned";
  project.teamAccepted = false;
  project.teamDecision = "Pending";
  project.teamDecisionNote = "";
  project.teamAssignedAt = new Date().toISOString();
}

function filteredProjects() {
  const term = state.search.toLowerCase();
  return state.projects.filter(project => [project.reference, project.status, project.customer.firstName, project.customer.lastName, project.property.suburb].join(" ").toLowerCase().includes(term));
}

function pipelineProjects() {
  if (state.officeTab !== "pipeline") return filteredProjects();
  return filteredProjects().filter(project => pipelineStageForProject(project) === state.pipelineStage);
}

function renderPipelineStageTabs() {
  return `
    <div class="pipeline-stage-tabs">
      ${pipelineStages.map(stage => {
        const count = state.projects.filter(project => pipelineStageForProject(project) === stage.key).length;
        return `<button class="${state.pipelineStage === stage.key ? "active" : ""}" data-pipeline-stage-tab="${stage.key}"><span>${stage.label}</span><small>${count}</small></button>`;
      }).join("")}
    </div>
  `;
}

function projectsByStatus(list) {
  return state.projects.filter(project => list.includes(project.status));
}

function teamProjects(teamName, type) {
  const projects = state.projects.filter(project => project.team === teamName);
  const today = todayKey();
  if (type === "past") return projects.filter(project => project.status === "Completed");
  if (type === "today") return projects.filter(project => dateKey(project.scheduledDate) === today).sort(sortBySchedule);
  if (type === "upcoming") return projects.filter(project => project.status !== "Completed" && dateKey(project.scheduledDate) > today).sort(sortBySchedule);
  if (type === "planned") return projects.filter(project => project.status !== "Completed" && dateKey(project.scheduledDate) >= today).sort(sortBySchedule);
  if (type === "current") return projects.filter(project => dateKey(project.scheduledDate) === today).sort(sortBySchedule);
  return projects;
}

function sortBySchedule(a, b) {
  return dateKey(a.scheduledDate).localeCompare(dateKey(b.scheduledDate)) || String(a.scheduledTime || "").localeCompare(String(b.scheduledTime || "")) || a.reference.localeCompare(b.reference);
}

function dateKey(value) {
  if (value instanceof Date) {
    const offset = value.getTimezoneOffset();
    return new Date(value.getTime() - offset * 60000).toISOString().slice(0, 10);
  }
  return String(value || "9999-12-31").slice(0, 10);
}

function todayKey() {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  return new Date(now.getTime() - offset * 60000).toISOString().slice(0, 10);
}

function parseDate(value) {
  const date = value instanceof Date ? new Date(value) : new Date(`${dateKey(value)}T00:00:00`);
  return Number.isNaN(date.getTime()) ? new Date() : date;
}

function weekStartKey(value) {
  const date = parseDate(value || new Date());
  const day = date.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  date.setDate(date.getDate() + diff);
  return dateKey(date);
}

function calendarVisibleDays() {
  if (state.teamCalendarMode === "today") return [parseDate(todayKey())];
  const start = parseDate(state.teamCalendarStart || weekStartKey(new Date()));
  return calendarDays.map((_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return date;
  });
}

function dayLabel(date) {
  return `${calendarDays[date.getDay() - 1]?.short || ""} ${date.getDate()}`;
}

function projectDurationHours(project) {
  return { T1: 2, T2: 4, T3: 8, T4: 16 }[project.rating?.time] || 2;
}

function addHours(time, hours) {
  const [hour, minute] = String(time || "09:00").split(":").map(Number);
  const total = hour * 60 + (minute || 0) + Math.round(hours * 60);
  return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
}

function timeToHours(time) {
  const [hour, minute] = String(time || "00:00").split(":").map(Number);
  return (hour || 0) + (minute || 0) / 60;
}

function laterTime(first, second) {
  if (!first) return second || "08:00";
  if (!second) return first;
  return timeToHours(first) > timeToHours(second) ? first : second;
}

function firstAvailableSlot(team, date, project) {
  const key = dateKey(date);
  const dayKey = calendarDays[date.getDay() - 1]?.key;
  const availability = team.availability?.[dayKey] || defaultAvailability[dayKey];
  if (!availability?.enabled) return null;
  const duration = projectDurationHours(project);
  const busy = [
    ...state.projects
      .filter(item => item.team === team.name && item.reference !== project.reference && item.status !== "Completed")
      .flatMap(item => bookingSegmentsForProject(team, item))
      .filter(segment => segment.date === key)
      .map(segment => ({ start: segment.start, end: segment.end })),
    ...(team.blockedTimes || []).filter(block => block.date === key).map(block => ({ start: block.start, end: block.end })),
  ].sort((a, b) => timeToHours(a.start) - timeToHours(b.start));
  let candidate = availability.start;
  for (const item of busy) {
    if (timeToHours(candidate) + duration <= timeToHours(item.start)) return { start: candidate, end: addHours(candidate, duration) };
    if (timeToHours(item.end) > timeToHours(candidate)) candidate = item.end;
  }
  return timeToHours(candidate) + duration <= timeToHours(availability.end) ? { start: candidate, end: addHours(candidate, duration) } : null;
}

function addDays(value, days) {
  const date = parseDate(value);
  date.setDate(date.getDate() + days);
  return dateKey(date);
}

function saveCalendarBlock(teamIndex) {
  const team = state.serviceTeams[teamIndex];
  if (!team || !state.calendarBlockDate) return;
  const form = state.calendarBlockForm;
  const repeatCount = form.recurring ? (form.repeatWeekly ? 8 : 4) : 1;
  const blocks = Array.from({ length: repeatCount }, (_, index) => ({
    date: addDays(state.calendarBlockDate, index * 7),
    start: form.start || "12:00",
    end: form.end || "13:00",
    reason: form.reason || "Unavailable",
  }));
  team.blockedTimes = [...(team.blockedTimes || []), ...blocks].sort((a, b) => dateKey(a.date).localeCompare(dateKey(b.date)) || String(a.start || "").localeCompare(String(b.start || "")));
}

function countStatus(status) {
  return state.projects.filter(project => project.status === status).length;
}

function projectNotifications() {
  return state.projects
    .filter(project => ["Request Submitted", "Estimate Generated"].includes(project.status))
    .map(project => ({
      kind: "project",
      type: "New Project",
      reference: project.reference,
      title: `${projectName(project)} - ${project.reference}`,
      detail: `${project.customer.firstName} ${project.customer.lastName} submitted a clean-up request for ${project.property.suburb || project.property.city || "their property"}.`,
      meta: `${project.status} · ${money(project.price)}`,
    }));
}

function teamMovementNotifications() {
  return state.projects
    .filter(project => ["Scheduled", "Team Assigned", "Team On Route", "In Progress"].includes(project.status))
    .slice()
    .sort(sortBySchedule)
    .map(project => ({
      kind: "team",
      type: "Team Update",
      reference: project.reference,
      team: project.team || "Unassigned",
      title: `${project.team || "Unassigned"} · ${project.status}`,
      detail: `${projectName(project)} for ${project.customer.firstName} ${project.customer.lastName} in ${project.property.suburb || project.property.city || "area pending"}.`,
      meta: `${project.scheduledDate || "No date set"} · ${project.reference}`,
    }));
}

function notificationCount() {
  return projectNotifications().length + teamMovementNotifications().length;
}

function newRequestCount() {
  return projectNotifications().length;
}

function getProjectFromPath() {
  const match = window.location.pathname.match(/\/project\/(CGG-\d{4}-\d{5})/);
  if (!match) return null;
  return state.projects.find(project => project.reference === match[1]) || state.projects[0];
}

function getTeamFromPath() {
  const match = window.location.pathname.match(/\/team\/([a-z0-9-]+)/);
  if (!match) return null;
  const index = state.serviceTeams.findIndex(team => team.id === match[1]);
  if (index < 0) return null;
  return { team: state.serviceTeams[index], index };
}

function teamPath(team) {
  return `/team/${team.id || slugifyTeam(team.name)}`;
}

function teamShareUrl(team) {
  return toAbsoluteUrl(teamPath(team));
}

function toAbsoluteUrl(path) {
  return `${window.location.origin}${path}`;
}

function estimateSource() {
  return new URLSearchParams(window.location.search).get("source") || state.settings.quoteForm.defaultSource || "Internal";
}

function activeServices() {
  return (state.settings.services?.length ? state.settings.services : services).map(service => String(service || "").trim()).filter(Boolean);
}

function activeTeamServices() {
  return activeServices().filter(service => service.toLowerCase() !== "not sure");
}

function activeServiceLocations() {
  const locations = state.settings.serviceLocations || defaultSettings.serviceLocations;
  return Object.fromEntries(Object.entries(locations).map(([city, areas]) => [city, (areas || []).map(area => String(area || "").trim()).filter(Boolean)]).filter(([city]) => city.trim()));
}

function isServicedLocation() {
  const city = String(state.form.property.city || "").trim();
  const suburb = String(state.form.property.suburb || "").trim();
  const locations = activeServiceLocations();
  if (!locations[city]) return false;
  return !locations[city].length || locations[city].includes(suburb);
}

function formattedTeamMembers(team) {
  return (team.membersList || []).map(member => {
    const name = [member.name, member.surname].filter(Boolean).join(" ");
    return member.cell ? `${name} (${member.cell})`.trim() : name;
  }).filter(Boolean);
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
    services: Array.isArray(saved.services) && saved.services.length ? saved.services : [...defaultSettings.services],
    serviceLocations: saved.serviceLocations && Object.keys(saved.serviceLocations).length ? saved.serviceLocations : { ...defaultSettings.serviceLocations },
    banking: { ...defaultSettings.banking, ...(saved.banking || {}) },
    pricing: {
      ...defaultSettings.pricing,
      ...(saved.pricing || {}),
      time: { ...defaultSettings.pricing.time, ...((saved.pricing || {}).time || {}) },
      load: { ...defaultSettings.pricing.load, ...((saved.pricing || {}).load || {}) },
      waste: normalizeWastePricing((saved.pricing || {}).waste || {}),
      complexity: { ...defaultSettings.pricing.complexity, ...((saved.pricing || {}).complexity || {}) },
    },
    quoteForm: {
      ...defaultSettings.quoteForm,
      ...(saved.quoteForm || {}),
      links: (saved.quoteForm || {}).links || defaultSettings.quoteForm.links,
    },
  };
}

function saveSettings() {
  localStorage.setItem("cggSettings", JSON.stringify(state.settings));
}

function normalizeWastePricing(savedWaste) {
  const waste = { ...defaultSettings.pricing.waste, ...savedWaste };
  if (savedWaste.W2 === 280) waste.W2 = defaultSettings.pricing.waste.W2;
  if (savedWaste.W3 === 520) waste.W3 = defaultSettings.pricing.waste.W3;
  if (savedWaste.W4 === 900) waste.W4 = defaultSettings.pricing.waste.W4;
  return waste;
}

function loadServiceTeams() {
  const saved = JSON.parse(localStorage.getItem("cggServiceTeams") || "[]");
  return (saved.length ? saved : defaultServiceTeams).map(normalizeTeam);
}

function normalizeTeam(team) {
  const id = team.id || `team-${String(team.name || "new-team").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
  const membersList = team.membersList || String(team.members || "").split(",").map((member) => {
    const parts = member.trim().split(" ").filter(Boolean);
    return { name: parts[0] || "", surname: parts.slice(1).join(" "), cell: "" };
  }).filter((member) => member.name || member.surname || member.cell);
  return {
    id,
    name: team.name || "New Team",
    mainMember: team.mainMember || "",
    ownerContact: team.ownerContact || "",
    color: team.color || teamColorOptions[0].value,
    members: team.members || "",
    membersList,
    serviceAbility: team.serviceAbility || "",
    serviceAbilityList: team.serviceAbilityList || String(team.serviceAbility || "").split(",").map((item) => item.trim()).filter(Boolean),
    serviceAreas: team.serviceAreas || "",
    serviceAreasList: team.serviceAreasList || String(team.serviceAreas || "").split(",").map((item) => item.trim()).filter(Boolean),
    areaCity: team.areaCity || Object.keys(southAfricanAreas)[0],
    areaNeighborhood: team.areaNeighborhood || southAfricanAreas[team.areaCity || Object.keys(southAfricanAreas)[0]][0],
    customArea: team.customArea || "",
    availability: mergeAvailability(team.availability),
    blockedTimes: team.blockedTimes || [],
  };
}

function mergeAvailability(saved = {}) {
  return Object.fromEntries(calendarDays.map(day => [day.key, { ...defaultAvailability[day.key], ...(saved[day.key] || {}) }]));
}

function saveServiceTeams() {
  state.serviceTeams.forEach(team => {
    team.id = team.id || slugifyTeam(team.name);
    syncTeamMembers(team);
  });
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
    color: teamColorOptions[state.serviceTeams.length % teamColorOptions.length].value,
    members: "",
    membersList: [],
    serviceAbility: "",
    serviceAbilityList: [],
    serviceAreas: "",
    serviceAreasList: [],
    areaCity: "Cape Town",
    areaNeighborhood: "Durbanville",
    customArea: "",
    availability: mergeAvailability(),
    blockedTimes: [],
  };
}

function blankCalendarBlock() {
  return {
    start: "12:00",
    end: "13:00",
    reason: "Unavailable",
    recurring: false,
    repeatWeekly: false,
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
