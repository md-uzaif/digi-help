function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/918084860650"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-transparent text-[#25D366] drop-shadow-md transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:text-[#1EBE57]"
    >
      <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#25D366]/25 blur-md whatsapp-glow" />
      <span className="pointer-events-none absolute inset-0 -z-20 rounded-full border border-[#25D366]/45 whatsapp-ripple" />

      <span className="absolute right-15 whitespace-nowrap rounded-full bg-white px-4 py-1 text-xs font-semibold text-slate-700 shadow">
        Chat for Help
      </span>
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-15 w-15 fill-current stroke-current"
        strokeWidth="0.5"
      >
        <path d="M16.05 5.33c-5.92 0-10.74 4.82-10.74 10.74 0 1.9.5 3.78 1.46 5.43l-1.54 5.6 5.73-1.5c1.6.86 3.39 1.32 5.18 1.32 5.92 0 10.74-4.82 10.74-10.74S21.97 5.33 16.05 5.33zm0 19.64c-1.68 0-3.33-.45-4.76-1.32l-.34-.2-3.39.89.9-3.29-.22-.34a8.93 8.93 0 0 1-1.4-4.72c0-4.93 4.01-8.94 8.94-8.94s8.94 4.01 8.94 8.94-4.01 8.98-8.94 8.98zm4.99-6.72c-.27-.13-1.6-.79-1.84-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.86 1.06-.16.18-.31.2-.58.07-.27-.13-1.13-.42-2.16-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.31.4-.46.14-.15.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.61-1.44-.83-1.97-.21-.52-.43-.45-.59-.45h-.5c-.18 0-.47.07-.71.34-.25.27-.93.93-.93 2.26 0 1.33.96 2.62 1.09 2.8.13.18 1.88 2.89 4.6 4.04.65.27 1.15.44 1.55.56.64.2 1.23.17 1.69.1.51-.08 1.6-.65 1.83-1.27.23-.62.23-1.17.16-1.28-.07-.12-.25-.18-.52-.31z" />
      </svg>
    </a>
  );
}

export default WhatsAppFloat;
