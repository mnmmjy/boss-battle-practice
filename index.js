const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 640;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

//キャラの設定
const IMG_SIZE = 80;
// キャラの配置初期値
let x = 0;
let y = 300;

//ゲームオーバーか否かのフラグ値
let isGameOver = false;
// ゲームクリアか否かのフラグ値
let isGameClear = false;

// ロード時に画面描画の処理が実行されるようにする
window.addEventListener("load", update);

// 画面を更新する関数を定義
function update() {

    if (isGameClear) {

    } else if (isGameOver) {

    } else {
        
    }

    //主人公の画像を表示
    let image = new image(;
        image.src = "img/luffy.png";
        ctx.drawImage(image, x, y, IMG_SIZE, IMG_SIZE);
    )

    window.requestAnimationFrame(update);
}