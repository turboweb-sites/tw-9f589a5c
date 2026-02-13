import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

interface ErrorBoundaryProps {
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: string
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: '' }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error.message }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: '2rem',
            fontFamily: 'system-ui',
            color: '#fff',
            background: '#0A0A0A',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '500px' }}>
            <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#D4AF37' }}>
              Something went wrong
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>
              {this.state.error}
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: '0.75rem 2rem',
                background: '#D4AF37',
                color: '#0A0A0A',
                border: 'none',
                fontWeight: 'bold',
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontSize: '0.75rem',
              }}
            >
              Reload Page
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

const root = document.getElementById('root')!

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ErrorBoundary children={<App />} />
  </React.StrictMode>
)