chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'search') {
        // Ative a pesquisa na guia atual
        document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'F3', ctrlKey: true }));
    }
});