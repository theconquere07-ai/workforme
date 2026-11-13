import React, { useState } from 'react';
import {
  EngineId,
  ENGINES_METADATA,
  SubTrackVenture,
  VentureStatus,
} from '../../../lib/opportunityMapData';

interface TerritoryOverviewViewProps {
  ventures: SubTrackVenture[];
  onSelectEngine: (engineId: EngineId) => void;
  onOpenAddModal: () => void;
}

export function TerritoryOverviewView({
  ventures,
  onSelectEngine,
  onOpenAddModal,
}: TerritoryOverviewViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('all');

  // Compute aggregate telemetry
  const totalTargetUSD = ventures.reduce((acc, v) => acc + (v.monthlyRevenueTargetUSD || 0), 0);
  const totalRealizedUSD = ventures.reduce((acc, v) => acc + (v.currentRealizedRevenueUSD || 0), 0);
  const activeCashflowCount = ventures.filter((v) => v.status === 'active_cashflow' || v.status === 'scaling').length;
  const inExecutionCount = ventures.filter((v) => v.status === 'in_execution').length;

  const filteredVentures = ventures.filter((v) => {
    const matchesSearch =
      v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      selectedStatusFilter === 'all' || v.status === selectedStatusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '36px 48px 80px' }}>
      {/* Visual Masthead matching reference image */}
      <div style={{ marginBottom: '32px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 10px',
            borderRadius: '6px',
            background: 'rgba(34, 197, 94, 0.1)',
            border: '1px solid rgba(34, 197, 94, 0.25)',
            fontSize: '11px',
            fontFamily: "'Martian Mono', monospace",
            fontWeight: 700,
            color: '#4ade80',
            letterSpacing: '0.08em',
            marginBottom: '14px',
          }}
        >
          <span>TERRITORY DISCOVERY & CAPITAL ALLOCATION</span>
          <span>•</span>
          <span>SOVEREIGN ARCHITECTURE</span>
        </div>

        <h1
          style={{
            fontSize: '38px',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            margin: '0 0 10px 0',
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          01. THE INTERNET OPPORTUNITY MAP
        </h1>

        <p
          style={{
            fontSize: '16px',
            color: '#a1a1aa',
            margin: 0,
            lineHeight: 1.6,
            maxWidth: '800px',
          }}
        >
          Here is the territory we're going to explore. A comprehensive execution map spanning cash-generation,
          scalable software assets, compounding audiences, algorithmic competitions, and frontier technology.
        </p>
      </div>

      {/* Aggregate Telemetry Strip */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
          marginBottom: '36px',
        }}
      >
        <div
          style={{
            padding: '18px 20px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.12) 0%, rgba(9, 9, 11, 0.8) 100%)',
            border: '1px solid rgba(34, 197, 94, 0.3)',
          }}
        >
          <div style={{ fontSize: '10.5px', color: '#86efac', fontFamily: "'Martian Mono', monospace", fontWeight: 600, marginBottom: '6px' }}>
            REALIZED MONTHLY CASHFLOW
          </div>
          <div style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif" }}>
            ${totalRealizedUSD.toLocaleString()}
            <span style={{ fontSize: '13px', color: '#a1a1aa', fontWeight: 400 }}> / mo</span>
          </div>
          <div style={{ fontSize: '11px', color: '#22c55e', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span>▲</span>
            <span>{activeCashflowCount} Active Revenue Vectors</span>
          </div>
        </div>

        <div
          style={{
            padding: '18px 20px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(9, 9, 11, 0.8) 100%)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
          }}
        >
          <div style={{ fontSize: '10.5px', color: '#7dd3fc', fontFamily: "'Martian Mono', monospace", fontWeight: 600, marginBottom: '6px' }}>
            TARGET RUN-RATE CAPACITY
          </div>
          <div style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif" }}>
            ${totalTargetUSD.toLocaleString()}
            <span style={{ fontSize: '13px', color: '#a1a1aa', fontWeight: 400 }}> / mo</span>
          </div>
          <div style={{ fontSize: '11px', color: '#38bdf8', marginTop: '4px' }}>
            Aggregated across 6 core engines
          </div>
        </div>

        <div
          style={{
            padding: '18px 20px',
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div style={{ fontSize: '10.5px', color: '#a1a1aa', fontFamily: "'Martian Mono', monospace", fontWeight: 600, marginBottom: '6px' }}>
            ACTIVE SUB-TRACKS IN SPRINT
          </div>
          <div style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif" }}>
            {ventures.length}
            <span style={{ fontSize: '13px', color: '#a1a1aa', fontWeight: 400 }}> Tracks</span>
          </div>
          <div style={{ fontSize: '11px', color: '#f59e0b', marginTop: '4px' }}>
            {inExecutionCount} In active engineering execution
          </div>
        </div>

        <div
          style={{
            padding: '18px 20px',
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: '10.5px', color: '#a1a1aa', fontFamily: "'Martian Mono', monospace", fontWeight: 600, marginBottom: '6px' }}>
              AUTONOMOUS DEPLOYMENT
            </div>
            <div style={{ fontSize: '12px', color: '#d4d4d8' }}>
              Create, track milestones, & scale cashflow vectors.
            </div>
          </div>
          <button
            onClick={onOpenAddModal}
            style={{
              padding: '8px 14px',
              borderRadius: '8px',
              background: '#22c55e',
              border: 'none',
              color: '#000000',
              fontSize: '11.5px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            <span>＋</span>
            <span>Deploy Sub-Track</span>
          </button>
        </div>
      </div>

      {/* ======================================================== */}
      {/* THE 6 CORE ENGINES (Fidelity Match to Reference Image)   */}
      {/* ======================================================== */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', marginBottom: '40px' }}>
        {Object.values(ENGINES_METADATA)
          .filter((e) => e.id !== 'extended_frontiers')
          .map((engine) => {
            const engineVentures = ventures.filter((v) => v.engineId === engine.id);
            const engineRealized = engineVentures.reduce((acc, v) => acc + (v.currentRealizedRevenueUSD || 0), 0);
            const engineTarget = engineVentures.reduce((acc, v) => acc + (v.monthlyRevenueTargetUSD || 0), 0);

            // Visual badge styling from reference image
            const isGreenBadge =
              engine.badgeType === 'near_term' ||
              engine.badgeType === 'scalable' ||
              engine.badgeType === 'ownership';

            return (
              <div
                key={engine.id}
                style={{
                  borderRadius: '14px',
                  background: 'rgba(18, 18, 22, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '24px 28px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '24px',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = isGreenBadge ? 'rgba(34, 197, 94, 0.4)' : 'rgba(56, 189, 248, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = isGreenBadge
                    ? '0 12px 30px -10px rgba(34, 197, 94, 0.15)'
                    : '0 12px 30px -10px rgba(56, 189, 248, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Left: Thumbnail & Details */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flex: 1 }}>
                  {/* Engine Icon / Visual Card */}
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '12px',
                      background: isGreenBadge
                        ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(9, 9, 11, 0.9) 100%)'
                        : 'linear-gradient(135deg, rgba(56, 189, 248, 0.2) 0%, rgba(9, 9, 11, 0.9) 100%)',
                      border: `1px solid ${isGreenBadge ? 'rgba(34, 197, 94, 0.35)' : 'rgba(56, 189, 248, 0.35)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '28px',
                      flexShrink: 0,
                    }}
                  >
                    {engine.icon}
                  </div>

                  {/* Text Content */}
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                      <h3
                        style={{
                          fontSize: '18px',
                          fontWeight: 700,
                          color: '#ffffff',
                          margin: 0,
                          letterSpacing: '-0.01em',
                          fontFamily: "'Space Grotesk', sans-serif",
                        }}
                      >
                        {engine.numberPrefix.replace(/^0+/, '')}. {engine.name}
                      </h3>
                    </div>

                    {/* Subtext description matching the exact text in reference image */}
                    <p
                      style={{
                        fontSize: '13.5px',
                        color: '#d4d4d8',
                        margin: '0 0 12px 0',
                        lineHeight: 1.55,
                      }}
                    >
                      {engine.description}
                    </p>

                    {/* Badge matching exact color styling in reference image */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          color: isGreenBadge ? '#4ade80' : '#38bdf8',
                          background: isGreenBadge ? 'rgba(34, 197, 94, 0.12)' : 'rgba(56, 189, 248, 0.12)',
                          padding: '3px 10px',
                          borderRadius: '20px',
                          fontFamily: "'Martian Mono', monospace",
                          border: `1px solid ${isGreenBadge ? 'rgba(34, 197, 94, 0.25)' : 'rgba(56, 189, 248, 0.25)'}`,
                        }}
                      >
                        {engine.badge}
                      </span>

                      <span
                        style={{
                          fontSize: '11px',
                          color: '#71717a',
                          fontFamily: "'Martian Mono', monospace",
                        }}
                      >
                        {engineVentures.length} Active Sub-Tracks
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Telemetry & Drilldown CTA */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    minWidth: '220px',
                    height: '100%',
                    gap: '14px',
                  }}
                >
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '10px', color: '#71717a', fontFamily: "'Martian Mono', monospace" }}>
                      REALIZED / TARGET
                    </div>
                    <div style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif" }}>
                      ${engineRealized.toLocaleString()}
                      <span style={{ fontSize: '12px', color: '#71717a', fontWeight: 400 }}> / ${engineTarget.toLocaleString()}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectEngine(engine.id)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = isGreenBadge ? 'rgba(34, 197, 94, 0.2)' : 'rgba(56, 189, 248, 0.2)';
                      e.currentTarget.style.borderColor = isGreenBadge ? '#22c55e' : '#38bdf8';
                      e.currentTarget.style.color = isGreenBadge ? '#4ade80' : '#7dd3fc';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                  >
                    <span>Inspect Engine</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            );
          })}
      </div>

      {/* ======================================================== */}
      {/* EXTENDED FRONTIERS FOOTER BANNER (from Reference Image)  */}
      {/* ======================================================== */}
      <div
        style={{
          borderRadius: '14px',
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.08) 0%, rgba(9, 9, 11, 0.95) 100%)',
          border: '1px solid rgba(168, 85, 247, 0.25)',
          padding: '24px 28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          marginBottom: '48px',
        }}
      >
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span style={{ fontSize: '16px' }}>🪐</span>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                color: '#c084fc',
                fontFamily: "'Martian Mono', monospace",
                letterSpacing: '0.08em',
              }}
            >
              LONG-TAIL HORIZONS & SYNDICATED CHANNELS
            </span>
          </div>

          <p
            style={{
              fontSize: '13.5px',
              color: '#d4d4d8',
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            And that's not the end. We also explore online education, paid research, tutoring, digital assets, stock
            media, design marketplaces, remote internships, virtual assistance, B2B lead generation and specialised
            professional services.
          </p>
        </div>

        <button
          onClick={() => onSelectEngine('extended_frontiers')}
          style={{
            padding: '9px 18px',
            borderRadius: '8px',
            background: 'rgba(168, 85, 247, 0.15)',
            border: '1px solid rgba(168, 85, 247, 0.4)',
            color: '#d8b4fe',
            fontSize: '12px',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexShrink: 0,
            transition: 'all 0.15s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(168, 85, 247, 0.28)';
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(168, 85, 247, 0.15)';
            e.currentTarget.style.color = '#d8b4fe';
          }}
        >
          <span>Open Extended Frontiers</span>
          <span>→</span>
        </button>
      </div>

      {/* ======================================================== */}
      {/* CROSS-ENGINE SUB-TRACK MATRIX & SEARCH                   */}
      {/* ======================================================== */}
      <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '32px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', margin: '0 0 4px 0' }}>
              Sub-Track Execution Matrix
            </h2>
            <p style={{ fontSize: '12.5px', color: '#a1a1aa', margin: 0 }}>
              Live index of all {ventures.length} operational sub-tracks and venture vectors across the map.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search sub-tracks, technologies, or moats..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                padding: '8px 14px',
                borderRadius: '8px',
                background: '#141417',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#ffffff',
                fontSize: '12px',
                width: '240px',
                outline: 'none',
              }}
            />

            {/* Status Filter */}
            <select
              value={selectedStatusFilter}
              onChange={(e) => setSelectedStatusFilter(e.target.value)}
              style={{
                padding: '8px 12px',
                borderRadius: '8px',
                background: '#141417',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#ffffff',
                fontSize: '12px',
                outline: 'none',
              }}
            >
              <option value="all">All Statuses ({ventures.length})</option>
              <option value="active_cashflow">Active Cashflow 🟢</option>
              <option value="scaling">Scaling 🟣</option>
              <option value="in_execution">In Execution 🔵</option>
              <option value="ideation">Ideation 🟡</option>
              <option value="completed">Completed 🏆</option>
            </select>
          </div>
        </div>

        {/* Sub-Track Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {filteredVentures.map((v) => {
            const engineMeta = ENGINES_METADATA[v.engineId] || ENGINES_METADATA.cash_generation;

            return (
              <div
                key={v.id}
                style={{
                  borderRadius: '12px',
                  background: 'rgba(18, 18, 22, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '14px',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.background = 'rgba(24, 24, 29, 0.95)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.background = 'rgba(18, 18, 22, 0.85)';
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: 700,
                        color: engineMeta.badgeColor,
                        fontFamily: "'Martian Mono', monospace",
                        textTransform: 'uppercase',
                      }}
                    >
                      {engineMeta.numberPrefix}. {engineMeta.name.replace('The ', '').replace(' Engine', '')}
                    </span>

                    <span
                      style={{
                        fontSize: '9.5px',
                        fontWeight: 700,
                        color: v.badgeColor,
                        background: 'rgba(255, 255, 255, 0.06)',
                        padding: '2px 7px',
                        borderRadius: '4px',
                        fontFamily: "'Martian Mono', monospace",
                      }}
                    >
                      {v.badge}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', margin: '0 0 6px 0', lineHeight: 1.3 }}>
                    {v.name}
                  </h4>

                  <p style={{ fontSize: '12px', color: '#a1a1aa', margin: '0 0 12px 0', lineHeight: 1.5 }}>
                    {v.tagline}
                  </p>
                </div>

                <div>
                  {/* Progress Bar */}
                  <div style={{ marginBottom: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10.5px', color: '#71717a', marginBottom: '4px', fontFamily: "'Martian Mono', monospace" }}>
                      <span>PROGRESS</span>
                      <span style={{ color: '#ffffff', fontWeight: 600 }}>{v.progressPercent}%</span>
                    </div>
                    <div style={{ width: '100%', height: '5px', borderRadius: '3px', background: 'rgba(255, 255, 255, 0.08)', overflow: 'hidden' }}>
                      <div
                        style={{
                          width: `${v.progressPercent}%`,
                          height: '100%',
                          background: v.badgeColor,
                          borderRadius: '3px',
                        }}
                      />
                    </div>
                  </div>

                  {/* Financials & Action Link */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '10px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '9.5px', color: '#71717a', fontFamily: "'Martian Mono', monospace" }}>
                        RUN-RATE
                      </div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#4ade80' }}>
                        ${v.currentRealizedRevenueUSD.toLocaleString()}
                        <span style={{ fontSize: '10px', color: '#71717a', fontWeight: 400 }}> / ${v.monthlyRevenueTargetUSD.toLocaleString()}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectEngine(v.engineId)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#d4d4d8',
                        fontSize: '11px',
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      Manage →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
