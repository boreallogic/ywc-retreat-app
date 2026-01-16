import React, { useState } from 'react';

const NAP_PILLARS = [
  {
    id: 1,
    name: 'Support for Survivors',
    fullName: 'Pillar 1: Support for Victims, Survivors, and Their Families',
    color: 'bg-rose-500',
    lightColor: 'bg-rose-100',
    textColor: 'text-rose-800',
    description: 'Crisis intervention, shelter, counselling, safety planning, and wrap-around supports'
  },
  {
    id: 2,
    name: 'Prevention',
    fullName: 'Pillar 2: Prevention',
    color: 'bg-amber-500',
    lightColor: 'bg-amber-100',
    textColor: 'text-amber-800',
    description: 'Public awareness, education, engagement with men and boys, community-based prevention'
  },
  {
    id: 3,
    name: 'Justice System',
    fullName: 'Pillar 3: Responsive Justice System',
    color: 'bg-blue-500',
    lightColor: 'bg-blue-100',
    textColor: 'text-blue-800',
    description: 'Legal advocacy, justice-involved individuals, restorative justice, court supports'
  },
  {
    id: 4,
    name: 'Indigenous Leadership',
    fullName: 'Pillar 4: Indigenous Leadership',
    color: 'bg-teal-500',
    lightColor: 'bg-teal-100',
    textColor: 'text-teal-800',
    description: 'Indigenous-led programming, cultural healing, MMIWG2S+ response, First Nations partnerships'
  },
  {
    id: 5,
    name: 'Social Infrastructure',
    fullName: 'Pillar 5: Social Infrastructure and Enabling Environment',
    color: 'bg-purple-500',
    lightColor: 'bg-purple-100',
    textColor: 'text-purple-800',
    description: 'Capacity building, workforce development, governance, sector coordination, funding stability'
  },
  {
    id: 6,
    name: 'Foundation',
    fullName: 'Pillar 6: Foundation',
    color: 'bg-gray-500',
    lightColor: 'bg-gray-100',
    textColor: 'text-gray-800',
    description: 'Research, evaluation, knowledge mobilization, performance measurement, data governance'
  }
];

const ORGANIZATIONS = [
  { id: 'dws', name: 'DWS', fullName: 'Dawson Women\'s Shelter' },
  { id: 'hh', name: 'H&H', fullName: 'Help & Hope' },
  { id: 'leselles', name: 'Les Elles', fullName: 'Les Elles' },
  { id: 'laws', name: 'LAWS', fullName: 'Legal Aid Yukon Society' },
  { id: 'psac', name: 'PSAC', fullName: 'PSAC Yukon' },
  { id: 'vfwc', name: 'VFWC', fullName: 'Victoria Faulkner Women\'s Centre' },
  { id: 'wawc', name: 'WAWC', fullName: 'Women\'s Advocate Workers Coalition' },
  { id: 'yawc', name: 'YAWC', fullName: 'Yukon Aboriginal Women\'s Council' },
  { id: 'yswc', name: 'YSWC', fullName: 'Yukon Status of Women Council' },
  { id: 'ywitt', name: 'YWITT', fullName: 'Yukon Women in Trades & Technology' },
  { id: 'ywths', name: 'YWTHS', fullName: 'Yukon Women\'s Transition Home Society' }
];

const MATRIX_QUESTIONS = [
  { id: 'mandate', text: 'Does it fit with our mandate & values?', type: 'yesno' },
  { id: 'contribute', text: 'Will it contribute to our mandate?', type: 'yesno' },
  { id: 'guidelines', text: 'Does it follow our guidelines?', type: 'yesno' },
  { id: 'timeframe', text: 'Is it short term or long term?', type: 'choice', options: ['Short', 'Long', 'Both'] },
  { id: 'interest', text: 'Does it interest you?', type: 'yesno' },
  { id: 'time', text: 'Do you have capacity to contribute time?', type: 'yesno' },
  { id: 'money', text: 'Do you have capacity to contribute $$?', type: 'yesno' },
  { id: 'lead', text: 'Are you willing to lead the project?', type: 'yesno' },
  { id: 'funding', text: 'Does it fit with any potential funding avenues?', type: 'yesno' },
  { id: 'pursuefunding', text: 'Are you willing to pursue funding for this project?', type: 'yesno' },
  { id: 'host', text: 'Can you host the funding & provide reporting?', type: 'yesno' }
];

