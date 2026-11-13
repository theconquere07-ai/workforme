import React, { useState } from 'react';
import {
  EngineId,
  ENGINES_METADATA,
  PriorityLevel,
  SubTrackVenture,
  VentureStatus,
} from '../../../lib/opportunityMapData';

interface AddVentureModalProps {
  initialEngineId?: EngineId;
  isOpen: boolean;
  onClose: () => void;
  onAdd: (venture: SubTrackVenture) => void;
}

export function AddVentureModal({
  initialEngineId = 'cash_generation',
  isOpen,
  onClose,
  onAdd,
}: AddVentureModalProps) {
  const [engineId, setEngineId] = useState<EngineId>(initialEngineId);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [tagline, setTagline] = useState('');
  const [status, setStatus] = useState<VentureStatus>('in_execution');
  const [priority, setPriority] = useState<PriorityLevel>('P1_HIGH');
  const [monthlyRevenueTargetUSD, setMonthlyRevenueTargetUSD] = useState<number>(2000);
  const [currentRealizedRevenueUSD, setCurrentRealizedRevenueUSD] = useState<number>(0);
  const [primaryMetricLabel, setPrimaryMetricLabel] = useState('Deliverable / Volume');
  const [primaryMetricValue, setPrimaryMetricValue] = useState('Sprint 01 Launch');
  const [targetTimeline, setTargetTimeline] = useState('Immediate Q4 Sprint');
  const [tacticalAngle, setTacticalAngle] = useState('');
  const [keyDeliverablesText, setKeyDeliverablesText] = useState('');
  const [activeLinkOrRepo, setActiveLinkOrRepo] = useState('');
  const [nextBestAction, setNextBestAction] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const deliverables = keyDeliverablesText
      .split('\n')
      .map((d) => d.trim())
      .filter((d) => d.length > 0);

    const badgeColorMap: Record<VentureStatus, string> = {
      ideation: '#eab308',
      in_execution: '#38bdf8',
      active_cashflow: '#22c55e',
      scaling: '#a855f7',
      completed: '#10b981',
    };

    const statusBadgeMap: Record<VentureStatus, string> = {
      ideation: 'Ideation',
      in_execution: 'In Execution',
      active_cashflow: 'Active Cashflow',
      scaling: 'Scaling',
      completed: 'Completed',
    };

    const newVenture: SubTrackVenture = {
      id: `custom-${Date.now()}`,
      engineId,
      name: name.trim(),
      category: category.trim() || 'Custom Sub-Track',
      tagline: tagline.trim() || 'High-leverage internet capital execution vector.',
      badge: statusBadgeMap[status],
      badgeColor: badgeColorMap[status],
      status,
      priority,
      progressPercent: status === 'completed' ? 100 : status === 'active_cashflow' ? 70 : 25,
      monthlyRevenueTargetUSD: Number(monthlyRevenueTargetUSD) || 0,
      currentRealizedRevenueUSD: Number(currentRealizedRevenueUSD) || 0,
      primaryMetricLabel: primaryMetricLabel.trim() || 'Milestone',
      primaryMetricValue: primaryMetricValue.trim() || 'Phase 1 Active',
      targetTimeline: targetTimeline.trim() || 'Q4 Sprint',
      tacticalAngle:
        tacticalAngle.trim() ||
        'Direct leverage through technical mastery, asynchronous execution, and zero marginal replication.',
      keyDeliverables: deliverables.length > 0 ? deliverables : ['Initial architecture & deployment'],
      activeLinkOrRepo: activeLinkOrRepo.trim() || undefined,
      nextBestAction: nextBestAction.trim() || 'Initiate first sprint deliverables and publish landing verification.',
    };

    onAdd(newVenture);
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '680px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: '#0e0e11',
          border: '1px solid rgba(255, 255, 255, 0.14)',
          borderRadius: '14px',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 30px rgba(34, 197, 94, 0.1)',
          padding: '24px 28px',
          color: '#f4f4f5',
          fontFamily: "'Inter', sans-serif",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '16px',
            marginBottom: '20px',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span style={{ fontSize: '18px' }}>🚀</span>
              <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                Deploy New Opportunity Sub-Track
              </h2>
            </div>
            <p style={{ fontSize: '12px', color: '#a1a1aa', margin: 0 }}>
              Add a high-leverage venture, contract, product, or audience compounding asset.
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#71717a',
              fontSize: '20px',
              cursor: 'pointer',
              padding: '4px 8px',
            }}
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Target Engine & Category */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div>
              <label style={{ fontSize: '11px', fontWeight: 600, color: '#a1a1aa', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                Target Engine
              </label>
              <select
                value={engineId}
                onChange={(e) => setEngineId(e.target.value as EngineId)}
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  borderRadius: '8px',
                  background: '#18181b',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  fontSize: '12.5px',
                  outline: 'none',
                }}
              >
                {Object.values(ENGINES_METADATA).map((eng) => (
                  <option key={eng.id} value={eng.id}>
                    {eng.numberPrefix}. {eng.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ fontSize: '11px', fontWeight: 600, color: '#a1a1aa', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                Category / Sub-Domain
              </label>
              <input
                type="text"
                placeholder="e.g. High-Ticket Three.js Consulting, Micro-SaaS"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  borderRadius: '8px',
                  background: '#18181b',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  fontSize: '12.5px',
                  outline: 'none',
                }}
              />
            </div>
          </div>

          {/* Venture Name */}
          <div>
            <label style={{ fontSize: '11px', fontWeight: 600, color: '#a1a1aa', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
              Venture Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Sovereign WebGL CAD Mesh Optimizer"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: '100%',
                padding: '9px 12px',
                borderRadius: '8px',
                background: '#18181b',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#ffffff',
                fontSize: '13px',
                fontWeight: 600,
                outline: 'none',
              }}
            />
          </div>

          {/* Tagline */}
          <div>
            <label style={{ fontSize: '11px', fontWeight: 600, color: '#a1a1aa', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
              Strategic Tagline / Value Proposition
            </label>
            <input
              type="text"
              placeholder="e.g. High-performance WASM mesh decimation tool for engineering teams."
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              style={{
                width: '100%',
                padding: '9px 12px',
                borderRadius: '8px',
                background: '#18181b',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#ffffff',
                fontSize: '12.5px',
                outline: 'none',
              }}
            />
          </div>

          {/* Status & Priority & Target Revenue */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
            <div>
              <label style={{ fontSize: '11px', fontWeight: 600, color: '#a1a1aa', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as VentureStatus)}
                style={{
                  width: '100%',
                  padding: '9px 10px',
                  borderRadius: '8px',
                  background: '#18181b',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  fontSize: '12px',
                  outline: 'none',
                }}
              >
                <option value="ideation">🟡 Ideation</option>
                <option value="in_execution">🔵 In Execution</option>
                <option value="active_cashflow">🟢 Active Cashflow</option>
                <option value="scaling">🟣 Scaling</option>
                <option value="completed">🏆 Completed / Won</option>
              </select>
            </div>

            <div>
              <label style={{ fontSize: '11px', fontWeight: 600, color: '#a1a1aa', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                Priority
              </label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as PriorityLevel)}
                style={{
                  width: '100%',
                  padding: '9px 10px',
                  borderRadius: '8px',
                  background: '#18181b',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  fontSize: '12px',
                  outline: 'none',
                }}
              >
                <option value="P0_CRITICAL">🔥 P0 Critical</option>
                <option value="P1_HIGH">⚡ P1 High Priority</option>
                <option value="P2_NORMAL">◽ P2 Normal</option>
              </select>
            </div>

            <div>
              <label style={{ fontSize: '11px', fontWeight: 600, color: '#a1a1aa', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                Monthly Target ($)
              </label>
              <input
                type="number"
                min="0"
                step="100"
                value={monthlyRevenueTargetUSD}
                onChange={(e) => setMonthlyRevenueTargetUSD(Number(e.target.value))}
                style={{
                  width: '100%',
                  padding: '9px 10px',
                  borderRadius: '8px',
                  background: '#18181b',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#4ade80',
                  fontSize: '13px',
                  fontWeight: 600,
                  outline: 'none',
                }}
              />
            </div>
          </div>

          {/* Primary Metric & Timeline */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div>
              <label style={{ fontSize: '11px', fontWeight: 600, color: '#a1a1aa', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                Key Metric (Label & Value)
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <input
                  type="text"
                  placeholder="Metric Name"
                  value={primaryMetricLabel}
                  onChange={(e) => setPrimaryMetricLabel(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 10px',
                    borderRadius: '8px',
                    background: '#18181b',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#ffffff',
                    fontSize: '11.5px',
                  }}
                />
                <input
                  type="text"
                  placeholder="Value e.g. 5 Retainers"
                  value={primaryMetricValue}
                  onChange={(e) => setPrimaryMetricValue(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 10px',
                    borderRadius: '8px',
                    background: '#18181b',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#ffffff',
                    fontSize: '11.5px',
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ fontSize: '11px', fontWeight: 600, color: '#a1a1aa', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                Target Timeline / Sprints
              </label>
              <input
                type="text"
                placeholder="e.g. Q4 2026 / 30-Day Launch Sprint"
                value={targetTimeline}
                onChange={(e) => setTargetTimeline(e.target.value)}
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  borderRadius: '8px',
                  background: '#18181b',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  fontSize: '12px',
                }}
              />
            </div>
          </div>

          {/* Tactical Angle */}
          <div>
            <label style={{ fontSize: '11px', fontWeight: 600, color: '#a1a1aa', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
              Tactical Angle & Execution Strategy
            </label>
            <textarea
              rows={2}
              placeholder="Why this venture wins: unfair advantages, technical moats, distribution channels..."
              value={tacticalAngle}
              onChange={(e) => setTacticalAngle(e.target.value)}
              style={{
                width: '100%',
                padding: '9px 12px',
                borderRadius: '8px',
                background: '#18181b',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#ffffff',
                fontSize: '12px',
                lineHeight: 1.5,
                outline: 'none',
                resize: 'vertical',
              }}
            />
          </div>

          {/* Key Deliverables */}
          <div>
            <label style={{ fontSize: '11px', fontWeight: 600, color: '#a1a1aa', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
              Key Deliverables (one per line)
            </label>
            <textarea
              rows={3}
              placeholder="Production WASM kernel build&#10;Stripe checkout integration&#10;Cold outreach to 50 CAD firms"
              value={keyDeliverablesText}
              onChange={(e) => setKeyDeliverablesText(e.target.value)}
              style={{
                width: '100%',
                padding: '9px 12px',
                borderRadius: '8px',
                background: '#18181b',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#ffffff',
                fontSize: '12px',
                lineHeight: 1.5,
                outline: 'none',
                resize: 'vertical',
              }}
            />
          </div>

          {/* Next Best Action & Optional URL */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div>
              <label style={{ fontSize: '11px', fontWeight: 600, color: '#a1a1aa', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                Next Best Action
              </label>
              <input
                type="text"
                placeholder="e.g. Deploy preview on Netlify"
                value={nextBestAction}
                onChange={(e) => setNextBestAction(e.target.value)}
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  borderRadius: '8px',
                  background: '#18181b',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  fontSize: '12px',
                }}
              />
            </div>

            <div>
              <label style={{ fontSize: '11px', fontWeight: 600, color: '#a1a1aa', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                Active URL / Repository (Optional)
              </label>
              <input
                type="url"
                placeholder="https://github.com/..."
                value={activeLinkOrRepo}
                onChange={(e) => setActiveLinkOrRepo(e.target.value)}
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  borderRadius: '8px',
                  background: '#18181b',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#38bdf8',
                  fontSize: '12px',
                }}
              />
            </div>
          </div>

          {/* Actions */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: '12px',
              paddingTop: '12px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: '9px 18px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#d4d4d8',
                fontSize: '12.5px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>

            <button
              type="submit"
              style={{
                padding: '9px 22px',
                borderRadius: '8px',
                background: '#22c55e',
                border: 'none',
                color: '#000000',
                fontSize: '12.5px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(34, 197, 94, 0.3)',
              }}
            >
              <span>Deploy Sub-Track</span>
              <span>→</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
