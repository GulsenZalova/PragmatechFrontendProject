# Sual01: Javascript proqramlaşdırma dili hansı sahələrdə istifadə olunur?
- Web proqramlaşdırma
- Oyunların proqramlaşdırılma
- Mobil proqramlaşdırma

# Sual02: Aşağıdakı proqramlaşdırma terminlərinin qısa acıqlamasını yazın.
## Compilers, İnterpreters, Translators və Assemblers kodu başqa bir kod növünə çevirən proqramlaşdırma vasitələridir, lakin hər bir terminin xüsusi mənası var:
### Compilers
- Hər hansı bir dildə yazılmış mənbə kodunu başqa bir dilə çevirən avtomatikləşdirilmiş proqramdır.Burada eyni səviyyəli dillərdə çevirmə ilə yanaşı, üst səviyyəli dildəki kodun alt səviiiyədəki koda çevrilməsi icra olunur.
### İnterpreters
- Compilers kimi İnterpreters də bir dildə yazılmış kodu başqa bir dilə çevirir. Fərq ondadırki, bu çevirməni birdən birə deyil, addım-addım icra etməkdir.Proqram işə düşdüyü anda icra etdiyi üçün daha sürətlidir.
### Translators

### Assemblers
- aşın dilinə yaxın olan aşağı səviiyəli dildir, digər dillərdə yazılan kodlardan daha çox kod yazılmalıdır.
### Debbugging
- Komputer proqramlarında və proqramlaşdırmada ortaya çıxan səhvlərin tapılması və həll edilməsidir.
### Boolean
- Qarşılığı true və ya false olan data tipidir.
### Char
- Simvolu ifadə edən data tipidir
### Null
- Hər hansı bir dəyərin olmamasını bildirir.
### low-level language
- Maşın dilinə yaxın olan dildir və buna görə də compilers və interpreterslərə ehtiyac duymur.
### high-level language
- İnsan dilinə yaxındır və bu dillərdə yazılan kodları komputer anlamadığı üçün onu 0 və 1-lərə çevirməyə ehtiyac vardır.
### Markup language
- Səhifənin ümumi görünüşünü və oradakı məlumatları formalaşdırmağa kömək edən işarətləmə dilidir.

# Sual03: Veb səhifəsinin işləmə prinsipini anlayabilmək üçün aşağıdakı mövhumları araşdıraraq yazın
### İnternet ve intranet arasındakı fərqlər nədir?
- İnternet hər kəs tərəfindən istifadə oluna bilən və hərkəsə açıq olan bir sistemdir, İntranet isə hər hansı bir təşkilata aid olduğu üçün doğrulanmış giriş tələb edir.Həmçinin aşağıdakı varflər də mövcuddur:
    - İnternet fərqli komputer şəbəkəsini birləşdirir, İntranet isə  Müəyyən bir firmanın özəl mülkiyyətində olan İnternetin bir hissəsidir.
    - İnternet İntranet ilə müqayisədə daha təhlükəsizdir.
    - İnternet nə qədər limitsizdirsə, intranet bir o qədər məhduddur.
    - İnternetin istifadəçi trafiki çox, intranetin isə azdır.
    - İnternetin şəbəkə növü ictimai, intranetin isə şəxsidir.
### Server-side və client-side ifadələrinin mənası nədir?
- Client-side web-saytın istifadəçi tərəfindən görülən və istifadə edilən hissəsidir.Web-sayta daxil olduqda görünən bütün elementlər, stillər, animasiyalar və effektlər məhz bu hissəni təşkil edir. Vebproqramlaşdırmada saytın bu hissəsi Frontend developerlər tərəfindən hazırlanır və istifadə olunan dillər bunlardır:
    - HTML
    - CSS
    - Javascript
