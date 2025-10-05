## 🌦️ Weather Map App

මෙය සරල, නමුත් ශක්තිමත් **Open-Meteo** සහ **OpenStreetMap (Nominatim)** API භාවිතා කරන **කාලගුණ පෙන්වන වෙබ් යෙදුමක්**යි.
පරිශීලකයාට අභිලාෂිත ස්ථානයක් මත විශේෂයෙන්:

* අක්ෂාංශ (Latitude) හා ද්‍රඃඛාංශ (Longitude) යාන්ත්‍රිකව ලබාදීමක් හෝ
* සිතියමක් (Map) මත ක්ලික් කිරීමකින් ස්ථානය තෝරා ගැනීමක්

කරන්න පුළුවන්.
එවිට එම ස්ථානයේ **කාලගුණ තත්ත්වය (උෂ්ණත්වය, වේලාව, ස්ථානයේ නම)** පෙන්වයි.

---

### 🗂️ ගොනු ව්‍යුහය (Project Structure)

```
weather-map-app/
│
├── index.html      → ප්‍රධාන වෙබ් පිටුව
├── style.css       → ආකාරය සහ mobile responsiveness
└── script.js       → JavaScript ලොජික් (API, සිතියම, modal, chart)
```

---

### ⚙️ විශේෂාංග (Features)

✅ OpenStreetMap මත සිට **ස්ථානයක් තෝරාගැනීම**
✅ Open-Meteo API භාවිතයෙන් **උෂ්ණත්ව දත්ත ලබාගැනීම**
✅ **Reverse geocoding** මඟින් **නගර/ප්‍රදේශ නම** ලබාදීම
✅ **Chart.js** මඟින් උෂ්ණත්වය **සඳහා රේඛා ප්‍රස්ථාරයක්**
✅ **Modal Map** — මෘදු සිතියමක් popup එකක් ලෙස
✅ **සම්පූර්ණයෙන්ම Responsive** — Mobile, Tablet, Desktop සඳහා

---

### 🔧 භාවිතා කළ තාක්ෂණික අංග

| තාක්ෂණය                           | භාවිතය                                             |
| --------------------------------- | -------------------------------------------------- |
| **HTML5**                         | Layout හා Structure සඳහා                           |
| **CSS3**                          | Theme, Gradient Background, Responsive Design සඳහා |
| **JavaScript (ES6)**              | Data Fetching, Event Handling, Modal Controls සඳහා |
| **Leaflet.js**                    | සිතියම පෙන්වීමට                                    |
| **Chart.js**                      | උෂ්ණත්ව ප්‍රස්ථාරය සෑදීමට                          |
| **Open-Meteo API**                | කාලගුණ දත්ත ලබා ගැනීමට                             |
| **Nominatim API (OpenStreetMap)** | ස්ථානයේ නම ලබා ගැනීමට                              |

---

### 🚀 පාවිච්චි කරන හැටි (How to Run)

1. සියලුම ගොනු (`index.html`, `style.css`, `script.js`) එකම folder එකක තබන්න.
2. `index.html` ගොනුව browser එකක (Chrome / Edge / Firefox) විවෘත කරන්න.
3. ඔබට අවශ්‍ය **Latitude** හා **Longitude** ලබාදෙන්න.

   * හෝ “**Select on Map**” බොත්තම ඔබා සිතියම මත ස්ථානයක් තෝරන්න.
4. “**Get Weather**” ඔබා එම ස්ථානයේ උෂ්ණත්වය සහ තොරතුරු බලන්න.

---

### 🧭 Default Location

පෙරනිමිව Colombo (6.9271, 79.8612) නගරය භාවිතා කරයි.

---

### 📱 Responsiveness

App එක **Desktop**, **Tablet**, සහ **Mobile Phones** සඳහා අනුවර්තනය වී ඇත.
Map එක Modal එක තුළ නියම **frame එකක් තුළ** පෙන්වයි, කිසිදු overlapping නොවී.

---

### 🧠 වැඩිදියුණු කිරීම් සඳහා යෝජනා

💡 අනාගත සංස්කරණ වලට එකතු කළ හැකි දේවල්:

* 📍 “Detect My Location” බොත්තම (GPS භාවිතයෙන් ස්වයංක්‍රීයව ස්ථානය හඳුනා ගැනීම)
* 🌧️ වැසි, පීඩනය, හා ආර්ද්‍රතාව දත්ත එකතු කිරීම
* 🌙 Dark Mode / Light Mode වෙනස් කිරීම
* 🗓️ දිනය අනුව කාලගුණ අනුමාන පෙන්වීම

---

### ⚠️ සටහනක්

මෙම project එක **ප්‍රාථමික අධ්‍යයන හා පුහුණු අරමුණු සඳහා පමණි.**
Commercial භාවිතය සඳහා ඔබට ඔබේම API key හෝ custom backend එකක් අවශ්‍ය වේ.

---

### 🧑‍💻 නිර්මාණය කරණය

**Pasindu Induranga** විසින් නිර්මාණය කර ඇත 💫
