"use strict";(self.webpackChunksoundly_functional=self.webpackChunksoundly_functional||[]).push([[869],{62972:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return E},default:function(){return V}});var n=a(63366),i=(a(67294),a(64983)),l=a(407),o=(a(65216),a(93121),a(45077)),r=a(4093),s=a(58263),p=a(60943),m=a(59029),u=a(54205),h=a(71639),d=a(99223),c=a(17174),k=a(99483),f=a(6060),g=a(96373),y=a(81311),w=a(20771),N=a(70035),b=a(67417),C=a(83608),v=a(41769),T=a(12033),x=a(22933),P=a(49379),S=a(54919),J=a(39144),A=a(70311),L=a(80799),j=a(76497),I=a(72980),D=a(73779),F=a(31080),W=a(76734),q=a(62794),Y=a(70946),O=a(84817),_=a(64575),z=a(36753),U=a(88734),G=a(77606),H=a(88014),B=["components"],E={},M={_frontmatter:E};function V(e){var t=e.components,a=(0,n.Z)(e,B);return(0,i.kt)("wrapper",Object.assign({},M,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",null,"Crash course"),(0,i.kt)("p",null,"This page is a crash course for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikesol/purescript-wags"},(0,i.kt)("inlineCode",{parentName:"a"},"purescript-wags")),", the web audio library that powers ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikesol/wags.fm"},(0,i.kt)("inlineCode",{parentName:"a"},"wags.fm"))," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikesol/wagsi"},(0,i.kt)("inlineCode",{parentName:"a"},"wagsi")),"."),(0,i.kt)("h2",null,"A single hi-hat"),(0,i.kt)("p",null,"Let's start with a single hi-hat."),(0,i.kt)(l.J,{player:r.main,code:o,mdxType:"Player"}),(0,i.kt)("p",null,"To listen to this and all other examples, click or press the ",(0,i.kt)("strong",{parentName:"p"},"Play")," ",(0,i.kt)(G.G,{icon:H.aQp,mdxType:"FontAwesomeIcon"})," button below the player."),(0,i.kt)("p",null,"Wags is written in ",(0,i.kt)("a",{parentName:"p",href:"https://purescript.org"},"PureScript"),", but you don't need to know PureScript in order to use wags. In the example above, change ",(0,i.kt)("inlineCode",{parentName:"p"},"hh:0")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"bd:0")," (bass drum), stop it, and start it again. Change it to ",(0,i.kt)("inlineCode",{parentName:"p"},"realclaps:0")," (clap), stop it, and start it again. You can change to any of the sounds from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikesol/wagsi/blob/main/SOUNDS.md"},"Amazing SuperDirt Sample Library"),"."),(0,i.kt)("p",null,"If you're coming from ",(0,i.kt)("a",{parentName:"p",href:"https://wags.fm"},"wags.fm"),", you can copy this and all other examples into the ",(0,i.kt)("em",{parentName:"p"},"blank slate")," track and they will work out of the box."),(0,i.kt)("h2",null,"More notes"),(0,i.kt)("p",null,"When you add more samples like ",(0,i.kt)("inlineCode",{parentName:"p"},"bd:0")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"hh:0")," to the string, they are played in series.  The example below has four different samples. Try adding and removing some to see what happens."),(0,i.kt)(l.J,{player:p.main,code:s,mdxType:"Player"}),(0,i.kt)("h2",null,"Faster loops"),(0,i.kt)("p",null,"Let's make our loop faster. The example below is the same as the one above but plays at twice the speed. This is because the first value passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"0.4"),", or half of the value used above."),(0,i.kt)(l.J,{player:u.main,code:m,mdxType:"Player"}),(0,i.kt)("h2",null,"Silence"),(0,i.kt)("p",null,"Silence is golden! Use a tidla (",(0,i.kt)("inlineCode",{parentName:"p"},"~"),") to add silence in place of a note."),(0,i.kt)(l.J,{player:d.main,code:h,mdxType:"Player"}),(0,i.kt)("h2",null,"Simultaneous events"),(0,i.kt)("p",null,"Sometimes, you want two samples to play at the same time. You can do this by putting square brackets (",(0,i.kt)("inlineCode",{parentName:"p"},"[")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"]"),") around them and separating them with a comma. More than two samples? No problem, just add more commas."),(0,i.kt)("p",null,"In the example below, we use three quotation marks to open and close a multiline string."),(0,i.kt)(l.J,{player:k.main,code:c,mdxType:"Player"}),(0,i.kt)("h2",null,"Subdivisions"),(0,i.kt)("p",null,"To create internal subdivisions like 16th-notes (aka semiquavers), use square brackets (",(0,i.kt)("inlineCode",{parentName:"p"},"[")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"]"),") without a comma. You can also use an asterisk (",(0,i.kt)("inlineCode",{parentName:"p"},"*"),") to create subdivisions of a single sample."),(0,i.kt)(l.J,{player:g.main,code:f,mdxType:"Player"}),(0,i.kt)("h2",null,"Polyrhythms"),(0,i.kt)("p",null,"You can combine subdivisions and simultaneous events to create polyrhythms. Let's listen to 3 on 4."),(0,i.kt)(l.J,{player:b.main,code:N,mdxType:"Player"}),(0,i.kt)("h2",null,"Branching events"),(0,i.kt)("p",null,"Hearing the same loop over and over again is boring. Spice it up with ",(0,i.kt)("em",{parentName:"p"},"branching"),". Each time the cycle loops, a different branch will be chosen."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Branches multiply, so something that branches two times, then three times, and then four times will be 2",(0,i.kt)("em",{parentName:"p"},"3"),"4=24 cycles long!")),(0,i.kt)(l.J,{player:w.main,code:y,mdxType:"Player"}),(0,i.kt)("h2",null,"Voices"),(0,i.kt)("p",null,"Up until now, we've only used one voice called ",(0,i.kt)("inlineCode",{parentName:"p"},"earth"),". Let's add a new voice called ",(0,i.kt)("inlineCode",{parentName:"p"},"wind"),". The three possible voices are ",(0,i.kt)("inlineCode",{parentName:"p"},"earth"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"wind"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"fire"),". Different voices are helpful when you're doing a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikesol/wagsi"},(0,i.kt)("inlineCode",{parentName:"a"},"wagsi"))," jam session, as different DJs can work on different areas of a single document. They're also useful if you want to add effects (we'll add effects later)."),(0,i.kt)(l.J,{player:v.main,code:C,mdxType:"Player"}),(0,i.kt)("h2",null,"Drones"),(0,i.kt)("p",null,"To add a drone, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"air")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"heart")," voice followed by the ",(0,i.kt)("inlineCode",{parentName:"p"},"drone")," function with the sample you wish to use. The sample will loop."),(0,i.kt)(l.J,{player:x.main,code:T,mdxType:"Player"}),(0,i.kt)("h2",null,"Working with new samples"),(0,i.kt)("p",null,"You can add new samples by providing an object to the ",(0,i.kt)("inlineCode",{parentName:"p"},"sounds")," field of the top-level record. ",(0,i.kt)("inlineCode",{parentName:"p"},"sounds")," takes an object of ",(0,i.kt)("inlineCode",{parentName:"p"},"BufferUrl"),"-s, and we can construct it using standard PureScript functions like ",(0,i.kt)("a",{parentName:"p",href:"https://pursuit.purescript.org/packages/purescript-tuples/6.0.1/docs/Data.Tuple.Nested"},(0,i.kt)("inlineCode",{parentName:"a"},"/\\")),", ",(0,i.kt)("a",{parentName:"p",href:"https://pursuit.purescript.org/packages/purescript-prelude/5.0.1/docs/Control.Semigroupoid"},(0,i.kt)("inlineCode",{parentName:"a"},"<<<"))," and ",(0,i.kt)("a",{parentName:"p",href:"https://pursuit.purescript.org/packages/purescript-foreign-object/3.0.0/docs/Foreign.Object#v:fromFoldable"},(0,i.kt)("inlineCode",{parentName:"a"},"fromFoldable")),"."),(0,i.kt)(l.J,{player:j.main,code:L,mdxType:"Player"}),(0,i.kt)("h2",null,"Changing the volume of a note"),(0,i.kt)("p",null,"You can give any note a tag using a semi-colon (",(0,i.kt)("inlineCode",{parentName:"p"},";"),"). Then, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"onTag")," function to grab the note and ",(0,i.kt)("inlineCode",{parentName:"p"},"changeVolume")," to change the volume. A couple additional things to note:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"const")," is a PureScript function that returns constant values."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"parse_")," must be used to end a chain of one or more ",(0,i.kt)("inlineCode",{parentName:"li"},"onTag"),".")),(0,i.kt)(l.J,{player:S.main,code:P,mdxType:"Player"}),(0,i.kt)("h2",null,"Changing the rate (pitch) of a note"),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"changeRate")," to change the rate of a note."),(0,i.kt)(l.J,{preload:!0,player:A.main,code:J,mdxType:"Player"}),(0,i.kt)("h2",null,"Working with functions of time"),(0,i.kt)("p",null,"It's often useful to work with functions of time. You can modify both rate and volume as a function of time. There are many different representations of time, so choose wisely! The example below uses:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"clockTime")," to change the volume"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sampleTime")," to change the rate")),(0,i.kt)("p",null,"It also uses a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Low-frequency_oscillation"},"Low Frequency Oscillator (",(0,i.kt)("inlineCode",{parentName:"a"},"lfo"),")"),". Lastly, it uses the ",(0,i.kt)("inlineCode",{parentName:"p"},">>>")," operator to pipe values from left-to-right. Because we're making heavy use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"WAGS.Lib.Tidal.Tidal")," module, we'll use a qualified import and rename it ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),"."),(0,i.kt)(l.J,{player:D.main,code:I,mdxType:"Player"}),(0,i.kt)("p",null,"Other types of time you can use include"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"littleCycleTime"),": the time since the branch of a cycle started. For example, if you have a cycle that lasts 4 seconds with 5 branches and you just started branch 3, the value will be ",(0,i.kt)("inlineCode",{parentName:"li"},"0.0"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bigCycleTime"),": the time since the last cycle started. For example, if you have a cycle that lasts 4 seconds with 5 branches and you just started branch 3, the value will be ",(0,i.kt)("inlineCode",{parentName:"li"},"12.0"),".")),(0,i.kt)("h2",null,"Adding effects"),(0,i.kt)("p",null,"You can add aribtrary effects chains to voices. Effect chains must end with an output called ",(0,i.kt)("inlineCode",{parentName:"p"},"goodbye")," and optionally use an input called ",(0,i.kt)("inlineCode",{parentName:"p"},"hello"),". Discarding the input is useful if you want to use purely synthetic effects."),(0,i.kt)("h3",null,"High-pass filter"),(0,i.kt)("p",null,"Let's add a high-pass filter to create a sweeping effect."),(0,i.kt)(l.J,{player:W.main,code:F,mdxType:"Player"}),(0,i.kt)("h3",null,"Pan"),(0,i.kt)("p",null,"Let's now try a pan."),(0,i.kt)(l.J,{player:Y.main,code:q,mdxType:"Player"}),(0,i.kt)("h3",null,"Synthetic sounds"),(0,i.kt)("p",null,"Let's add a few sine-wave oscillators."),(0,i.kt)(l.J,{player:_.main,code:O,mdxType:"Player"}),(0,i.kt)("h3",null,"Delays and feedback"),(0,i.kt)("p",null,"To create a feedback loop, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"delay")," effect as well as ",(0,i.kt)("inlineCode",{parentName:"p"},"ref"),", which is a reference to another node in the graph. In this case, ",(0,i.kt)("inlineCode",{parentName:"p"},"ref")," refers to ",(0,i.kt)("inlineCode",{parentName:"p"},"myGain"),", which is the gain node that we created elsewhere in the graph."),(0,i.kt)(l.J,{player:U.main,code:z,mdxType:"Player"}),(0,i.kt)("h3",null,"Other effects"),(0,i.kt)("p",null,"Almost all of the effects from the WebAudio API are reproducible using this method. For example, to use an allpass filter instead of a highpass, import ",(0,i.kt)("inlineCode",{parentName:"p"},"allpass")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"highpass"),". All importable functions can be found in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikesol/purescript-wags/blob/main/src/WAGS/Create/Optionals.purs"},"this module"),"."),(0,i.kt)("h2",null,"Inspiration"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"wags")," is heavily indebted to the ",(0,i.kt)("a",{parentName:"p",href:"https://tidalcycles.org/"},"Tidal Cycles")," project, which inspired its mini-notation. It also makes heavy use of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("a",{parentName:"li",href:"https://purescript.org"},"PureScript Programming Language"),", a purely functional language originally created by ",(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/paf31"},"Phil Freeman"),"."),(0,i.kt)("li",{parentName:"ul"},"cofree comonads, an idea popularized (if not invented) by ",(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/kmett"},"Edward Kmett"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Functional_reactive_programming"},"functional reactive programming"),", a technique popularized by Conal Elliott and Paul Hudak.")),(0,i.kt)("h2",null,"What next?"),(0,i.kt)("p",null,"You could:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"listen to a track on ",(0,i.kt)("a",{parentName:"li",href:"https://wags.fm"},"wags.fm"),". All of the tracks are editable in real-time just like these examples. You could also propose your own track on the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mikesol/wags.fm"},"GitHub")," or leave a suggestion on the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mikesol/wags.fm/issues"},"issues page"),"."),(0,i.kt)("li",{parentName:"ul"},"use ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mikesol/wagsi"},"wagsi")," to ",(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/stronglynormal/status/1459623955719991299"},"DJ your own session")," and collaborate with others as you do. Our community has one jam session a month, and we usually meet up on the ",(0,i.kt)("inlineCode",{parentName:"li"},"#music")," channel of the ",(0,i.kt)("a",{parentName:"li",href:"https://purescript.org/chat"},"PureScript Discord")," server."),(0,i.kt)("li",{parentName:"ul"},"dive into the examples on ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mikesol/purescript-wags-lib"},(0,i.kt)("inlineCode",{parentName:"a"},"purescript-wags-lib"))," for more advanced use cases, including using ",(0,i.kt)("a",{parentName:"li",href:"https://purescript-wags-lib-sector.netlify.app/"},"TensorFlow.js to create markov models")," (code ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mikesol/purescript-wags-lib/tree/main/examples/sector"},"here"),") and ",(0,i.kt)("a",{parentName:"li",href:"https://purescript-wags-lib-sequencer.netlify.app/"},"controlling the music with a mouse")," (code ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mikesol/purescript-wags-lib/tree/main/examples/gamelan"},"here"),")."),(0,i.kt)("li",{parentName:"ul"},"embed ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mikesol/purescript-wags"},"wags")," into your site to create rich interactive audio experiences, including custom ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/AudioWorklet"},"Audio Worklets")," and ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode"},"Analyzers"),".")),(0,i.kt)("p",null,"I wish you lots of satisfaction as you play with wags to create music, noise, or whatever makes your ears perk up. Happy wagging!"))}V.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-crash-course-mdx-0f7d3d10e3968a8538f1.js.map