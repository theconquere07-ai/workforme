import React, { useState } from 'react';

interface TacticalPlaybooksViewProps {
  onBackToOverview: () => void;
}

export function TacticalPlaybooksView({ onBackToOverview }: TacticalPlaybooksViewProps) {
  const [selectedPlaybookIndex, setSelectedPlaybookIndex] = useState(0);

  const playbooks = [
    {
      id: 'pb-1',
      engine: '1. Cash-Generation Engine',
      engineColor: '#22c55e',
      title: 'High-Ticket Technical Contracting & Consulting ($5,000–$15,000/mo)',
      tagline: 'Converting deep WebGL, WASM, and AI architecture into recurring client cashflow.',
      objective: 'Secure 2-3 high-ticket US/EU clients on monthly retainers ($3,000–$5,000/mo each) with zero hourly micromanagement.',
      phases: [
        {
          phase: 'Phase 1: The Irrefutable Proof of Work',
          steps: [
            'Do NOT send resumes or generic cover letters. Clients ignore text portfolios.',
            'Record a 60-second Loom screen recording demonstrating a live, interactive WebGL 3D model or real-time AI agent in action (e.g. StarkForge CAD topological mesher running at 60 FPS in browser).',
            'Deploy the interactive demo to a custom Netlify URL (e.g. demo-clientname.netlify.app) with their company branding or mock use case.',
          ],
        },
        {
          phase: 'Phase 2: High-Intent Outbound Targeting',
          steps: [
            'Target Series A and Seed funded startups in Spatial Computing, 3D E-Commerce, and Agentic AI via Wellfound, YC Directory, and Twitter.',
            'Reach out directly to Founders / CTOs via LinkedIn and X with: "Saw your WebGL viewer lag on mobile. Built a 2-second fix in WASM that drops draw calls by 70%. Here is a live demo running your actual asset: [Link]".',
            'Target 15 highly personalized outreaches per week; expect 25% response rate.',
          ],
        },
        {
          phase: 'Phase 3: Value-Based Retainer Packaging',
          steps: [
            'Never bill hourly. Hourly billing punishes high-speed top-tier engineering.',
            'Package contracts as: "Tier 1: Architectural Lead ($4,500/mo) - 10 dedicated hours/week, 2 core feature deliveries, unlimited async code reviews, Slack access."',
            'Require 50% upfront deposit or full month prepayment via Stripe / Escrow before first code commit.',
          ],
        },
      ],
    },
    {
      id: 'pb-2',
      engine: '2. Product-Building Engine',
      engineColor: '#22c55e',
      title: 'The 7-Day Micro-SaaS & Developer Tool Inception Blueprint',
      tagline: 'Code once, sell indefinitely. Turning painful technical friction into MRR.',
      objective: 'Launch a self-service micro-SaaS or API tool with Stripe billing within 7 days of validation.',
      phases: [
        {
          phase: 'Phase 1: Pinpoint Developer Friction',
          steps: [
            'Find problems engineers complain about on Twitter/Reddit: "Converting STEP/IGES to GLTF in browser", "Real-time AI voice streaming WebSocket setup", "3D mesh decimation".',
            'Ensure the product has a single core value proposition that can be proven in 10 seconds of usage.',
          ],
        },
        {
          phase: 'Phase 2: Minimalist Production Architecture',
          steps: [
            'Frontend: React + Vite + Tailwind CSS deployed to Netlify Edge.',
            'Core Engine: WebAssembly compiled from C++/Rust for client-side speed (zero server compute cost!).',
            'Database & Auth: Supabase (Auth, PostgreSQL, Row-Level Security).',
            'Payments: Stripe Checkout with tiered monthly billing ($19/mo Starter, $79/mo Pro).',
          ],
        },
        {
          phase: 'Phase 3: Viral Distribution & Organic Launch',
          steps: [
            'Submit to Hacker News (Show HN) at 8:00 AM EST on Tuesday with an honest, technical post title.',
            'Publish an interactive playground on Product Hunt, Reddit /r/webdev, /r/threejs, and relevant Discord communities.',
            'Provide a free tier with watermark or rate-limit to maximize top-of-funnel sharing.',
          ],
        },
      ],
    },
    {
      id: 'pb-3',
      engine: '3. Media & Audience Engine',
      engineColor: '#38bdf8',
      title: 'Building in Public as an Elite Systems Architect',
      tagline: 'Compounding digital distribution that makes client acquisition effortless.',
      objective: 'Grow high-signal technical following (10k+ X followers, 2,500+ Substack readers) focused on 3D, WASM, and AI.',
      phases: [
        {
          phase: 'Phase 1: High-Signal Visual Content',
          steps: [
            'Publish 3 visual engineering breakdowns per week on X (formerly Twitter).',
            'Formula: [Hook with 5-second video/GIF of 3D shader] + [10-tweet breakdown of the math, memory management, and code snippet] + [Call to Action to try the live demo].',
            'Avoid generic motivational fluff. Focus on rare, hard technical problems that 99% of devs cannot solve.',
          ],
        },
        {
          phase: 'Phase 2: The Deep-Dive Substack Newsletter',
          steps: [
            'Publish a bi-weekly deep dive on Sovereign Architecture: e.g. "How I built a browser CAD kernel in WebGL and WASM".',
            'Include architectural diagrams, benchmark charts, and GitHub gist links.',
            'Establish intellectual authority that attracts investors, conference keynotes, and enterprise consulting inquiries.',
          ],
        },
      ],
    },
    {
      id: 'pb-4',
      engine: '4. Competition & Innovation Engine',
      engineColor: '#38bdf8',
      title: 'The Hackathon Winning Formula (1st Prize Track Record)',
      tagline: 'Consistently winning international competitions, bounties, and grants.',
      objective: 'Dominate 3-4 major hackathons per year, capturing $10,000–$50,000 in cash prizes and founder recognition.',
      phases: [
        {
          phase: 'Phase 1: The 3-Tier Winning Stack',
          steps: [
            'Tier 1: Visual Wow Factor (Three.js 3D UI, particle effects, dark Nettools HUD theme) - judges score aesthetics first.',
            'Tier 2: Deep Technical Execution (Real WebAssembly SIMD or live AI agent tool-use loop - not just mock API calls).',
            'Tier 3: Obvious Commercial Utility (Clear revenue model, measurable time saved for users).',
          ],
        },
        {
          phase: 'Phase 2: The Unbeatable 3-Minute Presentation',
          steps: [
            '00:00 - 00:30: The Hook & Acute Problem (relatable, urgent dilemma).',
            '00:30 - 02:00: Live, zero-latency working demo (NO SLIDES, live web interaction only).',
            '02:00 - 02:30: Technical architecture diagram (showcasing systems complexity simply).',
            '02:30 - 03:00: Unit economics, roadmap, and live production deployment link.',
          ],
        },
      ],
    },
    {
      id: 'pb-5',
      engine: '5. Entrepreneurship Engine',
      engineColor: '#22c55e',
      title: 'Sovereign E-Commerce & Physical/Digital Hybrid Commerce',
      tagline: 'Scaling Gauri Idols and proprietary manufactured assets.',
      objective: 'Scale commercial e-commerce revenue ($5,000–$10,000/mo) with high gross margins (>70%).',
      phases: [
        {
          phase: 'Phase 1: Digital-First Product Differentiation',
          steps: [
            'Utilize in-house 3D CAD modeling to design proprietary, intricate sculptures that traditional manufacturers cannot replicate.',
            'Render interactive 3D WebGL product previews on the storefront, giving buyers 360-degree inspection with real-time material shaders.',
          ],
        },
        {
          phase: 'Phase 2: High-Margin B2B Gifting & Institutional Contracts',
          steps: [
            'Target corporate gifting during festive seasons (Diwali, Ganesh Chaturthi, New Year).',
            'Pitch premium luxury packaging and personalized brass/silver inlay to high-net-worth individuals and spiritual trusts.',
          ],
        },
      ],
    },
    {
      id: 'pb-6',
      engine: '6. Emerging Technology Engine',
      engineColor: '#38bdf8',
      title: 'Frontier AI Evaluation & Synthetic 3D Datasets',
      tagline: 'Capitalizing on the multi-billion dollar frontier model training market.',
      objective: 'Generate $2,500–$6,000/mo evaluating frontier AI models and selling proprietary synthetic datasets.',
      phases: [
        {
          phase: 'Phase 1: Elite Red-Teaming & Code Evaluation',
          steps: [
            'Secure tier-1 evaluation status on Outlier, Scale AI, and Alignerr ($80–$150/hr).',
            'Focus on C++, WebAssembly, and systems architecture tracks where supply of expert evaluators is virtually zero.',
            'Establish predictable weekly revenue blocks ($1,000–$1,500/week) with flexible remote hours.',
          ],
        },
        {
          phase: 'Phase 2: Procedural CAD Synthetic Datasets',
          steps: [
            'Spatial AI models desperately need millions of clean, annotated 3D STEP and B-rep models.',
            'Use StarkForge procedural generator to output 50,000 mathematically perfect CAD geometries with bounding boxes, vertex normals, and topology metadata.',
            'License datasets to AI research labs and robotics companies.',
          ],
        },
      ],
    },
  ];

  const currentPlaybook = playbooks[selectedPlaybookIndex];

  return (
    <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '36px 48px 80px' }}>
      {/* Top Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
        <button
          onClick={onBackToOverview}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '7px 14px',
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#d4d4d8',
            fontSize: '12px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          <span>←</span>
          <span>Back to Territory Overview Map</span>
        </button>

        <div style={{ fontSize: '11px', color: '#f59e0b', fontFamily: "'Martian Mono', monospace" }}>
          TACTICAL PLAYBOOKS // 6 CAPITAL ENGINES
        </div>
      </div>

      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <div
          style={{
            fontSize: '11px',
            fontWeight: 700,
            color: '#f59e0b',
            fontFamily: "'Martian Mono', monospace",
            letterSpacing: '0.1em',
            marginBottom: '6px',
          }}
        >
          EXECUTION PLAYBOOKS & MONETIZATION PROTOCOLS
        </div>
        <h1
          style={{
            fontSize: '32px',
            fontWeight: 800,
            color: '#ffffff',
            margin: '0 0 10px 0',
            letterSpacing: '-0.02em',
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          Battle-Tested Tactics for Internet Wealth
        </h1>
        <p style={{ fontSize: '15px', color: '#a1a1aa', margin: 0 }}>
          Exhaustive tactical manuals customized for Abhishek Gangadhar's technical mastery, systems architecture, and unfair advantages.
        </p>
      </div>

      {/* Playbook Navigation Tabs */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '28px', overflowX: 'auto', paddingBottom: '4px' }}>
        {playbooks.map((pb, idx) => (
          <button
            key={pb.id}
            onClick={() => setSelectedPlaybookIndex(idx)}
            style={{
              padding: '10px 16px',
              borderRadius: '8px',
              background: selectedPlaybookIndex === idx ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.03)',
              border: `1px solid ${selectedPlaybookIndex === idx ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.06)'}`,
              color: selectedPlaybookIndex === idx ? '#ffffff' : '#a1a1aa',
              fontSize: '12px',
              fontWeight: selectedPlaybookIndex === idx ? 700 : 500,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.15s ease',
            }}
          >
            {pb.engine}
          </button>
        ))}
      </div>

      {/* Selected Playbook Content */}
      <div
        style={{
          borderRadius: '16px',
          background: 'rgba(18, 18, 22, 0.95)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '36px',
        }}
      >
        <div style={{ marginBottom: '24px' }}>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 700,
              color: currentPlaybook.engineColor,
              fontFamily: "'Martian Mono', monospace",
              letterSpacing: '0.08em',
            }}
          >
            {currentPlaybook.engine.toUpperCase()}
          </span>
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', margin: '6px 0 10px 0', letterSpacing: '-0.01em' }}>
            {currentPlaybook.title}
          </h2>
          <p style={{ fontSize: '14.5px', color: '#d4d4d8', margin: '0 0 16px 0', lineHeight: 1.5 }}>
            {currentPlaybook.tagline}
          </p>

          <div
            style={{
              padding: '12px 18px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderLeft: `3px solid ${currentPlaybook.engineColor}`,
              fontSize: '13px',
              color: '#e4e4e7',
            }}
          >
            <strong style={{ color: '#ffffff' }}>Primary Objective:</strong> {currentPlaybook.objective}
          </div>
        </div>

        {/* Phases */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {currentPlaybook.phases.map((ph, pIdx) => (
            <div
              key={pIdx}
              style={{
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                padding: '20px 24px',
              }}
            >
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', margin: '0 0 14px 0' }}>
                {ph.phase}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {ph.steps.map((st, sIdx) => (
                  <div key={sIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontFamily: "'Martian Mono', monospace",
                        color: currentPlaybook.engineColor,
                        padding: '2px 6px',
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.06)',
                        flexShrink: 0,
                      }}
                    >
                      Step {sIdx + 1}
                    </span>
                    <span style={{ fontSize: '13px', color: '#d4d4d8', lineHeight: 1.55 }}>
                      {st}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
