Given("Click the MFE Check", function (){
   aqUtils.Delay(1000);
  let form = Aliases.WINWORD.formCreateDemoDocMasterCopyWord;
  form.Activate();
  let chrome_RenderWidgetHostHWND = form.panelMsodockright.toolbar.MsoWorkPane.NUIPane.NetUIHWND.NetUICtrlNotifySink.CMMOcxHostChildWindowMixedMode.CMMOcxHost.OsfAxControl.WebView2Holder.Chrome_WidgetWin_0.Chrome_WidgetWin_13.Chrome_RenderWidgetHostHWND;
  chrome_RenderWidgetHostHWND.Drag(312, 131, 4, 171);
  OCR.Recognize(chrome_RenderWidgetHostHWND).BlockByText("Check").Click();
  aqUtils.Delay(1000);
  chrome_RenderWidgetHostHWND.Click(165, 276);
  chrome_RenderWidgetHostHWND.Click(180, 200);
  aqUtils.Delay(5000);
  OCR.Recognize(Aliases.WINWORD.formCreateDemoDocMasterCopyWord.panelMsodockright.toolbar.MsoWorkPane.NUIPane.NetUIHWND.NetUICtrlNotifySink.CMMOcxHostChildWindowMixedMode.CMMOcxHost.OsfAxControl.WebView2Holder.Chrome_WidgetWin_0.Chrome_WidgetWin_13.Chrome_RenderWidgetHostHWND).CheckText("*Definition Issues*");
  OCR.Recognize(Aliases.WINWORD.formCreateDemoDocMasterCopyWord.panelMsodockright.toolbar.MsoWorkPane.NUIPane.NetUIHWND.NetUICtrlNotifySink.CMMOcxHostChildWindowMixedMode.CMMOcxHost.OsfAxControl.WebView2Holder.Chrome_WidgetWin_0.Chrome_WidgetWin_13.Chrome_RenderWidgetHostHWND).BlockByText("Issues", spLeftMost).Click();
  chrome_RenderWidgetHostHWND = Aliases.WINWORD.formCreateDemoDocMasterCopyWord.panelMsodockright.toolbar.MsoWorkPane.NUIPane.NetUIHWND.NetUICtrlNotifySink.CMMOcxHostChildWindowMixedMode.CMMOcxHost.OsfAxControl.WebView2Holder.Chrome_WidgetWin_0.Chrome_WidgetWin_13.Chrome_RenderWidgetHostHWND;
  chrome_RenderWidgetHostHWND.Click(236, 196);
  chrome_RenderWidgetHostHWND.Click(115, 174);
  OCR.Recognize(Aliases.WINWORD.formCreateDemoDocMasterCopyWord.panelMsodockright.toolbar.MsoWorkPane.NUIPane.NetUIHWND.NetUICtrlNotifySink.CMMOcxHostChildWindowMixedMode.CMMOcxHost.OsfAxControl.WebView2Holder.Chrome_WidgetWin_0.Chrome_WidgetWin_13.Chrome_RenderWidgetHostHWND).CheckText("*Road*");
  OCR.Recognize(Aliases.WINWORD.formCreateDemoDocMasterCopyWord.panel.panelCreateDemoDocMasterCopy.panelMicrosoftWordDocument).CheckText("*Road*");
  chrome_RenderWidgetHostHWND.MouseWheel(-3);
  OCR.Recognize(chrome_RenderWidgetHostHWND).BlockByText("Company", spBottomMost).Click();
  OCR.Recognize(Aliases.WINWORD.formCreateDemoDocMasterCopyWord.panelMsodockright.toolbar.MsoWorkPane.NUIPane.NetUIHWND.NetUICtrlNotifySink.CMMOcxHostChildWindowMixedMode.CMMOcxHost.OsfAxControl.WebView2Holder.Chrome_WidgetWin_0.Chrome_WidgetWin_13.Chrome_RenderWidgetHostHWND).CheckText("*Company*");
  OCR.Recognize(Aliases.WINWORD.formCreateDemoDocMasterCopyWord.panel.panelCreateDemoDocMasterCopy.panelMicrosoftWordDocument).CheckText("*Company *");
  
     
});

