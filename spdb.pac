function FindProxyForURL(url, host) {
      if(shExpMatch(url, "https://spdbccc.toptastewin.com/prod/conciergeservice/app/*")){
          return "PROXY 120.79.86.156:9898";
      }
  return "DIRECT";
}