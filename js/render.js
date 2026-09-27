(function (global) {
  const SG = () => global.StudyGuide;

  function populateLanguageSelect(select, languages) {
    select.innerHTML = "";
    for (const language of languages) {
      const option = document.createElement("option");
      option.value = language.id;
      option.textContent = language.name;
      select.appendChild(option);
    }
  }

  function renderTopicNav(nav, topics, activeTopicId, onSelect) {
    nav.innerHTML = "";
    topics.forEach((topic, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "topic-link";
      button.dataset.topic = topic.id;
      if (topic.id === activeTopicId) button.setAttribute("aria-current", "step");
      button.innerHTML =
        '<span class="topic-number">' + String(index + 1).padStart(2, "0") + "</span>" +
        '<span class="topic-name">' + topic.label + "</span>";
      button.addEventListener("click", () => onSelect(topic.id));
      nav.appendChild(button);
    });
  }

  function renderLesson(content, language, topic, topicIndex, topicsLength, onStep) {
    const cell = (SG().cells[topic.id] || {})[language.id] || "<p>Conteúdo ainda não disponível para este tópico.</p>";
    const position = String(topicIndex + 1).padStart(2, "0");
    const total = String(topicsLength).padStart(2, "0");
    const note = topic.note ? '<p class="topic-note">' + topic.note + "</p>" : "";

    content.innerHTML =
      '<section class="intro-row" aria-labelledby="language-title">' +
        "<div>" +
          '<p class="eyebrow"><span class="language-chip" aria-hidden="true"></span> FICHA DE LINGUAGEM <span>·</span> ' + language.ext.toUpperCase() + "</p>" +
          '<h1 id="language-title">' + language.name + "</h1>" +
          '<p class="language-summary">' + language.summary + "</p>" +
        "</div>" +
        '<div class="language-meta"><span>Perfil</span><span>' + language.family + "</span></div>" +
      "</section>" +
      '<section class="study-toolbar" aria-label="Progresso do estudo">' +
        '<div class="topic-indicator"><strong>' + position + "</strong><span>de " + total + "</span>" +
          '<span class="progress-track" aria-hidden="true"><span class="progress-fill" style="width: ' + (((topicIndex + 1) / topicsLength) * 100) + '%"></span></span>' +
          "<span>tópicos</span></div>" +
        '<div class="topic-arrows">' +
          '<button class="step-button" type="button" data-step="-1"' + (topicIndex === 0 ? " disabled" : "") + ">Anterior</button>" +
          '<button class="step-button" type="button" data-step="1"' + (topicIndex === topicsLength - 1 ? " disabled" : "") + ">Próximo</button>" +
        "</div>" +
      "</section>" +
      '<article class="lesson" aria-labelledby="lesson-title">' +
        '<div class="lesson-heading"><div><h2 id="lesson-title">' + topic.title + "</h2></div>" +
          '<span class="lesson-index">' + position + " / " + total + "</span></div>" +
        note +
        '<div class="cell-content">' + cell + "</div>" +
      "</article>";

    for (const button of content.querySelectorAll("[data-step]")) {
      button.addEventListener("click", () => onStep(Number(button.dataset.step)));
    }
    attachCopyButtons(content);
  }

  function attachCopyButtons(container) {
    for (const button of container.querySelectorAll(".codigo .copiar")) {
      button.addEventListener("click", async () => {
        const pre = button.parentElement.querySelector("pre");
        if (!pre) return;
        try {
          await navigator.clipboard.writeText(pre.textContent);
          button.textContent = "copiado";
        } catch {
          button.textContent = "selecione o código";
        }
        window.setTimeout(() => { button.textContent = "copiar"; }, 1500);
      });
    }
  }

  global.StudyGuide.render = { populateLanguageSelect, renderTopicNav, renderLesson };
})(window);
