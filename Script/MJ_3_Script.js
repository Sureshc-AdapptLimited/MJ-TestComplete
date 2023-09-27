Given("11111Click the MFE Check111", function (){
  aqUtils.Delay(1000);
  let chrome_RenderWidgetHostHWND = Aliases.WINWORD.formCreateDemoDocMasterCopyWord.panelMsodockright.toolbar.MsoWorkPane.NUIPane.NetUIHWND.NetUICtrlNotifySink.CMMOcxHostChildWindowMixedMode.CMMOcxHost.OsfAxControl.WebView2Holder.Chrome_WidgetWin_0.Chrome_WidgetWin_12.Chrome_RenderWidgetHostHWND;
  chrome_RenderWidgetHostHWND.Click(59, 192); 
  OCR.Recognize(Aliases.WINWORD.formCreateDemoDocMasterCopyWord.panelMsodockright.toolbar.MsoWorkPane.NUIPane.NetUIHWND.NetUICtrlNotifySink.CMMOcxHostChildWindowMixedMode.CMMOcxHost.OsfAxControl.WebView2Holder.Chrome_WidgetWin_0.Chrome_WidgetWin_12.Chrome_RenderWidgetHostHWND).CheckText("*Definition Issues*");
  chrome_RenderWidgetHostHWND.Click(188, 198);
  aqUtils.Delay(1000);
  chrome_RenderWidgetHostHWND.Click(77, 178);
  OCR.Recognize(Aliases.WINWORD.formCreateDemoDocMasterCopyWord.panel.panelCreateDemoDocMasterCopy.panelMicrosoftWordDocument).CheckText("*Road*");
  chrome_RenderWidgetHostHWND.MouseWheel(-4);
  aqUtils.Delay(1000);
   chrome_RenderWidgetHostHWND.Click(51, 217);  
  OCR.Recognize(Aliases.WINWORD.formCreateDemoDocMasterCopyWord.panel.panelCreateDemoDocMasterCopy.panelMicrosoftWordDocument).CheckText("*Company*");
  chrome_RenderWidgetHostHWND.MouseWheel(-9);
  aqUtils.Delay(1000);
  chrome_RenderWidgetHostHWND.Click(81, 219);
  OCR.Recognize(Aliases.WINWORD.formCreateDemoDocMasterCopyWord.panel.panelCreateDemoDocMasterCopy.panelMicrosoftWordDocument).CheckText("*Encumbrance*");
  chrome_RenderWidgetHostHWND.MouseWheel(-5);
  aqUtils.Delay(1000);
  chrome_RenderWidgetHostHWND = Aliases.WINWORD.formCreateDemoDocMasterCopyWord.panelMsodockright.toolbar.MsoWorkPane.NUIPane.NetUIHWND.NetUICtrlNotifySink.CMMOcxHostChildWindowMixedMode.CMMOcxHost.OsfAxControl.WebView2Holder.Chrome_WidgetWin_0.Chrome_WidgetWin_13.Chrome_RenderWidgetHostHWND;
  chrome_RenderWidgetHostHWND.MouseWheel(-1);
  chrome_RenderWidgetHostHWND.Click(83, 380);
  
  
});
