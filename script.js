//Switch Language
function changeLanguage() {
  const Japanese = `${location.pathname}#jpn`;
  const English = `${location.pathname}#eng`;

  if (window.location.hash == "#jpn") {
    window.location.href = English;
  } else {
    window.location.href = Japanese;
  }

  location.reload();
}

const language = {
  eng: {
    lang: "日本語",
    about:
      "Hi there! Welcome to my portfolio website. I am a frontend web developer based in Sydney, originally from Japan. " +
      "<br><br>After working as an account manager at an ICT company in Japan, I decided to move to Australia to broaden my horizons. " +
      "Australia inspired me to pursue what you really want to do in life and not to be afraid to take on new challenges. " +
      "<br><br>For a person like me who is fascinated by technology, it was natural to start learning programming. " +
      "I am a self taught web developer who is always excited to build a new website and solve problems using my skills. ",
    work1:
      "",
    contact:
      "If you have any questions or want to discuss about projects, please reach out to me!",
  },
  jpn: {
    lang: "English",
    about:
      "こんにちは、当サイトをご覧いただきありがとうございます。私はシドニーと大阪を拠点に活動しているWebエンジニアです。<br><br>" +
      "新卒でICT企業で営業職として勤務した後、海外経験を積むためにオーストラリアへ渡航しました。" +
      "オーストラリアの自由闊達で、年齢問わず新しいキャリアにチャレンジする文化に感化され、元々IT分野に興味があったことから、プログラミングを学び始めました。<br><br>" +
      "現在はフリーランスとして活動しています。" +
      "ホームページやLP作成、コーディング業務に加えまして、記事の執筆や英語翻訳のお仕事もお受けしております。",
    work1:
      "",
    contact:
      "Webサイト制作に関するご質問やご依頼など、お気軽にお問い合わせくださいませ。",
  },
};

if (window.location.hash == "#eng") {
  document.getElementById("switchLanguage").innerHTML = language.eng.lang;
  aboutContent.innerHTML = language.eng.about;
  // workContent1.innerHTML = language.eng.work1;
  contactContent.innerHTML = language.eng.contact;
} else if (window.location.hash == "#jpn") {
  document.getElementById("switchLanguage").innerHTML = language.jpn.lang;
  aboutContent.innerHTML = language.jpn.about;
  // workContent1.innerHTML = language.jpn.work1;
  contactContent.innerHTML = language.jpn.contact;
}

//Fadein animation
const targetElement = document.querySelectorAll(".fadeinTarget");
document.addEventListener("scroll", () => {
  for (i = 0; i < targetElement.length; i++) {
    const getElementDistance =
      targetElement[i].getBoundingClientRect().top +
      targetElement[i].clientHeight * 0.25;

    if (window.innerHeight > getElementDistance) {
      targetElement[i].classList.add("show");
    }
  }
});


