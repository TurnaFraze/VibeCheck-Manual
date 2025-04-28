// --- Core Question Data ---
const legacyQuestions = [
  // Power & Purpose (PP)
  {
    principle: 'PP',
    text: "Direction: How clear and communicated is the overall direction and purpose of the business to the team?",
    options: [
      "Very clear and consistently reinforced.",
      "Generally understood but could be clearer.",
      "Focused primarily on immediate tasks and goals.",
      "Emphasizes the positive impact the business aims to have.",
      "Adaptable and evolves with new insights.",
      "Deeply connected to the core values of the business."
    ]
  },
  {
    principle: 'PP',
    text: "Influence: How comfortable do individuals feel influencing decisions or the direction of their work?",
    options: [
      "Only leadership has significant influence.",
      "Input is welcomed from various levels.",
      "Influence is primarily based on role and seniority.",
      "Influence is often tied to advocating for team well-being.",
      "Individuals are encouraged to propose new ideas.",
      "Influence is guided by ethical considerations."
    ]
  },
  {
    principle: 'PP',
    text: "Ambition: How would you describe the overall level of ambition and drive within the business?",
    options: [
      "Highly competitive and focused on growth.",
      "Driven by a desire to make a positive difference.",
      "Steady and focused on maintaining quality.",
      "Motivated by creating a supportive and thriving environment.",
      "Constantly seeking new challenges and improvements.",
      "Guided by a strong commitment to its mission."
    ]
  },
  // Wisdom & Adaptation (WA)
  {
    principle: 'WA',
    text: "Open-mindedness: How open is the business to new ideas and different perspectives?",
    options: [
      "Relies heavily on established methods.",
      "Considers new ideas but with careful evaluation.",
      "Actively seeks out diverse viewpoints.",
      "Values ideas that enhance team understanding.",
      "Embraces experimentation and learning from failures.",
      "Evaluates ideas against core principles."
    ]
  },
  {
    principle: 'WA',
    text: "Flexibility: How well does the business adapt to changing circumstances and unexpected challenges?",
    options: [
      "Resistant to deviation from established plans.",
      "Adapts when necessary but prefers stability.",
      "Agile and responds quickly to change.",
      "Prioritizes adapting in a way that supports the team.",
      "Sees change as an opportunity for innovation.",
      "Adapts while staying true to its identity."
    ]
  },
  {
    principle: 'WA',
    text: "Reflection: How often does the business take time to reflect on its processes, successes, and failures?",
    options: [
      "Rarely, focus is primarily on action.",
      "Occasional reviews and lessons learned.",
      "Regularly scheduled reflection periods.",
      "Reflection often centers on team dynamics and morale.",
      "Continuous learning and iterative improvement.",
      "Reflection tied to evaluating alignment with values."
    ]
  },
  // Connection & Impact (CI)
  {
    principle: 'CI',
    text: "Empathy: How well does the business understand and respond to the needs and feelings of its team members and customers?",
    options: [
      "Primarily focused on task completion.",
      "Acknowledges needs when explicitly stated.",
      "Actively seeks to understand and address concerns.",
      "Prioritizes creating a supportive and caring environment.",
      "Uses feedback to improve understanding.",
      "Empathy is a guiding principle in interactions."
    ]
  },
  {
    principle: 'CI',
    text: "Social Bonds: How strong are the relationships and sense of community within the team?",
    options: [
      "Primarily transactional and work-focused.",
      "Cordial but not deeply connected.",
      "Strong sense of camaraderie and mutual support.",
      "Team cohesion is actively fostered.",
      "Collaboration is key to innovation.",
      "Shared values contribute to strong bonds."
    ]
  },
  {
    principle: 'CI',
    text: "Positive Influence: How does the business strive to have a positive impact on its team, customers, and the wider community?",
    options: [
      "Focus is mainly on delivering products/services.",
      "Aware of its impact but doesn't actively pursue positive change.",
      "Makes efforts to be socially responsible.",
      "Impact on well-being is a key consideration.",
      "Seeks innovative ways to create positive change.",
      "Impact is measured against its mission and values."
    ]
  },
  // Action & Method (AM)
  {
    principle: 'AM',
    text: "Deliberation: How thoughtful and planned are the actions and processes within the business?",
    options: [
      "Often reactive and spontaneous.",
      "Generally planned but with room for improvisation.",
      "Highly structured and carefully considered.",
      "Planning includes consideration for team dynamics.",
      "Actions are driven by experimentation and data.",
      "Methods align with ethical and best practices."
    ]
  },
  {
    principle: 'AM',
    text: "Efficiency: How efficient and streamlined are the workflows and operations?",
    options: [
      "Often inefficient and prone to bottlenecks.",
      "Generally functional but could be improved.",
      "Optimized for productivity and speed.",
      "Efficiency is balanced with team well-being.",
      "Continuously seeking ways to improve processes.",
      "Efficiency supports the delivery of value."
    ]
  },
  {
    principle: 'AM',
    text: "Impulsiveness: How often are decisions or actions driven by immediate reactions rather than careful thought?",
    options: [
      "Frequently driven by urgency.",
      "Sometimes influenced by immediate needs.",
      "Generally avoided in favor of planning.",
      "Impulsiveness is tempered by consideration for impact on people.",
      "Experimentation involves calculated risks.",
      "Impulsive actions are rare and scrutinized against values."
    ]
  },
  // Growth & Balance (GB)
  {
    principle: 'GB',
    text: "Progress: How focused is the business on continuous improvement and development (for individuals and the organization)?",
    options: [
      "Little formal emphasis on growth.",
      "Opportunities for development are available.",
      "Growth is actively encouraged and supported.",
      "Development includes personal well-being.",
      "Innovation is seen as a key driver of growth.",
      "Growth aligns with the company's long-term vision."
    ]
  },
  {
    principle: 'GB',
    text: "Stability: How stable and predictable is the work environment and the overall direction of the business?",
    options: [
      "Highly volatile and uncertain.",
      "Experiences periods of instability.",
      "Generally consistent and reliable.",
      "Stability is seen as important for team security.",
      "Adaptability is balanced with a stable core.",
      "Stability is rooted in consistent values."
    ]
  },
  {
    principle: 'GB',
    text: "Well-being: How much emphasis is placed on the overall well-being and work-life balance of team members?",
    options: [
      "Little explicit focus on well-being.",
      "Well-being is considered but not a priority.",
      "Efforts are made to support employee well-being.",
      "Well-being is seen as integral to success.",
      "Innovative approaches to well-being are explored.",
      "Well-being aligns with the company's care for its people."
    ]
  },
  // Truth & Identity (TI)
  {
    principle: 'TI',
    text: "Authenticity: How genuine and true to its core values and mission is the business in its actions and communications?",
    options: [
      "Actions often deviate from stated values.",
      "Generally tries to align with its mission.",
      "Consistently acts in accordance with its values.",
      "Authenticity is key to building trust within the team.",
      "Transparency reflects its genuine approach.",
      "Identity is clearly defined and consistently upheld."
    ]
  },
  {
    principle: 'TI',
    text: "Honesty: How honest and transparent is the business in its dealings with its team, customers, and stakeholders?",
    options: [
      "Information is often withheld or sugar-coated.",
      "Generally honest but not always fully transparent.",
      "Prioritizes open and truthful communication.",
      "Honesty builds strong relationships.",
      "Transparency fosters a culture of trust and learning.",
      "Integrity is paramount in all dealings."
    ]
  },
  {
    principle: 'TI',
    text: "Self-Awareness: How well does the business understand its strengths, weaknesses, and its impact on others?",
    options: [
      "Limited awareness of its own impact.",
      "Acknowledges areas for improvement.",
      "Actively seeks feedback to understand its impact.",
      "Self-awareness informs efforts to improve team well-being.",
      "Learning from mistakes demonstrates self-awareness.",
      "Identity is grounded in a realistic self-assessment."
    ]
  }
];

