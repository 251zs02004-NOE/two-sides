
// HTMLから必要な要素を取得する
const faceCard = document.getElementById("faceCard");
const faceLabel = document.getElementById("faceLabel");
const faceTitle = document.getElementById("faceTitle");
const faceDescription = document.getElementById("faceDescription");

// キャラクター紹介ページ以外では処理しない
if (faceCard) {

    // HTMLに設定した文章を取得する
    const publicTitle = faceCard.dataset.publicTitle;
    const publicDescription = faceCard.dataset.publicDescription;
    const privateTitle = faceCard.dataset.privateTitle;
    const privateDescription = faceCard.dataset.privateDescription;

    // マウスを乗せたとき
    faceCard.addEventListener("mouseenter", function() {
        faceLabel.textContent = "PRIVATE FACE";
        faceTitle.textContent = privateTitle;
        faceDescription.textContent = privateDescription;
    });

    // マウスを離したとき
    faceCard.addEventListener("mouseleave", function() {
        faceLabel.textContent = "PUBLIC FACE";
        faceTitle.textContent = publicTitle;
        faceDescription.textContent = publicDescription;
    });
}

// 表示する文章を取得する
