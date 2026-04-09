---
type: reference
status: active
source_figure: fig-pkm-flow-overview-v12.svg
updated: 2026-03-26
publish: true
publish_section: pkm
publish_order: 30
---

# fig-pkm-flow-overview-v12-table

`fig-pkm-flow-overview-v12.svg`의 텍스트를 읽기 쉬운 표로 옮긴 버전이다.

## 1. CODE 단계 개요

| CODE | 파트 | 핵심 의미 |
|---|---|---|
| C. Capture | PART 3 | 수집·기록 |
| O. Organize | PART 4 | 지식 구조화 |
| D. Distill | PART 5 | 연결·통합·패턴 발견 |
| E. Express | PART 6 | 검색·꺼내쓰기·산출 |

## 2. 실무 현장 기준 흐름

| 행 | C. Capture | O. Organize | D. Distill | E. Express |
|---|---|---|---|---|
| 실무 현장 | 회의·인터뷰·기술논의: 결정·발견·의문이 쏟아지는 순간 | 볼트에 쌓인 미분류 캡처들: 정리 안 된 Daily Note가 누적된 상태 | 분류된 노트, 아직 연결 안 된 상태: 같은 주제가 여러 파일에 흩어져 있음 | 볼트에서 필요한 지식을 찾아야 함: 회의 전·기획 착수 전·AI 전달 전 |

## 3. 기획자 행동

| 행 | C. Capture | O. Organize | D. Distill | E. Express |
|---|---|---|---|---|
| 기획자 행동 | Daily Note 열기, 사실 캡처, 의사결정 기록, 용어·개념 메모 | 노트 유형 지정, KT 10축 태그 설정, AI 생성 노트 확인·보정 | 링크 연결, KT 10축 내용 보완, 반복 패턴 확인, 주간 리뷰 실행 | 지식 탐색 → 컨텍스트 구성 → AI Draft 요청 → 검증·최종 판단 → 새 경험 기록 |

## 4. O. Organize의 지식 4영역

| 영역 | PART | 설명 |
|---|---|---|
| 맥락 | PART 2 정의 + PART 3~4 전개 | 의사결정 이력·판단 맥락 |
| 도메인 | PART 2 정의 + PART 4 전개 | 사용자·시장·비즈니스 |
| 기술 지식 | PART 2 정의 + PART 4 전개 | 기술부채·ADR |
| 관계 | PART 2 정의 + PART 7 전개 | 이해관계자·팀 |

## 5. E. Express 세부 흐름

| 순서 | 내용 |
|---|---|
| 1 | 지식 탐색: MOC·Dataview로 관련 Evidence·Decision 검색 |
| 2 | 컨텍스트 구성: Problem + Evidence + Decision |
| 3 | AI Draft 요청: Claude Code가 노트 직접 참조 후 Draft 생성 |
| 4 | 검증·최종 판단: AI 출력 검토, 수치 확인, 최종 판단은 사람이 수행 |
| 5 | 새 경험 기록: 발견·결정은 다시 Daily Note로 들어가 C로 순환 |

## 6. 도구 매핑

| 구간 | 도구 | 역할 |
|---|---|---|
| Capture | Obsidian in VSCode | Daily Note 작성 |
| Capture | Claude Code 연결 | AI가 볼트에 직접 접근 |
| Organize | Templater | 객체 7종 템플릿 자동화 |
| Organize | Claude Code | Daily Note 읽기, 분류, 노트 생성 |
| Distill | Dataview | 링크, 패턴 분석, KT축 미완성 조회 |
| Distill | Backlinks | 자동 양방향 링크 탐색 |
| Express | Dataview | 검색, MOC 뷰 탐색 |
| Express | Claude Code | 노트 직접 참조, Draft, 검증 |
| Express | Camunda | 프로세스·의사결정 정형화 |
| Express | Obsidian Search | 전문 검색, 태그 탐색 |

## 7. AI 협업 구조

| 구간       | AI 역할             | 대표 작업                                                               | 사람 역할               |
| -------- | ----------------- | ------------------------------------------------------------------- | ------------------- |
| Capture  | 입력 정리 + 지식 후보 추출  | 회의 메모 분해, 핵심 문장 추출, 5종 분기, 기존 노트 탐색, 신규/업데이트/보류 판단, Knowledge 초안 생성 | 맥락 부여, 승인/수정        |
| Organize | 구조화 + 메타데이터 보조    | note_type 제안, axis/area 추천, 템플릿 채움, 링크 후보 추천, MOC 후보 제안             | 분류 적합성 확인, 링크 최종 결정 |
| Distill  | 패턴 탐지 + 승격 후보 제안  | 고립 노트 탐지, 중복 후보 탐지, 체크리스트/가이드/방법론 승격 후보, 업데이트 신호 수집                 | 병합/승격/상태 변경 판단      |
| Express  | 검색 + 조합 + 초안 + 검토 | Context Package 구성, Draft, Critic, Retrieval, 옵션 비교, 자산화 초안 변환      | 최종 검증과 판단           |

### Capture에서 AI가 보조하는 세부 작업

| 작업 | 설명 |
|---|---|
| 1차 분기 | Evidence / Decision / Knowledge / Action / Hold 분류 |
| Knowledge 트리 기본 작성 | 용어/개념/산출물/기법/프레임워크 등 형식 제안 |
| 기존 노트 탐색 | exact match, 동의어, 유사 주제 노트 탐색 |
| 확장 후보 제안 | 지금은 한 줄 메모지만 체크리스트/가이드/방법론으로 자랄 후보 표시 |
| 누락 검토 | 근거 없는 결정, 출처 없는 주장, 연결되지 않은 액션 표시 |

### Express에서의 AI 기여

| 역할        | 설명                      |
| --------- | ----------------------- |
| Draft     | PRD 초안, 보고자료, 온보딩 문서 생성 |
| Critic    | 누락 검토, 완성도 검증, 리스크 탐색   |
| Retrieval | 유사 의사결정 패턴 검색, 연결 추천    |

## 8. 결과물

| 항목 | 내용 |
|---|---|
| 산출물 | PRD 초안, 임원 보고자료, 팀 온보딩 자료, 의사결정 가이드, 포트폴리오 |
| 핵심 메시지 | 볼트의 지식이 판단 근거가 된다 |
| 순환 원리 | Express에서 나온 새 경험·결정은 다시 Capture로 돌아간다 |

## 9. KT 10축 요약

| 4영역 | KT 축 |
|---|---|
| 맥락 | KT-01 Strategy, KT-03 Definition/PRD, KT-04 Design, KT-05 Delivery |
| 도메인 | KT-02 Discovery, KT-06 Growth, KT-07 Data |
| 기술 지식 | KT-08 AI Product, KT-09 Tech |
| 관계 | KT-10 Org & Leadership |
