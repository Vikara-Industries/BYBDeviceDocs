"use strict";(self.webpackChunkbyb_test_docs=self.webpackChunkbyb_test_docs||[]).push([[508],{8072:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=o(7624),t=o(2172);const i={sidebar_label:"Devices",slug:"/"},a="Spike Recorder",s={id:"devicesmd/index",title:"Spike Recorder",description:"Our devices are ment to be used with our Spike Recorder Software available for Windows, macOS, iOS, Android and Linux",source:"@site/docs/devicesmd/index.md",sourceDirName:"devicesmd",slug:"/",permalink:"/BYBDeviceDocs/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/devicesmd/index.md",tags:[],version:"current",frontMatter:{sidebar_label:"Devices",slug:"/"},sidebar:"tutorialSidebar",next:{title:"Human SpikerBox",permalink:"/BYBDeviceDocs/devicesmd/HumanSpikerBox"}},c={},d=[{value:"Connection Methods",id:"connection-methods",level:2},{value:"USB",id:"usb",level:3},{value:"Green Smartphone Cable",id:"green-smartphone-cable",level:3},{value:"Blue Laptop Cable",id:"blue-laptop-cable",level:3},{value:"General Troubleshooting",id:"general-troubleshooting",level:2},{value:"All I&#39;m recording is background audio!",id:"all-im-recording-is-background-audio",level:3},{value:"Connecting To Other Software",id:"connecting-to-other-software",level:2}];function l(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",...(0,t.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"spike-recorder",children:"Spike Recorder"}),"\n",(0,r.jsxs)(n.p,{children:["Our devices are ment to be used with our ",(0,r.jsx)(n.a,{href:"https://backyardbrains.com/products/spikerecorder",children:"Spike Recorder Software"})," available for Windows, macOS, iOS, Android and Linux"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://help.backyardbrains.com/support/solutions/categories/43000367749/folders/43000574694",children:"Here are the manuals"})}),"\n",(0,r.jsx)(n.h2,{id:"connection-methods",children:"Connection Methods"}),"\n",(0,r.jsx)(n.p,{children:"Choosing a connection method will depend on your SpikerBox and device running Spike Recorder."}),"\n",(0,r.jsx)(n.h3,{id:"usb",children:"USB"}),"\n",(0,r.jsx)(n.h3,{id:"green-smartphone-cable",children:"Green Smartphone Cable"}),"\n",(0,r.jsx)(n.p,{children:"The Green cable should be used on devices with a single combined microphone/headphone port, like tablets, newer laptops, or smartphones have."}),"\n",(0,r.jsx)(n.p,{children:'An important note is that the Green cable is not symmetrical. Make sure that the end labeled "SpikerBox" goes into the SpikerBox'}),"\n",(0,r.jsx)(n.p,{children:"On the Android/iOS versions of Spike Recorder, the spikerbox should connect automatically."}),"\n",(0,r.jsx)(n.p,{children:"On the computer version, once you plug in the green cable, go into the Config menu (Little gear icon in the top-left corner), below the filtering options, you should see a list of all your audio input devices(probably a lot less than on my machine)"}),"\n",(0,r.jsx)(n.p,{children:"The dropdown menus on the left side are used to select the color of the graph made from the input. Selecting black makes Spike Recorder ignore that channel."}),"\n",(0,r.jsx)(n.p,{children:"Here, i selected green for the external audio channel on my device(Realtek), and selected black for the internal microphone(facecam 1000x in my case), to make Spike Recorder ignore it."}),"\n",(0,r.jsx)(n.h3,{id:"blue-laptop-cable",children:"Blue Laptop Cable"}),"\n",(0,r.jsx)(n.p,{children:"The blue cable should be used on devices that have separate individual ports for headphones and microphones. The setup will be the same as for the green cable"}),"\n",(0,r.jsx)(n.h2,{id:"general-troubleshooting",children:"General Troubleshooting"}),"\n",(0,r.jsx)(n.h3,{id:"all-im-recording-is-background-audio",children:"All I'm recording is background audio!"}),"\n",(0,r.jsxs)(n.p,{children:["If you are getting a lot of noise in Spike Recorder, it\u2019s likely that it is recording from your device\u2019s microphone, and that it hasn\u2019t connected to your SpikerBox. You can test this by clapping near your device, and seeing if the graph responds.\r\nIf you are connecting via USB, you should see this symbol:\r\n",(0,r.jsx)(n.img,{src:"https://forum.backyardbrains.com/uploads/default/original/1X/14325468f0c5be5612824ee215210062ec2ec4e6.png",alt:"USB symbol next to the FFT button"})]}),"\n",(0,r.jsx)(n.p,{children:"If not, try to follow this order of steps: Turn on the SpikerBox \u2192 Turn on the SpikeRecorder App \u2192 Connect the SpikerBox to the computer via USB."}),"\n",(0,r.jsx)(n.h2,{id:"connecting-to-other-software",children:"Connecting To Other Software"}),"\n",(0,r.jsx)(n.p,{children:"If you are using the blue or green cable to connect, you can use any program that can record audio, such as Audacity. Keep in mind that the Plant SpikerBox as well as the Heart and Brain SpikerBox use amplitude modulation (AM) with a 5kHz carrier signal, that is removed in Spike Recorder."}),"\n",(0,r.jsx)(n.p,{children:"If you are connecting via USB, you can load the data directly into your own program as well, here are a few resources for setting up your own host software:"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/BackyardBrains/SpikerBoxPro/blob/master/Muscle/documentation/SpikeRecorderHIDspecification.pdf",children:"Implementation Guide for SpikerBox Host Software"}),"\r\n",(0,r.jsx)(n.a,{href:"https://raw.githubusercontent.com/BackyardBrains/SpikeTools/master/spikerecorder.py",children:"Example Python Script"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},2172:(e,n,o)=>{o.d(n,{I:()=>s,M:()=>a});var r=o(1504);const t={},i=r.createContext(t);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);