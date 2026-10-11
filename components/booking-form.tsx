'use client';

import { useState } from 'react';

export function BookingForm() {
  const [request, setRequest] = useState('');
  const [copied, setCopied] = useState(false);
  const field = 'mt-2 w-full rounded border border-white/20 bg-[#120f0d] px-4 py-3 text-base text-cream';
  return <section id="booking" className="bg-[#1a1512] px-6 py-20 lg:px-14">
    <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
      <div><p className="text-xs uppercase tracking-widest text-saffron">Plan your visit</p><h2 className="display mt-5 text-4xl sm:text-6xl">A table for you.<br/><em className="text-saffron">An occasion to remember.</em></h2><p className="mt-6 text-sm leading-7 text-[#b9aca0]">Prepare your table or marriage hall enquiry, then call our team to check availability and confirm the arrangements.</p><a href="tel:+923337472104" className="mt-6 inline-block text-lg text-saffron">Call 0333 7472104 ↗</a><p className="mt-4 text-xs leading-6 text-[#b9aca0]">Submitting this form prepares an enquiry on your device. It does not send a booking or reserve a table. Our team will confirm availability by phone.</p></div>
      <form className="grid gap-5" onChange={() => { setRequest(''); setCopied(false); }} onSubmit={event => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setRequest(`Booking enquiry — Kebabish Grill\nName: ${data.get('name')}\nPhone: ${data.get('phone')}\nOccasion: ${data.get('occasion')}\nDate: ${data.get('date')}\nTime: ${data.get('time')}\nGuests: ${data.get('guests')}\nNotes: ${data.get('notes') || 'None'}`);
      }}>
        <label className="text-sm">Your name<input className={field} name="name" autoComplete="name" required maxLength={80}/></label>
        <label className="text-sm">Phone number<input className={field} name="phone" type="tel" autoComplete="tel" required pattern="[+0-9 ()-]{7,20}" title="Enter a phone number with 7 to 20 characters."/></label>
        <label className="text-sm">Booking type<select name="occasion" className={field}><option>Family dining</option><option>Marriage hall</option><option>Birthday or family event</option></select></label>
        <div className="grid grid-cols-2 gap-4"><label className="text-sm">Preferred date<input name="date" type="date" className={field} required min={new Date().toLocaleDateString('en-CA')}/></label><label className="text-sm">Preferred time<input name="time" type="time" className={field} required/></label></div>
        <label className="text-sm">Number of guests<input name="guests" type="number" min="1" max="2000" required className={field}/></label>
        <label className="text-sm">Anything we should know? <span className="text-[#b9aca0]">(optional)</span><textarea name="notes" rows={3} maxLength={1000} className={field}/></label>
        <button className="bg-saffron px-6 py-4 text-sm font-bold text-coal" type="submit">Prepare booking enquiry →</button>
        {request && <div role="status" className="border border-saffron/40 p-5"><p className="font-semibold text-saffron">Your enquiry is ready to discuss</p><pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-6">{request}</pre><div className="mt-4 flex flex-wrap gap-5"><a className="text-saffron underline" href="tel:+923337472104">Call to confirm</a><button type="button" className="underline" onClick={async () => { try { await navigator.clipboard.writeText(request); setCopied(true); } catch { setCopied(false); } }}>{copied ? 'Copied' : 'Copy enquiry'}</button></div></div>}
      </form>
    </div>
  </section>;
}
