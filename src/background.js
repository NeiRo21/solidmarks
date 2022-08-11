// function updateIcon() {
//   browser.browserAction.setIcon({
//     path: currentBookmark ? {
//       18: "icons/star-filled-19.png",
//       37: "icons/star-filled-38.png"
//     } : {
//       18: "icons/star-empty-19.png",
//       37: "icons/star-empty-38.png"
//     },
//     tabId: currentTab.id
//   });
//   browser.browserAction.setTitle({
//     // Screen readers can see the title
//     title: currentBookmark ? 'Unbookmark it!' : 'Bookmark it!',
//     tabId: currentTab.id
//   });
// }

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
