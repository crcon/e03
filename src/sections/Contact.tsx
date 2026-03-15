const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#e6f7f5]/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base sm:text-lg text-gray-600">联系方式已隐藏</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
