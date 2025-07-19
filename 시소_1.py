from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel
from typing import Optional

# --- FastAPI 앱 및 템플릿 설정 ---
app = FastAPI()
templates = Jinja2Templates(directory="templates")

# --- 신규 설정 데이터: 사용자가 제공한 목록 ---
config_data = {
    "hobbies": [
        "박물관", "낚시", "등산", "베이킹", "맛집", "크루즈", "쇼핑", "온천",
        "캠핑", "페스티벌", "테마파크", "골프", "사진", "스키", "농촌체험",
        "템플", "승마", "역사", "바다", "아쿠아리움", "문화명소", "글쓰기", "힐링"
    ],
    "locations": [
        "서울", "부산", "제주", "강릉", "춘천", "경기", "강원", 
        "대전", "세종", "충남", "충북", "울산", "경남", "경북", 
        "대구", "광주", "전남", "전북", "기장", "정선", "남해", "강화도", "속초"
    ]
}

# --- Mock Data (새로운 키워드에 맞게 태그 정비) ---
mock_data = {
    "journeys": [
        {"id": 1, "type": "여행", "title": "제주 힐링 여름 여정", "price": 280000, "region": "제주", "description": "푸른 제주의 자연 속에서 즐기는 편안한 힐링 여행입니다.", "schedule": ["1일차: 제주공항 도착 -> 곽지해수욕장 산책 -> 애월 카페거리", "2일차: 사려니숲길 걷기 -> 흑돼지 맛집 탐방 -> 숙소 복귀"], "tags": ["#힐링여름", "#걷기최소"]},
        {"id": 2, "type": "여행", "title": "전북 맛집 투어", "price": 309000, "region": "전북", "description": "전주의 유명 맛집들을 탐방하며 미식의 즐거움을 느껴보세요.", "schedule": ["1일차: 전주 한옥마을 도착 -> 비빔밥 점심 -> 막걸리 골목 체험", "2일차: 남부시장 순대국밥 -> 전동성당 관람 -> 서울 복귀"], "tags": ["#맛집투어", "#걷기보통"]},
        {"id": 3, "type": "클래스", "title": "[우리 동네] 에세이 한 문장 글쓰기", "price": 29000, "region": "서울 서초구", "description": "방배동 북카페에서 에세이 작가와 함께하는 글쓰기 클래스입니다.", "schedule": ["매주 수요일 오후 2시 (총 4회)"], "tags": ["#글쓰기", "#정적활동"]},
        {"id": 4, "type": "여행", "title": "경주 역사 탐방", "price": 255000, "region": "경북", "description": "신라의 숨결을 느끼며 역사 속을 걷는 여행입니다. 박물관과 유적지를 탐방합니다.", "schedule": ["1일차: 신경주역 도착 -> 불국사 -> 석굴암", "2일차: 국립경주박물관 -> 대릉원 -> 황리단길"], "tags": ["#역사", "#문화탐방", "#걷기많음"]},
        {"id": 5, "type": "클래스", "title": "[우리 동네] 주말 요가 클래스", "price": 120000, "region": "서울 강남구", "description": "주말 아침, 요가와 명상으로 몸과 마음의 균형을 되찾는 시간입니다.", "schedule": ["매주 토요일 오전 10시 (총 4회)"], "tags": ["#요가", "#운동", "#정적활동"]},
        {"id": 6, "type": "여행", "title": "부산 진짜 밥상: 시장 속 이야기와 맛", "price": 289000, "region": "부산", "description": "부산의 활기찬 시장을 누비며 현지인의 진짜 밥상을 만나보는 미식 여행입니다.", "schedule": ["1박 2일 프로그램", "세부 일정은 문의"], "tags": ["#부산", "#시장", "#맛집", "#밥상"]},
        {"id": 7, "type": "여행", "title": "바다 냄새 따라 골목 밥상 투어", "price": 309000, "region": "부산", "description": "부산의 바다 내음 가득한 골목길에 숨겨진 로컬 밥상을 찾아 떠나는 투어입니다.", "schedule": ["1박 2일 프로그램", "세부 일정은 문의"], "tags": ["#부산", "#골목", "#밥상", "#투어", "#바다"]},
        {"id": 8, "type": "여행", "title": "기장 대게 한상, 바닷가를 품다", "price": 349000, "region": "부산 기장", "description": "기장의 명물, 신선한 대게를 푸짐한 한상차림으로 즐기는 스페셜 미식 여행.", "schedule": ["당일 또는 1박 2일", "대게 코스 요리 포함"], "tags": ["#부산", "#기장", "#대게", "#바다", "#맛집"]},
        {"id": 9, "type": "여행", "title": "부산 포구의 맛, 특별면과 회 한 접시", "price": 329000, "region": "부산", "description": "부산의 작은 포구에서 갓 잡은 신선한 회와 특별한 면 요리를 맛보는 여행입니다.", "schedule": ["1박 2일 프로그램", "세부 일정은 문의"], "tags": ["#부산", "#포구", "#회", "#면요리", "#맛집"]},
        {"id": 10, "type": "여행", "title": "바다 위 마카롱, 감성카페와 디저트 투어", "price": 279000, "region": "부산", "description": "오션뷰가 멋진 부산의 감성 카페들을 돌며 달콤한 디저트를 즐기는 힐링 투어.", "schedule": ["당일 코스", "유명 카페 3곳 방문"], "tags": ["#부산", "#카페", "#디저트", "#감성", "#바다"]},
        {"id": 11, "type": "여행", "title": "온천천 산책과 돼지국밥 이야기", "price": 269000, "region": "부산", "description": "온천천의 여유로운 풍경을 따라 산책하고, 부산의 소울푸드 돼지국밥을 맛봅니다.", "schedule": ["당일 또는 1박 2일", "산책과 식사 포함"], "tags": ["#부산", "#온천천", "#산책", "#돼지국밥", "#맛집"]},
        {"id": 12, "type": "여행", "title": "전주 한상 가득 미식기행", "price": 289000, "region": "전주", "description": "맛의 고장 전주에서 푸짐하게 차려진 전통 한정식을 맛보는 미식 기행입니다.", "schedule": ["1박 2일 프로그램", "한정식 코스 포함"], "tags": ["#전주", "#미식", "#한정식", "#맛집", "#밥상"]},
        {"id": 13, "type": "여행", "title": "광주 오미의 맛, 정겨운 밥상", "price": 309000, "region": "광주", "description": "광주의 다섯 가지 맛을 대표하는 음식들을 맛보며 남도의 정을 느끼는 밥상 투어.", "schedule": ["1박 2일 프로그램", "광주 5미 체험"], "tags": ["#광주", "#밥상", "#오미", "#맛집"]},
        {"id": 14, "type": "여행", "title": "춘천 닭갈비와 낭만의 시장길", "price": 299000, "region": "춘천", "description": "춘천의 명물 닭갈비를 맛보고, 낭만이 가득한 중앙시장을 거닐어보는 여행입니다.", "schedule": ["당일 또는 1박 2일", "닭갈비 식사 포함"], "tags": ["#춘천", "#닭갈비", "#시장", "#낭만"]},
        {"id": 15, "type": "여행", "title": "속초 바다 먹거리 산책", "price": 299000, "region": "속초", "description": "속초 중앙시장에서 신선한 해산물과 닭강정 등 다양한 먹거리를 즐기는 산책 코스.", "schedule": ["당일 또는 1박 2일", "시장 투어 포함"], "tags": ["#속초", "#바다", "#먹거리", "#산책", "#시장"]},
        {"id": 16, "type": "여행", "title": "제주 밥상, 바다와 오름 사이", "price": 379000, "region": "제주", "description": "제주의 바다와 오름이 선사하는 신선한 재료로 차려낸 건강한 제주 밥상을 만납니다.", "schedule": ["1박 2일 프로그램", "향토음식 체험"], "tags": ["#제주", "#밥상", "바다", "#오름", "#맛집"]},
        {"id": 17, "type": "여행", "title": "경주의 고도 밥상, 신라의 맛을 잇다", "price": 319000, "region": "경주", "description": "신라의 옛 도읍 경주에서 역사의 향기 가득한 고도의 밥상을 체험하는 여행.", "schedule": ["1박 2일 프로그램", "궁중 요리 체험"], "tags": ["#경주", "#고도", "#밥상", "#신라", "#역사"]},
        {"id": 18, "type": "여행", "title": "느린 숲길, 정선 힐링여행 2박 3일", "price": 309000, "region": "정선", "description": "강원도 정선의 고요한 숲길을 천천히 걸으며 자연 속에서 온전한 쉼을 얻는 여행.", "schedule": ["2박 3일 프로그램", "트레킹 포함"], "tags": ["#정선", "#숲길", "#힐링", "#여행", "#걷기많음"]},
        {"id": 19, "type": "여행", "title": "소리꾼 치유받는 남해 명상여행", "price": 329000, "region": "남해", "description": "남해의 아름다운 자연 속에서 명상과 소리 치유 프로그램을 통해 마음을 돌봅니다.", "schedule": ["1박 2일 프로그램", "명상 및 힐링 포함"], "tags": ["#남해", "#명상", "#여행", "#치유", "#힐링"]},
        {"id": 20, "type": "여행", "title": "고요한 하루, 강화도 템플스테이", "price": 259000, "region": "강화도", "description": "복잡한 일상에서 벗어나 강화도의 사찰에서 고요한 하루를 보내는 템플스테이입니다.", "schedule": ["1박 2일 템플스테이 프로그램 참여"], "tags": ["#강화도", "#템플스테이", "#고요", "#힐링", "#정적활동"]}
    ]
}

