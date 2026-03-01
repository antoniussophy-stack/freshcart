// ! --------------------------- Ai ---------------------------

interface PromoCardProps {
  badge: {
    icon: string;
    text: string;
  };
  title: string;
  subtitle: string;
  discount: string;
  couponLabel: string;
  couponCode: string;
  buttonText: string;
  gradient: string;
  badgeBg: string;
  onButtonClick?: () => void;
}

function PromoCard({
  badge,
  title,
  subtitle,
  discount,
  couponLabel,
  couponCode,
  buttonText,
  gradient,
  badgeBg,
  onButtonClick,
}: PromoCardProps) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl p-8 flex flex-col gap-3 shadow-[0_4px_24px_rgba(0,0,0,0.10)] flex-1"
      style={{ background: gradient }}
    >
      {/* Decorative circles (preserve exact visual look with inline sizes) */}
      <div
        aria-hidden
        className="pointer-events-none"
        style={{
          position: "absolute",
          top: -40,
          right: -40,
          width: 180,
          height: 180,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none"
        style={{
          position: "absolute",
          bottom: -60,
          right: 60,
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.06)",
        }}
      />

      {/* Badge */}
      <div className="inline-flex items-center w-fit">
        <span
          className="rounded-[20px] flex items-center gap-2 text-white text-[13px] font-medium"
          style={{ background: badgeBg, padding: "5px 14px" }}
        >
          <span>{badge.icon}</span>
          <span>{badge.text}</span>
        </span>
      </div>

      {/* Title */}
      <h2 className="text-white text-[28px] font-extrabold leading-[1.2] m-0">
        {title}
      </h2>

      {/* Subtitle */}
      <p className="text-[14px] text-white/90 m-0">{subtitle}</p>

      {/* Discount + Coupon */}
      <div className="flex items-center gap-2 mt-1">
        <span className="text-white text-[26px] font-black">{discount}</span>
        <span className="text-white/90 text-[13px]">
          {couponLabel} <strong className="text-white">{couponCode}</strong>
        </span>
      </div>

      {/* Button */}
      <button
        onClick={onButtonClick}
        className="mt-2 bg-white text-gray-800 rounded-full px-6 py-3 text-[15px] font-bold inline-flex items-center gap-2 shadow-[0_2px_8px_rgba(0,0,0,0.10)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.18)] transform transition-transform duration-150 hover:scale-105"
      >
        {buttonText} <span aria-hidden>→</span>
      </button>
    </div>
  );
}

export default function PromoCards() {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container">
        <div className="flex gap-6 flex-wrap items-start justify-center p-8 bg-gray-50 box-border">
          <PromoCard
            badge={{ icon: "🔥", text: "Deal of the Day" }}
            title="Fresh Organic Fruits"
            subtitle="Get up to 40% off on selected organic fruits"
            discount="40% OFF"
            couponLabel="Use code:"
            couponCode="ORGANIC40"
            buttonText="Shop Now"
            gradient="linear-gradient(135deg, #27ae60 0%, #1e8449 60%, #196f3d 100%)"
            badgeBg="rgba(255,255,255,0.22)"
            // onButtonClick={() => alert("Shop Now clicked!")}
          />
          <PromoCard
            badge={{ icon: "✨", text: "New Arrivals" }}
            title="Exotic Vegetables"
            subtitle="Discover our latest collection of premium vegetables"
            discount="25% OFF"
            couponLabel="Use code:"
            couponCode="FRESH25"
            buttonText="Explore Now"
            gradient="linear-gradient(135deg, #f39c12 0%, #e74c3c 60%, #ff6b6b 100%)"
            badgeBg="rgba(255,255,255,0.22)"
            // onButtonClick={() => alert("Explore Now clicked!")}
          />
        </div>
      </div>
    </section>
  );
}
