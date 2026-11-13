import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import {
  OpportunityMapStore,
  SubTrackVenture,
  EngineId,
  ENGINES_METADATA,
} from '../../lib/opportunityMapData';
import { OpportunitySidebar, OpportunityViewId } from './components/OpportunitySidebar';
import { AddVentureModal } from './components/AddVentureModal';

// Views
import { TerritoryOverviewView } from './views/TerritoryOverviewView';
import { EngineDetailView } from './views/EngineDetailView';
import { ExtendedFrontiersView } from './views/ExtendedFrontiersView';
import { FinancialTelemetryView } from './views/FinancialTelemetryView';
import { TacticalPlaybooksView } from './views/TacticalPlaybooksView';

export function OpportunityPortal() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const mainScrollRef = useRef<HTMLElement>(null);

  const [ventures, setVentures] = useState<SubTrackVenture[]>(() =>
    OpportunityMapStore.getVentures()
  );

  const [activeView, setActiveView] = useState<OpportunityViewId>(() => {
    const v = searchParams.get('view') as OpportunityViewId;
    const validViews: OpportunityViewId[] = [
      'overview',
      'cash_generation',
      'product_building',
      'media_audience',
      'competition_innovation',
      'entrepreneurship',
      'emerging_tech',
      'extended_frontiers',
      'telemetry',
      'playbooks',
    ];
    return validViews.includes(v) ? v : 'overview';
  });

  const [addModalOpen, setAddModalOpen] = useState(false);
  const [selectedEngineForAdd, setSelectedEngineForAdd] = useState<EngineId>('cash_generation');
  const [clock, setClock] = useState('');

  useEffect(() => {
    const tick = () => {
      setClock(
        new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Sync activeView with searchParams & reset scroll
  const handleViewChange = (view: OpportunityViewId) => {
    setActiveView(view);
    setSearchParams({ view });
    if (mainScrollRef.current) {
      mainScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // CRUD Handlers
  const handleAddVenture = (newVenture: SubTrackVenture) => {
    const updated = OpportunityMapStore.addVenture(newVenture);
    setVentures(updated);
  };

  const handleUpdateVenture = (id: string, updates: Partial<SubTrackVenture>) => {
    const updated = OpportunityMapStore.updateVenture(id, updates);
    setVentures(updated);
  };

  const handleDeleteVenture = (id: string) => {
    const updated = OpportunityMapStore.deleteVenture(id);
    setVentures(updated);
  };

  const handleOpenAddForEngine = (engineId: EngineId) => {
    setSelectedEngineForAdd(engineId);
    setAddModalOpen(true);
  };

  // Engine Counts
  const counts: Record<string, number> = {
    cash_generation: ventures.filter((v) => v.engineId === 'cash_generation').length,
    product_building: ventures.filter((v) => v.engineId === 'product_building').length,
    media_audience: ventures.filter((v) => v.engineId === 'media_audience').length,
    competition_innovation: ventures.filter((v) => v.engineId === 'competition_innovation').length,
    entrepreneurship: ventures.filter((v) => v.engineId === 'entrepreneurship').length,
    emerging_tech: ventures.filter((v) => v.engineId === 'emerging_tech').length,
    extended_frontiers: ventures.filter((v) => v.engineId === 'extended_frontiers').length,
  };

  // Resolve current view label for breadcrumb
  const currentEngineMeta =
    activeView in ENGINES_METADATA
      ? ENGINES_METADATA[activeView as EngineId]
      : null;

  const viewBreadcrumb =
    activeView === 'overview'
      ? 'TERRITORY OVERVIEW MAP'
      : activeView === 'telemetry'
      ? 'CAPITAL TELEMETRY'
      : activeView === 'playbooks'
      ? 'TACTICAL PLAYBOOKS'
      : currentEngineMeta
      ? `${currentEngineMeta.numberPrefix}. ${currentEngineMeta.name.toUpperCase()}`
      : activeView.toUpperCase();

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        background: '#09090b',
        color: '#f4f4f5',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* ======================================================== */}
      {/* FIXED 300px OPPORTUNITY SIDEBAR                          */}
      {/* ======================================================== */}
      <OpportunitySidebar
        activeView={activeView}
        onChangeView={handleViewChange}
        onOpenAddModal={() => handleOpenAddForEngine('cash_generation')}
        counts={counts}
        clock={clock}
      />

      {/* ======================================================== */}
      {/* SCROLLABLE MAIN CONTENT CANVAS (Nettools Engineering Grid) */}
      {/* ======================================================== */}
      <main
        ref={mainScrollRef}
        style={{
          flex: 1,
          height: '100vh',
          overflowY: 'auto',
          overflowX: 'hidden',
          scrollBehavior: 'smooth',
          background: '#09090b',
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          backgroundPosition: '0 0',
          position: 'relative',
        }}
      >
        {/* Top Floating Action Header Bar */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 40,
            padding: '16px 48px',
            background: 'rgba(9, 9, 11, 0.88)',
            backdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Breadcrumb Indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
            <span
              onClick={() => handleViewChange('overview')}
              style={{
                color: '#71717a',
                fontFamily: "'Martian Mono', monospace",
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#71717a')}
            >
              OPPORTUNITY MAP
            </span>
            <span style={{ color: '#3f3f46' }}>/</span>
            <span style={{ color: '#ffffff', fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }}>
              {viewBreadcrumb}
            </span>
          </div>

          {/* Quick Header Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={() => handleOpenAddForEngine('cash_generation')}
              style={{
                padding: '7px 14px',
                borderRadius: '8px',
                background: 'rgba(34, 197, 94, 0.12)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                color: '#4ade80',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(34, 197, 94, 0.22)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(34, 197, 94, 0.12)')}
            >
              <span>＋</span>
              <span>Deploy Sub-Track</span>
            </button>

            <button
              onClick={() => navigate('/profile')}
              style={{
                padding: '7px 14px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span>👤</span>
              <span>Executive Profile ↗</span>
            </button>

            <button
              onClick={() => navigate('/dashboard')}
              style={{
                padding: '7px 14px',
                borderRadius: '8px',
                background: '#ffffff',
                border: 'none',
                color: '#000000',
                fontSize: '12px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Workspace ↗
            </button>
          </div>
        </div>

        {/* Dynamic View Body */}
        {activeView === 'overview' && (
          <TerritoryOverviewView
            ventures={ventures}
            onSelectEngine={(engId) => handleViewChange(engId)}
            onOpenAddModal={() => handleOpenAddForEngine('cash_generation')}
          />
        )}

        {(activeView === 'cash_generation' ||
          activeView === 'product_building' ||
          activeView === 'media_audience' ||
          activeView === 'competition_innovation' ||
          activeView === 'entrepreneurship' ||
          activeView === 'emerging_tech') && (
          <EngineDetailView
            engineId={activeView as EngineId}
            ventures={ventures}
            onBackToOverview={() => handleViewChange('overview')}
            onOpenAddModal={(engId) => handleOpenAddForEngine(engId)}
            onUpdateVenture={handleUpdateVenture}
            onDeleteVenture={handleDeleteVenture}
          />
        )}

        {activeView === 'extended_frontiers' && (
          <ExtendedFrontiersView
            ventures={ventures}
            onBackToOverview={() => handleViewChange('overview')}
            onOpenAddModal={() => handleOpenAddForEngine('extended_frontiers')}
            onUpdateVenture={handleUpdateVenture}
          />
        )}

        {activeView === 'telemetry' && (
          <FinancialTelemetryView
            ventures={ventures}
            onBackToOverview={() => handleViewChange('overview')}
            onSelectEngine={(engId) => handleViewChange(engId)}
          />
        )}

        {activeView === 'playbooks' && (
          <TacticalPlaybooksView
            onBackToOverview={() => handleViewChange('overview')}
          />
        )}
      </main>

      {/* Add Venture Modal */}
      <AddVentureModal
        initialEngineId={selectedEngineForAdd}
        isOpen={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        onAdd={handleAddVenture}
      />
    </div>
  );
}
