﻿Given("Click the build content and change the dropdown", function (){
  aqUtils.Delay(2000);
  let chrome_RenderWidgetHostHWND = Aliases.WINWORD.formCreateDemoDocMasterCopyWord.panelMsodockright.toolbar.MsoWorkPane.NUIPane.NetUIHWND.NetUICtrlNotifySink.CMMOcxHostChildWindowMixedMode.CMMOcxHost.OsfAxControl.WebView2Holder.Chrome_WidgetWin_0.Chrome_WidgetWin_13.Chrome_RenderWidgetHostHWND;
  chrome_RenderWidgetHostHWND.Click(200, 207);
  chrome_RenderWidgetHostHWND.MouseWheel(-1);
  chrome_RenderWidgetHostHWND.Click(78, 381);
  aqUtils.Delay(2000);
  chrome_RenderWidgetHostHWND.Click(114, 98);
  OCR.Recognize(chrome_RenderWidgetHostHWND).BlockByText("Snippets", spLeftMost).Click();
  aqUtils.Delay(2000);
  let form = Aliases.WINWORD.formCreateDemoDocMasterCopyWord;
  form.Activate();
  aqUtils.Delay(2000);
  chrome_RenderWidgetHostHWND = Aliases.WINWORD.formCreateDemoDocMasterCopyWord.panelMsodockright.toolbar.MsoWorkPane.NUIPane.NetUIHWND.NetUICtrlNotifySink.CMMOcxHostChildWindowMixedMode.CMMOcxHost.OsfAxControl.WebView2Holder.Chrome_WidgetWin_0.Chrome_WidgetWin_13.Chrome_RenderWidgetHostHWND;
  chrome_RenderWidgetHostHWND.MouseWheel(-20);
  aqUtils.Delay(1000);
  chrome_RenderWidgetHostHWND.Click(224, 285);
  OCR.Recognize(chrome_RenderWidgetHostHWND).BlockByText("Insert").Click();
  aqUtils.Delay(1000);
  OCR.Recognize(Aliases.WINWORD.formCreateDemoDocMasterCopyWord.panelMsodockright.toolbar.MsoWorkPane.NUIPane.NetUIHWND.NetUICtrlNotifySink.CMMOcxHostChildWindowMixedMode.CMMOcxHost.OsfAxControl.WebView2Holder.Chrome_WidgetWin_0.Chrome_WidgetWin_13.Chrome_RenderWidgetHostHWND).CheckText("*to certify the record. In the Daily Sales\nReport, Mersis*");
  OCR.Recognize(Aliases.WINWORD.formCreateDemoDocMasterCopyWord.panel.panelCreateDemoDocMasterCopy.panelMicrosoftWordDocument).CheckText("*to certify the record. In the Daily Sales Report, Mersis*");
  aqUtils.Delay(1000);
  chrome_RenderWidgetHostHWND.Click(22, 18);
  chrome_RenderWidgetHostHWND.Click(23, 15);
  OCR.Recognize(chrome_RenderWidgetHostHWND).BlockByText("Continue", spLeftMost).Click();
});
