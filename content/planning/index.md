---
type:
category: "#project"
status: active
priority: Medium
created: 2026-04-12
updated: 2026-04-12 21:09
---
# 들어가며: 바이브 코딩 시대에 왜 이 책이 필요한가

먼저 인정할 것은 인정하자. 바이브 코딩은 실제로 작동한다.

AI 코딩 도구는 이미 개발 실무의 한가운데로 들어와 있다.[1][2][3] 2025년 Stack Overflow 개발자 설문에서는 응답자의 84%가 개발 과정에서 AI 도구를 사용하거나 사용할 계획이라고 답했다.[1] Microsoft Research가 2025년에 발표한 세 개의 현장 실험 통합 분석에서는 4,867명의 개발자를 대상으로 AI 코딩 보조 도구의 효과를 측정한 결과, 완료된 작업 수가 평균 26.08% 증가했다.[2] GitHub가 공개한 무작위 비교 연구에서도 Copilot 사용 그룹은 모든 10개 단위 테스트를 통과할 가능성이 53.2% 더 높았고, 코드 승인 가능성도 5% 더 높았다.[3] 이제 “AI가 실제로 코드를 만드는가”는 더 이상 가설이 아니라, 이미 관찰되고 있는 변화에 가깝다.[1][2][3]

하지만 여기서 곧바로 “그렇다면 문서는 이제 필요 없지 않은가”로 넘어가면 중요한 지점을 놓치게 된다. 생산성이 높아진 것과 결과를 그대로 믿어도 된다는 것은 다른 문제다.[1][4] 같은 Stack Overflow 설문에서는 AI 출력의 정확도를 신뢰하지 않는 비율이 46%였고, 신뢰한다는 응답은 33%였다.[1] Microsoft Research의 또 다른 2025년 연구에서도 AI 코딩 도구를 지속적으로 사용한 개발자들은 도구를 더 유용하고 즐겁게 느끼게 되었지만, AI가 생성한 코드의 신뢰성에 대한 인식은 달라지지 않았다. 연구진은 생산성 향상과 함께 더 높은 수준의 검토와 비판적 평가가 필요하다고 정리했다.[4]

그래서 이 책의 질문은 단순하다. AI가 코드를 만들 수 있는가가 아니라, 우리는 AI에게 무엇을 얼마나 정확하게 전달하고 있는가다.

“예약 앱 만들어줘”라는 한 문장은 출발점으로는 충분할 수 있다. 그러나 실무의 기준으로는 대체로 부족하다. 어떤 문제를 해결하려는지, 이번 릴리스 범위는 어디까지인지, 무엇을 먼저 구현해야 하는지, 성능과 권한 기준은 무엇인지, 예외 상황은 어떻게 처리할 것인지, 무엇을 완료로 볼 것인지가 정리되지 않으면 AI는 빈칸을 자기 방식대로 채운다. 이 문제는 새로운 것도 아니다. PMI는 요구사항 관리 연구에서 원래 목표를 달성하지 못한 프로젝트의 거의 절반인 47%가 부정확한 요구사항 관리 때문에 실패한다고 보고했고, 커뮤니케이션 문제가 프로젝트 실패의 주요 원인일 때 75%의 조직이 요구사항 관리가 가장 크게 영향을 받는 영역이라고 밝혔다.[5] AI 시대에는 이 오래된 문제가 더 빠르고 더 크게 드러날 뿐이다.[5]

그래서 바이브 코딩에 붙는 산출물은 문서를 늘리는 절차가 아니다. 오히려 추측을 줄이고 재작업을 줄이기 위한 최소한의 구조다. 중요한 것은 문서의 개수가 아니라 문서의 역할이다. Anthropic은 공식 가이드에서 모델을 “맥락을 모르는 유능하지만 아주 새로운 직원”처럼 생각하라고 설명하며, 원하는 바를 더 정확하게 설명할수록 더 좋은 결과가 나온다고 안내한다.[6] 또한 프롬프트를 다듬기 전에 먼저 성공 기준을 정의하고, 그 기준을 실제로 시험할 방법을 마련하라고 권장한다.[6] 즉 좋은 결과는 말재주보다 먼저, 명확한 맥락과 검증 가능한 기준에서 나온다.[6]

이 점은 실제 도구의 설계 방식에서도 확인된다. GitHub Copilot 공식 문서는 저장소별 custom instructions가 프로젝트를 이해하는 방식뿐 아니라 변경 사항을 어떻게 build, test, validate 할지에 대한 추가 맥락을 제공한다고 설명한다.[7] 또 저장소 전체 지침, 경로별 지침, `AGENTS.md` 같은 에이전트 지침 파일을 둘 수 있고, Copilot이 작업할 때는 가장 가까운 `AGENTS.md`가 우선 적용된다고 밝히고 있다.[7] 실무 도구 자체가 이미 “한 줄 프롬프트”보다 “지속되는 프로젝트 맥락”을 전제로 움직이고 있는 셈이다.[7]

