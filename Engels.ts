/**
 * Created by Dylan on 21/02/2017.
 */
export class Engels {

  constructor() {
  }
  public engels:any[] = [
    {vraag1: "What is the reason of your admission?", antwoord1: "Birth", antwoord2: "Caesarean section", antwoord3: "Observation of pregnancy"},
    {vraag2: "Do you want to get a care set for your baby? (soap, bath oil, …)", antwoord1: "Yes, I want.", antwoord2: "No, I will bring a set with me."},
    {vraag3: "Are you going to breastfeed?", antwoord1: "Yes, I will.", atnwoord2: "No, I will bottle feed my baby."},
    {vraag4: "What type of room do you wish? Prices for the various room types can be found on the website.", antwoord1:"Double room", antwoord2: "Private room: the partner may stay at night.", antwoord3: "Single room: the partner may not stay in the room at night."},
    {vraag5: "Specific questions:",vraag1: {vraag1: "Which second name will get the baby?", antwoord1: ""}, vraag2: {vraag1: "Who is your primary care physician?", antwoord1: ""}, vraag3: {vraag1: "How did you get pregnant?", antwoord1:"spontaan", antwoord2: "hormonaal", antwoord3: "IVF", antwoord4: "ICSI"} , vraag4: {vraag1: "Do you want to donate cord blood? If so, ask the gynecologist for needed forms.", antwoord1: "Yes, I do", antwoord2:"No ,I don't"}},
    {
      vorigeBevalling: [
        {vraag1: "Date", antwoord1: "",
          vraag2: "Birth weight", antwoord2: "",
          vraag3: "Vaginal birth or caesarean delivery", antwoord3: "",
          vraag4: "Epidural", antwoord4: "",
          vraag5: "Special things, that are important to know about your pregnancy, birth, or thereafter", antwoord5: ""},
        {vraag1: "Date", antwoord1: "",
          vraag2: "Birth weight", antwoord2: "",
          vraag3: "Vaginal birth or caesarean delivery", antwoord3: "",
          vraag4: "Epidural", antwoord4: "",
          vraag5: "Special things, that are important to know about your pregnancy, birth, or thereafter", antwoord5: ""},
        {vraag1: "Date", antwoord1: "",
          vraag2: "Birth weight", antwoord2: "",
          vraag3: "Vaginal birth or caesarean delivery", antwoord3: "",
          vraag4: "Epidural", antwoord4: "",
          vraag5: "Special things, that are important to know about your pregnancy, birth, or thereafter", antwoord5: ""},
        {vraag1: "Date", antwoord1: "",
          vraag2: "Birth weight", antwoord2: "",
          vraag3: "Vaginal birth or caesarean delivery", antwoord3: "",
          vraag4: "Epidural", antwoord4: "",
          vraag5: "Special things, that are important to know about your pregnancy, birth, or thereafter", antwoord5: ""},
        {vraag1: "Date", antwoord1: "",
          vraag2: "Birth weight", antwoord2: "",
          vraag3: "Vaginal birth or caesarean delivery", antwoord3: "",
          vraag4: "Epidural", antwoord4: "",
          vraag5: "Special things, that are important to know about your pregnancy, birth, or thereafter", antwoord5: ""}
      ]
    },
    {vraag7:"Medical history", vraag1:"Operations", antwoord1: "", vraag2: "diseases", antwoord2: "", vraag3: "Blood transfusions: date and reason", antwoord3: ""},
    {vraag8:"Drugs", vraag1: {vraag1: "Do you take medications?", antwoord1: "", antwoord2: "", antwoord3: "" }, vraag2: "Are you vaccinated against whooping cough?", antwoord2: ""},
    {vraag9:"Physical information", vraag1: {vraag1: "Wheight (kg)", antwoord1: "" , antwoord2:""}, vraag2: {vraag1: "Length (m)", antwoord1: ""}, vraag3: {vraag1: "Blood pressure (mmHG)", antwoord1: "", antwoord2: ""}, vraag4:{ vraag1: "Pulse", antwoord1: ""}, vraag5: {vraag1: "Göycemia (if you are diabetic)", antwoord1: ""}},
    {vraag10: {vraag1: "Are you allergic to one of the following substances?", antwoord1:"Penicillin, Antibiotics",antwoord2:"", antwoord3:"Contrast medium", antwoord4: "Plaster" ,antwoord5: "Iodine", antwoord6:"Latex, rubber",antwoord7:"nickel", antwoord8:"painkillers", antwoord9:"Local narcotics"}, vraag2: {vraag1:"What kind of reaction did you get?", antwoord1:"light-headed",antwoord2:"Swelling around the mouth", antwoord3:"Shortness of breath", antwoord4: "Peeping breathing" ,antwoord5: "Read itching spots on the skin that are swollen", antwoord6:"Read itching spots on the skin",antwoord7:"Others: skin changes, fever " }, vraag3: {vraag1: "When did teh reaction appear?", antwoord1: "Very fast, within one hour", antwoord2: "After 1 to 3 days", antwoord3: "Only after 3 days – weeks"}},
    {vraag11: "In case we need to contact somebody during your admission to the hospital, whom do you want us to contact on which numbre?", vraag1: {vraag1: "Name", antwoord1: "", vraag2: "tel", antwoord2: ""}, vraag2: {vraag1: "Name", antwoord1: "", vraag2: "tel", antwoord2: ""}, vraag3:{vraag1: "Name", antwoord1: "", vraag2: "tel", antwoord2: ""}},
    {vraag12: "How is your housing?", vraag1: {vraag1: "sheltered", antwoord1:"Allone", antwoord2: "Together with other person", antwoord3:"Institution", antwoord4: ""}, vraag2: {vraag1: "With stairs"}, vraag3: {vraag1: "Support", antwoord1: ""}},
    {vraag13: "General questions", vraag1:{vraag1: "Do you smoke cigarettes?", antwoord1: "No, I don't", antwoord2: "Yes", antwoord3:"I stopped during my pregnancy"},vraag2:{vraag1: "Do you use alcohol?", antwoord1: "No, I don't", antwoord2: "Yes", antwoord3:"I stopped during my pregnancy"}, vraag3: {vraag1: "Are you taking drugs?", antwoord1: "No, I don't", antwoord2: "Yes", antwoord3:"I stopped during my pregnancy"}, vraag4: {vraag1: "Do you have a joint prothesis", antwoord1: "No, I haven’t", antwoord2: "Yes, I have. Where:"}},
    {vraag14:"What is your physical state at the moment?" ,vraag1:{ vraag1:"Hygiene", antwoord1: "by oneself", antwoord2: "with support"},vraag2: { vraag1:"Mobility", antwoord1: "by oneself", antwoord2: "with support"}, vraag3: { vraag1:"Excretion", antwoord1: "by oneself", antwoord2: "with support"}, vraag4:{ vraag1: "urine", antwoord1: "continent", antwoord2: "incontinent", antwoord3: "sometimes"}, vraag5: { vraag1: "bowel", antwoord1: "continent", antwoord2: "incontinent"}, vraag6: { vraag1: "Food", antwoord1: "normal", antwoord2: "Dental prothesis ", antwoord3: "Diet"}, vraag7: { vraag1: "Hearing", antwoord1: "Good", antwoord2: "Bad", antwoord3: "Hearing aid (brought with me)"}, vraag8: { vraag1: "Eyesight", antwoord1: "Good", antwoord2: "Bad", antwoord3: "Contact lenses", antwoord4: "Glasses (brought with me)"} },
    {vraag15: "Screening hospital bacteria",vraag1: {vraag1: "You were admitted to another hospital for at least 48 hours during the last year", antwoord2: "yes"}, vraag2: {vraag1: "You are coming from a foreign hospital or you were admitted to a foreign hospital during the last year", antwoord2: "yes"}, vraag3: {vraag1: "You are residenting abroad or you moved to Belgium during the last year. Which country: ", antwoord2: "yes, which country"}, vraag4: {vraag1: "You are or you were ever carrying a hospital bacterium", antwoord1: {antwoord1: "Yes MRSA", antwoord2: "yes, other"}}, vraag5: {vraag1: "U verbleef het afgelopen jaar meer dan 48u in het Jessa Ziekenhuis", antwoord2: "ja"}, vraag6: {vraag1: "U komt regelmatig in het ziekenhuis voor een bepaalde aandoeing en/of behandeling", antwoord2: "ja"},vraag7: {vraag1: "U verblijft in een rusthuis of RVT", antwoord2: "ja"}, vraag8: {vraag1: "U kreeg het afgelopen jaar thuisverpleging", antwoord2: "ja"}, vraag9: {vraag1: "U bent ouder dan 75 jaar", antwoord2: "ja"}, vraag10: {vraag1: "U bent gezondheidsmedewerker", antwoord2: "ja"}, vraag11: {vraag1: "U heeft op dit ogenblik een chronische wonde", antwoord2: "ja"}, vraag12: {vraag1: "U bent professionele veehouder", antwoord2: "ja"}},
    {vraag16: "Bijzonderheden", antwoord1: ""}
  ];

  getAll() {
    return this.engels;
  }
}
