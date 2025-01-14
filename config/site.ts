export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Facebook Marketplace Nationwide Search",
  description: "Search the Facebook Marketplace across entire countries",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    donate: "https://www.paypal.com/donate/?hosted_button_id=VDZATQAYQMVM6",
    github: "https://github.com/gmoz22/facebook-marketplace-nationwide",
    fbmarketplace_settings: "https://www.facebook.com/marketplace/la/search?&radius=805&deliveryMethod=local_pick_up",
  },
  templateURL: {
    miles: "https://www.facebook.com/marketplace/|CITY|/search?query=|STRING|&radius=805&deliveryMethod=local_pick_up",
    kms: "https://www.facebook.com/marketplace/|CITY|/search?query=|STRING|&radius=500&deliveryMethod=local_pick_up",
  },
  countriesPerRow: 4,
  countries: {
    "usa": {
      "name": "USA (without AK or HI)",
      "icon": "usa_48.svg",
      "locale": "miles",
      "cities": [
        "Portland, OR",
        "Los Angeles, CA",
        "Durango, CO",
        "Broadus, MT",
        "Fort Worth, TX",
        "Boscobel, WI",
        "Fitzgerald, GA",
        "Oneonta, NY",
      ],
      "cities_fb": [
        "portland",
        "la",
        "108129565875623",
        "109613652398861",
        "114148045261892",
        "106171882747436",
        "112442175434378",
        "113333232014461",
      ],
      "coverage": "https://www.mapdevelopers.com/draw-circle-tool.php?circles=%5B%5B804670%2C34.0536909%2C-118.242766%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C45.5202471%2C-122.6741949%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C31.7098163%2C-83.2518613%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C42.4517838%2C-75.0569094%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C43.1367176%2C-90.7068445%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C37.2713951%2C-107.8815978%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C32.7762719%2C-97.3241996%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C45.4390698%2C-105.4059145%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%5D",
    },
    "usa_full": {
      "name": "USA",
      "icon": "usa.svg",
      "locale": "miles",
      "cities": [
        "Portland, OR",
        "Los Angeles, CA",
        "Durango, CO",
        "Broadus, MT",
        "Fort Worth, TX",
        "Boscobel, WI",
        "Fitzgerald, GA",
        "Oneonta, NY",
        "McGrath, AK",
        "Prudhoe Bay, AK",
        "Unalaska, AK",
        "Elfin Cove, AK",
        "Honolulu, HI",
      ],
      "cities_fb": [
        "portland",
        "la",
        "108129565875623",
        "109613652398861",
        "114148045261892",
        "106171882747436",
        "112442175434378",
        "113333232014461",
        "108203532540672",
        "171705676191734",
        "103760199662259",
        "196626670491979",
        "110444738976181",
      ],
      "coverage": "https://www.mapdevelopers.com/draw-circle-tool.php?circles=%5B%5B804670%2C34.0536909%2C-118.242766%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C45.5202471%2C-122.6741949%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C30.3321838%2C-81.655651%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C41.3041686%2C-72.9209145%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C41.8755616%2C-87.6244212%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C37.2713951%2C-107.8815978%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C32.7762719%2C-96.7968559%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C44.670905%2C-103.851407%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C58.1935012%2C-136.3338942%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C53.8296649%2C-166.4659941%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C62.963938%2C-155.596626%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C70.2239534%2C-148.370467%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C21.3046519%2C-157.8544616%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%5D",
    },
    "can": {
      "name": "Canada",
      "icon": "canada.svg",
      "locale": "kms",
      "cities": [
        "Saint Quentin, NB",
        "Baysville, ON",
        "Compeer, AB",
        "One Hundred Mile House, BC",
        "Moosehorn, MB",
        "Skibi Lake, ON",
        "Yellowknife, NT",
        "White Horse, YK",
        "Channel-Port aux Basques, NL",
      ],
      "cities_fb": [
        "108562712499750",
        "183509305085293",
        "112682018747951",
        "111922062167097",
        "112583085425676",
        "362073744288039",
        "114459998571182",
        "115392538472860",
        "115477851802820",
      ],
      "coverage": "https://www.mapdevelopers.com/draw-circle-tool.php?circles=%5B%5B500000%2C45.1461581%2C-79.1138363%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500005.84%2C51.8606184%2C-110.0028572%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500005.84%2C51.8044551%2C-121.4685143%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500005.84%2C51.2890722%2C-98.4174528%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500010%2C50.6192195%2C-86.9350551%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C47.513141%2C-67.3900101%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C62.4510419%2C-114.3420232%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C60.7000649%2C-134.9855867%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C47.5777988%2C-59.1757039%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%5D",
    },
    "aus": {
      "name": "Australia",
      "icon": "australia.svg",
      "locale": "kms",
      "cities": [
        "Tamworth, NSW",
        "Deniliquin, NSW",
        "Oakden Hills, SA",
        "Warralakin, WA",
        "Yeppoon, QLD",
        "Hobart, TAS",
        "Darwin, NT",
        "Carnarvon, WA",
        "Port Hedland, WA",
        "Port Douglas, QLD",
        "Cloncurry, QLD",
        "Alice Springs, NT",
        "Quilpie, QLD",
      ],
      "cities_fb": [
        "112577755420955",
        "104020242968596",
        "277036799317188",
        "106555549377269",
        "108131009215930",
        "111652435519898",
        "109437725742749",
        "103825936322408",
        "248019175333793",
        "106373139394499",
        "112359378775421",
        "107929299235881",
        "109465839072367",
      ],
      "coverage": "https://www.mapdevelopers.com/draw-circle-tool.php?circles=%5B%5B500000%2C-23.1348035%2C150.7436625%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-31.0900743%2C150.9290159%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-35.5302183%2C144.9597178%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-31.6340904%2C137.0093025%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-30.973621%2C118.5704973%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-16.4845983%2C145.4636294%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-42.8825088%2C147.3281233%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-20.3111814%2C118.5801181%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-12.46044%2C130.8410469%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-23.6983884%2C133.8812885%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-20.7289898%2C139.4931522%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-26.6152676%2C144.2600904%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-24.8826131%2C113.6576486%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%5D",
      "cities_miles": ["Warburton, Western Australia", "Mount Magnet, Western Australia", "Coober Pedy, South Australia", "Melbourne, Victoria, Australia", "Tooraweenah", "Clermont, Queensland", "Daly Waters, Northern Territory", "Broome, Western Australia"],
      "cities_fb_miles": ["112262705457494", "105508376148373", "107723845924377", "melbourne", "107928752568747", "105632482805073", "108276829196663", "112099285474124"],
      "coverage_miles": "https://www.mapdevelopers.com/draw-circle-tool.php?circles=%5B%5B804670%2C-26.1403024%2C126.6814526%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B804670%2C-29.0133682%2C134.7536164%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B804670%2C-37.8142176%2C144.9631608%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B804670%2C-31.4403083%2C148.9093839%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B804670%2C-23.6174986%2C145.9922449%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B804670%2C-16.1712445%2C136.0689777%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B804670%2C-17.9566909%2C122.2240181%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B804670%2C-28.0888045%2C117.8367428%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%5D",
    },
    "mex": {
      "name": "Mexico",
      "icon": "mexico.svg",
      "locale": "kms",
      "cities": [
        "Irapuato,Guanajuato ",
        "Chapala, Jalisco",
        "Creel, Chihuahua",
        "Monclova, Coahuila",
        "Campeche, Campeche",
        "Cabo San Lucas, Baja California",
        "Tehuantepec, Oaxaca",
      ],
      "cities_fb": [
        "108476082510080",
        "106142666084683",
        "110176719011514",
        "110799538947338",
        "619367721515573",
        "154130198035072",
        "116186601728289",
      ],
      "coverage": "https://www.mapdevelopers.com/draw-circle-tool.php?circles=%5B%5B500000%2C20.6657448%2C-101.3450739%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C19.8327623%2C-90.5397534%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C16.5743033%2C-95.9895844%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C26.8896633%2C-101.3904641%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C27.7472776%2C-107.6049954%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C22.9055613%2C-109.927761%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C29.3775411%2C-114.3911662%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%5D",
    },
    "ind": {
      "name": "India",
      "icon": "india.svg",
      "locale": "kms",
      "cities": [
        "Sanquelim, Goa",
        "Sangrur, Punjab",
        "Kolkata, West Bengal",
        "Himatnagar, Gujarat",
        "Allahabad, Uttar Pradesh",
        "Bhamragarh, Maharashtra",
        "Salem, Tamil Nadu",
      ],
      "cities_fb": [
        "104029036299831",
        "109148435777996",
        "108212225873404",
        "112269678784935",
        "2099665383411187",
        "115852108431709",
        "1410397895862431",
      ],
      "coverage": "https://www.mapdevelopers.com/draw-circle-tool.php?circles=%5B%5B16093.4%2C17.9966867%2C78.1776495%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C10.6204893%2C79.3052242%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C19.3398817%2C80.07254%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C23.6170281%2C72.4826435%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C30.2552732%2C75.8657524%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C25.435664%2C81.850003%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C22.5215371%2C87.856952%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C15.5262366%2C74.0321799%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%5D",
    },
      "indo": {
      "name": "Indonesia",
      "icon": "Indonesia.svg",
      "locale": "kms",
      "cities": [
        "Lampung, Indonesia",
        "Surabaya, Indonesia",
        "Kapit, Indonesia",
        "Sibolga, Indonesia",
        "Makassar, Indonesia",
      ],
      "cities_fb": [
        "5955489744552379",
        "3569670616601524",
        "1542978819859454",
        "260495123516323",
        "819671292962731",
      ],
      "coverage": "https://www.mapdevelopers.com/draw-circle-tool.php?circles=%5B%5B500000%2C-5.1153311%2C119.4641245%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-7.2661215%2C112.6654762%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-5.164678%2C104.9274782%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C1.5480432%2C113.6727871%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C1.5563703%2C98.8161086%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%5D",
    },
  }
  }
