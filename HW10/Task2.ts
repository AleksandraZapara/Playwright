function identity<Type>(elem: Array<Type & { rating: number }>): number {
    let sum = 0;
  
    for (let item of elem) {
      sum += item.rating;
    }
  
    return sum / elem.length;
  }
  
  console.log(identity([{name: "Anna", rating: 3}]))	// 3

  console.log(identity([{title: "Encounter", rating: 3}, {title: "Dead to me", rating: 4}, {title: "Riverdale", rating: 5}]))		// 4
  