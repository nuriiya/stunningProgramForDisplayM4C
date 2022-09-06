import textVQAResult from "../test_image/textvqa_run_test.json" assert { type: "json" }
import textVQAQuestion from "../test_image/TextVQA.json" assert { type: "json" }

let whichPicture = 0;
const baseURL = "../test_image/test_images/"

var getOneQuestionID = function (key) {
    return textVQAResult[key].question_id;
};
var getOneAnswer = function (key) {
    return textVQAResult[key].answer;
};
function getOneQuestion(questionID) {
    for (var i = 0; i < textVQAQuestion.data.length; i++) {
        console.log(questionID)
        if (textVQAQuestion.data[i].question_id == questionID) {
            return {
                question: textVQAQuestion.data[i].question,
                imageId: textVQAQuestion.data[i].image_id,
            };
        }
    }
    alert("没找到对应的Question_id");
}


function updateImage(imageId) {
    let imagesrc = document.getElementById("imageNeeded");
    imagesrc.src = baseURL + imageId + ".jpg";
}
function updateResult(question, answer) {
    document.getElementById("question").innerText = question;
    document.getElementById("answer").innerText = answer;
}
// 下方对下一个图片按钮进行赋值操作
document.getElementById("getNextImg").onclick = function () {
    // 更新下一张图片
    let resultInfo = getOneQuestion(getOneQuestionID(whichPicture));
    updateImage(resultInfo.imageId);
    updateResult(resultInfo.question, getOneAnswer(whichPicture));
    if (whichPicture == textVQAResult.length) {
        alert("没有下一张了")
    } else {
        whichPicture++;
    }

}
// 下方对上一个按钮进行赋值操作
document.getElementById("getLastImg").onclick = function () {
    // 更新上一张图片
    let resultInfo = getOneQuestion(getOneQuestionID(whichPicture));
    updateImage(resultInfo.imageId);
    updateResult(resultInfo.question, getOneAnswer(whichPicture));
    if (whichPicture > 0) {
        whichPicture--;
    } else {
        alert("没有上一张了")
    }

}
