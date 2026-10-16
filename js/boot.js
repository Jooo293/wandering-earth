  // Loader watchdog: surface failures (CDN unreachable, no WebGL, script error) instead of an endless loading screen.
  (function () {
    var shown = false;
    function fail(msg) { if (shown || window.__emReady) return; shown = true; var s = document.getElementById('ld-status'); if (s) { s.style.color = '#ff8a8a'; s.textContent = msg; } }
    addEventListener('error', function (e) { fail('系统故障 · ' + (e.message || '脚本错误')); });
    addEventListener('unhandledrejection', function (e) { fail('系统故障 · ' + (e.reason && e.reason.message || e.reason)); });
    if (location.protocol === 'file:') addEventListener('DOMContentLoaded', function () { fail('请通过本地服务器打开 · 浏览器会阻止从 file:// 加载 ES 模块 —— 请在此文件夹中运行  python3 serve.py ，然后打开 http://localhost:8080'); });
    setTimeout(function () { var s = document.getElementById('ld-status'); if (!window.__emStarted && !shown && s) s.textContent = '仍在加载 · 如果长时间无响应，请通过 HTTP 提供此文件夹（python3 serve.py），而不是直接打开文件'; }, 20000);
  })();
