(function () {
  const SG = window.StudyGuide;
  const params = new URLSearchParams(window.location.search);

  let languageId = SG.languages.some((l) => l.id === params.get("lang")) ? params.get("lang") : "js";
  let topicId = SG.topics.some((t) => t.id === params.get("topic")) ? params.get("topic") : "historia";

  const languageSelect = document.querySelector("#language-select");
  const topicNav = document.querySelector("#topic-nav");
  const content = document.querySelector("#study-content");

  SG.render.populateLanguageSelect(languageSelect, SG.languages);
  languageSelect.addEventListener("change", () => {
    languageId = languageSelect.value;
    render();
  });

  function selectTopic(id) {
    topicId = id;
    render();
  }

  function render() {
    const language = SG.languages.find((l) => l.id === languageId);
    const topicIndex = SG.topics.findIndex((t) => t.id === topicId);
    const topic = SG.topics[topicIndex];

    languageSelect.value = languageId;
    document.documentElement.style.setProperty("--language-color", language.color);

    SG.render.renderTopicNav(topicNav, SG.topics, topicId, selectTopic);
    SG.render.renderLesson(content, language, topic, topicIndex, SG.topics.length, (delta) => {
      const next = SG.topics[topicIndex + delta];
      if (next) selectTopic(next.id);
    });

    const url = new URL(window.location.href);
    url.searchParams.set("lang", languageId);
    url.searchParams.set("topic", topicId);
    window.history.replaceState({}, "", url);
  }

  render();
})();
