const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Helper to read and write JSON files
const dataDir = path.join(__dirname, 'data');
const readFile = (filename, defaultValue = []) => {
  try {
    const filePath = path.join(dataDir, filename);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify(defaultValue, null, 2));
      return defaultValue;
    }
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content || '[]');
  } catch (err) {
    console.error(`Error reading ${filename}:`, err);
    return defaultValue;
  }
};

const writeFile = (filename, data) => {
  try {
    const filePath = path.join(dataDir, filename);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error(`Error writing ${filename}:`, err);
    return false;
  }
};

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Vebfare Platform API',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Platform Statistics
app.get('/api/stats', (req, res) => {
  const projects = readFile('projects.json');
  const applications = readFile('applications.json');
  const mentors = readFile('mentors.json');

  res.json({
    totalVenturesSupported: 48,
    totalNonDilutiveCapital: '$1,850,000',
    averageTimeToPilot: '42 Days',
    guildOperators: 194,
    successOrFundedRate: '78%',
    activeApplicationsCount: applications.length,
    activeMentorsCount: mentors.length,
    activeProjectsCount: projects.length,
    equityTakenAverage: '0% (Non-dilutive Micro-grants) or 4% Fair-Foundry Cap'
  });
});

// Ventures / Projects Showcase
app.get('/api/projects', (req, res) => {
  const { category, search, blocker } = req.query;
  let list = readFile('projects.json');

  if (category && category !== 'All') {
    list = list.filter(p => p.category.toLowerCase().includes(category.toLowerCase()));
  }

  if (blocker && blocker !== 'All') {
    list = list.filter(p => p.blocker.toLowerCase().includes(blocker.toLowerCase()));
  }

  if (search) {
    const q = search.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.founder.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  res.json(list);
});

app.get('/api/projects/:id', (req, res) => {
  const list = readFile('projects.json');
  const project = list.find(p => p.id === req.params.id);
  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }
  res.json(project);
});

// Mentors & Guild
app.get('/api/mentors', (req, res) => {
  const mentors = readFile('mentors.json');
  res.json(mentors);
});

app.post('/api/mentors/apply', (req, res) => {
  const { name, email, role, expertise, linkedIn, motivation, hoursPerWeek } = req.body;

  if (!name || !email || !expertise) {
    return res.status(400).json({ error: 'Name, email, and primary expertise are required.' });
  }

  const applications = readFile('mentor_applicants.json', []);
  const newApplicant = {
    id: `mentor_${Date.now()}`,
    name,
    email,
    role: role || 'Operator / Angel',
    expertise,
    linkedIn: linkedIn || '',
    motivation: motivation || '',
    hoursPerWeek: hoursPerWeek || '2-4 hours',
    createdAt: new Date().toISOString()
  };

  applications.push(newApplicant);
  writeFile('mentor_applicants.json', applications);

  res.status(201).json({
    success: true,
    message: 'Thank you for stepping up to back frontline founders. Our Guild Lead will reach out within 48 hours.',
    applicant: newApplicant
  });
});

// Idea Application Submission
app.post('/api/applications', (req, res) => {
  const {
    founderName,
    founderEmail,
    founderPhone,
    founderRole,
    founderLocation,
    ideaTitle,
    category,
    problemStatement,
    solutionSummary,
    targetAudience,
    primaryBlocker,
    estimatedNeed,
    existingValidation,
    hasPrototypes
  } = req.body;

  if (!founderName || !founderEmail || !ideaTitle || !problemStatement || !primaryBlocker) {
    return res.status(400).json({
      error: 'Please complete all required fields: Founder Name, Email, Idea Title, Problem, and Primary Blocker.'
    });
  }

  const applications = readFile('applications.json');
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const currentYear = new Date().getFullYear();
  const trackingId = `VEB-${currentYear}-${randomSuffix}`;
  const timestampHash = crypto.createHash('sha256').update(`${ideaTitle}-${founderEmail}-${Date.now()}`).digest('hex').substring(0, 16);

  const newApplication = {
    trackingId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    status: 'Domain Blind Review',
    statusCode: 'screen_pending',
    currentStageIndex: 1,
    ipShieldHash: timestampHash,
    founderName,
    founderEmail,
    founderPhone: founderPhone || '',
    founderRole: founderRole || 'Frontline Innovator',
    founderLocation: founderLocation || 'Undisclosed',
    ideaTitle,
    category: category || 'General Innovation',
    primaryBlocker,
    estimatedNeed: estimatedNeed || '$25,000 Micro-grant + Fractional Tech Guild',
    problemStatement,
    solutionSummary: solutionSummary || '',
    targetAudience: targetAudience || 'Target customers identified',
    existingValidation: existingValidation || 'Personal direct domain observation',
    hasPrototypes: hasPrototypes || false,
    timeline: [
      {
        stage: 'Application Received & IP Shield Sealed',
        date: new Date().toISOString().split('T')[0],
        completed: true,
        note: `Sealed with SHA-256 IP timestamp #${timestampHash}. Confidentiality pledge activated.`
      },
      {
        stage: 'Domain Expert Blind Screen',
        date: 'In Progress (Target: 48 hrs)',
        completed: false,
        current: true,
        note: 'Assigned to Sector Lead for clinical/practical problem validation.'
      },
      {
        stage: 'Feasibility Sprint & Blocker Diagnostics',
        date: 'Upcoming',
        completed: false,
        note: 'Scoping the exact financial, engineering, or legal bridge required.'
      },
      {
        stage: 'Investment & Guild Committee Review',
        date: 'Upcoming',
        completed: false,
        note: 'Presentation of founder profile and feasibility roadmap to Grant Committee.'
      },
      {
        stage: 'Grant Disbursement & Guild Kickoff',
        date: 'Target within 14 Days',
        completed: false,
        note: 'Contract execution, micro-grant disbursement, and co-builder pairing.'
      }
    ],
    reviewerFeedback: 'Submission successfully received. Our domain reviewer has begun initial assessment. Bookmark your tracking code to view live stage updates.'
  };

  applications.unshift(newApplication);
  writeFile('applications.json', applications);

  res.status(201).json({
    success: true,
    trackingId,
    ipShieldHash: timestampHash,
    message: 'Your idea has been securely timestamped and submitted to the Vebfare Foundry.',
    application: newApplication
  });
});

