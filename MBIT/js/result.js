const copyBtn = document.querySelector('.copy_btn');
const facebookShare = document.querySelector('.facebook_share');

///////// 카카오 공유 코드 /////////

const kakaoShare = document.querySelector('.kakao_share';)
Kakao.init('5ec038ebdfe8be01ceffb6920e50f8b4'); //kakao developers에서 따왔음
// Kakao.isInitialized();

function sendLink() { // ((1)) sendLink로 제공 코드 한 번 감싸고
    let result_url = window.location.href; /// ((2)) 현재 URL 변수에 넣어주는 작업 추가!
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: '나의 개발 유형은?',
          description: '나에게 꼭 맞는 개발 유형을 알아보자!!',
          imageUrl:
            '웹페이지 url 입력', ////// 백엔드 필요
          link: {
            mobileWebUrl: '웹페이지 url 입력',
            webUrl: '웹페이지 url 입력',
            },
        },
        social: {
          likeCount: 286,
          commentCount: 45,
          sharedCount: 845,
        },
        buttons: [
          {
            title: '결과 보러가기',
            link: {
              webUrl: '웹페이지 url 입력',
              mobileWebUrl: '웹페이지 url 입력',
            },
          },
          {
            title: '테스트 하러가기',
            link: {
              webUrl: '웹페이지 url 입력',
              mobileWebUrl: '웹페이지 url 입력',
            },
          },
        ],
    });
  }

  ///////// 카카오 공유 코드 끝 /////////

$(function(){
    let url = window.location.href
    let img = $('.result_img img').attr('src');
    
    $("meta[property='og\\:url']").attr('content', url) //쌍따옴표, 홑따옴표 주의
    $("meta[property='og\\:image']").attr('content', img)
});

function copyUrl(){
    let tmp = document.createElement('input');
    let url = location.href;

    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
	document.execCommand("copy");
    document.body.removeChild(tmp);
    
	alert("URL이 복사되었습니다"); 
}

function sharefacebook() {
    let url = window.location.href;
    let facebook = 'http://www.facebook.com/sharer/sharer.php?u=';
    let link = facebook + url;
    window.open(link);
}

copyBtn.addEventListener('click', copyUrl);
facebookShare.addEventListener('click', sharefacebook);

/////// 카카오 공유 코드 //////
kakaoShare.addEventListener('click', sendLink);
