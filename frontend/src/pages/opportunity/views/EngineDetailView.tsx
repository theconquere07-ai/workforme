import React, { useState } from 'react';
import {
  EngineId,
  ENGINES_METADATA,
  PriorityLevel,
  SubTrackVenture,
  VentureStatus,
} from '../../../lib/opportunityMapData';

interface EngineDetailViewProps {
  engineId: EngineId;
  ventures: SubTrackVenture[];
  onBackToOverview: () => void;
  onOpenAddModal: (engineId: EngineId) => void;
  onUpdateVenture: (id: string, updates: Partial<SubTrackVenture>) => void;
  onDeleteVenture: (id: string) => void;
}

export function EngineDetailView({
  engineId,
  ventures,
  onBackToOverview,
  onOpenAddModal,
  onUpdateVenture,
  onDeleteVenture,
}: EngineDetailViewProps) {
  const engine = ENGINES_METADATA[engineId] || ENGINES_METADATA.cash_generation;
  const engineVentures = ventures.filter((v) => v.engineId === engineId);

  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [editingVentureId, setEditingVentureId] = useState<string | null>(null);

  // Financial calculations
  const totalRealized = engineVentures.reduce((acc, v) => acc + (v.currentRealizedRevenueUSD || 0), 0);
  const totalTarget = engineVentures.reduce((acc, v) => acc + (v.monthlyRevenueTargetUSD || 0), 0);
  const realizationRate = totalTarget > 0 ? Math.round((totalRealized / totalTarget) * 100) : 0;

  const filtered = engineVentures.filter((v) => {
    if (statusFilter === 'all') return true;
    return v.status === statusFilter;
  });

  const isGreenBadge =
    engine.badgeType === 'near_term' ||
    engine.badgeType === 'scalable' ||
    engine.badgeType === 'ownership';

  return (
    <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '36px 48px 80px' }}>
      {/* Top Navigation & Breadcrumb */}
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
            transition: 'all 0.15s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.color = '#d4d4d8';
          }}
        >
          <span>←</span>
          <span>Back to Territory Overview Map</span>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={() => onOpenAddModal(engineId)}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              background: '#22c55e',
              border: 'none',
              color: '#000000',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 4px 12px rgba(34, 197, 94, 0.25)',
            }}
          >
            <span>＋</span>
            <span>Add Sub-Track to Engine</span>
          </button>
        </div>
      </div>

      {/* Engine Hero Header */}
      <div
        style={{
          borderRadius: '16px',
          background: 'linear-gradient(135deg, rgba(18, 18, 22, 0.95) 0%, rgba(9, 9, 11, 0.98) 100%)',
          border: `1px solid ${isGreenBadge ? 'rgba(34, 197, 94, 0.3)' : 'rgba(56, 189, 248, 0.3)'}`,
          padding: '32px',
          marginBottom: '32px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '30px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '320px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <span style={{ fontSize: '32px' }}>{engine.icon}</span>
              <div>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: isGreenBadge ? '#4ade80' : '#38bdf8',
                    fontFamily: "'Martian Mono', monospace",
                    letterSpacing: '0.1em',
                  }}
                >
                  ENGINE {engine.numberPrefix} // CAPITAL ALLOCATION VECTOR
                </span>
                <h1
                  style={{
                    fontSize: '32px',
                    fontWeight: 800,
                    color: '#ffffff',
                    margin: 0,
                    letterSpacing: '-0.02em',
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {engine.name}
                </h1>
              </div>
            </div>

            <p style={{ fontSize: '15px', color: '#e4e4e7', lineHeight: 1.6, margin: '0 0 16px 0', maxWidth: '850px' }}>
              {engine.description}
            </p>

            {/* Strategic Thesis */}
            <div
              style={{
                padding: '14px 18px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                maxWidth: '850px',
              }}
            >
              <div style={{ fontSize: '10.5px', color: '#a1a1aa', fontFamily: "'Martian Mono', monospace", fontWeight: 700, marginBottom: '4px' }}>
                MACRO STRATEGY & SOVEREIGN THESIS
              </div>
              <div style={{ fontSize: '13px', color: '#d4d4d8', lineHeight: 1.55 }}>
                {engine.macroStrategy}
              </div>
            </div>
          </div>

          {/* Engine Telemetry Card */}
          <div
            style={{
              padding: '20px 24px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              minWidth: '260px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            <div>
              <div style={{ fontSize: '10px', color: '#a1a1aa', fontFamily: "'Martian Mono', monospace", fontWeight: 600 }}>
                REALIZED MONTHLY REVENUE
              </div>
              <div style={{ fontSize: '28px', fontWeight: 800, color: '#4ade80', fontFamily: "'Space Grotesk', sans-serif" }}>
                ${totalRealized.toLocaleString()}
                <span style={{ fontSize: '13px', color: '#71717a', fontWeight: 400 }}> / mo</span>
              </div>
            </div>

            <div>
              <div style={{ fontSize: '10px', color: '#a1a1aa', fontFamily: "'Martian Mono', monospace", fontWeight: 600 }}>
                TARGET CAPACITY ({realizationRate}%)
              </div>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif" }}>
                ${totalTarget.toLocaleString()}
                <span style={{ fontSize: '12px', color: '#71717a', fontWeight: 400 }}> / mo</span>
              </div>
              <div style={{ width: '100%', height: '6px', borderRadius: '3px', background: 'rgba(255, 255, 255, 0.1)', marginTop: '6px', overflow: 'hidden' }}>
                <div
                  style={{
                    width: `${Math.min(realizationRate, 100)}%`,
                    height: '100%',
                    background: '#22c55e',
                    borderRadius: '3px',
                  }}
                />
              </div>
            </div>

            <div style={{ fontSize: '11px', color: '#a1a1aa', fontFamily: "'Martian Mono', monospace" }}>
              {engineVentures.length} Total Sub-Tracks Monitored
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Track Management Toolbar */}
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', margin: 0 }}>
            Operational Sub-Tracks & Sprints
          </h2>
          <span
            style={{
              fontSize: '11px',
              padding: '2px 8px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.08)',
              color: '#a1a1aa',
              fontFamily: "'Martian Mono', monospace",
            }}
          >
            {filtered.length} ACTIVE
          </span>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {['all', 'active_cashflow', 'in_execution', 'ideation', 'completed'].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              style={{
                padding: '6px 12px',
                borderRadius: '6px',
                background: statusFilter === st ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                border: `1px solid ${statusFilter === st ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.08)'}`,
                color: statusFilter === st ? '#ffffff' : '#a1a1aa',
                fontSize: '11.5px',
                fontWeight: statusFilter === st ? 600 : 400,
                cursor: 'pointer',
                textTransform: 'capitalize',
              }}
            >
              {st.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Sub-Tracks Detailed Cards List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {filtered.map((v) => {
          const isEditing = editingVentureId === v.id;

          return (
            <div
              key={v.id}
              style={{
                borderRadius: '14px',
                background: 'rgba(18, 18, 22, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.09)',
                padding: '24px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                transition: 'all 0.15s ease',
              }}
            >
              {/* Card Header */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: 700,
                        color: v.badgeColor,
                        background: 'rgba(255, 255, 255, 0.06)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        fontFamily: "'Martian Mono', monospace",
                        border: `1px solid ${v.badgeColor}33`,
                      }}
                    >
                      {v.badge}
                    </span>

                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: 700,
                        color: v.priority === 'P0_CRITICAL' ? '#ef4444' : v.priority === 'P1_HIGH' ? '#f59e0b' : '#71717a',
                        fontFamily: "'Martian Mono', monospace",
                      }}
                    >
                      {v.priority.replace('_', ' ')}
                    </span>

                    <span style={{ fontSize: '11px', color: '#71717a' }}>•</span>

                    <span style={{ fontSize: '11.5px', color: '#a1a1aa' }}>{v.category}</span>
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', margin: '0 0 6px 0', lineHeight: 1.3 }}>
                    {v.name}
                  </h3>

                  <p style={{ fontSize: '13px', color: '#d4d4d8', margin: 0, lineHeight: 1.5 }}>
                    {v.tagline}
                  </p>
                </div>

                {/* Telemetry Numbers & Status Toggle */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px', minWidth: '180px' }}>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '10px', color: '#71717a', fontFamily: "'Martian Mono', monospace" }}>
                      MONTHLY RUN-RATE
                    </div>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#4ade80', fontFamily: "'Space Grotesk', sans-serif" }}>
                      ${v.currentRealizedRevenueUSD.toLocaleString()}
                      <span style={{ fontSize: '12px', color: '#71717a', fontWeight: 400 }}> / ${v.monthlyRevenueTargetUSD.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Status Quick Selector */}
                  <select
                    value={v.status}
                    onChange={(e) => {
                      const newStatus = e.target.value as VentureStatus;
                      const statusBadgeMap: Record<VentureStatus, string> = {
                        ideation: 'Ideation',
                        in_execution: 'In Execution',
                        active_cashflow: 'Active Cashflow',
                        scaling: 'Scaling',
                        completed: 'Completed',
                      };
                      const badgeColorMap: Record<VentureStatus, string> = {
                        ideation: '#eab308',
                        in_execution: '#38bdf8',
                        active_cashflow: '#22c55e',
                        scaling: '#a855f7',
                        completed: '#10b981',
                      };
                      onUpdateVenture(v.id, {
                        status: newStatus,
                        badge: statusBadgeMap[newStatus],
                        badgeColor: badgeColorMap[newStatus],
                      });
                    }}
                    style={{
                      padding: '5px 8px',
                      borderRadius: '6px',
                      background: '#18181b',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: v.badgeColor,
                      fontSize: '11px',
                      fontWeight: 600,
                      outline: 'none',
                    }}
                  >
                    <option value="ideation">🟡 Ideation</option>
                    <option value="in_execution">🔵 In Execution</option>
                    <option value="active_cashflow">🟢 Active Cashflow</option>
                    <option value="scaling">🟣 Scaling</option>
                    <option value="completed">🏆 Completed</option>
                  </select>
                </div>
              </div>

              {/* Progress Slider Strip */}
              <div
                style={{
                  padding: '12px 16px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <div style={{ minWidth: '120px' }}>
                  <div style={{ fontSize: '10px', color: '#71717a', fontFamily: "'Martian Mono', monospace" }}>
                    SPRINT PROGRESS
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff' }}>
                    {v.progressPercent}% Completed
                  </div>
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={v.progressPercent}
                  onChange={(e) => onUpdateVenture(v.id, { progressPercent: Number(e.target.value) })}
                  style={{
                    flex: 1,
                    accentColor: v.badgeColor,
                    cursor: 'pointer',
                  }}
                />

                <div style={{ minWidth: '150px', textAlign: 'right' }}>
                  <div style={{ fontSize: '10px', color: '#71717a', fontFamily: "'Martian Mono', monospace" }}>
                    {v.primaryMetricLabel.toUpperCase()}
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#e4e4e7' }}>
                    {v.primaryMetricValue}
                  </div>
                </div>
              </div>

              {/* Strategic Tactical Angle */}
              <div
                style={{
                  padding: '12px 16px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderLeft: `3px solid ${v.badgeColor}`,
                }}
              >
                <div style={{ fontSize: '10.5px', color: '#a1a1aa', fontFamily: "'Martian Mono', monospace", fontWeight: 700, marginBottom: '4px' }}>
                  TACTICAL ANGLE & MONETIZATION LEVERAGE
                </div>
                <div style={{ fontSize: '12.5px', color: '#d4d4d8', lineHeight: 1.55 }}>
                  {v.tacticalAngle}
                </div>
              </div>

              {/* Key Deliverables Checklist */}
              {v.keyDeliverables && v.keyDeliverables.length > 0 && (
                <div>
                  <div style={{ fontSize: '11px', color: '#a1a1aa', fontFamily: "'Martian Mono', monospace", fontWeight: 700, marginBottom: '8px' }}>
                    KEY DELIVERABLES & MILESTONES:
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    {v.keyDeliverables.map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '6px 10px',
                          borderRadius: '6px',
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.06)',
                          fontSize: '12px',
                          color: '#e4e4e7',
                        }}
                      >
                        <span style={{ color: '#22c55e', fontSize: '11px' }}>✓</span>
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Next Best Action Banner & Footer Actions */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '12px' }}>🎯</span>
                  <span style={{ fontSize: '11px', color: '#a1a1aa', fontFamily: "'Martian Mono', monospace", fontWeight: 600 }}>
                    NEXT BEST ACTION:
                  </span>
                  <span style={{ fontSize: '12px', color: '#ffffff', fontWeight: 600 }}>
                    {v.nextBestAction}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {v.activeLinkOrRepo && (
                    <a
                      href={v.activeLinkOrRepo}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        padding: '6px 12px',
                        borderRadius: '6px',
                        background: 'rgba(56, 189, 248, 0.1)',
                        border: '1px solid rgba(56, 189, 248, 0.3)',
                        color: '#38bdf8',
                        fontSize: '11.5px',
                        fontWeight: 600,
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <span>Open Asset</span>
                      <span>↗</span>
                    </a>
                  )}

                  <button
                    onClick={() => {
                      if (window.confirm(`Delete sub-track "${v.name}"?`)) {
                        onDeleteVenture(v.id);
                      }
                    }}
                    style={{
                      padding: '6px 10px',
                      borderRadius: '6px',
                      background: 'none',
                      border: '1px solid rgba(239, 68, 68, 0.2)',
                      color: '#ef4444',
                      fontSize: '11px',
                      cursor: 'pointer',
                    }}
                    title="Delete sub-track"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
