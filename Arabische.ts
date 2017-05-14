/**
 * Created by Dylan on 8/05/2017.
 */
/**
 * Created by Dylan on 21/02/2017.
 */
export class Arabische {

  constructor() {
  }
  public arabische:any[] = [
    {vraag1: "ما هو سببُ إدخالِك ِ المستشفى؟ ", antwoord1: "الولادةُ المهبلية ", antwoord2: "الولادةُ القيصرية ", antwoord3: "إشرافُ مشاهدةِ الحمل "},
    {vraag2: "هل تريدين مُجتَمِعاً مِنَ الحاجات لعناية الطفل فيها الصابون والزيت و إلى آخِرِه؟ ", antwoord1: "نعم ", antwoord2: "لا, سأجيب الحاجات لعناية الطفل معي "},
    {vraag3: "هل سترضعين طفلِكِ بثديِك؟", antwoord1: "نعم ", antwoord2: "لا سَوفَ أُعْطِي زُجاجةَ الإرْضاع, يعني الحليبَ الصِناعي "},
    {vraag4: "ما هو نوعُ الغرفةِ التي تريديها؟ أسعارُ الغرفِ المختلفةِ موجودةٌ على الصفحةِ الالكترونية ", antwoord1:"غرفةٌ فيها سريران ", antwoord2: "غرفةٌ خاصةٌ (يمكن الزَوجَ النَومَ فيها) ", antwoord3: "غرفةٌ فيها سريرٌ واحد (لا يُمكن الزَوجَ النَومَ فيها) "},
    {vraag5: "أسئلة مخصصة ",vraag1: {vraag1: "أي لقبٍ سيكون لطفلِك؟ ", antwoord1: ""}, vraag2: {vraag1: "مَن طبيبُكِ العائلة ؟ ", antwoord1: ""}, vraag3: {vraag1: "كيف أصبحتِ حاملا؟ ", antwoord1:"spontan", antwoord2: "hormonell", antwoord3: "IVF", antwoord4: "ICSI"} , vraag4: {vraag1: "هل تريدين أنْ يُؤْخَذ من الدمِ من الحبلِ السري للتَرَبُع؟ إذا أردتِ ذلك, اسئل عنِ الأوراقِ المحتاجةِ عندَ الطبيب ", antwoord1: "Ja, mache ich", antwoord2:"Nein, das tue ich nicht"}},
    {
      vorigeBevalling: [
        {vraag1: "التأريخ ", antwoord1: "",
          vraag2: "وَزْنُ الولادة ", antwoord2: "",
          vraag3: "الولادة المهبلية أو القيصرية ", antwoord3: "",
          vraag4: "التخدير فوق الجافية ", antwoord4: "",
          vraag5: "خصوصيات خلال الحملِو الولادةِو النفاس ", antwoord5: ""},
        {vraag1: "التأريخ ", antwoord1: "",
          vraag2: "وَزْنُ الولادة ", antwoord2: "",
          vraag3: "الولادة المهبلية أو القيصرية ", antwoord3: "",
          vraag4: "التخدير فوق الجافية ", antwoord4: "",
          vraag5: "خصوصيات خلال الحملِو الولادةِو النفاس ", antwoord5: ""},
        {vraag1: "التأريخ ", antwoord1: "",
          vraag2: "وَزْنُ الولادة ", antwoord2: "",
          vraag3: "الولادة المهبلية أو القيصرية ", antwoord3: "",
          vraag4: "التخدير فوق الجافية ", antwoord4: "",
          vraag5: "خصوصيات خلال الحملِو الولادةِو النفاس ", antwoord5: ""},
        {vraag1: "التأريخ ", antwoord1: "",
          vraag2: "وَزْنُ الولادة ", antwoord2: "",
          vraag3: "الولادة المهبلية أو القيصرية ", antwoord3: "",
          vraag4: "التخدير فوق الجافية ", antwoord4: "",
          vraag5: "خصوصيات خلال الحملِو الولادةِو النفاس ", antwoord5: ""},
        {vraag1: "التأريخ ", antwoord1: "",
          vraag2: "وَزْنُ الولادة ", antwoord2: "",
          vraag3: "الولادة المهبلية أو القيصرية ", antwoord3: "",
          vraag4: "التخدير فوق الجافية ", antwoord4: "",
          vraag5: "خصوصيات خلال الحملِو الولادةِو النفاس ", antwoord5: ""}
      ]
    },
    {vraag7:"التأريخ الطبي ", vraag1:"العمليات الجراحية ", antwoord1: "", vraag2: "أمراض ", antwoord2: "", vraag3: "نقلُ الدم: التأريخ و السبب: ", antwoord3: ""},
    {vraag8:"الأدوية ", vraag1: {vraag1: "هلْ تأخذين من الأدوية؟ ", antwoord1: "", antwoord2: "", antwoord3: "" }, vraag2: "هل تم تطعيمُكِ ضد السعالِ الديكي (الإعادة) ؟ ", antwoord2: ""},
    {vraag9:"معلومات عن الجسم:", vraag1: {vraag1: "الوزن ", antwoord1: "" , antwoord2:""}, vraag2: {vraag1: "الطول (م) ", antwoord1: ""}, vraag3: {vraag1: "ضَغْطُ الدم ", antwoord1: "", antwoord2: ""}, vraag4:{ vraag1: "نَبْضُ القلب ", antwoord1: ""}, vraag5: {vraag1: "سُكْرُ الدم (عند مرض السكر) ", antwoord1: ""}},
    {vraag10: {vraag1: "هلْ لدَيْكِحساسيةٌ ما لشيء من الأشياء القادمة؟ ", antwoord1:"البنسلين أو المضاضات الحيوية ",antwoord2:"", antwoord3:"العاملُالتباين ", antwoord4: "اللصقة " ,antwoord5: "اليود ", antwoord6:"المطاط ,إذ كان ذلك فأخبر الطبيب ",antwoord7:"النيكل ", antwoord8:"المسكنات للألم ", antwoord9:"التخضير الموضعي "}, vraag2: {vraag1:"ما كان نوع رد الفعل التحسسي ", antwoord1:"فقد الصواب, يعني ضغط الدم منخفض ",antwoord2:"التورم حول الفم ", antwoord3:"ضِيقُ التنفس ", antwoord4: "التنفس و معه الصفير " ,antwoord5: "بُقَعاتٌ حمراء على الجِلْدِ و ", antwoord6:"بُقَعاتٌ حمراء على الجِلْدِ و معها الحكة ",antwoord7:"أشياءٌ أخرى (تغيرات الجِلْدِ أو الحرارة " }, vraag3: {vraag1: "متى صارَ رَدُ الفعلِ التحسسي؟ ", antwoord1: "بسرعة, في ساعةٍ واحدة ", antwoord2: "بعد يوم إلى 3 أيام ", antwoord3: "بعد 3 أيام "}},
    {vraag11: "إذا كان من الضَرُورةِ أن نَتَصِلَ بِأَحَدٍ خلالَاستشفائِكِ, مَنِ الذي تريديالاتصالَ به؟ ", vraag1: {vraag1: "الاسم ", antwoord1: "", vraag2: "رقم الهاتف ", antwoord2: ""}, vraag2: {vraag1: "الاسم ", antwoord1: "", vraag2: "رقم الهاتف ", antwoord2: ""}, vraag3:{vraag1: "الاسم ", antwoord1: "", vraag2: "رقم الهاتف ", antwoord2: ""}},
    {vraag12: "كيف الوضع المنزلي؟ ", vraag1: {vraag1: "محمي", antwoord1:"ساكنةٌ لوحدي ", antwoord2: "ساكنةٌ جميعا مع شخْصٍ آخر ", antwoord3:"Institution", antwoord4: ""}, vraag2: {vraag1: "المنزل لديه سُلَم "}, vraag3: {vraag1: "المساعدة هي :... ", antwoord1: ""}},
    {vraag13: "أسئلة عامة ", vraag1:{vraag1: "هلْ تتدخنِيْن؟ ", antwoord1: "لا", antwoord2: "نعم", antwoord3:"لقد انتهيتُ به في الحمل "},vraag2:{vraag1: "هل تأخذين من الكحول ", antwoord1: "لا ", antwoord2: "نعم", antwoord3:"لقد انتهيتُ به في الحمل "}, vraag3: {vraag1: "هل تأخذين من المخدرات ", antwoord1: "لا ", antwoord2: "نعم", antwoord3:"لقد انتهيتُ به في الحمل "}, vraag4: {vraag1: "هل لَدَيْكِ بدلة مشترك؟ ", antwoord1: "لا ", antwoord2: "نعم"}},
    {vraag14:"كيف حالُكِ الجسمي حاليا؟ " ,vraag1:{ vraag1:"النظافة", antwoord1: "مستقل ", antwoord2: "مع مساعدة"},vraag2: { vraag1:"تنقلية", antwoord1: "مستقل", antwoord2: "مع مساعدة"}, vraag3: { vraag1:"إفراز", antwoord1: "مستقل", antwoord2: "مع مساعدة"}, vraag4:{ vraag1: "بول", antwoord1: "قارة", antwoord2: "مصاب بسلس البول", antwoord3: "أحيانا"}, vraag5: { vraag1: "الأمعاء", antwoord1: "قارة", antwoord2: "مصاب بسلس البول"}, vraag6: { vraag1: "أكل", antwoord1: "طبيعي", antwoord2: "أسنان إصطناعية", antwoord3: "حمية"}, vraag7: { vraag1: "سمع", antwoord1: "خير", antwoord2: "سيئة", antwoord3: "السمع (الشخصية)"}, vraag8: { vraag1: "بصر", antwoord1: "خير", antwoord2: "سيئة", antwoord3: "اتصالات", antwoord4: "نظارات (الشخصية)"} },
    {vraag15: "تحرِي جرثومات المستشفى ",vraag1: {vraag1: "كنتِ في السنة الماضية خلال فترة 48 ساعة أو أكثر في مستشفى أخرى ", antwoord2: "Ja"}, vraag2: {vraag1: "أنتِ آتِيَةٌ من مستشفى أجنبية أو كنتِ في مستشفى أجنبيةٍ في السنة الماضية ", antwoord2: "Ja"}, vraag3: {vraag1: "أنتِ آتِيَةٌ من مستشفى أجنبية أو كنتِ في مستشفى أجنبيةٍ في السنة الماضية ", antwoord2: "لذلك أي بلد"}, vraag4: {vraag1: "أنت أو أنت من أي وقت مضى على بكتيريا المستشفيات", antwoord1: {antwoord1: "نعم مرسا", antwoord2: "نعم، أخرى"}}, vraag5: {vraag1: "قضيت العام الماضي أكثر من 48 ساعة في مستشفى Jessa", antwoord2: "نعم"}, vraag6: {vraag1: "كنت تأتي بانتظام إلى المستشفى لحالة و / أو العلاج", antwoord2: "نعم"},vraag7: {vraag1: "سوف البقاء في التمريض أو الرعاية المنزلية", antwoord2: "نعم"}, vraag8: {vraag1: "كنت حصلت عليه العام الماضي التمريض", antwoord2: "نعم"}, vraag9: {vraag1: "كنت أكثر من 75 عاما", antwoord2: "نعم"}, vraag10: {vraag1: "كنت عامل صحي", antwoord2: "نعم"}, vraag11: {vraag1: "لديك الجرح المزمن في هذا الوقت", antwoord2: "نعم"}, vraag12: {vraag1: "أنت مزارع المهنية", antwoord2: "نعم"}},
    {vraag16: "تفاصيل", antwoord1: ""}
  ];

  getAll() {
    return this.arabische;
  }
}
