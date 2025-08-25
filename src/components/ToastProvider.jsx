import React, { createContext, useContext, useMemo, useState } from 'react';

const ToastContext = createContext({
  addToast: (_opts) => {},
  removeToast: (_id) => {},
});

const ICONS = {
  success: (
    <svg className="w-5 h-5 text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L8.5 12.086l6.793-6.793a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  ),
  info: (
    <svg className="w-5 h-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM9 9a1 1 0 112 0v5a1 1 0 11-2 0V9zm1-4a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
    </svg>
  ),
  warning: (
    <svg className="w-5 h-5 text-amber-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.721-1.36 3.486 0l6.518 11.596A2 2 0 0116.518 18H3.482a2 2 0 01-1.743-3.305L8.257 3.1zM11 14a1 1 0 10-2 0 1 1 0 002 0zm-1-2a1 1 0 01-1-1V9a1 1 0 112 0v2a1 1 0 01-1 1z" clipRule="evenodd" />
    </svg>
  ),
  error: (
    <svg className="w-5 h-5 text-red-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7.293 7.293a1 1 0 011.414 0L10 8.586l1.293-1.293a1 1 0 111.414 1.414L11.414 10l1.293 1.293a1 1 0 01-1.414 1.414L10 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L8.586 10 7.293 8.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  ),
};

function Toast({ id, type = 'info', title, description, onClose }) {
  const palette = {
    success: 'bg-green-50 border-green-200',
    info: 'bg-blue-50 border-blue-200',
    warning: 'bg-amber-50 border-amber-200',
    error: 'bg-red-50 border-red-200',
  }[type] || 'bg-gray-50 border-gray-200';

  return (
    <div
      role="status"
      className={`w-80 sm:w-96 border ${palette} rounded-lg shadow-sm p-3 sm:p-4 flex items-start gap-3 animate-[fadeIn_.2s_ease-out]`}
    >
      <div className="mt-0.5">{ICONS[type] || null}</div>
      <div className="min-w-0 flex-1">
        {title && <div className="text-sm font-semibold text-gray-900">{title}</div>}
        {description && <div className="text-sm text-gray-700 leading-snug mt-0.5 break-words">{description}</div>}
      </div>
      <button
        aria-label="Tutup notifikasi"
        onClick={onClose}
        className="shrink-0 text-gray-500 hover:text-gray-700 transition"
      >
        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = (id) => setToasts((prev) => prev.filter((t) => t.id !== id));

  const addToast = ({ type = 'info', title, description, duration = 3200 }) => {
    const id = (typeof crypto !== 'undefined' && crypto.randomUUID)
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random()}`;

    const toast = { id, type, title, description, duration };
    setToasts((prev) => [...prev, toast]);

    if (duration !== Infinity) {
      setTimeout(() => removeToast(id), duration);
    }
    return id;
  };

  const value = useMemo(() => ({ addToast, removeToast }), []);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed z-[9999] top-4 right-4 flex flex-col gap-3">
        {toasts.map((t) => (
          <Toast key={t.id} {...t} onClose={() => removeToast(t.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}

export default ToastProvider;
