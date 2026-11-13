/**
 * Internet Opportunity Map & Venture Capital Engine
 * Architecture and persistent data layer for Abhishek Gangadhar's 6 Engines of Internet Wealth
 */

export type EngineId =
  | 'cash_generation'
  | 'product_building'
  | 'media_audience'
  | 'competition_innovation'
  | 'entrepreneurship'
  | 'emerging_tech'
  | 'extended_frontiers';

export type VentureStatus =
  | 'ideation'       // Research & planning
  | 'in_execution'   // Active development / outreach
  | 'active_cashflow'// Generating live revenue / operational
  | 'scaling'        // Compounding and expanding
  | 'completed';     // Won prize / milestone achieved

export type PriorityLevel = 'P0_CRITICAL' | 'P1_HIGH' | 'P2_NORMAL';

export interface SubTrackVenture {
  id: string;
  engineId: EngineId;
  name: string;
  category: string;
  tagline: string;
  badge: string;
  badgeColor: string; // e.g. '#22c55e' or '#38bdf8'
  status: VentureStatus;
  priority: PriorityLevel;
  progressPercent: number; // 0 - 100

  // Financial & Metric Telemetry
  monthlyRevenueTargetUSD: number;
  currentRealizedRevenueUSD: number;
  primaryMetricLabel: string;
  primaryMetricValue: string;
  targetTimeline: string;

  // Strategic Details
  tacticalAngle: string;
  keyDeliverables: string[];
  activeLinkOrRepo?: string;
  nextBestAction: string;
  notes?: string;
}

export interface EngineMetadata {
  id: EngineId;
  numberPrefix: string;
  name: string;
  badge: string;
  badgeType: 'near_term' | 'scalable' | 'audience' | 'prizes' | 'ownership' | 'emerging' | 'frontier';
  badgeColor: string;
  icon: string;
  tagline: string;
  description: string;
  macroStrategy: string;
}

export const ENGINES_METADATA: Record<EngineId, EngineMetadata> = {
  cash_generation: {
    id: 'cash_generation',
    numberPrefix: '01',
    name: 'The Cash-Generation Engine',
    badge: 'Near-term revenue potential',
    badgeType: 'near_term',
    badgeColor: '#22c55e',
    icon: '💵',
    tagline: 'High-leverage client contracts, specialized technical consulting & immediate liquidity.',
    description:
      'Freelancing, remote contracts, web development, AI automation, website building, SEO, video editing, agency services, consulting, white-label development and local business digitisation.',
    macroStrategy:
      'Convert existing technical mastery (WASM, WebGL, AI Agentic APIs) into high-ticket cashflow ($5,000–$15,000/mo) to fund self-directed product incubation without giving up equity.',
  },
  product_building: {
    id: 'product_building',
    numberPrefix: '02',
    name: 'The Product-Building Engine',
    badge: 'Scalable assets',
    badgeType: 'scalable',
    badgeColor: '#22c55e',
    icon: '🧱',
    tagline: 'Code once, sell indefinitely. Zero marginal cost of replication & software leverage.',
    description:
      'SaaS, micro-SaaS, AI agents, APIs, Chrome extensions, Shopify apps, WordPress plugins, developer tools, automation systems, web applications and digital products.',
    macroStrategy:
      'Build proprietary software assets with persistent utility. Focus on developer workflows, WebGL 3D engines, and automated micro-SaaS pipelines that compound MRR automatically.',
  },
  media_audience: {
    id: 'media_audience',
    numberPrefix: '03',
    name: 'The Media & Audience Engine',
    badge: 'Audience compounding',
    badgeType: 'audience',
    badgeColor: '#38bdf8',
    icon: '📢',
    tagline: 'Distribution equity, authoritative technical brand, and inbound gravity.',
    description:
      'YouTube, Instagram, newsletters, blogs, SEO websites, affiliate publishing, UGC, sponsorships, digital communities, educational content and personal branding.',
    macroStrategy:
      'Document high-level technical engineering (Sovereign OS, StarkForge CAD, A.V.I.S.) in public. Build an unshakeable audience of developers, founders, and investors who trust Abhishek Gangadhar.',
  },
  competition_innovation: {
    id: 'competition_innovation',
    numberPrefix: '04',
    name: 'The Competition & Innovation Engine',
    badge: 'Prizes, recognition, opportunities',
    badgeType: 'prizes',
    badgeColor: '#38bdf8',
    icon: '🏆',
    tagline: 'Asymmetric upside, elite peer validation, hackathon prize purses & non-dilutive grants.',
    description:
      'Hackathons, coding competitions, open-source contributions, developer bounties, ethical bug bounties, research challenges, startup competitions and innovation grants.',
    macroStrategy:
      'Compete in top-tier national and global developer hackathons (Devpost, ETHGlobal, Kaggle). Capture $2,000–$25,000 prize purses while proving technical superiority and earning grant funding.',
  },
  entrepreneurship: {
    id: 'entrepreneurship',
    numberPrefix: '05',
    name: 'The Entrepreneurship Engine',
    badge: 'Business ownership',
    badgeType: 'ownership',
    badgeColor: '#22c55e',
    icon: '🏛️',
    tagline: 'Commercial enterprise, direct-to-consumer e-commerce, and high-margin ownership.',
    description:
      'Startups, e-commerce, dropshipping, B2B distribution, private-label products, marketplaces, SaaS businesses, digital agencies, partnerships and licensing.',
    macroStrategy:
      'Operate high-converting digital storefronts (Gauri Idols) alongside venture incubations (StarkForge CAD). Control margins, ownership, and enterprise equity for generational wealth creation.',
  },
  emerging_tech: {
    id: 'emerging_tech',
    numberPrefix: '06',
    name: 'The Emerging Technology Engine',
    badge: 'Emerging markets',
    badgeType: 'emerging',
    badgeColor: '#38bdf8',
    icon: '⚡',
    tagline: 'Riding exponential technology waves at the frontier: AI model evaluation, multi-agent swarms & cloud microVMs.',
    description:
      'AI model evaluation, data annotation, AI training, agent development, workflow automation, testing, technical writing, cloud computing and cybersecurity research.',
    macroStrategy:
      'Position at the frontier of multi-agent LLM systems, cryptographic sandbox isolation, and synthetic training datasets. Capture high-value enterprise consulting and frontier research bounties.',
  },
  extended_frontiers: {
    id: 'extended_frontiers',
    numberPrefix: '07',
    name: 'Extended Frontiers & Long-Tail Operations',
    badge: 'High-leverage frontier expansion',
    badgeType: 'frontier',
    badgeColor: '#f59e0b',
    icon: '🌌',
    tagline: 'Exploratory horizons: online education, digital asset stores, B2B lead generation & specialised advisory.',
    description:
      'Online education, paid research, tutoring, digital assets, stock media, design marketplaces, remote internships, virtual assistance, B2B lead generation and specialised professional services.',
    macroStrategy:
      'Monetize specialized expertise, 3D parametric assets, and algorithmic datasets through automated digital marketplaces and high-tier consulting retainers.',
  },
};