// Curated project ideas - Comprehensive gap analysis combining:
// 1. Coalition indicators vs. current organizational workplans
// 2. GBV expert analysis of systemic gaps in Yukon's response ecosystem
// Each includes rationale explaining why this emerged as a coalition priority
const SUGGESTED_PROJECTS = [
  // ============================================
  // PILLAR 1: SUPPORT FOR SURVIVORS
  // ============================================
  {
    name: "Mobile Rural Crisis Response Team",
    description: "Create a mobile crisis team serving Yukon's rural communities with 24/7 hotline, emergency transportation, and SART-trained responders who can deploy territory-wide",
    pillars: [1, 5],
    rationale: "Gap identified: DWS serves Dawson and YWTHS serves Whitehorse, but no coordinated mobile response exists for other rural communities. Indicator analysis showed 'rural access' as a top-ranked unmet need."
  },
  {
    name: "Housing Continuum for Survivors",
    description: "Develop a coordinated housing pathway from emergency shelter through transitional to long-term stable housing, with substance-use inclusive policies and dedicated units for Indigenous women",
    pillars: [1, 4, 5],
    rationale: "Gap identified: YWTHS provides shelter and transitional units, but no coordinated continuum planning exists. Indicators ranked 'housing stability' and 'substance-use inclusive policies' as critical unmet needs."
  },
  {
    name: "Integrated Case Management System",
    description: "Build a cross-agency case management approach connecting shelter, counselling, legal aid, mental health, childcare, and employment supports with a single navigator per survivor",
    pillars: [1, 5],
    rationale: "Gap identified: Each org provides referrals independently, but no single-navigator system exists. Indicator analysis flagged 'service fragmentation' and 'survivors falling through cracks' as systemic issues."
  },
  {
    name: "GBV Workforce Sustainability Campaign",
    description: "Coalition-wide advocacy for living wages, essential worker classification, burnout prevention programs, and professional development pathways for frontline GBV workers",
    pillars: [1, 5],
    rationale: "Gap identified: Individual orgs manage their own HR, but no coalition-wide advocacy addresses sector-wide workforce crisis. Indicators showed 'staff retention' and 'burnout' as top organizational challenges."
  },
  {
    name: "Children's Therapeutic Services Program",
    description: "Dedicated trauma-informed therapeutic services for children who have experienced GBV — including play therapy, child-specific safety planning, and developmental support distinct from adult survivor services",
    pillars: [1, 2],
    rationale: "Expert gap: Children experiencing GBV are treated as secondary to mothers throughout current workplans. No dedicated child trauma therapy, child advocacy, or child-specific programming exists. Children are survivors with distinct needs, not just 'witnesses.'"
  },
  {
    name: "Economic Abuse & Financial Recovery Program",
    description: "Address economic abuse through financial literacy, credit repair advocacy, coerced debt legal support, employment retention assistance, and partnerships with financial institutions for survivor-specific services",
    pillars: [1, 5],
    rationale: "Expert gap: Economic abuse (coerced debt, credit destruction, employment sabotage) is one of the strongest predictors of return to abuser and long-term poverty. No org addresses this — it's invisible in current programming."
  },
  {
    name: "Specialized Trauma Therapy Access",
    description: "Expand access to evidence-based trauma therapies (EMDR, somatic experiencing, prolonged exposure) with rural delivery options and Indigenous-specific healing modalities",
    pillars: [1, 4],
    rationale: "Expert gap: General counselling exists but specialized trauma therapy is scarce — long waitlists, no rural access, limited Indigenous-specific modalities. Deep healing requires more than crisis support."
  },
  {
    name: "Peer Support Network for Survivors",
    description: "Formalized peer support program — survivors supporting survivors — with training, coordination, and integration into service pathways to reduce isolation and create healing communities",
    pillars: [1],
    rationale: "Expert gap: No formalized peer support exists. Peer support is cost-effective, reduces isolation, creates pathways to deeper healing and advocacy, and is particularly effective for marginalized survivors."
  },
  {
    name: "Post-Separation Safety Program",
    description: "Intensive safety planning, monitoring, and support specifically for the 12-24 month post-separation period — the statistically most dangerous time for survivors",
    pillars: [1, 3],
    rationale: "Expert gap: Post-separation is the highest-risk period for intimate partner homicide, but no program specifically addresses this danger window. Current services don't distinguish pre- and post-separation needs."
  },
  {
    name: "Pets as Barriers Program",
    description: "Remove pet barriers to leaving through shelter pet policies, foster network for survivor pets, and partnerships with veterinary services for emergency pet care",
    pillars: [1],
    rationale: "Expert gap: 50%+ of survivors delay leaving because they can't bring pets. Abusers weaponize pets. No shelter has pet capacity, no foster network exists. This is a concrete, solvable barrier."
  },
  {
    name: "Survivor Transportation Network",
    description: "Dedicated transportation program for rural survivors to access services in Whitehorse — safe, reliable, and confidential transport that doesn't rely on hitchhiking or ad hoc arrangements",
    pillars: [1, 5],
    rationale: "Expert gap: Rural survivors need transportation to access services. No dedicated program exists — survivors rely on dangerous ad hoc arrangements or can't access services at all."
  },
  {
    name: "Warm Handoff Protocols",
    description: "Formal protocols ensuring continuity when survivors move between services (shelter to housing, crisis to counselling) — preventing dropout at transition points",
    pillars: [1, 5],
    rationale: "Expert gap: Survivors fall through cracks at transition points between services. No warm handoff protocols ensure continuity. Each org operates independently without formalized transitions."
  },
  {
    name: "After-Hours System Navigation",
    description: "Extend system navigation beyond crisis lines to after-hours practical support — connecting survivors at 2am to housing, legal, financial, and practical supports, not just crisis counselling",
    pillars: [1, 5],
    rationale: "Expert gap: Crisis lines exist but after-hours system navigation doesn't. Survivors in crisis at night can't get connected to practical supports until business hours, losing critical momentum."
  },
  {
    name: "Childcare Access for Survivors",
    description: "Survivor-specific childcare support addressing barriers to accessing services, attending court, maintaining employment, and achieving independence post-separation",
    pillars: [1, 5],
    rationale: "Expert gap: Childcare is a major barrier to accessing services, attending court, and maintaining employment post-separation. No survivor-specific childcare support exists."
  },
  {
    name: "Legal Costs & Financial Barriers Fund",
    description: "Address hidden financial barriers through emergency legal cost fund, pro bono network coordination, and support for separation costs (deposits, moving, document replacement)",
    pillars: [1, 3],
    rationale: "Expert gap: Family court costs are devastating. No legal cost fund, no pro bono network, no support for hidden costs of separation. Financial barriers trap survivors in abusive situations."
  },

  // ============================================
  // PILLAR 2: PREVENTION
  // ============================================
  {
    name: "Comprehensive Youth GBV Services",
    description: "Create age-appropriate services for youth and teens addressing dating violence, children witnessing violence, and young survivors — expanding beyond current single-program approaches",
    pillars: [2, 1],
    rationale: "Gap identified: LAWS runs Youth for Dignity at one school, but no comprehensive territory-wide youth services exist. Indicators ranked 'youth-specific services' and 'dating violence prevention' as high-priority gaps."
  },
  {
    name: "Industry Workplace Safety Program",
    description: "Create GBV prevention training and policy templates for mining, construction, and industrial employers — with Indigenous women's leadership in policy development",
    pillars: [2, 4, 5],
    rationale: "Gap identified: YWITT supports women in trades but doesn't address GBV-specific workplace policies. Indicators flagged 'camp culture' and 'industrial workplace harassment' as emerging prevention priorities."
  },
  {
    name: "High-Risk Case Coordination Protocol",
    description: "Establish multidisciplinary teams and formal risk-assessment protocols for high-risk intimate partner violence cases, with clear inter-agency response pathways",
    pillars: [2, 3],
    rationale: "Gap identified: No formal high-risk case protocols exist in Yukon. Indicator analysis identified 'lethality assessment' and 'coordinated danger response' as critical safety gaps."
  },
  {
    name: "Batterer Intervention Program",
    description: "Develop Yukon-based intervention programming for people who use violence — court-mandated treatment pathways, voluntary intervention options, and early intervention for concerning behaviors",
    pillars: [2, 3],
    rationale: "Expert gap: Zero programming exists for people who use violence. No batterer intervention, no court-mandated treatment, no early-stage intervention. You cannot end GBV by only serving survivors."
  },
  {
    name: "Adolescents Who Use Violence Program",
    description: "Early intervention for teens (14-17) beginning to use violence in relationships — school-based identification, therapeutic intervention, and accountability without criminalization",
    pillars: [2],
    rationale: "Expert gap: Distinct from batterer intervention — teens beginning to use violence need early intervention before patterns solidify. No program exists to identify and intervene with adolescent perpetration."
  },
  {
    name: "Adult Bystander Intervention Training",
    description: "Bystander training specifically for adult settings — workplaces, bars/restaurants, sports leagues, faith communities — teaching intervention when warning signs are witnessed",
    pillars: [2],
    rationale: "Expert gap: Youth programs exist, but nothing targets adult men's peer networks. Bystander intervention in male-dominated spaces (workplaces, sports, faith communities) is distinct from school-based prevention."
  },
  {
    name: "Coercive Control Framework Development",
    description: "Update training, assessment tools, and service models to recognize patterns of coercive control that don't involve physical violence — addressing the gap in incident-based service models",
    pillars: [2, 1],
    rationale: "Expert gap: Current services are built around incident-based violence. Coercive control — isolation, financial control, psychological abuse — is invisible to current frameworks despite being central to GBV dynamics."
  },
  {
    name: "Strangulation Response Protocol",
    description: "Specialized response to non-fatal strangulation: forensic nurse examiner training, dedicated prosecution protocols, survivor education about medical risks, and healthcare screening",
    pillars: [2, 3],
    rationale: "Expert gap: Non-fatal strangulation is the single strongest predictor of intimate partner homicide. No specialized response exists — no trained examiners, no prosecution protocols, no survivor education."
  },
  {
    name: "Firearms & GBV Safety Protocol",
    description: "Develop protocols for emergency firearms removal, partnership with Chief Firearms Officer, advocacy for red flag laws, and integration of firearms risk into safety planning",
    pillars: [2, 3],
    rationale: "Expert gap: Yukon has high gun ownership. No protocol exists for emergency firearms removal, no CFO partnership, no advocacy for protective legislation. This is a lethal gap in a rural, gun-owning territory."
  },
  {
    name: "Perinatal GBV Intervention",
    description: "Integrate GBV screening and response into maternal health: prenatal clinic protocols, midwife/doula training, postpartum home visit safety checks, and hospital partnerships",
    pillars: [2, 1],
    rationale: "Expert gap: Pregnancy is the highest-risk period for GBV onset/escalation, yet there's zero integration with maternal health. Healthcare settings are untapped intervention points during this critical window."
  },
  {
    name: "Faith Community Engagement Program",
    description: "Training for clergy and faith leaders on GBV response, developing faith-based survivor support, and addressing harmful 'stay and pray' counsel in religious communities",
    pillars: [2],
    rationale: "Expert gap: Churches and faith communities are often where survivors first disclose — but clergy are untrained and sometimes provide harmful counsel. No faith leader training or faith-based support exists."
  },

  // ============================================
  // PILLAR 3: JUSTICE SYSTEM
  // ============================================
  {
    name: "Survivor Legal Navigation Program",
    description: "Provide court accompaniment, legal system navigation, and advocacy for survivors — including addressing legal aid qualification barriers for peace bonds and family court",
    pillars: [3, 1],
    rationale: "Gap identified: LAWS provides legal aid but not survivor-specific navigation or accompaniment. Indicators showed 'court accompaniment' and 'legal system navigation' as distinct unmet needs."
  },
  {
    name: "Restorative & Therapeutic Justice Options",
    description: "Partner with First Nations and Justice to develop culturally-appropriate restorative justice alternatives and advocate for trauma-informed therapeutic court processes",
    pillars: [3, 4],
    rationale: "Gap identified: No organization currently develops restorative justice alternatives for GBV. Indicators ranked 'Indigenous justice approaches' and 'therapeutic courts' as systemic priorities."
  },
  {
    name: "Technology-Facilitated Violence Response",
    description: "Develop resources, training, and support systems addressing cyber harassment, coercive control, image-based abuse, and digital safety for survivors",
    pillars: [3, 1],
    rationale: "Gap identified: No org addresses technology-facilitated abuse. Indicator analysis identified 'cyber harassment,' 'image-based abuse,' and 'digital coercive control' as emerging service gaps."
  },
  {
    name: "Child Welfare-GBV Integration Protocol",
    description: "Coordinate between Family & Children's Services and GBV orgs to prevent 'failure to protect' removals, align child safety with survivor safety, and end system re-traumatization",
    pillars: [3, 1],
    rationale: "Expert gap: Child welfare and GBV services often work at cross-purposes — mothers lose children for 'failure to protect' while experiencing abuse. No protocol coordinates these systems, leading to perverse outcomes."
  },
  {
    name: "Corrections & Re-entry GBV Support",
    description: "GBV-specific re-entry support for women leaving correctional facilities (many with GBV histories) and intervention with incarcerated men who've perpetrated GBV before release",
    pillars: [3, 2],
    rationale: "Expert gap: Women leaving corrections often have GBV histories; their offenses are frequently GBV-connected. No GBV-specific re-entry support exists, nor intervention with perpetrators before release."
  },
  {
    name: "Cross-Jurisdictional GBV Protocols",
    description: "Develop protocols for survivors fleeing to/from Yukon (BC, NWT, Alaska) — information sharing, safety planning across borders, and service continuity",
    pillars: [3, 1],
    rationale: "Expert gap: When survivors flee across borders, no protocols exist for cross-jurisdictional coordination. Safety planning and service continuity break down at territorial/provincial boundaries."
  },

  // ============================================
  // PILLAR 4: INDIGENOUS LEADERSHIP
  // ============================================
  {
    name: "Indigenous-Led GBV Service Expansion",
    description: "Expand capacity of Indigenous-led organizations to deliver culturally safe GBV programming, with formal First Nations partnership protocols and governance roles",
    pillars: [4, 5],
    rationale: "Gap identified: YAWC and WAWC deliver Indigenous programming, but capacity expansion and formal FN governance partnerships need coalition support. Indicators prioritized 'Indigenous-led service delivery.'"
  },
  {
    name: "Indigenous Women's Economic & Workforce Initiative",
    description: "Support Indigenous women's leadership in industry safety policies, economic empowerment through business supports, and workforce participation in GBV-prevention sectors",
    pillars: [4, 5],
    rationale: "Gap identified: YWITT supports women in trades generally; no specific initiative bridges Indigenous women's economic empowerment with GBV prevention. Indicators flagged this intersection as underserved."
  },
  {
    name: "Intergenerational Trauma & GBV Healing",
    description: "Programming addressing how GBV patterns transmit across generations, connecting GBV response to broader healing from colonial violence, residential schools, and systemic trauma",
    pillars: [4, 1],
    rationale: "Expert gap: Especially for Indigenous communities — addressing intergenerational transmission of violence and connecting GBV response to broader healing from colonial violence. Current services treat GBV in isolation."
  },
  {
    name: "Elder Abuse Response Program",
    description: "Specialized response for elder abuse, particularly against older Indigenous women in rural communities — addressing capacity questions, family dynamics, isolation, and institutional abuse",
    pillars: [4, 1],
    rationale: "Expert gap: Elder abuse — particularly against older Indigenous women — is invisible. No org has this mandate. Unique dynamics (capacity issues, family perpetrators, rural isolation) require specialized approaches."
  },

  // ============================================
  // PILLAR 5: SOCIAL INFRASTRUCTURE
  // ============================================
  {
    name: "Multi-Year Core Funding Campaign",
    description: "Coalition-wide advocacy for predictable multi-year operational funding, 50-50 cost-sharing, and rebalancing funding equity between government and frontline NGOs",
    pillars: [5],
    rationale: "Gap identified: All orgs report to funders individually, but no coalition-wide funding advocacy exists. Indicators ranked 'funding predictability' and 'operational sustainability' as top sector concerns."
  },
  {
    name: "YWC Backbone Infrastructure",
    description: "Strengthen YWC's role as the collective impact backbone organization with dedicated coordination staff, shared governance mechanisms, and resource-sharing protocols",
    pillars: [5, 6],
    rationale: "Gap identified: YWC coordinates coalition activities but lacks dedicated backbone capacity. Indicator analysis showed 'collective impact coordination' as essential for achieving shared outcomes."
  },
  {
    name: "Cross-Sector Integration Initiative",
    description: "Build formal collaboration pathways between GBV services and health, housing, addictions, and child welfare systems to reduce service fragmentation",
    pillars: [5],
    rationale: "Gap identified: Orgs collaborate informally, but no formal cross-sector pathways exist. Indicators flagged 'siloed systems' and 'fragmented survivor journeys' as requiring structural solutions."
  },
  {
    name: "Rural & Remote Access Expansion",
    description: "Develop consistent outreach services, transportation solutions, and rural health center capacity (including SAECK access) for communities beyond Whitehorse",
    pillars: [5, 1],
    rationale: "Gap identified: DWS serves Dawson, but no coordinated rural strategy exists for other communities. Indicators showed 'geographic access' and 'rural SAECK availability' as critical gaps."
  },
  {
    name: "2SLGBTQIA+ & Newcomer Services Development",
    description: "Expand services for underserved populations: 2SLGBTQIA+ survivors, men and non-binary individuals, and newcomers/immigrants requiring specialized cultural support",
    pillars: [5, 1],
    rationale: "Gap identified: VFWC serves non-binary individuals at drop-in; Les Elles serves Francophones. But 2SLGBTQIA+, male survivors, and newcomers remain underserved. Indicators ranked these as equity priorities."
  },
  {
    name: "Healthcare GBV Screening & Response",
    description: "Standardized GBV screening in emergency rooms, primary care, and mental health services — with healthcare worker training in safe disclosure response and referral pathways",
    pillars: [5, 2],
    rationale: "Expert gap: No standardized GBV screening in healthcare settings. Healthcare workers aren't trained in safe disclosure response. Healthcare is often survivors' only contact with systems — massive missed intervention."
  },
  {
    name: "Immigration & Refugee GBV Services",
    description: "Specialized services for newcomers facing immigration-related GBV: sponsorship-based coercive control, fear of deportation, unfamiliarity with Canadian systems, and cultural isolation",
    pillars: [5, 1],
    rationale: "Expert gap: Newcomers face unique barriers — sponsorship coercion, deportation fear, system unfamiliarity. No org has specific capacity for immigration-related GBV dynamics (distinct from general newcomer services)."
  },
  {
    name: "Disability-Informed GBV Services",
    description: "Develop accessibility, specialized outreach, and programming addressing disability-related abuse dynamics — caregiver abuse, institutional abuse, communication barriers, and unique safety planning",
    pillars: [5, 1],
    rationale: "Expert gap: Women with disabilities experience GBV at 2-4x higher rates. Nothing addresses accessibility or unique dynamics (caregiver abuse, institutional abuse, communication barriers). Complete demographic blindspot."
  },
  {
    name: "Deaf & Hard-of-Hearing GBV Services",
    description: "Develop ASL/LSQ interpretation capacity, visual safety planning tools, and Deaf-accessible crisis services for Deaf and hard-of-hearing survivors",
    pillars: [5, 1],
    rationale: "Expert gap: No ASL/LSQ interpretation, no visual safety tools, no Deaf-accessible crisis services. Even one Deaf survivor in Yukon currently has nowhere accessible to turn."
  },
  {
    name: "Employment Support & Economic Independence",
    description: "Beyond workforce training — employer education, job retention support during crisis, and programming addressing how abusers sabotage employment to maintain control",
    pillars: [5, 1],
    rationale: "Expert gap: Employment sabotage is a key coercive control tactic. Beyond workforce training, survivors need employer education and job retention support during crisis. Current programs don't address this."
  },

  // ============================================
  // PILLAR 6: FOUNDATION
  // ============================================
  {
    name: "Sector Data Governance & Shared Measurement",
    description: "Develop coalition-wide data collection standards, privacy protocols, and common outcome indicators to demonstrate collective impact and inform advocacy",
    pillars: [6, 5],
    rationale: "Gap identified: Each org tracks different metrics for different funders. No shared measurement exists. Indicators showed 'common outcome frameworks' as essential for demonstrating sector impact."
  },
  {
    name: "Government NAP Accountability Tracker",
    description: "Create mechanisms to monitor and publicly report on territorial government's NAP implementation commitments, funding flows, and outcome delivery",
    pillars: [6],
    rationale: "Gap identified: YSWC does policy advocacy, but no systematic NAP accountability monitoring exists. Indicators prioritized 'government accountability' and 'NAP implementation tracking.'"
  },
  {
    name: "Financial Transparency Framework",
    description: "Implement tiered sector financial data sharing to document sustainability gaps, demonstrate sector needs, and support funding advocacy with evidence",
    pillars: [6, 5],
    rationale: "Gap identified: Orgs report finances to funders individually; no sector-wide financial picture exists. Indicators showed 'evidence-based funding advocacy' requires transparent sector data."
  },
  {
    name: "Long-Term Survivor Outcomes Research",
    description: "Develop evaluation approaches measuring deeper impacts — long-term survivor well-being, intergenerational trauma reduction, and community safety perceptions",
    pillars: [6],
    rationale: "Gap identified: YSWC conducts research, but no deep longitudinal outcome evaluation exists. Indicators prioritized 'measuring what matters' beyond immediate service outputs."
  }
];

