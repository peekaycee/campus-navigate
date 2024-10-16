type Graph = {
  [key: string]: { [key: string]: number };
};

const graph: Graph = {
  'Access Bank': {
    'T-Junction': 2,
    'New Hall': 3,
  },
  'Biobaku Hostel': {
    'Queen Amina Hall': 2,
    Firstbank: 1,
  },
  'Car Park': {
    Moremi: 1,
    'Erastus A. PGD Hall': 1,
    'J.F Ade Ajayi Auditorium (link)': 1,
  },
  CITS: {
    'New Hall': 2,
    'Y-Junction': 2,
    // 'Mass Comm (link)': 1,
  },
  'Church 1': {
    'Sport Center': 2,
    'Church 2': 1,
  },
  'Church 2': {
    'Church 1': 1,
    Mosque: 1,
  },
  'Junction': {
    Firstbank: 1,
    'Second-Gate': 4,
    'Medical Center': 2,
    DLI: 2,
    'Iya Moria': 1,
    'Women Society': 1,
    "Honour's Hall": 2,
    'FSS Complex': 2,
  },
  DLI: {
    'Junction': 2,
    'Iya Moria': 1,
  },
  Ecobank: {
    'Y-Junction': 1,
    'Mass Comm': 1,
  },
  Education: {
    'Elkanrmi Junction': 1,
    'First-Gate': 5,
    Elkanrmi: 4,
    'Faculty of Environmental Science': 3,
    'Wema Bank': 2,
  },
  'Elkanrmi Junction': {
    Elkanrmi: 5,
    Education: 1,
    'Kofo Hall': 4,
  },
  Elkanrmi: {
    'Elkanrmi Junction': 5,
    Education: 4,
    'Femi Gbajabiamila Hostel': 2,
    'Kofo Hall': 3,
  },
  'Erastus A. PGD Hall': {
    'Car Park': 1,
    GTBank: 1,
  },
  'Faculty of Art': {
    'Y-Junction': 2,
    'Love Garden': 1,
  },
  'Faculty of Environmental Science': {
    Education: 3,
    'Sport Center': 2,
  },
  'Faculty of Law': {
    'Law-Junction': 1,
    'Faculty of Mgt Sci.': 1,
  },
  'Faculty of Mgt Sci.': {
    'Faculty of Law': 1,
  },
  'Faculty of Science': {
    'King Jaja Hall': 1,
    'L-Junction': 1,
  },
  'Femi Gbajabiamila Hostel': {
    Elkanrmi: 2,
  },
  Firstbank: {
    'Biobaku Hostel': 1,
    'Junction': 1,
  },
  'First-Gate': {
    Education: 5,
  },
  FSS: {
    'FSS Complex': 1,
    Nithub: 1,
  },
  'FSS Complex': {
    'Junction': 2,
    FSS: 1,
  },
  GTBank: {
    'Erastus A. PGD Hall': 1,
    'Zenith Bank': 1,
  },
  "Honour's Hall": {
    'Women Society': 2,
  },
  'Iya Moria': {
    DLI: 1,
    'Women Society': 1,
  },
  'J.F Ade Ajayi Auditorium': {
    Library: 1,
    'Law-Junction': 1,
  },
  'King Jaja Hall': {
    'Zenith Bank': 1,
    'Faculty of Science': 1,
  },
  'Kofo Hall': {
    'Elkanrmi Junction': 4,
    'Queen Amina Hall': 2,
  },
  'Lagoon Front': {
    Library: 1,
  },
  'Law-Junction': {
    'Senate Building': 1,
    Library: 1,
    'J.F Ade Ajayi Auditorium': 1,
    'Faculty of Law': 1,
  },
  Library: {
    'J.F Ade Ajayi Auditorium': 1,
    'Lagoon Front': 1,
    'Law-Junction': 1,
  },
  'L-Junction': {
    'Faculty of Science': 1,
    'Medical Center': 2,
  },
  'Love Garden': {
    'Faculty of Art': 1,
    'Senate Building': 2,
  },
  'Mass Comm': {
    'Y-Junction': 2,
    Ecobank: 1,
    Moremi: 1,
  },
  'Medical Center': {
    'Junction': 2,
    'L-Junction': 2,
  },
  Moremi: {
    'Mass Comm': 1,
    'Car Park': 1,
  },
  Mosque: {
    'Church 2': 1,
    'Petro Station': 1,
  },
  'New Hall': {
    'Access Bank': 3,
    CITS: 2,
  },
  Nithub: {
    FSS: 1,
    Works: 1,
  },
  'Petro Station': {
    Mosque: 1,
    'T-Junction': 2,
  },
  'Queen Amina Hall': {
    'Kofo Hall': 2,
    'Biobaku Hostel': 2,
  },
  'Second-Gate': {
    'Junction': 4,
    'Medical Center': 2,
  },
  'Senate Building': {
    'Love Garden': 2,
    'Law-Junction': 1,
  },
  'Sport Center': {
    'Faculty of Environmental Science': 2,
    'Wema Bank': 3,
    'Church 1': 2,
  },
  'T-Junction': {
    Works: 2,
    'Petro Station': 2,
    'Access Bank': 2,
  },
  'Wema Bank': {
    Education: 2,
    'Sport Center': 3,
  },
  'Women Society': {
    'Iya Moria': 1,
    "Honour's Hall": 2,
  },
  Works: {
    Nithub: 1,
    'T-Junction': 2,
  },
  'Y-Junction': {
    CITS: 2,
    'Mass Comm': 2,
    Ecobank: 1,
    'Faculty of Art': 2,
  },
  'Zenith Bank': {
    GTBank: 1,
    'King Jaja Hall': 1,
  },
};

export default graph;
