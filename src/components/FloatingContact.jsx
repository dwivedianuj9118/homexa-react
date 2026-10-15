import { site } from '../data/site.js';
import { PhoneIcon } from './Icons.jsx';

/** Sticky WhatsApp and call buttons, standard on Indian real estate sites. */
export default function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3">
      <a href={`tel:${site.phoneHref}`} className="grid h-12 w-12 place-items-center rounded-full bg-brand text-white shadow-lift transition hover:scale-105" aria-label={`Call ${site.name}`}>
        <PhoneIcon />
      </a>
      <a href={site.whatsapp} className="grid h-12 w-12 place-items-center rounded-full bg-[#25d366] text-white shadow-lift transition hover:scale-105" target="_blank" rel="noopener" aria-label={`Chat with ${site.name} on WhatsApp`}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.9 11.9 0 0 0 4.6 4c1.7.7 2.3.8 3.2.7a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.2-.2-.5-.3z" />
        </svg>
      </a>
    </div>
  );
}
