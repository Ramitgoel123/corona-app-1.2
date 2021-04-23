var gameState = "start";
var go, go_Img;
var level;
var yes , no;
var chance ;

function setup() {
  createCanvas(windowWidth,windowHeight);
  go = createSprite(1400,650,50,50);
  yes = createSprite(400,400,50,50);
  no = createSprite(1000,400,50,50)
}

function preload(){
  go_Img = loadImage("start.jpg");
}

function draw() {
  background("black");  

  if (gameState === "start") {
    fill("blue");
    textSize(30);
    text("𝓦𝓮𝓵𝓬𝓸𝓶𝓮 𝓽𝓸 𝓒𝓞𝓡𝓞𝓝𝓐 𝓓𝓔𝓣𝓔𝓒𝓣𝓞𝓡",500,200);
    fill("red")
    text("𝓐𝓷𝓼𝔀𝓮𝓻 𝓪 𝓯𝓮𝔀 𝓺𝓾𝓮𝓼𝓽𝓲𝓸𝓷𝓼 𝓽𝓸 𝓴𝓷𝓸𝔀 𝓲𝓯 𝔂𝓸𝓾 𝓪𝓻𝓮 𝓬𝓸𝓻𝓸𝓷𝓪 𝓹𝓸𝓼𝓲𝓽𝓲𝓿𝓮 𝓸𝓻 𝓬𝓸𝓻𝓸𝓷𝓪 𝓷𝓮𝓰𝓪𝓽𝓲𝓿𝓮",100,300);
    fill("yellow")
    text("𝓛𝓔𝓣'𝓢 𝓖𝓞 !!!",600,400);
    fill("pink")
    textSize(50)
    text("𝓢𝓣𝓐𝓨 𝓗𝓞𝓜𝓔 𝓢𝓣𝓐𝓨 𝓢𝓐𝓕𝓔 !!!",400,600)

    go.addImage("o hey",go_Img);
    go.scale = 0.1

    yes.visible = false;
    no.visible = false;
  }

  drawSprites();

  if(mousePressedOver(go)){
    gameState = "play";
    level = 1;
  }

  if (level === 1) {

    textSize(50)
    fill("white")
    text("ᴅᴏ ʏᴏᴜ ʜᴀᴠᴇ ꜰᴇᴠᴇʀ ?",500,300)

    go.visible = false;
    yes.visible = true;
    no.visible = true;

    if (mousePressedOver(yes)) {
      chance = chance + 5;
      level = level + 1;
    }
  
    if (mousePressedOver(no)) {
      level = level + 1;
    }
  }

  
}