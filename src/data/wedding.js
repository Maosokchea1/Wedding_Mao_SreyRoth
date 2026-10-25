// src/data/wedding.js
/**
 * WEDDING DETAILS DATA FILE (ឯកសារព័ត៌មានលម្អិតអាពាហ៍ពិពាហ៍)
 * Featuring the couple's real wedding photos in golden Khmer traditional attire at Angkor Wat.
 */

export const WEDDING_DATA = {
  // Groom's Information (ព័ត៌មានកូនកំលោះ)
  groom: {
    khmerName: "អាត​ លាងហុីម",
    englishName: "AT LEANG HEM",
    shortKhmer: "ហុីម",
    shortEnglish: "HEM",
    avatar: "/couple-photos/photo2.jpg",
    parents: {
      father: "លោក ប្រុស​​ អាត",
      mother: "លោកស្រី ហៀក​"
    }
  },

  // Bride's Information (ព័ត៌មានកូនក្រមុំ)
  bride: {
    khmerName: "ម៉ៅ​ ស្រីរត្ន័",
    englishName: "MAO SREY ROTH",
    shortKhmer: "រត្ន័",
    shortEnglish: "ROTH",
    avatar: "/couple-photos/photo1.jpg",
    parents: {
      father: "លោកប្រុស​ ម់េន​​ ម៉ៅ",
      mother: "លោកស្រី​​ ឡូញផារិទ្ធ"
    }
  },

  // Event Date & Lunar Date (កាលបរិច្ឆេទ និងថ្ងៃខែចន្ទគតិ តាមវិដេអូ)
  event: {
    isoDate: "2027-04-12T06:00:00+07:00",
    dayNameKm: "ថ្ងៃអង្គារ",
    dayKm: "១១",
    monthKm: "មេសា",
    yearKm: "២០២៧",
    dayEn: "12",
    monthEn: "April",
    yearEn: "2027",
    lunarDateKm: "១៣ កើត ខែផល្គុន ឆ្នាំម្សាញ់ សប្តស័ក ព.ស. ២៥៦៩",
    solarDateKm: "ត្រូវនឹងថ្ងៃទី១២ ខែមេសា ឆ្នាំ២០២៧",
    timeKm: "វេលាម៉ោង ០៤:៣០ នាទីព្រឹក",
    targetDate: "2027-04-12T04:30:00"
  },

  // Venue & Location (ទីកន្លែងប្រារព្ធពិធី)
  venue: {
    titleKhmer: "ពិធីមង្គលការ និង ពិសារភោជនាហារ",
    nameKhmer: "គេហដ្ឋានខាងស្រី",
    nameEnglish: "Bride's Residence",
    addressKhmer: "ភូមិអូតាញាណ ឃុំស្រែចារ ស្រុកស្នួល ខេត្តក្រចេះ",
    addressEnglish: "Phum Ota Nhean, Khum​ sre cha, snoulo , Krcheh province",
    latitude: 12.1856,
    longitude: 105.2891,
    googleMapsUrl: "https://maps.google.com/?q=12.1856,105.2891",
    googleMapsEmbed: "https://maps.google.com/maps?q=12.1856,105.2891&t=&z=14&ie=UTF8&iwloc=&output=embed"
  },

  // Ceremony Programme (របៀបវារៈកម្មវិធី តាមវិដេអូ)
  programme: [
    {
      time: "០៦:០០ ព្រឹក",
      timeEn: "06:00 AM",
      titleKm: "ជួបជុំភ្ញៀវកិត្តិយស រៀបចំពិធីហែជំនូន",
      titleEn: "Gathering & Groom's Procession",
      icon: "bowl",
      descKm: "ពិធីហែផ្លែឈើ និងជំនូនជូនមាតាបិតាខាងស្រី"
    },
    {
      time: "០៧:០០ ព្រឹក",
      timeEn: "07:00 AM",
      titleKm: "ពិធីសែនចាស់ទុំ (កាត់សក់) ជូនពរជ័យ",
      titleEn: "Hair-Cutting Blessing Ceremony",
      icon: "scissors",
      descKm: "ពិធីកាត់សក់បណ្តេញឧបទ្រពចង្រៃ និងប្រសិទ្ធពរជ័យសិរីសួស្តី"
    },
    {
      time: "០៨:០០ ព្រឹក",
      timeEn: "08:00 AM",
      titleKm: "ពិធីសំពះផ្ទឹម បង្កក់សិរី",
      titleEn: "Tying the Knot (Sompeas Phtem)",
      icon: "couple",
      descKm: "ពិធីបង្វិលពពិល និងសំពះផ្ទឹមជាគូស្វាមីភរិយា"
    },
    {
      time: "០៩:០០ ព្រឹក",
      timeEn: "09:00 AM",
      titleKm: "ពិធីកាត់ផ្កាស្លា បង្កក់សិរី",
      titleEn: "Areca Flower Blessing",
      icon: "flower",
      descKm: "ប្រសិទ្ធពរជ័យដោយផ្កាស្លាសិរីមង្គល"
    },
    {
      time: "១១:០០ ព្រឹក",
      timeEn: "11:00 AM",
      titleKm: "ពិធីសែនចងដៃ ចាក់ផ្កាស្លា",
      titleEn: "Wrist-Tying & Flower Bestowal",
      icon: "knot",
      descKm: "មាតាបិតា និងញាតិមិត្តចងដៃប្រសិទ្ធពរជ័យ"
    },
    {
      time: "១២:០០ ថ្ងៃត្រង់",
      timeEn: "12:00 PM",
      titleKm: "អញ្ជើញភ្ញៀវកិត្តិយសពិសាអាហារថ្ងៃត្រង់",
      titleEn: "Luncheon Feast",
      icon: "food",
      descKm: "ពិសាអាហារថ្ងៃត្រង់ដោយក្តីរីករាយ"
    },
    {
      time: "០៤:៣០ រសៀល",
      timeEn: "04:30 PM",
      titleKm: "ទទួលបដិសណ្ឋារកិច្ចភ្ញៀវកិត្តិយសពិសាអាហារពេលល្ងាច",
      titleEn: "Evening Reception Banquet",
      icon: "champagne",
      descKm: "ទទួលស្វាគមន៍ភ្ញៀវកិត្តិយស និងពិសាភោជនាហារពេលល្ងាច"
    }
  ],

  // Gallery Photos (រូបថតពិតរបស់កូនកំលោះកូនក្រមុំ ទាំង ៣ សន្លឹក)
  gallery: [
    { id: 1, url: "/couple-photos/photo1.jpg", title: "រូបថតអាពាហ៍ពិពាហ៍ប្រពៃណីខ្មែរ នៅប្រាសាទអង្គរវត្ត" },
    { id: 2, url: "/couple-photos/photo2.jpg", title: "ស្នេហាដ៏ផ្អែមល្ហែម និងបរិសុទ្ធ" },
    { id: 3, url: "/couple-photos/gallery_1.jpg", title: "សេចក្តីសុខក្រោមពន្លឺព្រះអាទិត្យអង្គរ" },
    { id: 4, url: "/couple-photos/gallery_5.jpg", title: "ស្នាមញញឹមនៃក្តីស្រឡាញ់" }
  ],

  // Digital Gifts & QR Codes (ចំណងដៃតាម QR Code)
  gifts: [
    {
      bankName: "ABA Bank",
      accountName: "កូនកំលោះ & កូនក្រមុំ",
      accountNumber: "001 234 567",
      currency: "USD / KHR",
      qrCodeImage: "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://link.payway.com.kh/aba?id=001234567"
    },
    {
      bankName: "ACLEDA Bank (KHQR)",
      accountName: "កូនកំលោះ & កូនក្រមុំ",
      accountNumber: "1234-5678-9012-34",
      currency: "USD / KHR",
      qrCodeImage: "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://acledabank.com.kh/qr?acc=123456789012"
    }
  ],

  // Wedding Audio (បទចម្រៀងអាពាហ៍ពិពាហ៍)
  music: {
    title: "និស្ស័យស្នេហ៍អាពាហ៍ពិពាហ៍",
    artist: "Khmer Wedding Melodies",
    src: "/theme-video/wedding-song.mp3"
  }
};
