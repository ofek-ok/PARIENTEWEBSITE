"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface AccessibilityState {
  highContrast: boolean;
  highlightLinks: boolean;
  largeText: boolean;
  reducedMotion: boolean;
}

interface AccessibilityContextProps extends AccessibilityState {
  toggleHighContrast: () => void;
  toggleHighlightLinks: () => void;
  toggleLargeText: () => void;
  toggleReducedMotion: () => void;
  resetAll: () => void;
}

const defaultState: AccessibilityState = {
  highContrast: false,
  highlightLinks: false,
  largeText: false,
  reducedMotion: false,
};

const AccessibilityContext = createContext<AccessibilityContextProps | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AccessibilityState>(defaultState);
  const [isMounted, setIsMounted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    setIsMounted(true);
    try {
      const stored = localStorage.getItem("pa_a11y_prefs");
      if (stored) {
        setState(JSON.parse(stored));
      }
    } catch (e) {
      console.warn("Could not load accessibility preferences", e);
    }
  }, []);

  // Save to localStorage and apply classes to HTML element
  useEffect(() => {
    if (!isMounted) return;

    try {
      localStorage.setItem("pa_a11y_prefs", JSON.stringify(state));
    } catch (e) {
      console.warn("Could not save accessibility preferences", e);
    }

    const html = document.documentElement;
    
    html.classList.toggle("a11y-high-contrast", state.highContrast);
    html.classList.toggle("a11y-highlight-links", state.highlightLinks);
    html.classList.toggle("a11y-large-text", state.largeText);
    html.classList.toggle("a11y-reduced-motion", state.reducedMotion);

  }, [state, isMounted]);

  const toggleHighContrast = () => setState((s) => ({ ...s, highContrast: !s.highContrast }));
  const toggleHighlightLinks = () => setState((s) => ({ ...s, highlightLinks: !s.highlightLinks }));
  const toggleLargeText = () => setState((s) => ({ ...s, largeText: !s.largeText }));
  const toggleReducedMotion = () => setState((s) => ({ ...s, reducedMotion: !s.reducedMotion }));
  
  const resetAll = () => setState(defaultState);

  return (
    <AccessibilityContext.Provider
      value={{
        ...state,
        toggleHighContrast,
        toggleHighlightLinks,
        toggleLargeText,
        toggleReducedMotion,
        resetAll,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error("useAccessibility must be used within an AccessibilityProvider");
  }
  return context;
};
