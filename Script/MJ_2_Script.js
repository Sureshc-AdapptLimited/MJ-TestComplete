Given("Click the LexisNexis icon", function (){
  let form = Aliases.WINWORD.formCreateDemoDocMasterCopyWord;
  let netUIHWND = form.panelMsodocktop.toolbar.Ribbon.NUIPane.NetUIHWND;
  netUIHWND.Click(958, 87);
  netUIHWND.DblClick(959, 96);
  aqUtils.Delay(2500);
  //let chrome_RenderWidgetHostHWND = form.panelMsodockright.toolbar.MsoWorkPane.NUIPane.NetUIHWND.NetUICtrlNotifySink.CMMOcxHostChildWindowMixedMode.CMMOcxHost.OsfAxControl.WebView2Holder.Chrome_WidgetWin_0.Chrome_WidgetWin_1.Chrome_RenderWidgetHostHWND;
  //OCR.Recognize(chrome_RenderWidgetHostHWND).BlockByText("LexisNexis").DblClick();
});
When("Enter the login details", function (){
    let form = Aliases.WINWORD.formCreateDemoDocMasterCopyWord;
    form.Activate();
    let chrome_WidgetWin_1 = form.panelMsodockright.toolbar.MsoWorkPane.NUIPane.NetUIHWND.NetUICtrlNotifySink.CMMOcxHostChildWindowMixedMode.CMMOcxHost.OsfAxControl.WebView2Holder.Chrome_WidgetWin_0.Chrome_WidgetWin_1;
    let chrome_RenderWidgetHostHWND = chrome_WidgetWin_1.Chrome_RenderWidgetHostHWND;
     aqUtils.Delay(1000);
    chrome_RenderWidgetHostHWND.Click(88, 237);
    chrome_RenderWidgetHostHWND.Click(46, 239);
    chrome_WidgetWin_1.Keys("joseph.bulpin3");
     aqUtils.Delay(1000);
    chrome_RenderWidgetHostHWND.Click(44, 331);
    chrome_WidgetWin_1.Keys("Testing99");
    aqUtils.Delay(1000);
    OCR.Recognize(chrome_RenderWidgetHostHWND).BlockByText("SHOW").Click();
    aqUtils.Delay(1000);
 });
When("Click the sign in button", function (){
  let chrome_RenderWidgetHostHWND = Aliases.WINWORD.formCreateDemoDocMasterCopyWord.panelMsodockright.toolbar.MsoWorkPane.NUIPane.NetUIHWND.NetUICtrlNotifySink.CMMOcxHostChildWindowMixedMode.CMMOcxHost.OsfAxControl.WebView2Holder.Chrome_WidgetWin_0.Chrome_WidgetWin_1.Chrome_RenderWidgetHostHWND;
  OCR.Recognize(chrome_RenderWidgetHostHWND).BlockByText("Sign", spNearestToCenter).Click();
  aqUtils.Delay(2000);
});
When("Click the get started button", function (){
  Aliases.WINWORD.formCreateDemoDocMasterCopyWord.panelMsodockright.toolbar.MsoWorkPane.NUIPane.NetUIHWND.NetUICtrlNotifySink.CMMOcxHostChildWindowMixedMode.CMMOcxHost.OsfAxControl.WebView2Holder.Chrome_WidgetWin_0.Chrome_WidgetWin_12.Chrome_RenderWidgetHostHWND.Click(157, 210);
  aqUtils.Delay(2000);
});



 