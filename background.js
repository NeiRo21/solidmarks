function logBookmarkEvent(type, bookmarkId, info) {
  console.log(`${type} id: ${bookmarkId} info: ${JSON.stringify(info, undefined, 2)}`);
}

browser.bookmarks.onCreated.addListener((id, bookmark) => {
  logBookmarkEvent('Created', id, bookmark);
});

browser.bookmarks.onRemoved.addListener((id, removeInfo) => {
  logBookmarkEvent('Removed', id, removeInfo);
});

browser.bookmarks.onChanged.addListener((id, changeInfo) => {
  logBookmarkEvent('Changed', id, changeInfo);
});

browser.bookmarks.onMoved.addListener((id, moveInfo) => {
  logBookmarkEvent('Moved', id, moveInfo);
});

console.log('Solidmarks started');
