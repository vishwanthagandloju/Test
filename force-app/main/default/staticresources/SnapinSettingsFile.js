window._snapinsSnippetSettingsFile = (function() 
  {
  console.log("Snippet settings file loaded."); // Logs that the snippet settings file was loaded successfully
  var userId = $A.get("$SObjectType.CurrentUser.Id");
  console.log(userId);
  embedded_svc.snippetSettingsFile.extraPrechatFormDetails = [
  {"label":"ChatEndUserId__c","value":userId,"displayToAgent":true,"transcriptFields": ["ChatEndUserId__c"]},
  {"label":"StartURL","value":window.location.href,"transcriptFields":[ "ChatStartURL__c" ],"displayToAgent":true}
  ];

  }
)();