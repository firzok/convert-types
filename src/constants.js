const programmingLanguages = [
  "C",
  "C++",
  "C#",
  "Java",
  "JavaScript",
  "Objective-C",
  "PHP",
  "Python",
  "Ruby",
  "Swift"
];

const dataTypes = {
  C: [
    "__int64",
    "bool",
    "char",
    "char*",
    "double",
    "float",
    "int",
    "long",
    "short",
    "unsigned __int64",
    "unsigned char",
    "unsigned int",
    "unsigned long",
    "unsigned short",
    "wchar_t",
    "wchar_t*"
  ],
  "C++": ["int", "float", "double", "char", "wchar_t", "bool"],
  "C#": ["int", "float", "double", "char", "long", "bool", "string"],
  Java: ["boolean", "char", "byte", "short", "int", "long", "float", "double"],
  JavaScript: ["Number", "String", "Boolean"],
  "Objective-C": [
    "BOOL",
    "char",
    "short int",
    "int",
    "long int",
    "float",
    "double",
    "NSNumber",
    "NSDecimalNumber",
    "NSString",
    "NSMutableString"
  ],
  PHP: ["String", "Integer", "Float", "Boolean"],
  Python: ["bool", "float", "str", "long", "int"],
  Ruby: ["Number", "Boolean", "String"],
  Swift: ["Bool", "Integer", "Float", "Double", "Character", "String"]
};

