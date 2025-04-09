'use client';

export function LocationMap() {
  return (
    <div className="relative h-[400px] w-full bg-gray-200">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0927348951344!2d-122.39663492361776!3d37.78779971583655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807abad77c31%3A0x3f10558c2a680820!2sSan%20Francisco%2C%20CA%2094107!5e0!3m2!1sen!2sus!4v1709774008949!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}