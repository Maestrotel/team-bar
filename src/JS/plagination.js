export default class plagination {
  currentPage = 1;
  nextPage() {
    this.currentPage += 1;
  }
  prevPage() {
    this.currentPage -= 1;
  }
  itemsPerPage() {
    let numberOfItems = 3;
    if (window.screen.availWidth > 768) {
      numberOfItems = 6;
    }
    if (window.screen.availWidth > 1280) {
      numberOfItems = 9;
    }
    return numberOfItems;
  }
}
