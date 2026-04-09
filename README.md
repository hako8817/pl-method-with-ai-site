# Hako의 AI기획

기획자, PO, PM를 위한 AI기획 방법론과 구조화된 Knowledge를 공개하는 사이트다.

공개 사이트:
- https://hako8817.github.io/pl-method-with-ai-site/

이 저장소는 Quartz 기반 GitHub Pages 배포 저장소다.
원본 작성 기준은 별도 Obsidian Vault에 있고, 이 저장소에는 공개 대상 문서만 선별 반영한다.

## 다루는 범위
- 전체 프로세스
- 제안서 작성
- 기획 방법론
- PKM
- Knowledge

## 운영 원칙
- 원본 문서는 볼트에서 관리한다.
- 공개 저장소에는 선별된 `content`만 반영한다.
- `Decision OS`는 폴더 단위 비공개다.

## 브랜치
- `main`: 배포 기준 브랜치
- `draft`: 작업 및 검토 브랜치

## 로컬 확인
```bash
npm install
node ./quartz/bootstrap-cli.mjs build --serve -d content
```