const Header = ({ currentStep, setCurrentStep }) => (
  <div className="bg-gradient-to-r from-purple-800 to-purple-600 text-white p-6 shadow-lg">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Yukon Women's Coalition</h1>
      <p className="text-purple-200 mb-4">2026 Retreat - Future Projects Planning Tool</p>
      <div className="flex flex-wrap gap-2">
        {['Brainstorm', 'NAP Pillars', 'Vote', 'Evaluate', 'Summary'].map((step, i) => (
          <button
            key={i}
            onClick={() => setCurrentStep(i + 1)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              currentStep === i + 1
                ? 'bg-white text-purple-800'
                : 'bg-purple-700 hover:bg-purple-500'
            }`}
          >
            Step {i + 1}: {step}
          </button>
        ))}
      </div>
    </div>
  </div>
);

// Pillar badge component for reuse
const PillarBadge = ({ pillarId, size = 'sm' }) => {
  const pillar = NAP_PILLARS.find(p => p.id === pillarId);
  if (!pillar) return null;

  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm';

  return (
    <span className={`${pillar.color} text-white rounded-full ${sizeClasses} font-medium`}>
      P{pillar.id}
    </span>
  );
};

const Step1Brainstorm = ({ projects, setProjects }) => {
  const [newProject, setNewProject] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [filterPillar, setFilterPillar] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedRationale, setExpandedRationale] = useState(null);

  const addProject = () => {
    if (newProject.trim()) {
      setProjects([...projects, {
        id: Date.now(),
        name: newProject.trim(),
        pillars: [],
        votes: [],
        matrix: {}
      }]);
      setNewProject('');
    }
  };

  const addSuggestedProject = (suggestion) => {
    // Check if already added
    if (projects.some(p => p.name === suggestion.name)) return;

    setProjects([...projects, {
      id: Date.now(),
      name: suggestion.name,
      pillars: suggestion.pillars,
      votes: [],
      matrix: {}
    }]);
  };

  const removeProject = (id) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  // Filter suggestions by pillar and search term
  const filteredSuggestions = SUGGESTED_PROJECTS.filter(s => {
    const matchesPillar = !filterPillar || s.pillars.includes(filterPillar);
    const matchesSearch = !searchTerm ||
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesPillar && matchesSearch;
  });

  // Check which suggestions are already added
  const addedNames = projects.map(p => p.name);

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Preamble / Suggestions Section */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-6 mb-6 border border-purple-200">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-purple-800">Coalition Gap Analysis: New Project Opportunities</h3>
            <p className="text-gray-600 text-sm mt-1">
              {SUGGESTED_PROJECTS.length} projects identified by comparing sector indicators against current organizational workplans. These represent genuine gaps — not duplicating what members already do. Click "Why this gap?" for rationale.
            </p>
          </div>
          <button
            onClick={() => setShowSuggestions(!showSuggestions)}
            className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 font-medium text-sm"
          >
            {showSuggestions ? 'Hide Suggestions' : 'Show Suggestions'}
          </button>
        </div>

        {showSuggestions && (
          <>
            {/* Search bar */}
            <div className="mb-4">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search project ideas..."
                className="w-full px-4 py-2 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:outline-none text-sm"
              />
            </div>

            {/* Pillar filter */}
            <div className="flex flex-wrap gap-2 mb-4 pb-4 border-b border-purple-200">
              <span className="text-sm text-gray-600 py-1 font-medium">NAP Pillar:</span>
              <button
                onClick={() => setFilterPillar(null)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  filterPillar === null
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              {NAP_PILLARS.map(pillar => (
                <button
                  key={pillar.id}
                  onClick={() => setFilterPillar(pillar.id)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                    filterPillar === pillar.id
                      ? `${pillar.color} text-white`
                      : `${pillar.lightColor} ${pillar.textColor} hover:opacity-80`
                  }`}
                  title={pillar.fullName}
                >
                  P{pillar.id}: {pillar.name}
                </button>
              ))}
            </div>

            {/* Suggestions grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[600px] overflow-y-auto">
              {filteredSuggestions.map((suggestion, idx) => {
                const isAdded = addedNames.includes(suggestion.name);
                const isExpanded = expandedRationale === idx;
                return (
                  <div
                    key={idx}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      isAdded
                        ? 'bg-green-50 border-green-300'
                        : 'bg-white border-gray-200 hover:border-purple-400 hover:shadow-md'
                    }`}
                  >
                    <div
                      onClick={() => !isAdded && addSuggestedProject(suggestion)}
                      className={!isAdded ? 'cursor-pointer' : ''}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <p className={`font-medium text-sm ${isAdded ? 'text-green-700' : 'text-gray-800'}`}>
                            {suggestion.name}
                          </p>
                          <p className="text-xs text-gray-500 mt-1 line-clamp-2">{suggestion.description}</p>
                        </div>
                        {isAdded && (
                          <span className="text-green-600 text-lg flex-shrink-0">✓</span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {suggestion.pillars.map(pid => (
                          <PillarBadge key={pid} pillarId={pid} />
                        ))}
                      </div>
                    </div>

                    {/* Rationale toggle */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedRationale(isExpanded ? null : idx);
                      }}
                      className="mt-2 text-xs text-purple-600 hover:text-purple-800 flex items-center gap-1 font-medium"
                    >
                      <span className="text-purple-400">{isExpanded ? '▼' : '▶'}</span>
                      Why this gap?
                    </button>

                    {isExpanded && (
                      <div className="mt-2 p-2 bg-purple-50 rounded text-xs text-purple-800 border border-purple-200">
                        {suggestion.rationale}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {filteredSuggestions.length === 0 && (
              <div className="text-center py-8 text-gray-400">
                <p>No suggestions match your filters</p>
                <button
                  onClick={() => { setFilterPillar(null); setSearchTerm(''); }}
                  className="text-purple-600 hover:underline mt-2"
                >
                  Clear all filters
                </button>
              </div>
            )}

            <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
              <p>
                {filteredSuggestions.length} of {SUGGESTED_PROJECTS.length} suggestions shown •
                {addedNames.filter(n => SUGGESTED_PROJECTS.some(s => s.name === n)).length} already added
              </p>
              {(filterPillar || searchTerm) && (
                <button
                  onClick={() => { setFilterPillar(null); setSearchTerm(''); }}
                  className="text-purple-600 hover:underline"
                >
                  Clear filters
                </button>
              )}
            </div>
          </>
        )}
      </div>

      {/* Main brainstorming input */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Step 1: High Level Brainstorming</h2>
        <p className="text-gray-600 mb-6">
          Add your own project ideas, or select from the suggestions above.
          Each idea will become a card for discussion and voting.
        </p>

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            value={newProject}
            onChange={(e) => setNewProject(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addProject()}
            placeholder="Enter your own project idea..."
            className="flex-1 px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:outline-none"
          />
          <button
            onClick={addProject}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium"
          >
            Add Card
          </button>
        </div>
      </div>

      {/* Project cards */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-purple-800 mb-4">
          Current Project Ideas ({projects.length})
        </h3>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-yellow-100 border-2 border-yellow-300 rounded-lg p-4 shadow-md relative group"
              >
                <button
                  onClick={() => removeProject(project.id)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-sm"
                >
                  ×
                </button>
                <p className="text-gray-800 font-medium">{project.name}</p>
                {project.pillars && project.pillars.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.pillars.map(pid => (
                      <PillarBadge key={pid} pillarId={pid} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-400">
            <p className="text-xl">No project ideas yet</p>
            <p>Select from suggestions above or add your own</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Step2Group = ({ projects, setProjects }) => {
  const togglePillar = (projectId, pillarId) => {
    setProjects(projects.map(p => {
      if (p.id === projectId) {
        const currentPillars = p.pillars || [];
        const newPillars = currentPillars.includes(pillarId)
          ? currentPillars.filter(pid => pid !== pillarId)
          : [...currentPillars, pillarId];
        return { ...p, pillars: newPillars };
      }
      return p;
    }));
  };

  // Group projects by pillar (a project can appear in multiple pillars)
  const projectsByPillar = NAP_PILLARS.map(pillar => ({
    ...pillar,
    projects: projects.filter(p => p.pillars && p.pillars.includes(pillar.id))
  }));

  // Find unassigned projects
  const unassignedProjects = projects.filter(p => !p.pillars || p.pillars.length === 0);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Step 2: Link Projects to NAP GBV Pillars</h2>
        <p className="text-gray-600 mb-4">
          Organize projects by linking them to the relevant National Action Plan pillars.
          Projects can be linked to multiple pillars if they address more than one area.
        </p>
      </div>

      {/* Unassigned projects */}
      {unassignedProjects.length > 0 && (
        <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-amber-800 mb-4">
            Unassigned Projects ({unassignedProjects.length})
          </h3>
          <p className="text-amber-700 text-sm mb-4">
            Click the pillar buttons to assign each project to one or more NAP GBV pillars.
          </p>
          <div className="space-y-3">
            {unassignedProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg p-4 shadow-sm">
                <p className="font-medium text-gray-800 mb-3">{project.name}</p>
                <div className="flex flex-wrap gap-2">
                  {NAP_PILLARS.map(pillar => (
                    <button
                      key={pillar.id}
                      onClick={() => togglePillar(project.id, pillar.id)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                        pillar.lightColor
                      } ${pillar.textColor} hover:opacity-80 border-2 border-transparent hover:border-current`}
                      title={pillar.description}
                    >
                      P{pillar.id}: {pillar.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pillars with their projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsByPillar.map((pillar) => (
          <div
            key={pillar.id}
            className={`rounded-xl shadow-lg overflow-hidden border-2 ${
              pillar.projects.length > 0 ? 'border-current' : 'border-gray-200'
            }`}
          >
            {/* Pillar header */}
            <div className={`${pillar.color} text-white p-4`}>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-white/20 rounded-full px-2 py-0.5 text-sm font-bold">
                  P{pillar.id}
                </span>
                <h3 className="text-lg font-bold">{pillar.name}</h3>
              </div>
              <p className="text-sm opacity-90">{pillar.description}</p>
            </div>

            {/* Projects in this pillar */}
            <div className={`p-4 ${pillar.lightColor} min-h-32`}>
              {pillar.projects.length === 0 ? (
                <p className="text-gray-400 text-sm italic">No projects assigned yet</p>
              ) : (
                <div className="space-y-2">
                  {pillar.projects.map((project) => (
                    <div
                      key={project.id}
                      className="bg-white rounded-lg p-3 shadow-sm flex justify-between items-start"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-gray-800">{project.name}</p>
                        {/* Show other pillars this project belongs to */}
                        {project.pillars.length > 1 && (
                          <div className="flex gap-1 mt-1">
                            {project.pillars.filter(pid => pid !== pillar.id).map(pid => (
                              <PillarBadge key={pid} pillarId={pid} />
                            ))}
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => togglePillar(project.id, pillar.id)}
                        className="text-gray-400 hover:text-red-500 ml-2"
                        title="Remove from this pillar"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Quick add from assigned projects */}
              {projects.filter(p => p.pillars && p.pillars.length > 0 && !p.pillars.includes(pillar.id)).length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 mb-2">Add existing project:</p>
                  <select
                    onChange={(e) => {
                      if (e.target.value) {
                        togglePillar(parseInt(e.target.value), pillar.id);
                        e.target.value = '';
                      }
                    }}
                    className="w-full px-2 py-1 border rounded text-sm"
                    defaultValue=""
                  >
                    <option value="">Select a project...</option>
                    {projects
                      .filter(p => p.pillars && p.pillars.length > 0 && !p.pillars.includes(pillar.id))
                      .map(p => (
                        <option key={p.id} value={p.id}>{p.name}</option>
                      ))
                    }
                  </select>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Coverage summary */}
      <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
        <h3 className="font-semibold text-purple-800 mb-3">Coverage Summary</h3>
        <div className="flex flex-wrap gap-3">
          {projectsByPillar.map(pillar => (
            <div
              key={pillar.id}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
                pillar.projects.length > 0 ? pillar.lightColor : 'bg-gray-100'
              }`}
            >
              <span className={`${pillar.color} text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold`}>
                {pillar.id}
              </span>
              <span className={`font-medium ${pillar.projects.length > 0 ? pillar.textColor : 'text-gray-400'}`}>
                {pillar.projects.length} project{pillar.projects.length !== 1 ? 's' : ''}
              </span>
            </div>
          ))}
        </div>
        {unassignedProjects.length > 0 && (
          <p className="text-amber-600 text-sm mt-3">
            {unassignedProjects.length} project{unassignedProjects.length !== 1 ? 's' : ''} still need to be assigned to pillars
          </p>
        )}
      </div>
    </div>
  );
};

const Step3Vote = ({ projects, setProjects, currentOrg }) => {
  const userVotes = projects.filter(p => p.votes.includes(currentOrg)).length;
  const maxVotes = 4;

  const toggleVote = (projectId) => {
    setProjects(projects.map(p => {
      if (p.id === projectId) {
        const hasVoted = p.votes.includes(currentOrg);
        if (hasVoted) {
          return { ...p, votes: p.votes.filter(v => v !== currentOrg) };
        } else if (userVotes < maxVotes) {
          return { ...p, votes: [...p.votes, currentOrg] };
        }
      }
      return p;
    }));
  };

  const sortedProjects = [...projects].sort((a, b) => b.votes.length - a.votes.length);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Step 3: Vote for Top 4 Projects</h2>
        <p className="text-gray-600 mb-4">
          Each organization gets 4 votes. Click on projects to vote for your top choices.
        </p>

        <div className="flex items-center justify-between bg-purple-50 rounded-lg p-4">
          <span className="font-medium">
            Voting as: <span className="text-purple-800">{ORGANIZATIONS.find(o => o.id === currentOrg)?.name}</span>
          </span>
          <span className={`font-bold ${userVotes >= maxVotes ? 'text-red-600' : 'text-green-600'}`}>
            Votes used: {userVotes} / {maxVotes}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {sortedProjects.map((project, index) => {
          const hasVoted = project.votes.includes(currentOrg);
          return (
            <div
              key={project.id}
              onClick={() => toggleVote(project.id)}
              className={`bg-white rounded-xl shadow-lg p-4 cursor-pointer transition-all border-2 ${
                hasVoted ? 'border-purple-500 bg-purple-50' : 'border-transparent hover:border-purple-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${
                    hasVoted ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{project.name}</p>
                    {project.pillars && project.pillars.length > 0 && (
                      <div className="flex gap-1 mt-1">
                        {project.pillars.map(pid => (
                          <PillarBadge key={pid} pillarId={pid} />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {project.votes.slice(0, 5).map((orgId, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs border-2 border-white"
                        title={ORGANIZATIONS.find(o => o.id === orgId)?.name}
                      >
                        {ORGANIZATIONS.find(o => o.id === orgId)?.name.charAt(0)}
                      </div>
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-purple-800 min-w-12 text-right">
                    {project.votes.length}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Step4Matrix = ({ projects, setProjects, currentOrg }) => {
  const top4Projects = [...projects]
    .sort((a, b) => b.votes.length - a.votes.length)
    .slice(0, 4);

  const [selectedProject, setSelectedProject] = useState(top4Projects[0]?.id);

  const updateMatrix = (projectId, questionId, value) => {
    setProjects(projects.map(p => {
      if (p.id === projectId) {
        return {
          ...p,
          matrix: {
            ...p.matrix,
            [currentOrg]: {
              ...p.matrix[currentOrg],
              [questionId]: value
            }
          }
        };
      }
      return p;
    }));
  };

  const project = projects.find(p => p.id === selectedProject);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Step 4: Project Feasibility Matrix</h2>
        <p className="text-gray-600 mb-4">
          Evaluate each of the top 4 projects using the matrix. Answer from your organization's perspective.
        </p>

        <div className="flex gap-2 flex-wrap">
          {top4Projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setSelectedProject(p.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedProject === p.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
              }`}
            >
              #{i + 1}: {p.name}
            </button>
          ))}
        </div>
      </div>

      {project && (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-purple-800 text-white p-4">
            <h3 className="text-xl font-bold">{project.name}</h3>
            <p className="text-purple-200">
              Responding as: {ORGANIZATIONS.find(o => o.id === currentOrg)?.fullName}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-purple-100">
                <tr>
                  <th className="text-left p-4 font-semibold text-purple-800">Question</th>
                  <th className="p-4 font-semibold text-purple-800 w-48">Your Response</th>
                </tr>
              </thead>
              <tbody>
                {MATRIX_QUESTIONS.map((q, i) => (
                  <tr key={q.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-4 text-gray-700">{q.text}</td>
                    <td className="p-4">
                      {q.type === 'yesno' ? (
                        <div className="flex gap-2 justify-center">
                          {['Yes', 'No', 'Maybe'].map(opt => (
                            <button
                              key={opt}
                              onClick={() => updateMatrix(project.id, q.id, opt)}
                              className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                                project.matrix[currentOrg]?.[q.id] === opt
                                  ? opt === 'Yes' ? 'bg-green-500 text-white'
                                  : opt === 'No' ? 'bg-red-500 text-white'
                                  : 'bg-yellow-500 text-white'
                                  : 'bg-gray-200 hover:bg-gray-300'
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="flex gap-2 justify-center">
                          {q.options.map(opt => (
                            <button
                              key={opt}
                              onClick={() => updateMatrix(project.id, q.id, opt)}
                              className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                                project.matrix[currentOrg]?.[q.id] === opt
                                  ? 'bg-purple-500 text-white'
                                  : 'bg-gray-200 hover:bg-gray-300'
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Show all org responses */}
          <div className="p-4 bg-gray-50 border-t">
            <h4 className="font-semibold text-purple-800 mb-3">All Organization Responses</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Question</th>
                    {ORGANIZATIONS.map(org => (
                      <th key={org.id} className="p-2 text-center">
                        <span className="text-xs">{org.name}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {MATRIX_QUESTIONS.map(q => (
                    <tr key={q.id} className="border-b">
                      <td className="p-2 text-gray-600">{q.text}</td>
                      {ORGANIZATIONS.map(org => (
                        <td key={org.id} className="p-2 text-center">
                          <span className={`inline-block px-2 py-1 rounded text-xs ${
                            project.matrix[org.id]?.[q.id] === 'Yes' ? 'bg-green-100 text-green-800' :
                            project.matrix[org.id]?.[q.id] === 'No' ? 'bg-red-100 text-red-800' :
                            project.matrix[org.id]?.[q.id] ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-400'
                          }`}>
                            {project.matrix[org.id]?.[q.id] || '-'}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Step5Summary = ({ projects }) => {
  const top4Projects = [...projects]
    .sort((a, b) => b.votes.length - a.votes.length)
    .slice(0, 4);

  const calculateFeasibility = (project) => {
    let yesCount = 0;
    let totalResponses = 0;

    Object.values(project.matrix).forEach(orgResponses => {
      Object.values(orgResponses).forEach(response => {
        if (response === 'Yes') yesCount++;
        if (response) totalResponses++;
      });
    });

    return totalResponses > 0 ? Math.round((yesCount / totalResponses) * 100) : 0;
  };

  // Calculate pillar coverage across top 4 projects
  const pillarCoverage = NAP_PILLARS.map(pillar => {
    const projectsWithPillar = top4Projects.filter(p =>
      p.pillars && p.pillars.includes(pillar.id)
    );
    return {
      ...pillar,
      count: projectsWithPillar.length,
      projects: projectsWithPillar.map(p => p.name)
    };
  });

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Step 5: Summary & Next Steps</h2>
        <p className="text-gray-600">
          Review the top projects and their feasibility based on the matrix responses.
        </p>
      </div>

      {/* NAP Pillar Coverage Analysis */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h3 className="text-xl font-bold text-purple-800 mb-4">NAP GBV Pillar Coverage</h3>
        <p className="text-gray-600 mb-4">
          How the top 4 projects align with the National Action Plan pillars:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {pillarCoverage.map(pillar => (
            <div
              key={pillar.id}
              className={`p-3 rounded-lg border-2 ${
                pillar.count > 0 ? pillar.lightColor : 'bg-gray-50'
              } ${pillar.count > 0 ? 'border-current' : 'border-gray-200'}`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className={`${pillar.color} text-white rounded-full px-2 py-0.5 text-xs font-medium`}>
                  P{pillar.id}
                </span>
                <span className={`font-medium text-sm ${pillar.count > 0 ? pillar.textColor : 'text-gray-400'}`}>
                  {pillar.name}
                </span>
              </div>
              <div className={`text-2xl font-bold ${pillar.count > 0 ? pillar.textColor : 'text-gray-300'}`}>
                {pillar.count} project{pillar.count !== 1 ? 's' : ''}
              </div>
              {pillar.count === 0 && (
                <p className="text-xs text-gray-400 mt-1">Gap - no projects address this pillar</p>
              )}
            </div>
          ))}
        </div>

        {/* Gaps warning */}
        {pillarCoverage.some(p => p.count === 0) && (
          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-amber-800 text-sm font-medium">
              Coverage Gaps Identified
            </p>
            <p className="text-amber-700 text-sm">
              The following pillars are not addressed by the top 4 projects:{' '}
              {pillarCoverage.filter(p => p.count === 0).map(p => p.name).join(', ')}
            </p>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {top4Projects.map((project, index) => {
          const feasibility = calculateFeasibility(project);
          const orgCount = Object.keys(project.matrix).length;

          return (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className={`p-4 ${
                feasibility >= 70 ? 'bg-green-600' :
                feasibility >= 40 ? 'bg-yellow-500' :
                'bg-red-500'
              } text-white`}>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm opacity-80">Rank #{index + 1}</span>
                    <h3 className="text-xl font-bold">{project.name}</h3>
                    {project.pillars && project.pillars.length > 0 && (
                      <div className="flex gap-1 mt-1">
                        {project.pillars.map(pid => {
                          const pillar = NAP_PILLARS.find(p => p.id === pid);
                          return (
                            <span key={pid} className="bg-white/20 text-white rounded-full px-2 py-0.5 text-xs font-medium">
                              P{pid}: {pillar?.name}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">{feasibility}%</div>
                    <div className="text-sm opacity-80">Feasibility Score</div>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-800">{project.votes.length}</div>
                    <div className="text-sm text-gray-600">Total Votes</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-800">{orgCount}</div>
                    <div className="text-sm text-gray-600">Orgs Responded</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-800">
                      {Object.values(project.matrix).filter(m => m.lead === 'Yes').length}
                    </div>
                    <div className="text-sm text-gray-600">Willing to Lead</div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Recommendation</h4>
                  <p className={`text-lg font-medium ${
                    feasibility >= 70 ? 'text-green-600' :
                    feasibility >= 40 ? 'text-yellow-600' :
                    'text-red-600'
                  }`}>
                    {feasibility >= 70 ? 'High potential - Pursue this project' :
                     feasibility >= 40 ? 'Moderate potential - Gather more information' :
                     'Low feasibility - Consider alternatives'}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
        <h3 className="text-xl font-bold text-purple-800 mb-4">Next Steps</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center text-sm font-bold">1</span>
            <span>Coordinator to document all facilitation results and distribute to YWC members</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center text-sm font-bold">2</span>
            <span>Collect additional information for high-potential projects</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center text-sm font-bold">3</span>
            <span>If still feasible, create detailed workplans for selected projects</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center text-sm font-bold">4</span>
            <span>Identify funding opportunities and assign lead organizations</span>
          </li>
        </ul>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={() => {
            const data = JSON.stringify(projects, null, 2);
            const blob = new Blob([data], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'ywc-retreat-results.json';
            a.click();
          }}
          className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium"
        >
          Export Results
        </button>
      </div>
    </div>
  );
};

export default function YWCRetreatApp() {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentOrg, setCurrentOrg] = useState('dws');
  const [projects, setProjects] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header currentStep={currentStep} setCurrentStep={setCurrentStep} />

      {/* Context bar - changes based on step */}
      {(currentStep === 1 || currentStep === 2) ? (
        /* Group activity indicator for Steps 1 & 2 */
        <div className="bg-purple-50 border-b">
          <div className="max-w-6xl mx-auto px-6 py-3">
            <div className="flex items-center gap-2 text-sm text-purple-700">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="font-medium">Group Activity</span>
              <span className="text-purple-500">— This step is completed together as a coalition</span>
            </div>
          </div>
        </div>
      ) : (currentStep === 3 || currentStep === 4) ? (
        /* Organization selector for Steps 3 & 4 */
        <div className="bg-white border-b shadow-sm">
          <div className="max-w-6xl mx-auto px-6 py-3">
            <div className="flex items-center gap-4">
              <label className="font-medium text-gray-700">Responding as:</label>
              <select
                value={currentOrg}
                onChange={(e) => setCurrentOrg(e.target.value)}
                className="px-4 py-2 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:outline-none"
              >
                {ORGANIZATIONS.map(org => (
                  <option key={org.id} value={org.id}>
                    {org.name} - {org.fullName}
                  </option>
                ))}
              </select>
              <span className="text-sm text-gray-500">Each organization provides their own responses</span>
            </div>
          </div>
        </div>
      ) : null}

      {/* Step content */}
      {currentStep === 1 && <Step1Brainstorm projects={projects} setProjects={setProjects} />}
      {currentStep === 2 && <Step2Group projects={projects} setProjects={setProjects} />}
      {currentStep === 3 && <Step3Vote projects={projects} setProjects={setProjects} currentOrg={currentOrg} />}
      {currentStep === 4 && <Step4Matrix projects={projects} setProjects={setProjects} currentOrg={currentOrg} />}
      {currentStep === 5 && <Step5Summary projects={projects} />}

      {/* Footer */}
      <div className="bg-white border-t mt-12 py-6">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-500 text-sm">
          <p>Yukon Women's Coalition - 2026 Retreat Planning Tool</p>
          <p className="mt-1">Moving towards a more proactive coalition</p>
        </div>
      </div>
    </div>
  );
}
