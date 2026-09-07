const LINKS = {
  cinegeny: "https://www.cinegeny.com",
  regis: "https://regis.flash-site.pro",
  aismad: "https://aismad.flash-site.pro",
  apptiv: "https://apptiv.flash-site.pro",
  mmax: "https://mma.flash-site.pro",
  trapeze: "https://trapeze.flash-site.pro"
};

const NAMES = {
  cinegeny: "CineGeny",
  regis: "Regis",
  aismad: "AISmad",
  apptiv: "Apptiv",
  mmax: "MMax",
  trapeze: "Trapeze"
};

const CORE = ["cinegeny", "regis", "aismad"];
const SIDE = ["apptiv", "mmax", "trapeze"];

const I18N = {
  en: {
    dir: "ltr",
    methodFile: "method.html",
    methodNav: "How I build",
    kicker: "Builder portfolio",
    title: "Shipped products.<br>Separate brands.",
    lead: "I design, build and deploy products with agents. This page opens the demos — for teams hiring a founder-builder, not for a raise.",
    coreTitle: "The three",
    coreSub: "Main brands",
    sideTitle: "Also shipping",
    sideSub: "Workshop",
    footerL: "Separate products. No monolith. No raise.",
    open: "Open →",
    methodKicker: "Method",
    methodTitle: "How these products get built",
    methodLead: "One operator. Several models. House software. Agents do the repetition. I keep the cuts, the architecture and the go-live.",
    steps: [
      { t: "Product cut", d: "Each brand stays separate. CineGeny is film. Regis is orchestration. AISmad is the OS. No monolith." },
      { t: "Grok", d: "Decisions, memory, execution. Chat for the call. Build / terminal for the repo. Default associate." },
      { t: "Claude + GPT", d: "Claude Code on hard multi-file repos. GPT when another pass is cheaper or clearer. Models are tools, not a religion." },
      { t: "CLI agents", d: "OpenClaw, CloudCLI and similar loops get a real test. What ships stays. What is unstable leaves." },
      { t: "House stack", d: "Own software, self-hosted LLMs, DNS, Coolify / Hetzner. Conception → build → deploy on machines I control." },
      { t: "Autonomy", d: "Agents draft, wire and operate. A human yes still gates anything public, paid or legal." }
    ]
  },
  fr: {
    dir: "ltr",
    methodFile: "method.html?l=fr",
    methodNav: "Comment je construis",
    kicker: "Portfolio builder",
    title: "Produits shippés.<br>Marques séparées.",
    lead: "Je conçois, je construis et je déploie avec des agents. Cette page ouvre les démos — pour une équipe qui embauche un fondateur-builder, pas pour une levée.",
    coreTitle: "Les trois",
    coreSub: "Marques principales",
    sideTitle: "Aussi en cours",
    sideSub: "Atelier",
    footerL: "Produits séparés. Pas de monolithe. Pas de levée.",
    open: "Ouvrir →",
    methodKicker: "Méthode",
    methodTitle: "Comment ces produits se construisent",
    methodLead: "Un opérateur. Plusieurs modèles. Logiciel maison. Les agents font la répétition. Je garde les coupes, l’architecture et le go-live.",
    steps: [
      { t: "Coupe produit", d: "Chaque marque reste séparée. CineGeny = film. Regis = orchestration. AISmad = OS. Pas de monolithe." },
      { t: "Grok", d: "Décisions, mémoire, exécution. Chat pour l’arbitrage. Build / terminal pour le repo. Associé par défaut." },
      { t: "Claude + GPT", d: "Claude Code sur les repos durs, multi-fichiers. GPT quand une autre passe est plus nette. Les modèles sont des outils." },
      { t: "Agents CLI", d: "OpenClaw, CloudCLI et boucles du même type : test réel. Ce qui ship reste. L’instable sort." },
      { t: "Stack maison", d: "Logiciel maison, LLM self-hosted, DNS, Coolify / Hetzner. Conception → build → deploy sur des machines que je contrôle." },
      { t: "Autonomie", d: "Les agents rédigent, branchent, opèrent. Un oui humain reste obligatoire pour le public, le paiement et le légal." }
    ]
  },
  he: {
    dir: "rtl",
    methodFile: "method.html?l=he",
    methodNav: "איך אני בונה",
    kicker: "פורטפוליו בונה",
    title: "מוצרים שיוצאים לדרך.<br>מותגים נפרדים.",
    lead: "אני מעצב, בונה ומפרסם מוצרים עם סוכנים. הדף הזה פותח את הדמואים — לצוות שמגייס בונה-מייסד, לא לגיוס כסף.",
    coreTitle: "שלושת העיקריים",
    coreSub: "מותגים ראשיים",
    sideTitle: "גם בדרך",
    sideSub: "סדנה",
    footerL: "מוצרים נפרדים. בלי מונולית. בלי גיוס.",
    open: "לפתיחה ←",
    methodKicker: "שיטה",
    methodTitle: "איך המוצרים האלה נבנים",
    methodLead: "מפעיל אחד. כמה מודלים. תוכנה ביתית. הסוכנים עושים את החזרה. אני שומר את החיתוך, הארכיטקטורה והעלייה לאוויר.",
    steps: [
      { t: "חיתוך מוצר", d: "כל מותג נשאר נפרד. CineGeny זה קולנוע. Regis זה תזמור. AISmad זה מערכת הפעלה. בלי מונולית." },
      { t: "Grok", d: "החלטות, זיכרון, ביצוע. צ'אט להכרעה. Build / טרמינל לרפו. שותף ברירת מחדל." },
      { t: "Claude + GPT", d: "Claude Code על רפו קשה ומרובה קבצים. GPT כשמעבר אחר יותר חד. מודלים הם כלים." },
      { t: "סוכני CLI", d: "OpenClaw, CloudCLI ולולאות דומות מקבלים מבחן אמיתי. מה שיוצא נשאר. מה שלא יציב יוצא." },
      { t: "סטאק ביתי", d: "תוכנה ביתית, מודלים מקומיים, DNS, Coolify / Hetzner. תכנון → בנייה → פריסה על מכונות שלי." },
      { t: "אוטונומיה", d: "הסוכנים כותבים, מחברים ומפעילים. כן אנושי עדיין חוסם כל דבר ציבורי, כספי או משפטי." }
    ]
  }
};