export const INITIAL_VENTURES: SubTrackVenture[] = [
  // ========================================================
  // 1. THE CASH-GENERATION ENGINE (Near-term revenue potential)
  // ========================================================
  {
    id: 'cg-1',
    engineId: 'cash_generation',
    name: 'High-Ticket WebGL & 3D Web App Contracts',
    category: 'Freelancing & Remote Contracts',
    tagline: 'Custom Three.js, WebGL shader visualizers & interactive 3D configurators for global clients.',
    badge: 'Active Cashflow',
    badgeColor: '#22c55e',
    status: 'active_cashflow',
    priority: 'P0_CRITICAL',
    progressPercent: 85,
    monthlyRevenueTargetUSD: 4500,
    currentRealizedRevenueUSD: 3200,
    primaryMetricLabel: 'Closed Client Contracts',
    primaryMetricValue: '3 Active Retainers',
    targetTimeline: 'Weekly milestone billing',
    tacticalAngle: 'Target luxury e-commerce brands, real-estate firms, and tech startups needing interactive 3D graphics in browser.',
    keyDeliverables: [
      'Interactive 60 FPS WebGL product visualizer with PBR materials',
      'Mobile-responsive Three.js canvas with touch orbits',
      'Integration with Shopify & custom Stripe checkout',
    ],
    activeLinkOrRepo: 'https://upwork.com/freelancers/~abhishekg',
    nextBestAction: 'Deliver milestone 2 for client CAD viewer and invoice $1,400 balance.',
  },
  {
    id: 'cg-2',
    engineId: 'cash_generation',
    name: 'Enterprise AI Automation & Workflow Engineering',
    category: 'AI Automation & Systems Integration',
    tagline: 'Autonomous multi-agent workflows connecting CRM, Supabase, and Gemini API for mid-market businesses.',
    badge: 'In Execution',
    badgeColor: '#38bdf8',
    status: 'in_execution',
    priority: 'P1_HIGH',
    progressPercent: 70,
    monthlyRevenueTargetUSD: 3500,
    currentRealizedRevenueUSD: 1800,
    primaryMetricLabel: 'Automated Pipelines',
    primaryMetricValue: '12 Live n8n Workflows',
    targetTimeline: 'Q4 2026 sprint',
    tacticalAngle: 'Package n8n + Gemini 3.8 Flash integrations as a $2,500 turnkey setup for marketing agencies and logistics firms.',
    keyDeliverables: [
      'Autonomous email triage and lead qualification agent',
      'Automated invoice extraction and Supabase logging pipeline',
      'Telegram/Slack alerts with structured JSON payloads',
    ],
    nextBestAction: 'Pitch standardized automation blueprint to 5 digital marketing agencies on LinkedIn.',
  },
  {
    id: 'cg-3',
    engineId: 'cash_generation',
    name: 'Local Business Modernization & POS Cloud Suite',
    category: 'Local Business Digitisation',
    tagline: 'Digitizing regional manufacturers, cultural artisans, and retail stores with modern inventory and payment systems.',
    badge: 'Scaling',
    badgeColor: '#a855f7',
    status: 'scaling',
    priority: 'P1_HIGH',
    progressPercent: 75,
    monthlyRevenueTargetUSD: 2000,
    currentRealizedRevenueUSD: 1500,
    primaryMetricLabel: 'Digitized Outlets',
    primaryMetricValue: '4 Regional Stores',
    targetTimeline: 'Ongoing regional expansion',
    tacticalAngle: 'Leverage verified success with Gauri Idols to onboard textile, idol, and handicraft businesses across Karnataka and Maharashtra.',
    keyDeliverables: [
      'Custom inventory catalog with QR code payment integration',
      'Mobile-optimized order tracking portal',
      'Google My Business & local SEO optimization package',
    ],
    activeLinkOrRepo: 'https://gauriidols.netlify.app',
    nextBestAction: 'Onboard 2 textile manufacturers in Ichalkaranji onto the cloud catalog platform.',
  },
  {
    id: 'cg-4',
    engineId: 'cash_generation',
    name: 'White-Label Engineering & Architecture Retainers',
    category: 'White-Label Development',
    tagline: 'Serving as the silent technical powerhouse for design agencies needing high-performance web engineering.',
    badge: 'Active Cashflow',
    badgeColor: '#22c55e',
    status: 'active_cashflow',
    priority: 'P0_CRITICAL',
    progressPercent: 90,
    monthlyRevenueTargetUSD: 3000,
    currentRealizedRevenueUSD: 2500,
    primaryMetricLabel: 'Agency Partners',
    primaryMetricValue: '2 Retainer Agencies',
    targetTimeline: 'Monthly recurring contract',
    tacticalAngle: 'Guaranteed 20 hours/month of senior systems architecture and frontend WebAssembly/WebGL performance tuning.',
    keyDeliverables: [
      'Zero-dependency headless UI components',
      'Sub-second Core Web Vitals optimization',
      'Custom backend APIs with Supabase PostgreSQL and Row Level Security',
    ],
    nextBestAction: 'Review monthly architecture deliverables and renew Q1 retainer contracts.',
  },

  // ========================================================
  // 2. THE PRODUCT-BUILDING ENGINE (Scalable assets)
  // ========================================================
  {
    id: 'pb-1',
    engineId: 'product_building',
    name: 'StarkForge CAD Engine (Browser-Native 3D Parametric Suite)',
    category: 'High-Performance SaaS & WebGL Engine',
    tagline: 'Browser-native parametric CAD suite utilizing WebGL shaders, WebAssembly SIMD, and topological meshing.',
    badge: 'In Execution',
    badgeColor: '#38bdf8',
    status: 'in_execution',
    priority: 'P0_CRITICAL',
    progressPercent: 82,
    monthlyRevenueTargetUSD: 8000,
    currentRealizedRevenueUSD: 0,
    primaryMetricLabel: 'CAD Kernel FPS',
    primaryMetricValue: '60 FPS @ 500k Polys',
    targetTimeline: 'Alpha release 2026',
    tacticalAngle: 'Position as the Figma of 3D CAD modeling. Zero software installation, real-time collaboration, instant STEP/STL export.',
    keyDeliverables: [
      'Topological vertex mesher running in WebAssembly',
      'Parametric feature tree with constraint solver',
      'Instant WebGL rendering with SSAO, PBR shading and dimension overlays',
    ],
    activeLinkOrRepo: 'https://starkforge.dev',
    nextBestAction: 'Complete parametric lofting tool and release benchmark whitepaper to Hacker News.',
  },
  {
    id: 'pb-2',
    engineId: 'product_building',
    name: 'Sovereign OS (Hardware-Isolated Personal Web Microkernel)',
    category: 'System Software & Microkernel Architecture',
    tagline: 'Hardware-isolated distributed personal operating system architecture with cryptographic IPC and process memory sandboxing.',
    badge: 'In Execution',
    badgeColor: '#38bdf8',
    status: 'in_execution',
    priority: 'P0_CRITICAL',
    progressPercent: 78,
    monthlyRevenueTargetUSD: 5000,
    currentRealizedRevenueUSD: 0,
    primaryMetricLabel: 'IPC Latency',
    primaryMetricValue: '0.42ms Process Bus',
    targetTimeline: 'Patent publication pending',
    tacticalAngle: 'Self-hosted and web-native personal cloud OS. Eliminates SaaS lock-in with cryptographic process isolation.',
    keyDeliverables: [
      'Virtual memory manager and event dispatcher',
      'IndexedDB encrypted object persistence driver',
      'Sandboxed web worker execution harness with capability tokens',
    ],
    activeLinkOrRepo: 'https://github.com/theconquere07V1Mark02/jarvis-ecosystem',
    nextBestAction: 'Finalize process supervisor restart policies and prepare open-source kernel repository.',
  },
  {
    id: 'pb-3',
    engineId: 'product_building',
    name: 'Nettools Local Utility Suite (Zero-Cloud File & Media Tools)',
    category: 'Developer Tools & Micro-SaaS',
    tagline: '172+ browser-native image, video, PDF, and file transformation tools running 100% locally on user devices.',
    badge: 'Scaling',
    badgeColor: '#a855f7',
    status: 'scaling',
    priority: 'P1_HIGH',
    progressPercent: 92,
    monthlyRevenueTargetUSD: 2500,
    currentRealizedRevenueUSD: 850,
    primaryMetricLabel: 'Indexed Tools',
    primaryMetricValue: '172 Local Utilities',
    targetTimeline: 'Pro tier rollout',
    tacticalAngle: 'Target privacy-conscious users and developers who reject uploading confidential PDFs and media to cloud servers.',
    keyDeliverables: [
      'FFmpeg WebAssembly video transcoder running in web worker',
      'PDF merge, split, redact, and digital stamp injector',
      'Batch SVG/PNG optimizer with WebP conversion',
    ],
    nextBestAction: 'Launch optional lifetime Pro license for batch automation workflows.',
  },
  {
    id: 'pb-4',
    engineId: 'product_building',
    name: 'A.V.I.S. Copilot Chrome Extension & API Bridge',
    category: 'Chrome Extensions & AI Agents',
    tagline: 'Browser sidecar injecting live repository telemetry, code review, and executive task orchestration into any tab.',
    badge: 'Ideation',
    badgeColor: '#eab308',
    status: 'ideation',
    priority: 'P2_NORMAL',
    progressPercent: 40,
    monthlyRevenueTargetUSD: 1500,
    currentRealizedRevenueUSD: 0,
    primaryMetricLabel: 'Manifest V3 State',
    primaryMetricValue: 'Prototype Active',
    targetTimeline: 'Q1 2027 launch',
    tacticalAngle: 'Allow developers to summon their private JARVIS memory and task tracker directly while browsing GitHub and Jira.',
    keyDeliverables: [
      'Manifest V3 side-panel UI with dark obsidian styling',
      'Two-way sync with Supabase workspace database',
      'Quick screenshot-to-code analysis powered by Gemini Vision',
    ],
    nextBestAction: 'Package background worker script and test Chrome Web Store developer submission.',
  },

  // ========================================================
  // 3. THE MEDIA & AUDIENCE ENGINE (Audience compounding)
  // ========================================================
  {
    id: 'ma-1',
    engineId: 'media_audience',
    name: 'YouTube Systems Engineering & Build in Public Channel',
    category: 'Long-Form Video & Technical Media',
    tagline: 'Deep-dive architectural breakdowns of WebGL shaders, CAD algorithms, and sovereign microkernels.',
    badge: 'In Execution',
    badgeColor: '#38bdf8',
    status: 'in_execution',
    priority: 'P0_CRITICAL',
    progressPercent: 65,
    monthlyRevenueTargetUSD: 2000,
    currentRealizedRevenueUSD: 350,
    primaryMetricLabel: 'Subscribers / Views',
    primaryMetricValue: '2.4k Devs / 45k Views',
    targetTimeline: 'Bi-weekly uploads',
    tacticalAngle: 'High-production technical videos showcasing actual working code (StarkForge CAD, Three.js shaders). Audiences gravitate towards true builders.',
    keyDeliverables: [
      'Video 1: Building a 60 FPS Parametric 3D CAD Kernel in Browser (Complete breakdown)',
      'Video 2: Why I Replaced SaaS with Sovereign Web Microkernels',
      'High-retention 4K motion graphics created with local scripts',
    ],
    activeLinkOrRepo: 'https://youtube.com',
    nextBestAction: 'Record and edit 15-minute monograph on WebAssembly SIMD mesh optimization.',
  },
  {
    id: 'ma-2',
    engineId: 'media_audience',
    name: 'X (Twitter) & LinkedIn Technical Thought Leadership',
    category: 'Personal Branding & Audience Compounding',
    tagline: 'Daily concise architectural monographs, code snippets, and system design diagrams establishing executive authority.',
    badge: 'Active Cashflow',
    badgeColor: '#22c55e',
    status: 'active_cashflow',
    priority: 'P0_CRITICAL',
    progressPercent: 88,
    monthlyRevenueTargetUSD: 1500,
    currentRealizedRevenueUSD: 750,
    primaryMetricLabel: 'Network Reach',
    primaryMetricValue: '8.5k Network Followers',
    targetTimeline: 'Daily publishing rhythm',
    tacticalAngle: 'Share engineering progress, benchmark graphs, and architectural diagrams. Attracts high-value founders, seed investors, and inbound client contracts.',
    keyDeliverables: [
      'Weekly viral thread dissecting complex system architectures',
      'Interactive visual GIFs of StarkForge CAD rendering in browser',
      'Curated network interactions with field titans (Carmack, Karpathy, Dalio models)',
    ],
    activeLinkOrRepo: 'https://x.com/theconquere07',
    nextBestAction: 'Publish 8-tweet case study on how StarkForge CAD handles 500,000 vertices with zero lag.',
  },
  {
    id: 'ma-3',
    engineId: 'media_audience',
    name: 'Sovereign Systems Weekly Newsletter (Substack)',
    category: 'Email Newsletters & Technical Publishing',
    tagline: 'Curated technical newsletter analyzing edge computing, AI agent autonomy, and distributed personal clouds.',
    badge: 'In Execution',
    badgeColor: '#38bdf8',
    status: 'in_execution',
    priority: 'P1_HIGH',
    progressPercent: 60,
    monthlyRevenueTargetUSD: 1200,
    currentRealizedRevenueUSD: 200,
    primaryMetricLabel: 'Active Readers',
    primaryMetricValue: '1.2k Engineers',
    targetTimeline: 'Every Sunday 09:00 AM',
    tacticalAngle: 'High signal, zero fluff. Detailed analysis of real systems code, memory safety, and web graphics.',
    keyDeliverables: [
      'Edition 1: The Death of Centralized SaaS & The Rise of Sovereign Clouds',
      'Edition 2: GPU Compute in Browser: WebGPU vs WebGL in 2026',
      'Sponsorship slot integration for developer-focused cloud tools',
    ],
    nextBestAction: 'Draft Sunday edition focusing on local-first LLM telemetry engines.',
  },

  // ========================================================
  // 4. THE COMPETITION & INNOVATION ENGINE (Prizes & grants)
  // ========================================================
  {
    id: 'ci-1',
    engineId: 'competition_innovation',
    name: 'National & Global Developer Hackathon Campaign',
    category: 'Competitive Engineering & Hackathons',
    tagline: 'Systematic participation in high-purse hackathons (ETHGlobal, Devpost, Google AI Hackathons).',
    badge: 'Completed',
    badgeColor: '#22c55e',
    status: 'completed',
    priority: 'P0_CRITICAL',
    progressPercent: 100,
    monthlyRevenueTargetUSD: 3000,
    currentRealizedRevenueUSD: 4500,
    primaryMetricLabel: 'Hackathon Record',
    primaryMetricValue: '1st Place National Win',
    targetTimeline: 'Quarterly campaigns',
    tacticalAngle: 'Build working, deployable prototypes in 48 hours utilizing our pre-built JARVIS component library and Three.js visualizer templates.',
    keyDeliverables: [
      '1st Place National Level Engineering Hackathon Trophy & ₹1,00,000 prize purse',
      'AI-powered autonomous triage demo with live WebGL presentation',
      'Verified credential archived in DocGov Vault and resume',
    ],
    nextBestAction: 'Register team for upcoming Google Gemini 3 Global Developer Challenge with A.V.I.S. Copilot submission.',
  },
  {
    id: 'ci-2',
    engineId: 'competition_innovation',
    name: 'Developer Bounties & Open-Source Grants',
    category: 'Developer Bounties & Feature Grants',
    tagline: 'Solving high-difficulty open issues on Algora, Gitcoin, and WebGL/Three.js ecosystem repositories for instant USD payouts.',
    badge: 'Active Cashflow',
    badgeColor: '#22c55e',
    status: 'active_cashflow',
    priority: 'P1_HIGH',
    progressPercent: 80,
    monthlyRevenueTargetUSD: 2000,
    currentRealizedRevenueUSD: 1600,
    primaryMetricLabel: 'Claimed Bounties',
    primaryMetricValue: '$1,600 Captured',
    targetTimeline: 'Weekly bounty scan',
    tacticalAngle: 'Focus on WebGL shader performance bugs, TypeScript type soundness, and WebAssembly memory leak issues where other developers lack depth.',
    keyDeliverables: [
      'PR merged: Resolved GLTF memory leak in Three.js animation loader ($500 bounty)',
      'PR merged: Implemented SIMD vector math acceleration in web mesh library ($650 bounty)',
      'Algora verified solver badge attached to GitHub profile',
    ],
    activeLinkOrRepo: 'https://github.com/theconquere07V1Mark02',
    nextBestAction: 'Review open $800 bounty on WebGPU compute pipeline shader synchronization.',
  },
  {
    id: 'ci-3',
    engineId: 'competition_innovation',
    name: 'State Tech Grants & Institutional Innovation Funds',
    category: 'Innovation Grants & Research Funds',
    tagline: 'Securing non-dilutive government and academic grants for Sovereign OS and educational CAD tooling.',
    badge: 'In Execution',
    badgeColor: '#38bdf8',
    status: 'in_execution',
    priority: 'P1_HIGH',
    progressPercent: 65,
    monthlyRevenueTargetUSD: 5000,
    currentRealizedRevenueUSD: 0,
    primaryMetricLabel: 'Grant Applications',
    primaryMetricValue: '2 Under Institutional Review',
    targetTimeline: 'Grant cycle 2026-2027',
    tacticalAngle: 'Leverage SIT Innovation Hub and VTU academic affiliation to apply for Karnataka State Tech Grants and Startup India seed funds.',
    keyDeliverables: [
      'Grant proposal monograph: Browser-Native Parametric CAD for Indian Engineering Colleges',
      'Endorsement letter from Principal & Senior Dean of Engineering Dr. K.S. Sridhar',
      'Hardware allocation for dedicated GPU server cluster on campus',
    ],
    nextBestAction: 'Submit revised budget annexure to SIT Innovation Hub review council.',
  },

  // ========================================================
  // 5. THE ENTREPRENEURSHIP ENGINE (Business ownership)
  // ========================================================
  {
    id: 'en-1',
    engineId: 'entrepreneurship',
    name: 'Gauri Idols Live Commerce Enterprise',
    category: 'Production E-Commerce & Cultural Artistry',
    tagline: 'Production digital cultural commerce platform deployed on Netlify Edge featuring real-time 3D model previews, Stripe checkout, and regional logistics.',
    badge: 'Scaling',
    badgeColor: '#a855f7',
    status: 'scaling',
    priority: 'P0_CRITICAL',
    progressPercent: 90,
    monthlyRevenueTargetUSD: 6000,
    currentRealizedRevenueUSD: 4800,
    primaryMetricLabel: 'Order Volume',
    primaryMetricValue: '350+ Orders / ₹4.2L GMV',
    targetTimeline: 'Festival peak seasons',
    tacticalAngle: 'High-trust, clean production e-commerce store with real-time 3D model previews, customer reviews, and automated WhatsApp order dispatch.',
    keyDeliverables: [
      'Production platform live at gauriidols.netlify.app with SSL verification',
      'Integrated Stripe and Razorpay payment gateways with instant reconciliation',
      'Automated digital invoice and courier tracking dispatch system',
    ],
    activeLinkOrRepo: 'https://gauriidols.netlify.app',
    nextBestAction: 'Optimize regional WhatsApp notification bot for upcoming Ganesh Chaturthi pre-orders.',
  },
  {
    id: 'en-2',
    engineId: 'entrepreneurship',
    name: 'StarkForge Technologies Private Limited (Incorporation)',
    category: 'Deep Tech Startup Incubation',
    tagline: 'Commercial entity housing intellectual property, patents, enterprise licenses, and institutional contracts for StarkForge CAD.',
    badge: 'In Execution',
    badgeColor: '#38bdf8',
    status: 'in_execution',
    priority: 'P0_CRITICAL',
    progressPercent: 70,
    monthlyRevenueTargetUSD: 10000,
    currentRealizedRevenueUSD: 0,
    primaryMetricLabel: 'Entity Status',
    primaryMetricValue: 'Incorporation & Trademark',
    targetTimeline: 'Fiscal Year 2026-27',
    tacticalAngle: 'Own 100% of founder equity. Establish Delaware/Bengaluru legal structure to license the CAD meshing kernel to engineering institutions and aerospace suppliers.',
    keyDeliverables: [
      'Trademark application for StarkForge CAD & Sovereign OS',
      'Cap table with zero debt and founder control',
      'Commercial enterprise pilot agreement template for universities',
    ],
    nextBestAction: 'Review trademark classification docs with legal advisor and file preliminary application.',
  },
  {
    id: 'en-3',
    engineId: 'entrepreneurship',
    name: 'Digital Agency & Enterprise Systems Retainers',
    category: 'Digital Agency & Technology Advisory',
    tagline: 'Full-service engineering agency building custom internal tools, dashboards, and cloud backends for manufacturing and logistics firms.',
    badge: 'Active Cashflow',
    badgeColor: '#22c55e',
    status: 'active_cashflow',
    priority: 'P1_HIGH',
    progressPercent: 85,
    monthlyRevenueTargetUSD: 5000,
    currentRealizedRevenueUSD: 3800,
    primaryMetricLabel: 'Client Retainers',
    primaryMetricValue: '₹3.1L / Month Stable',
    targetTimeline: 'Quarterly review contracts',
    tacticalAngle: 'Provide turnkey engineering solutions that save clients 40+ hours per week of manual spreadsheet operations.',
    keyDeliverables: [
      'Custom inventory and billing dashboard deployed on Render & Supabase',
      'Multi-role authentication with biometric DocGov identity checks',
      '99.9% uptime SLA with automated Sentry and Prometheus monitoring',
    ],
    nextBestAction: 'Deliver Q4 inventory optimization report to regional manufacturing client.',
  },

  // ========================================================
  // 6. THE EMERGING TECHNOLOGY ENGINE (Emerging markets)
  // ========================================================
  {
    id: 'et-1',
    engineId: 'emerging_tech',
    name: 'Autonomous Multi-Agent AI Swarm Architectures',
    category: 'Agent Development & Swarms',
    tagline: 'Designing and building self-healing multi-agent swarms using Gemini API, function calling, and structured JSON outputs.',
    badge: 'In Execution',
    badgeColor: '#38bdf8',
    status: 'in_execution',
    priority: 'P0_CRITICAL',
    progressPercent: 84,
    monthlyRevenueTargetUSD: 4000,
    currentRealizedRevenueUSD: 1200,
    primaryMetricLabel: 'Active Agent Swarms',
    primaryMetricValue: 'A.V.I.S. Core + 4 Workers',
    targetTimeline: 'Integrated in Workspace',
    tacticalAngle: 'Move beyond simple chatbots to agents with long-term repository memory, direct code editing tools, and multi-turn planning.',
    keyDeliverables: [
      'A.V.I.S. Copilot v2.8 running Gemini 3.8 Flash with local telemetry fallback',
      'Autonomous project auditor detecting nomenclature bugs and blocked milestones',
      'Context-aware memory indexing across 28 repositories in workspace',
    ],
    activeLinkOrRepo: '/avis',
    nextBestAction: 'Implement real-time WebSocket Live API bidirectional voice streaming in A.V.I.S.',
  },
  {
    id: 'et-2',
    engineId: 'emerging_tech',
    name: 'AI Model Red-Teaming, Evaluation & Safety Benchmarks',
    category: 'AI Model Evaluation & Red-Teaming',
    tagline: 'Participating in frontier model vulnerability assessments, jailbreak mitigation, and structured evaluation benchmarks.',
    badge: 'Active Cashflow',
    badgeColor: '#22c55e',
    status: 'active_cashflow',
    priority: 'P1_HIGH',
    progressPercent: 75,
    monthlyRevenueTargetUSD: 2500,
    currentRealizedRevenueUSD: 1900,
    primaryMetricLabel: 'Evaluated Runs',
    primaryMetricValue: '450+ Verified Prompts',
    targetTimeline: 'Monthly advisory cycles',
    tacticalAngle: 'High-paying domain contracts ($80-$150/hr) evaluating code generation fidelity, mathematical proofs, and system exploit boundaries in frontier models.',
    keyDeliverables: [
      'Detailed evaluation dataset on C++/WASM memory vulnerability detection',
      'Security benchmark report on prompt injection defenses in agentic tool-use loops',
      'Verified evaluator profile on Outlier and Scale AI platforms',
    ],
    nextBestAction: 'Complete weekly 15-task evaluation quota for frontier reasoning model.',
  },
  {
    id: 'et-3',
    engineId: 'emerging_tech',
    name: 'Synthetic Data Generation & Topological Mesh Datasets',
    category: 'Data Annotation & Synthetic Data',
    tagline: 'Algorithmic generation of 3D CAD meshes, B-rep topologies, and annotated code datasets for training spatial AI models.',
    badge: 'Ideation',
    badgeColor: '#eab308',
    status: 'ideation',
    priority: 'P2_NORMAL',
    progressPercent: 45,
    monthlyRevenueTargetUSD: 3000,
    currentRealizedRevenueUSD: 0,
    primaryMetricLabel: 'Synthesized Models',
    primaryMetricValue: '10,000 STEP Geometries',
    targetTimeline: '2027 frontier cycle',
    tacticalAngle: 'Spatial AI models require massive clean 3D datasets. Use StarkForge CAD kernel to generate millions of mathematically precise parametric solids.',
    keyDeliverables: [
      'Automated CAD solid generator script in Node.js & WebAssembly',
      'JSON-LD annotated metadata for vertex normal distributions',
      'Dataset package ready for academic and enterprise licensing',
    ],
    nextBestAction: 'Write prototype procedural script generating 1,000 randomized mechanical brackets.',
  },

  // ========================================================
  // 7. EXTENDED FRONTIERS & LONG-TAIL OPERATIONS
  // ========================================================
  {
    id: 'ef-1',
    engineId: 'extended_frontiers',
    name: 'Interactive WebGL & Systems Math Masterclasses',
    category: 'Online Education & Masterclasses',
    tagline: 'Premium video courses and interactive coding walkthroughs teaching developers how to build 3D engines and microkernels.',
    badge: 'Ideation',
    badgeColor: '#eab308',
    status: 'ideation',
    priority: 'P1_HIGH',
    progressPercent: 50,
    monthlyRevenueTargetUSD: 3000,
    currentRealizedRevenueUSD: 400,
    primaryMetricLabel: 'Pre-registered Students',
    primaryMetricValue: '180 Waitlist Devs',
    targetTimeline: 'Q1 2027 launch',
    tacticalAngle: 'Sell a high-ticket $149 cohort course "Build a CAD Engine in Three.js from Scratch". Direct passive cashflow.',
    keyDeliverables: [
      'Comprehensive 8-module syllabus covering matrix transforms, shaders, and raycasting',
      'Interactive in-browser code editor with automated unit test verification',
      'Private Discord community for enrolled students',
    ],
    nextBestAction: 'Record 3 sample video lessons and publish free landing page on Netlify.',
  },
  {
    id: 'ef-2',
    engineId: 'extended_frontiers',
    name: 'High-Precision 3D Parametric Asset Store',
    category: 'Digital Assets & Design Marketplaces',
    tagline: 'Selling ready-to-manufacture STEP/STL models, industrial mechanical parts, and spiritual idols on digital marketplaces.',
    badge: 'Active Cashflow',
    badgeColor: '#22c55e',
    status: 'active_cashflow',
    priority: 'P1_HIGH',
    progressPercent: 80,
    monthlyRevenueTargetUSD: 1500,
    currentRealizedRevenueUSD: 950,
    primaryMetricLabel: 'Listed Assets',
    primaryMetricValue: '85 Parametric Models',
    targetTimeline: 'Passive marketplace sales',
    tacticalAngle: 'Distribute on CGTrader, TurboSquid, and Gauri Idols digital download portal. 100% profit margin.',
    keyDeliverables: [
      '85 watertight 3D printable meshes verified in Blender and MeshLab',
      'Automated digital delivery upon Stripe payment confirmation',
      'High-resolution PBR renders for marketplace thumbnail showcase',
    ],
    activeLinkOrRepo: 'https://gauriidols.netlify.app',
    nextBestAction: 'Upload 15 new mechanical bracket assemblies to digital asset store.',
  },
  {
    id: 'ef-3',
    engineId: 'extended_frontiers',
    name: 'B2B High-Intent Developer Lead Scraping Engine',
    category: 'B2B Lead Generation & Scraping Pipelines',
    tagline: 'Custom automated scrapers extracting hiring signals, funded AI startups, and tech stack transitions for outbound agency sales.',
    badge: 'In Execution',
    badgeColor: '#38bdf8',
    status: 'in_execution',
    priority: 'P2_NORMAL',
    progressPercent: 65,
    monthlyRevenueTargetUSD: 2000,
    currentRealizedRevenueUSD: 600,
    primaryMetricLabel: 'Qualified Leads',
    primaryMetricValue: '1,200 Verified Founders',
    targetTimeline: 'Continuous ingestion',
    tacticalAngle: 'Scrape YC directory, Wellfound, and GitHub commit velocity to identify companies actively hiring Three.js and AI engineers.',
    keyDeliverables: [
      'Automated headless browser scraper with anti-bot handling and rotating proxies',
      'Enriched contact data (verified work emails, LinkedIn handles, tech stack)',
      'Direct sync to JARVIS Strategic Contacts Engine and CRM',
    ],
    nextBestAction: 'Run weekly scrape for 200 US-based startups that closed Seed/Series A rounds.',
  },
];

