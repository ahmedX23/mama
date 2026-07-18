'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="form-name" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Name</label>
        <input
          id="form-name"
          type="text"
          required
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          className="w-full bg-[#0d1117]/60 border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-[#00b4d8] transition-colors"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="form-email" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Email</label>
        <input
          id="form-email"
          type="email"
          required
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          className="w-full bg-[#0d1117]/60 border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-[#00b4d8] transition-colors"
          placeholder="your.email@domain.com"
        />
      </div>
      <div>
        <label htmlFor="form-msg" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Message</label>
        <textarea
          id="form-msg"
          rows="4"
          required
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          className="w-full bg-[#0d1117]/60 border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-[#00b4d8] transition-colors resize-none"
          placeholder="Describe your vision or inquiry..."
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-[#ffb703] hover:bg-[#ffb703]/90 disabled:bg-gray-700 text-[#0d1117] font-bold text-sm py-3 rounded-lg transition-all shadow-md shadow-[#ffb703]/10 tracking-wide"
      >
        {status === 'sending' ? 'TRANSMITTING...' : 'SEND MESSAGE'}
      </button>
      {status === 'success' && (
        <p className="text-emerald-400 text-xs text-center mt-2 font-medium">Message transmitted successfully!</p>
      )}
    </form>
  );
}
