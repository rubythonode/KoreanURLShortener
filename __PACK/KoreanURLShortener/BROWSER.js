KoreanURLShortener.MAIN=METHOD({run:function(){"use strict";var t;DIV({c:[H1({style:{width:150,margin:"auto",marginTop:40,fontWeight:"bold",position:"relative"},c:[IMG({style:{marginLeft:-20,width:150,height:150},src:KoreanURLShortener.R("logo.png")}),DIV({style:{position:"absolute",right:10,bottom:20},c:".한국"})]}),P({style:{marginTop:10,textAlign:"center"},c:"도메인을 짧게 줄여보자."}),FORM({style:{width:300,margin:"auto",marginTop:10},c:[INPUT({style:{width:"100%",height:40,fontSize:20,textAlign:"center"},name:"url",placeholder:"ex) https://github.com/Hanul"}),INPUT({style:{display:"block",width:150,height:40,margin:"auto",marginTop:10,fontWeight:"bold"},type:"submit",value:"▼ 짧 아 져 라! ▼"})],on:{submit:function(e,n){KoreanURLShortener.LinkModel.create(n.getData(),function(e){t.setHref("http://짧.한국/"+e.id),t.empty(),t.append("http://짧.한국/"+e.id)})}}}),DIV({style:{marginTop:20,textAlign:"center"},c:t=A({style:{fontSize:20,fontWeight:"bold",textShadow:"0 0 150px #EFE4B0, 0 0 60px #EFE4B0, 0 0 10px #EFE4B0"},href:"http://짧.한국/하늘",target:"_blank",c:"http://짧.한국/하늘"})}),DIV({style:{marginTop:40,textAlign:"center",paddingBottom:40},c:[A({href:"https://www.facebook.com/mr.hanul",target:"_blank",c:"심영재"}),"가 만들었다."]})]}).appendTo(BODY)}});