const STORAGE_KEY = 'JARVIS_OPPORTUNITY_MAP_VENTURES_V1';

export class OpportunityMapStore {
  private static cached: SubTrackVenture[] | null = null;

  public static getVentures(): SubTrackVenture[] {
    if (this.cached) return this.cached;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const defaultIds = new Set(INITIAL_VENTURES.map((v) => v.id));
          const custom = parsed.filter((v: SubTrackVenture) => !defaultIds.has(v.id));
          const merged = [...INITIAL_VENTURES, ...custom];
          this.cached = merged;
          return merged;
        }
      }
    } catch {}
    this.cached = INITIAL_VENTURES;
    return INITIAL_VENTURES;
  }

  public static addVenture(venture: SubTrackVenture): SubTrackVenture[] {
    const current = this.getVentures();
    const updated = [venture, ...current];
    this.cached = updated;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {}
    return updated;
  }

  public static updateVenture(id: string, updates: Partial<SubTrackVenture>): SubTrackVenture[] {
    const current = this.getVentures();
    const updated = current.map((v) => (v.id === id ? { ...v, ...updates } : v));
    this.cached = updated;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {}
    return updated;
  }

  public static deleteVenture(id: string): SubTrackVenture[] {
    const current = this.getVentures();
    const updated = current.filter((v) => v.id !== id);
    this.cached = updated;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {}
    return updated;
  }
}
