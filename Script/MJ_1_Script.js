Given("Open the MS-Word Application", function (){
    TestedApps.WINWORD.Run();
    
});
When("Click the open button", function (){
    let netUIHWND = Aliases.WINWORD.formWord.FullpageUIHost.NetUIHWND;
    netUIHWND.Click(63, 389);
    netUIHWND.Click(68, 389);
});
When("Click the MJ demo docs file", function (){
    let netUIHWND = Aliases.WINWORD.formWord.FullpageUIHost.NetUIHWND;
    netUIHWND.Click(699, 341);
    aqUtils.Delay(3000);
});
Then("Checking the agreement heading", function (){
  let panel = Aliases.WINWORD.formCreateDemoDocMasterCopyWord.panel.panelCreateDemoDocMasterCopy.panelMicrosoftWordDocument;
  panel.Click(408, 154);
  OCR.Recognize(panel).BlockByText("PARTIES", spNearestToCenter).DblClick();
});
 