import { useState } from 'react';
import { useTheme, themes, modes } from '../context/ThemeContext';

export default function CustomizeModal({ footerMode = false, palette: paletteOverride = null }) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, mode, toggleMode, palette: themePalette } = useTheme();
  const palette = paletteOverride || themePalette;

  const themeEmojis = {
    ocean: '🐧',
    library: '📚',
    city: '🏙️',
    train: '🚂',
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        style={
          footerMode ? {
            color: palette.accent,
            textDecoration: 'none',
            fontSize: '0.85rem',
            fontWeight: 600,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: "'JetBrains Mono', monospace",
            padding: 0,
          } : {
            background: 'none',
            border: 'none',
            fontSize: '1.1rem',
            cursor: 'pointer',
            padding: '0.4rem 0.8rem',
            borderRadius: '6px',
            transition: 'all 0.2s',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }
        }
        onMouseEnter={(e) => {
          if (footerMode) {
            e.target.style.opacity = '0.8';
          } else {
            e.target.style.background = palette.bgLight;
          }
        }}
        onMouseLeave={(e) => {
          if (footerMode) {
            e.target.style.opacity = '1';
          } else {
            e.target.style.background = 'none';
          }
        }}
        title="Customize theme and mode"
      >
        {footerMode ? 'Customize' : '⚙️'}
      </button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.2s ease',
          }}
        />
      )}

      {isOpen && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: palette.bg,
            border: `3px solid ${palette.accent}`,
            borderRadius: '12px',
            padding: '2rem',
            zIndex: 1000,
            maxWidth: '420px',
            width: '90%',
            boxShadow: `0 10px 40px rgba(0,0,0,0.3), 6px 6px 0 ${palette.accent}`,
            animation: 'slideIn 0.3s ease',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.5rem',
            }}
          >
            <h2
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
                fontSize: '1.3rem',
                color: palette.text,
                margin: 0,
              }}
            >
              Customize
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                padding: '0',
              }}
            >
              ✕
            </button>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.8rem',
                fontWeight: 700,
                color: palette.textMuted,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              Theme
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              {themes.map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: theme === t ? `2.5px solid ${palette.accent}` : `2px solid ${palette.border}`,
                    background: theme === t ? palette.accent : palette.bgLight,
                    color: theme === t ? '#fff' : palette.text,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    textTransform: 'capitalize',
                  }}
                  onMouseEnter={(e) => {
                    if (theme !== t) e.target.style.background = palette.card;
                  }}
                  onMouseLeave={(e) => {
                    if (theme !== t) e.target.style.background = palette.bgLight;
                  }}
                >
                  {themeEmojis[t]} {t}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.8rem',
                fontWeight: 700,
                color: palette.textMuted,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              Mode
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              {modes.map((m) => (
                <button
                  key={m}
                  onClick={() => {
                    if (mode !== m) toggleMode();
                  }}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: mode === m ? `2.5px solid ${palette.accent}` : `2px solid ${palette.border}`,
                    background: mode === m ? palette.accent : palette.bgLight,
                    color: mode === m ? '#fff' : palette.text,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    textTransform: 'capitalize',
                  }}
                  onMouseEnter={(e) => {
                    if (mode !== m) e.target.style.background = palette.card;
                  }}
                  onMouseLeave={(e) => {
                    if (mode !== m) e.target.style.background = palette.bgLight;
                  }}
                >
                  {m === 'light' ? '☀️' : '🌙'} {m}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            style={{
              width: '100%',
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 600,
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              border: `2px solid ${palette.accent}`,
              background: palette.accent,
              color: '#fff',
              cursor: 'pointer',
              fontSize: '0.9rem',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.target.style.opacity = '0.9';
              e.target.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.opacity = '1';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Done ✓
          </button>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translate(-50%, -45%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }
      `}</style>
    </>
  );
}
