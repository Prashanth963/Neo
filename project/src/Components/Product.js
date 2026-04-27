import React, { useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import img1 from "./Allimages/Culture.jpg";
import img2 from "./Allimages/Culture-Min.jpg";
import img3 from "./Allimages/Grow.jpg"
import img4 from "./Allimages/Vibrio-SOL.jpg"
import img5 from "./Allimages/EHP.jpg"
import img6 from "./Allimages/Gastac.jpg"
import img7 from "./Allimages/Trace cal.jpg"
import img8 from "./Allimages/Cal-Max.jpg"
import img9 from "./Allimages/Mag-Max.jpg"
import img10 from "./Allimages/Pot-max.jpg"
import img11 from "./Allimages/numin.png"
import img12 from "./Allimages/GUT-heal.jpg"
import img13 from "./Allimages/chloromin.png"
import img14 from "./Allimages/kleenex.png"
import img15 from "./Allimages/Ascob-C.jpg"
import img17 from "./Allimages/Rhodo-PS.jpg"
import img20 from "./Allimages/allsan.png"
import img21 from "./Allimages/iosan.png"
import img23 from "./Allimages/fresh.png"
import bannerImg from "./Allimages/fish.jpg"




const Product = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    "All",
    "Probiotics/Prebiotics",
    "Minerals",
    "Feed Supplements",
    "Sanitizers & Oxidizers"
  ];

  const products = [
   
  {
    id: 1,
    name: "CULTURE-PRO",
    image: img1,
    tagline: "Soil & Water Probiotic for aquaculture pond management",
    benefits: [
      "Removes inorganic loads in pond bottom",
      "Reduces ammonia levels",
      "Reduces vibrio & toxic gases",
      "Improves DO and reduces BOD",
      "Improves water quality",
      "Reduces mortality rate of shrimp/fish"
    ],
    composition: [
      "Bacillus subtilis",
      "Bacillus licheniformis",
      "Bacillus megatherium",
      "Pediococcus",
      "Aspergillus oryzae"
    ],
    potency: "10 billion cfu/gm",
    dosage: "500gm per Acre",
    presentation: "1 Kg"
  },

  {
    id: 2,
    name: "CULTURE MIN",
    image: img2,
    tagline: "Essential Mineral Booster",
    benefits: [
      "Excellent growth promoter",
      "Controls shell softening",
      "Helps in molting",
      "Improves immunity",
      "Reduces FCR",
      "Prevents mineral deficiency"
    ],
    composition: [
      "Nano Calcium",
      "Nano Magnesium",
      "Zinc",
      "Selenium",
      "Vitamins A, D, E"
    ],
    potency: "Premium",
    dosage: "5-10ml per kg",
    presentation: "5 Ltr"
  },

  {
    id: 3,
    name: "GROWZYME BOOST",
    image: img3,
    tagline: "Vitamin-C with Enzymes for growth",
    benefits: [
      "Improves digestion",
      "Boosts immunity",
      "Reduces stress",
      "Improves metabolism",
      "Enhances growth"
    ],
    composition: [
      "Amino Acids",
      "Enzymes",
      "Minerals"
    ],
    potency: "Premium",
    dosage: "5-10gm per kg feed",
    presentation: "1kg & 5kg"
  },

  {
    id: 4,
    name: "VIBRO SOL",
    image: img4,
    tagline: "Controls Vibrio and pathogens",
    benefits: [
      "Controls Vibrio bacteria",
      "Reduces disease outbreaks",
      "Improves survival rate",
      "Balances microflora"
    ],
    composition: [
      "Herbal extracts",
      "Anti-bacterial agents",
      "Immuno boosters"
    ],
    potency: "Premium",
    dosage: "5-10ml per kg",
    presentation: "1 Ltr & 5 Ltr"
  },

  // ---------- AUTO EXPANDED PRODUCTS ----------
  {
    id: 5,
    name: "EHP SOL",
    image: img5,
    tagline: "EHP Controller for bacterial and viral infection management",
    benefits: [
      "Controls EHP",
"Acts directly on DNA",
"Cures bacterial and viral infections",
"Improves hepatopancreatic health",
"Powerful antioxidant",
"Releases digestive enzymes",
"Maintains feed intake and regulates FCR"
    ],
    composition: ["Bacillus spp", "Lactobacillus","Herbal Extracts"],
    potency: "High",
    dosage: "500gm/acre",
    presentation: "1 Kg"
  },

  {
    id: 6,
    name: "GASTAC",
    image: img6,
    tagline: "Toxic gases controller for pond bottom management",
    benefits: [
    " Reduces H2S and removes toxic gases",
"Breaks down bottom sludge",
"Stabilizes pH and balances pond ecology",
"Reduces BOD/COD, increases DO for higher survival",
"Creates probiotic pond ecosystem",
"Promotes healthy phytoplankton",
"Eliminates malodor and off-flavour"
    ],
    composition: ["Calcium", "Magnesium", "Trace minerals","Perococcus denitrificans, Pediococcus acidolacti, Streptococcus fecalis, Clostridium butyricum",],
    potency: "Premium",
    dosage: "5ml/kg feed",
    presentation: "5 Ltr"
  },

  {
    id: 7,
    name: "TRACE CAL",
    image: img7,
    tagline: "Chelated Trace Minerals for comprehensive nutrition",
    benefits: [
     "Controls cramps & mineral deficiency",
"Prevents White Muscle Syndrome",
"Acts as liver stimulant",
"Prevents loose shell",
"Aids molting process",
"Improves FCR" 
    ],
    composition: [
      "Enzymes", "Amino acids",
    "Calcium, Potassium, Phosphorus, Manganese, Cobalt, Zinc, Selenium",
"Vitamins A, D, E, K",
"L-Lysine, D.L. Methionine"],
    potency: "High",
    dosage: "10gm/kg feed",
    presentation: "1 Kg"
  },

  {
    id: 8,
    name: "CAL MAX",
    image: img8,
    tagline: "High-quality calcium & vitamin supplement for shell formation and immunity",
    benefits: [
     "Promotes strong shell formation and molting",
"Enhances growth rate",
"Strengthens skeletal structure",
"Boosts immunity",
"Prevents mineral deficiency",
"Improves survival rate"
    ],
    composition: ["Oxidizers", "Disinfectants",
      "Calcium",
"Phosphorus",
"Magnesium",
"Vitamin D3"
    ],
    potency: "Strong",
    dosage: "As directed",
    presentation: "1 Ltr"
  },

  {
    id: 9,
    name: "MAG MAX",
    image: img9,
    tagline: "Magnesium-rich mineral supplement for molting and pond health",
    benefits: ["Disease resistance", "Stress reduction",
      "Supports healthy molting and shell formation",
"Reduces stress",
"Improves feed utilization",
"Enhances survival and immunity",
    ],
    composition: ["Vitamins", "Herbal extracts",
      "Stabilizers",
"Natural Carriers"
    ],
    potency: "Premium",
    dosage: "5gm/kg feed",
    presentation: "1 Kg"
  },

  {
    id: 10,
    name: "POT MAX",
    image: img10,
    tagline: "Potassium-rich supplement for water quality and immunity",
    benefits:[
      "Provides essential potassium",
"Aids osmoregulation and stress reduction",
"Improves survival in adverse conditions",
"Supports growth and feed conversion"
    ],
    composition: ["Amino acids", "Enzymes",
      "Potassium (Nano form)",
"Essential Minerals"
    ],
    potency: "High",
    dosage: "Mixed with feed",
    presentation: "5 Kg"
  },

  // ---------- CONTINUE SAME PATTERN ----------
  {
    id: 11,
    name: "NU MIN",
    image: img11,
    tagline: "High Grade Minerals for Shrimp & Fish",
    benefits: ["Improves water quality & plankton development",
"Supports exo-skeleton formation",
"Provides essential growth minerals",
"Prevents cramp diseases",
"Aids free molting",
"Maintains pH and ionic profiles"],
    composition: ["Calcium, Zinc, Iodine, L-Lysine",
"Phosphorus, Aluminium, Ferrous, D.L. Methionine",
"Magnesium, Copper, Chlorides, Choline Chloride",
"Potassium, Cobalt, Sulphates"],
    potency: "Ultra",
    dosage: "500gm/acre",
    presentation: "1 Kg"
  },

  {
    id: 12,
    name: "Gut Heal",
    image: img12,
    tagline: "White Gut Probiotic for controlling gut diseases in aquaculture",
    benefits: ["Controls white gut disease",
"Extracts white fecal matter",
"Prevents loose shell",
"Improves immune system and consistent growth",
"Prevents mineral deficiency"],
    composition: ["Minerals + Vitamins",
      "Bacillus subtilis, Bacillus licheniformis, Lactobacillus sporogenes",
"Streptococcus faecium, Lactobacillus acidophilus, Propionibacterium",
"Amylase, Protease, Cellulase"
    ],
    potency: "Premium",
    dosage: "5ml/kg",
    presentation: "5 Ltr"
  },

  {
    id: 13,
    name: "CHLOROMIN",
    image: img13,
    tagline: "High concentrated chloride minerals for aquaculture",
    benefits: ["Rapid growth", 
     " Soluble chloride base minerals",
"Eradicates mineral deficiency",
"Prevents cramp diseases",
"Improves water quality & plankton",
"Aids free molting",
"Supports exo-skeleton formation"
    ],
    composition: ["Calcium",
"Potassium",
"Magnesium",
"Zinc",
"Sodium",
"Chlorides"],
    potency: "High",
    dosage: "10gm/kg",
    presentation: "1 Kg"
  },

  {
    id: 14,
    name: "KLEENEX-DS",
    image: img14,
    tagline: "Zeolite Granules for water treatment and environmental improvement",
    benefits: ["Reduces ammonia, H2S, CO2",
"Rejuvenates beneficial plankton",
"Maintains pH",
"Cleans pond bottom",
"Decreases DO stress",
"Reduces turbidity"],
    composition: ["Aluminium Silicate, SiO₂, AlO₂, FeO₃, CaO₂",
"MgO₃, NaO₂, KO₂, Mn, Zn, etc"],
    potency: "Strong",
    dosage: "As needed",
    presentation: "1 Ltr"
  },

  {
    id: 15,
    name: "ASCOB-C",
    image: img15,
    tagline: "Vitamin C enriched nutritional supplement for improved health and immunity",
    benefits: ["Enhances immunity and disease resistance",
"Reduces oxidative stress",
"Supports healthy growth and metabolism",
"Improves feed efficiency"],
    composition: ["Ascorbic Acid (Stabilized Vitamin C)",
"Essential Amino Acids",
"Mineral Premix"],
    potency: "Premium",
    dosage: "5gm/kg",
    presentation: "1 Kg"
  },

  {
     id: 6,
    name: "GASTAC",
    image: img6,
    tagline: "Toxic gases controller for pond bottom management",
    benefits: [
    " Reduces H2S and removes toxic gases",
"Breaks down bottom sludge",
"Stabilizes pH and balances pond ecology",
"Reduces BOD/COD, increases DO for higher survival",
"Creates probiotic pond ecosystem",
"Promotes healthy phytoplankton",
"Eliminates malodor and off-flavour"
    ],
    composition: ["Calcium", "Magnesium", "Trace minerals","Perococcus denitrificans, Pediococcus acidolacti, Streptococcus fecalis, Clostridium butyricum",],
    potency: "Premium",
    dosage: "5ml/kg feed",
    presentation: "5 Ltr"
  },

  {
    id: 17,
    name: "Rhodo PS",
    image: img17,
    tagline: "Water Probiotic for aquatic environment improvement",
    benefits: ["Improves water quality",
"Removes organic wastes",
"Reduces bottom sludge",
"Prevents toxic gases (ammonia, H2S)",
"Inhibits harmful bacteria via competition"],
    composition: ["Rhodococcus, Rhodobacter",
"Thiobacillus denitrificans"],
    potency: "Premium",
    dosage: "500gm/acre",
    presentation: "1 Kg"
  },

  {
    id: 3,
    name: "GROWZYME BOOST",
    image: img3,
    tagline: "Vitamin-C with Enzymes for growth",
    benefits: [
      "Improves digestion",
      "Boosts immunity",
      "Reduces stress",
      "Improves metabolism",
      "Enhances growth"
    ],
    composition: [
      "Amino Acids",
      "Enzymes",
      "Minerals"
    ],
    potency: "Premium",
    dosage: "5-10gm per kg feed",
    presentation: "1kg & 5kg"
  },


  {
    id: 7,
    name: "TRACE CAL",
    image: img7,
    tagline: "Chelated Trace Minerals for comprehensive nutrition",
    benefits: [
     "Controls cramps & mineral deficiency",
"Prevents White Muscle Syndrome",
"Acts as liver stimulant",
"Prevents loose shell",
"Aids molting process",
"Improves FCR" 
    ],
    composition: [
      "Enzymes", "Amino acids",
    "Calcium, Potassium, Phosphorus, Manganese, Cobalt, Zinc, Selenium",
"Vitamins A, D, E, K",
"L-Lysine, D.L. Methionine"],
    potency: "High",
    dosage: "10gm/kg feed",
    presentation: "1 Kg"
  },


  {
    id: 20,
    name: "All-San",
    image: img20,
    tagline: "Bacterial Sanitizer for comprehensive pond disinfection",
    benefits: ["Reduces bacterial and viral load",
"Kills infectious micro-organisms",
"Prevents external infections",
"Maintains pond hygiene",
"Controls necrosis and blackspo"],
    composition: ["chloride",
"Formaldehyde",
"Glutaraldehyde",
"Base additives & stabilizers"],
    potency: "Strong",
    dosage: "As needed",
    presentation: "1 Ltr"
  },

  {
    id: 21,
    name: "IO-SAN",
    image: img21,
    tagline: "Iodine-5% solution for water treatment and infection control",
    benefits: ["Controls water pollution",
"Fights bacterial, protozoan, fungal infections",
"Induces complete molting",
"Prevents gill and tail rot"],
    composition: ["Iodine 5%",
"Surfactant",
"Stabilizers"],
    potency: "Premium",
    dosage: "5gm/kg",
    presentation: "1 Kg"
  },

  {
   id: 9,
    name: "MAG MAX",
    image: img9,
    tagline: "Magnesium-rich mineral supplement for molting and pond health",
    benefits: ["Disease resistance", "Stress reduction",
      "Supports healthy molting and shell formation",
"Reduces stress",
"Improves feed utilization",
"Enhances survival and immunity",
    ],
    composition: ["Vitamins", "Herbal extracts",
      "Stabilizers",
"Natural Carriers"
    ],
    potency: "Premium",
    dosage: "5gm/kg feed",
    presentation: "1 Kg"
  },


  {
    id: 23,
    name: "O₂Fresh",
    image: img23,
    tagline: "Oxygen Granules for increasing dissolved oxygen levels",
    benefits: ["Increases dissolved oxygen",
"Detoxifies noxious gases (SO₂, methane)",
"Prevents toxic gas formation",
"Inhibits pathogenic microbes",
"Reduces water exchange frequency"],
    composition: ["Sodium Percarbonate Granules",
"Oxidizers",
"Base additives",
"Stabilizers"],
    potency: "Premium",
    dosage: "500gm/acre",
    presentation: "1 Kg"
  },

  {
    id: 5,
    name: "EHP SOL",
    image: img5,
    tagline: "EHP Controller for bacterial and viral infection management",
    benefits: [
      "Controls EHP",
"Acts directly on DNA",
"Cures bacterial and viral infections",
"Improves hepatopancreatic health",
"Powerful antioxidant",
"Releases digestive enzymes",
"Maintains feed intake and regulates FCR"
    ],
    composition: ["Bacillus spp", "Lactobacillus","Herbal Extracts"],
    potency: "High",
    dosage: "500gm/acre",
    presentation: "1 Kg"
  },

];
  return (
    <>
     <div className="product-page">
      <div
        className="product-banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="product-overlay">
          <h1>Products</h1>
          <p>
            <Link to="/" className="breadcrumb-link">
              Home
            </Link>{" "}
            | Products
          </p>
        </div>
      </div>
    </div>
    <div className="aq-main">

      {/* HERO */}
      <div className="hero">
        <h1>🌿 Premium Aquaculture Products</h1>
        <p>Driving sustainable shrimp and fish farming with innovation</p>
      </div>

      {/* CATEGORIES */}
      <div className="cat-wrap">
        {categories.map((item, index) => (
          <button
            key={index}
            className={activeCategory === item ? "cat-btn active-cat" : "cat-btn"}
            onClick={() => setActiveCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* CARDS */}
      <div className="aq-cards-wrap">
        {products.map((item) => (
          <div className="aq-single-card" key={item.id}>

            {/* IMAGE */}
            <div className="aq-img-wrap">
              <div className="img-box" onClick={() => setSelectedImage(item.image)}>
                <img src={item.image} alt={item.name} className="aq-prod-img" />
                <div className="view-overlay">👁 </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="aq-text-wrap">
              <h2>{item.name}</h2>
              <p className="aq-sub">{item.tagline}</p>

              <h3>Benefits</h3>
              <ul>
                {item.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <h3>Composition</h3>
              <ul>
                {item.composition.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>

              <p><strong>Potency:</strong> {item.potency}</p>
              <p><strong>Dosage:</strong> {item.dosage}</p>
              <p><strong>Presentation:</strong> {item.presentation}</p>
            </div>

          </div>
        ))}
      </div>

      {/* IMAGE POPUP */}
      {selectedImage && (
        <div className="img-modal" onClick={() => setSelectedImage(null)}>
          <div className="img-modal-content">
            <img src={selectedImage} alt="preview" />
            <span className="clos-btn"></span>
          </div>
        </div>
      )}

    </div>
    </>
  );
};

export default Product;