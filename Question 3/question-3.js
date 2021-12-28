function ingExtractor(string) {
    return string
      .replace(/[^a-zA-Z ]/g, "")
      .split(" ")
      .filter((word) => {
        let temp = word.toLowerCase().replace("ing", "");
        if (temp.length === temp.replace(/[aeiou]/g, "").length) {
          return false;
        }
        if (word.toLowerCase().includes("ing")) {
          return true;
        }
      });
  }