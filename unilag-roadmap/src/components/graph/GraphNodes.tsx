type Graph = {
  [key: string]: { [key: string]: number };
};

const graph: Graph = {
  'First-Gate': {
    Education: 5,
  },
  Education: {
    'First-Gate': 5,
    Elkanrmi: 4,
    'Faculty of Environmental Science': 3,
    'Wema Bank': 2,
  },
  'Wema Bank': {
    Education: 2,
    'Sport Center': 3,
  },
  Elkanrmi: {
    Education: 4,
    'Femi Gbajabiamila Hostel': 2,
    'Kofo Hall': 3,
  },
  'Femi Gbajabiamila Hostel': {
    Elkanrmi: 2,
  },
  'Kofo Hall': {
    Elkanrmi: 3,
    'Queen Amina Hall': 2,
  },
  'Queen Amina Hall': {
    'Kofo Hall': 2,
    'Biobaku Hostel': 2,
  },
  'Biobaku Hostel': {
    'Queen Amina Hall': 2,
    Firstbank: 1,
  },
  Firstbank: {
    'Biobaku Hostel': 1,
    'Cross-Junction': 1,
  },
  'Cross-Junction': {
    Firstbank: 1,
    'Second-Gate': 4,
    'Medical Center': 2,
    DLI: 2,
    'Iya Moria': 1,
    'Women Society': 1,
    "Honour's Hall": 2,
    'FSS Complex': 2,
  },
  'Second-Gate': {
    'Cross-Junction': 4,
    'Medical Center': 2,
  },
  'Medical Center': {
    'Cross-Junction': 2,
    'L-Junction': 2,
  },
  DLI: {
    'Cross-Junction': 2,
    'Iya Moria': 1,
  },
  'Iya Moria': {
    DLI: 1,
    'Women Society': 1,
  },
  'Women Society': {
    'Iya Moria': 1,
    "Honour's Hall": 2,
  },
  "Honour's Hall": {
    'Women Society': 2,
  },
  'FSS Complex': {
    'Cross-Junction': 2,
    FSS: 1,
  },
  FSS: {
    'FSS Complex': 1,
    Nithub: 1,
  },
  Nithub: {
    FSS: 1,
    Works: 1,
  },
  Works: {
    Nithub: 1,
    'T-Junction': 2,
  },
  'Faculty of Environmental Science': {
    Education: 3,
    'Sport Center': 2,
  },
  'Sport Center': {
    'Faculty of Environmental Science': 2,
    'Wema Bank': 3,
    'Church 1': 2,
  },
  'Church 1': {
    'Sport Center': 2,
    'Church 2': 1,
  },
  'Church 2': {
    'Church 1': 1,
    Mosque: 1,
  },
  Mosque: {
    'Church 2': 1,
    'Petro Station': 1,
  },
  'Petro Station': {
    Mosque: 1,
    'T-Junction': 2,
  },
  'T-Junction': {
    Works: 2,
    'Petro Station': 2,
    'Access Bank': 2,
  },
  'Access Bank': {
    'T-Junction': 2,
    'New Hall': 3,
  },
  'New Hall': {
    'Access Bank': 3,
    CITS: 2,
  },
  CITS: {
    'New Hall': 2,
    'Y-Junction': 2,
    'Mass Comm (link)': 1,
  },
  'Y-Junction': {
    CITS: 2,
    'Mass Comm': 2,
    Ecobank: 1,
    'Faculty of Art': 2,
  },
  Ecobank: {
    'Y-Junction': 1,
    'Mass Comm': 1,
  },
  'Faculty of Art': {
    'Y-Junction': 2,
    'Love Garden': 1,
  },
  'Love Garden': {
    'Faculty of Art': 1,
    'Senate Building': 2,
  },
  'Senate Building': {
    'Love Garden': 2,
    'Law-Junction': 1,
  },
  'J.F Ade Ajayi Auditorium': {
    Library: 1,
    'Law-Junction': 1, // Link eastward to Law-Junction
  },
  Library: {
    'J.F Ade Ajayi Auditorium': 1,
    'Lagoon Front': 1,
    'Law-Junction': 1, // Added link from Law-Junction to Library northward
  },
  'Lagoon Front': {
    Library: 1,
  },
  'Law-Junction': {
    'Senate Building': 1,  // Link to Senate Building northward
    Library: 1,            // Link to Library northward
    'J.F Ade Ajayi Auditorium': 1, // Link eastward to J.F Ade Ajayi Auditorium
    'Faculty of Law': 1,
  },
  'Faculty of Law': {
    'Law-Junction': 1,
    'Faculty of Management Science': 1,
  },
  'Faculty of Management Science': {
    'Faculty of Law': 1,
  },
  'Mass Comm': {
    'Y-Junction': 2,
    Ecobank: 1,
    Moremi: 1,
  },
  Moremi: {
    'Mass Comm': 1,
    'Car Park': 1,
  },
  'Car Park': {
    Moremi: 1,
    'Erastus Akingbola PostGraduate Hall': 1,
    'J.F Ade Ajayi Auditorium (link)': 1,
  },
  'Erastus Akingbola PostGraduate Hall': {
    'Car Park': 1,
    GTBank: 1,
  },
  GTBank: {
    'Erastus Akingbola PostGraduate Hall': 1,
    'Zenith Bank': 1,
  },
  'Zenith Bank': {
    GTBank: 1,
    'King Jaja Hall': 1,
  },
  'King Jaja Hall': {
    'Zenith Bank': 1,
    'Faculty of Science': 1,
  },
  'Faculty of Science': {
    'King Jaja Hall': 1,
    'L-Junction': 1,
  },
  'L-Junction': {
    'Faculty of Science': 1,
    'Medical Center': 2,
  },
};

export default graph;
