import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EngineId, ENGINES_METADATA } from '../../../lib/opportunityMapData';

export type OpportunityViewId =
  | 'overview'
  | EngineId
  | 'telemetry'
  | 'playbooks';

interface OpportunitySidebarProps {
  activeView: OpportunityViewId;
  onChangeView: (view: OpportunityViewId) => void;
  onOpenAddModal: () => void;
  counts: Record<string, number>;
  clock: string;
}

export function OpportunitySidebar({
  activeView,
  onChangeView,
  onOpenAddModal,
  counts,
  clock,
}: OpportunitySidebarProps) {
  const navigate = useNavigate();

  return (
    <aside
      style={{
        width: '300px',
        minWidth: '300px',
        maxWidth: '300px',
        height: '100vh',
        background: '#09090b',
        borderRight: '1px solid rgba(255, 255, 255, 0.07)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 50,
        flexShrink: 0,
        userSelect: 'none',
      }}
    >
      {/* Top Header: Back to Workspace */}
      <div
        style={{
          padding: '16px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <button
          onClick={() => navigate('/dashboard')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 14px',
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#f4f4f5',
            fontSize: '12px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
            width: '100%',
            justifyContent: 'center',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
          }}
        >
          <span>←</span>
          <span>Return to Workspace</span>
        </button>

        {/* Territory Identity Card */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '10px 12px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(9, 9, 11, 0.95) 100%)',
            border: '1px solid rgba(34, 197, 94, 0.2)',
          }}
        >
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '8px',
              background: 'rgba(34, 197, 94, 0.15)',
              border: '1px solid #22c55e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              flexShrink: 0,
            }}
          >
            🌐
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.01em' }}>
                Opportunity Map
              </span>
              <span
                style={{
                  fontSize: '9px',
                  fontWeight: 700,
                  color: '#22c55e',
                  background: 'rgba(34, 197, 94, 0.15)',
                  padding: '1px 5px',
                  borderRadius: '4px',
                  fontFamily: "'Martian Mono', monospace",
                }}
              >
                v2.0
              </span>
            </div>
            <div style={{ fontSize: '10px', color: '#a1a1aa', fontFamily: "'Martian Mono', monospace" }}>
              6 Capital Engines • Active
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Scrollable Area */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '16px 12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {/* SECTION 1: MASTER MAP */}
        <div>
          <div
            style={{
              fontSize: '9.5px',
              fontWeight: 700,
              color: '#71717a',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '0 10px 8px',
              fontFamily: "'Martian Mono', monospace",
            }}
          >
            Territory Command
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <NavItem
              active={activeView === 'overview'}
              onClick={() => onChangeView('overview')}
              icon="🗺️"
              label="Territory Overview Map"
              badge="6 ENGINES"
              badgeColor="#22c55e"
            />
          </div>
        </div>

        {/* SECTION 2: THE 6 CAPITAL ENGINES */}
        <div>
          <div
            style={{
              fontSize: '9.5px',
              fontWeight: 700,
              color: '#71717a',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '0 10px 8px',
              fontFamily: "'Martian Mono', monospace",
            }}
          >
            The 6 Capital Engines
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <NavItem
              active={activeView === 'cash_generation'}
              onClick={() => onChangeView('cash_generation')}
              icon="💵"
              label="1. Cash-Generation"
              badge={counts.cash_generation ? `${counts.cash_generation}` : 'Near-term'}
              badgeColor="#22c55e"
            />
            <NavItem
              active={activeView === 'product_building'}
              onClick={() => onChangeView('product_building')}
              icon="🧱"
              label="2. Product-Building"
              badge={counts.product_building ? `${counts.product_building}` : 'Scalable'}
              badgeColor="#22c55e"
            />
            <NavItem
              active={activeView === 'media_audience'}
              onClick={() => onChangeView('media_audience')}
              icon="📢"
              label="3. Media & Audience"
              badge={counts.media_audience ? `${counts.media_audience}` : 'Audience'}
              badgeColor="#38bdf8"
            />
            <NavItem
              active={activeView === 'competition_innovation'}
              onClick={() => onChangeView('competition_innovation')}
              icon="🏆"
              label="4. Competition & Innovation"
              badge={counts.competition_innovation ? `${counts.competition_innovation}` : 'Prizes'}
              badgeColor="#38bdf8"
            />
            <NavItem
              active={activeView === 'entrepreneurship'}
              onClick={() => onChangeView('entrepreneurship')}
              icon="🚀"
              label="5. Entrepreneurship"
              badge={counts.entrepreneurship ? `${counts.entrepreneurship}` : 'Ownership'}
              badgeColor="#22c55e"
            />
            <NavItem
              active={activeView === 'emerging_tech'}
              onClick={() => onChangeView('emerging_tech')}
              icon="⚡"
              label="6. Emerging Technology"
              badge={counts.emerging_tech ? `${counts.emerging_tech}` : 'Emerging'}
              badgeColor="#38bdf8"
            />
          </div>
        </div>

        {/* SECTION 3: FRONTIERS & TELEMETRY */}
        <div>
          <div
            style={{
              fontSize: '9.5px',
              fontWeight: 700,
              color: '#71717a',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '0 10px 8px',
              fontFamily: "'Martian Mono', monospace",
            }}
          >
            Frontiers & Operations
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <NavItem
              active={activeView === 'extended_frontiers'}
              onClick={() => onChangeView('extended_frontiers')}
              icon="🪐"
              label="Extended Frontiers"
              badge={counts.extended_frontiers ? `${counts.extended_frontiers}` : 'Long-Tail'}
              badgeColor="#a855f7"
            />
            <NavItem
              active={activeView === 'telemetry'}
              onClick={() => onChangeView('telemetry')}
              icon="📊"
              label="Capital Telemetry"
              badge="RUN-RATE"
              badgeColor="#22c55e"
            />
            <NavItem
              active={activeView === 'playbooks'}
              onClick={() => onChangeView('playbooks')}
              icon="📖"
              label="Tactical Playbooks"
              badge="EXECUTION"
              badgeColor="#f59e0b"
            />
          </div>
        </div>

        {/* Quick Launch Venture Button */}
        <div style={{ paddingTop: '8px' }}>
          <button
            onClick={onOpenAddModal}
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.18) 0%, rgba(34, 197, 94, 0.06) 100%)',
              border: '1px solid rgba(34, 197, 94, 0.4)',
              color: '#4ade80',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(34, 197, 94, 0.25)';
              e.currentTarget.style.borderColor = '#22c55e';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(34, 197, 94, 0.18) 0%, rgba(34, 197, 94, 0.06) 100%)';
              e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.4)';
            }}
          >
            <span style={{ fontSize: '14px' }}>＋</span>
            <span>Add Venture / Sub-Track</span>
          </button>
        </div>
      </div>

      {/* Sidebar Footer */}
      <div
        style={{
          padding: '14px 16px',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          background: 'rgba(0, 0, 0, 0.4)',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {/* Link to Executive Profile Platform */}
        <button
          onClick={() => navigate('/profile')}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 12px',
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            color: '#d4d4d8',
            fontSize: '11.5px',
            cursor: 'pointer',
            transition: 'all 0.15s ease',
            width: '100%',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(240, 180, 41, 0.1)';
            e.currentTarget.style.borderColor = 'rgba(240, 180, 41, 0.3)';
            e.currentTarget.style.color = 'var(--gold)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.color = '#d4d4d8';
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>👤</span>
            <span style={{ fontWeight: 600 }}>Executive Dossier</span>
          </div>
          <span style={{ fontSize: '11px', color: '#71717a' }}>↗</span>
        </button>

        {/* Live IST Telemetry */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '10px',
            color: '#71717a',
            fontFamily: "'Martian Mono', monospace",
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#22c55e',
                boxShadow: '0 0 6px #22c55e',
              }}
            />
            <span>IST TELEMETRY</span>
          </div>
          <span>{clock}</span>
        </div>
      </div>
    </aside>
  );
}

