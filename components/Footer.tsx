export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-4 gap-8 mb-8">
          {/* 시소 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">시소</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>시소 소개</li>
              <li>채용</li>
            </ul>
          </div>

          {/* 고객센터 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">고객센터</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>음성ARS/전화 문의</li>
              <li>카카오 문의</li>
            </ul>
          </div>

          {/* 기타 서비스 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">기타 서비스</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>시소 파트너제휴 플랫폼</li>
              <li>관광 업체 등록</li>
              <li>클래스 등록</li>
            </ul>
          </div>

          {/* 보안 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">보안</h3>
          </div>
        </div>

        {/* 하단 정보 */}
        <div className="border-t border-gray-200 pt-6">
          <div className="text-xs text-gray-600 mb-3">
            <span>이용약관 | 개인정보처리방침 | 여행자보험안내 | 제휴문의</span>
          </div>

          <div className="text-xs text-gray-600 space-y-1">
            <p>© 2025 시소 Co., Ltd. All rights reserved.</p>
            <p>대표: 김여행 | 사업자등록번호: 123-45-67890</p>
            <p>주소: 서울특별시 성동구 여행로 77, 3층</p>
            <p>고객센터: 1588-0000 | 운영시간: 평일 09:00~18:00</p>
            <p>이메일 문의: help@siso.co.kr</p>
            <p className="mt-2">
              당사는 통신판매중개자로서 통신판매의 당사자가 아니며, 상품정보 및 거래에 대한 책임은 각 판매자에게
              있습니다.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
