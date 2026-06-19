'use client';
import { useState } from 'react';

type Step1 = {
  name: string;
  email: string;
  experience: string;
  motivation: string[];
};

type Step2 = {
  goals: string;
  physical: string;
  phone: string;
  availability: string[];
};

const MOTIVATIONS = [
  'Stress or burnout',
  'Build strength and flexibility',
  'Spiritual or philosophical practice',
  'Injury recovery or chronic pain',
  'General curiosity',
  'Something else',
];

const AVAILABILITY = [
  'Weekday mornings',
  'Weekday evenings',
  'Weekends',
];

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [s1, setS1] = useState<Step1>({
    name: '',
    email: '',
    experience: '',
    motivation: [],
  });

  const [s2, setS2] = useState<Step2>({
    goals: '',
    physical: '',
    phone: '',
    availability: [],
  });

  const toggleArr = <T extends string>(arr: T[], val: T): T[] =>
    arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val];

  const step1Valid =
    s1.name.trim() && s1.email.trim() && s1.experience && s1.motivation.length > 0;

  const handleSubmit = () => {
    const body = [
      `Name: ${s1.name}`,
      `Email: ${s1.email}`,
      `Experience: ${s1.experience}`,
      `What brings me here: ${s1.motivation.join(', ')}`,
      ``,
      `What I'm hoping for: ${s2.goals}`,
      `Physical considerations: ${s2.physical || 'None shared'}`,
      `Phone: ${s2.phone}`,
      `Availability: ${s2.availability.join(', ') || 'Not specified'}`,
    ].join('\n');

    window.location.href = `mailto:hujulia29@gmail.com?subject=1:1 Inquiry from ${encodeURIComponent(s1.name)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-24 max-w-lg mx-auto px-8">
        <h2 className="font-serif text-4xl font-light text-[#1A1530] mb-6">Thank you, {s1.name.split(' ')[0]}.</h2>
        <p className="text-[#1A1530]/75 leading-relaxed text-lg">
          I&apos;ll read through what you&apos;ve shared and be in touch within 48 hours to set up a call.
        </p>
      </div>
    );
  }

  const inputCls = 'w-full border-b border-[#9B8EC4]/60 bg-transparent py-3 text-[#1A1530] placeholder-[#1A1530]/40 focus:outline-none focus:border-[#5B4B8A] transition-colors text-base';
  const labelCls = 'block font-serif text-base font-light text-[#1A1530] mb-2';
  const chipCls = (active: boolean) =>
    `px-4 py-2 text-sm border transition-colors cursor-pointer select-none ${
      active
        ? 'border-[#5B4B8A] bg-[#5B4B8A] text-white'
        : 'border-[#9B8EC4]/60 text-[#1A1530]/70 hover:border-[#5B4B8A]'
    }`;

  return (
    <div className="max-w-xl mx-auto">
      {/* Step indicator */}
      <div className="flex items-center gap-3 mb-16">
        {[1, 2].map(n => (
          <div key={n} className="flex items-center gap-3">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center font-serif text-base transition-colors ${
              step >= n ? 'bg-[#5B4B8A] text-white' : 'border border-[#9B8EC4]/60 text-[#1A1530]/40'
            }`}>{n}</div>
            {n < 2 && <div className={`h-px w-12 transition-colors ${step > n ? 'bg-[#5B4B8A]' : 'bg-[#9B8EC4]/40'}`} />}
          </div>
        ))}
        <span className="text-xs tracking-widest uppercase text-[#1A1530]/40 ml-2">Step {step} of 2</span>
      </div>

      {step === 1 && (
        <div className="space-y-12">
          <div>
            <label className={labelCls}>Your name</label>
            <input className={inputCls} placeholder="First and last name" value={s1.name}
              onChange={e => setS1(p => ({ ...p, name: e.target.value }))} />
          </div>

          <div>
            <label className={labelCls}>Email address</label>
            <input className={inputCls} type="email" placeholder="you@example.com" value={s1.email}
              onChange={e => setS1(p => ({ ...p, email: e.target.value }))} />
          </div>

          <div>
            <label className={labelCls}>How would you describe your yoga experience?</label>
            <select className={inputCls} value={s1.experience}
              onChange={e => setS1(p => ({ ...p, experience: e.target.value }))}>
              <option value="" disabled>Select one</option>
              <option>I&apos;ve never tried yoga</option>
              <option>I&apos;ve taken a few classes</option>
              <option>I practice occasionally</option>
              <option>I have a regular practice</option>
            </select>
          </div>

          <div>
            <label className={labelCls}>What brings you here? <span className="normal-case text-[#1A1530]/40">(select all that apply)</span></label>
            <div className="flex flex-wrap gap-2 mt-3">
              {MOTIVATIONS.map(m => (
                <button key={m} type="button" className={chipCls(s1.motivation.includes(m))}
                  onClick={() => setS1(p => ({ ...p, motivation: toggleArr(p.motivation, m) }))}>
                  {m}
                </button>
              ))}
            </div>
          </div>

          <button
            disabled={!step1Valid}
            onClick={() => setStep(2)}
            className="mt-4 inline-block border border-[#5B4B8A] text-[#5B4B8A] px-10 py-3 text-sm tracking-widest uppercase hover:bg-[#5B4B8A] hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-12">
          <div>
            <label className={labelCls}>What are you hoping to get from working together?</label>
            <textarea className={`${inputCls} resize-none`} rows={4}
              placeholder="No need to have it figured out — even a rough sense is helpful."
              value={s2.goals} onChange={e => setS2(p => ({ ...p, goals: e.target.value }))} />
          </div>

          <div>
            <label className={labelCls}>Anything I should know about your body? <span className="normal-case text-[#1A1530]/40">(injuries, chronic pain, limitations — optional)</span></label>
            <textarea className={`${inputCls} resize-none`} rows={3}
              placeholder="Feel free to leave this blank."
              value={s2.physical} onChange={e => setS2(p => ({ ...p, physical: e.target.value }))} />
          </div>

          <div>
            <label className={labelCls}>Best phone number</label>
            <input className={inputCls} type="tel" placeholder="+1 (415) 000-0000" value={s2.phone}
              onChange={e => setS2(p => ({ ...p, phone: e.target.value }))} />
          </div>

          <div>
            <label className={labelCls}>When are you generally available? <span className="normal-case text-[#1A1530]/40">(select all that apply)</span></label>
            <div className="flex flex-wrap gap-2 mt-3">
              {AVAILABILITY.map(a => (
                <button key={a} type="button" className={chipCls(s2.availability.includes(a))}
                  onClick={() => setS2(p => ({ ...p, availability: toggleArr(p.availability, a) }))}>
                  {a}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-6 items-center pt-4">
            <button onClick={() => setStep(1)}
              className="text-sm tracking-widest uppercase text-[#1A1530]/40 hover:text-[#1A1530] transition-colors">
              Back
            </button>
            <button
              onClick={handleSubmit}
              className="inline-block border border-[#5B4B8A] text-[#5B4B8A] px-10 py-3 text-sm tracking-widest uppercase hover:bg-[#5B4B8A] hover:text-white transition-colors"
            >
              Send my details
            </button>
          </div>

          <p className="text-xs text-[#1A1530]/40 leading-relaxed pt-2">
            I&apos;ll use your contact details only to follow up about working together and will never share them with anyone else.
          </p>
        </div>
      )}
    </div>
  );
}