- Server-side web-saytın istifadəçi tərəfindən görünməyən, onun tərəfindən daxil olunan sorğulara və müraciətlərə cavab verən tərəfdir. Ümumilikdə server tərəfindəki kod məlumatların və sorğuların qəbul edilməsi, təsdiqlənməsi, məlumatların saxlanılması və əldə edilməsi üçün verilənlər bazasından istifadə edir və istifadəçiyə məlumatların göndərilməsini təmin edir. Vebproqramlaşdırmada server-side yaradılması üçün aşağıdakı proqramlaşdırma dilindən istidə olunur:
    - C#
    - PHP
    - Python
    - Javascript(Node.js)
    - Ruby

# Task 26-27 Fevral
## Aşağıdakı suallarla bağlı araşdırma edərək research.md faylına əlavə edin

### interpreter və compiler dillər arasındakı fərqləri haqqında araşdırma edərək öz anladığınız formada yazın
    - İnterpreter dillər kodları addım-addım tərcümə etdiyi halda, compiler dillər bu işi bütövlükdə edir.
    - İnterpreter dillərdə mənbə kodunu təhlil etmək daha az vaxt alır, amma ümumi icra müddəti uzundur. Compiler dillərdə isə mənbə kodunun təhlil edilməsi uzun vaxt aparsa da ümüumi icra sürətlidir.
    - İnterpreter JavaScript, Python, Ruby kimi proqramlaşdırma dilləri tərəfindən istifadə edir, compiler isə C, C++, Java tərəfindən.

### dəyişən və məlumat növləri arasındakı fərq nədir? Bunlar nə üçün istifadə olunur?
    - Dəyişənlər məlumatların saxlanılması üçün konteynerlərdir, məlumat növləri isə həmin məlumatın növüdür. Məsələn əgər məlumat rəqəmdirsə onun məlumat növü number, sözdürsə string və s. 

### hər dilin özünə məxsus məlumat növləri mövcuddur. Bu məlumat növlərin dillərə görə fərqlənməsinin səbəbləri sizcə nədir?

### javascriptdə dəyişən təyin edilmək üçün əsas üç açar söz var . let,var,const. Bu açar sözlərin vəzifələri arasındakı fərqlər nələrdir?
    - Hər üçün də dəyişən növüdür. Burada var global scope, let və const isə local scope xarakter daşımaqdadır. Yəni bu o demekdir var dəyisənində təyin etdiyimiz məlumatı istər globalda istərdə də lokalda təyin olunmasından asılı olmayaraq hər yerdə istifadə oluna bilir, həmçinin var dəyişənini dəfələrlə təyin etmək olmur. Let və const sadəcə 1 dəfə təyin etmək olur, həmçinin bu dəyişənlər qlobalda təyin edildikdə həm qlobalda, həm də lokalda istifadə edilə bilər. Əgər lokalda təyin olunub onu ancaq lokalda istifadə etmək olur. 

### Proqramçı olaraq bir proqram yazarkən işi görmə addımlarımız necə olmalıdır?

