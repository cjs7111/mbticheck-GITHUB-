// MBTI 데이터
const mbtiData = {
    ENFP: {
        name: "자유로운 영혼",
        description: "ENFP는 에너지 넘치고 창의적인 성격으로, 새로운 경험과 가능성을 추구합니다. 사람들과의 상호작용을 즐기며 긍정적인 태도로 주변을 밝혀줍니다. 즉흥성과 유연성이 강점이지만, 때로는 충동적일 수 있습니다.",
        compatible: "INTJ, INFJ",
        incompatible: "ISFJ, ISTJ",
        celebrities: ["로버트 다우니 주니어", "방탄소년단 RM", "싸이", "화사"]
    },
    INFJ: {
        name: "선지자",
        description: "INFJ는 통찰력 있고 이상주의적인 성격으로, 깊은 의미를 추구합니다. 다른 사람들의 감정을 잘 이해하며 진정한 관계를 소중히 합니다. 내향적이지만 영향력 있는 리더십을 발휘합니다.",
        compatible: "ENFP, ENTP",
        incompatible: "ESTP, ESFP",
        celebrities: ["마틴 루터 킹 주니어", "태연", "박지성", "IU"]
    },
    INTJ: {
        name: "건축가",
        description: "INTJ는 전략적이고 독립적인 성격으로, 장기적인 계획과 비전을 추구합니다. 지적 능력이 뛰어나며 목표 달성에 집중합니다. 때로는 냉정해 보일 수 있지만, 자신이 신뢰하는 사람들에게는 충성스럽습니다.",
        compatible: "ENFP, INFP",
        incompatible: "ESFP, ISFP",
        celebrities: ["일론 머스크", "마크 저커버그", "빌 게이츠", "정유미"]
    },
    ESFP: {
        name: "연예인",
        description: "ESFP는 외향적이고 활동적인 성격으로, 현재의 순간을 즐기기를 좋아합니다. 사람들의 주목을 받는 것을 자연스럽게 느끼며 재미와 즐거움을 추구합니다. 주변 사람들을 활기차게 만드는 재능이 있습니다.",
        compatible: "ISTJ, ISFJ",
        incompatible: "INTJ, INFJ",
        celebrities: ["브루노 마스", "제니", "손흥민", "카리나"]
    }
};

// 테스트 질문
const questions = [
    {
        question: "모임에서 새로운 사람들을 만날 때, 당신은?",
        optionA: "적극적으로 먼저 말을 걸고 주변 사람들과 친해진다",
        optionB: "편하게 느껴질 때까지 사람들을 관찰하고 말을 듣는다",
        scoreA: "E",
        scoreB: "I"
    },
    {
        question: "의사결정을 할 때, 당신은 주로?",
        optionA: "현재의 사실과 구체적인 데이터를 중심으로 판단한다",
        optionB: "미래의 가능성과 전체적인 의미를 생각하며 판단한다",
        scoreA: "S",
        scoreB: "N"
    },
    {
        question: "다른 사람과의 갈등이 생기면, 당신은?",
        optionA: "논리와 객관적인 기준으로 올바른 판단을 한다",
        optionB: "상대방의 감정과 관계를 최우선으로 생각한다",
        scoreA: "T",
        scoreB: "F"
    },
    {
        question: "계획을 세울 때, 당신의 스타일은?",
        optionA: "꼼꼼하게 미리 계획을 세우고 그대로 실행한다",
        optionB: "상황에 따라 유연하게 변경하며 진행한다",
        scoreA: "J",
        scoreB: "P"
    },
    {
        question: "새로운 프로젝트에서 당신의 역할은?",
        optionA: "아이디어를 제시하고 추진력 있게 리드한다",
        optionB: "세부사항을 챙기고 실행 과정을 꼼꼼히 관리한다",
        scoreA: "E",
        scoreB: "I"
    },
    {
        question: "문제를 해결할 때 당신은?",
        optionA: "이전의 경험과 입증된 방법을 사용한다",
        optionB: "새롭고 창의적인 방법을 시도해본다",
        scoreA: "S",
        scoreB: "N"
    },
    {
        question: "직장에서 상사의 피드백을 받을 때?",
        optionA: "감정보다는 실질적인 개선 방안을 듣기 원한다",
        optionB: "자신의 노력이 인정받는 것이 중요하다",
        scoreA: "T",
        scoreB: "F"
    },
    {
        question: "휴가를 계획할 때, 당신은?",
        optionA: "일정을 미리 정하고 계획대로 여행한다",
        optionB: "대체로 정해놓고 현지에서 자유롭게 움직인다",
        scoreA: "J",
        scoreB: "P"
    },
    {
        question: "대사를 해야 할 때, 당신은?",
        optionA: "자연스럽고 즉흥적으로 말한다",
        optionB: "미리 준비하고 생각을 정리한 후 말한다",
        scoreA: "E",
        scoreB: "I"
    },
    {
        question: "삶을 살아가는 방식은?",
        optionA: "지금 이 순간을 최대한 즐기는 것이 중요하다",
        optionB: "미래를 위해 준비하고 계획하는 것이 중요하다",
        scoreA: "P",
        scoreB: "J"
    }
];