const principleNames = {
  PP: "Power & Purpose",
  WA: "Wisdom & Adaptation",
  CI: "Connection & Impact",
  AM: "Action & Method",
  GB: "Growth & Balance",
  TI: "Truth & Identity"
};

const pairedPrinciples = {
  Focus: ["PP", "AM"],
  Values: ["CI", "TI"],
  Social: ["WA", "GB"]
};

// Assessment Page Logic
if (document.getElementById("legacy-form")) {
  // Render questionnaire dynamically
  function renderQuestions() {
    const wrap = document.getElementById('questions');
    legacyQuestions.forEach((q, idx) => {
      const qBlock = document.createElement('div');
      qBlock.className = 'question-block';
      qBlock.innerHTML = `<label for="q${idx}">${idx + 1}. ${q.text}</label>`;
      const optsDiv = document.createElement('div');
      optsDiv.className = 'options';
      q.options.forEach((opt, i) => {
        const optId = `q${idx}_opt${i + 1}`;
        const optDiv = document.createElement('div');
        optDiv.className = 'option';
        optDiv.innerHTML = `
          <input type="radio" name="q${idx}" id="${optId}" value="${i + 1}" required>
          <label for="${optId}">${i + 1}. ${opt}</label>
        `;
        optsDiv.appendChild(optDiv);
      });
      qBlock.appendChild(optsDiv);
      wrap.appendChild(qBlock);
    });
  }
  renderQuestions();

  // Enforce only digits for ZIP code and max 5 chars
  document.getElementById('zipCode').addEventListener('input', function(e) {
    this.value = this.value.replace(/\D/g, '').slice(0, 5);
  });

  // Calculate principle scores and paired scores
  function calculateScores(answers) {
    const scores = { PP: 0, WA: 0, CI: 0, AM: 0, GB: 0, TI: 0 };
    legacyQuestions.forEach((q, idx) => {
      scores[q.principle] += parseInt(answers[idx], 10) || 0;
    });
    // Paired scores
    const pairs = {};
    for (const [pair, arr] of Object.entries(pairedPrinciples)) {
      pairs[pair] = arr.reduce((sum, p) => sum + scores[p], 0);
    }
    // Dominant vibe
    let dominant = Object.keys(pairs)[0];
    let maxScore = pairs[dominant];
    for (const [pair, val] of Object.entries(pairs)) {
      if (val > maxScore) { dominant = pair; maxScore = val; }
    }
    return { scores, pairs, dominant };
  }

  // Redirect to results page with query parameters
  function redirectToResultsPage({ businessName, zipCode, scores, pairs, dominant }) {
    const params = new URLSearchParams();
    params.set('business', businessName);
    params.set('zip', zipCode);
    params.set('dominant', dominant);
    Object.entries(scores).forEach(([key, value]) => params.set(key, value));
    Object.entries(pairs).forEach(([key, value]) => params.set(key, value));
    window.location.href = "results.html?" + params.toString();
  }

  // Handle form submission
  document.getElementById('legacy-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const businessName = formData.get("businessName") || '';
    const zipCode = formData.get("zipCode") || '';
    const answers = [];
    for (let i = 0; i < legacyQuestions.length; ++i) {
      answers.push(formData.get(`q${i}`));
    }
    const { scores, pairs, dominant } = calculateScores(answers);
    redirectToResultsPage({ businessName, zipCode, scores, pairs, dominant });
  });
}