function NavItem({
  active,
  onClick,
  icon,
  label,
  badge,
  badgeColor,
}: {
  active: boolean;
  onClick: () => void;
  icon: string;
  label: string;
  badge?: string;
  badgeColor?: string;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: '9px 12px',
        borderRadius: '8px',
        background: active ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
        border: active ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid transparent',
        color: active ? '#ffffff' : '#a1a1aa',
        fontSize: '12px',
        fontWeight: active ? 600 : 400,
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'all 0.12s ease',
      }}
      onMouseEnter={(e) => {
        if (!active) {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
          e.currentTarget.style.color = '#e4e4e7';
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = '#a1a1aa';
        }
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', overflow: 'hidden' }}>
        <span style={{ fontSize: '14px', width: '18px', textAlign: 'center', flexShrink: 0 }}>{icon}</span>
        <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>{label}</span>
      </div>

      {badge && (
        <span
          style={{
            fontSize: '9.5px',
            fontWeight: 700,
            color: badgeColor || '#a1a1aa',
            background: 'rgba(255, 255, 255, 0.06)',
            padding: '2px 6px',
            borderRadius: '6px',
            fontFamily: "'Martian Mono', monospace",
            flexShrink: 0,
          }}
        >
          {badge}
        </span>
      )}
    </button>
  );
}