// 상태 변수
let currentQuestion = 0;
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
let answers = new Array(questions.length).fill(null);

// 페이지 전환
function showPage(pageName) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageName).classList.add('active');
    window.scrollTo(0, 0);
}

// 테스트 시작
function startTest() {
    currentQuestion = 0;
    scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    answers = new Array(questions.length).fill(null);
    showPage('test');
    loadQuestion();
}

// 질문 로드
function loadQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('optionA').textContent = question.optionA;
    document.getElementById('optionB').textContent = question.optionB;
    
    // 이전 선택 복원
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    if (answers[currentQuestion]) {
        if (answers[currentQuestion] === 'A') {
            document.getElementById('optionA').classList.add('selected');
        } else {
            document.getElementById('optionB').classList.add('selected');
        }
    }
    
    updateProgress();
    updateButtons();
}

// 선택지 선택
function selectOption(option) {
    const question = questions[currentQuestion];
    answers[currentQuestion] = option;
    
    // 선택 표시
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    if (option === 'A') {
        document.getElementById('optionA').classList.add('selected');
    } else {
        document.getElementById('optionB').classList.add('selected');
    }
    
    // 점수 기록
    if (option === 'A') {
        scores[question.scoreA]++;
    } else {
        scores[question.scoreB]++;
    }
    
    updateButtons();
}

// 진행률 업데이트
function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('currentQuestion').textContent = currentQuestion + 1;
}

// 버튼 업데이트
function updateButtons() {
    document.getElementById('prevBtn').disabled = currentQuestion === 0;
    document.getElementById('nextBtn').disabled = answers[currentQuestion] === null;
}

// 이전 질문
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

// 다음 질문
function nextQuestion() {
    if (answers[currentQuestion] !== null) {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            loadQuestion();
        } else {
            // 테스트 완료
            showResults();
        }
    }
}

// 결과 표시
function showResults() {
    // MBTI 타입 계산
    let mbtiType = '';
    mbtiType += scores.E >= scores.I ? 'E' : 'I';
    mbtiType += scores.S >= scores.N ? 'S' : 'N';
    mbtiType += scores.T >= scores.F ? 'T' : 'F';
    mbtiType += scores.J >= scores.P ? 'J' : 'P';
    
    // 4가지 유형으로 제한 (사용자 요청)
    const validTypes = ['ENFP', 'INFJ', 'INTJ', 'ESFP'];
    if (!validTypes.includes(mbtiType)) {
        // 가장 가까운 유형으로 매핑
        mbtiType = findClosestType(mbtiType, validTypes);
    }
    
    const data = mbtiData[mbtiType];
    
    // 결과 페이지 채우기
    document.getElementById('resultType').textContent = mbtiType;
    document.getElementById('resultName').textContent = `🎯 ${data.name}`;
    document.getElementById('resultDescription').textContent = data.description;
    document.getElementById('compatibleType').textContent = data.compatible;
    document.getElementById('incompatibleType').textContent = data.incompatible;
    
    // 유명인 리스트
    const celebrityList = document.getElementById('celebrityList');
    celebrityList.innerHTML = '';
    data.celebrities.forEach(celebrity => {
        const div = document.createElement('div');
        div.className = 'celebrity-item';
        div.innerHTML = `<p>⭐ ${celebrity}</p>`;
        celebrityList.appendChild(div);
    });
    
    showPage('result');
}

// 가장 가까운 유형 찾기
function findClosestType(mbtiType, validTypes) {
    // 4가지 유형에만 매핑하는 로직
    const mappings = {
        'ENFJ': 'ENFP', 'ENTP': 'ENFP',
        'INFP': 'INFJ', 'INTP': 'INFJ',
        'ISTJ': 'INTJ', 'ISTP': 'INTJ',
        'ESFJ': 'ESFP', 'ESTP': 'ESFP'
    };
    
    return mappings[mbtiType] || 'ENFP';
}

// 결과 공유
function shareResult() {
    const resultType = document.getElementById('resultType').textContent;
    const resultName = document.getElementById('resultName').textContent;
    const shareText = `나는 TypeMe 성격 테스트에서 ${resultType} - ${resultName}이 나왔어요! 당신의 성격 유형은 뭘까요?`;
    
    if (navigator.share) {
        navigator.share({
            title: 'TypeMe - MBTI 성격 테스트',
            text: shareText,
            url: window.location.href
        });
    } else {
        // 클립보드에 복사
        navigator.clipboard.writeText(shareText).then(() => {
            alert('공유 메시지가 복사되었습니다!\n' + shareText);
        });
    }
}

// 테스트 재시작
function restartTest() {
    startTest();
}

// 초기 로드
document.addEventListener('DOMContentLoaded', function() {
    console.log('TypeMe MBTI 테스트 웹사이트가 로드되었습니다.');
});