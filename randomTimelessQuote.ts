

const versesPerChapter: { [chapter: number]: number }  = {
  1: 47, 2: 72, 3: 43, 4: 42, 5: 29,
  6: 47, 7: 30, 8: 28, 9: 34, 10: 42,
  11: 55, 12: 20, 13: 34, 14: 27, 15: 20,
  16: 24, 17: 28, 18: 78
};

const getRandomChapterAndVerse = () => {
  
  const chapters = Object.keys(versesPerChapter).map(Number);
  const randomChapterIndex = Math.floor(Math.random() * chapters.length);
  const randomChapter = chapters[randomChapterIndex];
  
  const maxVerses = versesPerChapter[randomChapter];
  
  const randomVerse = Math.floor(Math.random() * maxVerses) + 1;
  
  return { chapter: randomChapter, verse: randomVerse };
};

// Example usage
const { chapter, verse } = getRandomChapterAndVerse();