이런 흐름을 보면, AI 시대의 산출물은 보고용 문서에서 실행 입력물로 역할이 바뀌고 있다고 보는 편이 더 정확하다. 문제 정의서와 범위 정의서는 왜 이 일을 하는지와 어디까지 할지를 고정한다. PRD와 우선순위 기준은 무엇을 먼저 만들지 정리한다. NFR, 정책서, 시나리오, 인수 조건은 기능 뒤에 있는 규칙과 품질 기준을 분명하게 만든다. 그리고 사양서, API 명세서, 프로토타입은 그것을 실제 구현 가능한 형태로 이어준다. 이런 변화는 방법론 차원에서만 일어나는 것이 아니다. OpenAI는 Structured Outputs를 통해 모델 응답이 사용자가 정의한 JSON Schema를 따르도록 보장하는 기능을 제공하고 있으며, 필수 키 누락이나 잘못된 enum 값 같은 문제를 줄일 수 있다고 설명한다.[8] 이제 입력과 출력 모두에서 형식 없는 설명보다 구조 있는 명세가 더 중요해지고 있다.[8]

물론 모든 상황에 같은 수준의 문서가 필요한 것은 아니다. 혼자 만드는 작은 프로토타입이나 내부 도구처럼 요구사항이 단순하고, 만드는 사람이 전체 맥락을 충분히 알고 있으며, 예외 처리도 많지 않은 경우에는 바이브 코딩만으로도 매우 빠르게 전진할 수 있다. 이 책은 그런 상황에까지 무거운 문서 체계를 강요하려는 것이 아니다. 오히려 어떤 상황에서 최소 세트로 시작하고, 언제부터 구조를 더 세워야 하는지를 구분하려는 책에 가깝다.

문제는 현실의 서비스가 대체로 그렇게 단순하지 않다는 데 있다. 할인 정책, 회원 등급, 채널별 예외, 권한 처리, 결제 실패 재시도, 승인 흐름, 운영 기준이 얽히기 시작하면 상황은 금세 달라진다. AI는 일반적인 패턴을 잘 생성할 수 있지만, 회사 고유의 규칙과 예외를 스스로 알지는 못한다. 그래서 설명이 비어 있으면 구현도 비게 되고, 무엇이 빠졌는지는 대개 뒤늦게 드러난다. GitHub가 Copilot에 저장소별 지침, 파일별 지침, 에이전트 지침을 별도로 넣도록 지원하는 이유도 바로 여기에 있다.[7] 복잡한 서비스일수록 프로젝트 맥락을 기계가 읽을 수 있게 남기는 일이 필요하기 때문이다.[7]

좋은 바이브 코딩에는 공통점이 있다. 잘하는 사람들은 AI에게 모호하게 말하지 않는다. 명확하고 구조화된 방식으로 요구사항을 전달한다. 예를 들어 “로그인 실패는 3회까지 허용하고, 이후 15분간 계정을 잠근다. 소셜 로그인은 이 정책을 적용하지 않는다. 관리자 계정은 첫 실패 시점부터 보안팀에 알림을 보낸다. 비밀번호를 재설정하면 실패 횟수는 초기화한다”와 같은 입력은 겉으로 보면 자연어지만, 실제로는 이미 정책이 구조화된 상태다. 적용 대상과 제외 대상이 구분되어 있고, 상태 변화 조건이 분명하며, 예외가 따로 적혀 있다. Anthropic이 더 정확하게 설명할수록 더 좋은 결과가 나온다고 말하고, OpenAI가 아예 스키마 기반 출력을 제품 기능으로 제공하는 이유도 같은 방향을 가리킨다.[6][8]

결국 바이브 코딩의 품질은 입력의 품질에 달려 있다. AI는 초안을 더 빠르게 만들 수 있고, 문서 형식을 바꾸고, 테스트 케이스 후보를 만들고, 누락 가능성을 점검하는 데도 큰 도움을 준다.[2][3][4] 그러나 무엇을 만들 것인지, 무엇이 더 중요한지, 어디까지를 예외로 둘 것인지, 어떤 품질 기준을 적용할 것인지, 그리고 최종 책임을 누가 질 것인지는 여전히 사람의 판단 영역이다.[4][5][6] Microsoft Research의 현장 연구들이 보여주는 것도 같은 방향이다. AI는 개발자의 생산성과 체감 효율을 높여주지만, 신뢰와 검토의 문제까지 자동으로 해결해주지는 않는다.[2][4]

그래서 이 책에서 말하는 산출물은 기획자가 혼자 작성해야 하는 문서 묶음이 아니다. 그것은 AI에게 줄 수 있는 가장 정확한 맥락이고, AI의 출력을 검토하는 기준이며, 팀이 같은 방향을 보게 만드는 구조다. 처음 목차를 보면 RIB, PRD, 정책서, BPMN, DMN, 사양서, 테스트케이스 같은 이름이 많아 보여 부담스러울 수 있다. 그러나 이 책은 모든 팀이 처음부터 모든 문서를 다 만들라고 말하지 않는다. 각 팀의 복잡도와 협업 수준에 맞는 최소 세트부터 시작하자는 쪽에 가깝다.

