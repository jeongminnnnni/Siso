from fastapi import FastAPI, Query
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from typing import List

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

content_db = [
    {
        "title": "내 목소리로 완성하는 오디오북 만들기",
        "category": "클래스",
        "location": "서울",
        "tags": ["오디오북", "녹음", "목소리", "창작"],
        "price": 32000,
        "rating": 4.7,
        "image": "https://via.placeholder.com/200x120?text=오디오북"
    },
    {
        "title": "감정이 머무는 사진, 필름카메라 클래스",
        "category": "클래스",
        "location": "서울",
        "tags": ["사진", "감성", "필름카메라"],
        "price": 45000,
        "rating": 4.8,
        "image": "https://via.placeholder.com/200x120?text=필름카메라"
    },
    {
        "title": "나만의 향수 만들기 - 기억의 향기 조향 클래스",
        "category": "클래스",
        "location": "서울",
        "tags": ["향기", "조향", "향수"],
        "price": 55000,
        "rating": 4.6,
        "image": "https://via.placeholder.com/200x120?text=향수+조향"
    },
    {
        "title": "에세이 한 문장 - 북카페 글쓰기 클래스",
        "category": "클래스",
        "location": "서울",
        "tags": ["글쓰기", "북카페", "에세이"],
        "price": 30000,
        "rating": 4.5,
        "image": "https://via.placeholder.com/200x120?text=글쓰기"
    },
    {
        "title": "도시 풍경 따라 드로잉 산책",
        "category": "클래스",
        "location": "서울",
        "tags": ["걷기", "드로잉", "그리기", "산책"],
        "price": 40000,
        "rating": 4.9,
        "image": "https://via.placeholder.com/200x120?text=드로잉"
    },
    {
        "title": "플라워클래스 with 커피",
        "category": "클래스",
        "location": "서울",
        "tags": ["꽃", "플로리스트", "플라워", "커피", "식물"],
        "price": 38000,
        "rating": 4.7,
        "image": "https://via.placeholder.com/200x120?text=플라워+커피"
    },
    {
        "title": "부산 진짜 밥상: 시장 속 이야기와 맛",
        "category": "여행",
        "location": "부산",
        "tags": ["바다", "", "", ""],
        "price": 289000,
        "rating": 4.8,
        "image": "https://via.placeholder.com/200x120?text=드로잉"
    },
    {
        "title": "바다 냄새 따라 골목 밥상 투어",
        "category": "여행",
        "location": "부산",
        "tags": ["", "", "", ""],
        "price": 309000,
        "rating": 4.5,
        "image": "https://via.placeholder.com/200x120?text=드로잉"
    },
    {
        "title": "기장 대게 한 상, 바닷가를 품다",
        "category": "여행",
        "location": "부산",
        "tags": ["", "", "", ""],
        "price": 349000,
        "rating": 4.6,
        "image": "https://via.placeholder.com/200x120?text=드로잉"
    },
    {
        "title": "부산 포구의 맛, 흑밀면과 회 한 접시",
        "category": "여행",
        "location": "부산",
        "tags": ["", "", "", ""],
        "price": 329000,
        "rating": 4.8,
        "image": "https://via.placeholder.com/200x120?text=드로잉"
    },
    {
        "title": "바다 위 마카롱, 감성 카페와 디저트 투어",
        "category": "여행",
        "location": "부산",
        "tags": ["", "", "", ""],
        "price": 279000,
        "rating": 4.5,
        "image": "https://via.placeholder.com/200x120?text=드로잉"
    },
    {
        "title": "온천 산책과 돼지국밥 이야기",
        "category": "여행",
        "location": "춘천",
        "tags": ["", "", "", ""],
        "price": 269000,
        "rating": 4.6,
        "image": "https://via.placeholder.com/200x120?text=드로잉"
    },
    {
        "title": "전주 한 상 가득 미식기행",
        "category": "여행",
        "location": "전주",
        "tags": ["", "", "", ""],
        "price": 309000,
        "rating": 4.5,
        "image": "https://via.placeholder.com/200x120?text=드로잉"
    },
    {
        "title": "춘천 닭갈비와 낭만의 시장길",
        "category": "여행",
        "location": "",
        "tags": ["", "", "", ""],
        "price": 299000,
        "rating": 4.6,
        "image": "https://via.placeholder.com/200x120?text=드로잉"
    },
    {
        "title": "속초 바다 먹거리 산책",
        "category": "여행",
        "location": "속초",
        "tags": ["", "", "", ""],
        "price": 299000,
        "rating": 4.8,
        "image": "https://via.placeholder.com/200x120?text=드로잉"
    },
    {
        "title": "제주의 밥상, 바다와 오름 사이",
        "category": "여행",
        "location": "",
        "tags": ["", "", "", ""],
        "price": 379000,
        "rating": 4.5,
        "image": "https://via.placeholder.com/200x120?text=드로잉"
    },
    {
        "title": "경주의 고도 밥상, 신라의 맛을 엿보다",
        "category": "여행",
        "location": "경주",
        "tags": ["", "", "", ""],
        "price": 319000,
        "rating": 4.5,
        "image": "https://via.placeholder.com/200x120?text=드로잉"
    },
    {
        "title": "",
        "category": "여행",
        "location": "",
        "tags": ["", "", "", ""],
        "price": 40000,
        "rating": 4.9,
        "image": "https://via.placeholder.com/200x120?text=드로잉"
    },
    {
        "title": "",
        "category": "여행",
        "location": "",
        "tags": ["", "", "", ""],
        "price": 40000,
        "rating": 4.9,
        "image": "https://via.placeholder.com/200x120?text=드로잉"
    },
    

]

@app.get("/")
def serve_html():
    return FileResponse("static/index.html")  
@app.get("/recommend-by-tags")
def recommend_by_tags(
    user_keywords: str = Query(..., description="키워드 (예: 사진,글쓰기)"),
    location: str = Query(..., description="지역 (예: 서울)")
):
    keywords = [k.strip() for k in user_keywords.split(",")]
    location = location.strip()

    matched_results = []

    for item in content_db:
        if item["location"] != location:
            continue

        if any(tag in keywords for tag in item["tags"]):
            matched_results.append({
                "title": item["title"],
                "matched_tags": [tag for tag in item["tags"] if tag in keywords],
                "price": item["price"],
                "rating": item["rating"],
                "image": item["image"]
            })

    if matched_results:
        return {
            "keywords_used": keywords,
            "location": location,
            "recommendations": matched_results
        }
    else:
        return {
            "message": "해당 키워드로 추천되는 콘텐츠가 없어요",
            "example": "/recommend-by-tags?user_keywords=사진,글쓰기&location=서울"
        }
