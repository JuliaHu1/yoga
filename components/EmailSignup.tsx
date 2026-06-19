'use client';
import { useState } from 'react';

type State = 'idle' | 'open' | 'loading' | 'done' | 'error';

export default function EmailSignup() {
  const [state, setState] = useState<State>('idle');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const valid = name.trim() && email.includes('@');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('loading');
    const base = process.env.NEXT_PUBLIC_SHEETS_URL;
    if (!base) { setState('done'); return; }
    try {
      const url = new URL(base);
      url.searchParams.set('name', name);
      url.searchParams.set('email', email);
      await fetch(url.toString(), { method: 'GET', mode: 'no-cors' });
      setState('done');
    } catch {
      setState('error');
    }
  };

  if (state === 'done') {
    return (
      <p className="text-[#1A1530]/60 text-sm tracking-wide">
        You&apos;re on the list — thank you, {name.split(' ')[0]}.
      </p>
    );
  }

  if (state === 'idle') {
    return (
      <button
        onClick={() => setState('open')}
        className="inline-block border border-[#5B4B8A] text-[#5B4B8A] px-10 py-3 text-sm tracking-widest uppercase hover:bg-[#5B4B8A] hover:text-white transition-colors"
      >
        Subscribe to email list
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto space-y-6">
      <div>
        <label className="block font-serif text-base font-light text-[#1A1530] mb-2">
          Your name
        </label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="First and last name"
          className="w-full border-b border-[#9B8EC4]/60 bg-transparent py-3 text-[#1A1530] placeholder-[#1A1530]/40 focus:outline-none focus:border-[#5B4B8A] transition-colors text-base"
        />
      </div>
      <div>
        <label className="block font-serif text-base font-light text-[#1A1530] mb-2">
          Email address
        </label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full border-b border-[#9B8EC4]/60 bg-transparent py-3 text-[#1A1530] placeholder-[#1A1530]/40 focus:outline-none focus:border-[#5B4B8A] transition-colors text-base"
        />
      </div>
      {state === 'error' && (
        <p className="text-red-400 text-sm">Something went wrong — please try again.</p>
      )}
      <div className="flex gap-6 items-center pt-2">
        <button
          type="button"
          onClick={() => setState('idle')}
          className="text-sm tracking-widest uppercase text-[#1A1530]/40 hover:text-[#1A1530] transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={!valid || state === 'loading'}
          className="inline-block border border-[#5B4B8A] text-[#5B4B8A] px-10 py-3 text-sm tracking-widest uppercase hover:bg-[#5B4B8A] hover:text-white transition-colors disabled:opacity-30"
        >
          {state === 'loading' ? 'Sending...' : 'Sign me up'}
        </button>
      </div>
    </form>
  );
}
