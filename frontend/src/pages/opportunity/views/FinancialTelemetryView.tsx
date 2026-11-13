import React from 'react';
import { SubTrackVenture, ENGINES_METADATA, EngineId } from '../../../lib/opportunityMapData';

interface FinancialTelemetryViewProps {
  ventures: SubTrackVenture[];
  onBackToOverview: () => void;
  onSelectEngine: (engineId: EngineId) => void;
}

export function FinancialTelemetryView({
  ventures,
  onBackToOverview,
  onSelectEngine,
}: FinancialTelemetryViewProps) {
  const totalTargetUSD = ventures.reduce((acc, v) => acc + (v.monthlyRevenueTargetUSD || 0), 0);
  const totalRealizedUSD = ventures.reduce((acc, v) => acc + (v.currentRealizedRevenueUSD || 0), 0);
  const overallRealizationRate = totalTargetUSD > 0 ? Math.round((totalRealizedUSD / totalTargetUSD) * 100) : 0;

  // Breakdown by engine
  const engineBreakdowns = Object.values(ENGINES_METADATA).map((engine) => {
    const ev = ventures.filter((v) => v.engineId === engine.id);
    const realized = ev.reduce((acc, v) => acc + (v.currentRealizedRevenueUSD || 0), 0);
    const target = ev.reduce((acc, v) => acc + (v.monthlyRevenueTargetUSD || 0), 0);
    const percent = target > 0 ? Math.round((realized / target) * 100) : 0;
    return {
      engine,
      realized,
      target,
      percent,
      count: ev.length,
    };
  });

  // Top revenue vectors
  const topVectors = [...ventures]
    .sort((a, b) => b.currentRealizedRevenueUSD - a.currentRealizedRevenueUSD)
    .slice(0, 5);

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

        <div style={{ fontSize: '11px', color: '#4ade80', fontFamily: "'Martian Mono', monospace" }}>
          LIVE RUN-RATE TELEMETRY
        </div>
      </div>

      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <div
          style={{
            fontSize: '11px',
            fontWeight: 700,
            color: '#22c55e',
            fontFamily: "'Martian Mono', monospace",
            letterSpacing: '0.1em',
            marginBottom: '6px',
          }}
        >
          CAPITAL VELOCITY & RUN-RATE TELEMETRY
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
          Aggregated Financial Architecture
        </h1>
        <p style={{ fontSize: '15px', color: '#a1a1aa', margin: 0 }}>
          Realized monthly income streams, engine capital distribution, and compounding revenue horizons.
        </p>
      </div>

      {/* Top 3 KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '36px' }}>
        <div
          style={{
            padding: '24px',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.14) 0%, rgba(9, 9, 11, 0.9) 100%)',
            border: '1px solid rgba(34, 197, 94, 0.35)',
          }}
        >
          <div style={{ fontSize: '11px', color: '#86efac', fontFamily: "'Martian Mono', monospace", fontWeight: 700, marginBottom: '8px' }}>
            TOTAL REALIZED RUN-RATE
          </div>
          <div style={{ fontSize: '36px', fontWeight: 800, color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif" }}>
            ${totalRealizedUSD.toLocaleString()}
            <span style={{ fontSize: '15px', color: '#a1a1aa', fontWeight: 400 }}> / month</span>
          </div>
          <div style={{ fontSize: '12px', color: '#4ade80', marginTop: '6px' }}>
            ₹{Math.round(totalRealizedUSD * 86.5).toLocaleString()} INR / month equivalent
          </div>
        </div>

        <div
          style={{
            padding: '24px',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.12) 0%, rgba(9, 9, 11, 0.9) 100%)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
          }}
        >
          <div style={{ fontSize: '11px', color: '#7dd3fc', fontFamily: "'Martian Mono', monospace", fontWeight: 700, marginBottom: '8px' }}>
            TARGET RUN-RATE CAPACITY
          </div>
          <div style={{ fontSize: '36px', fontWeight: 800, color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif" }}>
            ${totalTargetUSD.toLocaleString()}
            <span style={{ fontSize: '15px', color: '#a1a1aa', fontWeight: 400 }}> / month</span>
          </div>
          <div style={{ fontSize: '12px', color: '#38bdf8', marginTop: '6px' }}>
            ₹{Math.round(totalTargetUSD * 86.5).toLocaleString()} INR / month target envelope
          </div>
        </div>

        <div
          style={{
            padding: '24px',
            borderRadius: '14px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <div style={{ fontSize: '11px', color: '#a1a1aa', fontFamily: "'Martian Mono', monospace", fontWeight: 700, marginBottom: '8px' }}>
            REALIZATION EFFICIENCY
          </div>
          <div style={{ fontSize: '36px', fontWeight: 800, color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif" }}>
            {overallRealizationRate}%
          </div>
          <div style={{ width: '100%', height: '6px', borderRadius: '3px', background: 'rgba(255, 255, 255, 0.1)', marginTop: '10px', overflow: 'hidden' }}>
            <div style={{ width: `${Math.min(overallRealizationRate, 100)}%`, height: '100%', background: '#22c55e', borderRadius: '3px' }} />
          </div>
        </div>
      </div>

      {/* Engine Breakdown Bars */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '16px' }}>
          Engine Capital Allocation & Realization
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {engineBreakdowns.map((eb) => (
            <div
              key={eb.engine.id}
              style={{
                borderRadius: '12px',
                background: 'rgba(18, 18, 22, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '18px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '18px' }}>{eb.engine.icon}</span>
                  <div>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff' }}>
                      {eb.engine.name}
                    </span>
                    <span style={{ fontSize: '11px', color: '#71717a', marginLeft: '8px' }}>
                      ({eb.count} tracks)
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#4ade80' }}>
                      ${eb.realized.toLocaleString()}
                    </span>
                    <span style={{ fontSize: '12px', color: '#71717a' }}> / ${eb.target.toLocaleString()}</span>
                  </div>
                  <button
                    onClick={() => onSelectEngine(eb.engine.id)}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '6px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      fontSize: '11px',
                      cursor: 'pointer',
                    }}
                  >
                    View →
                  </button>
                </div>
              </div>

              {/* Progress bar */}
              <div style={{ width: '100%', height: '8px', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.06)', overflow: 'hidden' }}>
                <div
                  style={{
                    width: `${Math.min(eb.percent, 100)}%`,
                    height: '100%',
                    background: eb.engine.badgeColor,
                    borderRadius: '4px',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top 5 Revenue Vectors Leaderboard */}
      <div>
        <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '16px' }}>
          Top Cashflow Generators
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {topVectors.map((tv, idx) => (
            <div
              key={tv.id}
              style={{
                borderRadius: '10px',
                background: 'rgba(18, 18, 22, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '14px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '12px', fontFamily: "'Martian Mono', monospace", color: '#71717a', width: '20px' }}>
                  #{idx + 1}
                </span>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff' }}>
                    {tv.name}
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#a1a1aa' }}>
                    {tv.category} • {tv.tagline}
                  </div>
                </div>
              </div>

              <div style={{ textAlign: 'right', minWidth: '140px' }}>
                <div style={{ fontSize: '16px', fontWeight: 700, color: '#4ade80' }}>
                  ${tv.currentRealizedRevenueUSD.toLocaleString()} / mo
                </div>
                <div style={{ fontSize: '10.5px', color: '#71717a' }}>
                  Target: ${tv.monthlyRevenueTargetUSD.toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