# Task 5-6 Mart
## Javascript
### Javascript kodları neçə formada yazıla bilər?
- Javascript kodları həm script tag vasitəsilə html daxilində (ən aşağıda yazılmalıdır ki, oradakı kodlar oxunub html-ə tədbiq oluna bilsin), həm də ayrı bir .js uzantılı fayl daxilində yazıla bilər. Kənarda yazılan fayl sonradan link vasitəsilə html-də head içərində import olunur. Bunun üçün script tag-da src hissəsində həmin faylın yeri göstərilməlidir.
### Javascript kodlarının script tagları daxilində yazmaqla ayrı fayl formatında yazıb import etmek arasında nə fərq var?
- Script tagları daha kiçikölçülü javascript kodları üçün, xaricdəki javascript faylının import olunması isə böyükölçülü fayllar üçün əlverişlidir. 
### Madem mənim brauzerimdə V8-Engine yüklüdür niyə html kodu daxilində yazılan javascript kodları işləmir.
- Bilmədim.....
### ";" hansı hallarda istifadə edilir?
- ; işarə bir kodun sonuna qoyulduqda artıq digər sətirə keçilərək orada kod yazılacağını bildirir. Əgər kodun sonun bu işarə qoyulmadıqda ardınca başqa bir kod yazılarsa, proqram onu tək sətir kimi qəbul edəcək və kod işləməyəcək.
### Javascript-də comment yazmaq üçün neçə üsul var.
- Javascriptdə comment yazmaq üçün 2 üsul vardır: Əgər yazılacaq kod 1 sətirdən ibarətdirsə, o zaman 2 sləş (//) işarətinin ardınca comment yazılır. Əgər kod bir neçə sətirdən ibarətdirsə /**/ ifadəsinin içərisində yazılır.
### let,var,const ifadələri arasında fərqlər nədir?
- Var qlobal scope-a malik olduğu üçün ondan həm funksiyanın daxilində, həm də varicində istifadə eymək olur.
- Let lokal scope-a malik olduğu üçün onu lokalda funksiya daxilində təyin etdikdə funksiyadan kənarda istifadə edə bilmirik, amma funksiya xaricində təyin etmişiksə istənilən yerdə istifadə etmək olar. Həmçinin let üçün bir dəyişən təyin etdikdə sonra o dəyişəni dəyişmək olur.
- Const let kimi local scpoe-a malikdir. Const üçün dəyişən bir dəfə təyin olunuur və da sonra dəyişdirilmir.
### dəyişən təyin edərkən adlandırma qaydaları nələrdir?
- Javascritdə dəyişən adlarının yazılmasında hərflərdən, rəqəmlərdən, $ və _ işarələrindən istifadə olunur.
- Dəyişənin rəqəm ilə başlaya bilməz.
- Adlandırmada CamelCase adlandırmadan istifadə oluna bilər, bu ilk hərfin kiçik sonrakı hərfilərin böyük yazılması ilə edilən adlandırmadır.
- Adlandırma javascriptdin xüsusi keywordlərindən istifdə etmək olmaz.(məsələn:let, const və.s).
- Kepapcase istifaədsi də yalnışdır.(məsələn: one-page şəklində) 
### let x=5;x=7 yazıldığı zaman nəticə 7 olur.Belə olan halda 5 dəyərinin aqibəti nə olur? Yaddaşda yer tutur mu 5 dəyəri yoxsa başqa proses mi gedir?
- Yaddaşdan silinəcək.
### 5 dəyəri yaddasa yazılarkən 2-li say sisteminə çevrilir və ona görə yaddaşda tutduğu yer hesablanır.Bəs 5.34 dəyərinin yaddaşda tutduğu yeri necə hesablamaq olar?
- 5.34 dəyəri əvvəlcə yuvarlaqlaşdırılır, daha sonra 2lik say sistem çevrilir və yaddaşda yer tutur.
### undefined, NaN və null dəyərlərinin yaddaşda nə qədər yer tutduğunu araşdırın
- Hər hansı bir dəyərə sahib olmadıqlarına görə yaddaşda yer tutmayacaqlar.
### let a; bu formada dəyişən təyin etmişəm.
- Cavab tapmadım.
### Ümumiyyətlə sizə görə bir məlumat növünü başqa məlumat növünə çevirmək nəyə lazımdır
- istifadəçidən hər hansı bir string tipli məlumat daxil edilməsi istənilə bilər, amma səhvliklə number tipli məlumat daxil edilərsə avtomatik onu stirngə çevirər.
### Type Conversion necə formada həyata keçirilir?
- Type Conversion 3 formada həyata keçirilir.
### Type Conversion metodlarının siyahısını çıxarın.
- To string(daxil olan dəyəri stringə çevirir)
- To number(daxil olan dəyəri)
- To boolean(daxil olan dəyəri booleanə çevirir, yənu true və ya false olaraq göstərir).