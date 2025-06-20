class SearchSuggestionSystem {
  constructor(products) {
    // Sort products lexicographically during initialization
    this.products = products.sort();
  }

  getSuggestions(searchWord) {
    let results = [];
    let prefix = "";

    for (let char of searchWord) {
      prefix += char;
      let suggestions = [];

      for (let product of this.products) {
        if (product.startsWith(prefix)) {
          suggestions.push(product);
          if (suggestions.length === 3) break; // Only up to 3 suggestions
        }
      }

      results.push(suggestions);
    }

    return results;
  }
}

// Example usage:
const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const searchWord = "mouse";

const suggestionSystem = new SearchSuggestionSystem(products);
console.log(suggestionSystem.getSuggestions(searchWord));

/*
Expected Output:
[
  ["mobile", "moneypot", "monitor"],
  ["mobile", "moneypot", "monitor"],
  ["mouse", "mousepad"],
  ["mouse", "mousepad"],
  ["mouse", "mousepad"]
]
*/
