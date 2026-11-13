import React from 'react';
import { SubTrackVenture, ENGINES_METADATA } from '../../../lib/opportunityMapData';

interface ExtendedFrontiersViewProps {
  ventures: SubTrackVenture[];
  onBackToOverview: () => void;
  onOpenAddModal: () => void;
  onUpdateVenture: (id: string, updates: Partial<SubTrackVenture>) => void;
}

export function ExtendedFrontiersView({
  ventures,
  onBackToOverview,
  onOpenAddModal,
  onUpdateVenture,
}: ExtendedFrontiersViewProps) {
  const frontierVentures = ventures.filter((v) => v.engineId === 'extended_frontiers');
  const engineMeta = ENGINES_METADATA.extended_frontiers;

  const totalRealized = frontierVentures.reduce((acc, v) => acc + (v.currentRealizedRevenueUSD || 0), 0);
  const totalTarget = frontierVentures.reduce((acc, v) => acc + (v.monthlyRevenueTargetUSD || 0), 0);

  const frontierDomains = [
    {
      title: 'Online Education & Masterclasses',
      icon: '🎓',
      description: 'Cohort-based courses, WebGL shaders masterclasses, systems programming deep dives.',
      monetization: '$100–$500 per seat cohort sales, asynchronous Gumroad tutorials.',
      status: 'Active incubation with 180 waitlist developers.',
    },
    {
      title: 'Digital Assets & 3D Parametric Marketplaces',
      icon: '💎',
      description: 'High-precision STEP/STL CAD models, spiritual sculptures (Gauri Idols), and WebGL shaders.',
      monetization: '100% passive digital downloads on CGTrader, TurboSquid, and custom storefront.',
      status: '$950/mo active cashflow, 85 verified models live.',
    },
    {
      title: 'B2B Lead Generation & Scraping Pipelines',
      icon: '🎯',
      description: 'Automated scrapers detecting funded AI startups, Three.js hiring signals, and tech stack transitions.',
      monetization: 'High-value outbound pipeline feeding high-ticket development contracts.',
      status: '1,200 verified founders indexed in JARVIS CRM.',
    },
    {
      title: 'Stock Media, Shaders & Code Templates',
      icon: '🎨',
      description: 'Production React Three Fiber components, Tailwind UI templates, and procedural animations.',
      monetization: 'Marketplace royalties and developer tool bundles.',
      status: 'Targeting $1,000/mo passive developer royalties.',
    },
    {
      title: 'Specialised Professional Advisory',
      icon: '🏛️',
      description: 'Bespoke architectural consulting on hardware-isolated microkernels and distributed systems.',
      monetization: '$200/hr advisory sessions for enterprise founders.',
      status: 'On-demand advisory channel through Sovereign OS network.',
    },
    {
      title: 'Paid Technical Research & Whitepapers',
      icon: '📑',
      description: 'Deep-dive security, cryptography, and WebAssembly performance whitepapers.',
      monetization: 'Grant funding, institutional sponsorships, and patent commercialization.',
      status: 'Sovereign Microkernel OS patent application pending.',
    },
  ];

  return (
    <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '36px 48px 80px' }}>
      {/* Top Breadcrumb & Navigation */}
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

        <button
          onClick={onOpenAddModal}
          style={{
            padding: '8px 16px',
            borderRadius: '8px',
            background: '#a855f7',
            border: 'none',
            color: '#ffffff',
            fontSize: '12px',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 4px 12px rgba(168, 85, 247, 0.3)',
          }}
        >
          <span>＋</span>
          <span>Deploy Frontier Track</span>
        </button>
      </div>

      {/* Hero Header */}
      <div
        style={{
          borderRadius: '16px',
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(9, 9, 11, 0.95) 100%)',
          border: '1px solid rgba(168, 85, 247, 0.3)',
          padding: '32px',
          marginBottom: '36px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '30px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ fontSize: '24px' }}>🪐</span>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#c084fc',
                  fontFamily: "'Martian Mono', monospace",
                  letterSpacing: '0.1em',
                }}
              >
                LONG-TAIL HORIZONS & SYNDICATED CHANNELS
              </span>
            </div>

            <h1
              style={{
                fontSize: '32px',
                fontWeight: 800,
                color: '#ffffff',
                margin: '0 0 12px 0',
                letterSpacing: '-0.02em',
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Extended Frontiers & Long-Tail Operations
            </h1>

            <p style={{ fontSize: '15px', color: '#e4e4e7', lineHeight: 1.6, margin: 0, maxWidth: '850px' }}>
              {engineMeta.description}
            </p>
          </div>

          <div
            style={{
              padding: '18px 24px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              minWidth: '220px',
            }}
          >
            <div style={{ fontSize: '10px', color: '#a1a1aa', fontFamily: "'Martian Mono', monospace", fontWeight: 600 }}>
              FRONTIER RUN-RATE
            </div>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#c084fc', fontFamily: "'Space Grotesk', sans-serif" }}>
              ${totalRealized.toLocaleString()}
              <span style={{ fontSize: '12px', color: '#71717a', fontWeight: 400 }}> / ${totalTarget.toLocaleString()}</span>
            </div>
            <div style={{ fontSize: '11px', color: '#a1a1aa', marginTop: '4px' }}>
              {frontierVentures.length} Active Operational Tracks
            </div>
          </div>
        </div>
      </div>

      {/* Frontier Channels Grid */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '16px' }}>
          Long-Tail Opportunity Sectors
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {frontierDomains.map((fd, idx) => (
            <div
              key={idx}
              style={{
                borderRadius: '12px',
                background: 'rgba(18, 18, 22, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '12px',
              }}
            >
              <div>
                <div style={{ fontSize: '24px', marginBottom: '10px' }}>{fd.icon}</div>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', margin: '0 0 6px 0' }}>
                  {fd.title}
                </h3>
                <p style={{ fontSize: '12.5px', color: '#a1a1aa', margin: '0 0 10px 0', lineHeight: 1.5 }}>
                  {fd.description}
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '10px' }}>
                <div style={{ fontSize: '10px', color: '#c084fc', fontFamily: "'Martian Mono', monospace", fontWeight: 600 }}>
                  MONETIZATION:
                </div>
                <div style={{ fontSize: '11.5px', color: '#e4e4e7', marginBottom: '6px' }}>
                  {fd.monetization}
                </div>
                <div style={{ fontSize: '10px', color: '#71717a' }}>{fd.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Sub-Tracks */}
      <div>
        <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '16px' }}>
          Active Frontier Sprints
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {frontierVentures.map((v) => (
            <div
              key={v.id}
              style={{
                borderRadius: '12px',
                background: 'rgba(18, 18, 22, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.09)',
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '20px',
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span
                    style={{
                      fontSize: '9.5px',
                      fontWeight: 700,
                      color: v.badgeColor,
                      background: 'rgba(255, 255, 255, 0.06)',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      fontFamily: "'Martian Mono', monospace",
                    }}
                  >
                    {v.badge}
                  </span>
                  <span style={{ fontSize: '11px', color: '#a1a1aa' }}>{v.category}</span>
                </div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', margin: '0 0 4px 0' }}>
                  {v.name}
                </h4>
                <p style={{ fontSize: '12.5px', color: '#d4d4d8', margin: 0 }}>
                  {v.tagline}
                </p>
              </div>

              <div style={{ textAlign: 'right', minWidth: '160px' }}>
                <div style={{ fontSize: '10px', color: '#71717a', fontFamily: "'Martian Mono', monospace" }}>
                  RUN-RATE
                </div>
                <div style={{ fontSize: '16px', fontWeight: 700, color: '#4ade80' }}>
                  ${v.currentRealizedRevenueUSD.toLocaleString()}
                  <span style={{ fontSize: '11px', color: '#71717a', fontWeight: 400 }}> / ${v.monthlyRevenueTargetUSD.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