const COPY = {
  en: {
    cinegeny: { badge: "Film", text: "AI film studio. Human-in-the-loop: filmmakers, voters, casting, multi-pass." },
    regis: { badge: "Orchestration", text: "Jarvis-style orchestrator. Task → session → launch. Conductor inside CineGeny." },
    aismad: { badge: "OS", text: "Self-hosted, RAG-able OS. Multi-model chat, memory, projects. Home of Genybot." },
    apptiv: { badge: "Career", text: "Career command center. Scoring, applications, follow-ups. Nothing leaves without a human yes." },
    mmax: { badge: "Combat", text: "Combat-sports network. Three taps: where to train, who to face, what to watch." },
    trapeze: { badge: "Game", text: "Balance and timing game. Its own product, outside the three brands." }
  },
  fr: {
    cinegeny: { badge: "Film", text: "Studio film IA. Human-in-the-loop : filmmakers, voters, casting, multi-pass." },
    regis: { badge: "Orchestration", text: "Orchestrateur style Jarvis. Tâche → session → lancement. Conductor dans CineGeny." },
    aismad: { badge: "OS", text: "OS self-hosted, RAG-able. Chat multi-model, mémoire, projets. Genybot vit ici." },
    apptiv: { badge: "Carrière", text: "Centre de commandement carrière. Scoring, candidatures, relances. Rien ne part sans un oui humain." },
    mmax: { badge: "Combat", text: "Réseau sports de combat. Trois taps : où s’entraîner, qui affronter, quoi regarder." },
    trapeze: { badge: "Jeu", text: "Jeu d’équilibre et de timing. Produit à part, hors des trois marques." }
  },
  he: {
    cinegeny: { badge: "קולנוע", text: "סטודיו לקולנוע עם AI. אדם בלופ: יוצרים, הצבעות, ליהוק, כמה מעברים." },
    regis: { badge: "תזמור", text: "מתזמר בסגנון ג'רוויס. משימה → סשן → השקה. Conductor בתוך CineGeny." },
    aismad: { badge: "OS", text: "מערכת הפעלה מקומית עם RAG. צ'אט רב-מודלים, זיכרון, פרויקטים. הבית של Genybot." },
    apptiv: { badge: "קריירה", text: "חדר פיקוד לקריירה. ניקוד, מועמדויות, מעקב. כלום לא יוצא בלי כן אנושי." },
    mmax: { badge: "קרב", text: "רשת לספורט קרב. שלוש לחיצות: איפה להתאמן, מול מי, מה לראות." },
    trapeze: { badge: "משחק", text: "משחק שיווי משקל ותזמון. מוצר נפרד, מחוץ לשלושת המותגים." }
  }
};