// Results Page Logic
if (window.location.pathname.endsWith("results.html")) {
  const urlParams = new URLSearchParams(window.location.search);
  document.getElementById("result-business").textContent = urlParams.get("business") || "";
  document.getElementById("result-zip").textContent = urlParams.get("zip") || "";
  document.getElementById("dominant-vibe").textContent = urlParams.get("dominant") || "";

  // Principle scores
  const pList = document.getElementById("principle-scores");
  Object.keys(principleNames).forEach(key => {
    const val = urlParams.get(key);
    const li = document.createElement("li");
    li.textContent = `${principleNames[key]}: ${val || 0}`;
    pList.appendChild(li);
  });

  // Paired scores
  const psList = document.getElementById("paired-scores");
  Object.keys(pairedPrinciples).forEach(pair => {
    const val = urlParams.get(pair);
    const li = document.createElement("li");
    li.textContent = `${pair}: ${val || 0}`;
    psList.appendChild(li);
  });

  // Overlay logic (one per paired value)
  const overlays = {
    Focus: document.getElementById("focus-overlay"),
    Values: document.getElementById("values-overlay"),
    Social: document.getElementById("social-overlay")
  };
  Object.keys(overlays).forEach(pair => {
    // Each pair has two principles, 3 questions each = max 36 points (if all 6s)
    // 2 principles * 3 questions * 6 max = 36
    // 2 principles * 3 questions * 1 min = 6
    // Map 6–36 to 1–6
    const raw = parseInt(urlParams.get(pair), 10) || 0;
    const overlayLevel = Math.min(6, Math.max(1, Math.round((raw - 6) / 5 + 1)));
    overlays[pair].src = `img/${pair.toLowerCase()}-${overlayLevel}.png`;
    overlays[pair].alt = `${pair} overlay, level ${overlayLevel}`;
  });

  // Optionally: Generate insights here
}