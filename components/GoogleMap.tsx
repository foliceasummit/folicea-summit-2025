'use client';

interface GoogleMapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  title?: string;
}

const GoogleMap = ({ latitude, longitude, zoom = 15, title = "Event Venue" }: GoogleMapProps) => {
  // Create Google Maps embed URL
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${latitude},${longitude}&zoom=${zoom}`;

  return (
    <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: '256px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
      />
    </div>
  );
};

export default GoogleMap;
