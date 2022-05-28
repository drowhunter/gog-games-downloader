
chrome.runtime.onInstalled.addListener(({ reason, version }) => {
    if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
      //showReadme();
    }
  });
  
  chrome.action.onClicked.addListener((tab) => {
    //showReadme();
  });
  
function showReadme(info, tab) {
    let url = chrome.runtime.getURL("readme.html");
    chrome.tabs.create({ url });
}

//const floppyimg =  runtime.getURL("assets/floppy.svg");
//document.body.setAttribute('data-floppy', floppyimg);
/*
// TODO: add "script.js" to web_accessible_resources in manifest.json
let backgroundScr = [
    //'signalr.min.js',
    'script.js'
];

for (let i = 0; i < backgroundScr.length; i++) {
    addScript(backgroundScr[i]);
}

// for (const scr of backgroundScr) {

//     addScript(scr);
// }

// chrome.runtime.getURL('assets/downloading.png')
// document.body.setAttribute('data-leechIco', 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHdpZHRoPSIyNCIgdmVyc2lvbj0iMS4xIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMTAyOC40KSI+CiAgPHBhdGggZD0ibTUgMTAzMS40Yy0xLjEwNDYgMC0yIDAuOS0yIDJ2MTRjMCAxLjEgMC44OTU0IDIgMiAyaDEzIDFjMS4xMDUgMCAyLTAuOSAyLTJ2LTEzbC0zLTNoLTEzeiIgZmlsbD0iIzM0OThkYiIvPgogIDxwYXRoIGQ9Im03IDEwMzEuNHYxIDVjMCAwLjUgMC40NDc3IDEgMSAxaDhjMC41NTIgMCAxLTAuNSAxLTF2LTUtMWgtMTB6IiBmaWxsPSIjMjk4MGI5Ii8+CiAgPHBhdGggZD0ibTcgM3Y1YzAgMC41NTIzIDAuNDQ3NyAxIDEgMWg4YzAuNTUyIDAgMS0wLjQ0NzcgMS0xdi01aC0xMHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMTAyOC40KSIgZmlsbD0iI2VjZjBmMSIvPgogIDxwYXRoIGQ9Im02IDEwNDAuNGMtMC41NTIzIDAtMSAwLjQtMSAxdjMgMiAzaDQgNiA0di0zLTItM2MwLTAuNi0wLjQ0OC0xLTEtMWgtNC00LTR6IiBmaWxsPSIjZWNmMGYxIi8+CiAgPGcgZmlsbD0iI2JkYzNjNyI+CiAgIDxyZWN0IGhlaWdodD0iMSIgd2lkdGg9IjE0IiB5PSIxMDQ4LjQiIHg9IjUiLz4KICAgPHJlY3QgaGVpZ2h0PSIxIiB3aWR0aD0iMTAiIHk9IjEwNDIuNCIgeD0iNyIvPgogICA8cmVjdCBoZWlnaHQ9IjEiIHdpZHRoPSIxMCIgeT0iMTA0NC40IiB4PSI3Ii8+CiAgPC9nPgogIDxyZWN0IGhlaWdodD0iNCIgd2lkdGg9IjMiIHk9IjEwMzIuNCIgeD0iMTMiIGZpbGw9IiMzNDk4ZGIiLz4KICA8cmVjdCBoZWlnaHQ9Ii45OTk5OCIgd2lkdGg9IjMiIHk9IjEwMzIuNCIgeD0iMTMiIGZpbGw9IiMyOTgwYjkiLz4KIDwvZz4KPC9zdmc+Cg==');
// document.body.setAttribute('data-complete', 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYxMiA3OTI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA2MTIgNzkyIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0MUFENDk7fQo8L3N0eWxlPjxnPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01NjIsMzk2YzAtMTQxLjQtMTE0LjYtMjU2LTI1Ni0yNTZTNTAsMjU0LjYsNTAsMzk2czExNC42LDI1NiwyNTYsMjU2UzU2Miw1MzcuNCw1NjIsMzk2TDU2MiwzOTZ6ICAgIE01MDEuNywyOTYuM2wtMjQxLDI0MWwwLDBsLTE3LjIsMTcuMkwxMTAuMyw0MjEuM2w1OC44LTU4LjhsNzQuNSw3NC41bDE5OS40LTE5OS40TDUwMS43LDI5Ni4zTDUwMS43LDI5Ni4zeiIvPjwvZz48L3N2Zz4=');
// document.body.setAttribute('data-downloading','data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB5PSIwIiB4PSIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMjhweCIgaGVpZ2h0PSIxMjhweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHN0eWxlPSJ3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JhY2tncm91bmQtc2l6ZTppbml0aWFsO2JhY2tncm91bmQtcmVwZWF0LXk6aW5pdGlhbDtiYWNrZ3JvdW5kLXJlcGVhdC14OmluaXRpYWw7YmFja2dyb3VuZC1wb3NpdGlvbi15OmluaXRpYWw7YmFja2dyb3VuZC1wb3NpdGlvbi14OmluaXRpYWw7YmFja2dyb3VuZC1vcmlnaW46aW5pdGlhbDtiYWNrZ3JvdW5kLWltYWdlOmluaXRpYWw7YmFja2dyb3VuZC1jb2xvcjpyZ2IoMjQxLCAyNDIsIDI0Myk7YmFja2dyb3VuZC1jbGlwOmluaXRpYWw7YmFja2dyb3VuZC1hdHRhY2htZW50OmluaXRpYWw7YW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkIiA+PGcgY2xhc3M9ImxkbC1zY2FsZSIgc3R5bGU9InRyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTt0cmFuc2Zvcm06cm90YXRlKDBkZWcpIHNjYWxlKDAuOCwgMC44KTthbmltYXRpb24tcGxheS1zdGF0ZTpwYXVzZWQiID48cGF0aCBmaWxsPSIjY2M1OTYwIiBkPSJNOTIuNSA1My45TDc5LjIgNDIuMiA2Ny40IDU1LjVsNy4xLS40Yy0xLjkgOS4xLTguOSAxNi42LTE4IDE5LjEtMTEgMi45LTIyLjUtMS45LTI4LjItMTEuN2wtOSA1LjJDMjUuOCA3OC44IDM3LjYgODUuNCA1MCA4NS40YzMgMCA2LjEtLjQgOS4xLTEuMiAxMy45LTMuOCAyNC4yLTE1LjYgMjYtMjkuOGw3LjQtLjV6IiBzdHlsZT0iZmlsbDpyZ2IoODksIDIwNCwgMTI1KTthbmltYXRpb24tcGxheS1zdGF0ZTpwYXVzZWQiID48L3BhdGg+CjxwYXRoIGZpbGw9IiNlMTdhNWYiIGQ9Ik00MC44IDE1LjhDMjcgMTkuNiAxNi43IDMxLjQgMTQuOSA0NS42bC03LjQuNSAxMy4zIDExLjcgMTEuOC0xMy4zLTcuMS40YzEuOS05LjEgOC45LTE2LjYgMTgtMTkuMSAxMC45LTIuOSAyMi41IDEuOSAyOC4xIDExLjZsOS01LjJjLTgtMTMuNy0yNC4zLTIwLjUtMzkuOC0xNi40eiIgc3R5bGU9ImZpbGw6cmdiKDE5MywgMjI1LCA5NSk7YW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkIiA+PC9wYXRoPgo8bWV0YWRhdGEgeG1sbnM6ZD0iaHR0cHM6Ly9sb2FkaW5nLmlvL3N0b2NrLyIgc3R5bGU9ImFuaW1hdGlvbi1wbGF5LXN0YXRlOnBhdXNlZCIgPjxkOm5hbWUgc3R5bGU9ImFuaW1hdGlvbi1wbGF5LXN0YXRlOnBhdXNlZCIgPnJlbG9hZDwvZDpuYW1lPgo8ZDp0YWdzIHN0eWxlPSJhbmltYXRpb24tcGxheS1zdGF0ZTpwYXVzZWQiID5yZWN5Y2xlLHJlZnJlc2gsc3luYyxkb3dubG9hZCx1cGRhdGUsZmV0Y2gscmVsb2FkLHNwaW5uZXI8L2Q6dGFncz4KPGQ6bGljZW5zZSBzdHlsZT0iYW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkIiA+Ynk8L2Q6bGljZW5zZT4KPGQ6c2x1ZyBzdHlsZT0iYW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkIiA+NmFvM3htPC9kOnNsdWc+PC9tZXRhZGF0YT48L2c+PCEtLSBnZW5lcmF0ZWQgYnkgaHR0cHM6Ly9sb2FkaW5nLmlvLyAtLT48L3N2Zz4=' );
// document.body.setAttribute('data-error', 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB5PSIwIiB4PSIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMjhweCIgaGVpZ2h0PSIxMjhweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHN0eWxlPSJ3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JhY2tncm91bmQtc2l6ZTppbml0aWFsO2JhY2tncm91bmQtcmVwZWF0LXk6aW5pdGlhbDtiYWNrZ3JvdW5kLXJlcGVhdC14OmluaXRpYWw7YmFja2dyb3VuZC1wb3NpdGlvbi15OmluaXRpYWw7YmFja2dyb3VuZC1wb3NpdGlvbi14OmluaXRpYWw7YmFja2dyb3VuZC1vcmlnaW46aW5pdGlhbDtiYWNrZ3JvdW5kLWltYWdlOmluaXRpYWw7YmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSk7YmFja2dyb3VuZC1jbGlwOmluaXRpYWw7YmFja2dyb3VuZC1hdHRhY2htZW50OmluaXRpYWw7YW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkIiA+PGcgY2xhc3M9ImxkbC1zY2FsZSIgc3R5bGU9InRyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTt0cmFuc2Zvcm06cm90YXRlKDBkZWcpIHNjYWxlKDAuOCwgMC44KTthbmltYXRpb24tcGxheS1zdGF0ZTpwYXVzZWQiID48cGF0aCBmaWxsPSIjYzMzODM3IiBkPSJNNDIuNyAyMC42TDExLjUgNjkuN2MtMS44IDIuNy0yIDYuMS0uNSA5IDEuNSAyLjkgNC41IDQuNiA3LjcgNC42SDUwVjE2LjdjLTIuOSAwLTUuNiAxLjQtNy4zIDMuOXoiIHN0eWxlPSJmaWxsOnJnYigxOTUsIDU2LCA1NSk7YW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkIiA+PC9wYXRoPgo8cGF0aCBmaWxsPSIjZTE1YzY0IiBkPSJNODkgNzguN2MxLjUtMi45IDEuNC02LjMtLjQtOUw1Ny4yIDIwLjZjLTEuNi0yLjQtNC4zLTMuOS03LjItMy45djY2LjZoMzEuM2MzLjIgMCA2LjEtMS44IDcuNy00LjZ6IiBzdHlsZT0iZmlsbDpyZ2IoMjI1LCA5MiwgMTAwKTthbmltYXRpb24tcGxheS1zdGF0ZTpwYXVzZWQiID48L3BhdGg+CjxwYXRoIGQ9Ik02NC41IDUwLjNsLTUuOC01LjgtOC43IDguNy04LjctOC43LTUuOCA1LjggOC43IDguNy04LjcgOC43IDUuOCA1LjggOC43LTguNyA4LjcgOC43IDUuOC01LjgtOC43LTguN3oiIGZpbGw9IiNmNGU2YzgiIHN0eWxlPSJmaWxsOnJnYigyNDQsIDIzMCwgMjAwKTthbmltYXRpb24tcGxheS1zdGF0ZTpwYXVzZWQiID48L3BhdGg+CjxtZXRhZGF0YSB4bWxuczpkPSJodHRwczovL2xvYWRpbmcuaW8vc3RvY2svIiBzdHlsZT0iYW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkIiA+PGQ6bmFtZSBzdHlsZT0iYW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkIiA+ZXJyb3I8L2Q6bmFtZT4KPGQ6dGFncyBzdHlsZT0iYW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkIiA+ZmFpbCxkaXNhYmxlLGV4Y2VwdGlvbixlcnJhbnQsYmFkLGJyZWFrLHN0b3AsZXJyb3Isd2ViIGFwcGxpY2F0aW9uPC9kOnRhZ3M+CjxkOmxpY2Vuc2Ugc3R5bGU9ImFuaW1hdGlvbi1wbGF5LXN0YXRlOnBhdXNlZCIgPmJ5PC9kOmxpY2Vuc2U+CjxkOnNsdWcgc3R5bGU9ImFuaW1hdGlvbi1wbGF5LXN0YXRlOnBhdXNlZCIgPjRncnJkdjwvZDpzbHVnPjwvbWV0YWRhdGE+PC9nPjwhLS0gZ2VuZXJhdGVkIGJ5IGh0dHBzOi8vbG9hZGluZy5pby8gLS0+PC9zdmc+');
// document.body.setAttribute('data-queued', 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB5PSIwIiB4PSIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSLlnJblsaRfMSIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMTI4cHgiIGhlaWdodD0iMTI4cHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0id2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kLXNpemU6aW5pdGlhbDtiYWNrZ3JvdW5kLXJlcGVhdC15OmluaXRpYWw7YmFja2dyb3VuZC1yZXBlYXQteDppbml0aWFsO2JhY2tncm91bmQtcG9zaXRpb24teTppbml0aWFsO2JhY2tncm91bmQtcG9zaXRpb24teDppbml0aWFsO2JhY2tncm91bmQtb3JpZ2luOmluaXRpYWw7YmFja2dyb3VuZC1pbWFnZTppbml0aWFsO2JhY2tncm91bmQtY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpO2JhY2tncm91bmQtY2xpcDppbml0aWFsO2JhY2tncm91bmQtYXR0YWNobWVudDppbml0aWFsO2FuaW1hdGlvbi1wbGF5LXN0YXRlOnBhdXNlZCIgPjxnIGNsYXNzPSJsZGwtc2NhbGUiIHN0eWxlPSJ0cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCU7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKSBzY2FsZSgwLjgsIDAuOCk7YW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkIiA+PGxpbmVhckdyYWRpZW50IHkyPSI3NC45NTgiIHgyPSI2OC4xODIiIHkxPSIzMy42NzIiIHgxPSIzMS4xNjciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iU1ZHSURfMV8iIHN0eWxlPSJhbmltYXRpb24tcGxheS1zdGF0ZTpwYXVzZWQiID48c3RvcCBzdG9wLWNvbG9yPSIjZTBlMGUwIiBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOnJnYigyMjQsIDIyNCwgMjI0KTthbmltYXRpb24tcGxheS1zdGF0ZTpwYXVzZWQiID48L3N0b3A+CjxzdG9wIHN0b3AtY29sb3I9IiNjY2MiIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6cmdiKDIwNCwgMjA0LCAyMDQpO2FuaW1hdGlvbi1wbGF5LXN0YXRlOnBhdXNlZCIgPjwvc3RvcD48L2xpbmVhckdyYWRpZW50Pgo8Y2lyY2xlIGZpbGw9InVybCgjU1ZHSURfMV8pIiByPSIzMS44OSIgY3k9IjUzLjg0NCIgY3g9IjQ5LjI1MyIgc3R5bGU9ImFuaW1hdGlvbi1wbGF5LXN0YXRlOnBhdXNlZCIgPjwvY2lyY2xlPgo8cGF0aCBkPSJNNDkuMjUzIDIxLjk1NHY5Ljg5NCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2U9IiMzMzMiIGZpbGw9Im5vbmUiIHN0eWxlPSJzdHJva2U6cmdiKDUxLCA1MSwgNTEpO2FuaW1hdGlvbi1wbGF5LXN0YXRlOnBhdXNlZCIgPjwvcGF0aD4KPHBhdGggZD0iTTcxLjgwMiAzMS4yOTRsLTYuOTk2IDYuOTk3IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZT0iIzMzMyIgZmlsbD0ibm9uZSIgc3R5bGU9InN0cm9rZTpyZ2IoNTEsIDUxLCA1MSk7YW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkIiA+PC9wYXRoPgo8cGF0aCBkPSJNODEuMTQzIDUzLjg0NGgtOS44OTUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlPSIjMzMzIiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlOnJnYig1MSwgNTEsIDUxKTthbmltYXRpb24tcGxheS1zdGF0ZTpwYXVzZWQiID48L3BhdGg+CjxwYXRoIGQ9Ik03MS44MDIgNzYuMzk0bC02Ljk5Ni02Ljk5NyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2U9IiMzMzMiIGZpbGw9Im5vbmUiIHN0eWxlPSJzdHJva2U6cmdiKDUxLCA1MSwgNTEpO2FuaW1hdGlvbi1wbGF5LXN0YXRlOnBhdXNlZCIgPjwvcGF0aD4KPHBhdGggZD0iTTQ5LjI1MyA4NS43MzRWNzUuODQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlPSIjMzMzIiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlOnJnYig1MSwgNTEsIDUxKTthbmltYXRpb24tcGxheS1zdGF0ZTpwYXVzZWQiID48L3BhdGg+CjxwYXRoIGQ9Ik0yNi43MDMgNzYuMzk0bDYuOTk2LTYuOTk3IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZT0iIzMzMyIgZmlsbD0ibm9uZSIgc3R5bGU9InN0cm9rZTpyZ2IoNTEsIDUxLCA1MSk7YW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkIiA+PC9wYXRoPgo8cGF0aCBkPSJNMTcuMzYyIDUzLjg0NGg5Ljg5NSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2U9IiMzMzMiIGZpbGw9Im5vbmUiIHN0eWxlPSJzdHJva2U6cmdiKDUxLCA1MSwgNTEpO2FuaW1hdGlvbi1wbGF5LXN0YXRlOnBhdXNlZCIgPjwvcGF0aD4KPHBhdGggZD0iTTI2LjcwMyAzMS4yOTRsNi45OTYgNi45OTciIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlPSIjMzMzIiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlOnJnYig1MSwgNTEsIDUxKTthbmltYXRpb24tcGxheS1zdGF0ZTpwYXVzZWQiID48L3BhdGg+CjxwYXRoIGQ9Ik00OC45NzMgNTMuNTY0TDYzLjQyNyAzOS4xMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2U9IiNlMTViNjQiIGZpbGw9Im5vbmUiIHN0eWxlPSJzdHJva2U6cmdiKDIyNSwgOTEsIDEwMCk7YW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkIiA+PC9wYXRoPgo8cGF0aCBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZT0iIzMzMyIgZmlsbD0ibm9uZSIgZD0iTTQxLjU2NSAyMy44NzZ2LTcuNjg4QTcuNjg4IDcuNjg4IDAgMCAxIDQ5LjI1MyA4LjVoMGE3LjY4OCA3LjY4OCAwIDAgMSA3LjY4OCA3LjY4OHY3LjY4OCIgc3R5bGU9InN0cm9rZTpyZ2IoNTEsIDUxLCA1MSk7YW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkIiA+PC9wYXRoPgo8cGF0aCBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2U9IiMzMzMiIGZpbGw9IiNmZmYiIGQ9Ik00OS4yNTMgNTMuODQ0aDBhMi41MDEgMi41MDEgMCAwIDEtMi41MDEtMi41MDFWMzQuMzQ5YTIuNTAxIDIuNTAxIDAgMCAxIDIuNTAxLTIuNTAxaDBhMi41MDEgMi41MDEgMCAwIDEgMi41MDEgMi41MDF2MTYuOTk0YTIuNTAyIDIuNTAyIDAgMCAxLTIuNTAxIDIuNTAxeiIgc3R5bGU9InN0cm9rZTpyZ2IoNTEsIDUxLCA1MSk7ZmlsbDpyZ2IoMjU1LCAyNTUsIDI1NSk7YW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkIiA+PC9wYXRoPgo8cGF0aCBvcGFjaXR5PSIuMiIgZD0iTTQ5LjI1MyAyMS45NTRjLTE1LjI0IDAtMjcuOTc1IDEwLjY5My0zMS4xMzIgMjQuOTg0YTQxLjE1MiA0MS4xNTIgMCAwIDEgMS45NzgtNC41OTljNy45My0xNS43MjYgMjQuMjQ1LTIzLjQ5IDM2LjQ0MS0xNy4zNCAxMi4xOTYgNi4xNSAxNS42NTUgMjMuODg0IDcuNzI1IDM5LjYxLTUuNzA0IDExLjMxMS0xNS43NDcgMTguNTAzLTI1LjQ3NCAxOS4zNmEzMS44MzcgMzEuODM3IDAgMCAwIDEwLjQ2MiAxLjc2NWMxNy42MTIgMCAzMS44OS0xNC4yNzggMzEuODktMzEuODkgMC0xNy42MTMtMTQuMjc4LTMxLjg5LTMxLjg5LTMxLjg5eiIgc3R5bGU9ImFuaW1hdGlvbi1wbGF5LXN0YXRlOnBhdXNlZCIgPjwvcGF0aD4KPHBhdGggc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlPSIjMzMzIiBmaWxsPSIjZmZmIiBkPSJNNDkuMjUzIDUzLjg0NGgwYTIuNTAxIDIuNTAxIDAgMCAxIDIuNTAxLTIuNTAxaDkuMzA3YTIuNTAxIDIuNTAxIDAgMCAxIDIuNTAxIDIuNTAxdjBhMi41MDEgMi41MDEgMCAwIDEtMi41MDEgMi41MDFoLTkuMzA3YTIuNTAxIDIuNTAxIDAgMCAxLTIuNTAxLTIuNTAxeiIgc3R5bGU9InN0cm9rZTpyZ2IoNTEsIDUxLCA1MSk7ZmlsbDpyZ2IoMjU1LCAyNTUsIDI1NSk7YW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkIiA+PC9wYXRoPgo8cGF0aCBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZT0iI2ZmZiIgZmlsbD0ibm9uZSIgZD0iTTMyLjYxMiA0MC40NTlhMjEuNDU2IDIxLjQ1NiAwIDAgMSA2LjQ2Mi01LjM5MyIgc3R5bGU9InN0cm9rZTpyZ2IoMjU1LCAyNTUsIDI1NSk7YW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkIiA+PC9wYXRoPgo8cGF0aCBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZT0iI2ZmZiIgZmlsbD0ibm9uZSIgZD0iTTI5LjI2OSA0Ni4yOTdjLjE4LS40NzcuMzc3LS45NDUuNTg5LTEuNDA1IiBzdHlsZT0ic3Ryb2tlOnJnYigyNTUsIDI1NSwgMjU1KTthbmltYXRpb24tcGxheS1zdGF0ZTpwYXVzZWQiID48L3BhdGg+CjxwYXRoIGZpbGw9IiNmNWU2YzgiIG9wYWNpdHk9Ii4zIiBkPSJNNzUuMzc3IDUzLjg0NGMwLTMuNTY0LS43MTktNi45NjItMi4wMTctMTAuMDZMMzkuMTkyIDc3Ljk1MWEyNS45NzUgMjUuOTc1IDAgMCAwIDEwLjA2IDIuMDE3Yy4xMDUgMCAuMjA4LS4wMDcuMzEyLS4wMDhsMjUuODA0LTI1LjgwNGMuMDAyLS4xMDQuMDA5LS4yMDcuMDA5LS4zMTJ6IiBzdHlsZT0iZmlsbDpyZ2IoMjQ1LCAyMzAsIDIwMCk7YW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkIiA+PC9wYXRoPgo8cGF0aCBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2U9IiMzMzMiIGZpbGw9IiNlMTViNjQiIGQ9Ik00OS4yNTMgOTAuMDA1Yy0xOS45MzkgMC0zNi4xNjEtMTYuMjIyLTM2LjE2MS0zNi4xNjFzMTYuMjIyLTM2LjE2MSAzNi4xNjEtMzYuMTYxIDM2LjE2MSAxNi4yMjIgMzYuMTYxIDM2LjE2MS0xNi4yMjIgMzYuMTYxLTM2LjE2MSAzNi4xNjF6bTAtNjMuNzhjLTE1LjIyOSAwLTI3LjYxOSAxMi4zOS0yNy42MTkgMjcuNjE5czEyLjM5IDI3LjYxOSAyNy42MTkgMjcuNjE5IDI3LjYxOS0xMi4zOSAyNy42MTktMjcuNjE5LTEyLjM5LTI3LjYxOS0yNy42MTktMjcuNjE5eiIgc3R5bGU9InN0cm9rZTpyZ2IoNTEsIDUxLCA1MSk7ZmlsbDpyZ2IoMjI1LCA5MSwgMTAwKTthbmltYXRpb24tcGxheS1zdGF0ZTpwYXVzZWQiID48L3BhdGg+CjxwYXRoIG9wYWNpdHk9Ii4yIiBkPSJNNzUuMzc3IDUzLjg0NGMwIDE0LjQwNS0xMS43MTkgMjYuMTI0LTI2LjEyNCAyNi4xMjRWOTEuNWMyMC43NjQgMCAzNy42NTYtMTYuODkzIDM3LjY1Ni0zNy42NTZTNzAuMDE2IDE2LjE4OCA0OS4yNTMgMTYuMTg4VjI3LjcyYzE0LjQwNS0uMDAxIDI2LjEyNCAxMS43MTkgMjYuMTI0IDI2LjEyNHoiIHN0eWxlPSJhbmltYXRpb24tcGxheS1zdGF0ZTpwYXVzZWQiID48L3BhdGg+CjxjaXJjbGUgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlPSIjMzMzIiBmaWxsPSIjZjhiMjZhIiByPSI1LjEyNSIgY3k9IjUzLjg0NCIgY3g9IjQ5LjI1MyIgc3R5bGU9InN0cm9rZTpyZ2IoNTEsIDUxLCA1MSk7ZmlsbDpyZ2IoMjQ4LCAxNzgsIDEwNik7YW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkIiA+PC9jaXJjbGU+CjxwYXRoIGZpbGw9IiNmNWU2YzgiIG9wYWNpdHk9Ii4zIiBkPSJNNjYuMjI0IDM0LjAwN0wyOS40MTYgNzAuODE1YTI2LjMxOSAyNi4zMTkgMCAwIDAgMi4yMjUgMi4zMDVMNjguNTMgMzYuMjMxYTI2LjYwOCAyNi42MDggMCAwIDAtMi4zMDYtMi4yMjR6IiBzdHlsZT0iZmlsbDpyZ2IoMjQ1LCAyMzAsIDIwMCk7YW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkIiA+PC9wYXRoPgo8cGF0aCBmaWxsPSIjZjVlNmM4IiBvcGFjaXR5PSIuMyIgZD0iTTcwLjI5OCAzOC4zODlsLTM2LjUgMzYuNTAxYTI2LjE3NiAyNi4xNzYgMCAwIDAgMi43NTYgMS43NzRsMzUuNTE4LTM1LjUxOGEyNi4xOSAyNi4xOSAwIDAgMC0xLjc3NC0yLjc1N3oiIHN0eWxlPSJmaWxsOnJnYigyNDUsIDIzMCwgMjAwKTthbmltYXRpb24tcGxheS1zdGF0ZTpwYXVzZWQiID48L3BhdGg+CjxtZXRhZGF0YSB4bWxuczpkPSJodHRwczovL2xvYWRpbmcuaW8vc3RvY2svIiBzdHlsZT0iYW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkIiA+PGQ6bmFtZSBzdHlsZT0iYW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkIiA+Y2xvY2s8L2Q6bmFtZT4KPGQ6dGFncyBzdHlsZT0iYW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkIiA+Y2xvY2ssdGltZSxzZWNvbmQ8L2Q6dGFncz4KPGQ6bGljZW5zZSBzdHlsZT0iYW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkIiA+Ynk8L2Q6bGljZW5zZT4KPGQ6c2x1ZyBzdHlsZT0iYW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkIiA+dDFyZXg8L2Q6c2x1Zz48L21ldGFkYXRhPjwvZz48IS0tIGdlbmVyYXRlZCBieSBodHRwczovL2xvYWRpbmcuaW8vIC0tPjwvc3ZnPg==');


function addScript(filename){
    let r = document.createElement('script');
    
    r.src = chrome.runtime.getURL('scripts/'+filename);
    r.onload = function () {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(r);
}
*/