function hostOf(url) {
  try { return new URL(url).host.replace(/^www\./, ""); }
  catch { return url; }
}

function currentLang() {
  const q = new URLSearchParams(location.search).get("l");
  if (q === "fr" || q === "he" || q === "en") return q;
  const path = location.pathname;
  if (path.endsWith("fr.html")) return "fr";
  if (path.endsWith("he.html")) return "he";
  return "en";
}

function card(key, compact, lang) {
  const t = I18N[lang];
  const p = COPY[lang][key];
  const url = LINKS[key];
  return `<a class="card${compact ? " compact" : ""}" href="${url}" target="_blank" rel="noopener noreferrer">
    <div class="top"><span class="badge">${p.badge}</span></div>
    <div class="name">${NAMES[key]}</div>
    <p class="blurb">${p.text}</p>
    <div class="foot"><span>${hostOf(url)}</span><span class="go">${t.open}</span></div>
  </a>`;
}

function applyHome(lang) {
  const t = I18N[lang];
  document.documentElement.lang = lang === "he" ? "he" : lang;
  document.documentElement.dir = t.dir;
  document.querySelectorAll("[data-i]").forEach((el) => { el.innerHTML = t[el.dataset.i] || ""; });
  const nav = document.querySelector("[data-i18n-href=method]");
  if (nav) { nav.textContent = t.methodNav; nav.setAttribute("href", t.methodFile); }
  document.getElementById("core").innerHTML = CORE.map((k) => card(k, false, lang)).join("");
  document.getElementById("side").innerHTML = SIDE.map((k) => card(k, true, lang)).join("");
}

function applyMethod(lang) {
  const t = I18N[lang];
  document.documentElement.lang = lang === "he" ? "he" : lang;
  document.documentElement.dir = t.dir;
  document.querySelectorAll("[data-i]").forEach((el) => { el.innerHTML = t[el.dataset.i] || ""; });
  document.querySelectorAll("[data-home]").forEach((home) => {
    home.setAttribute("href", lang === "en" ? "index.html" : lang + ".html");
  });
  const box = document.getElementById("steps");
  if (box) {
    box.innerHTML = t.steps.map((s) => `<article class="card compact"><div class="name" style="font-size:22px">${s.t}</div><p class="blurb">${s.d}</p></article>`).join("");
  }
}

function bindLang(page) {
  const lang = currentLang();
  document.querySelectorAll(".lang button").forEach((b) => {
    b.setAttribute("aria-pressed", b.dataset.lang === lang ? "true" : "false");
    b.onclick = () => {
      const l = b.dataset.lang;
      if (page === "method") location.href = l === "en" ? "method.html" : "method.html?l=" + l;
      else location.href = l === "en" ? "index.html" : l + ".html";
    };
  });
  if (page === "method") applyMethod(lang);
  else applyHome(lang);
}

window.DEMOS_BOOT = function () {
  bindLang(window.DEMOS_PAGE || "home");
};
