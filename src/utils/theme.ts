// ARAZ Homoeo AI - সেন্ট্রাল থিম ও কালার গাইড
export const theme = {
  colors: {
    // ব্র্যান্ড কালারস
    primary: "#0A74DA",       // প্রফেশনাল মেডিকেল ব্লু
    primaryLight: "#E6F0FA",  // হালকা নীল ব্যাকগ্রাউন্ডের জন্য
    secondary: "#10B981",     // সুস্থতার প্রতীক সবুজ (সফল অ্যাকশন, ফলো-আপ সেভ)
    accent: "#F59E0B",        // সতর্কবার্তা বা পেন্ডিং স্ট্যাটাস (যেমন: এক্সপায়ারি ডেট)
    
    // নিউট্রাল কালারস (ডার্ক ও লাইট মোড ব্যালেন্স করার জন্য)
    background: "#F8FAFC",    // মূল অ্যাপ ব্যাকগ্রাউন্ড
    surface: "#FFFFFF",       // কার্ড, ড্যাশবোর্ড আইটেম ও ফর্ম ব্যাকগ্রাউন্ড
    textPrimary: "#1E293B",   // মেইন টেক্সট বা টাইটেল কালার
    textSecondary: "#64748B", // সাব-টাইটেল বা ছোট বিবরণের কালার
    border: "#E2E8F0",        // ডিভাইডার ও ইনপুট বর্ডার
    
    // স্ট্যাটাস কালারস
    error: "#EF4444",         // অ্যালার্ট বা ডিলিট বাটন
    success: "#10B981"
  },
  
  fonts: {
    regular: "SolaimanLipi, sans-serif", // বাংলা ফন্টের জন্য স্ট্যান্ডার্ড
    bold: "SolaimanLipi-Bold, sans-serif"
  },
  
  shadows: {
    card: "0px 2px 8px rgba(0, 0, 0, 0.05)",
    button: "0px 4px 12px rgba(10, 116, 218, 0.2)"
  }
};

export type ThemeType = typeof theme;