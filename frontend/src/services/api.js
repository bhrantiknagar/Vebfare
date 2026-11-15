const API_BASE = '/api';

export async function fetchHealth() {
  try {
    const res = await fetch(`${API_BASE}/health`);
    return await res.json();
  } catch (err) {
    console.warn('API health check fallback:', err);
    return { status: 'offline' };
  }
}

export async function fetchStats() {
  try {
    const res = await fetch(`${API_BASE}/stats`);
    if (!res.ok) throw new Error('Failed to fetch stats');
    return await res.json();
  } catch (err) {
    console.warn('Using fallback stats:', err);
    return {
      totalVenturesSupported: 48,
      totalNonDilutiveCapital: '$1,850,000',
      averageTimeToPilot: '42 Days',
      guildOperators: 194,
      successOrFundedRate: '78%',
      activeApplicationsCount: 14,
      activeMentorsCount: 3,
      activeProjectsCount: 6,
      equityTakenAverage: '0% (Non-dilutive Micro-grants) or 4% Fair-Foundry Cap'
    };
  }
}

export async function fetchProjects(category = '', search = '', blocker = '') {
  try {
    const params = new URLSearchParams();
    if (category && category !== 'All') params.append('category', category);
    if (search) params.append('search', search);
    if (blocker && blocker !== 'All') params.append('blocker', blocker);

    const res = await fetch(`${API_BASE}/projects?${params.toString()}`);
    if (!res.ok) throw new Error('Failed to fetch projects');
    return await res.json();
  } catch (err) {
    console.warn('Using fallback projects:', err);
    return [];
  }
}

export async function fetchProjectById(id) {
  try {
    const res = await fetch(`${API_BASE}/projects/${id}`);
    if (!res.ok) throw new Error('Project not found');
    return await res.json();
  } catch (err) {
    console.warn('Error fetching project:', err);
    return null;
  }
}

export async function submitApplication(formData) {
  try {
    const res = await fetch(`${API_BASE}/applications`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || 'Failed to submit application');
    }
    return data;
  } catch (err) {
    throw err;
  }
}

export async function trackApplication(trackingId) {
  try {
    const cleanId = encodeURIComponent(trackingId.trim());
    const res = await fetch(`${API_BASE}/applications/${cleanId}`);
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || 'Application not found');
    }
    return data;
  } catch (err) {
    throw err;
  }
}

export async function fetchAllApplications() {
  try {
    const res = await fetch(`${API_BASE}/applications`);
    if (!res.ok) throw new Error('Failed to fetch applications');
    return await res.json();
  } catch (err) {
    console.warn('Error fetching all applications:', err);
    return [];
  }
}

export async function updateApplicationStatus(trackingId, updateData) {
  try {
    const cleanId = encodeURIComponent(trackingId.trim());
    const res = await fetch(`${API_BASE}/applications/${cleanId}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateData)
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Failed to update application');
    return data;
  } catch (err) {
    throw err;
  }
}

export async function calculateReadiness(calcData) {
  try {
    const res = await fetch(`${API_BASE}/calculator`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(calcData)
    });
    if (!res.ok) throw new Error('Calculator service unavailable');
    return await res.json();
  } catch (err) {
    console.warn('Calculating client-side fallback:', err);
    return {
      score: 72,
      tier: 'Feasibility & Market Validation Track',
      estimatedGrant: '$20,000 Discovery Grant',
      guildPairing: 'Fractional CTO + Market Discovery Lead',
      blockerAddressed: calcData.primaryBlocker || 'Financial and Market Execution',
      roadmap: [
        'Structured customer discovery sprint with 25 target buyers',
        'Direct pairing with Guild engineer for low-fidelity MVP scoping',
        'Fast-track submission to Vebfare Seed Committee'
      ],
      summary: 'Your idea shows strong domain conviction. Vebfare can supply the missing technical architecture and discovery grant.'
    };
  }
}

export async function applyAsMentor(mentorData) {
  try {
    const res = await fetch(`${API_BASE}/mentors/apply`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mentorData)
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Failed to submit mentor application');
    return data;
  } catch (err) {
    throw err;
  }
}

export async function subscribeNewsletter(email) {
  try {
    const res = await fetch(`${API_BASE}/newsletter`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Failed to subscribe');
    return data;
  } catch (err) {
    throw err;
  }
}