const conversions = {
  C: {
    __int64: {
      __int64: `
N/A
      
`,
      bool: `
__int64 vIn = 0;
bool vOut = vIn!=0;
      
`,
      char: `
__int64 vIn = 0;
char vOut = (char)vIn;
      
`,
      "char*": `
__int64 vIn = 0;
char vOut [21];_i64toa_s(vIn,vOut,sizeof(vOut),10);
      
`,
      double: `
__int64 vIn = 0;
double vOut = (double)vIn;
      
`,
      float: `
__int64 vIn = 0;
float vOut = (float)vIn;
      
`,
      int: `
__int64 vIn = 0;
int vOut = (int)vIn;
      
`,
      long: `
__int64 vIn = 0;
long vOut = (long)vIn;
      
`,
      short: `
__int64 vIn = 0;
short vOut = (short)vIn;
      
`,
      "unsigned __int64": `
__int64 vIn = 0;
unsigned __int64 vOut = (unsigned __int64)vIn;
      
`,
      "unsigned char": `
__int64 vIn = 0;
unsigned char vOut = (unsigned char)vIn;
      
`,
      "unsigned int": `
__int64 vIn = 0;
unsigned int vOut = (unsigned int)vIn;
      
`,
      "unsigned long": `
__int64 vIn = 0;
unsigned long vOut = (unsigned long)vIn;
      
`,
      "unsigned short": `
__int64 vIn = 0;
unsigned short vOut = (unsigned short)vIn;
      
`,
      wchar_t: `
_int64 vIn = 0;
wchar_t vOut = (wchar_t)vIn;
      
`,
      "wchar_t*": `
__int64 vIn = 0;
wchar_t vOut [21];
_i64tow_s(vIn,vOut,sizeof(vOut)/2,10)
      
;`
    },
    // =============
    bool: {
      __int64: `
boolt vIn = true;
__int64 vOut = vIn?1:0;
      
`,
      bool: `
N/A
      
`,
      char: `
bool vIn = true;
char vOut = vIn?1:0;
      
`,
      "char*": `
bool vIn = true;
char * vOut = vIn ? "true" : "false";
      
`,
      double: `
bool vIn = true;
double vOut = vIn?1.0:0.0;
      
`,
      float: `
bool vIn = true;
float vOut = vIn?1.0f:0.0f;
      
`,
      int: `
bool vIn = true;
int vOut = vIn?1:0;
      
`,
      long: `
bool vIn = true;
long vOut = vIn?1:0;
      
`,
      short: `
bool vIn = true;
short vOut = vIn?1:0;
      
`,
      "unsigned __int64": `
bool vIn = true;
unsigned __int64 vOut = vIn?1:0;
      
`,
      "unsigned char": `
bool vIn = true;
unsigned char vOut = vIn?1:0;
      
`,
      "unsigned int": `
bool vIn = true;
unsigned int vOut = vIn?1:0;
      
`,
      "unsigned long": `
bool vIn = true;
unsigned long vOut = vIn?1:0;
      
`,
      "unsigned short": `
bool vIn = true;
unsigned short vOut = vIn?1:0;
      
`,
      wchar_t: `
bool vIn = true;
wchar_t vOut = vIn?1:0;
      
`,
      "wchar_t*": `
bool vIn = true;
wchar_t * vOut = vIn ? L"true" : L"false"
      
;`
    },
    // =============
    char: {
      __int64: `
char vIn = 0;
__int64 vOut = (__int64)vIn;
      
`,
      bool: `
char vIn = 0;
bool vOut = vIn!=0;
      
`,
      char: `
N/A
      
`,
      "char*": `
char vIn = "F";
char vOut [2] = {vIn,0};
      
`,
      double: `
char vIn = 0;
double vOut = (double)vIn;
      
`,
      float: `
char vIn = 0;
float vOut = (float)vIn;
      
`,
      int: `
char vIn = 0;
int vOut = (int)vIn;
      
`,
      long: `
char vIn = 0;
long vOut = (long)vIn;
      
`,
      short: `
char vIn = 0;
short vOut = (short)vIn;
      
`,
      "unsigned __int64": `
char vIn = 0;
unsigned __int64 vOut = (unsigned __int64)vIn;
      
`,
      "unsigned char": `
char vIn = 0;
unsigned char vOut = (unsigned char)vIn;
      
`,
      "unsigned int": `
char vIn = 0;
unsigned int vOut = (unsigned int)vIn;
      
`,
      "unsigned long": `
char vIn = 0;
unsigned long vOut = (unsigned long)vIn;
      
`,
      "unsigned short": `
char vIn = 0;
unsigned short vOut = (unsigned short)vIn;
      
`,
      wchar_t: `
char vIn = 0;
wchar_t vOut = (wchar_t)vIn;
      
`,
      "wchar_t*": `
char vIn = 0;
wchar_t vOut [5];
_itow_s(vIn,vOut,(sizeof(vOut)/2),10)
      
;`
    },
    // =============
    "char*": {
      __int64: `
char * vIn = "0";
__int64 vOut = _atoi64(vIn);
      
`,
      bool: `
char * vIn = "true";
bool vOut = vIn && stricmp(vIn,"true")==0;
      
`,
      char: `
char * vIn = "0";
char vOut = (char)atoi(vIn);
      
`,
      "char*": `N/A
      
`,
      double: `
char * vIn = "0.0";
double vOut = strtod(vIn,NULL);
      
`,
      float: `
char * vIn = "0.0";
float vOut = (float)strtod(vIn,NULL);
      
`,
      int: `
char * vIn = "0";
int vOut = atoi(vIn);
      
`,
      long: `
char * vIn = "0";
long vOut = strtol(vIn,NULL,10);
      
`,
      short: `
char * vIn = "0";
short vOut = (short)atoi(vIn);
      
`,
      "unsigned __int64": `
char * vIn = "0";
unsigned __int64 vOut = _strtoui64(vIn,NULL,10);
      
`,
      "unsigned char": `
char * vIn = "0";
unsigned char vOut = (unsigned char)strtol(vIn,NULL,10);
      
`,
      "unsigned int": `
char * vIn = "0";
unsigned int vOut = strtoul(vIn,NULL,10);
      
`,
      "unsigned long": `
char * vIn = "0";
unsigned long vOut = strtoul(vIn,NULL,10);
      
`,
      "unsigned short": `
char * vIn = "0";
unsigned short vOut = (unsigned short)strtol(vIn,NULL,10);
      
`,
      wchar_t: `
char * vIn = "0";
wchar_t vOut = (wchar_t)atoi(vIn);
      
`,
      "wchar_t*": `
char * vIn = "FOO";
wchar_t * vOut = new wchar_t[strlen(vIn)+1];
mbstowcs_s(NULL,vOut,strlen(vIn)+1,vIn,strlen(vIn));

`
    },
    // =============
    double: {
      __int64: `
double vIn = 0.0;
__int64 vOut = (__int64)vIn;
      
`,
      bool: `
double vIn = 0.0;
bool vOut = vIn!=0.0;
      
`,
      char: `
double vIn = 0.0;
char vOut = (char)vIn;
      
`,
      "char*": `
double vIn = 1.8446744073709552e+019;
char vOut [26];
_gcvt_s(vOut,sizeof(vOut),vIn,17);
      
`,
      double: `N/A
      
`,
      float: `
double vIn = 0.0;
float vOut = (float)vIn;
      
`,
      int: `
double vIn = 0.0;
int vOut = (int)vIn;
      
`,
      long: `
double vIn = 0.0;
long vOut = (long)vIn;
      
`,
      short: `
double vIn = 0.0;
short vOut = (short)vIn;
      
`,
      "unsigned __int64": `
double vIn = 0.0;
unsigned __int64 vOut = (unsigned __int64)vIn;
      
`,
      "unsigned char": `
double vIn = 0.0;
unsigned char vOut = (unsigned char)vIn;
      
`,
      "unsigned int": `
double vIn = 0.0;
unsigned int vOut = (unsigned int)vIn;
      
`,
      "unsigned long": `
double vIn = 0.0;
unsigned long vOut = (unsigned long)vIn;
      
`,
      "unsigned short": `
double vIn = 0.0;
unsigned short vOut = (unsigned short)vIn;
      
`,
      wchar_t: `
double vIn = 0.0;
wchar_t vOut = (wchar_t)vIn;
      
`,
      "wchar_t*": `
double vIn = 1.8446744073709552e+019;
char vOutChar [26];
_gcvt_s(vOutChar,sizeof(vOutChar),vIn,17);
wchar_t vOut[26];
mbstowcs_s(NULL,vOut,sizeof(vOut)/2,vOutChar,sizeof(vOutChar));

`
    },
    // =============
    float: {
      __int64: `
float vIn = 0.0f;
__int64 vOut = (__int64)vIn;
      
`,
      bool: `
float vIn = 0.0f;
bool vOut = vIn!=0.0f;
      
`,
      char: `
float vIn = 0.0f;
char vOut = (char)vIn;
      
`,
      "char*": `
float vIn = -1.0737418e+008f;
char vOut [17];
_gcvt_s(vOut,sizeof(vOut),vIn,8);
      
`,
      double: `
float vIn = 0.0f;
double vOut = (double)vIn;
      
`,
      float: `N/A`,

      int: `
float vIn = 0.0f;
int vOut = (int)vIn;
      
`,
      long: `
float vIn = 0.0f;
long vOut = (long)vIn;
      
`,
      short: `
float vIn = 0.0f;
short vOut = (short)vIn;
      
`,
      "unsigned __int64": `
float vIn = 0.0f;
unsigned __int64 vOut = (unsigned __int64)vIn;
      
`,
      "unsigned char": `
float vIn = 0.0f;
unsigned char vOut = (unsigned char)vIn;
      
`,
      "unsigned int": `
float vIn = 0.0f;
unsigned int vOut = (unsigned int)vIn;
      
`,
      "unsigned long": `
float vIn = 0.0;
unsigned long vOut = (unsigned long)vIn;
      
`,
      "unsigned short": `
float vIn = 0.0f;
unsigned short vOut = (unsigned short)vIn;
      
`,
      wchar_t: `
float vIn = 0.0f;
wchar_t vOut = (wchar_t)vIn;
      
`,
      "wchar_t*": `
float vIn = -1.0737418e+008f;
char vOutChar [17];
_gcvt_s(vOutChar,sizeof(vOutChar),vIn,8);
wchar_t vOut[17];
mbstowcs_s(NULL,vOut,sizeof(vOut)/2,vOutChar,sizeof(vOutChar));
      
`
    },
    // =============
    int: {
      __int64: `
int vIn = 0;
__int64 vOut = (__int64)vIn;
      
`,
      bool: `
int vIn = 0;
bool vOut = vIn!=0;
      
`,
      char: `
int vIn = 0;
char vOut = (char)vIn;
      
`,
      "char*": `
int vIn = 0;
char vOut [12];
_itoa_s(vIn,vOut,sizeof(vOut),10);
      
`,
      double: `
int vIn = 0;
double vOut = (double)vIn;
      
`,
      float: `
int vIn = 0;
float vOut = (float)vIn;
      
`,
      int: `
N/A
      
`,
      long: `
int vIn = 0;
long vOut = (long)vIn;
      
`,
      short: `
int vIn = 0;
short vOut = (short)vIn;
      
`,
      "unsigned __int64": `
int vIn = 0;
unsigned __int64 vOut = (unsigned __int64)vIn;
      
`,
      "unsigned char": `
int vIn = 0;
unsigned char vOut = (unsigned char)vIn;
      
`,
      "unsigned int": `
int vIn = 0;
unsigned int vOut = (unsigned int)vIn;
      
`,
      "unsigned long": `
int vIn = 0;
unsigned long vOut = (unsigned long)vIn;
      
`,
      "unsigned short": `
int vIn = 0;
unsigned short vOut = (unsigned short)vIn;
      
`,
      wchar_t: `
int vIn = 0;
wchar_t vOut = (wchar_t)vIn;
      
`,
      "wchar_t*": `
int vIn = 0;
wchar_t vOut [12];
_itow_s(vIn,vOut,sizeof(vOut)/2,10);

`
    },

    long: {
      __int64: `
long vIn = 0;
__int64 vOut = (__int64)vIn;
      
`,
      bool: `
long vIn = 0;
bool vOut = vIn!=0;
      
`,
      char: `
long vIn = 0;
char vOut = (char)vIn;
      
`,
      "char*": `
long vIn = 0;
char vOut [12];
_itoa_s(vIn,vOut,sizeof(vOut),10);
      
`,
      double: `
long vIn = 0;
double vOut = (double)vIn;
      
`,
      float: `
long vIn = 0;
float vOut = (float)vIn;
      
`,
      int: `
long vIn = 0;
int vOut = (int)vIn;
      
`,
      long: `
N/A
      
`,
      short: `
long vIn = 0;
short vOut = (short)vIn;
      
`,
      "unsigned __int64": `
long vIn = 0;
unsigned __int64 vOut = (unsigned __int64)vIn;
      
`,
      "unsigned char": `
long vIn = 0;
unsigned char vOut = (unsigned char)vIn;
      
`,
      "unsigned int": `
long vIn = 0;
unsigned int vOut = (unsigned int)vIn;
      
`,
      "unsigned long": `
long vIn = 0;
unsigned long vOut = (unsigned long)vIn;
      
`,
      "unsigned short": `
long vIn = 0;
unsigned short vOut = (unsigned short)vIn;
      
`,
      wchar_t: `
long vIn = 0;
wchar_t vOut = (wchar_t)vIn;
      
`,
      "wchar_t*": `
long vIn = 0;
wchar_t vOut [12];
_itow_s(vIn,vOut,sizeof(vOut)/2,10);

`
    },

    short: {
      __int64: `      
short vIn = 0;
__int64 vOut = (__int64)vIn;
      
`,
      bool: `
short vIn = 0;
bool vOut = vIn!=0;
      
`,
      char: `
short vIn = 0;
char vOut = (char)vIn;
      
`,
      "char*": `
short vIn = 0;
char vOut [7];
_itoa_s(vIn,vOut,sizeof(vOut),10);
      
`,
      double: `
short vIn = 0;
double vOut = (double)vIn;
      
`,
      float: `
short vIn = 0;
float vOut = (float)vIn;
      
`,
      int: `
short vIn = 0;
int vOut = (int)vIn;
      
`,
      long: `
short vIn = 0;
long vOut = (long)vIn;
      
`,
      short: `
N/A
      
`,
      "unsigned __int64": `
short vIn = 0;
unsigned __int64 vOut = (unsigned __int64)vIn;
      
`,
      "unsigned char": `
short vIn = 0;
unsigned char vOut = (unsigned char)vIn;
      
`,
      "unsigned int": `
short vIn = 0;
unsigned int vOut = (unsigned int)vIn;
      
`,
      "unsigned long": `
short vIn = 0;
unsigned long vOut = (unsigned long)vIn;
      
`,
      "unsigned short": `
short vIn = 0;
unsigned short vOut = (unsigned short)vIn;
      
`,
      wchar_t: `
short vIn = 0;
wchar_t vOut = (wchar_t)vIn;
      
`,
      "wchar_t*": `
short vIn = 0;
wchar_t vOut [7];
_itow_s(vIn,vOut,sizeof(vOut)/2,10);

`
    },

    "unsigned __int64": {
      __int64: `
unsigned __int64 vIn = 0;
__int64 vOut = (__int64)vIn;
      
`,
      bool: `
unsigned __int64 = 0;
bool vOut = vIn!=0;
      
`,
      char: `
unsigned __int64 vIn = 0;
char vOut = (char)vIn;
      
`,
      "char*": `
unsigned __int64 vIn = 0;
char vOut [21];
_ui64toa_s(vIn,vOut,sizeof(vOut),10);
      
`,
      double: `
unsigned __int64 vIn = 0;
double vOut = (double)vIn;
      
`,
      float: `
unsigned __int64 vIn = 0;
float vOut = (float)vIn;
      
`,
      int: `
unsigned __int64 vIn = 0;
int vOut = (int)vIn;
      
`,
      long: `
unsigned __int64 vIn = 0;
long vOut = (long)vIn;
      
`,
      short: `
unsigned __int64 vIn = 0;
short vOut = (short)vIn;
      
`,
      "unsigned __int64": `
N/A
      
`,
      "unsigned char": `
unsigned __int64 vIn = 0;
unsigned char vOut = (unsigned char)vIn;
      
`,
      "unsigned int": `
unsigned __int64 vIn = 0;
unsigned int vOut = (unsigned int)vIn;
      
`,
      "unsigned long": `
unsigned __int64 vIn = 0;
unsigned long vOut = (unsigned long)vIn;
      
`,
      "unsigned short": `
unsigned __int64 vIn = 0;
unsigned short vOut = (unsigned short)vIn;
      
`,
      wchar_t: `
unsigned __int64 vIn = 0;
wchar_t vOut = (wchar_t)vIn;
      
`,
      "wchar_t*": `
unsigned __int64 vIn = 0;
wchar_t vOut [21];
_ui64tow_s(vIn,vOut,sizeof(vOut)/2,10);

`
    },

    "unsigned char": {
      __int64: `
unsigned char vIn = 0;
__int64 vOut = (__int64)vIn;
      
`,
      bool: `
unsigned char vIn = 0;
bool vOut = vIn!=0;
      
`,
      char: `
unsigned char vIn = 0;
char vOut = (char)vIn;
      
`,
      "char*": `
unsigned char vIn = "F";
char vOut [2] = {vIn,0};
      
`,
      double: `
unsigned char vIn = 0;
double vOut = (double)vIn;
      
`,
      float: `
unsigned char vIn = 0;
float vOut = (float)vIn;
      
`,
      int: `
unsigned char vIn = "0";
int vOut = (int)vIn;
      
`,
      long: `
unsigned char vIn = 0;
long vOut = (long)vIn;
      
`,
      short: `
unsigned char vIn = 0;
short vOut = (short)vIn;
      
`,
      "unsigned __int64": `
unsigned char vIn = 0;
unsigned __int64 vOut = (unsigned __int64)vIn;
      
`,
      "unsigned char": `
N/A
      
`,
      "unsigned int": `
unsigned char vIn = 0;
unsigned int vOut = (unsigned int)vIn;
      
`,
      "unsigned long": `
unsigned char vIn = 0;
unsigned long vOut = (unsigned long)vIn;
      
`,
      "unsigned short": `
unsigned char vIn = 0;
unsigned short vOut = (unsigned short)vIn;
      
`,
      wchar_t: `
unsigned char vIn = 0;
wchar_t vOut = (wchar_t)vIn;
      
`,
      "wchar_t*": `
unsigned char vIn = "F";
wchar_t vOut[2] = {vIn,0};

`
    },
    "unsigned int": {
      __int64: `
unsigned int vIn = 0;
__int64 vOut = (__int64)vIn;
      
`,
      bool: `
unsigned int vIn = 0;
bool vOut = vIn!=0;
      
`,
      char: `
unsigned int vIn = 0;
char vOut = (char)vIn;
      
`,
      "char*": `
unsigned int vIn = 0;
char vOut [11];
_ultoa_s(vIn,vOut,sizeof(vOut),10);
      
`,
      double: `
unsigned int vIn = 0;
double vOut = (double)vIn;
      
`,
      float: `
unsigned int vIn = 0;
float vOut = (float)vIn;
      
`,
      int: `
unsigned int vIn = 0;
int vOut = (int)vIn;
      
`,
      long: `
unsigned int vIn = 0;
long vOut = (long)vIn;
      
`,
      short: `
unsigned int vIn = 0;
short vOut = (short)vIn;
      
`,
      "unsigned __int64": `
unsigned int vIn = 0;
unsigned __int64 vOut = (unsigned __int64)vIn;
      
`,
      "unsigned char": `
unsigned int vIn = 0;
unsigned char vOut = (unsigned char)vIn;
      
`,
      "unsigned int": `
N/A
      
`,
      "unsigned long": `
unsigned int vIn = 0;
unsigned long vOut = (unsigned long)vIn;
      
`,
      "unsigned short": `
unsigned int vIn = 0;
unsigned short vOut = (unsigned short)vIn;
      
`,
      wchar_t: `
unsigned int vIn = 0;
wchar_t vOut = (wchar_t)vIn;
      
`,
      "wchar_t*": `
unsigned int vIn = 0;
wchar_t vOut [11];
_ultow_s(vIn,vOut,sizeof(vOut)/2,10);

`
    },
    "unsigned long": {
      __int64: `
unsigned long vIn = 0;
__int64 vOut = (__int64)vIn;
      
`,
      bool: `
unsigned long vIn = 0;
bool vOut = vIn!=0;
      
`,
      char: `
unsigned long vIn = 0;
char vOut = (char)vIn;
      
`,
      "char*": `
unsigned long vIn = 0;
char vOut [11];
_ultoa_s(vIn,vOut,sizeof(vOut),10);
      
`,
      double: `
unsigned long vIn = 0;
double vOut = (double)vIn;
      
`,
      float: `
unsigned long vIn = 0;
float vOut = (float)vIn;
      
`,
      int: `
unsigned long vIn = 0;
int vOut = (int)vIn;
      
`,
      long: `
unsigned long vIn = 0;
long vOut = (long)vIn;
      
`,
      short: `
unsigned long vIn = 0;
short vOut = (short)vIn;
      
`,
      "unsigned __int64": `
unsigned long vIn = 0;
unsigned __int64 vOut = (unsigned __int64)vIn;
      
`,
      "unsigned char": `
unsigned long vIn = 0;
unsigned char vOut = (unsigned char)vIn;
      
`,
      "unsigned int": `
unsigned long vIn = 0;
unsigned int vOut = (unsigned int)vIn;
      
`,
      "unsigned long": `
N/A
      
`,
      "unsigned short": `
unsigned long vIn = 0;
unsigned short vOut = (unsigned short)vIn;
      
`,
      wchar_t: `
unsigned long vIn = 0;
wchar_t vOut = (wchar_t)vIn;
      
`,
      "wchar_t*": `
unsigned long vIn = 0;
wchar_t vOut [11];
_ultow_s(vIn,vOut,sizeof(vOut)/2,10);

`
    },

    "unsigned short": {
      __int64: `
unsigned short vIn = 0;
__int64 vOut = (__int64)vIn;
      
`,
      bool: `
unsigned short vIn = 0;
bool vOut = vIn!=0;
      
`,
      char: `
unsigned short vIn = 0;
char vOut = (char)vIn;
      
`,
      "char*": `
unsigned short vIn = 0;
char vOut [6];
_ultoa_s(vIn,vOut,sizeof(vOut),10);
      
`,
      double: `
unsigned short vIn = 0;
double vOut = (double)vIn;
      
`,
      float: `
unsigned short vIn = 0;
float vOut = (float)vIn;
      
`,
      int: `
unsigned short vIn = 0;
int vOut = (int)vIn;
      
`,
      long: `
unsigned short vIn = 0;
long vOut = (long)vIn;
      
`,
      short: `
unsigned short vIn = 0;
short vOut = (short)vIn;
      
`,
      "unsigned __int64": `
unsigned short vIn = 0;
unsigned __int64 vOut = (unsigned __int64)vIn;
      
`,
      "unsigned char": `
unsigned short vIn = 0;
unsigned char vOut = (unsigned char)vIn;
      
`,
      "unsigned int": `
unsigned short vIn = 0;
unsigned int vOut = (unsigned int)vIn;
      
`,
      "unsigned long": `
unsigned short vIn = 0;
unsigned long vOut = (unsigned long)vIn;
      
`,
      "unsigned short": `
N/A
      
`,
      wchar_t: `
unsigned short vIn = 0;
wchar_t vOut = (wchar_t)vIn;
      
`,
      "wchar_t*": `
unsigned short vIn = 0;
wchar_t vOut[6];
_ultow_s(vIn,vOut,sizeof(vOut)/2,10);

`
    },
    wchar_t: {
      __int64: `
wchar_t vIn = 0;
__int64 vOut = (__int64)vIn;
      
`,
      bool: `
wchar_t vIn = 0;
bool vOut = vIn!=0;
      
`,
      char: `
wchar_t vIn = 0;
char vOut = (char)vIn;
      
`,
      "char*": `
wchar_t vIn = L"F";
char vOut[2];
wcstombs_s(NULL,vOut,sizeof(vOut),&vIn,1);
      
`,
      double: `
wchar_t vIn = 0;
double vOut = (double)vIn;
      
`,
      float: `
wchar_t vIn = 0;
float vOut = (float)vIn;
      
`,
      int: `
wchar_t vIn = 0;
int vOut = (int)vIn;
      
`,
      long: `
wchar_t vIn = 0;
long vOut = (long)vIn;
      
`,
      short: `
wchar_t vIn = 0;
short vOut = (short)vIn;
      
`,
      "unsigned __int64": `
wchar_t vIn = 0;
unsigned __int64 vOut = (unsigned __int64)vIn;
      
`,
      "unsigned char": `
wchar_t vIn = 0;
unsigned char vOut = (unsigned char)vIn;
      
`,
      "unsigned int": `
wchar_t vIn = 0;
unsigned int vOut = (unsigned int)vIn;
      
`,
      "unsigned long": `
   
`,
      "unsigned short": `
wchar_t vIn = 0;
unsigned short vOut = (unsigned short)vIn;
      
`,
      wchar_t: `
N/A
      
`,
      "wchar_t*": `
wchar_t vIn = L"F";
wchar_t vOut [2] = {vIn,0}
      
;`
    },
    "wchar_t*": {
      __int64: `
wchar_t * vIn = L"0";
__int64 vOut = _wtoi64(vIn);
      
`,
      bool: `
wchar_t * vIn = L"true";
bool vOut = vIn && wcsicmp(vIn,L"true")==0;
      
`,
      char: `
wchar_t * vIn = L"0";
char vOut = (char)wcstol(vIn,NULL,10);
      
`,
      "char*": `
wchar_t* vIn = L"FOOOOOOOOOOOO";
char * vOut = new char[wcslen(vIn)+1];wcstombs_s(NULL,vOut,wcslen(vIn)+1,vIn,wcslen(vIn)+1);
   
`,
      double: `
wchar_t * vIn = L"0.0";
double vOut = wcstod(vIn,NULL);
   
`,
      float: `
wchar_t * vIn = L"0.0";
float vOut = (float)wcstod(vIn,NULL);
   
`,
      int: `
wchar_t * vIn = L"0";
int vOut = _wtoi(vIn);
   
`,
      long: `
wchar_t * vIn = L"0";
long vOut = (long)wcstol(vIn,NULL,10);
   
`,
      short: `
wchar_t * vIn = L"0";
short vOut = (short)wcstol(vIn,NULL,10);
   
`,
      "unsigned __int64": `
wchar_t * vIn = L"0";
unsigned __int64 vOut = _wcstoui64(vIn,NULL,10);
   
`,
      "unsigned char": `
wchar_t * vIn = L"0";
unsigned char vOut = (unsigned char)wcstoul(vIn,NULL,10);
   
`,
      "unsigned int": `
wchar_t * vIn = L"0";
unsigned int vOut = wcstoul(vIn,NULL,10);
   
`,
      "unsigned long": `
wchar_t * vIn = L"0";
unsigned long vOut = (unsigned long)wcstoul(vIn,NULL,10);
   
`,
      "unsigned short": `
wchar_t * vIn = L"0";
unsigned short vOut = (unsigned short)wcstoul(vIn,NULL,10);
   
`,
      wchar_t: `
wchar_t * vIn = L"0";
wchar_t vOut = (wchar_t)wcstol(vIn,NULL,10);
   
`,
      "wchar_t*": `
N/A

`
    }
  },
  "C++": {
    "C++": {
      __int64: {
        __int64: `
N/A`,

        bool: `
__int64 vIn = 0;
bool vOut = vIn!=0;

`,

        char: `
__int64 vIn = 0;
char vOut = (char)vIn;

`,

        "char*": `
__int64 vIn = 0;
char vOut [21];
_i64toa_s(vIn,vOut,sizeof(vOut),10);

`,

        double: `
__int64 vIn = 0;
double vOut = (double)vIn;

`,

        float: `
__int64 vIn = 0;
float vOut = (float)vIn;

`,

        int: `
__int64 vIn = 0;
int vOut = (int)vIn;

`,

        long: `
__int64 vIn = 0;
long vOut = (long)vIn;

`,

        short: `
__int64 vIn = 0;
short vOut = (short)vIn;

`,

        "unsigned __int64": `
__int64 vIn = 0;
unsigned __int64 vOut = (unsigned __int64)vIn;

`,

        "unsigned char": `
__int64 vIn = 0;
unsigned char vOut = (unsigned char)vIn;

`,

        "unsigned int": `
__int64 vIn = 0;
unsigned int vOut = (unsigned int)vIn;

`,

        "unsigned long": `
__int64 vIn = 0;
unsigned long vOut = (unsigned long)vIn;

`,

        "unsigned short": `
__int64 vIn = 0;
unsigned short vOut = (unsigned short)vIn;

`,

        wchar_t: `
_int64 vIn = 0;
wchar_t vOut = (wchar_t)vIn;

`,

        "wchar_t*": `
__int64 vIn = 0;
wchar_t vOut [21];
_i64tow_s(vIn,vOut,sizeof(vOut)/2,10);

`
      },
      bool: {
        __int64: `
boolt vIn = true;
__int64 vOut = vIn?1:0;

`,

        bool: `
N/A

`,

        char: `
bool vIn = true;
char vOut = vIn?1:0;

`,

        "char*": `
bool vIn = true;
char * vOut = vIn ? "true" : "false";
`,
        double: `
bool vIn = true;
double vOut = vIn?1.0:0.0;

`,

        float: `
bool vIn = true;
float vOut = vIn?1.0f:0.0f;

`,

        int: `
bool vIn = true;
int vOut = vIn?1:0;

`,

        long: `
bool vIn = true;
long vOut = vIn?1:0;

`,

        short: `
bool vIn = true;
short vOut = vIn?1:0;

`,

        "unsigned __int64": `
bool vIn = true;
unsigned __int64 vOut = vIn?1:0;

`,

        "unsigned char": `
bool vIn = true;
unsigned char vOut = vIn?1:0;

`,

        "unsigned int": `
bool vIn = true;
unsigned int vOut = vIn?1:0;

`,

        "unsigned long": `
bool vIn = true;
unsigned long vOut = vIn?1:0;

`,

        "unsigned short": `
bool vIn = true;
unsigned short vOut = vIn?1:0;

`,

        wchar_t: `
bool vIn = true;
wchar_t vOut = vIn?1:0;

`,

        "wchar_t*": `
bool vIn = true;
wchar_t * vOut = vIn ? L"true" : L"false";
`
      },
      char: {
        __int64: `
char vIn = 0;
__int64 vOut = (__int64)vIn;

`,

        bool: `
char vIn = 0;
bool vOut = vIn!=0;

`,

        char: `
N/A

`,

        "char*": `
char vIn = 'F';
char vOut [2] = {vIn,0};

`,

        double: `
char vIn = 0;
double vOut = (double)vIn;

`,

        float: `
char vIn = 0;
float vOut = (float)vIn;

`,

        int: `
char vIn = 0;
int vOut = (int)vIn;

`,

        long: `
char vIn = 0;
long vOut = (long)vIn;

`,

        short: `
char vIn = 0;
short vOut = (short)vIn;

`,

        "unsigned __int64": `
char vIn = 0;
unsigned __int64 vOut = (unsigned __int64)vIn;

`,

        "unsigned char": `
char vIn = 0;
unsigned char vOut = (unsigned char)vIn;

`,

        "unsigned int": `
char vIn = 0;
unsigned int vOut = (unsigned int)vIn;

`,

        "unsigned long": `
char vIn = 0;
unsigned long vOut = (unsigned long)vIn;

`,

        "unsigned short": `
char vIn = 0;
unsigned short vOut = (unsigned short)vIn;

`,

        wchar_t: `
char vIn = 0;
wchar_t vOut = (wchar_t)vIn;

`,

        "wchar_t*": `
char vIn = 0;
wchar_t vOut [5];
_itow_s(vIn,vOut,(sizeof(vOut)/2),10);
`
      },
      "char*": {
        __int64: `
char * vIn = "0";
__int64 vOut = _atoi64(vIn);

`,
        bool: `
char * vIn = "true";
bool vOut = vIn && stricmp(vIn,"true")==0;

`,
        char: `
char * vIn = "0";
char vOut = (char)atoi(vIn);

`,
        "char*": `
N/A

`,

        double: `
char * vIn = "0.0";
double vOut = strtod(vIn,NULL);

`,
        float: `
char * vIn = "0.0";
float vOut = (float)strtod(vIn,NULL);

`,
        int: `
char * vIn = "0";
int vOut = atoi(vIn);
`,
        long: `
char * vIn = "0";
long vOut = strtol(vIn,NULL,10);
`,
        short: `
char * vIn = "0";
short vOut = (short)atoi(vIn);
`,
        "unsigned __int64": `
char * vIn = "0";
unsigned __int64 vOut = _strtoui64(vIn,NULL,10);
`,
        "unsigned char": `
char * vIn = "0";
unsigned char vOut = (unsigned char)strtol(vIn,NULL,10);
`,
        "unsigned int": `
char * vIn = "0";
unsigned int vOut = strtoul(vIn,NULL,10);
',
      "unsigned long": '
char * vIn = "0";
unsigned long vOut = strtoul(vIn,NULL,10);
`,
        "unsigned short": `
char * vIn = "0";
unsigned short vOut = (unsigned short)strtol(vIn,NULL,10);
`,
        wchar_t: `
char * vIn = "0";
wchar_t vOut = (wchar_t)atoi(vIn);
`,
        "wchar_t*": `
char * vIn = "FOO";
wchar_t * vOut = new wchar_t[strlen(vIn)+1];
mbstowcs_s(NULL,vOut,strlen(vIn)+1,vIn,strlen(vIn));
`
      },
      double: {
        __int64: `
double vIn = 0.0;
__int64 vOut = (__int64)vIn;

`,

        bool: `
double vIn = 0.0;
bool vOut = vIn!=0.0;

`,

        char: `
double vIn = 0.0;
char vOut = (char)vIn;

`,

        "char*": `
double vIn = 1.8446744073709552e+019;
char vOut [26];
_gcvt_s(vOut,sizeof(vOut),vIn,17);

`,

        double: `
N/A

`,

        float: `
double vIn = 0.0;
float vOut = (float)vIn;

`,

        int: `
double vIn = 0.0;
int vOut = (int)vIn;

`,

        long: `
double vIn = 0.0;
long vOut = (long)vIn;

`,

        short: `
double vIn = 0.0;
short vOut = (short)vIn;

`,

        "unsigned __int64": `
double vIn = 0.0;
unsigned __int64 vOut = (unsigned __int64)vIn;

`,

        "unsigned char": `
double vIn = 0.0;
unsigned char vOut = (unsigned char)vIn;

`,

        "unsigned int": `
double vIn = 0.0;
unsigned int vOut = (unsigned int)vIn;

`,

        "unsigned long": `
double vIn = 0.0;
unsigned long vOut = (unsigned long)vIn;

`,

        "unsigned short": `
double vIn = 0.0;
unsigned short vOut = (unsigned short)vIn;

`,

        wchar_t: `
double vIn = 0.0;
wchar_t vOut = (wchar_t)vIn;

`,

        "wchar_t*": `
double vIn = 1.8446744073709552e+019;
char vOutChar [26];
_gcvt_s(vOutChar,sizeof(vOutChar),vIn,17);
wchar_t vOut[26];
mbstowcs_s(NULL,vOut,sizeof(vOut)/2,vOutChar,sizeof(vOutChar));

`
      },
      float: {
        __int64: `
float vIn = 0.0f;
__int64 vOut = (__int64)vIn;

`,

        bool: `
float vIn = 0.0f;
bool vOut = vIn!=0.0f;

`,

        char: `
float vIn = 0.0f;
char vOut = (char)vIn;

`,

        "char*": `
float vIn = -1.0737418e+008f;
char vOut [17];
_gcvt_s(vOut,sizeof(vOut),vIn,8);

`,

        double: `
float vIn = 0.0f;
double vOut = (double)vIn;

`,

        float: `
N/A`,

        int: `
float vIn = 0.0f;
int vOut = (int)vIn;

`,

        long: `
float vIn = 0.0f;
long vOut = (long)vIn;

`,

        short: `
float vIn = 0.0f;
short vOut = (short)vIn;

`,

        "unsigned __int64": `
float vIn = 0.0f;
unsigned __int64 vOut = (unsigned __int64)vIn;

`,

        "unsigned char": `
float vIn = 0.0f;
unsigned char vOut = (unsigned char)vIn;

`,

        "unsigned int": `
float vIn = 0.0f;
unsigned int vOut = (unsigned int)vIn;

`,

        "unsigned long": `
float vIn = 0.0;
unsigned long vOut = (unsigned long)vIn;

`,

        "unsigned short": `
float vIn = 0.0f;
unsigned short vOut = (unsigned short)vIn;

`,

        wchar_t: `
float vIn = 0.0f;
wchar_t vOut = (wchar_t)vIn;

`,

        "wchar_t*": `
float vIn = -1.0737418e+008f;
char vOutChar [17];
_gcvt_s(vOutChar,sizeof(vOutChar),vIn,8);
wchar_t vOut[17];
mbstowcs_s(NULL,vOut,sizeof(vOut)/2,vOutChar,sizeof(vOutChar));

`
      },
      int: {
        __int64: `
int vIn = 0;
__int64 vOut = (__int64)vIn;

`,

        bool: `
int vIn = 0;
bool vOut = vIn!=0;

`,

        char: `
int vIn = 0;
char vOut = (char)vIn;

`,

        "char*": `
int vIn = 0;
char vOut [12];
_itoa_s(vIn,vOut,sizeof(vOut),10);

`,

        double: `
int vIn = 0;
double vOut = (double)vIn;

`,

        float: `
int vIn = 0;
float vOut = (float)vIn;

`,

        int: `
N/A`,

        long: `
int vIn = 0;
long vOut = (long)vIn;

`,

        short: `
int vIn = 0;
short vOut = (short)vIn;

`,

        "unsigned __int64": `
int vIn = 0;
unsigned __int64 vOut = (unsigned __int64)vIn;

`,

        "unsigned char": `
int vIn = 0;
unsigned char vOut = (unsigned char)vIn;

`,

        "unsigned int": `
int vIn = 0;
unsigned int vOut = (unsigned int)vIn;

`,

        "unsigned long": `
int vIn = 0;
unsigned long vOut = (unsigned long)vIn;

`,

        "unsigned short": `
int vIn = 0;
unsigned short vOut = (unsigned short)vIn;

`,

        wchar_t: `
int vIn = 0;
wchar_t vOut = (wchar_t)vIn;

`,

        "wchar_t*": `
int vIn = 0;
wchar_t vOut [12];
_itow_s(vIn,vOut,sizeof(vOut)/2,10);
`
      },
      long: {
        __int64: `
long vIn = 0;
__int64 vOut = (__int64)vIn;

`,

        bool: `
long vIn = 0;
bool vOut = vIn!=0;

`,

        char: `
long vIn = 0;
char vOut = (char)vIn;

`,

        "char*": `
long vIn = 0;
char vOut [12];
_itoa_s(vIn,vOut,sizeof(vOut),10);

`,

        double: `
long vIn = 0;
double vOut = (double)vIn;

`,

        float: `
long vIn = 0;
float vOut = (float)vIn;

`,

        int: `
long vIn = 0;
int vOut = (int)vIn;

`,

        long: `
N/A`,

        short: `
long vIn = 0;
short vOut = (short)vIn;

`,

        "unsigned __int64": `
long vIn = 0;
unsigned __int64 vOut = (unsigned __int64)vIn;

`,

        "unsigned char": `
long vIn = 0;
unsigned char vOut = (unsigned char)vIn;

`,

        "unsigned int": `
long vIn = 0;
unsigned int vOut = (unsigned int)vIn;

`,

        "unsigned long": `
long vIn = 0;
unsigned long vOut = (unsigned long)vIn;

`,

        "unsigned short": `
long vIn = 0;
unsigned short vOut = (unsigned short)vIn;

`,

        wchar_t: `
long vIn = 0;
wchar_t vOut = (wchar_t)vIn;

`,

        "wchar_t*": `
long vIn = 0;
wchar_t vOut [12];
_itow_s(vIn,vOut,sizeof(vOut)/2,10);
`
      },
      short: {
        __int64: `
short vIn = 0;
__int64 vOut = (__int64)vIn;

`,

        bool: `
short vIn = 0;
bool vOut = vIn!=0;

`,

        char: `
short vIn = 0;
char vOut = (char)vIn;

`,

        "char*": `
short vIn = 0;
char vOut [7];
_itoa_s(vIn,vOut,sizeof(vOut),10);

`,

        double: `
short vIn = 0;
double vOut = (double)vIn;

`,

        float: `
short vIn = 0;
float vOut = (float)vIn;

`,

        int: `
short vIn = 0;
int vOut = (int)vIn;

`,

        long: `
short vIn = 0;
long vOut = (long)vIn;

`,

        short: `
N/A`,

        "unsigned __int64": `
short vIn = 0;
unsigned __int64 vOut = (unsigned __int64)vIn;

`,

        "unsigned char": `
short vIn = 0;
unsigned char vOut = (unsigned char)vIn;

`,

        "unsigned int": `
short vIn = 0;
unsigned int vOut = (unsigned int)vIn;

`,

        "unsigned long": `
short vIn = 0;
unsigned long vOut = (unsigned long)vIn;

`,

        "unsigned short": `
short vIn = 0;
unsigned short vOut = (unsigned short)vIn;

`,

        wchar_t: `
short vIn = 0;
wchar_t vOut = (wchar_t)vIn;

`,

        "wchar_t*": `
short vIn = 0;
wchar_t vOut [7];
_itow_s(vIn,vOut,sizeof(vOut)/2,10);
`
      },
      "unsigned __int64": {
        __int64: `
unsigned __int64 vIn = 0;
__int64 vOut = (__int64)vIn;

`,

        bool: `
unsigned __int64 = 0;
bool vOut = vIn!=0;

`,

        char: `
unsigned __int64 vIn = 0;
char vOut = (char)vIn;

`,

        "char*": `
unsigned __int64 vIn = 0;
char vOut [21];
_ui64toa_s(vIn,vOut,sizeof(vOut),10);

`,

        double: `
unsigned __int64 vIn = 0;
double vOut = (double)vIn;

`,

        float: `
unsigned __int64 vIn = 0;
float vOut = (float)vIn;

`,

        int: `
unsigned __int64 vIn = 0;
int vOut = (int)vIn;

`,

        long: `
unsigned __int64 vIn = 0;
long vOut = (long)vIn;

`,

        short: `
unsigned __int64 vIn = 0;
short vOut = (short)vIn;

`,

        "unsigned __int64": `
N/A`,

        "unsigned char": `
unsigned __int64 vIn = 0;
unsigned char vOut = (unsigned char)vIn;

`,

        "unsigned int": `
unsigned __int64 vIn = 0;
unsigned int vOut = (unsigned int)vIn;

`,

        "unsigned long": `
unsigned __int64 vIn = 0;
unsigned long vOut = (unsigned long)vIn;

`,

        "unsigned short": `
unsigned __int64 vIn = 0;
unsigned short vOut = (unsigned short)vIn;

`,

        wchar_t: `
unsigned __int64 vIn = 0;
wchar_t vOut = (wchar_t)vIn;

`,

        "wchar_t*": `
unsigned __int64 vIn = 0;
wchar_t vOut [21];
_ui64tow_s(vIn,vOut,sizeof(vOut)/2,10);

`
      },
      "unsigned char": {
        __int64: `
unsigned char vIn = 0;
__int64 vOut = (__int64)vIn;

`,

        bool: `
unsigned char vIn = 0;
bool vOut = vIn!=0;

`,

        char: `
unsigned char vIn = 0;
char vOut = (char)vIn;

`,

        "char*": `
unsigned char vIn = 'F';
char vOut [2] = {vIn,0};

`,

        double: `
unsigned char vIn = 0;
double vOut = (double)vIn;

`,

        float: `
unsigned char vIn = 0;
float vOut = (float)vIn;

`,

        int: `
unsigned char vIn = '0';
int vOut = (int)vIn;

`,

        long: `
unsigned char vIn = 0;
long vOut = (long)vIn;

`,

        short: `
unsigned char vIn = 0;
short vOut = (short)vIn;

`,

        "unsigned __int64": `
unsigned char vIn = 0;
unsigned __int64 vOut = (unsigned __int64)vIn;

`,

        "unsigned char": `
N/A`,

        "unsigned int": `
unsigned char vIn = 0;
unsigned int vOut = (unsigned int)vIn;

`,

        "unsigned long": `
unsigned char vIn = 0;
unsigned long vOut = (unsigned long)vIn;

`,

        "unsigned short": `
unsigned char vIn = 0;
unsigned short vOut = (unsigned short)vIn;

`,

        wchar_t: `
unsigned char vIn = 0;
wchar_t vOut = (wchar_t)vIn;

`,

        "wchar_t*": `
unsigned char vIn = 'F';
wchar_t vOut[2] = {vIn,0};
`
      },
      "unsigned int": {
        __int64: `
unsigned int vIn = 0;
__int64 vOut = (__int64)vIn;

`,

        bool: `
unsigned int vIn = 0;
bool vOut = vIn!=0;

`,

        char: `
unsigned int vIn = 0;
char vOut = (char)vIn;

`,

        "char*": `
unsigned int vIn = 0;
char vOut [11];
_ultoa_s(vIn,vOut,sizeof(vOut),10);

`,

        double: `
unsigned int vIn = 0;
double vOut = (double)vIn;

`,

        float: `
unsigned int vIn = 0;
float vOut = (float)vIn;

`,

        int: `
unsigned int vIn = 0;
int vOut = (int)vIn;

`,

        long: `
unsigned int vIn = 0;
long vOut = (long)vIn;

`,

        short: `
unsigned int vIn = 0;
short vOut = (short)vIn;

`,

        "unsigned __int64": `
unsigned int vIn = 0;
unsigned __int64 vOut = (unsigned __int64)vIn;

`,

        "unsigned char": `
unsigned int vIn = 0;
unsigned char vOut = (unsigned char)vIn;

`,

        "unsigned int": `
N/A`,

        "unsigned long": `
unsigned int vIn = 0;
unsigned long vOut = (unsigned long)vIn;

`,

        "unsigned short": `
unsigned int vIn = 0;
unsigned short vOut = (unsigned short)vIn;

`,

        wchar_t: `
unsigned int vIn = 0;
wchar_t vOut = (wchar_t)vIn;

`,

        "wchar_t*": `
unsigned int vIn = 0;
wchar_t vOut [11];
_ultow_s(vIn,vOut,sizeof(vOut)/2,10);
`
      },
      "unsigned long": {
        __int64: `
unsigned long vIn = 0;
__int64 vOut = (__int64)vIn;

`,

        bool: `
unsigned long vIn = 0;
bool vOut = vIn!=0;

`,

        char: `
unsigned long vIn = 0;
char vOut = (char)vIn;

`,

        "char*": `
unsigned long vIn = 0;
char vOut [11];
_ultoa_s(vIn,vOut,sizeof(vOut),10);

`,

        double: `
unsigned long vIn = 0;
double vOut = (double)vIn;

`,

        float: `
unsigned long vIn = 0;
float vOut = (float)vIn;

`,

        int: `
unsigned long vIn = 0;
int vOut = (int)vIn;

`,

        long: `
unsigned long vIn = 0;
long vOut = (long)vIn;

`,

        short: `
unsigned long vIn = 0;
short vOut = (short)vIn;

`,

        "unsigned __int64": `
unsigned long vIn = 0;
unsigned __int64 vOut = (unsigned __int64)vIn;

`,

        "unsigned char": `
unsigned long vIn = 0;
unsigned char vOut = (unsigned char)vIn;

`,

        "unsigned int": `
unsigned long vIn = 0;
unsigned int vOut = (unsigned int)vIn;

`,

        "unsigned long": `
N/A`,

        "unsigned short": `
unsigned long vIn = 0;
unsigned short vOut = (unsigned short)vIn;

`,

        wchar_t: `
unsigned long vIn = 0;
wchar_t vOut = (wchar_t)vIn;

`,

        "wchar_t*": `
unsigned long vIn = 0;
wchar_t vOut [11];
_ultow_s(vIn,vOut,sizeof(vOut)/2,10);
`
      },
      "unsigned short": {
        __int64: `
unsigned short vIn = 0;
__int64 vOut = (__int64)vIn;

`,

        bool: `
unsigned short vIn = 0;
bool vOut = vIn!=0;

`,

        char: `
unsigned short vIn = 0;
char vOut = (char)vIn;

`,

        "char*": `
unsigned short vIn = 0;
char vOut [6];
_ultoa_s(vIn,vOut,sizeof(vOut),10);

`,

        double: `
unsigned short vIn = 0;
double vOut = (double)vIn;

`,

        float: `
unsigned short vIn = 0;
float vOut = (float)vIn;

`,

        int: `
unsigned short vIn = 0;
int vOut = (int)vIn;

`,

        long: `
unsigned short vIn = 0;
long vOut = (long)vIn;

`,

        short: `
unsigned short vIn = 0;
short vOut = (short)vIn;

`,

        "unsigned __int64": `
unsigned short vIn = 0;
unsigned __int64 vOut = (unsigned __int64)vIn;

`,

        "unsigned char": `
unsigned short vIn = 0;
unsigned char vOut = (unsigned char)vIn;

`,

        "unsigned int": `
unsigned short vIn = 0;
unsigned int vOut = (unsigned int)vIn;

`,

        "unsigned long": `
unsigned short vIn = 0;
unsigned long vOut = (unsigned long)vIn;

`,

        "unsigned short": `
N/A`,

        wchar_t: `
unsigned short vIn = 0;
wchar_t vOut = (wchar_t)vIn;

`,

        "wchar_t*": `
unsigned short vIn = 0;
wchar_t vOut[6];
_ultow_s(vIn,vOut,sizeof(vOut)/2,10);
`
      },
      wchar_t: {
        __int64: `
wchar_t vIn = 0;
__int64 vOut = (__int64)vIn;

`,

        bool: `
wchar_t vIn = 0;
bool vOut = vIn!=0;

`,

        char: `
wchar_t vIn = 0;
char vOut = (char)vIn;

`,

        "char*": `
wchar_t vIn = L'F';
char vOut[2];
wcstombs_s(NULL,vOut,sizeof(vOut),&vIn,1);

`,

        double: `
wchar_t vIn = 0;
double vOut = (double)vIn;

`,

        float: `
wchar_t vIn = 0;
float vOut = (float)vIn;

`,

        int: `
wchar_t vIn = 0;
int vOut = (int)vIn;

`,

        long: `
wchar_t vIn = 0;
long vOut = (long)vIn;

`,

        short: `
wchar_t vIn = 0;
short vOut = (short)vIn;

`,

        "unsigned __int64": `
wchar_t vIn = 0;
unsigned __int64 vOut = (unsigned __int64)vIn;

`,

        "unsigned char": `
wchar_t vIn = 0;
unsigned char vOut = (unsigned char)vIn;

`,

        "unsigned int": `
wchar_t vIn = 0;
unsigned int vOut = (unsigned int)vIn;

`,

        "unsigned long": `
`,

        "unsigned short": `
wchar_t vIn = 0;
unsigned short vOut = (unsigned short)vIn;

`,

        wchar_t: `
N/A

`,

        "wchar_t*": `
wchar_t vIn = L'F';
wchar_t vOut [2] = {vIn,0};
`
      },
      "wchar_t*": {
        __int64: `
wchar_t * vIn = L"0";
__int64 vOut = _wtoi64(vIn);

`,
        bool: `
wchar_t * vIn = L"true";
bool vOut = vIn && wcsicmp(vIn,L"true")==0;

`,
        char: `
wchar_t * vIn = L"0";
char vOut = (char)wcstol(vIn,NULL,10);

`,
        "char*": `
wchar_t* vIn = L"FOOOOOOOOOOOO";
char * vOut = new char[wcslen(vIn)+1];
wcstombs_s(NULL,vOut,wcslen(vIn)+1,vIn,wcslen(vIn)+1);

`,
        double: `
wchar_t * vIn = L"0.0";
double vOut = wcstod(vIn,NULL);

`,
        float: `
wchar_t * vIn = L"0.0";
float vOut = (float)wcstod(vIn,NULL);

`,
        int: `
wchar_t * vIn = L"0";
int vOut = _wtoi(vIn);

`,
        long: `
wchar_t * vIn = L"0";
long vOut = (long)wcstol(vIn,NULL,10);

`,
        short: `
wchar_t * vIn = L"0";
short vOut = (short)wcstol(vIn,NULL,10);

`,
        "unsigned __int64": `
wchar_t * vIn = L"0";
unsigned __int64 vOut = _wcstoui64(vIn,NULL,10);

`,
        "unsigned char": `
wchar_t * vIn = L"0";
unsigned char vOut = (unsigned char)wcstoul(vIn,NULL,10);

`,
        "unsigned int": `
wchar_t * vIn = L"0";
unsigned int vOut = wcstoul(vIn,NULL,10);

`,
        "unsigned long": `
wchar_t * vIn = L"0";
unsigned long vOut = (unsigned long)wcstoul(vIn,NULL,10);

`,
        "unsigned short": `
wchar_t * vIn = L"0";
unsigned short vOut = (unsigned short)wcstoul(vIn,NULL,10);

`,
        wchar_t: `
wchar_t * vIn = L"0";
wchar_t vOut = (wchar_t)wcstol(vIn,NULL,10);

`,
        "wchar_t*": `
N/A

`
      }
    }
  },
  "C#": {},
  Java: {
    boolean: {
      boolean: `
  N/A
  
  `,
      byte: `
  boolean vIn = true;
  byte vOut = (byte)(vIn?1:0);
  
  `,
  
      "byte[]": `
  boolean vIn = true;
  byte [] vOut = new byte[]{(byte) (vIn?1:0)};
  
  `,
  
      char: `
  boolean vIn = true;
  char vOut = (char)(vIn?1:0);
   //0x01`,
      double: `
  boolean vIn = true;
  double vOut = vIn?1.0:0.0;
  
  `,
  
      float: `
  boolean vIn = true;
  float vOut = vIn?1.0f:0.0f;
  
  `,
  
      int: `
  boolean vIn = true;
  int vOut = vIn?1:0;
  
  `,
  
      long: `
  boolean vIn = true;
  long vOut = vIn?1:0;
  
  `,
  
      short: `
  boolean vIn = true;
  short vOut = (short)(vIn?1:0);
  
  `,
  
      String: `
  boolean vIn = true;
  String vOut = Boolean.toString(vIn);
  
  `
    },
    byte: {
      boolean: `
  byte vIn = 1;
  boolean vOut = vIn!=0;
  
  `,
  
      byte: `
  N/A
  
  `,
      "byte[]": `
  byte vIn = -128;
  byte [] vOut = new byte[]{vIn};
  
  `,
  
      char: `
  byte vIn = 65;
  char vOut = (char)vIn;
   //'A'`,
      double: `
  byte vIn = -128;
   double vOut = (double)vIn;
  
  `,
      float: `
  byte vIn = -128;
  float vOut = (float)vIn;
  
  `,
  
      int: `
  byte vIn = -128;
  int vOut = (int)vIn;
  
  `,
  
      long: `
  byte vIn = -128;
  long vOut = (long)vIn;
  
  `,
  
      short: `
  byte vIn = 127;
  short vOut = (short)vIn;
  
  `,
  
      String: `
  byte vIn = -128;
  String vOut = Byte.toString(vIn);
  `
    },
    "byte[]": {
      boolean: `
  byte[] vIn = new byte[] { 1, 1, 0 };
   boolean vOut = vIn[0] != 0;
  
  `,
      byte: `
  byte[] vIn = new byte[] { 1, 1, 0 };
   byte vOut = vIn[0];
  
  `,
      "byte[]": `
  N/A
  `,
      char: `
  byte[] vIn = new byte[] { 'F', 'O', 'O' };
  char vOut = (char)vIn[0];
  
  `,
      double: `
  N/A
  
  `,
      float: `
  N/A
  
  `,
      int: `
  byte[] vInt = new byte[] { (byte)(2147483647 >>> 24), (byte)(2147483647 >>> 16), (byte)(2147483647 >>> 8), (byte)2147483647};
  int vOut = (vInt[0] << 24) + ((vInt[1] & 0xFF) << 16) + ((vInt[2] & 0xFF) << 8) + (vInt[3] & 0xFF);
  
  `,
  
      long: `
  byte[] vInt = new byte[] { (byte)(9223372036854775807L >>> 56),  (byte)(9223372036854775807L >>> 48),  (byte)(9223372036854775807L >>> 40),  (byte)(9223372036854775807L >>> 32),  (byte)(9223372036854775807L >>> 24), (byte)(9223372036854775807L >>> 16), (byte)(9223372036854775807L >>> 8), (byte)9223372036854775807L};
  long vOut = (vInt[0] << 56) + ((vInt[1] & 0xFF) << 48) + ((vInt[2] & 0xFF) << 40) + ((vInt[3] & 0xFF) << 32) + ((vInt[4] & 0xFF) << 24) + ((vInt[5] & 0xFF) << 16) + ((vInt[6] & 0xFF) << 8)  + (vInt[7] & 0xFF);
  
  `,
  
      short: `
  byte[] vInt = new byte[] {  (byte)(32767 >>> 8), (byte)32767};
  int vOut = ((vInt[0] & 0xFF) << 8) + (vInt[1] & 0xFF);
  
  `,
  
      String: `
  byte[] vIn = new byte[] { 'F', 'O', 'O' };
  String vOut = new String(vIn);
  
  `
    },
    char: {
      boolean: `
  char vIn = '1';
  boolean vOut = vIn!=0;
  
  `,
  
      byte: `
  double vIn = 'A';
  byte vOut = (byte)vIn;
  //returns 65
   
  `,
      "byte[]": `
  char vIn = 'A';
  byte [] vOut = new byte[]{(byte)vIn};
  
  `,
  
      char: `
  N/A`,
      double: `
  char vIn = 'A';
  double vOut = (double)vIn;
  
  `,
  
      float: `
  char vIn = 'A';
  float vOut = (float)vIn;
  
  `,
  
      int: `
  char vIn = 'A';
  int vOut = (int)vIn;
  
  `,
  
      long: `
  char vIn = 'A';
  long vOut = (long)vIn;
  
  `,
  
      short: `
  char vIn = 'A';
  short vOut = (short)vIn;
  
  `,
  
      String: `
  char vIn = 'A';
  String vOut = Character.toString(vIn);
  
  `
    },
    double: {
      boolean: `
  double vIn = 1.0;
  boolean vOut = vIn!=0.0;
  
  `,
  
      byte: `
  double vIn = -128.0;
  byte vOut = (byte)vIn;
  
  `,
  
      "byte[]": `
  N/A`,
      char: `
  double vIn = 65.0;
  char vOut = (char)vIn;
  
  `,
      double: `
  N/A
  
  `,
      float: `
  double vIn = 3.4028235E38;
  float vOut = (float)vIn;
  
  `,
  
      int: `
  double vIn = -2147483648.0;
  int vOut = (int)vIn;
  
  `,
  
      long: `
  double vIn = -9223372036854775808.0;
  long vOut = (long)vIn;
  
  `,
  
      short: `
  double vIn = -32768.0;
  short vOut = (short)vIn;
  
  `,
  
      String: `
  double vIn = -1.7976931348623157E308;
  String vOut = Double.toString(vIn);
  
  `
    },
    float: {
      boolean: `
  float vIn = 1.0f;
  boolean vOut = vIn!=0.0f;
  
  `,
  
      byte: `
  float vIn = 127.0f;
  byte vOut = (byte)vIn;
  
  `,
  
      "byte[]": `
  N/A
  
  `,
      char: `
  float vIn = 65.0f;
  char vOut = (char)vIn;
  
   `,
      double: `
  float vIn = 3.4028235E38f;
  double vOut = (double)vIn;
  
  `,
  
      float: `
  N/A
  
  `,
      int: `
  float vIn = -2147483648.0f;
  int vOut = (int)vIn;
  
  `,
  
      long: `
  float vIn =-9223372036854775808.0f;
  long vOut = (long)vIn;
  
  `,
  
      short: `
  float vIn = -32768.0f;
  short vOut = (short)vIn;
  
  `,
  
      String: `
  float vIn = 3.4028235E38f;
  String vOut = Float.toString(vIn);
  
  `
    },
    int: {
      boolean: `
  int vIn = 1;
  boolean vOut = vIn!=0;
  
  `,
  
      byte: `
  int vIn = 127;
  byte vOut = (byte)vIn;
  
  `,
  
      "byte[]": `
  int vInt = -2147483648;
  byte[] vOut = new byte[] { (byte)(vInt >>> 24), (byte)(vInt >>> 16), (byte)(vInt >>> 8), (byte)vInt};
  
  `,
  
      char: `
  int vIn = 65;
  char vOut = (char)vIn;
  
   `,
      double: `
  int vIn = -2147483648;
  double vOut = (double)vIn;
  
  `,
  
      float: `
  int vIn = -2147483648;
  float vOut = (float)vIn;
  
  `,
  
      int: `
  N/A
  
  `,
      long: `
  int vIn = -2147483648;
  long vOut = (long)vIn;
  
  `,
  
      short: `
  int vIn = -32768.0;
  short vOut = (short)vIn;
  
  `,
  
      String: `
  int vIn = -2147483648;
  String vOut = Integer.toString(vIn);
  
  `
    },
    long: {
      boolean: `
  long vIn = 1;
  boolean vOut = vIn!=0;
  
  `,
  
      byte: `
  long vIn = 127;
  byte vOut = (byte)vIn;
  
  `,
  
      "byte[]": `
  long vInt = -9223372036854775808L;
  byte[] vOut = new byte[] { (byte)(vInt >>> 56),  (byte)(vInt >>> 48),  (byte)(vInt >>> 40),  (byte)(vInt >>> 32),  (byte)(vInt >>> 24), (byte)(vInt >>> 16), (byte)(vInt >>> 8), (byte)vInt};
  
  `,
  
      char: `
  long vIn = 65L;
  char vOut = (char)vIn;
   
  `,
      double: `
  long vIn = 9223372036854775807L;
  double vOut = (double)vIn;
  
  `,
  
      float: `
  long vIn = -9223372036854775808L;
  float vOut = (float)vIn;
  
  `,
  
      int: `
  long vIn = -2147483648;
  int vOut = (int)vIn;
  
  `,
  
      long: `
  N/A
  
  `,
      short: `
  long vIn = 32767;
  short vOut = (short)vIn;
  
  `,
  
      String: `
  long vIn = -9223372036854775808L;
  String vOut = Long.toString(vIn);
  
  `
    },
    short: {
      boolean: `
  short vIn = 1;
  boolean vOut = vIn!=0;
  
  `,
  
      byte: `
  short vIn = 127;
  byte vOut = (byte)vIn;
  
  `,
  
      "byte[]": `
  short vInt = -32768;
  byte[] vOut = new byte[] {  (byte)(vInt >>> 8), (byte)vInt};
  
  `,
  
      char: `
  short vIn = 65;
  char vOut = (char)vIn;
   
  `,
      double: `
  short vIn = -32768;
  double vOut = (double)vIn;
  
  `,
  
      float: `
  short vIn = -32768;
  float vOut = (float)vIn;
  
  `,
  
      int: `
  short vIn = -32768;
  int vOut = (int)vIn;
  
  `,
  
      long: `
  short vIn = -32768;
  long vOut = (long)vIn;
  
  `,
  
      short: `
  N/A
  
  `,
      String: `
  short vIn = -32768;
  String vOut = Short.toString(vIn);
  
  `
    },
    String: {
      boolean: `
  String vIn = "true";
  boolean vOut = Boolean.parseBoolean(vIn);
  
  `,
      byte: `
  String vIn = "127";
  byte vOut = Byte.parseByte(vIn);
  
  `,
      "byte[]": `
  String vIn = "FOO";
  byte[] vOut = vIn.getBytes();
  
  `,
      char: `
  String vIn = "A";
  char vOut = vIn.charAt(0);
  
  `,
      double: `
  String vIn = "-1.7976931348623157E308";
  double vOut = Double.parseDouble(vIn);
  
  `,
      float: `
  String vIn = "3.4028235E38";
  float vOut = Float.parseFloat(vIn);
  
  `,
      int: `
  String vIn = "-2147483648";
  int vOut = Integer.parseInt(vIn);
  
  `,
      long: `
  String vIn = "-9223372036854775808";
  long vOut = Long.parseLong(vIn);
  
  `,
      short: `
  String vIn = "-32768";
  short vOut = Short.parseShort(vIn);
  
  `,
      String: `
  N/A
  
  `
    }
  },
  JavaScript: {
    Boolean: {
      Boolean: `
  N/A
  
  `,
      Number: `
  var vIn = true;
  var vOut = vIn?1:0;
  
  `,
      String: `
  var vIn = true;
  var vOut = vIn.toString();
  
  `
    },
    Number: {
      Boolean: `
  var vIn = 1;
  var vOut = vIn!=0?true:false;
  
  `,
      Number: `
  N/A
      
  `,
      String: `
  var vIn = 0;
  var vOut = vIn.toString();
  
  `
    },
    String: {
      Boolean: `
  var vIn = "true";
  var vOut = vIn.toLowerCase()=="true"?1:0;
  
  `,
      Number: `
  var vIn = 0;
  var vOut = parseInt(vIn,10/*base*/);
  
  `,
      String: `
  N/A
  
  `
    }
  },
  "Objective-C": {
    __int64: {
          __int64: `
  
      N/ A
  `,
      bool: `
  __int64 vIn = 0;
  bool vOut = vIn!=0;
  
  `,
      char: `
  __int64 vIn = 0;
  char vOut = (char)vIn;
  
  `,
      "char*": `
  __int64 vIn = 0;
  char vOut [21];
  _i64toa_s(vIn,vOut,sizeof(vOut),10);
  
  `,
      double: `
  __int64 vIn = 0;
  double vOut = (double)vIn;
  
  `,
      float: `
  __int64 vIn = 0;
  float vOut = (float)vIn;
  
  `,
      int: `
  __int64 vIn = 0;
  int vOut = (int)vIn;
  
  `,
      long: `
  __int64 vIn = 0;
  long vOut = (long)vIn;
  
  `,
      short: `
  __int64 vIn = 0;
  short vOut = (short)vIn;
  
  `,
      "unsigned __int64": `
  __int64 vIn = 0;
  unsigned __int64 vOut = (unsigned __int64)vIn;
  
  `,
      "unsigned char": `
  __int64 vIn = 0;
  unsigned char vOut = (unsigned char)vIn;
  
  `,
      "unsigned int": `
  __int64 vIn = 0;
  unsigned int vOut = (unsigned int)vIn;
  
  `,
      "unsigned long": `
  __int64 vIn = 0;
  unsigned long vOut = (unsigned long)vIn;
  
  `,
      "unsigned short": `
  __int64 vIn = 0;
  unsigned short vOut = (unsigned short)vIn;
  
  `,
      wchar_t: `
  _int64 vIn = 0;
  wchar_t vOut = (wchar_t)vIn;
  
  `,
      "wchar_t*": `
  __int64 vIn = 0;
  wchar_t vOut [21];
  _i64tow_s(vIn,vOut,sizeof(vOut)/2,10);
  
  
  `
    },
    bool: {
      __int64: `
  boolt vIn = true;
  __int64 vOut = vIn?1:0;
  
  `,
      bool: `
  N/A
  
  `,
      char: `
  bool vIn = true;
  char vOut = vIn?1:0;
  
  `,
        "char*": `
  bool vIn = true;
  char * vOut = vIn ? "true" : "false";
  
        
  `,
      double: `
  bool vIn = true;
  double vOut = vIn?1.0:0.0;
  
  `,
      float: `
  bool vIn = true;
  float vOut = vIn?1.0f:0.0f;
  
  `,
      int: `
  bool vIn = true;
  int vOut = vIn?1:0;
  
  `,
      long: `
  bool vIn = true;
  long vOut = vIn?1:0;
  
  `,
      short: `
  bool vIn = true;
  short vOut = vIn?1:0;
  
  `,
      "unsigned __int64": `
  bool vIn = true;
  unsigned __int64 vOut = vIn?1:0;
  
  `,
      "unsigned char": `
  bool vIn = true;
  unsigned char vOut = vIn?1:0;
  
  `,
      "unsigned int": `
  bool vIn = true;
  unsigned int vOut = vIn?1:0;
  
  `,
      "unsigned long": `
  bool vIn = true;
  unsigned long vOut = vIn?1:0;
  
  `,
      "unsigned short": `
  bool vIn = true;
  unsigned short vOut = vIn?1:0;
  
  `,
      wchar_t: `
  bool vIn = true;
  wchar_t vOut = vIn?1:0;
  
  `,
      "wchar_t*": `bool vIn = true;
  wchar_t * vOut = vIn ? L"true" : L"false";
  `
    },
    char: {
      __int64: `
  char vIn = 0;
  __int64 vOut = (__int64)vIn;
  
  `,
      bool: `
  char vIn = 0;
  bool vOut = vIn!=0;
  
  `,
      char: `
  N/A
  
  `,
      "char*": `
  char vIn = 'F';
  char vOut [2] = {vIn,0};
  
  `,
      double: `
  char vIn = 0;
  double vOut = (double)vIn;
  
  `,
      float: `
  char vIn = 0;
  float vOut = (float)vIn;
  
  `,
      int: `
  char vIn = 0;
  int vOut = (int)vIn;
  
  `,
      long: `
  char vIn = 0;
  long vOut = (long)vIn;
  
  `,
      short: `
  char vIn = 0;
  short vOut = (short)vIn;
  
  `,
      "unsigned __int64": `
  char vIn = 0;
  unsigned __int64 vOut = (unsigned __int64)vIn;
  
  `,
      "unsigned char": `
  char vIn = 0;
  unsigned char vOut = (unsigned char)vIn;
  
  `,
      "unsigned int": `
  char vIn = 0;
  unsigned int vOut = (unsigned int)vIn;
  
  `,
      "unsigned long": `
  char vIn = 0;
  unsigned long vOut = (unsigned long)vIn;
  
  `,
      "unsigned short": `
  char vIn = 0;
  unsigned short vOut = (unsigned short)vIn;
  
  `,
      wchar_t: `
  char vIn = 0;
  wchar_t vOut = (wchar_t)vIn;
  
  `,
      "wchar_t*": `
  char vIn = 0;
  wchar_t vOut [5];
  _itow_s(vIn,vOut,(sizeof(vOut)/2),10);
  
  
  `
    },
    "char*": {
      __int64: `
  char * vIn = "0";
  
  __int64 vOut = _atoi64(vIn);
   
  
  `,
      bool: `
  char * vIn = "true";
  
  bool vOut = vIn && stricmp(vIn, "true") == 0;
  
  
      `,
      char: `
  char * vIn = "0";
  
  char vOut = (char)atoi(vIn);
   
  
  `,
      "char*": `
  N/A
  
  `,
      double: `char * vIn = "0.0";
  double vOut = strtod(vIn,NULL);
  `,
      float: `char * vIn = "0.0";
  float vOut = (float)strtod(vIn,NULL);
  `,
      int: `char * vIn = "0";
  int vOut = atoi(vIn);
  `,
      long: `char * vIn = "0";
  long vOut = strtol(vIn,NULL,10);
  `,
      short: `char * vIn = "0";
  short vOut = (short)atoi(vIn);
  `,
      "unsigned __int64": `char * vIn = "0";
  unsigned __int64 vOut = _strtoui64(vIn,NULL,10);
  `,
      "unsigned char": `char * vIn = "0";
  unsigned char vOut = (unsigned char)strtol(vIn,NULL,10);
  `,
      "unsigned int": `char * vIn = "0";
  unsigned int vOut = strtoul(vIn,NULL,10);
  `,
      "unsigned long": `char * vIn = "0";
  unsigned long vOut = strtoul(vIn,NULL,10);
  `,
      "unsigned short": `char * vIn = "0";
  unsigned short vOut = (unsigned short)strtol(vIn,NULL,10);
  `,
      wchar_t: `
  char * vIn = "0";
   wchar_t vOut = (wchar_t)atoi(vIn);
  `,
      "wchar_t*":`
  
  char * vIn = "FOO";
   wchar_t * vOut = new wchar_t[strlen(vIn) + 1];
   mbstowcs_s(NULL, vOut, strlen(vIn) + 1, vIn, strlen(vIn));
  
  
  `},
    double: {
      __int64: `
  double vIn = 0.0;
  __int64 vOut = (__int64)vIn;
  
  `,
      bool: `
  double vIn = 0.0;
  bool vOut = vIn!=0.0;
  
  `,
      char: `
  double vIn = 0.0;
  char vOut = (char)vIn;
  
  `,
      "char*":`
  double vIn = 1.8446744073709552e+019;
  char vOut [26];
  _gcvt_s(vOut,sizeof(vOut),vIn,17);
  
  `,
      double: `
  N/A
  
  `,
      float: `
  double vIn = 0.0;
  float vOut = (float)vIn;
  
  `,
      int: `
  double vIn = 0.0;
  int vOut = (int)vIn;
  
  `,
      long: `
  double vIn = 0.0;
  long vOut = (long)vIn;
  
  `,
      short: `
  double vIn = 0.0;
  short vOut = (short)vIn;
  
  `,
      "unsigned __int64": `
  double vIn = 0.0;
  unsigned __int64 vOut = (unsigned __int64)vIn;
  
  `,
      "unsigned char": `
  double vIn = 0.0;
  unsigned char vOut = (unsigned char)vIn;
  
  `,
      "unsigned int": `
  double vIn = 0.0;
  unsigned int vOut = (unsigned int)vIn;
  
  `,
      "unsigned long": `
  double vIn = 0.0;
  unsigned long vOut = (unsigned long)vIn;
  
  `,
      "unsigned short": `
  double vIn = 0.0;
  unsigned short vOut = (unsigned short)vIn;
  
  `,
      wchar_t: `
  double vIn = 0.0;
  wchar_t vOut = (wchar_t)vIn;
  
  `,
        "wchar_t*":`
  double vIn = 1.8446744073709552e+019;
  char vOutChar [26];
  _gcvt_s(vOutChar,sizeof(vOutChar),vIn,17);
  wchar_t vOut[26];
  mbstowcs_s(NULL,vOut,sizeof(vOut)/2,vOutChar,sizeof(vOutChar));
  `
    },
    float: {
      __int64: `
  float vIn = 0.0f;
  __int64 vOut = (__int64)vIn;
  
  `,
      bool: `
  float vIn = 0.0f;
  bool vOut = vIn!=0.0f;
  
  `,
      char: `
  float vIn = 0.0f;
  char vOut = (char)vIn;
  
  `,
      "char*": `
  float vIn = -1.0737418e+008f;
  char vOut [17];
  _gcvt_s(vOut,sizeof(vOut),vIn,8);
  
  `,
      double: `
  float vIn = 0.0f;
  double vOut = (double)vIn;
  
  `,
      float: `
  N/A
  
  `,
      int: `
  float vIn = 0.0f;
  int vOut = (int)vIn;
  
  `,
      long: `
  float vIn = 0.0f;
  long vOut = (long)vIn;
  
  `,
      short: `
  float vIn = 0.0f;
  short vOut = (short)vIn;
  
  `,
      "unsigned __int64": `
  float vIn = 0.0f;
  unsigned __int64 vOut = (unsigned __int64)vIn;
  
  `,
      "unsigned char": `
  float vIn = 0.0f;
  unsigned char vOut = (unsigned char)vIn;
  
  `,
      "unsigned int": `
  float vIn = 0.0f;
  unsigned int vOut = (unsigned int)vIn;
  
  `,
      "unsigned long": `
  float vIn = 0.0;
  unsigned long vOut = (unsigned long)vIn;
  
  `,
      "unsigned short": `
  float vIn = 0.0f;
  unsigned short vOut = (unsigned short)vIn;
  
  `,
      wchar_t: `
  float vIn = 0.0f;
  wchar_t vOut = (wchar_t)vIn;
  
  `,
        "wchar_t*":`
  float vIn = -1.0737418e+008f;
  char vOutChar [17];
  _gcvt_s(vOutChar,sizeof(vOutChar),vIn,8);
  wchar_t vOut[17];
  mbstowcs_s(NULL,vOut,sizeof(vOut)/2,vOutChar,sizeof(vOutChar));
  
  `
    },
    int: {
      __int64: `
  int vIn = 0;
  __int64 vOut = (__int64)vIn;
  
  `,
      bool: `
  int vIn = 0;
  bool vOut = vIn!=0;
  
  `,
      char: `
  int vIn = 0;
  char vOut = (char)vIn;
  
  `,
      "char*": `
  int vIn = 0;
  char vOut [12];
  _itoa_s(vIn,vOut,sizeof(vOut),10);
  
  `,
      double: `
  int vIn = 0;
  double vOut = (double)vIn;
  
  `,
      float: `
  int vIn = 0;
  float vOut = (float)vIn;
  
  `,
      int: `
  N/A
  
  `,
      long: `
  int vIn = 0;
  long vOut = (long)vIn;
  
  `,
      short: `
  int vIn = 0;
  short vOut = (short)vIn;
  
  `,
      "unsigned __int64": `
  int vIn = 0;
  unsigned __int64 vOut = (unsigned __int64)vIn;
  
  `,
      "unsigned char": `
  int vIn = 0;
  unsigned char vOut = (unsigned char)vIn;
  
  `,
      "unsigned int": `
  int vIn = 0;
  unsigned int vOut = (unsigned int)vIn;
  
  `,
      "unsigned long": `
  int vIn = 0;
  unsigned long vOut = (unsigned long)vIn;
  
  `,
      "unsigned short": `
  int vIn = 0;
  unsigned short vOut = (unsigned short)vIn;
  
  `,
      wchar_t: `
  int vIn = 0;
  wchar_t vOut = (wchar_t)vIn;
  
  `,
      "wchar_t*": `
  int vIn = 0;
  wchar_t vOut [12];
  _itow_s(vIn,vOut,sizeof(vOut)/2,10);
  `
    },
    long: {
      __int64: `
  long vIn = 0;
  __int64 vOut = (__int64)vIn;
  
  `,
      bool: `
  long vIn = 0;
  bool vOut = vIn!=0;
  
  `,
      char: `
  long vIn = 0;
  char vOut = (char)vIn;
  
  `,
      "char*": `
  long vIn = 0;
  char vOut [12];
  _itoa_s(vIn,vOut,sizeof(vOut),10);
  
  `,
      double: `
  long vIn = 0;
  double vOut = (double)vIn;
  
  `,
      float: `
  long vIn = 0;
  float vOut = (float)vIn;
  
  `,
      int: `
  long vIn = 0;
  int vOut = (int)vIn;
  
  `,
      long: `
  N/A
  
  `,
      short: `
  long vIn = 0;
  short vOut = (short)vIn;
  
  `,
      "unsigned __int64": `
  long vIn = 0;
  unsigned __int64 vOut = (unsigned __int64)vIn;
  
  `,
      "unsigned char": `
  long vIn = 0;
  unsigned char vOut = (unsigned char)vIn;
  
  `,
      "unsigned int": `
  long vIn = 0;
  unsigned int vOut = (unsigned int)vIn;
  
  `,
      "unsigned long": `
  long vIn = 0;
  unsigned long vOut = (unsigned long)vIn;
  
  `,
      "unsigned short": `
  long vIn = 0;
  unsigned short vOut = (unsigned short)vIn;
  
  `,
      wchar_t: `
  long vIn = 0;
  wchar_t vOut = (wchar_t)vIn;
  
  `,
      "wchar_t*": `
  long vIn = 0;
  wchar_t vOut [12];
  _itow_s(vIn,vOut,sizeof(vOut)/2,10);
  `
    },
    short: {
      __int64: `
  short vIn = 0;
  __int64 vOut = (__int64)vIn;
  
  `,
      bool: `
  short vIn = 0;
  bool vOut = vIn!=0;
  
  `,
      char: `
  short vIn = 0;
  char vOut = (char)vIn;
  
  `,
      "char*": `
  short vIn = 0;
  char vOut [7];
  _itoa_s(vIn,vOut,sizeof(vOut),10);
  
  `,
      double: `
  short vIn = 0;
  double vOut = (double)vIn;
  
  `,
      float: `
  short vIn = 0;
  float vOut = (float)vIn;
  
  `,
      int: `
  short vIn = 0;
  int vOut = (int)vIn;
  
  `,
      long: `
  short vIn = 0;
  long vOut = (long)vIn;
  
  `,
      short: `
  N/A
  
  `,
      "unsigned __int64": `
  short vIn = 0;
  unsigned __int64 vOut = (unsigned __int64)vIn;
  
  `,
      "unsigned char": `
  short vIn = 0;
  unsigned char vOut = (unsigned char)vIn;
  
  `,
      "unsigned int": `
  short vIn = 0;
  unsigned int vOut = (unsigned int)vIn;
  
  `,
      "unsigned long": `
  short vIn = 0;
  unsigned long vOut = (unsigned long)vIn;
  
  `,
      "unsigned short": `
  short vIn = 0;
  unsigned short vOut = (unsigned short)vIn;
  
  `,
      wchar_t: `
  short vIn = 0;
  wchar_t vOut = (wchar_t)vIn;
  
  `,
      "wchar_t*": `
  short vIn = 0;
  wchar_t vOut [7];
  _itow_s(vIn,vOut,sizeof(vOut)/2,10);
  `
    },
    "unsigned __int64": {
      __int64: `
  unsigned __int64 vIn = 0;
  __int64 vOut = (__int64)vIn;
  
  `,
      bool: `
  unsigned __int64 = 0;
  bool vOut = vIn!=0;
  
  `,
      char: `
  unsigned __int64 vIn = 0;
  char vOut = (char)vIn;
  
  `,
      "char*": `
  unsigned __int64 vIn = 0;
  char vOut [21];
  _ui64toa_s(vIn,vOut,sizeof(vOut),10);
  
  `,
      double: `
  unsigned __int64 vIn = 0;
  double vOut = (double)vIn;
  
  `,
      float: `
  unsigned __int64 vIn = 0;
  float vOut = (float)vIn;
  
  `,
      int: `
  unsigned __int64 vIn = 0;
  int vOut = (int)vIn;
  
  `,
      long: `
  unsigned __int64 vIn = 0;
  long vOut = (long)vIn;
  
  `,
      short: `
  unsigned __int64 vIn = 0;
  short vOut = (short)vIn;
  
  `,
      "unsigned __int64": `
  N/A
  
  `,
      "unsigned char": `
  unsigned __int64 vIn = 0;
  unsigned char vOut = (unsigned char)vIn;
  
  `,
      "unsigned int": `
  unsigned __int64 vIn = 0;
  unsigned int vOut = (unsigned int)vIn;
  
  `,
      "unsigned long": `
  unsigned __int64 vIn = 0;
  unsigned long vOut = (unsigned long)vIn;
  
  `,
      "unsigned short": `
  unsigned __int64 vIn = 0;
  unsigned short vOut = (unsigned short)vIn;
  
  `,
      wchar_t: `
  unsigned __int64 vIn = 0;
  wchar_t vOut = (wchar_t)vIn;
  
  `,
      "wchar_t*": `
  unsigned __int64 vIn = 0;
  wchar_t vOut [21];
  _ui64tow_s(vIn,vOut,sizeof(vOut)/2,10);
  `
    },
    "unsigned char": {
      __int64: `
  unsigned char vIn = 0;
  __int64 vOut = (__int64)vIn;
  
  `,
      bool: `
  unsigned char vIn = 0;
  bool vOut = vIn!=0;
  
  `,
      char: `
  unsigned char vIn = 0;
  char vOut = (char)vIn;
  
  `,
      "char*": `
  unsigned char vIn = 'F';
  char vOut [2] = {vIn,0};
  
  `,
      double: `
  unsigned char vIn = 0;
  double vOut = (double)vIn;
  
  `,
      float: `
  unsigned char vIn = 0;
  float vOut = (float)vIn;
  
  `,
      int: `
  unsigned char vIn = '0';
  int vOut = (int)vIn;
  
  `,
      long: `
  unsigned char vIn = 0;
  long vOut = (long)vIn;
  
  `,
      short: `
  unsigned char vIn = 0;
  short vOut = (short)vIn;
  
  `,
      "unsigned __int64": `
  unsigned char vIn = 0;
  unsigned __int64 vOut = (unsigned __int64)vIn;
  
  `,
      "unsigned char": `
  N/A
  
  `,
      "unsigned int": `
  unsigned char vIn = 0;
  unsigned int vOut = (unsigned int)vIn;
  
  `,
      "unsigned long": `
  unsigned char vIn = 0;
  unsigned long vOut = (unsigned long)vIn;
  
  `,
      "unsigned short": `
  unsigned char vIn = 0;
  unsigned short vOut = (unsigned short)vIn;
  
  `,
      wchar_t: `
  unsigned char vIn = 0;
  wchar_t vOut = (wchar_t)vIn;
  
  `,
      "wchar_t*": `
  unsigned char vIn = 'F';
  wchar_t vOut[2] = {vIn,0};
  `
    },
    "unsigned int": {
      __int64: `
  unsigned int vIn = 0;
  __int64 vOut = (__int64)vIn;
  
  `,
      bool: `
  unsigned int vIn = 0;
  bool vOut = vIn!=0;
  
  `,
      char: `
  unsigned int vIn = 0;
  char vOut = (char)vIn;
  
  `,
      "char*": `
  unsigned int vIn = 0;
  char vOut [11];
  _ultoa_s(vIn,vOut,sizeof(vOut),10);
  
  `,
      double: `
  unsigned int vIn = 0;
  double vOut = (double)vIn;
  
  `,
      float: `
  unsigned int vIn = 0;
  float vOut = (float)vIn;
  
  `,
      int: `
  unsigned int vIn = 0;
  int vOut = (int)vIn;
  
  `,
      long: `
  unsigned int vIn = 0;
  long vOut = (long)vIn;
  
  `,
      short: `
  unsigned int vIn = 0;
  short vOut = (short)vIn;
  
  `,
      "unsigned __int64": `
  unsigned int vIn = 0;
  unsigned __int64 vOut = (unsigned __int64)vIn;
  
  `,
      "unsigned char": `
  unsigned int vIn = 0;
  unsigned char vOut = (unsigned char)vIn;
  
  `,
      "unsigned int": `
  N/A
  
  `,
      "unsigned long": `
  unsigned int vIn = 0;
  unsigned long vOut = (unsigned long)vIn;
  
  `,
      "unsigned short": `
  unsigned int vIn = 0;
  unsigned short vOut = (unsigned short)vIn;
  
  `,
      wchar_t: `
  unsigned int vIn = 0;
  wchar_t vOut = (wchar_t)vIn;
  
  `,
      "wchar_t*": `
  unsigned int vIn = 0;
  wchar_t vOut [11];
  _ultow_s(vIn,vOut,sizeof(vOut)/2,10);
  `
    },
    "unsigned long": {
      __int64: `
  unsigned long vIn = 0;
  __int64 vOut = (__int64)vIn;
  
  `,
      bool: `
  unsigned long vIn = 0;
  bool vOut = vIn!=0;
  
  `,
      char: `
  unsigned long vIn = 0;
  char vOut = (char)vIn;
  
  `,
      "char*": `
  unsigned long vIn = 0;
  char vOut [11];
  _ultoa_s(vIn,vOut,sizeof(vOut),10);
  
  `,
      double: `
  unsigned long vIn = 0;
  double vOut = (double)vIn;
  
  `,
      float: `
  unsigned long vIn = 0;
  float vOut = (float)vIn;
  
  `,
      int: `
  unsigned long vIn = 0;
  int vOut = (int)vIn;
  
  `,
      long: `
  unsigned long vIn = 0;
  long vOut = (long)vIn;
  
  `,
      short: `
  unsigned long vIn = 0;
  short vOut = (short)vIn;
  
  `,
      "unsigned __int64": `
  unsigned long vIn = 0;
  unsigned __int64 vOut = (unsigned __int64)vIn;
  
  `,
      "unsigned char": `
  unsigned long vIn = 0;
  unsigned char vOut = (unsigned char)vIn;
  
  `,
      "unsigned int": `
  unsigned long vIn = 0;
  unsigned int vOut = (unsigned int)vIn;
  
  `,
      "unsigned long": `
  N/A
  
  `,
      "unsigned short": `
  unsigned long vIn = 0;
  unsigned short vOut = (unsigned short)vIn;
  
  `,
      wchar_t: `
  unsigned long vIn = 0;
  wchar_t vOut = (wchar_t)vIn;
  
  `,
      "wchar_t*": `
  unsigned long vIn = 0;
  wchar_t vOut [11];
  _ultow_s(vIn,vOut,sizeof(vOut)/2,10);
  `
    },
    "unsigned short": {
      __int64: `
  unsigned short vIn = 0;
  __int64 vOut = (__int64)vIn;
  
  `,
      bool: `
  unsigned short vIn = 0;
  bool vOut = vIn!=0;
  
  `,
      char: `
  unsigned short vIn = 0;
  char vOut = (char)vIn;
  
  `,
      "char*": `
  unsigned short vIn = 0;
  char vOut [6];
  _ultoa_s(vIn,vOut,sizeof(vOut),10);
  
  `,
      double: `
  unsigned short vIn = 0;
  double vOut = (double)vIn;
  
  `,
      float: `
  unsigned short vIn = 0;
  float vOut = (float)vIn;
  
  `,
      int: `
  unsigned short vIn = 0;
  int vOut = (int)vIn;
  
  `,
      long: `
  unsigned short vIn = 0;
  long vOut = (long)vIn;
  
  `,
      short: `
  unsigned short vIn = 0;
  short vOut = (short)vIn;
  
  `,
      "unsigned __int64": `
  unsigned short vIn = 0;
  unsigned __int64 vOut = (unsigned __int64)vIn;
  
  `,
      "unsigned char": `
  unsigned short vIn = 0;
  unsigned char vOut = (unsigned char)vIn;
  
  `,
      "unsigned int": `
  unsigned short vIn = 0;
  unsigned int vOut = (unsigned int)vIn;
  
  `,
      "unsigned long": `
  unsigned short vIn = 0;
  unsigned long vOut = (unsigned long)vIn;
  
  `,
      "unsigned short": `
  N/A
  
  `,
      wchar_t: `
  unsigned short vIn = 0;
  wchar_t vOut = (wchar_t)vIn;
  
  `,
      "wchar_t*": `
  unsigned short vIn = 0;
  wchar_t vOut[6];
  _ultow_s(vIn,vOut,sizeof(vOut)/2,10);
  `
    },
    wchar_t: {
      __int64: `
  wchar_t vIn = 0;
  __int64 vOut = (__int64)vIn;
  
  `,
      bool: `
  wchar_t vIn = 0;
  bool vOut = vIn!=0;
  
  `,
      char: `
  wchar_t vIn = 0;
  char vOut = (char)vIn;
  
  `,
      "char*": `
  wchar_t vIn = L'F';
  char vOut[2];
  wcstombs_s(NULL,vOut,sizeof(vOut),&vIn,1);
  
  `,
      double: `
  wchar_t vIn = 0;
  double vOut = (double)vIn;
  
  `,
      float: `
  wchar_t vIn = 0;
  float vOut = (float)vIn;
  
  `,
      int: `
  wchar_t vIn = 0;
  int vOut = (int)vIn;
  
  `,
      long: `
  wchar_t vIn = 0;
  long vOut = (long)vIn;
  
  `,
      short: `
  wchar_t vIn = 0;
  short vOut = (short)vIn;
  
  `,
      "unsigned __int64": `
  wchar_t vIn = 0;
  unsigned __int64 vOut = (unsigned __int64)vIn;
  
  `,
      "unsigned char": `
  wchar_t vIn = 0;
  unsigned char vOut = (unsigned char)vIn;
  
  `,
      "unsigned int": `
  wchar_t vIn = 0;
  unsigned int vOut = (unsigned int)vIn;
  
  `,
      "unsigned long": `
  
  `,
      "unsigned short": `
  wchar_t vIn = 0;
  unsigned short vOut = (unsigned short)vIn;
  
  `,
      wchar_t: `
  N/A
  
  `,
      "wchar_t*": `
  wchar_t vIn = L'F';
  wchar_t vOut [2] = {vIn,0};
  `
    },
    "wchar_t*": {
      __int64: `wchar_t * vIn = L"0";
  __int64 vOut = _wtoi64(vIn);
  `,
      bool: `wchar_t * vIn = L"true";
  bool vOut = vIn && wcsicmp(vIn,L"true")==0;
  `,
      char: `wchar_t * vIn = L"0";
  char vOut = (char)wcstol(vIn,NULL,10);
  `,
      "char*":
        `wchar_t* vIn = L"FOOOOOOOOOOOO";
  char * vOut = new char[wcslen(vIn)+1];
  wcstombs_s(NULL,vOut,wcslen(vIn)+1,vIn,wcslen(vIn)+1);
  `,
      double: `wchar_t * vIn = L"0.0";
  double vOut = wcstod(vIn,NULL);
  `,
      float: `wchar_t * vIn = L"0.0";
  float vOut = (float)wcstod(vIn,NULL);
  `,
      int: `wchar_t * vIn = L"0";
  int vOut = _wtoi(vIn);
  `,
      long: `wchar_t * vIn = L"0";
  long vOut = (long)wcstol(vIn,NULL,10);
  `,
      short: `wchar_t * vIn = L"0";
  short vOut = (short)wcstol(vIn,NULL,10);
  `,
      "unsigned __int64": `wchar_t * vIn = L"0";
  unsigned __int64 vOut = _wcstoui64(vIn,NULL,10);
  `,
      "unsigned char":
        `wchar_t * vIn = L"0";
  unsigned char vOut = (unsigned char)wcstoul(vIn,NULL,10);
  `,
      "unsigned int": `wchar_t * vIn = L"0";
  unsigned int vOut = wcstoul(vIn,NULL,10);
  `,
      "unsigned long":
        `wchar_t * vIn = L"0";
  unsigned long vOut = (unsigned long)wcstoul(vIn,NULL,10);
  `,
      "unsigned short":
        `wchar_t * vIn = L"0";
  unsigned short vOut = (unsigned short)wcstoul(vIn,NULL,10);
  `,
      wchar_t: `wchar_t * vIn = L"0";
  wchar_t vOut = (wchar_t)wcstol(vIn,NULL,10);
  `,
      "wchar_t*": `
  N/A"
    }
  },
  PHP: {},
  Python: {
    bool: {
      bool: `
  N/A
  
  `,
      float: `
  vIn = True
  vOut = float(vIn)
  
  `,
      int: `
  vIn = True
  vOut = int(vIn)
  
  `,
      long: `
  vIn = True
  vOut = long(vIn)
  
  `,
      str: `
  vIn = True
  vOut = str(vIn)
  
  `
    },
    float: {
      bool: `
  vIn = -1.7976931348623157E308
  vOut = bool(vIn)
  
  `,
      float: `
  N/A
  
  `,
      int: `
  vIn = -2147483648.0
  vOut = int(vIn)
  
  `,
      long: `
  vIn = -1.7976931348623157E308
  vOut = long(vIn)
  
  `,
      str: `
  vIn = -1.7976931348623157E308
  vOut = str(vIn)
  
  `
    },
  
    int: {
      bool: `
  vIn = 1
  vOut = bool(vIn)
  
  `,
      float: `
  vIn = -2147483648
  vOut = float(vIn)
  
  `,
      int: `
  N/A
  
  `,
      long: `
  vIn = -2147483648
  vOut = long(vIn)
  
  `,
      str: `
  vIn = -2147483648.0
  vOut = str(vIn)
  
  `
    },
    long: {
      bool: `
  vIn = -9223372036854775808L
  vOut = bool(vIn)
  
  `,
      float: `
  vIn = -9223372036854775808L
  vOut = float(vIn)
  
  `,
      int: `
  vIn = -2147483648
  vOut = int(vIn)
  
  `,
      long: `
  N/A
  
  `,
      str: `
  vIn = -9223372036854775808L
  vOut = str(vIn)
  
  `
    },
    str: {
      bool: `
  vIn = "1"
  vOut = bool(vIn)
  
  `,
      float: `
  vIn = "-1.7976931348623157E308"
  vOut = float(vIn)
  
  `,
      int: `
  vIn = "-2147483648"
  vOut = int(vIn,10)
  
  `,
      long: `
  vIn = "-9223372036854775808L"
  vOut = long(vIn,10)
  
  `,
      str: `
  N/A
  
  `
    }
  },
  Ruby: {},
  Swift: {}
};

export { programmingLanguages, dataTypes, conversions };
