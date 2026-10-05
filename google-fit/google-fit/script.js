const ACTIVITIES = [
  {name:"Walking", type:"cardio", hp:1, cal:4,  step:110, km:.09},
  {name:"Running", type:"cardio", hp:2, cal:11, step:160, km:.17},
  {name:"Cycling", type:"cardio", hp:2, cal:8,  step:0,   km:.3},
  {name:"Strength training", type:"strength", hp:2, cal:7, step:0, km:0},
  {name:"Yoga", type:"calm", hp:1, cal:3, step:0, km:0},
  {name:"Stretching", type:"calm", hp:0, cal:2, step:0, km:0}
];
const DEFAULT = {name:"Alex", goals:{steps:10000,heart:30,move:60}, dark:false,
  today:{steps:2400,heart:6,move:18,cal:120,km:1.8}, week:[5200,8100,6400,9800,7300,4100], journal:[]};
let S = JSON.parse(localStorage.getItem("fitState") || "null") || structuredClone(DEFAULT);
const $ = id => document.getElementById(id);
const save = () => localStorage.setItem("fitState", JSON.stringify(S));
const C = {heart:326.7, move:238.8};

function toast(msg){const t=$("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1800);}

function showTab(id){
  document.querySelectorAll(".tab-page").forEach(p=>p.classList.toggle("active",p.id===id));
  document.querySelectorAll(".app-tabs button").forEach(b=>b.classList.toggle("on",b.dataset.tab===id));
  window.scrollTo(0,0);
}
document.querySelectorAll(".app-tabs button").forEach(b=>b.onclick=()=>showTab(b.dataset.tab));
document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>showTab(b.dataset.go));

function render(){
  const t=S.today,g=S.goals,h=new Date().getHours();
  document.body.classList.toggle("dark",S.dark);
  $("today-label").textContent=new Date().toLocaleDateString(undefined,{weekday:"long",month:"short",day:"numeric"});
  $("greet").textContent=h<12?"morning":h<18?"afternoon":"evening";
  document.querySelectorAll(".uname").forEach(e=>e.textContent=S.name);
  $("avatar").textContent=(S.name[0]||"A").toUpperCase();
  $("v-heart").textContent=t.heart;$("v-move").textContent=t.move;
  $("v-steps").textContent=t.steps.toLocaleString();$("v-cal").textContent=t.cal;$("v-km").textContent=t.km.toFixed(1);
  document.querySelector(".g-heart").textContent=g.heart;document.querySelector(".g-move").textContent=g.move;
  const pct=(v,goal)=>Math.min(v/goal,1);
  $("ring-heart").style.strokeDashoffset=C.heart*(1-pct(t.heart,g.heart));
  $("ring-move").style.strokeDashoffset=C.move*(1-pct(t.move,g.move));
  // week chart (6 past days + today)
  const days=[...S.week,t.steps],max=Math.max(...days,g.steps);
  const names=[];for(let i=6;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);names.push(d.toLocaleDateString(undefined,{weekday:"short"}).slice(0,2));}
  $("week-chart").innerHTML=days.map((v,i)=>`<div class="${i===6?"today":""}"><i style="height:${v/max*85}px"></i>${names[i]}</div>`).join("");
  // activity page
  [["steps",t.steps,g.steps],["heart",t.heart,g.heart],["move",t.move,g.move]].forEach(([k,v,goal])=>{
    $("p-"+k).style.width=pct(v,goal)*100+"%";$("p-"+k+"-t").textContent=`${v} / ${goal}`;});
  $("journal").innerHTML=S.journal.map(e=>`<li><span><b>${e.name}</b><small>${e.min} min · ${e.hp} Heart Points · ${e.time}</small></span></li>`).join("");
  $("journal-empty").style.display=S.journal.length?"none":"block";
  $("clear-journal").style.display=S.journal.length?"block":"none";
  // profile form
  $("f-name").value=S.name;$("f-steps").value=g.steps;$("f-heart").value=g.heart;$("f-move").value=g.move;$("f-dark").checked=S.dark;
}

function renderExplore(filter="all"){
  $("activity-list").innerHTML=ACTIVITIES.filter(a=>filter==="all"||a.type===filter)
    .map((a,i)=>`<li><span><b>${a.name}</b><small>${a.hp?a.hp+" Heart Point"+(a.hp>1?"s":"")+" per minute":"No Heart Points, good for recovery"}</small></span><button data-name="${a.name}">Log 20 min</button></li>`).join("");
  document.querySelectorAll("#activity-list button").forEach(b=>b.onclick=()=>logActivity(b.dataset.name,20));
}
document.querySelectorAll(".chip").forEach(c=>c.onclick=()=>{
  document.querySelectorAll(".chip").forEach(x=>x.classList.remove("on"));c.classList.add("on");renderExplore(c.dataset.filter);});

function logActivity(name,min){
  const a=ACTIVITIES.find(x=>x.name===name),t=S.today;
  t.heart+=a.hp*min;t.move+=min;t.cal+=a.cal*min;t.steps+=a.step*min;t.km=+(t.km+a.km*min).toFixed(2);
  S.journal.unshift({name,min,hp:a.hp*min,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})});
  save();render();toast(`${name} logged`);
}

$("save-profile").onclick=()=>{
  const n=$("f-name").value.trim();
  if(!n){toast("Enter a name");return;}
  S.name=n;S.goals={steps:+$("f-steps").value||10000,heart:+$("f-heart").value||30,move:+$("f-move").value||60};
  S.dark=$("f-dark").checked;save();render();toast("Changes saved");
};
$("f-dark").onchange=e=>{S.dark=e.target.checked;save();render();};
$("clear-journal").onclick=()=>{S.journal=[];save();render();toast("Journal cleared");};
$("reset-all").onclick=()=>{if(confirm("Reset all data?")){S=structuredClone(DEFAULT);save();render();toast("Data reset");}};

renderExplore();render();
