import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { Analytics } from '@vercel/analytics/react'
import {SpeedInsights } from '@vercel/speed-insights/react'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <ThemeProvider>
                <App /> {/* This now becomes {children} */}
                <Analytics />
                <SpeedInsights />
                </ThemeProvider>
       </BrowserRouter>
  </StrictMode>,
)
