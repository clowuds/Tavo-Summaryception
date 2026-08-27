// =============================================================
// Summaryception - actions.js
// Tavo plugin action handlers.
// Ported from SillyTavern-Extension-Summaryception by Lodactio.
// All core logic lives in ui/panel.html. This file dispatches events.
// =============================================================

var PLUGIN_ID = 'com.bitbear.summaryception';

// ─── Action dispatchers

tavo.plugin.onInputAction('sc-open-panel', openPanel);
tavo.plugin.onSidebarAction('sc-open-panel', openPanel);

tavo.plugin.onInputAction('sc-force', forceSummarize);
tavo.plugin.onSidebarAction('sc-force', forceSummarize);

tavo.plugin.onInputAction('sc-stop', stopSummarize);
tavo.plugin.onSidebarAction('sc-stop', stopSummarize);

tavo.plugin.onInputAction('sc-clear', clearMemory);
tavo.plugin.onSidebarAction('sc-clear', clearMemory);

// ─── Settings change listener
if (tavo.plugin.onSettingsChanged) {
  tavo.plugin.onSettingsChanged(PLUGIN_ID, function () {
    window.dispatchEvent(new CustomEvent('summaryception:config-changed'));
  });
}

// ─── Handlers

function openPanel() {
  try {
    window.dispatchEvent(new CustomEvent('summaryception:open'));
  } catch (e) {
    console.error('[summaryception] open failed:', e);
    tavo.utils.toast('Failed: ' + (e && e.message ? e.message : e));
  }
}

function forceSummarize() {
  try {
    window.dispatchEvent(new CustomEvent('summaryception:force'));
    tavo.utils.toast('Force summarize triggered');
  } catch (e) {
    console.error('[summaryception] force failed:', e);
    tavo.utils.toast('Failed: ' + (e && e.message ? e.message : e));
  }
}

function stopSummarize() {
  try {
    window.dispatchEvent(new CustomEvent('summaryception:stop'));
    tavo.utils.toast('Stop signal sent');
  } catch (e) {
    console.error('[summaryception] stop failed:', e);
  }
}

function clearMemory() {
  try {
    window.dispatchEvent(new CustomEvent('summaryception:clear'));
  } catch (e) {
    console.error('[summaryception] clear failed:', e);
    tavo.utils.toast('Failed: ' + (e && e.message ? e.message : e));
  }
}