// Application Tracker / Founder Lookup
app.get('/api/applications/:trackingId', (req, res) => {
  const queryId = req.params.trackingId.trim().toUpperCase();
  const applications = readFile('applications.json');
  const found = applications.find(a => a.trackingId.toUpperCase() === queryId);

  if (!found) {
    return res.status(404).json({
      error: `No application found for reference "${queryId}". Please verify your Tracking ID (format: VEB-2026-XXXX).`
    });
  }

  res.json(found);
});

// Interactive Idea Viability & Readiness Calculator
app.post('/api/calculator', (req, res) => {
  const {
    problemUrgency,
    marketClarity,
    primaryBlocker,
    validationState,
    commitment
  } = req.body;

  let baseScore = 40;

  // Problem urgency weight
  if (problemUrgency === 'acute') baseScore += 25;
  else if (problemUrgency === 'moderate') baseScore += 15;
  else baseScore += 5;

  // Market clarity
  if (marketClarity === 'clear_paying') baseScore += 20;
  else if (marketClarity === 'clear_untested') baseScore += 12;
  else baseScore += 4;

  // Validation state
  if (validationState === 'prototype_built') baseScore += 15;
  else if (validationState === 'interviews_done') baseScore += 12;
  else baseScore += 3;

  // Commitment
  if (commitment === 'full_time_ready') baseScore += 5;
  else baseScore += 3;

  // Clamp score between 20 and 96
  const score = Math.min(96, Math.max(25, baseScore));

  let tier = '';
  let estimatedGrant = '';
  let guildPairing = '';
  let roadmap = [];

  if (score >= 75) {
    tier = 'Foundry Cohort Sprint Ready';
    estimatedGrant = '$35,000 - $50,000 Non-dilutive Grant';
    guildPairing = 'Fractional CTO + Go-To-Market Specialist';
    roadmap = [
      'Fast-track 48-Hour Blind Review by Vebfare Sector Committee',
      'Immediate pairing with a Guild Architect to build MVP specification',
      'First tranche disbursement ($15,000) for rapid prototyping and user testing'
    ];
  } else if (score >= 50) {
    tier = 'Feasibility & Market Validation Track';
    estimatedGrant = '$15,000 - $25,000 Discovery Grant';
    guildPairing = 'Market Discovery Lead + Fractional Product Strategist';
    roadmap = [
      'Customer Discovery Sprint: Conducting 30 structured target customer interviews',
      'Competitive moat & unit economics mapping with our Financial Guild',
      'Graduation to Cohort Prototyping Sprint upon validation completion'
    ];
  } else {
    tier = 'Idea Incubation & Problem Framing Track';
    estimatedGrant = '$5,000 Feasibility Micro-Grant';
    guildPairing = 'Founder Mentor & Problem Definition Lead';
    roadmap = [
      'One-on-one problem framing session to sharpen target value proposition',
      'Legal & IP Shield orientation to safeguard your core insight',
      'Re-assessment for next month’s accelerated grant sprint'
    ];
  }

  res.json({
    score,
    tier,
    estimatedGrant,
    guildPairing,
    blockerAddressed: primaryBlocker || 'Financial and Market execution',
    roadmap,
    summary: `Your idea scored ${score}/100. Based on your inputs, Vebfare can eliminate the ${primaryBlocker || 'execution'} bottleneck by assigning a ${guildPairing} and considering you for a ${estimatedGrant}.`
  });
});

// Newsletter / Updates Subscription
app.post('/api/newsletter', (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  const subscribers = readFile('subscribers.json', []);
  if (!subscribers.find(s => s.email === email)) {
    subscribers.push({ email, subscribedAt: new Date().toISOString() });
    writeFile('subscribers.json', subscribers);
  }

  res.json({
    success: true,
    message: 'Thank you! You are subscribed to Vebfare founder briefings and grant announcements.'
  });
});

// Serve Frontend Static Files if built
const frontendDistPath = path.join(__dirname, '..', 'frontend', 'dist');
if (fs.existsSync(frontendDistPath)) {
  app.use(express.static(frontendDistPath));
  app.use((req, res, next) => {
    if (req.method === 'GET' && !req.path.startsWith('/api')) {
      return res.sendFile(path.join(frontendDistPath, 'index.html'));
    }
    next();
  });
}

// Start Server
app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`  Vebfare API Server running on port ${PORT}`);
  console.log(`  Health Check: http://localhost:${PORT}/api/health`);
  if (fs.existsSync(frontendDistPath)) {
    console.log(`  Frontend Served at: http://localhost:${PORT}`);
  }
  console.log(`===============================================`);
});
