$(() => {
  class Entry {
      constructor(title, body) {
          this.title = title;
          this.body = body;
      }

      wordCount() {
          return this.body.split(" ").length;
      }

      vowelCount() {
          return this.body.match(/[aeiouAEIOU]/g).length;
      }

      consonantCount() {
          return this.body.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g).length;
      }

      getTeaser() {
          const sentences = this.body.split(".");
          const firstSentence = sentences[0].trim();
          const words = firstSentence.split(" ");
          return words.slice(0, 8).join(" ");
      }
  }

  $("#submitEntry").click(() => {
      const title = $("#title").val();
      const body = $("#body").val();
      const entry = new Entry(title, body);

      // Display entry information
      const infoHtml = `
          <h2>${entry.title}</h2>
          <p>Word Count: ${entry.wordCount()}</p>
          <p>Vowel Count: ${entry.vowelCount()}</p>
          <p>Consonant Count: ${entry.consonantCount()}</p>
          <p>Teaser: ${entry.getTeaser()}</p>
      `;

      $("#entryInfo").html(infoHtml);
  });
});