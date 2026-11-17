
<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<title>Kite Flying Simulator 3D</title>
<style>
*{box-sizing:border-box}
body{margin:0;overflow:hidden;background:#83c9ed;color:white;font-family:Arial}
canvas{display:block}
button{border:0;border-radius:12px;padding:12px 15px;background:#167fd0;color:white;font-weight:bold;cursor:pointer;box-shadow:0 3px 10px #0003;touch-action:none}
button:active{transform:scale(.94)}
#hud{position:fixed;top:10px;left:10px;display:flex;flex-wrap:wrap;gap:6px;z-index:5;max-width:75%}
.panel{background:#102b40dd;border:1px solid #ffffff33;border-radius:10px;padding:8px 11px;font-size:12px;backdrop-filter:blur(8px)}
#right{position:fixed;right:10px;top:10px;display:grid;gap:6px;z-index:5}
#right button{font-size:12px;min-width:112px}
#stats{position:fixed;left:10px;top:105px;background:#102b40cc;padding:9px 12px;border-radius:10px;z-index:4;font-size:11px;line-height:1.8}
#message{position:fixed;bottom:105px;left:50%;transform:translateX(-50%);background:#102b40dd;padding:10px 16px;border-radius:12px;z-index:5;font-size:13px;text-align:center;max-width:85%}
#move{position:fixed;bottom:14px;left:12px;display:grid;grid-template-columns:48px 48px 48px;grid-template-rows:48px 48px;gap:3px;z-index:6}
#move button{padding:0;background:#173e5dcc;font-size:20px}
#moveUp{grid-column:2;grid-row:1}
#moveLeft{grid-column:1;grid-row:2}
#moveDown{grid-column:2;grid-row:2}
#moveRight{grid-column:3;grid-row:2}
#flightControls{position:fixed;bottom:17px;right:12px;display:flex;gap:7px;z-index:6}
#flightControls button{min-width:62px}
#kiteLeft,#kiteRight{background:#a64fc9}
#action{background:#15a45e}
#shop,#custom{position:fixed;inset:0;background:#061827dd;z-index:10;display:none;place-items:center}
.modal{width:min(380px,92vw);max-height:85vh;overflow:auto;background:#173650;padding:20px;border-radius:18px}
.modal button{display:block;width:100%;margin:7px 0}
.item{padding:10px;margin:7px 0;background:#ffffff12;border-radius:10px}
@media(max-width:650px){
 .panel{font-size:10px;padding:7px}
 #right button{font-size:10px;min-width:88px;padding:9px}
 #stats{top:95px;font-size:10px;padding:7px}
 #move{transform:scale(.85);transform-origin:bottom left}
 #flightControls{right:8px;bottom:20px;gap:5px}
 #flightControls button{font-size:11px;padding:13px 9px;min-width:54px}
 #message{bottom:125px;font-size:11px}
}
</style>
</head>
<body>

<div id="hud">
 <div class="panel">💰 <b id="money">0</b></div>
 <div class="panel">⬆️ <b id="altitude">0</b> m</div>
 <div class="panel">↔️ <b id="distance">0</b> m</div>
 <div class="panel">🌬️ <b id="wind">8</b> km/h</div>
 <div class="panel">🏆 <b id="record">0</b> m</div>
</div>

<div id="stats">
 <div>🧵 Dây: <b id="rope">35</b> m</div>
 <div>⚡ Căng dây: <b id="tension">0</b>%</div>
 <div>🧭 Hướng gió: <b id="direction">Tây</b></div>
 <div>🌤️ Thời tiết: <b id="weather">Nắng đẹp</b></div>
 <div>🪁 Trạng thái: <b id="status">Đi bộ</b></div>
</div>

<div id="right">
 <button onclick="openShop()">🛒 Cửa hàng</button>
 <button onclick="openCustom()">🎨 Trang trí diều</button>
 <button onclick="changeWeather()">🌦️ Thời tiết</button>
 <button onclick="changeCamera()">📷 Camera</button>
</div>

<!-- Nhân vật luôn có thể di chuyển -->
<div id="move">
 <button id="moveUp">▲</button>
 <button id="moveLeft">◀</button>
 <button id="moveDown">▼</button>
 <button id="moveRight">▶</button>
</div>

<!-- Nút điều khiển diều, chỉ hiện sau khi ném -->
<div id="flightControls" style="display:none">
 <button id="kiteLeft">◀ Diều</button>
 <button id="reel">⬆ Kéo dây</button>
 <button id="letout">⬇ Nhả dây</button>
 <button id="kiteRight">Diều ▶</button>
</div>

<div id="message">Đi đến bãi cỏ rồi bấm Cầm diều!</div>
<button id="action" onclick="mainAction()" style="position:fixed;bottom:17px;left:50%;transform:translateX(-50%);z-index:7">🪁 Cầm diều</button>

<div id="shop">
 <div class="modal">
  <h2>🛒 Cửa hàng</h2>
  <p>Tiền: <b id="shopMoney">0</b></p>
  <div id="shopItems"></div>
  <button onclick="closeShop()" style="background:#555">Đóng</button>
 </div>
</div>

<div id="custom">
 <div class="modal">
  <h2>🎨 Trang trí diều</h2>
  <div id="colors"></div>
  <button onclick="addStars()">⭐ Thêm sao</button>
  <button onclick="addTail()">🎀 Thêm đuôi</button>
  <button onclick="closeCustom()" style="background:#555">Đóng</button>
 </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script>
(() => {
"use strict";
const $=id=>document.getElementById(id);
if(!window.THREE){
 $("message").textContent="Không tải được Three.js. Hãy kiểm tra Internet.";
 return;
}

//==================================================
// THẾ GIỚI 3D
//==================================================
const scene=new THREE.Scene();
scene.background=new THREE.Color(0x83c9ed);
scene.fog=new THREE.Fog(0x83c9ed,140,600);

const camera=new THREE.PerspectiveCamera(65,innerWidth/innerHeight,.1,1500);
const renderer=new THREE.WebGLRenderer({antialias:true});
renderer.setSize(innerWidth,innerHeight);
renderer.setPixelRatio(Math.min(devicePixelRatio,2));
renderer.shadowMap.enabled=true;
renderer.shadowMap.type=THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

scene.add(new THREE.HemisphereLight(0xdaf3ff,0x526c43,2));
const sun=new THREE.DirectionalLight(0xfff0d4,2);
sun.position.set(-50,100,50);
sun.castShadow=true;
scene.add(sun);

const ground=new THREE.Mesh(
 new THREE.PlaneGeometry(1200,1200),
 new THREE.MeshStandardMaterial({color:0x65a94e,roughness:1})
);
ground.rotation.x=-Math.PI/2;
ground.position.y=-.15;
ground.receiveShadow=true;
scene.add(ground);

function path(x,z,w,d){
 const m=new THREE.Mesh(
  new THREE.PlaneGeometry(w,d),
  new THREE.MeshStandardMaterial({color:0xb9a17e})
 );
 m.rotation.x=-Math.PI/2;
 m.position.set(x,.01,z);
 scene.add(m);
}
path(0,-70,12,350);
path(-50,-80,90,6);

const lake=new THREE.Mesh(
 new THREE.CircleGeometry(22,48),
 new THREE.MeshStandardMaterial({color:0x43b7d4,roughness:.25})
);
lake.rotation.x=-Math.PI/2;
lake.position.set(60,.02,-80);
scene.add(lake);

// Cây
const trees=[];
function makeTree(x,z){
 const g=new THREE.Group();
 const trunk=new THREE.Mesh(
  new THREE.CylinderGeometry(.3,.45,4,8),
  new THREE.MeshStandardMaterial({color:0x79512e})
 );
 trunk.position.y=2;
 g.add(trunk);
 const leaves=new THREE.Mesh(
  new THREE.SphereGeometry(2.6,12,10),
  new THREE.MeshStandardMaterial({color:0x287d3d})
 );
 leaves.position.y=4.7;
 g.add(leaves);
 g.position.set(x,0,z);
 g.traverse(o=>{if(o.isMesh)o.castShadow=true});
 scene.add(g);
 trees.push(g);
}
for(let i=0;i<100;i++){
 const x=(Math.random()-.5)*280;
 const z=-Math.random()*320;
 if(Math.abs(x)<17 && z>-180)continue;
 makeTree(x,z);
}

// Mây
const clouds=[];
for(let i=0;i<25;i++){
 const g=new THREE.Group();
 const mat=new THREE.MeshStandardMaterial({color:0xffffff});
 for(let j=0;j<5;j++){
  const m=new THREE.Mesh(new THREE.SphereGeometry(3+Math.random()*2,12,10),mat);
  m.position.set(j*3,Math.random()*1.5,Math.random()*2);
  m.scale.y=.65;
  g.add(m);
 }
 g.position.set((Math.random()-.5)*400,35+Math.random()*60,-Math.random()*300);
 scene.add(g);
 clouds.push(g);
}

//==================================================
// NHÂN VẬT
//==================================================
function createPerson(shirtColor,pantsColor){
 const root=new THREE.Group();
 const shirt=new THREE.MeshStandardMaterial({color:shirtColor});
 const pants=new THREE.MeshStandardMaterial({color:pantsColor});
 const skin=new THREE.MeshStandardMaterial({color:0xe8b891});
 const hair=new THREE.MeshStandardMaterial({color:0x30251f});
 const eye=new THREE.MeshStandardMaterial({color:0x222222});
 const limbs=[];

 function part(parent,geo,mat,x,y,z){
  const m=new THREE.Mesh(geo,mat);
  m.position.set(x,y,z);
  m.castShadow=true;
  parent.add(m);
  return m;
 }

 part(root,new THREE.CylinderGeometry(.48,.57,1.55,14),shirt,0,2.25,0);
 part(root,new THREE.CylinderGeometry(.15,.15,.25,10),skin,0,3.12,0);
 part(root,new THREE.SphereGeometry(.46,16,14),skin,0,3.55,0);
 part(root,new THREE.SphereGeometry(.47,14,10,0,Math.PI*2,0,Math.PI*.55),hair,0,3.73,0);
 part(root,new THREE.SphereGeometry(.055,8,8),eye,-.15,3.58,.4);
 part(root,new THREE.SphereGeometry(.055,8,8),eye,.15,3.58,.4);

 for(const side of [-1,1]){
  const leg=new THREE.Group();
  leg.position.set(side*.24,1.5,0);
  root.add(leg);
  part(leg,new THREE.CylinderGeometry(.17,.2,1.1,10),pants,0,-.45,0);
  part(leg,new THREE.SphereGeometry(.2,8,8),pants,0,-.95,.12);
  limbs.push({obj:leg,type:"leg",side});

  const arm=new THREE.Group();
  arm.position.set(side*.57,2.75,0);
  root.add(arm);
  part(arm,new THREE.CylinderGeometry(.13,.16,.95,10),skin,0,-.35,0);
  limbs.push({obj:arm,type:"arm",side});
 }
 return {root,limbs};
}

const player=createPerson(0x247bd2,0x26384d);
player.root.position.set(0,0,8);
scene.add(player.root);

// NPC
const npcs=[];
const npcColors=[0xd94c4c,0xf1b73c,0x9866cf,0x37a98c,0xe6e6e6,0xdf7a38];
for(let i=0;i<10;i++){
 const n=createPerson(npcColors[i%npcColors.length],0x35445a);
 n.root.position.set((Math.random()-.5)*80,0,-20-Math.random()*130);
 scene.add(n.root);
 npcs.push({
  ...n,
  cx:n.root.position.x,
  cz:n.root.position.z,
  angle:Math.random()*6.28,
  speed:.5+Math.random()*.8,
  radius:5+Math.random()*13,
  phase:Math.random()*5
 });
}

//==================================================
// DIỀU 3D
//==================================================
const kite=new THREE.Group();
const kiteColors=[0xe74352,0x269ee9,0xffc32c,0x9b60df,0x25ad83];
const kiteMats=kiteColors.map(c=>new THREE.MeshStandardMaterial({color:c,side:THREE.DoubleSide}));
function triangle(a,b,c,mat){
 const geo=new THREE.BufferGeometry();
 geo.setAttribute("position",new THREE.Float32BufferAttribute([...a,...b,...c],3));
 geo.computeVertexNormals();
 const m=new THREE.Mesh(geo,mat);
 kite.add(m);
 m.castShadow=true;
 return m;
}
triangle([0,0,.05],[-3.8,-4.8,.05],[0,-7,.05],kiteMats[0]);
triangle([0,0,.05],[0,-7,.05],[3.8,-4.8,.05],kiteMats[1]);
triangle([0,0,.05],[0,4.8,.05],[-3.8,-4.8,.05],kiteMats[2]);
triangle([0,0,.05],[3.8,-4.8,.05],[0,4.8,.05],kiteMats[3]);

const stickMat=new THREE.MeshStandardMaterial({color:0xffe7aa});
function rod(a,b){
 const d=new THREE.Vector3().subVectors(b,a);
 const m=new THREE.Mesh(new THREE.CylinderGeometry(.045,.045,d.length(),8),stickMat);
 m.position.copy(a).add(b).multiplyScalar(.5);
 m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),d.normalize());
 kite.add(m);
}
rod(new THREE.Vector3(0,-7,.1),new THREE.Vector3(0,4.8,.1));
rod(new THREE.Vector3(-3.8,-4.8,.1),new THREE.Vector3(3.8,-4.8,.1));

const stars=new THREE.Group();
kite.add(stars);
function addStars(){
 for(let i=0;i<3;i++){
  const m=new THREE.Mesh(
   new THREE.SphereGeometry(.3+Math.random()*.3,10,8),
   new THREE.MeshStandardMaterial({color:[0xffffff,0xffdf37,0x4ce5ff,0xff7fb1][Math.floor(Math.random()*4)]})
  );
  m.position.set((Math.random()-.5)*4,Math.random()*6-2,.2);
  stars.add(m);
 }
}
addStars();

const tail=new THREE.Group();
kite.add(tail);
function addTail(){
 const colors=[0xffd43b,0x39c9ff,0xff78a5,0x9c77ff];
 for(let i=0;i<8;i++){
  const m=new THREE.Mesh(
   new THREE.BoxGeometry(.65,.8,.12),
   new THREE.MeshStandardMaterial({color:colors[i%4]})
  );
  m.position.set(Math.sin(i*.65)*.4,-8-i*1.45,.1);
  tail.add(m);
 }
}
addTail();
scene.add(kite);
kite.visible=false;

const stringLine=new THREE.Line(
 new THREE.BufferGeometry(),
 new THREE.LineBasicMaterial({color:0xffffff})
);
scene.add(stringLine);

//==================================================
// TRẠNG THÁI
//==================================================
let state="walking";
let money=0,height=0,distance=0,record=0;
let wind=8,windAngle=0,gust=0;
let weatherIndex=0;
let lineLength=35,tension=0;
let kiteLevel=0,ropeLevel=0,stabilityLevel=0;
let cameraMode=0;
let keys={};
let reelHeld=false;
let steer=0;
let launchTime=0,walkTime=0,earnTime=0;
let flightSeconds=0;
let playerRetreat=0;
let kiteVelocity=new THREE.Vector3();
let gustTimer=0;
let last=performance.now();
let clockTime=12;

const weatherList=[
 {name:"Nắng đẹp",wind:8,lift:1},
 {name:"Gió nhẹ",wind:4,lift:.65},
 {name:"Gió vừa",wind:13,lift:1.15},
 {name:"Gió mạnh",wind:23,lift:1.4},
 {name:"Gió giật",wind:33,lift:1.1},
 {name:"Mưa nhẹ",wind:15,lift:.75}
];

//==================================================
// UI
//==================================================
function msg(s){$("message").textContent=s}
function updateUI(){
 $("money").textContent=Math.floor(money);
 $("altitude").textContent=Math.floor(height);
 $("distance").textContent=Math.floor(distance);
 $("wind").textContent=Math.floor(wind);
 $("record").textContent=Math.floor(record);
 $("rope").textContent=Math.floor(lineLength);
 $("tension").textContent=Math.floor(tension);
 $("weather").textContent=weatherList[weatherIndex].name;
 $("status").textContent=state;
 $("direction").textContent=["Tây","Tây Bắc","Bắc","Đông Bắc","Đông","Đông Nam","Nam","Tây Nam"][Math.round(windAngle/(Math.PI/4)+8)%8];
 $("shopMoney").textContent=Math.floor(money);
}
function setFlightControls(show){
 $("flightControls").style.display=show?"flex":"none";
}
function setAction(text){
 $("action").textContent=text;
}

//==================================================
// ĐIỀU KHIỂN NHÂN VẬT
//==================================================
function bindMove(id,key){
 const b=$(id);
 b.addEventListener("pointerdown",e=>{
  e.preventDefault();
  keys[key]=true;
 });
 ["pointerup","pointerleave","pointercancel"].forEach(ev=>{
  b.addEventListener(ev,()=>keys[key]=false);
 });
}
bindMove("moveUp","forward");
bindMove("moveDown","back");
bindMove("moveLeft","left");
bindMove("moveRight","right");

addEventListener("keydown",e=>{
 const k=e.key.toLowerCase();
 if(["w","a","s","d","arrowleft","arrowright"].includes(k))e.preventDefault();
 if(k==="w")keys.forward=true;
 if(k==="s")keys.back=true;
 if(k==="a")keys.left=true;
 if(k==="d")keys.right=true;
 if(k==="arrowleft"||k==="q")keys.kiteLeft=true;
 if(k==="arrowright"||k==="e")keys.kiteRight=true;
 if(k===" " && state==="holding")mainAction();
});
addEventListener("keyup",e=>{
 const k=e.key.toLowerCase();
 if(k==="w")keys.forward=false;
 if(k==="s")keys.back=false;
 if(k==="a")keys.left=false;
 if(k==="d")keys.right=false;
 if(k==="arrowleft"||k==="q")keys.kiteLeft=false;
 if(k==="arrowright"||k==="e")keys.kiteRight=false;
});

// Điều khiển diều trên điện thoại
function bindHold(id,callback){
 const b=$(id);
 b.addEventListener("pointerdown",e=>{e.preventDefault();callback(true)});
 ["pointerup","pointerleave","pointercancel"].forEach(ev=>b.addEventListener(ev,()=>callback(false)));
}
bindHold("kiteLeft",v=>keys.kiteLeft=v);
bindHold("kiteRight",v=>keys.kiteRight=v);
bindHold("reel",v=>reelHeld=v);
bindHold("letout",v=>keys.release=v);

//==================================================
// CẦM – CHẠY – NÉM DIỀU
//==================================================
function mainAction(){
 if(state==="walking"||state==="fallen"){
  if(Math.abs(player.root.position.x)>35||player.root.position.z>25){
   msg("Hãy đi đến bãi cỏ rộng để thả diều!");
   return;
  }
  state="holding";
  kite.visible=true;
  setAction("🏃 Chạy & ném");
  msg("Bạn đang cầm diều. Bấm tiếp để chạy lấy đà!");
  return;
 }
 if(state==="holding"){
  state="running";
  launchTime=0;
  setAction("Đang chạy...");
  msg("Nhân vật đang chạy lấy đà...");
 }
}
window.mainAction=mainAction;

function startThrow(){
 state="throwing";
 launchTime=0;
 playerRetreat=0;
 msg("Nhân vật đang ném diều!");
}

function finishThrow(){
 state="flying";
 kiteVelocity.set(0,4.5,-4);
 flightSeconds=0;
 playerRetreat=0;
 setFlightControls(true);
 setAction("🪁 Đang bay");
 msg("Diều đã được ném! Camera chuyển sang theo dõi diều.");
}

//==================================================
// CAMERA THEO DIỀU VÀ NHÂN VẬT
//==================================================
const cameraTarget=new THREE.Vector3();
const cameraPosition=new THREE.Vector3();

function updateCamera(dt){
 if(cameraMode===0 && state==="flying"){
  // Camera theo diều nhưng vẫn nhìn thấy nhân vật bên dưới
  const mid=new THREE.Vector3(
   kite.position.x*.72+player.root.position.x*.28,
   kite.position.y*.75+player.root.position.y*.25,
   kite.position.z*.72+player.root.position.z*.28
  );
  cameraTarget.set(mid.x,mid.y,mid.z);

  cameraPosition.set(
   mid.x+12,
   Math.max(10,mid.y+9),
   mid.z+27
  );
 }else if(cameraMode===1){
  cameraTarget.copy(player.root.position);
  cameraTarget.y+=2.5;
  cameraPosition.set(
   player.root.position.x+12,
   9,
   player.root.position.z+22
  );
 }else{
  const target=kite.visible?kite.position:player.root.position;
  cameraTarget.copy(target);
  cameraPosition.set(target.x+17,target.y+12,target.z+27);
 }

 camera.position.lerp(cameraPosition,Math.min(1,dt*3.5));
 camera.lookAt(cameraTarget);
}

//==================================================
// DÂY DIỀU
//==================================================
function updateString(){
 if(!kite.visible)return;
 const hand=new THREE.Vector3(
  player.root.position.x+.48,
  2.7,
  player.root.position.z-.25
 );
 const pts=[];
 for(let i=0;i<=35;i++){
  const t=i/35;
  const p=hand.clone().lerp(kite.position,t);
  p.y-=Math.sin(t*Math.PI)*Math.min(2,tension*.025);
  pts.push(p);
 }
 stringLine.geometry.dispose();
 stringLine.geometry=new THREE.BufferGeometry().setFromPoints(pts);
}

//==================================================
// CỬA HÀNG
//==================================================
const upgrades=[
 {name:"Diều cánh lớn",price:100,desc:"Tăng lực nâng",buy:()=>kiteLevel++},
 {name:"Dây dài",price:150,desc:"Tăng phạm vi bay",buy:()=>ropeLevel++},
 {name:"Dây chắc",price:250,desc:"Giảm tác động gió giật",buy:()=>stabilityLevel++},
 {name:"Diều siêu nhẹ",price:400,desc:"Tăng khả năng bay",buy:()=>kiteLevel+=2},
 {name:"Cuộn dây tốt",price:550,desc:"Tăng khả năng kiểm soát",buy:()=>ropeLevel+=2}
];
window.openShop=()=>{
 $("shop").style.display="grid";
 $("shopItems").innerHTML="";
 upgrades.forEach(u=>{
  const div=document.createElement("div");
  div.className="item";
  div.textContent=u.name+" – "+u.desc+" – "+u.price+" xu";
  const b=document.createElement("button");
  b.textContent="Mua";
  b.onclick=()=>{
   if(money<u.price){msg("Không đủ tiền!");return}
   money-=u.price;
   u.buy();
   u.price=Math.floor(u.price*1.6);
   openShop();
   updateUI();
  };
  div.appendChild(b);
  $("shopItems").appendChild(div);
 });
};
window.closeShop=()=>$("shop").style.display="none";

//==================================================
// TRANG TRÍ
//==================================================
window.openCustom=()=>{
 $("custom").style.display="grid";
 $("colors").innerHTML="";
 kiteColors.forEach((c,i)=>{
  const b=document.createElement("button");
  b.style.background="#"+c.toString(16).padStart(6,"0");
  b.textContent="Màu "+(i+1);
  b.onclick=()=>{
   kiteMats.forEach((m,j)=>m.color.setHex(kiteColors[(i+j)%kiteColors.length]));
   msg("Đã đổi màu diều!");
  };
  $("colors").appendChild(b);
 });
};
window.closeCustom=()=>$("custom").style.display="none";
window.addStars=()=>{addStars();msg("Đã thêm sao vào diều!")};
window.addTail=()=>{addTail();msg("Đã thêm đuôi diều!")};

//==================================================
// THỜI TIẾT
//==================================================
window.changeWeather=()=>{
 weatherIndex=(weatherIndex+1)%weatherList.length;
 wind=weatherList[weatherIndex].wind;
 msg("Thời tiết: "+weatherList[weatherIndex].name);
 updateUI();
};
window.changeCamera=()=>{
 cameraMode=(cameraMode+1)%3;
 msg(["Camera theo dõi diều","Camera nhân vật","Camera toàn cảnh diều"][cameraMode]);
};

//==================================================
// VÒNG LẶP
//==================================================
function animate(now){
 requestAnimationFrame(animate);
 const dt=Math.min((now-last)/1000,.035);
 last=now;

 const w=weatherList[weatherIndex];
 gustTimer-=dt;
 if(gustTimer<=0){
  gustTimer=2+Math.random()*3;
  gust=(Math.random()-.5)*wind*.6;
  windAngle+=(Math.random()-.5)*.6;
 }
 wind+=(w.wind-wind)*dt*.12;

 if(state==="walking"||state==="holding"||state==="running"||state==="flying"){
  // Nhân vật có thể di chuyển cả khi diều đang bay
  const forward=(keys.forward?1:0)-(keys.back?1:0);
  const sideways=(keys.right?1:0)-(keys.left?1:0);
  const moving=forward!==0||sideways!==0;
  const speed=state==="running"?7.5:4.5;

  player.root.position.z-=forward*speed*dt;
  player.root.position.x+=sideways*speed*dt;
  player.root.position.x=THREE.MathUtils.clamp(player.root.position.x,-110,110);
  player.root.position.z=THREE.MathUtils.clamp(player.root.position.z,-250,40);

  if(moving){
   player.root.rotation.y=Math.atan2(sideways,-forward);
  }
  walkTime+=dt*(state==="running"?12:7);
  player.limbs.forEach(l=>{
   const swing=moving?Math.sin(walkTime)*.65:0;
   l.obj.rotation.x=swing*(l.type==="arm"?-1:1);
  });
 }

 // Cầm diều
 if(state==="holding"){
  kite.visible=true;
  kite.position.set(player.root.position.x+1,3.8,player.root.position.z-1);
  kite.rotation.z=-.25;
 }

 // Chạy lấy đà
 if(state==="running"){
  launchTime+=dt;
  player.root.position.z-=7*dt;
  if(launchTime>=1.1)startThrow();
 }

 // Ném diều
 if(state==="throwing"){
  launchTime+=dt;
  const t=Math.min(launchTime/1.15,1);
  kite.position.set(
   player.root.position.x+.7+Math.sin(t*Math.PI)*1.4,
   3.5+Math.sin(t*Math.PI/2)*7,
   player.root.position.z-2-t*5
  );
  kite.rotation.z=-.4+t*.6;

  player.limbs.forEach(l=>{
   if(l.type==="arm"&&l.side===1)l.obj.rotation.x=-1.5+Math.sin(t*Math.PI)*.3;
  });

  if(t>=1){
   finishThrow();
  }
 }

 // Sau khi ném, nhân vật chạy lùi khỏi vị trí ném
 if(state==="flying" && playerRetreat<1){
  const retreatSpeed=5;
  const amount=Math.min(retreatSpeed*dt,4-playerRetreat);
  player.root.position.z+=amount;
  playerRetreat+=amount;
  player.root.rotation.y=Math.PI;
  player.limbs.forEach(l=>{
   l.obj.rotation.x=Math.sin(now*.018)*(l.type==="leg"?.6:.35);
  });
 }

 // Vật lý diều
 if(state==="flying"){
  flightSeconds+=dt;
  const windPower=wind/10*w.lift;
  const liftForce=windPower*.85*(1+kiteLevel*.14);
  const gravity=1.65;

  // Điều khiển hướng diều trái/phải
  const steering=(keys.kiteRight?1:0)-(keys.kiteLeft?1:0);
  steer=steering;
  kiteVelocity.x+=steering*5*dt;
  kiteVelocity.x+=Math.cos(windAngle)*windPower*.08*dt;
  kiteVelocity.z+=Math.sin(windAngle)*windPower*.08*dt;

  // Kéo và nhả dây
  if(reelHeld)lineLength=Math.max(8,lineLength-10*dt);
  if(keys.release)lineLength=Math.min(100+ropeLevel*30,lineLength+12*dt);

  // Lực nâng và trọng lực
  kiteVelocity.y+=(liftForce-gravity)*dt;
  kiteVelocity.y+=gust*.025*dt;
  kiteVelocity.y-=.35*dt;

  // Ổn định và giới hạn vận tốc
  kiteVelocity.x*=Math.pow(.92,dt*10);
  kiteVelocity.z*=Math.pow(.96,dt*10);
  kiteVelocity.y=THREE.MathUtils.clamp(kiteVelocity.y,-4,7);
  kiteVelocity.x=THREE.MathUtils.clamp(kiteVelocity.x,-6,6);
  kiteVelocity.z=THREE.MathUtils.clamp(kiteVelocity.z,-8,5);

  kite.position.addScaledVector(kiteVelocity,dt);

  // Giới hạn dây tính từ tay người chơi
  const hand=new THREE.Vector3(
   player.root.position.x,
   2.5,
   player.root.position.z
  );
  const diff=kite.position.clone().sub(hand);
  const actualLength=diff.length();
  const maxLength=lineLength*.8;
  tension=THREE.MathUtils.clamp((actualLength/maxLength-.7)*180,0,100);

  if(actualLength>maxLength){
   const dir=diff.normalize();
   kite.position.copy(hand.clone().addScaledVector(dir,maxLength));
   const outward=kiteVelocity.dot(dir);
   if(outward>0)kiteVelocity.addScaledVector(dir,-outward*.85);
  }

  // Chuyển động diều
  kite.rotation.z=Math.sin(now*.002)*.14-kiteVelocity.x*.035;
  kite.rotation.x=Math.sin(now*.0015)*.12;
  kite.rotation.y=steering*.12+Math.sin(now*.001)*.15;
  tail.rotation.z=Math.sin(now*.004)*.12;

  height=kite.position.y;
  distance=Math.sqrt(
   Math.pow(kite.position.x-player.root.position.x,2)+
   Math.pow(kite.position.z-player.root.position.z,2)
  );
  record=Math.max(record,height);

  // Tiền thưởng
  earnTime+=dt;
  if(earnTime>=1){
   earnTime=0;
   money+=Math.max(1,Math.floor(height*.06+distance*.025+windPower*.4));
  }

  if(height<=1.5){
   height=0;
   state="fallen";
   kite.visible=false;
   setFlightControls(false);
   setAction("🪁 Nhặt diều");
   msg("Diều đã rơi! Di chuyển đến gần và nhặt lại.");
  }
 }

 // NPC
 npcs.forEach(n=>{
  n.angle+=dt*n.speed*.12;
  n.root.position.x=n.cx+Math.cos(n.angle)*n.radius;
  n.root.position.z=n.cz+Math.sin(n.angle)*n.radius;
  n.root.rotation.y=-n.angle;
  n.phase+=dt*5;
  n.limbs.forEach(l=>{
   l.obj.rotation.x=Math.sin(n.phase)*(l.type==="leg"?.4:.2);
  });
 });

 clouds.forEach(c=>{
  c.position.x+=wind*.012*dt;
  if(c.position.x>250)c.position.x=-250;
 });
 trees.forEach((t,i)=>t.rotation.z=Math.sin(now*.0007+i)*.015);

 // Ngày đêm
 clockTime+=dt*.008;
 const daylight=(Math.sin(clockTime)+1)/2;
 sun.intensity=.45+daylight*1.8;

 updateString();
 updateCamera(dt);
 updateUI();
 renderer.render(scene,camera);
}

//==================================================
// KHỞI ĐỘNG
//==================================================
updateUI();
requestAnimationFrame(animate);

addEventListener("resize",()=>{
 camera.aspect=innerWidth/innerHeight;
 camera.updateProjectionMatrix();
 renderer.setSize(innerWidth,innerHeight);
});
})();
</script>
</body>
</html>