# --- 신규 API: 프론트엔드가 사용할 설정 정보를 제공 ---
@app.get("/config/options")
async def get_config_options():
    return JSONResponse(content=config_data)


# --- 기존 API 및 웹페이지 라우트 ---
@app.get("/siso", response_class=HTMLResponse)
async def show_siso_page(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.get("/wizard/recommendations")
async def get_recommendations(
    region: Optional[str] = None, 
    item_type: Optional[str] = None, 
    keywords: Optional[str] = None
):
    filtered_results = mock_data["journeys"]

    if region and region != "전체":
        filtered_results = [item for item in filtered_results if region == item["region"]]

    if item_type and item_type != "전체":
        filtered_results = [item for item in filtered_results if item["type"] == item_type]

    if keywords:
        user_keywords = [keyword.strip() for keyword in keywords.split(',')]
        scored_journeys = []
        for journey in filtered_results:
            score = 0
            item_tags = [tag.replace('#', '') for tag in journey.get('tags', [])]
            for keyword in user_keywords:
                if keyword in item_tags:
                    score += 1
        
            if score > 0:
                journey_with_score = journey.copy()
                journey_with_score['score'] = score
                scored_journeys.append(journey_with_score)
        
        final_results = sorted(scored_journeys, key=lambda x: x['score'], reverse=True)
        message = f"선택하신 조건에 대한 맞춤 여정입니다."
    else:
        final_results = filtered_results
        message = f"선택하신 조건에 대한 검색 결과입니다."

    if not final_results:
        return {"message": "조건에 맞는 여정을 찾지 못했어요. 다른 조건으로 검색해 보세요.", "results": []}

    return {"message": message, "results": final_results}