마지막으로 이 책의 핵심을 한 문장으로 정리하면 이렇다. AI 시대에 기획자가 해야 할 일은 타이핑이 아니라 판단이다.

바이브 코딩은 기획을 없앤 것이 아니다. 오히려 기획의 가치가 어디에 있는지를 더 선명하게 보여주었다. 이제 기획자가 직접 해야 하는 일은 문장을 많이 쓰는 것이 아니라, 무엇을 왜 어떻게 만들지 판단하고, 그 판단을 팀과 AI가 함께 사용할 수 있는 구조로 남기는 일이다. 이 책은 바로 그 구조를 만드는 방법에 대한 이야기다.

## 출처

[1] Stack Overflow, **2025 Developer Survey – AI**. 개발 과정에서 AI 도구를 사용하거나 사용할 계획이라는 응답 84%, AI 출력 정확도를 신뢰하지 않는 비율 46%, 신뢰한다는 응답 33%가 제시되어 있다. ([Stack Overflow](https://survey.stackoverflow.co/2025/ai?utm_source=chatgpt.com "AI | 2025 Stack Overflow Developer Survey"))

[2] Microsoft Research, **The Effects of Generative AI on High-Skilled Work: Evidence from Three Field Experiments with Software Developers**. Microsoft, Accenture, Fortune 100 기업의 개발자 4,867명을 대상으로 한 통합 분석에서 완료된 작업 수가 평균 26.08% 증가했다고 보고했다. ([Microsoft](https://www.microsoft.com/en-us/research/publication/the-effects-of-generative-ai-on-high-skilled-work-evidence-from-three-field-experiments-with-software-developers/?lang=zh-cn&utm_source=chatgpt.com "The Effects of Generative AI on High-Skilled Work: Evidence from Three Field Experiments with Software Developers - Microsoft Research"))

[3] GitHub Blog, **Does GitHub Copilot improve code quality? Here’s what the data says**. Copilot 사용 그룹이 모든 10개 단위 테스트를 통과할 가능성이 53.2% 더 높고, 코드 승인 가능성도 5% 더 높다고 설명한다. ([The GitHub Blog](https://github.blog/news-insights/research/does-github-copilot-improve-code-quality-heres-what-the-data-says/?utm_source=chatgpt.com "Does GitHub Copilot improve code quality? Here’s what the data says - The GitHub Blog"))

[4] Microsoft Research, **Dear Diary: A Randomized Controlled Trial of Generative AI Coding Tools in the Workplace**. 지속 사용 시 유용성과 즐거움에 대한 인식은 증가했지만, AI 생성 코드의 신뢰성에 대한 인식은 달라지지 않았고, 더 높은 수준의 검토와 비판적 평가가 필요하다고 정리한다. ([Microsoft](https://www.microsoft.com/en-us/research/publication/dear-diary-a-randomized-controlled-trial-of-generative-ai-coding-tools-in-the-workplace/?utm_source=chatgpt.com "Dear Diary: A Randomized Controlled Trial of Generative AI Coding Tools in the Workplace - Microsoft Research"))

[5] PMI, **Pulse of the Profession: Requirements Management — A Core Competency for Project and Program Success**. 목표를 달성하지 못한 프로젝트의 47%가 부정확한 요구사항 관리 때문에 실패했고, 커뮤니케이션 문제가 주요 실패 원인일 때 75%의 조직이 요구사항 관리가 가장 크게 영향을 받는 영역이라고 보고했다. ([프로젝트 관리 협회](https://www.pmi.org/-/media/pmi/documents/public/pdf/learning/thought-leadership/pulse/requirements-management.pdf?utm_source=chatgpt.com "PMI’s
PULSE of the
PROFESSION® In-Depth ReportREQU"))

[6] Anthropic Docs, **Be clear, direct, and detailed** 및 **Prompt engineering overview**. 모델을 맥락을 모르는 새로운 직원처럼 보고, 더 정확한 설명과 충분한 맥락, 성공 기준과 검증 방식의 정의를 먼저 두라고 권장한다. ([Claude API Docs](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/be-clear-and-direct?utm_source=chatgpt.com "Be clear, direct, and detailed - Anthropic"))

[7] GitHub Docs, **Adding repository custom instructions for GitHub Copilot**. 저장소 전체 지침, 경로별 지침, `AGENTS.md` 기반 에이전트 지침을 지원하며, 가장 가까운 `AGENTS.md`가 우선 적용된다고 설명한다. 또한 지침이 Copilot 요청에 자동으로 추가된다고 명시한다. ([GitHub Docs](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions?tool=copilotcli&utm_source=chatgpt.com "Adding repository custom instructions for GitHub Copilot - GitHub Docs"))

[8] OpenAI Docs, **Structured model outputs**. Structured Outputs는 모델 응답이 개발자가 정의한 JSON Schema를 따르도록 보장하며, 필수 키 누락이나 잘못된 enum 값을 줄이는 구조화된 출력 방식을 제공한다고 설명한다. ([OpenAI Platform](https://platform.openai.com/docs/guides/structured-outputs?utm_source=chatgpt.com "Structured model outputs | OpenAI API"))

