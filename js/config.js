// 相关数据请移步到 leancloud 平台查看 
// 控制台 > 设置 >  应用keys
const appId = "<您的AppID>";
const appKey = "<您的appKey>";

//serverURl = REST API 服务器地址 + "1.1/classes/" + 仓库名
// example:  serverURl= https://api.lc-cn-n1-shared.com/1.1/classes/fortag
const serverURL = "您的 REST API 服务器地址";

headers={
    'X-LC-Id' : appId,
    'X-LC-key' : appKey,
    'content-type' : 'application/json'
  };